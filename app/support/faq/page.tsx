export default function FAQPage() {
  const faqs = [
    {
      q: "How to reset password?",
      a: "ไปที่หน้า Settings → Security → Reset Password แล้วกรอกอีเมลที่ลงทะเบียนไว้",
    },
    {
      q: "How to request refund?",
      a: "ติดต่อทีมงานผ่าน Support Ticket พร้อมแนบหลักฐานการชำระเงิน ทีมงานจะตอบกลับภายใน 24 ชั่วโมง",
    },
    {
      q: "How to contact support?",
      a: "สามารถติดต่อได้ผ่าน AI Chat หรือ Submit Ticket ที่เมนูด้านบน",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Sarabun:wght@300;400;500;600&display=swap');

        .faq-root {
          font-family: 'Sarabun', sans-serif;
          min-height: 100vh;
          background: linear-gradient(160deg, #06101e 0%, #0a1628 100%);
          padding: 64px 24px;
        }

        .faq-inner {
          max-width: 720px;
          margin: 0 auto;
        }

        .faq-eyebrow {
          font-family: 'Share Tech Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #38bdf8;
          margin-bottom: 16px;
          opacity: 0.7;
        }

        .faq-title {
          font-family: 'Share Tech Mono', monospace;
          font-size: clamp(28px, 4vw, 42px);
          color: #e0f2fe;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .faq-title span { color: #38bdf8; }

        .faq-desc {
          font-size: 15px;
          color: rgba(160, 200, 230, 0.5);
          font-weight: 300;
          margin-bottom: 48px;
        }

        .faq-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(56,189,248,0.4), transparent);
          margin-bottom: 40px;
        }

        .faq-item {
          border: 1px solid rgba(56,189,248,0.1);
          border-radius: 4px;
          margin-bottom: 12px;
          background: rgba(56,189,248,0.03);
          transition: all 0.2s;
          overflow: hidden;
        }

        .faq-item:hover {
          border-color: rgba(56,189,248,0.25);
          background: rgba(56,189,248,0.06);
        }

        .faq-q {
          padding: 20px 24px;
          font-size: 16px;
          font-weight: 500;
          color: #bae6fd;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .faq-q::before {
          content: 'Q.';
          font-family: 'Share Tech Mono', monospace;
          font-size: 11px;
          color: #38bdf8;
          opacity: 0.6;
          letter-spacing: 0.1em;
          flex-shrink: 0;
        }

        .faq-a {
          padding: 0 24px 20px 52px;
          font-size: 14px;
          color: rgba(160, 200, 230, 0.55);
          line-height: 1.75;
          font-weight: 300;
        }
      `}</style>

      <div className="faq-root">
        <div className="faq-inner">

          <div className="faq-eyebrow">// Knowledge Base</div>
          <h1 className="faq-title">FAQ <span>&</span> Help</h1>
          <p className="faq-desc">คำถามที่พบบ่อยและวิธีแก้ไขปัญหาเบื้องต้น</p>
          <div className="faq-divider" />

          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{faq.q}</div>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}