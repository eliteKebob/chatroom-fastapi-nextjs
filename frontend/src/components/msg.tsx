"use client";

import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function SendMessageForm() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({ name: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.length > 0 && user.name.length > 0) {
      const ws = new WebSocket(process.env.WS_URL!);
      ws.onopen = () => {
        ws.send(JSON.stringify({ name: user.name, msg: message }));
        ws.close();
        setMessage("");
      };
    }
  };

  return (
    <React.Fragment>
      <div>
        <TextField
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          size="small"
          placeholder="Username"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          size="small"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
        />
        <Button type="submit" variant="contained">
          Send
        </Button>
      </form>
    </React.Fragment>
  );
}
