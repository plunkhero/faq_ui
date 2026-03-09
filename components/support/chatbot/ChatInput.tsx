"use client";

import { useState } from "react";

export default function ChatInput({ onSend }: { onSend: (message: string) => void }) {
  const [text, setText] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text);
    setText("");
  }

  return (
    <>
      <style>{`
        .chat-input-wrap {
          border-top: 1px solid rgba(56,189,248,0.12);
          padding: 12px;
          display: flex;
          gap: 8px;
          background: rgba(4, 12, 24, 0.8);
        }
        .chat-input {
          flex: 1;
          background: rgba(56,189,248,0.04);
          border: 1px solid rgba(56,189,248,0.2);
          border-radius: 3px;
          padding: 8px 12px;
          font-family: 'Sarabun', sans-serif;
          font-size: 13px;
          color: #e0f2fe;
          outline: none;
          transition: all 0.2s;
        }
        .chat-input::placeholder { color: rgba(56,189,248,0.3); }
        .chat-input:focus {
          border-color: rgba(56,189,248,0.6);
          background: rgba(56,189,248,0.07);
          box-shadow: 0 0 0 2px rgba(56,189,248,0.08);
        }
        .chat-send-btn {
          font-family: 'Share Tech Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: #38bdf8;
          color: #040c18;
          border: none;
          border-radius: 3px;
          padding: 8px 14px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .chat-send-btn:hover {
          background: #7dd3fc;
          box-shadow: 0 0 12px rgba(56,189,248,0.35);
        }
        .chat-send-btn:active { transform: scale(0.97); }
      `}</style>
      <form onSubmit={handleSubmit} className="chat-input-wrap">
        <input
          className="chat-input"
          placeholder="พิมพ์ข้อความ..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="chat-send-btn">Send ›</button>
      </form>
    </>
  );
}