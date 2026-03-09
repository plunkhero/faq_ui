"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Sarabun:wght@300;400;600&display=swap');

        .nav-root {
          font-family: 'Sarabun', sans-serif;
          position: sticky;
          top: 0;
          z-index: 50;
          transition: all 0.3s ease;
        }

        .nav-root.scrolled {
          box-shadow: 0 4px 32px rgba(0,0,0,0.18);
        }

        .nav-bar {
          background: linear-gradient(135deg, #0a0f1e 0%, #0d1a2e 60%, #0a1628 100%);
          border-bottom: 1px solid rgba(56, 189, 248, 0.15);
          position: relative;
          overflow: hidden;
        }

        .nav-bar::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 80px,
            rgba(56, 189, 248, 0.03) 80px,
            rgba(56, 189, 248, 0.03) 81px
          );
          pointer-events: none;
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .logo-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          group: true;
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          border: 1.5px solid rgba(56, 189, 248, 0.6);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(56, 189, 248, 0.07);
          position: relative;
          transition: all 0.3s;
        }

        .logo-icon::after {
          content: '';
          position: absolute;
          inset: 3px;
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: 3px;
        }

        .logo-icon svg {
          color: #38bdf8;
        }

        .logo-wrap:hover .logo-icon {
          background: rgba(56, 189, 248, 0.15);
          border-color: rgba(56, 189, 248, 0.9);
          box-shadow: 0 0 16px rgba(56, 189, 248, 0.25);
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
          line-height: 1;
          gap: 2px;
        }

        .logo-name {
          font-family: 'Share Tech Mono', monospace;
          font-size: 18px;
          letter-spacing: 0.12em;
          color: #f0f9ff;
          text-transform: uppercase;
        }

        .logo-sub {
          font-size: 9px;
          letter-spacing: 0.25em;
          color: #38bdf8;
          text-transform: uppercase;
          opacity: 0.7;
        }

        .badge {
          font-family: 'Share Tech Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.15em;
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.4);
          padding: 2px 7px;
          border-radius: 2px;
          text-transform: uppercase;
          background: rgba(56, 189, 248, 0.06);
          animation: pulse-badge 3s ease-in-out infinite;
        }

        @keyframes pulse-badge {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.55; }
        }

        .center-divider {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .sys-status {
          font-family: 'Share Tech Mono', monospace;
          font-size: 10px;
          color: rgba(56, 189, 248, 0.45);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .sys-time {
          font-family: 'Share Tech Mono', monospace;
          font-size: 13px;
          color: rgba(56, 189, 248, 0.7);
          letter-spacing: 0.1em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .nav-link {
          font-family: 'Share Tech Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(200, 220, 240, 0.55);
          text-decoration: none;
          padding: 6px 14px;
          border-radius: 3px;
          border: 1px solid transparent;
          transition: all 0.25s ease;
          position: relative;
        }

        .nav-link::before {
          content: attr(data-label);
          position: absolute;
          top: -1px; left: -1px; right: -1px; bottom: -1px;
          opacity: 0;
        }

        .nav-link:hover {
          color: #e0f2fe;
          background: rgba(56, 189, 248, 0.08);
          border-color: rgba(56, 189, 248, 0.25);
          box-shadow: inset 0 0 12px rgba(56, 189, 248, 0.06);
        }

        .nav-link-primary {
          color: #38bdf8;
          border-color: rgba(56, 189, 248, 0.35);
          background: rgba(56, 189, 248, 0.06);
        }

        .nav-link-primary:hover {
          background: rgba(56, 189, 248, 0.15);
          border-color: rgba(56, 189, 248, 0.6);
          box-shadow: 0 0 16px rgba(56, 189, 248, 0.15), inset 0 0 12px rgba(56, 189, 248, 0.08);
          color: #bae6fd;
        }

        .accent-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.5) 30%, rgba(56,189,248,0.8) 50%, rgba(56,189,248,0.5) 70%, transparent 100%);
        }

        .dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          background: #22c55e;
          border-radius: 50%;
          margin-right: 5px;
          box-shadow: 0 0 6px #22c55e;
          animation: blink 2s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>

      <div className={`nav-root ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-bar">
          <div className="nav-inner">

            {/* Logo */}
            <Link href="/" className="logo-wrap">
              <div className="logo-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="logo-text-group">
                <span className="logo-name">Rtarf AI</span>
                <span className="logo-sub">System Online</span>
              </div>
              <span className="badge">Helper</span>
            </Link>

            {/* Center clock */}
            <div className="center-divider">
              <span className="sys-status">
                <span className="dot" />
                SYSTEM ACTIVE
              </span>
              <span className="sys-time">{time}</span>
            </div>

            {/* Nav links */}
            <nav className="nav-links">
              <Link href="/support" className="nav-link">Support</Link>
              <Link href="/support/ticket" className="nav-link">Ticket</Link>
              <Link href="/support/faq" className="nav-link nav-link-primary">FAQ</Link>
            </nav>

          </div>
          <div className="accent-line" />
        </div>
      </div>
    </>
  );
}