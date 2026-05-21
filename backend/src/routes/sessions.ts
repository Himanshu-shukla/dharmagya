import { Router } from "express";
import { z } from "zod";
import { requireAuth } from "../middleware/auth.js";
import { validateBody } from "../middleware/validate.js";
import { ChatMessage, ChatRoom, CallSession, ProviderProfile, toObjectId } from "../models/index.js";
import { debitWallet } from "./wallet.js";

export const sessionsRouter = Router();

sessionsRouter.use(requireAuth);

const StartSchema = z.object({ providerId: z.string() });

sessionsRouter.post("/chat", validateBody(StartSchema), async (req, res, next) => {
  try {
    const provider = await ProviderProfile.findById(req.body.providerId);
    if (!provider) throw Object.assign(new Error("Provider not found"), { status: 404 });
    const room = await ChatRoom.create({
      customer: req.user!.id,
      provider: provider._id,
      ratePerMinute: provider.ratePerMinute,
    });
    res.status(201).json({ room: normalize(room.toObject()) });
  } catch (error) {
    next(error);
  }
});

sessionsRouter.get("/chat/:roomId/messages", async (req, res, next) => {
  try {
    const messages = await ChatMessage.find({ room: toObjectId(req.params.roomId) }).sort({ createdAt: 1 }).lean();
    res.json({ messages: messages.map(normalize) });
  } catch (error) {
    next(error);
  }
});

sessionsRouter.post("/chat/:roomId/end", async (req, res, next) => {
  try {
    const room = await ChatRoom.findById(req.params.roomId);
    if (!room) throw Object.assign(new Error("Chat room not found"), { status: 404 });
    room.status = "ended";
    room.endedAt = new Date();
    await room.save();
    const minutes = Math.max(1, Math.ceil((room.endedAt.getTime() - room.startedAt.getTime()) / 60000));
    await debitWallet(req.user!.id, minutes * room.ratePerMinute, "chat_session", "ChatRoom", room._id);
    res.json({ room: normalize(room.toObject()) });
  } catch (error) {
    next(error);
  }
});

sessionsRouter.post("/call", validateBody(StartSchema), async (req, res, next) => {
  try {
    const provider = await ProviderProfile.findById(req.body.providerId);
    if (!provider) throw Object.assign(new Error("Provider not found"), { status: 404 });
    const call = await CallSession.create({
      customer: req.user!.id,
      provider: provider._id,
      ratePerMinute: provider.ratePerMinute,
      status: "ringing",
    });
    res.status(201).json({ call: normalize(call.toObject()) });
  } catch (error) {
    next(error);
  }
});

sessionsRouter.post("/call/:callId/end", async (req, res, next) => {
  try {
    const call = await CallSession.findById(req.params.callId);
    if (!call) throw Object.assign(new Error("Call session not found"), { status: 404 });
    call.status = "ended";
    call.endedAt = new Date();
    const startedAt = call.startedAt ?? call.createdAt;
    call.durationSeconds = Math.max(0, Math.ceil((call.endedAt.getTime() - startedAt.getTime()) / 1000));
    call.billedAmount = Math.ceil(Math.max(1, call.durationSeconds / 60)) * call.ratePerMinute;
    await call.save();
    await debitWallet(req.user!.id, call.billedAmount, "call_session", "CallSession", call._id);
    res.json({ call: normalize(call.toObject()) });
  } catch (error) {
    next(error);
  }
});

function normalize<T extends { _id?: unknown }>(doc: T) {
  return { ...doc, id: String(doc._id), _id: undefined };
}
