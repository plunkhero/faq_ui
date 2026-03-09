import Link from "next/link";

export default function EscalateButton() {
  return (
    <>
      <style>{`
        .escalate-link {
          font-family: 'Share Tech Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(56,189,248,0.35);
          text-decoration: none;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .escalate-link:hover { color: #38bdf8; }
        .escalate-link::before {
          content: '⊕';
          font-size: 10px;
        }
      `}</style>
      <Link href="/support/ticket" className="escalate-link">
        Contact Developer Instead
      </Link>
    </>
  );
}