---
name: St Marys Village Dry Cleaners
description: A cinematic, forest-green garment-care identity built as a true multi-page site — a shared chrome (mega-menu nav, drawer, fixed-call, footer) wrapping a homepage of layered scroll/parallax storytelling and inner pages of flatter, reusable editorial components.
colors:
  forest: "#183B32"
  forest-deep: "#102820"
  cream: "#F5F0E6"
  beige: "#D9CCB8"
  charcoal: "#252A26"
  gold: "#B99A69"
  gold-ink: "#8C7447"
  white: "#FFFFFF"
  text-on-dark: "#F5F0E6"
  text-on-dark-muted: "rgba(245,240,230,0.68)"
typography:
  display:
    fontFamily: "Cormorant Garamond, Playfair Display, Georgia, serif"
    fontSize: "clamp(2.2rem, 7.6vw, 6.4rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.005em"
  pageHeroH1:
    fontFamily: "Cormorant Garamond, Playfair Display, Georgia, serif"
    fontSize: "clamp(2.6rem, 5.5vw, 4.6rem)"
    fontWeight: 500
    lineHeight: 1.06
  sectionTitle:
    fontFamily: "Cormorant Garamond, Playfair Display, Georgia, serif"
    fontSize: "clamp(2.1rem, 4vw, 3.4rem)"
    fontWeight: 500
    lineHeight: 1.1
  stat:
    fontFamily: "Cormorant Garamond, Playfair Display, Georgia, serif"
    fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)"
    fontWeight: 600
  body:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.7rem to 0.86rem"
    fontWeight: 600 to 700
    letterSpacing: "0.02em to 0.14em"
rounded:
  sm: "4px"
  md: "10px"
  pill: "999px"
spacing:
  section-y: "clamp(3.5rem, 7vw, 7rem)"
  section-x: "clamp(1.25rem, 5vw, 4rem)"
  max-w: "1480px"
components:
  btn-primary:
    backgroundColor: "{colors.forest-deep}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "1em 2em"
    height: "min 48px"
  btn-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.forest-deep}"
    rounded: "{rounded.pill}"
    padding: "1em 2em"
    height: "min 48px"
  btn-outline-light:
    backgroundColor: "transparent"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.pill}"
    border: "1px solid rgba(245,240,230,0.4)"
  btn-outline-dark:
    backgroundColor: "transparent"
    textColor: "{colors.forest-deep}"
    rounded: "{rounded.pill}"
    border: "1px solid rgba(37,42,38,0.28)"
  header-cta:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.forest-deep}"
    rounded: "{rounded.pill}"
    padding: "0.6em 1.4em"
  fixed-call:
    backgroundColor: "{colors.forest-deep}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "0.95em 1.4em"
    height: "min 48px"
---

# Design System: St Marys Village Dry Cleaners

## Overview

**Creative North Star: "The Atelier"**

This system fully replaces "Quiet Luxury" (ivory/white/stone/charcoal/champagne, Playfair Display + Inter, a single-page 7-section stack). Nothing from that palette, type pairing, or single-page structure carries forward. Quiet Luxury had itself replaced "The Linen Press" (forest green/cream/peach/sage/coral/butter, DM Serif Display + Manrope, a 12-section hue-rotation stack) — Atelier's forest/cream/gold palette echoes Linen Press's forest green in spirit, but the two are unrelated builds: Atelier is a true multi-page architecture (see PRODUCT.md's Stack section), not a revival of either superseded system's component set.

The build is a directory-routed multi-page site: `index.html` (home) plus `/about/`, `/services/` (hub + five detail pages), `/our-process/`, `/why-choose-us/`, `/gallery/`, `/contact/`, `/faq/`, `/privacy/`, `/terms/`, each its own `index.html` sharing `css/tokens.css` + `css/layout.css` (+ `css/page.css` on inner pages, `css/home.css` only on the homepage) and `js/common.js` (+ `js/home.js` only on the homepage). This reintroduces a standalone FAQ accordion and a dedicated Why Choose Us page — both of which the superseded single-page system had folded away or dropped — because a multi-page site can afford dedicated routes a single scroll-stack could not.

**Key Characteristics:**
- Two distinct visual registers sharing one chrome: the homepage layers scroll-driven and pointer-driven motion (hero word-reveal, mouse-parallax, 3D tilt, scroll-parallax fabric layers) over full-bleed photography, while every inner page is a flatter, calmer stack of `.page-hero` + reusable `.page-section`/`.prose`/grid components — motion is a homepage register, not a sitewide one.
- A single warm accent (gold/gold-ink) against a forest-deep dark register and a cream/white light register — no second accent hue anywhere in the built CSS.
- A deliberate radius split: photography and image tiles use `--r-sm` (4px) or `--r-md` (10px) depending on context, while every button, pill-shaped chrome element (header, header-cta, fixed-call, explorer-tabs, lightbox controls) uses `--r-pill` (999px) — images and controls never share a radius value.
- The homepage's "garment showcase" and the brief's request for literal interactive 3D are both honestly built from CSS 3D transforms (`perspective`/`rotateX`/`rotateY` via mousemove in `js/home.js`) applied to real photography with click/hover hotspots — there is no GLB/GLTF asset or WebGL pipeline in this project (confirmed in PRODUCT.md), so no 3D-model claim is made anywhere in copy or markup.
- All JS-driven motion (hero word/sub entrance, hero parallax, garment-stage tilt, fabric-layer scroll parallax, call-pulse, scroll-reveal stagger) is gated behind `prefers-reduced-motion`, both in CSS (`animation-duration`/`transition-duration` collapse in `tokens.css`) and in `js/home.js`/`js/common.js` (`reduceMotion` checks).

## Colors

A cinematic, low-saturation palette: cream and white carry nearly every light surface, forest-deep is the one dark register (hero, page-hero, mega-menu, fixed-call, footer, final CTA), and gold is the system's single warm accent.

### Primary
- **Forest** (`#183B32`): `.btn-primary`/`.fixed-call` hover fill, scrolled-header hover state, process-step icon hover color.
- **Forest Deep** (`#102820`): hero/page-hero/mega-menu/footer/final-cta background, `.btn-primary` resting fill, skip-link background, scrolled-header fill (as `rgba(16,40,32,0.92)`), service-tile/gallery-item/related-card scrim base.
- **Charcoal** (`#252A26`): body text color, hero-media fallback background, process/stat body copy.

### Accent
- **Gold** (`#B99A69`): `.btn-gold` fill, header-cta fill, nav-link hover/active underline+color, hero accent word, step-icon/stat-num color, reviews-link color, scrollbar thumb, text-selection highlight, fixed-call pulse ring.
- **Gold Ink** (`#8C7447`): focus-ring color, `.btn-gold`/header-cta hover fill, prose link and explorer-link/contact-directions color — the text-safe darker partner to gold for anything read as a link on a light ground.

### Neutral
- **Cream** (`#F5F0E6`): page body background, light-register sections (service-explorer, gallery preview, footer text), `.btn-primary`/`.btn-gold` text where on dark.
- **White** (`#FFFFFF`): garment-showcase/process/service-detail/about/gallery-full/faq background register.
- **Beige** (`#D9CCB8`): process connecting-line and step-num stroke, hours-list/process-full-item divider, contact-map-frame placeholder fill, fabric-layer tint accents.
- **Text on Dark / Text on Dark Muted** (`#F5F0E6` / `rgba(245,240,230,0.68)`): body and muted-body text on the forest-deep dark register throughout (hero sub-copy, why/stat labels, footer copy, page-hero paragraph).

### Named Rules
**The Single-Accent Rule.** Gold/gold-ink are the system's only warm color; every other surface is cream, white, beige, charcoal, or forest. There is no second accent hue — carried forward in spirit (not in token value) from the superseded Quiet Luxury system's same restraint rule.

## Typography

**Display Font:** Cormorant Garamond (with Playfair Display, Georgia, serif fallback), loaded at weights 400/500/600/700 plus italic 500 via Google Fonts, every page.
**Body Font:** Manrope (with system sans-serif fallback), loaded at weights 400/500/600/700, every page.

**Character:** This is a different serif voice from the superseded Quiet Luxury system's Playfair Display, though both pairings use the full 400–700 weight range so weight itself still carries hierarchy (700 for hero/display, 500 for section titles and page-hero h1, 600 for stat numerals).

### Hierarchy
- **Display** (700, `clamp(2.2rem, 7.6vw, 6.4rem)`, line-height 1.08): homepage hero `h1` only, built from per-word `<span class="word">` entrance animations, with one `.word--accent` (gold) word — a single stable headline with no scene-rotation.
- **Page-Hero H1** (500, `clamp(2.6rem, 5.5vw, 4.6rem)`, line-height 1.06): every inner page's `.page-hero h1`.
- **Section Title** (500, `clamp(2.1rem, 4vw, 3.4rem)`, line-height 1.1): every `.section-title` sitewide; `.section-title--on-dark` swaps to cream on forest-deep backgrounds.
- **Stat** (600, `clamp(1.9rem, 3.6vw, 2.9rem)`): homepage `.stat-num` only (Why/trust row).
- **Body** (400, 1rem, line-height 1.6): running copy (Manrope), including `.prose` on legal/about pages.
- **Label** (600–700, 0.7rem–0.86rem, letter-spacing 0.02em–0.14em, uppercase): brand-name/brand-sub, service-tag-equivalent captions, stat-label, footer column headers, header-cta.

## Layout

A shared `.section-inner` (max-width 1480px, horizontal padding `clamp(1.25rem, 5vw, 4rem)`) constrains every section; vertical section rhythm is `clamp(3.5rem, 7vw, 7rem)` via `--section-y`, used by both homepage sections and the generic `.page-section`. Inner pages use a consistent `.page-hero` (forest-deep background, dimmed/scrim'd photo, breadcrumb, h1, optional lede) followed by a stack of `.page-section`/`.page-section--alt`/`.page-section--dark` blocks or a page-specific component (services hub grid, service-detail split, process-full list, why-full-grid, gallery-full masonry column layout, contact split screen, FAQ accordion, about media+copy grid). The homepage alone adds scroll/pointer-driven sections (garment showcase, service explorer, fabric motion) not used anywhere else. Below 980px the header nav becomes a full-height right-side slide-in drawer (mega-menu collapses to a static expandable block, preview images hidden); below 860px two-column grids (garment-grid, explorer-layout, about-grid, why-full-grid) stack to one column and the homepage process/stat rows wrap to 2-then-1 columns with connecting lines/dividers removed or rotated.

### Named Rules
**The Chrome/Content Split Rule.** `css/tokens.css` (resets, palette, buttons, generic page-hero/section/prose) and `css/layout.css` (header, mega-menu, mobile drawer, fixed-call, footer) load on every page unconditionally; `css/home.css` loads only on `index.html` and `css/page.css` loads only on inner pages — never both on the same page. This mirrors the project's directory-per-route architecture (see PRODUCT.md) and keeps homepage-only motion CSS out of every inner page's payload.

## Elevation & Depth

A soft, diffuse shadow system — no hard offsets anywhere in the built CSS — reserved mostly for floating/interactive surfaces (mega-menu, buttons, fixed-call, lightbox image, service-hub/service-detail/why-full cards) rather than flat photography tiles, which mostly rely on gradient scrims instead of shadow for depth.

### Shadow Vocabulary
- **`--shadow-sm`** (`0 2px 10px -4px rgba(16,40,32,0.14)`): scrolled header, service-hub-card/related-card/why-full-card/gallery-full-grid item resting elevation.
- **`--shadow-md`** (`0 18px 38px -16px rgba(16,40,32,0.24)`): `.btn-primary` resting elevation, service-hub-card hover elevation.
- **`--shadow-lg`** (`0 32px 70px -22px rgba(16,40,32,0.32)`): `.btn-primary` hover elevation, mega-menu, garment-stage, explorer-image, fabric-layer, service-detail-media, about-media.
- **`--shadow-dark`** (`0 20px 50px -14px rgba(0,0,0,0.5)`): fixed-call affordance and the lightbox image.

## Shapes

**The Radius Split Rule.** Three radius values are used, by context rather than a strict binary: `--r-sm` (4px) on smaller/flatter photographic surfaces (gallery items, lightbox image, contact-map-frame, mega-menu-preview, skip-link), `--r-md` (10px) on larger "staged" photography and cards (garment-stage, explorer-image, service-detail-media, about-media, service-hub-card, mega-menu, why-full-card), and `--r-pill` (999px) on every button, the header/header-inner, header-cta, fixed-call, explorer-tab, gallery-expand and lightbox controls. No surface mixes a pill radius onto photography or a sub-pill radius onto a button.

## Components

### Buttons
- **Shape:** fully pill-shaped (`--r-pill`), min-height 48px on every variant.
- **Primary** (`.btn-primary`): forest-deep fill, cream text, `--shadow-md` resting / `--shadow-lg` hover; used on both light and dark backgrounds (about, service-detail, process-full, footer-adjacent CTAs).
- **Gold** (`.btn-gold`): gold fill, forest-deep text, `--shadow-sm`; hero/contact/final-cta primary conversion action — the single boldest-colored CTA in the system.
- **Outline Light** (`.btn-outline-light`): transparent fill, translucent cream border and text; dark backgrounds only (hero, contact-intro-panel).
- **Outline Dark** (`.btn-outline-dark`): transparent fill, translucent forest-deep border and text, inverts to solid forest-deep fill on hover; light backgrounds (about, service-detail, why-choose-us, gallery preview).

### Navigation
- **Style:** a fixed-position header, transparent over the homepage hero, gaining a translucent forest-deep fill (`rgba(16,40,32,0.92)`), `backdrop-filter: blur(16px) saturate(1.2)`, and a hairline border on scroll (`.is-scrolled`); every inner page loads it pre-solid via `.is-solid` since there is no hero to show through.
- **Active-page underline:** `js/common.js` reads `body[data-section]` and matches it against every `[data-nav]` link, adding `.is-active`/`aria-current="page"` — the same hover-underline treatment (`.main-nav a::after`, gold, scaleX) used for hover doubles as the current-page indicator.
- **Services mega menu:** a two-column dropdown (`.has-mega:hover`/`:focus-within`) listing five service links plus a bold "View All Services" link, beside a single `aria-hidden="true"` preview pane whose five `<img>`s sit at `opacity:0` and swap to `.is-shown` on link hover/focus (`js/common.js` `showMegaPreview`) — a sanctioned hover-to-reveal preview pattern, not a hidden-content defect.
- **Mobile (≤980px):** hamburger toggle opens a right-side slide-in forest-deep drawer; the mega-menu collapses to a static `is-open` block (preview images hidden) and a gold "Call" pill is pinned at the drawer's bottom; a separate forest-deep backdrop handles outside-click dismissal.
- **Call affordance:** a fixed bottom-right forest-deep pill (`.fixed-call`) with an ambient gold pulse ring, appearing once the hero/page-hero scrolls out of view and hiding again once the footer enters view (`js/common.js` `onScroll`).

### Hero (homepage only)
A full-viewport (`100svh`) autoplaying/looping video background (grayscale(0.1) + contrast(1.05) filtered, playback rate 0.65x), a layered radial+linear scrim, and a single stable large headline built word-by-word (`.word` spans, staggered `hero-word-in` keyframes, blur-to-sharp) — not scene-synced or rotating text, regardless of what any earlier brief described. A subtle JS mouse-parallax moves the whole `#heroContent` block (±14px/±10px via `js/home.js`), gated behind `prefers-reduced-motion`.

### Garment Showcase (homepage, signature component)
A real photograph (`#garmentStage`) with three button-based hotspots revealing a small note panel on hover/focus/click, plus a lightweight CSS 3D tilt (`perspective(1000px)` + `rotateX`/`rotateY`, via `mousemove` in `js/home.js`) standing in for the brief's "interactive 3D" request — there is no 3D model asset in this project (confirmed in PRODUCT.md), so this CSS-3D-on-photography technique is the honest implementation, not a placeholder to be later swapped for WebGL.

### Service Explorer (homepage, signature component)
A tabbed two-pane layout: five `role="tab"` buttons drive both an image crossfade (`.explorer-image img.is-shown`) and a text/CTA swap (`js/home.js`), each tab's data carried in `data-image`/`data-title`/`data-desc`/`data-href` attributes rather than duplicated markup per tab.

### Fabric Motion (homepage, signature component)
A dark forest-deep band with three absolutely-positioned, varying-opacity photo layers (`.fabric-layer`) that translate vertically on scroll at independent speeds (`data-speed`, via `js/home.js` `updateFabricParallax`), gated behind `prefers-reduced-motion` and collapsed to a single simplified layer below 760px.

### Process (two forms, shared vocabulary)
Both the homepage's compact `.process-row` (4 steps, icon + outlined serif numeral + one-word label + hover-revealed caption, hairline connecting line removed below 860px) and the dedicated `/our-process/` page's `.process-full-list` (5 steps, full numbered row with heading + paragraph, hairline top/bottom borders) share the same outlined-numeral (`-webkit-text-stroke`, beige) and forest-deep heading vocabulary — the full page is a more detailed restatement, not a different design language.

### Why Choose Us (two forms, shared vocabulary)
The homepage's dark `.stat-row` (four Playfair-weight/Cormorant numerals + muted uppercase labels, hairline dividers, a single gold TrueLocal link) is a compact trust strip; the dedicated `/why-choose-us/` page's `.why-full-grid` (four white `.why-full-card` tiles with heading + paragraph, `--shadow-sm`, `--r-md`) is the expanded prose form of the same four claims (local/personal, drive-up convenience, service breadth, 5.0 rating) — no icon-card-block pattern is used in either form.

### Gallery / Lightbox
The homepage preview uses two fixed-height `.mosaic-row` flex row-groups (`--g1`/`--g2`, varied `flex: 1`/`1.8` tiles) for an asymmetric mosaic without CSS Grid spanning; the dedicated `/gallery/` page instead uses a CSS multi-column masonry (`columns: 3 260px`, `break-inside: avoid`) — two different layout techniques for the same flat, gradient-scrim, hover-zoom `.gallery-item` tile. Both feed the same shared lightbox (`js/common.js`): keyboard (arrow/Escape), touch-swipe, and focus-return support, with a `0fr`→`1fr` grid-row accordion-style open for the FAQ sharing the same interaction codebase conceptually (same ease, same reveal pattern) though a separate component.

### Contact Split
A 50/50 split screen: a dark, photo-backed `.contact-intro-panel` (forest-deep scrim over a grayscale background image) carrying the headline and Call/Email CTAs, beside a light `.contact-card-panel` carrying the address, a dashed-divided hours list, and a `--r-sm` map frame with an embedded Google Maps iframe. No booking form anywhere in this section.

### FAQ Accordion
A reinstated standalone page (`/faq/`): each `.accordion-item` is a real `<h3><button></h3>` trigger (not a styled `<div>`) with a CSS grid-row (`0fr`→`1fr`) open/close transition and a plus/cross icon built from two pseudo-element bars — `js/common.js` toggles `.is-open` and `aria-expanded` on click.

## Do's and Don'ts

### Do:
- **Do** keep homepage-only motion (word-reveal, parallax, 3D tilt, fabric scroll-parallax) confined to `css/home.css`/`js/home.js`; inner pages stay in the calmer `.page-hero`/`.page-section`/`.prose` register of `css/page.css`.
- **Do** gate every JS-driven motion effect behind `prefers-reduced-motion`, matching both the CSS media query in `tokens.css` and the `reduceMotion` checks in `js/home.js`/`js/common.js`.
- **Do** use `--r-sm`/`--r-md` for photographic surfaces by size/context and `--r-pill` only for controls and chrome; never a pill radius on an image or a sub-pill radius on a button (The Radius Split Rule).
- **Do** keep all internal links and asset paths relative (`services/`, `../css/tokens.css`), never root-relative — a brand-truth/deploy constraint from PRODUCT.md's dual GitHub Pages/Render hosting, not a style preference.
- **Do** implement any "interactive 3D" request as CSS 3D transforms/parallax on real photography (as the garment showcase does), never as a fabricated WebGL/GLB claim — there is no 3D asset pipeline in this project.
- **Do** keep every interactive control (buttons, nav toggle, fixed call, lightbox/accordion controls, explorer tabs) at a 48×48px minimum touch target.
- **Do** use real line-art SVG icons (never a glyph/icon font) for process steps, contact affordances, and gallery/lightbox/accordion controls.

### Don't:
- **Don't** carry over any token, color, or component from the superseded "Quiet Luxury" system (ivory/stone/charcoal/champagne, Playfair Display + Inter, the single-page 7-section stack, its fixed-row-group mosaic rule, its radius-contrast rule); this is a full replacement, not a merge.
- **Don't** add a booking/scheduling form to Contact; the business is walk-in/drive-up only (see PRODUCT.md), a brand-truth constraint, not a stylistic choice.
- **Don't** invent review content, star counts, pricing, or years-in-business figures; the homepage stat row, the Why Choose Us page, and the footer show only the sourced TrueLocal aggregate (5.0, 8 reviews), linked out.
- **Don't** place a kicker/eyebrow label above any heading anywhere. A reserved `.eyebrow-label { display: none; }` rule exists in `tokens.css` as a dead, never-invoked class — it is not used on any page in this build and must not be activated; this is a craft-floor ban carried forward from the prior system's review, not a component to bring back.

## Not Canonized

- **The `.eyebrow-label` dead CSS rule.** `css/tokens.css` still carries a `display: none` eyebrow-label selector with a comment pointing back to this ban. It is inert and unused in every page scanned (home, about, services hub/detail, our-process, why-choose-us, gallery, contact, faq) — a leftover guard rail, not a system component. Left in place as a safety net; not documented as an available pattern and not something future pages should reference or extend.
