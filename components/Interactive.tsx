"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import Icon, { Logo } from "./Icon";
import { nav, whatsappLink, type Day } from "@/content/site";

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

export function RegisterForm() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      "Assalamu Alaikum, mujhe 3-Day Offline Hijama Training mein seat reserve karni hai.",
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `City: ${f.get("city")}`,
      `Background: ${f.get("bg")}`,
    ].join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  };
  return (
    <form onSubmit={submit}>
      <div className="field full"><label htmlFor="r-name">Full Name *</label><input id="r-name" name="name" required placeholder="Aapka naam" autoComplete="name" /></div>
      <div className="field"><label htmlFor="r-phone">WhatsApp Number *</label><input id="r-phone" name="phone" required type="tel" inputMode="tel" placeholder="+91" autoComplete="tel" /></div>
      <div className="field"><label htmlFor="r-city">City *</label><input id="r-city" name="city" required placeholder="Aapka shehar" autoComplete="address-level2" /></div>
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
      <div className="field full"><Btn type="submit" block icon="whatsapp">Reserve My Seat</Btn></div>
      {sent && <p className="ok" role="status">Shukriya! WhatsApp par aapki details bhej di gayi hain — hum jald hi aapse contact karenge.</p>}
    </form>
  );
}
