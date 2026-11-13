import type { Metadata } from "next";
import Icon, { Logo } from "@/components/Icon";
import { Btn } from "@/components/Interactive";
import { getOrder, isValidOrderId, type CashfreeOrder } from "@/lib/cashfree";
import { details, whatsappLink } from "@/content/site";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Payment Status — Cupheal", robots: { index: false } };

type View = { tone: "ok" | "wait" | "bad"; title: string; body: string };

function view(order: CashfreeOrder | null): View {
  if (!order) return { tone: "bad", title: "Order nahi mila", body: "Hum is payment ko verify nahi kar paaye. Agar paise kat gaye hain toh WhatsApp par order ID ke saath humse contact karein." };
  switch (order.order_status) {
    case "PAID":
      return { tone: "ok", title: "Payment successful — aapki seat reserve ho gayi!", body: "Shukriya! Training ki saari details jald hi aapko WhatsApp par bhej di jayengi." };
    case "ACTIVE":
      return { tone: "wait", title: "Payment complete nahi hua", body: "Aapka payment abhi pending ya cancel hai. Dobara try karein, ya agar paise kat gaye hain toh kuch minute baad yeh page refresh karein." };
    default:
      return { tone: "bad", title: "Payment fail ho gaya", body: "Yeh order expire ya cancel ho chuka hai. Kripya dobara register karein." };
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
    ? `Assalamu Alaikum, maine ${course} ke liye payment kar diya hai.\nOrder ID: ${orderId}\nName: ${order.customer_details.customer_name ?? ""}`
    : `Assalamu Alaikum, mujhe ${course} ke payment mein help chahiye.\nOrder ID: ${orderId || "-"}`;

  return (
    <main className="pay-status">
      <div className="container">
        <a href="/" className="logo"><Logo /><b>Cupheal</b></a>
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
