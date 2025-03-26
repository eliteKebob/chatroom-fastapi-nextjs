"use client";
import { useState } from "react";

export default function SendMessageForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ws = new WebSocket(process.env.WS_URL!);
    ws.onopen = () => {
      ws.send(message);
      ws.close();
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
