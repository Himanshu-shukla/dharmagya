"use client";

import { useEffect, useMemo, useState } from "react";
import { io, type Socket } from "socket.io-client";
import { API_URL, SOCKET_URL } from "@/lib/api";

export function CallRealtime({ token, providerId }: { token: string; providerId: string }) {
  const [callId, setCallId] = useState("");
  const [status, setStatus] = useState(token ? "Preparing call" : "Seed backend to enable live calling");
  const socket = useMemo<Socket | null>(() => (token ? io(SOCKET_URL, { auth: { token }, autoConnect: false }) : null), [token]);

  useEffect(() => {
    if (!token || !socket || providerId.startsWith("demo-")) return;

    let activeCallId = "";
    const liveSocket = socket;
    async function start() {
      try {
        const response = await fetch(`${API_URL}/sessions/call`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify({ providerId }),
        });
        if (!response.ok) throw new Error("Unable to start call");
        const data = await response.json();
        activeCallId = data.call.id;
        setCallId(activeCallId);
        setStatus("Ringing");
        liveSocket.connect();
        liveSocket.emit("call:join", { callId: activeCallId });
        liveSocket.emit("call:ringing", { callId: activeCallId });
      } catch {
        setStatus("Live backend unavailable");
      }
    }

    liveSocket.on("call:accept", () => setStatus("Talking"));
    liveSocket.on("call:reject", () => setStatus("Rejected"));
    liveSocket.on("call:end", () => setStatus("Ended"));
    liveSocket.on("call:offer", () => setStatus("WebRTC offer received"));
    liveSocket.on("call:answer", () => setStatus("WebRTC answer received"));
    liveSocket.on("call:ice-candidate", () => setStatus("ICE candidate exchanged"));
    start();

    return () => {
      if (activeCallId) liveSocket.emit("call:end", { callId: activeCallId });
      liveSocket.disconnect();
    };
  }, [providerId, socket, token]);

  function accept() {
    if (!socket || !callId) return;
    socket.emit("call:accept", { callId });
    setStatus("Talking");
  }

  function end() {
    if (!socket || !callId) return;
    socket.emit("call:end", { callId });
    setStatus("Ended");
  }

  return (
    <div className="mx-auto mb-4 flex max-w-3xl items-center justify-between gap-3 rounded-md border border-border bg-white px-4 py-3 text-xs font-extrabold text-primary-deep shadow-sm">
      <span>Realtime: {status}</span>
      <div className="flex gap-2">
        <button type="button" onClick={accept} disabled={!callId} className="h-8 rounded-md bg-primary px-3 text-white disabled:opacity-50">
          Accept
        </button>
        <button type="button" onClick={end} disabled={!callId} className="h-8 rounded-md border border-border px-3 disabled:opacity-50">
          End
        </button>
      </div>
    </div>
  );
}
