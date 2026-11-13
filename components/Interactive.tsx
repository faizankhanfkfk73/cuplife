"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import Icon, { Logo } from "./Icon";
import { COURSE_FEE_INR, fee, nav, whatsappLink, type Day } from "@/content/site";

export function Btn({ href, children, variant = "", icon = "arrow", block, onClick, type }: {
  href?: string; children: ReactNode; variant?: string; icon?: string; block?: boolean;
  onClick?: () => void; type?: "submit" | "button";
}) {
  const cls = `btn ${variant} ${block ? "block" : ""}`.trim();
  const inner = (
    <>
      <span>{children}</span>
      <i><Icon name={icon} /></i>
    </>
  );
  if (href) {
    const ext = href.startsWith("http");
    return <a className={cls} href={href} onClick={onClick} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{inner}</a>;
  }
  return <button className={cls} type={type ?? "button"} onClick={onClick}>{inner}</button>;
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);
  return (
    <>
      <header className={`nav ${scrolled || open ? "scrolled" : ""}`}>
        <div className="container">
          <a href="#top" className="logo" aria-label="Cupheal home"><Logo /><b>Cupheal</b></a>
          <nav className="nav-links" aria-label="Primary">
            {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          </nav>
          <div className="desk-cta"><Btn href="#fee" variant="white">Book Your Seat</Btn></div>
          <button className="burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </header>
      <div className="mobile-menu" hidden={!open}>
        {nav.map((n) => <a className="l" key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
        <Btn href="#fee" block onClick={() => setOpen(false)}>Book Your Seat Now</Btn>
      </div>
    </>
  );
}

export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: {
  children: ReactNode; delay?: number; className?: string; as?: "div" | "li" | "article";
}) {
  const [el, setEl] = useState<HTMLElement | null>(null);
  const [inView, setIn] = useState(false);
  useEffect(() => {
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIn(true); io.disconnect(); } }, { rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [el]);
  return (
    <Tag ref={setEl as never} className={`rv ${inView ? "in" : ""} ${className}`.trim()} style={{ ["--d" as string]: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

export function DayTabs({ days }: { days: Day[] }) {
  const [i, setI] = useState(0);
  const d = days[i];
  return (
    <>
      <div className="tabs-wrap">
        <div className="tabs" role="tablist" aria-label="Training days">
          {days.map((x, k) => (
            <button key={x.day} role="tab" id={`tab-${k}`} aria-controls="day-panel" aria-selected={k === i} className="tab" onClick={() => setI(k)}>
              <small>{x.day}</small>{x.name}
            </button>
          ))}
        </div>
      </div>
      <div className="day-panel" key={i} id="day-panel" role="tabpanel" aria-labelledby={`tab-${i}`}>
        <div className="day-side">
          <div className="day-photo">
            <img src={d.image} alt="" />
            <div className="cap"><small>{d.day}</small><h3>{d.name}</h3></div>
          </div>
          <div className="goal"><small>{d.day} Goal</small><p>{d.goal}</p></div>
        </div>
        <div className="day-body">
          <h3>{d.title}</h3>
          <p>{d.intro}</p>
          <div className="label">{d.label}</div>
          <ul className="topics">
            {d.topics.map((t, k) => <li key={t}><span>{String(k + 1).padStart(2, "0")}</span>{t}</li>)}
          </ul>
          {d.note && <p className="day-note">{d.note}</p>}
        </div>
      </div>
    </>
  );
}

export type AccItem = { title: string; icon?: string; body: ReactNode };

export function Accordion({ items, initial = 0, numbered, className = "" }: {
  items: AccItem[]; initial?: number; numbered?: boolean; className?: string;
}) {
  const [open, setOpen] = useState<number | null>(initial);
  return (
    <div className={`acc ${className}`.trim()}>
      {items.map((it, k) => {
        const isOpen = open === k;
        return (
          <div key={it.title} className={`acc-item ${isOpen ? "open" : ""}`}>
            <button className="acc-btn" aria-expanded={isOpen} aria-controls={`acc-${className}-${k}`} onClick={() => setOpen(isOpen ? null : k)}>
              {numbered && <span className="q">Q{k + 1}.</span>}
              {it.icon && <span className="ico"><Icon name={it.icon} /></span>}
              <span className="t">{it.title}</span>
              <span className="pm"><Icon name="plus" /></span>
            </button>
            <div className="acc-panel" id={`acc-${className}-${k}`} role="region">
              <div><div className="acc-content">{it.body}</div></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

type CheckoutResult = { error?: { message?: string }; redirect?: boolean; paymentDetails?: { paymentMessage?: string } };
type CashfreeSDK = { checkout: (o: { paymentSessionId: string; redirectTarget?: "_self" | "_blank" | "_top" | "_modal" }) => Promise<CheckoutResult> };
declare global { interface Window { Cashfree?: (o: { mode: "production" | "sandbox" }) => CashfreeSDK } }

const CASHFREE_MODE = process.env.NEXT_PUBLIC_CASHFREE_ENV === "sandbox" ? "sandbox" : "production";

let sdkPromise: Promise<CashfreeSDK> | null = null;
function loadCashfree() {
  sdkPromise ??= new Promise<CashfreeSDK>((resolve, reject) => {
    const ready = () => (window.Cashfree ? resolve(window.Cashfree({ mode: CASHFREE_MODE })) : reject(new Error("Cashfree SDK unavailable")));
    if (window.Cashfree) return ready();
    const s = document.createElement("script");
    s.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    s.async = true;
    s.onload = ready;
    s.onerror = () => { sdkPromise = null; reject(new Error("Cashfree SDK failed to load")); };
    document.head.appendChild(s);
  });
  return sdkPromise;
}

export function RegisterForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const payOnline = !!COURSE_FEE_INR;

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const data = Object.fromEntries(["name", "phone", "email", "city", "bg"].map((k) => [k, String(f.get(k) ?? "")]));

    // Until a fee is set, registration falls back to WhatsApp.
    if (!payOnline) {
      const msg = [
        "Assalamu Alaikum, mujhe 3-Day Offline Hijama Training mein seat reserve karni hai.",
        `Name: ${data.name}`, `Phone: ${data.phone}`, `City: ${data.city}`, `Background: ${data.bg}`,
      ].join("\n");
      window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
      setSent(true);
      return;
    }

    if (busy) return;
    setBusy(true);
    setError("");
    try {
      const [cashfree, res] = await Promise.all([
        loadCashfree(),
        fetch("/api/cashfree/order", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }),
      ]);
      const out = await res.json().catch(() => ({}));
      if (!res.ok || !out.paymentSessionId) throw new Error(out.error || "Payment shuru nahi ho saka.");
      // Modal checkout keeps the buyer on this page; once it closes we verify the order server-side.
      const result = await cashfree.checkout({ paymentSessionId: out.paymentSessionId, redirectTarget: "_modal" });
      if (result?.redirect) return; // Cashfree is redirecting (some banks); the return URL handles it.
      if (result?.error && !result.paymentDetails) throw new Error(result.error.message || "Payment cancel ho gaya.");
      window.location.href = `/payment/status?order_id=${encodeURIComponent(out.orderId)}`;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Kuch galat ho gaya. Dobara try karein.");
      setBusy(false);
    }
  };
  return (
    <form onSubmit={submit} aria-busy={busy}>
      <div className="field full"><label htmlFor="r-name">Full Name *</label><input id="r-name" name="name" required minLength={2} placeholder="Aapka naam" autoComplete="name" /></div>
      <div className="field"><label htmlFor="r-phone">WhatsApp Number *</label><input id="r-phone" name="phone" required type="tel" inputMode="tel" pattern="[+0-9 \-]{10,16}" title="10-digit mobile number" placeholder="+91" autoComplete="tel" /></div>
      <div className="field"><label htmlFor="r-city">City *</label><input id="r-city" name="city" required placeholder="Aapka shehar" autoComplete="address-level2" /></div>
      {payOnline && <div className="field full"><label htmlFor="r-email">Email (payment receipt ke liye)</label><input id="r-email" name="email" type="email" placeholder="aap@example.com" autoComplete="email" /></div>}
      <div className="field full">
        <label htmlFor="r-bg">Aap kaun hain?</label>
        <select id="r-bg" name="bg" defaultValue="Hijama Beginner">
          <option>Hijama Beginner</option>
          <option>Therapy Practitioner</option>
          <option>Aspiring Self-Employed Practitioner</option>
          <option>Hijama Learner</option>
          <option>Wellness Entrepreneur</option>
        </select>
      </div>
      <div className="field full">
        <Btn type="submit" block icon={payOnline ? "arrow" : "whatsapp"}>
          {payOnline ? (busy ? "Payment khul raha hai…" : `Pay ${fee.price} & Reserve Seat`) : fee.primary}
        </Btn>
      </div>
      {payOnline && <p className="secure"><Icon name="shield" />Secure payment via Cashfree — UPI, cards, netbanking &amp; wallets</p>}
      {error && <p className="ok err" role="alert">{error}</p>}
      {sent && <p className="ok" role="status">Shukriya! WhatsApp par aapki details bhej di gayi hain — hum jald hi aapse contact karenge.</p>}
    </form>
  );
}
