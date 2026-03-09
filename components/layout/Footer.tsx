import Link from "next/link";

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Sarabun:wght@300;400;500&display=swap');

        .footer-root {
          font-family: 'Sarabun', sans-serif;
          background: linear-gradient(180deg, #06101e 0%, #040c18 100%);
          border-top: 1px solid rgba(56,189,248,0.12);
          margin-top: 0;
          position: relative;
          overflow: hidden;
        }

        .footer-root::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(56,189,248,0.5) 30%, rgba(56,189,248,0.8) 50%, rgba(56,189,248,0.5) 70%, transparent);
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 24px 32px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
        }

        .footer-col-title {
          font-family: 'Share Tech Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #38bdf8;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-col-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(56,189,248,0.15);
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link {
          font-size: 13px;
          color: rgba(160, 200, 230, 0.5);
          text-decoration: none;
          font-weight: 300;
          letter-spacing: 0.02em;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-link::before {
          content: '›';
          font-family: 'Share Tech Mono', monospace;
          color: rgba(56,189,248,0.25);
          transition: all 0.2s ease;
          font-size: 14px;
        }

        .footer-link:hover {
          color: #e0f2fe;
          padding-left: 4px;
        }

        .footer-link:hover::before {
          color: #38bdf8;
        }

        .footer-desc {
          font-size: 13px;
          color: rgba(140, 180, 215, 0.45);
          line-height: 1.8;
          font-weight: 300;
        }

        .footer-bottom {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid rgba(56,189,248,0.07);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-copy {
          font-family: 'Share Tech Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          color: rgba(56,189,248,0.25);
          text-transform: uppercase;
        }

        .footer-version {
          font-family: 'Share Tech Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          color: rgba(56,189,248,0.2);
          text-transform: uppercase;
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-inner">

          <div className="footer-grid">

            <div>
              <div className="footer-col-title">Support</div>
              <div className="footer-links">
                <Link href="/support/faq" className="footer-link">FAQ</Link>
                <Link href="/support/docs" className="footer-link">Documentation</Link>
                <Link href="/support/status" className="footer-link">System Status</Link>
              </div>
            </div>

            <div>
              <div className="footer-col-title">Product</div>
              <div className="footer-links">
                <Link href="/support" className="footer-link">Support Center</Link>
                <Link href="/support/ticket" className="footer-link">Submit Ticket</Link>
              </div>
            </div>

            <div>
              <div className="footer-col-title">Rtarf AI</div>
              <p className="footer-desc">
                ระบบ AI Support อัจฉริยะ ออกแบบมาเพื่อช่วยให้ผู้ใช้งานแก้ไขปัญหาได้รวดเร็วและมีประสิทธิภาพ
              </p>
            </div>

          </div>

          <div className="footer-bottom">
            <span className="footer-copy">© 2025 Rtarf AI — All rights reserved</span>
            <span className="footer-version">System v2.0.1 // Secure Channel</span>
          </div>

        </div>
      </footer>
    </>
  );
}