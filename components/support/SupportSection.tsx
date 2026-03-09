"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
    ),
    tag: "NAVIGATE",
    title: "กลับหน้าหลัก",
    desc: "กลับไปยังหน้าหลักของระบบ Rtarf AI",
    href: "/",
    cta: "Go Home ›",
    accent: "#38bdf8",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
    tag: "REPORT",
    title: "Submit Ticket",
    desc: "แจ้งปัญหาถึงทีมผู้พัฒนา รับการตอบกลับภายใน 24 ชั่วโมง",
    href: "/support/ticket",
    cta: "Open Ticket ›",
    accent: "#f59e0b",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    tag: "KNOWLEDGE",
    title: "FAQ",
    desc: "คำถามที่พบบ่อยและวิธีแก้ไขปัญหาเบื้องต้นด้วยตัวเอง",
    href: "/support/faq",
    cta: "Browse FAQ ›",
    accent: "#22c55e",
  },
];

export default function SupportSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Sarabun:wght@300;400;500;600&display=swap');

        .ss-root {
          background: linear-gradient(180deg, #0a1628 0%, #06101e 100%);
          padding: 64px 24px 80px;
          position: relative;
          overflow: hidden;
        }

        .ss-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .ss-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .ss-eyebrow {
          font-family: 'Share Tech Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(56,189,248,0.5);
          text-align: center;
          margin-bottom: 12px;
        }

        .ss-heading {
          font-family: 'Share Tech Mono', monospace;
          font-size: clamp(20px, 3vw, 28px);
          color: #e0f2fe;
          text-align: center;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 48px;
        }

        .ss-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 768px) {
          .ss-grid { grid-template-columns: 1fr; }
        }

        .ss-card {
          border: 1px solid rgba(56,189,248,0.12);
          border-radius: 4px;
          background: rgba(56,189,248,0.03);
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease, border-color 0.25s, background 0.25s, box-shadow 0.25s;
        }

        .ss-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ss-card:nth-child(2) { transition-delay: 0.1s; }
        .ss-card:nth-child(3) { transition-delay: 0.2s; }

        .ss-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .ss-card:hover {
          background: rgba(56,189,248,0.07);
          border-color: rgba(56,189,248,0.3);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(56,189,248,0.08);
          transform: translateY(-3px);
        }

        .ss-card:hover::before { opacity: 1; }

        .ss-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid;
          transition: all 0.25s;
        }

        .ss-card:hover .ss-card-icon {
          box-shadow: 0 0 16px currentColor;
        }

        .ss-card-tag {
          font-family: 'Share Tech Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          opacity: 0.5;
        }

        .ss-card-title {
          font-family: 'Share Tech Mono', monospace;
          font-size: 17px;
          letter-spacing: 0.08em;
          color: #e0f2fe;
          text-transform: uppercase;
        }

        .ss-card-desc {
          font-family: 'Sarabun', sans-serif;
          font-size: 14px;
          color: rgba(160, 200, 230, 0.55);
          line-height: 1.75;
          font-weight: 300;
          flex: 1;
        }

        .ss-card-cta {
          font-family: 'Share Tech Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-top: 8px;
          transition: letter-spacing 0.2s;
        }

        .ss-card:hover .ss-card-cta {
          letter-spacing: 0.28em;
        }

        .ss-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(56,189,248,0.2) 50%, transparent);
          margin-bottom: 64px;
        }
      `}</style>

      <div className="ss-root">
        <div className="ss-inner">

          <div className="ss-divider" />

          <div className="ss-eyebrow">// Quick Access</div>
          <div className="ss-heading">What do you need?</div>

          <div className="ss-grid">
            {cards.map((card, i) => (
              <Link
                key={i}
                href={card.href}
                className={`ss-card ${visible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* Top accent bar */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                  background: card.accent, opacity: 0.6,
                }} />

                {/* Icon */}
                <div
                  className="ss-card-icon"
                  style={{
                    color: card.accent,
                    borderColor: `${card.accent}33`,
                    background: `${card.accent}10`,
                  }}
                >
                  {card.icon}
                </div>

                {/* Tag */}
                <div className="ss-card-tag" style={{ color: card.accent }}>
                  {card.tag}
                </div>

                {/* Title */}
                <div className="ss-card-title">{card.title}</div>

                {/* Desc */}
                <div className="ss-card-desc">{card.desc}</div>

                {/* CTA */}
                <div className="ss-card-cta" style={{ color: card.accent }}>
                  {card.cta}
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}