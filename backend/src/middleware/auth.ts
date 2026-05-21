import type { NextFunction, Request, Response } from "express";
import jwt, { type Secret, type SignOptions } from "jsonwebtoken";
import { z } from "zod";
import { env } from "../config/env.js";
import { User, type Role } from "../models/index.js";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  roles: Role[];
};

declare module "express-serve-static-core" {
  interface Request {
    user?: AuthUser;
  }
}

const JwtPayloadSchema = z.object({
  sub: z.string(),
});

export function signToken(user: { _id: unknown; roles: Role[] }) {
  const options: SignOptions = { expiresIn: env.jwtExpiresIn as SignOptions["expiresIn"] };
  return jwt.sign({ roles: user.roles }, env.jwtSecret as Secret, {
    ...options,
    subject: String(user._id),
  });
}

export async function requireAuth(req: Request, _res: Response, next: NextFunction) {
  try {
    const token = req.header("authorization")?.replace(/^Bearer\s+/i, "");
    if (!token) throw Object.assign(new Error("Missing bearer token"), { status: 401 });

    const payload = JwtPayloadSchema.parse(jwt.verify(token, env.jwtSecret));
    const user = await User.findById(payload.sub).lean();
    if (!user) throw Object.assign(new Error("User not found"), { status: 401 });

    req.user = {
      id: String(user._id),
      name: user.name,
      email: user.email,
      roles: user.roles as Role[],
    };
    next();
  } catch (error) {
    next(Object.assign(error instanceof Error ? error : new Error("Unauthorized"), { status: 401 }));
  }
}

export function requireRole(...roles: Role[]) {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user) return next(Object.assign(new Error("Unauthorized"), { status: 401 }));
    if (!req.user.roles.some((role) => roles.includes(role))) {
      return next(Object.assign(new Error("Forbidden"), { status: 403 }));
    }
    next();
  };
}
