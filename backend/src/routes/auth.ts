import bcrypt from "bcryptjs";
import { Router } from "express";
import { z } from "zod";
import { requireAuth, signToken } from "../middleware/auth.js";
import { validateBody } from "../middleware/validate.js";
import { User, WalletEntry, type Role } from "../models/index.js";

const router = Router();

const SignupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  password: z.string().min(6),
  role: z.enum(["customer", "astrologer", "pandit", "admin"]).default("customer"),
});

router.post("/signup", validateBody(SignupSchema), async (req, res, next) => {
  try {
    const existing = await User.findOne({ email: req.body.email });
    if (existing) throw Object.assign(new Error("Email already registered"), { status: 409 });

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      roles: [req.body.role] as Role[],
      passwordHash: await bcrypt.hash(req.body.password, 10),
    });

    await WalletEntry.create({ user: user._id, type: "credit", amount: 500, reason: "welcome_credit" });

    res.status(201).json({ token: signToken(user), user: publicUser(user) });
  } catch (error) {
    next(error);
  }
});

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

router.post("/login", validateBody(LoginSchema), async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !(await user.comparePassword(req.body.password))) {
      throw Object.assign(new Error("Invalid email or password"), { status: 401 });
    }
    res.json({ token: signToken(user), user: publicUser(user) });
  } catch (error) {
    next(error);
  }
});

router.get("/me", requireAuth, (req, res) => {
  res.json({ user: req.user });
});

function publicUser(user: { _id: unknown; name: string; email: string; roles: Role[] }) {
  return { id: String(user._id), name: user.name, email: user.email, roles: user.roles };
}

export default router;
