import { NextResponse, type NextRequest } from "next/server";
import { CashfreeError, createOrder, isCashfreeConfigured } from "@/lib/cashfree";
import { COURSE_FEE_INR } from "@/content/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const clean = (v: unknown, max = 80) => (typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : "");

/** Normalises an Indian mobile number to 10 digits, or returns null. */
function normalisePhone(raw: string) {
  let d = raw.replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return /^[6-9]\d{9}$/.test(d) ? d : null;
}

function siteOrigin(req: NextRequest) {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/+$/, "");
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  const proto = req.headers.get("x-forwarded-proto") ?? (host?.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

export async function POST(req: NextRequest) {
  // The amount is decided here on the server, never taken from the browser.
  if (!COURSE_FEE_INR || COURSE_FEE_INR <= 0) {
    return NextResponse.json({ error: "Online payment is not available right now. Please register on WhatsApp." }, { status: 503 });
  }

  if (!isCashfreeConfigured()) {
    console.error("[cashfree] CASHFREE_APP_ID / CASHFREE_SECRET_KEY are not set on this server");
    return NextResponse.json({ error: "Online payment is not set up yet. Please register on WhatsApp.", code: "payment_not_configured" }, { status: 503 });
  }

  const body = await req.json().catch(() => null);
  const name = clean(body?.name);
  const city = clean(body?.city, 60);
  const background = clean(body?.bg, 60);
  const email = clean(body?.email, 120);
  const phone = normalisePhone(clean(body?.phone, 20));

  if (name.length < 2) return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
  if (!phone) return NextResponse.json({ error: "Please enter a valid 10-digit mobile number." }, { status: 400 });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });

  const orderId = `CH_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  try {
    const order = await createOrder({
      orderId,
      amount: COURSE_FEE_INR,
      customer: { id: `cust_${phone}`, name, phone, email: email || undefined },
      returnUrl: `${siteOrigin(req)}/payment/status?order_id={order_id}`,
      note: "3-Day Offline Hijama Training — seat reservation",
      tags: { city: city || "-", background: background || "-" },
    });
    return NextResponse.json({ orderId: order.order_id, paymentSessionId: order.payment_session_id });
  } catch (err) {
    const status = err instanceof CashfreeError ? err.status : 500;
    console.error("[cashfree] create order failed", status, err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "We couldn't start the payment. Please try again shortly or register on WhatsApp.", code: "gateway_error" }, { status: 502 });
  }
}
