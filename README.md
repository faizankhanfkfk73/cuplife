# CupLife — 3-Day Offline Hijama Training landing page

Next.js 14 (App Router, TypeScript, plain CSS). Run: `npm install`, `npm run build`, `npm start` → http://localhost:3060

## Design sources (design_repo)
- Base system: **design-8/phyco** (physiotherapy clinic) — olive/butter/cream tokens, Instrument Serif + Mona Sans, split buttons, hero, about, expertise accordion, why-choose mosaic, pricing/contact card, FAQ, footer. Fonts and photos are copied from it.
- 3-day agenda tabs: **design-8/yogaz** weekly schedule tabs, combined with **design-8/coursify** curriculum modules.
- Problem grid, bonuses, instructor block: **design-8/coursify**.
- Stats strip in the "Invest" band: **design-8/eventixx**.
All of these are rebuilt in Phyco's style so the panels line up on one 1200px grid.

## Content
All copy is in `content/site.ts`, taken from `3-Day Offline Hijama Training Landing Page Copy.md`.

Fill these in before launch (all copy is in English):
- `WHATSAPP_NUMBER` in `content/site.ts` (every WhatsApp button and the registration form use it)
- `COURSE_DATES`, `[INSERT CITY & VENUE]`, `[INSERT TIMING]` (in `details`, and in the footer in `app/page.tsx`)
- `COURSE_TOTAL_INR` in `content/site.ts` (the full course fee shown on the page) and `COURSE_FEE_INR` (the advance Cashfree charges to reserve a seat)

## Images
Hijama photos (`hijama-equipment.jpg`, `hijama-training.jpg`, `hijama-treatment.jpg`) and the trainer portrait (`faizan-uddin-khan.jpg`) are in `public/assets/images/`, taken from the Cupheal-Hijama-Landing-Page package and compressed. The Hijama illustrations are AI-generated.

## Payments (Cashfree)
Copy `.env.example` to `.env.local` and fill in the Cashfree App ID and Secret Key. `.env.local` is git-ignored, so never commit keys.

- `POST /api/cashfree/order` creates the order on the server. The amount comes from `COURSE_FEE_INR`, never from the browser.
- The registration form opens Cashfree Checkout (JS SDK v3). After payment Cashfree sends the buyer to `/payment/status?order_id=…`, which checks the order with Cashfree before showing success.
- `POST /api/cashfree/webhook` verifies the webhook signature and logs paid registrations. Add it in Cashfree Dashboard → Developers → Webhooks.
- While `COURSE_FEE_INR` is `null`, online payment is off and the form opens WhatsApp as before.

Before going live with production keys:
1. Set `SITE_URL` to the live https domain. Cashfree production needs an https return URL.
2. Whitelist that domain in Cashfree Dashboard → Developers → Whitelisting.
3. Set environment variables on the host (the `.env.local` keys) and redeploy.
