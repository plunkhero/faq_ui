"use client";

import { useState } from "react";
import { submitTicket } from "@/services/ticketService";
import TicketSuccess from "./TicketSuccess";
import TicketCategory from "./TicketCategory";

export default function TicketForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    const res = await submitTicket({ email, message });
    setSuccess(res.ticketId);
    setLoading(false);
  }

  if (success) return <TicketSuccess ticketId={success} />;

  return (
    <>
      <style>{`
        .tf-label {
          font-family: 'Share Tech Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(56,189,248,0.6);
          margin-bottom: 6px;
          display: block;
        }
        .tf-input, .tf-textarea, .tf-select {
          width: 100%;
          background: rgba(56,189,248,0.04);
          border: 1px solid rgba(56,189,248,0.2);
          border-radius: 3px;
          padding: 12px 14px;
          font-family: 'Sarabun', sans-serif;
          font-size: 14px;
          color: #e0f2fe;
          outline: none;
          transition: all 0.2s;
          box-sizing: border-box;
        }
        .tf-input::placeholder, .tf-textarea::placeholder {
          color: rgba(56,189,248,0.25);
        }
        .tf-input:focus, .tf-textarea:focus, .tf-select:focus {
          border-color: rgba(56,189,248,0.55);
          background: rgba(56,189,248,0.07);
          box-shadow: 0 0 0 3px rgba(56,189,248,0.07);
        }
        .tf-textarea {
          resize: vertical;
          min-height: 120px;
        }
        .tf-select {
          appearance: none;
          cursor: pointer;
        }
        .tf-select option {
          background: #0a1628;
          color: #e0f2fe;
        }
        .tf-field { margin-bottom: 20px; }
        .tf-submit {
          font-family: 'Share Tech Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: #38bdf8;
          color: #040c18;
          border: none;
          border-radius: 3px;
          padding: 13px 32px;
          cursor: pointer;
          transition: all 0.2s;
          width: 100%;
          font-weight: 600;
        }
        .tf-submit:hover:not(:disabled) {
          background: #7dd3fc;
          box-shadow: 0 0 20px rgba(56,189,248,0.35);
        }
        .tf-submit:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>

      <form onSubmit={handleSubmit}>

        <div className="tf-field">
          <label className="tf-label">Email Address</label>
          <input
            className="tf-input"
            placeholder="your@email.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="tf-field">
          <label className="tf-label">Category</label>
          <TicketCategory className="tf-select" />
        </div>

        <div className="tf-field">
          <label className="tf-label">Describe Your Problem</label>
          <textarea
            className="tf-textarea"
            placeholder="อธิบายปัญหาที่พบโดยละเอียด..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="tf-submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Ticket ›"}
        </button>

      </form>
    </>
  );
}