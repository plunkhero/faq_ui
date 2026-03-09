export default function ChatMessage({ message }: { message: any }) {
  const isUser = message.role === "user";

  return (
    <>
      <style>{`
        .msg-wrap { display: flex; }
        .msg-wrap.user { justify-content: flex-end; }
        .msg-wrap.bot { justify-content: flex-start; }

        .msg-bubble {
          max-width: 78%;
          padding: 8px 12px;
          border-radius: 3px;
          font-family: 'Sarabun', sans-serif;
          font-size: 13px;
          line-height: 1.6;
        }

        .msg-bubble.user {
          background: #38bdf8;
          color: #040c18;
          font-weight: 500;
          border-bottom-right-radius: 0;
        }

        .msg-bubble.bot {
          background: rgba(56,189,248,0.07);
          border: 1px solid rgba(56,189,248,0.18);
          color: #bae6fd;
          border-bottom-left-radius: 0;
        }

        .msg-label {
          font-family: 'Share Tech Mono', monospace;
          font-size: 8px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 3px;
          opacity: 0.45;
          color: #38bdf8;
        }
        .msg-label.user { text-align: right; color: rgba(56,189,248,0.6); }
      `}</style>
      <div className={`msg-wrap ${isUser ? "user" : "bot"}`}>
        <div>
          <div className={`msg-label ${isUser ? "user" : ""}`}>
            {isUser ? "YOU" : "AI SYS"}
          </div>
          <div className={`msg-bubble ${isUser ? "user" : "bot"}`}>
            {message.content}
          </div>
        </div>
      </div>
    </>
  );
}