import dotenv from "dotenv";

dotenv.config();

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: Number(process.env.BACKEND_PORT ?? process.env.PORT ?? 4000),
  mongoUri: process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/dharmagya",
  jwtSecret: process.env.JWT_SECRET ?? "change-this-dharmagya-secret",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "7d",
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
};
