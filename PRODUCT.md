# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS (no build step, no framework) — user-confirmed over React/Vite, chosen for a dependency-free site that's easy to host and hand off. Reconfirmed when a later brief asked for a full React/TypeScript/Three.js/GSAP/Framer Motion migration with client-side routing; the user chose to keep the static foundation and deliver the same multi-page vision as plain directory-based HTML pages (`/about/index.html`, `/services/dry-cleaning/index.html`, etc.) instead.

Multi-page since the "Atelier" redesign: each route is its own `index.html` under a matching directory, sharing `css/tokens.css` + `css/layout.css` (+ `css/page.css` on inner pages, `css/home.css` on the homepage only) and `js/common.js` (+ `js/home.js` on the homepage only). Nav/footer markup is duplicated per page rather than templated — an accepted tradeoff of staying build-step-free at this scale.

Deploys to two hosts with different base paths: GitHub Pages serves this repo under `/drycleaners/` (a project page, not a user page), while the Render deployment serves from the true root. Every internal link and asset path must stay **relative** (`services/`, `../css/tokens.css`), never root-relative (`/services/`, `/css/tokens.css`) — a root-relative path works on Render but silently 404s on GitHub Pages' subpath.

3D/interactive elements use CSS 3D transforms, mouse-driven parallax and hover/tilt effects in vanilla JS — not Three.js or React Three Fiber. There is no 3D model asset (GLB/GLTF) in this project and no pipeline to produce one; "interactive 3D" requests are implemented as CSS-3D/parallax on real photography (see the homepage's garment-showcase hotspot section), not fabricated as literal WebGL 3D.

## Users

Local residents and workers in St Marys, NSW searching (often on mobile, often via Google Maps) for a trustworthy dry cleaner — people with a suit, wedding dress, work uniform, leather jacket, or household item they want cleaned, altered, or restored. They land on the site to confirm the business is legitimate and professional, find what it does, and then call, email, or drive over — not to create an account or book online.

## Product Purpose

A brochure/marketing site for an existing, physical dry-cleaning shop (St Marys Village Dry Cleaners). It exists to build trust fast and convert visits into phone calls, emails, or in-person drop-offs. Success = a visitor understands the business and services within seconds and reaches out with zero friction. It is not a booking, ordering, or payment system.

## Positioning

A long-standing, personally run local dry cleaner inside The Village Centre — not a chain, not a coin laundromat. Differentiators it can truthfully claim: drive-up convenience right outside the shop (not a sea of parking to cross), a broad verified service range (everyday dry cleaning through bridal gowns, leather/suede restoration, and long-term airtight garment storage), and a 5.0-star local review record.

## Operating Context

Customers drop off and collect garments in person at the physical shop; contact otherwise happens by phone or email. There is no online ordering, scheduling, or payment today, so the website must not imply there is.

## Capabilities and Constraints

- Frontend-only. No backend, database, authentication, booking API, or payment integration — explicitly out of scope per the brief.
- All contact actions must be real browser-native affordances: `tel:0296733934` and `mailto:gina.vic72@gmail.com`, in-page smooth-scroll anchors, a working lightbox/accordion/mobile menu — no fake "booking confirmed" states.
- No pricing is published anywhere and must not be invented.
- No specific years-in-business figure is verifiable from a primary source and must not be stated as a number.
- No certifications or awards are known and must not be invented.

## Brand Commitments

- Business name: **St Marys Village Dry Cleaners** (verified via the business's own site; the user's brief also writes it "St Marys Village Drycleaner" — the official site's styling wins for on-page copy).
- Phone: **02 9673 3934** — user-provided, and it matches the number published on the business's own website.
- Email: **gina.vic72@gmail.com** — user-provided; use this even though the public site does not list an email (it lists none, so there is no conflict to resolve).
- No logo file is in hand (only a filename was seen referenced on a third-party profile page, not a downloadable asset) — the site should ship a clean typographic wordmark, easily swapped for a real logo later.

## Evidence on Hand

Verified via the business's own website (stmarysvillagedrycleaners.com.au) and cross-checked against independent directories (Yelp, TrueLocal, Yellow Pages):

- **Address:** The Village Centre, Charles Hackett Drive, St Marys NSW 2760 — drive-up access on the northern side, outside the centre's main entrance, for drop-off/pickup. (One directory listing shows a different street address for a similarly named business; the business's own site is treated as authoritative.)
- **Hours:** Mon–Fri 9:00am–5:30pm · Sat 9:00am–4:00pm · Sun 9:00am–3:00pm.
- **Services (from the business's own /services page):** Professional Dry Cleaning; Corporate & Work Wear; Wedding Dresses & Bridal Gowns; Alterations & Repairs; Suede & Leather Restoration; Household Furnishings (doonas, couch covers, mattress protectors, blankets); Airtight Boxing (long-term garment storage).
- **Turnaround:** the business's own site (home and /contact pages) states same-day or 24-hour turnaround with an SMS notification when a garment is ready for collection. This is a service-facing fact from the business's own site, not a reviewer claim — keep it attributed as such and never fold it into reviews copy.
- **Reviews:** TrueLocal lists an aggregate of 5.0★ from 8 reviews. Verbatim reviewer names/dates could not be independently retrieved (listing blocked direct access), so no individually-attributed testimonial may be fabricated — only the sourced aggregate rating, linked out to TrueLocal, may be shown as social proof.
- **Photography:** No real shop/garment photographs were obtainable through research. The gallery and hero must use licensed stock photography that honestly depicts garment care, organized so every image is a one-file swap once the owner supplies real photos.
- **Absences the site must not paper over:** no prices, no stated years-in-business, no certifications, no named/dated testimonials, no street-level shop photos.

## Product Principles

1. Verified facts only — every number, claim, and quote on the page must trace to a source above; gaps get an honest placeholder or are omitted, never invented.
2. Contact is the conversion event — phone and email must be one tap away from any scroll position, using real `tel:`/`mailto:` links.
3. Premium-local, not corporate — the tone is an independently run neighbourhood business with real craft, not a franchise or a laundromat app.
4. Photography carries the trust — since there's no real photo library yet, licensed imagery must look authentic and be trivially replaceable, never cartoonish or AI-artifact-y.
5. Mobile is the primary surface — local "dry cleaner near me" search skews mobile; the phone experience is designed first, not adapted after.

## Accessibility & Inclusion

Explicitly requested in the brief: accessible color contrast, meaningful alt text on all imagery, full keyboard operability (nav, mobile menu, gallery lightbox, FAQ accordion), and respect for `prefers-reduced-motion` on all animation/video.
