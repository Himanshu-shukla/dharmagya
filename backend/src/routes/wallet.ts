import { Router } from "express";
import { z } from "zod";
import { requireAuth } from "../middleware/auth.js";
import { validateBody } from "../middleware/validate.js";
import { WalletEntry } from "../models/index.js";

export const walletRouter = Router();

walletRouter.use(requireAuth);

walletRouter.get("/", async (req, res) => {
  const entries = await WalletEntry.find({ user: req.user!.id }).sort({ createdAt: -1 }).lean();
  res.json({ balance: balance(entries), entries: entries.map((entry) => ({ ...entry, id: String(entry._id), _id: undefined })) });
});

const TopUpSchema = z.object({ amount: z.number().positive() });

walletRouter.post("/top-up", validateBody(TopUpSchema), async (req, res) => {
  const entry = await WalletEntry.create({ user: req.user!.id, type: "credit", amount: req.body.amount, reason: "mock_top_up" });
  const entries = await WalletEntry.find({ user: req.user!.id }).lean();
  res.status(201).json({ balance: balance(entries), entry: { ...entry.toObject(), id: String(entry._id), _id: undefined } });
});

export async function debitWallet(userId: string, amount: number, reason: string, referenceType: string, referenceId: unknown) {
  if (amount <= 0) return null;
  return WalletEntry.create({ user: userId, type: "debit", amount, reason, referenceType, referenceId });
}

function balance(entries: Array<{ type: string; amount: number }>) {
  return entries.reduce((sum, entry) => sum + (entry.type === "credit" ? entry.amount : -entry.amount), 0);
}
