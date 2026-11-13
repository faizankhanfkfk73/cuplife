// Server-only Cashfree Payment Gateway helpers (REST API, version 2023-08-01).
// Credentials come from .env.local and must never reach the browser.
import crypto from "node:crypto";

const API_VERSION = "2023-08-01";

function config() {
  const appId = process.env.CASHFREE_APP_ID;
  const secret = process.env.CASHFREE_SECRET_KEY;
  if (!appId || !secret) throw new Error("Cashfree credentials missing: set CASHFREE_APP_ID and CASHFREE_SECRET_KEY in .env.local");
  const base = process.env.CASHFREE_ENV === "sandbox" ? "https://sandbox.cashfree.com/pg" : "https://api.cashfree.com/pg";
  return { appId, secret, base };
}

export const isCashfreeConfigured = () => !!(process.env.CASHFREE_APP_ID && process.env.CASHFREE_SECRET_KEY);

export class CashfreeError extends Error {
  constructor(message: string, public status: number, public code?: string) {
    super(message);
  }
}

async function cf<T>(path: string, init: RequestInit = {}): Promise<T> {
  const { appId, secret, base } = config();
  const res = await fetch(`${base}${path}`, {
    ...init,
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "x-client-id": appId,
      "x-client-secret": secret,
      "x-api-version": API_VERSION,
      ...init.headers,
    },
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new CashfreeError(body?.message || `Cashfree request failed (${res.status})`, res.status, body?.code);
  return body as T;
}

export type CashfreeOrder = {
  cf_order_id: string;
  order_id: string;
  order_amount: number;
  order_currency: string;
  order_status: "ACTIVE" | "PAID" | "EXPIRED" | "TERMINATED" | "TERMINATION_REQUESTED";
  payment_session_id: string;
  customer_details: { customer_name?: string; customer_phone: string; customer_email?: string };
};

export function createOrder(input: {
  orderId: string;
  amount: number;
  customer: { id: string; name: string; phone: string; email?: string };
  /** Only sent when https: Cashfree production rejects http return URLs (e.g. localhost). */
  returnUrl?: string;
  note?: string;
  tags?: Record<string, string>;
}) {
  return cf<CashfreeOrder>("/orders", {
    method: "POST",
    body: JSON.stringify({
      order_id: input.orderId,
      order_amount: input.amount,
      order_currency: "INR",
      customer_details: {
        customer_id: input.customer.id,
        customer_name: input.customer.name,
        customer_phone: input.customer.phone,
        ...(input.customer.email ? { customer_email: input.customer.email } : {}),
      },
      ...(input.returnUrl?.startsWith("https://") ? { order_meta: { return_url: input.returnUrl } } : {}),
      order_note: input.note,
      order_tags: input.tags,
    }),
  });
}

export function getOrder(orderId: string) {
  return cf<CashfreeOrder>(`/orders/${encodeURIComponent(orderId)}`);
}

/** Webhook signature = base64(HMAC-SHA256(timestamp + rawBody, secretKey)). */
export function verifyWebhookSignature(rawBody: string, timestamp: string | null, signature: string | null) {
  if (!timestamp || !signature) return false;
  const expected = crypto.createHmac("sha256", config().secret).update(timestamp + rawBody).digest("base64");
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export const isValidOrderId = (id: string) => /^[A-Za-z0-9_-]{3,45}$/.test(id);
