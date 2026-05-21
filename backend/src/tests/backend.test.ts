import { createServer } from "node:http";
import assert from "node:assert/strict";
import { after, before, describe, it } from "node:test";
import { MongoMemoryServer } from "mongodb-memory-server";
import request from "supertest";
import { Server } from "socket.io";
import { io as Client } from "socket.io-client";
import { createApp } from "../app.js";
import { connectDb, disconnectDb } from "../config/db.js";
import { registerRealtime } from "../realtime/socket.js";
import { ProviderProfile } from "../models/index.js";

let mongo: MongoMemoryServer;

describe("backend", () => {
  before(async () => {
    mongo = await MongoMemoryServer.create();
    await connectDb(mongo.getUri());
  });

  after(async () => {
    await disconnectDb();
    await mongo.stop();
  });

  it("signs up, lists astrologers, and creates a chat session", async () => {
    const app = createApp();
    const signup = await request(app)
      .post("/api/auth/signup")
      .send({ name: "Test User", email: "test@example.com", password: "password123" })
      .expect(201);

    await ProviderProfile.create({
      kind: "astrologer",
      name: "Demo Astro",
      slug: "demo-astro",
      expertise: ["Vedic"],
      languages: ["Hindi"],
      ratePerMinute: 50,
    });

    const list = await request(app).get("/api/astrologers").expect(200);
    assert.equal(list.body.astrologers.length, 1);

    const session = await request(app)
      .post("/api/sessions/chat")
      .set("Authorization", `Bearer ${signup.body.token}`)
      .send({ providerId: list.body.astrologers[0].id })
      .expect(201);
    assert.ok(session.body.room.id);
  });

  it("authenticates sockets and persists chat messages", async () => {
    const app = createApp();
    const signup = await request(app)
      .post("/api/auth/signup")
      .send({ name: "Socket User", email: "socket@example.com", password: "password123" })
      .expect(201);
    const provider = await ProviderProfile.create({ kind: "astrologer", name: "Socket Astro", slug: "socket-astro", ratePerMinute: 50 });
    const session = await request(app)
      .post("/api/sessions/chat")
      .set("Authorization", `Bearer ${signup.body.token}`)
      .send({ providerId: String(provider._id) });

    const httpServer = createServer(app);
    const io = new Server(httpServer);
    registerRealtime(io);
    await new Promise<void>((resolve) => httpServer.listen(0, resolve));
    const address = httpServer.address();
    assert.equal(typeof address, "object");
    const port = (address as { port: number }).port;
    const client = Client(`http://localhost:${port}`, { auth: { token: signup.body.token } });
    await new Promise<void>((resolve) => client.on("connect", resolve));
    client.emit("chat:join", { roomId: session.body.room.id });
    const ack = await new Promise<{ ok: boolean }>((resolve) => client.emit("chat:message", { roomId: session.body.room.id, text: "Namaste" }, resolve));
    assert.equal(ack.ok, true);
    client.close();
    io.close();
    await new Promise<void>((resolve) => httpServer.close(() => resolve()));
  });
});
