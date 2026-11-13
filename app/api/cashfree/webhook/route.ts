import { NextResponse, type NextRequest } from "next/server";
import { verifyWebhookSignature } from "@/lib/cashfree";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Configure in Cashfree Dashboard → Developers → Webhooks:  https://<your-domain>/api/cashfree/webhook
// Events: PAYMENT_SUCCESS_WEBHOOK, PAYMENT_FAILED_WEBHOOK, PAYMENT_USER_DROPPED_WEBHOOK
export async function POST(req: NextRequest) {
  const raw = await req.text();
  const ok = verifyWebhookSignature(raw, req.headers.get("x-webhook-timestamp"), req.headers.get("x-webhook-signature"));
  if (!ok) return NextResponse.json({ error: "invalid signature" }, { status: 401 });

  const event = JSON.parse(raw);
  const order = event?.data?.order;
  const payment = event?.data?.payment;
  const customer = event?.data?.customer_details;

  // There is no database yet, so registrations are logged. Hook a sheet, CRM or email in here.
  console.log("[cashfree] webhook", JSON.stringify({
    type: event?.type,
    orderId: order?.order_id,
    amount: order?.order_amount,
    paymentStatus: payment?.payment_status,
    cfPaymentId: payment?.cf_payment_id,
    name: customer?.customer_name,
    phone: customer?.customer_phone,
    tags: order?.order_tags,
  }));

  return NextResponse.json({ received: true });
}
