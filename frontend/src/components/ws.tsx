"use client";

import { useSubscribeToMessagesQuery } from "@/services/api";

export default function WebSocketDisplay() {
  const { data: message } = useSubscribeToMessagesQuery();

  return (
    <div>
      <h2>WebSocket Messages</h2>
      <p>{message || "Waiting for messages..."}</p>
    </div>
  );
}
