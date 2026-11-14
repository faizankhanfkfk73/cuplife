import type { Metadata } from "next";
import Icon, { Logo } from "@/components/Icon";
import { Btn } from "@/components/Interactive";
import { getOrder, isValidOrderId, type CashfreeOrder } from "@/lib/cashfree";
import { details, whatsappLink } from "@/content/site";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Payment Status — CupHeal", robots: { index: false } };

type View = { tone: "ok" | "wait" | "bad"; title: string; body: string };

function view(order: CashfreeOrder | null): View {
  if (!order) return { tone: "bad", title: "Order not found", body: "We couldn't verify this payment. If money was deducted, please contact us on WhatsApp with your order ID." };
  switch (order.order_status) {
    case "PAID":
      return { tone: "ok", title: "Payment successful — your seat is reserved!", body: "Thank you! All the training details will be sent to you on WhatsApp shortly." };
    case "ACTIVE":
      return { tone: "wait", title: "Payment not completed", body: "Your payment is pending or was cancelled. Please try again, or if money was deducted, refresh this page in a few minutes." };
    default:
      return { tone: "bad", title: "Payment failed", body: "This order has expired or been cancelled. Please register again." };
  }
}

export default async function PaymentStatus({ searchParams }: { searchParams: { order_id?: string } }) {
  const orderId = searchParams.order_id ?? "";
  let order: CashfreeOrder | null = null;
  if (isValidOrderId(orderId)) {
    try { order = await getOrder(orderId); } catch (err) { console.error("[cashfree] status lookup failed", orderId, err instanceof Error ? err.message : err); }
  }
  const v = view(order);
  const course = details[0].v;
  const waText = order?.order_status === "PAID"
    ? `Assalamu Alaikum, I have completed the payment for the ${course}.\nOrder ID: ${orderId}\nName: ${order.customer_details.customer_name ?? ""}`
    : `Assalamu Alaikum, I need help with my payment for the ${course}.\nOrder ID: ${orderId || "-"}`;

  return (
    <main className="pay-status">
      <div className="container">
        <a href="/" className="logo"><Logo /><b>CupHeal</b></a>
        <div className={`pay-card ${v.tone}`}>
          <span className="ic"><Icon name={v.tone === "ok" ? "checkCircle" : "alert"} /></span>
          <h1>{v.title}</h1>
          <p>{v.body}</p>
          {order && (
            <dl>
              <div><dt>Order ID</dt><dd>{order.order_id}</dd></div>
              <div><dt>Amount</dt><dd>₹{order.order_amount.toLocaleString("en-IN")}</dd></div>
              <div><dt>Status</dt><dd>{order.order_status}</dd></div>
            </dl>
          )}
          <div className="btn-row">
            {v.tone === "ok"
              ? <Btn href="/">Back to Home</Btn>
              : <Btn href="/#fee">Try Again</Btn>}
            <Btn href={whatsappLink(waText)} variant="dark wa" icon="whatsapp">WhatsApp Us</Btn>
          </div>
        </div>
      </div>
    </main>
  );
}
