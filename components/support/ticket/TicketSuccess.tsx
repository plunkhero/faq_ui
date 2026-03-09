export default function TicketSuccess({ ticketId }: { ticketId: string }) {
  return (
    <>
      <style>{`
        .ts-wrap {
          padding: 40px 32px;
          border: 1px solid rgba(56,189,248,0.2);
          border-radius: 4px;
          background: rgba(56,189,248,0.04);
          text-align: center;
        }
        .ts-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }
        .ts-title {
          font-family: 'Share Tech Mono', monospace;
          font-size: 18px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #e0f2fe;
          margin-bottom: 8px;
        }
        .ts-desc {
          font-size: 14px;
          color: rgba(160,200,230,0.55);
          margin-bottom: 24px;
        }
        .ts-id-label {
          font-family: 'Share Tech Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(56,189,248,0.45);
          margin-bottom: 6px;
        }
        .ts-id {
          font-family: 'Share Tech Mono', monospace;
          font-size: 20px;
          letter-spacing: 0.2em;
          color: #38bdf8;
          background: rgba(56,189,248,0.07);
          border: 1px solid rgba(56,189,248,0.25);
          border-radius: 3px;
          padding: 10px 20px;
          display: inline-block;
        }
      `}</style>

      <div className="ts-wrap">
        <div className="ts-icon">✓</div>
        <div className="ts-title">Ticket Submitted</div>
        <p className="ts-desc">ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง</p>
        <div className="ts-id-label">Ticket ID</div>
        <div className="ts-id">{ticketId}</div>
      </div>
    </>
  );
}