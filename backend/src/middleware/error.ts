import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export function notFound(req: Request, _res: Response, next: NextFunction) {
  next(Object.assign(new Error(`Route not found: ${req.method} ${req.originalUrl}`), { status: 404 }));
}

export function errorHandler(error: unknown, _req: Request, res: Response, _next: NextFunction) {
  void _next;
  if (error instanceof ZodError) {
    return res.status(400).json({
      error: "Validation failed",
      details: error.issues.map((issue) => ({ path: issue.path.join("."), message: issue.message })),
    });
  }

  const err = error instanceof Error ? error : new Error("Unexpected error");
  const status = typeof (err as Error & { status?: unknown }).status === "number" ? (err as Error & { status: number }).status : 500;

  res.status(status).json({
    error: status >= 500 ? "Internal server error" : err.message,
  });
}
