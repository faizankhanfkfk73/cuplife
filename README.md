# Cupheal — 3-Day Offline Hijama Training landing page

Next.js 14 (App Router, TypeScript, plain CSS). Run: `npm install`, `npm run build`, `npm start` → http://localhost:3060

## Design sources (design_repo)
- Base system: **design-8/phyco** (physiotherapy clinic) — olive/butter/cream tokens, Instrument Serif + Mona Sans, split buttons, hero, about, expertise accordion, why-choose mosaic, pricing/contact card, FAQ, footer. Fonts and photos are copied from it.
- 3-day agenda tabs: **design-8/yogaz** weekly schedule tabs, combined with **design-8/coursify** curriculum modules.
- Problem grid, bonuses, instructor block: **design-8/coursify**.
- Stats strip in the "Invest" band: **design-8/eventixx**.
All of these are rebuilt in Phyco's style so the panels line up on one 1200px grid.

## Content
All copy is in `content/site.ts`, taken from `3-Day Offline Hijama Training Landing Page Copy.md`.

Fill these in before launch:
- `WHATSAPP_NUMBER` in `content/site.ts` (every WhatsApp button and the registration form use it)
- `[INSERT DATE]`, `[INSERT CITY & VENUE]`, `[INSERT TIMING]` (in `details`, and in the footer in `app/page.tsx`)
- `₹[FINAL PRICE]` (`fee.price`)
- Trainer photo: the trainer card shows an "FK" monogram for now. Add a real photo of Faizan Uddin Khan if you have one.
- Photos are Phyco's physiotherapy stock. Replace them with real Hijama/cupping training photos when you can.

The registration form doesn't post anywhere. It opens WhatsApp with the details already typed in.
