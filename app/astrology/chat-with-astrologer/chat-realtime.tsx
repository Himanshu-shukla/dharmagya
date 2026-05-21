"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { io, type Socket } from "socket.io-client";
import { API_URL, SOCKET_URL } from "@/lib/api";

type Message = {
  id: string;
  text: string;
  senderRole: string;
  createdAt?: string;
};

export function ChatRealtime({ token, providerId }: { token: string; providerId: string }) {
  const [roomId, setRoomId] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [status, setStatus] = useState(token ? "Connecting" : "Seed backend to enable live chat");

  const socket = useMemo<Socket | null>(() => {
    if (!token) return null;
    return io(SOCKET_URL, { auth: { token }, autoConnect: false });
  }, [token]);

  useEffect(() => {
    if (!token || !socket || providerId.startsWith("demo-")) return;

    let mounted = true;
    const liveSocket = socket;
    async function start() {
      try {
        const response = await fetch(`${API_URL}/sessions/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify({ providerId }),
        });
        if (!response.ok) throw new Error("Unable to start chat");
        const data = await response.json();
        if (!mounted) return;
        setRoomId(data.room.id);
        setStatus("Live chat ready");
        liveSocket.connect();
        liveSocket.emit("chat:join", { roomId: data.room.id });
      } catch {
        setStatus("Live backend unavailable");
      }
    }

    liveSocket.on("chat:message", (message: Message) => setMessages((current) => [...current, message]));
    start();

    return () => {
      mounted = false;
      if (roomId) liveSocket.emit("chat:leave", { roomId });
      liveSocket.disconnect();
    };
  }, [providerId, roomId, socket, token]);

  function send(event: FormEvent) {
    event.preventDefault();
    const trimmed = text.trim();
    if (!socket || !roomId || !trimmed) return;
    socket.emit("chat:message", { roomId, text: trimmed }, (ack: { ok: boolean }) => {
      if (ack.ok) setText("");
    });
  }

  return (
    <form className="border-t border-border bg-surface px-4 py-3 sm:px-5" onSubmit={send}>
      {messages.length ? (
        <div className="mb-3 space-y-2 rounded-md border border-border bg-white px-3 py-2 text-sm">
          {messages.map((message) => (
            <p key={message.id} className="font-semibold text-primary-deep">
              <span className="text-muted">{message.senderRole}: </span>
              {message.text}
            </p>
          ))}
        </div>
      ) : null}
      <p className="mb-2 text-[11px] font-extrabold uppercase text-muted">{status}</p>
      <div className="flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
        <label className="sr-only" htmlFor="chat-message">
          Type your message
        </label>
        <input
          id="chat-message"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Type your message..."
          className="min-h-9 flex-1 bg-transparent text-sm font-semibold text-foreground outline-none placeholder:text-muted/60"
        />
        <button
          type="submit"
          className="h-9 rounded-full bg-primary px-4 text-xs font-extrabold text-white shadow-sm transition hover:bg-primary-hover disabled:opacity-50"
          disabled={!roomId}
        >
          Send
        </button>
      </div>
    </form>
  );
}
