export default function TicketCategory({ className }: { className?: string }) {
  return (
    <select className={className}>
      <option value="bug">Bug / ข้อผิดพลาด</option>
      <option value="billing">Billing / การชำระเงิน</option>
      <option value="feature">Feature Request</option>
      <option value="other">Other / อื่นๆ</option>
    </select>
  );
}