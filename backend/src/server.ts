import { createServer } from "node:http";
import { Server } from "socket.io";
import { createApp } from "./app.js";
import { connectDb } from "./config/db.js";
import { env } from "./config/env.js";
import { registerRealtime } from "./realtime/socket.js";

async function main() {
  await connectDb();
  const httpServer = createServer(createApp());
  const io = new Server(httpServer, {
    cors: { origin: env.corsOrigin.split(","), credentials: true },
  });

  registerRealtime(io);

  httpServer.listen(env.port, () => {
    console.log(`Dharmagya backend listening on http://localhost:${env.port}`);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
