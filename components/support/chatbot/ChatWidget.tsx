"use client";

import ChatWindow from "./ChatWindow";

export default function ChatWidget({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
        .chat-float-window {
          position: fixed;
          bottom: 88px;
          right: 24px;
          z-index: 50;
          animation: slideUp 0.25s ease;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .chat-fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 52px;
          height: 52px;
          border-radius: 4px;
          background: #38bdf8;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(56,189,248,0.35);
          transition: all 0.2s;
          z-index: 50;
        }
        .chat-fab:hover {
          background: #7dd3fc;
          box-shadow: 0 0 28px rgba(56,189,248,0.5);
          transform: scale(1.05);
        }
        .chat-fab svg { color: #040c18; }
      `}</style>

      {open && (
        <div className="chat-float-window">
          <ChatWindow />
        </div>
      )}

      <button onClick={() => setOpen(!open)} className="chat-fab">
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>
    </>
  );
}