"use client";

import Link from "next/link";
import { useChat } from "@/components/support/chatbot/ChatProvider";
import { useEffect, useState } from "react";

export default function SupportHero() {
  const { toggleChat, open } = useChat();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Sarabun:wght@300;400;500;600&display=swap');

        .hero-root {
          font-family: 'Sarabun', sans-serif;
          min-height: 480px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 24px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, #06101e 0%, #0b1a2e 50%, #071220 100%);
        }

        /* Grid background */
        .hero-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* Radial glow center */
        .hero-root::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(56,189,248,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        .hero-tag {
          font-family: 'Share Tech Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.35em;
          color: #38bdf8;
          text-transform: uppercase;
          border: 1px solid rgba(56,189,248,0.3);
          padding: 4px 14px;
          border-radius: 2px;
          background: rgba(56,189,248,0.06);
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.6s ease 0.1s;
        }

        .hero-tag.show { opacity: 1; transform: translateY(0); }

        .hero-title {
          font-family: 'Share Tech Mono', monospace;
          font-size: clamp(28px, 5vw, 48px);
          color: #e0f2fe;
          letter-spacing: 0.08em;
          line-height: 1.15;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.7s ease 0.25s;
        }

        .hero-title.show { opacity: 1; transform: translateY(0); }

        .hero-title span {
          color: #38bdf8;
          position: relative;
        }

        .hero-title span::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0; right: 0;
          height: 1px;
          background: #38bdf8;
          opacity: 0.5;
        }

        .hero-desc {
          font-size: 15px;
          line-height: 1.75;
          color: rgba(180, 210, 235, 0.65);
          max-width: 480px;
          font-weight: 300;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.7s ease 0.4s;
        }

        .hero-desc.show { opacity: 1; transform: translateY(0); }

        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.7s ease 0.55s;
        }

        .hero-actions.show { opacity: 1; transform: translateY(0); }

        .btn-primary {
          font-family: 'Share Tech Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #0a0f1e;
          background: #38bdf8;
          border: none;
          padding: 13px 28px;
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%);
          pointer-events: none;
        }

        .btn-primary:hover {
          background: #7dd3fc;
          box-shadow: 0 0 24px rgba(56,189,248,0.4);
          transform: translateY(-1px);
        }

        .btn-secondary {
          font-family: 'Share Tech Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(180, 210, 235, 0.75);
          background: transparent;
          border: 1px solid rgba(56,189,248,0.3);
          padding: 13px 28px;
          border-radius: 3px;
          text-decoration: none;
          transition: all 0.25s ease;
          display: inline-block;
        }

        .btn-secondary:hover {
          color: #e0f2fe;
          border-color: rgba(56,189,248,0.7);
          background: rgba(56,189,248,0.08);
          box-shadow: 0 0 16px rgba(56,189,248,0.12);
          transform: translateY(-1px);
        }

        .hero-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          opacity: 0;
          transition: all 0.7s ease 0.7s;
        }

        .hero-meta.show { opacity: 1; }

        .meta-item {
          font-family: 'Share Tech Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          color: rgba(56,189,248,0.4);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .meta-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 6px #22c55e;
          animation: blink 2s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }

        .meta-sep {
          width: 1px;
          height: 16px;
          background: rgba(56,189,248,0.15);
        }
      `}</style>

      <div className="hero-root">
        <div className="hero-inner">

          <div className={`hero-tag ${visible ? "show" : ""}`}>
            // AI Support System v2.0
          </div>

          <h1 className={`hero-title ${visible ? "show" : ""}`}>
            Rtarf <span>AI</span> Support
          </h1>

          <p className={`hero-desc ${visible ? "show" : ""}`}>
            หากคุณพบปัญหาในการใช้งานระบบ ทีมงานพร้อมช่วยเหลือคุณผ่าน AI Chat
            หรือการแจ้งปัญหาถึงผู้พัฒนาโดยตรง
          </p>

          <div className={`hero-actions ${visible ? "show" : ""}`}>
            <button onClick={toggleChat} className="btn-primary">
              ▶ แชทกับ AI Support
            </button>
            <Link href="/support/ticket" className="btn-secondary">
              ⊕ แจ้งปัญหาถึงผู้พัฒนา
            </Link>
          </div>

          <div className={`hero-meta ${visible ? "show" : ""}`}>
            <div className="meta-item">
              <div className="meta-dot" />
              AI Online
            </div>
            <div className="meta-sep" />
            <div className="meta-item">Response &lt; 5s</div>
            <div className="meta-sep" />
            <div className="meta-item">24 / 7 Active</div>
          </div>

        </div>
      </div>
    </>
  );
}