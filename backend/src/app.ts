import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env.js";
import { errorHandler, notFound } from "./middleware/error.js";
import authRouter from "./routes/auth.js";
import { catalogRouter } from "./routes/catalog.js";
import { sessionsRouter } from "./routes/sessions.js";
import { walletRouter } from "./routes/wallet.js";

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: env.corsOrigin.split(","), credentials: true }));
  app.use(express.json({ limit: "1mb" }));
  app.use(morgan(env.nodeEnv === "test" ? "tiny" : "dev"));
  app.use(rateLimit({ windowMs: 60_000, limit: 200 }));

  app.get("/health", (_req, res) => res.json({ ok: true, service: "dharmagya-backend" }));
  app.use("/api/auth", authRouter);
  app.use("/api", catalogRouter);
  app.use("/api/wallet", walletRouter);
  app.use("/api/sessions", sessionsRouter);

  app.use(notFound);
  app.use(errorHandler);

  return app;
}
