"use client";

import { useState, useRef, useEffect } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import EscalateButton from "./EscalateButton";
import { sendMessage } from "@/services/chatbotService";

export default function ChatWindow() {
  const [messages, setMessages] = useState<any[]>([
    { role: "bot", content: "สวัสดีครับ 👋 มีอะไรให้ช่วยได้บ้าง?" },
  ]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend(message: string) {
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setLoading(true);
    const res = await sendMessage(message);
    setMessages((prev) => [...prev, { role: "bot", content: res.answer }]);
    setLoading(false);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Sarabun:wght@300;400;500&display=swap');
        .chat-window {
          width: 320px;
          height: 440px;
          background: linear-gradient(160deg, #07111f 0%, #0a1628 100%);
          border: 1px solid rgba(56,189,248,0.2);
          border-radius: 6px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(56,189,248,0.06);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .chat-header {
          padding: 12px 14px;
          border-bottom: 1px solid rgba(56,189,248,0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(56,189,248,0.04);
        }
        .chat-header-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .chat-status-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 6px #22c55e;
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .chat-title {
          font-family: 'Share Tech Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #e0f2fe;
        }
        .chat-subtitle {
          font-family: 'Share Tech Mono', monospace;
          font-size: 8px;
          letter-spacing: 0.15em;
          color: rgba(56,189,248,0.4);
          text-transform: uppercase;
        }
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          scrollbar-width: thin;
          scrollbar-color: rgba(56,189,248,0.15) transparent;
        }
        .chat-typing {
          display: flex;
          gap: 4px;
          align-items: center;
          padding: 8px 12px;
          background: rgba(56,189,248,0.06);
          border: 1px solid rgba(56,189,248,0.15);
          border-radius: 3px;
          width: fit-content;
        }
        .typing-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #38bdf8;
          animation: typing 1.2s ease-in-out infinite;
        }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing { 0%,60%,100%{opacity:0.2;transform:scale(0.8)} 30%{opacity:1;transform:scale(1)} }
        .chat-footer-bar {
          padding: 6px 14px;
          display: flex;
          justify-content: center;
          border-top: 1px solid rgba(56,189,248,0.06);
        }
      `}</style>

      <div className="chat-window">
        <div className="chat-header">
          <div className="chat-header-left">
            <div className="chat-status-dot" />
            <div>
              <div className="chat-title">AI Support</div>
              <div className="chat-subtitle">Rtarf System Online</div>
            </div>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <ChatMessage key={i} message={msg} />
          ))}
          {loading && (
            <div className="chat-typing">
              <div className="typing-dot" />
              <div className="typing-dot" />
              <div className="typing-dot" />
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <ChatInput onSend={handleSend} />

        <div className="chat-footer-bar">
          <EscalateButton />
        </div>
      </div>
    </>
  );
}