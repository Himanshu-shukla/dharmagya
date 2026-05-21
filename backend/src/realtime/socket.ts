import type { Server } from "socket.io";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { env } from "../config/env.js";
import { ChatMessage, CallSession, User } from "../models/index.js";

const TokenSchema = z.object({ sub: z.string() });

export function registerRealtime(io: Server) {
  io.use(async (socket, next) => {
    try {
      const token = String(socket.handshake.auth?.token ?? "").replace(/^Bearer\s+/i, "");
      const payload = TokenSchema.parse(jwt.verify(token, env.jwtSecret));
      const user = await User.findById(payload.sub).lean();
      if (!user) throw new Error("Unauthorized");
      socket.data.user = {
        id: String(user._id),
        name: user.name,
        roles: user.roles,
      };
      next();
    } catch {
      next(new Error("Unauthorized"));
    }
  });

  io.on("connection", (socket) => {
    socket.emit("presence:online", socket.data.user);

    socket.on("chat:join", ({ roomId }) => {
      socket.join(room(roomId));
      socket.to(room(roomId)).emit("presence:joined", { roomId, user: socket.data.user });
    });

    socket.on("chat:leave", ({ roomId }) => {
      socket.leave(room(roomId));
      socket.to(room(roomId)).emit("presence:left", { roomId, user: socket.data.user });
    });

    socket.on("chat:typing", ({ roomId, isTyping }) => {
      socket.to(room(roomId)).emit("chat:typing", { roomId, isTyping, user: socket.data.user });
    });

    socket.on("chat:message", async ({ roomId, text, type = "text" }, ack) => {
      try {
        const message = await ChatMessage.create({
          room: roomId,
          sender: socket.data.user.id,
          senderRole: socket.data.user.roles[0] ?? "customer",
          type,
          text,
          readBy: [socket.data.user.id],
        });
        const payload = { ...message.toObject(), id: String(message._id), _id: undefined };
        io.to(room(roomId)).emit("chat:message", payload);
        ack?.({ ok: true, message: payload });
      } catch (error) {
        ack?.({ ok: false, error: error instanceof Error ? error.message : "Message failed" });
      }
    });

    socket.on("chat:read", async ({ roomId, messageIds }) => {
      await ChatMessage.updateMany({ _id: { $in: messageIds } }, { $addToSet: { readBy: socket.data.user.id } });
      socket.to(room(roomId)).emit("chat:read", { roomId, messageIds, userId: socket.data.user.id });
    });

    socket.on("call:join", ({ callId }) => {
      socket.join(call(callId));
      socket.to(call(callId)).emit("call:participant-joined", { callId, user: socket.data.user });
    });

    socket.on("call:ringing", ({ callId }) => {
      socket.to(call(callId)).emit("call:ringing", { callId, from: socket.data.user });
    });

    socket.on("call:accept", async ({ callId }) => {
      await CallSession.findByIdAndUpdate(callId, { status: "accepted", startedAt: new Date() });
      io.to(call(callId)).emit("call:accept", { callId, by: socket.data.user });
    });

    socket.on("call:reject", async ({ callId }) => {
      await CallSession.findByIdAndUpdate(callId, { status: "rejected", endedAt: new Date() });
      io.to(call(callId)).emit("call:reject", { callId, by: socket.data.user });
    });

    socket.on("call:offer", ({ callId, offer }) => {
      socket.to(call(callId)).emit("call:offer", { callId, offer, from: socket.data.user.id });
    });

    socket.on("call:answer", ({ callId, answer }) => {
      socket.to(call(callId)).emit("call:answer", { callId, answer, from: socket.data.user.id });
    });

    socket.on("call:ice-candidate", ({ callId, candidate }) => {
      socket.to(call(callId)).emit("call:ice-candidate", { callId, candidate, from: socket.data.user.id });
    });

    socket.on("call:status", ({ callId, status }) => {
      socket.to(call(callId)).emit("call:status", { callId, status, from: socket.data.user.id });
    });

    socket.on("call:end", async ({ callId }) => {
      const endedAt = new Date();
      const session = await CallSession.findById(callId);
      if (session) {
        const startedAt = session.startedAt ?? session.createdAt ?? endedAt;
        session.status = "ended";
        session.endedAt = endedAt;
        session.durationSeconds = Math.max(0, Math.ceil((endedAt.getTime() - startedAt.getTime()) / 1000));
        session.billedAmount = Math.ceil(Math.max(1, session.durationSeconds / 60)) * session.ratePerMinute;
        await session.save();
      }
      io.to(call(callId)).emit("call:end", { callId, by: socket.data.user });
    });
  });
}

function room(id: string) {
  return `chat:${id}`;
}

function call(id: string) {
  return `call:${id}`;
}
