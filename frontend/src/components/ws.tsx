"use client";

import { useSubscribeToMessagesQuery } from "@/services/api";
import { useEffect, useState } from "react";

interface ReceivedMessage {
  name: string;
  msg: string;
}

export default function WebSocketDisplay() {
  const [messages, setMessages] = useState<ReceivedMessage[] | null>(null);
  const { data: entity } = useSubscribeToMessagesQuery();

  useEffect(() => {
    if (entity && entity.length && JSON.parse(entity)) {
      setMessages((prev) => {
        if (prev) {
          return [...prev, JSON.parse(entity)];
        } else {
          return [JSON.parse(entity)];
        }
      });
    }
  }, [entity]);

  return (
    <div>
      <h2>Chat Room</h2>
      {!messages ? (
        <p>Your chat messages will be displayed here.</p>
      ) : (
        messages.map((message, i) => (
          <p key={i} style={{
            wordBreak: "break-word"
          }}>
            {message.name}: {message.msg}
          </p>
        ))
      )}
    </div>
  );
}
