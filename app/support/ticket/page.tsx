"use client";

import TicketForm from "@/components/support/ticket/TicketForm";

export default function TicketPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Sarabun:wght@300;400;500;600&display=swap');

        .ticket-root {
          font-family: 'Sarabun', sans-serif;
          min-height: 100vh;
          background: linear-gradient(160deg, #06101e 0%, #0a1628 100%);
          padding: 64px 24px;
        }

        .ticket-inner {
          max-width: 640px;
          margin: 0 auto;
        }

        .ticket-eyebrow {
          font-family: 'Share Tech Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #38bdf8;
          margin-bottom: 16px;
          opacity: 0.7;
        }

        .ticket-title {
          font-family: 'Share Tech Mono', monospace;
          font-size: clamp(24px, 3.5vw, 38px);
          color: #e0f2fe;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .ticket-title span { color: #38bdf8; }

        .ticket-desc {
          font-size: 15px;
          color: rgba(160, 200, 230, 0.5);
          font-weight: 300;
          margin-bottom: 40px;
        }

        .ticket-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(56,189,248,0.4), transparent);
          margin-bottom: 40px;
        }
      `}</style>

      <div className="ticket-root">
        <div className="ticket-inner">

          <div className="ticket-eyebrow">// Issue Reporting</div>
          <h1 className="ticket-title">Submit <span>Ticket</span></h1>
          <p className="ticket-desc">แจ้งปัญหาถึงทีมผู้พัฒนา — ทีมงานจะตอบกลับภายใน 24 ชั่วโมง</p>
          <div className="ticket-divider" />

          <TicketForm />

        </div>
      </div>
    </>
  );
}