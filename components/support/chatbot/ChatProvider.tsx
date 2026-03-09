"use client";

import { createContext, useContext, useState } from "react";
import ChatWidget from "./ChatWidget";

const ChatContext = createContext<any>(null);

export function ChatProvider({ children }: { children: React.ReactNode }) {

  const [open, setOpen] = useState(false);

  function toggleChat() {
    setOpen((prev) => !prev);
  }

  return (
    <ChatContext.Provider value={{ open, toggleChat }}>
      {children}

      <ChatWidget open={open} setOpen={setOpen} />
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}