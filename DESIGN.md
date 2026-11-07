---
name: St Marys Village Dry Cleaners
description: A cinematic amber-lit showroom brochure site for an independent local garment-care shop.
colors:
  ivory: "#FBF8F2"
  cream: "#F4EDE1"
  paper: "#FFFFFF"
  ink: "#241E17"
  ink-soft: "#5B5147"
  ink-faint: "#8C8176"
  charcoal-950: "#0B0A08"
  charcoal-900: "#17140F"
  charcoal-800: "#221C14"
  text-on-dark: "#F6EFE2"
  text-on-dark-muted: "#C9BCA8"
  amber-300: "#F3C57A"
  amber-400: "#E7AE56"
  amber-500: "#D89640"
  amber-600: "#BD7C2C"
  amber-700: "#8F5E22"
typography:
  display:
    fontFamily: "Playfair Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.6rem, 6vw, 4.6rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Playfair Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2rem, 3.6vw, 2.9rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Playfair Display, Iowan Old Style, Georgia, serif"
    fontSize: "1.1rem to 1.5rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.72rem to 0.78rem"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  sm: "10px"
  md: "16px"
  lg: "24px"
  pill: "999px"
spacing:
  section-y: "clamp(4rem, 8vw, 7.5rem)"
  section-x: "clamp(1.25rem, 5vw, 4rem)"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, {colors.amber-400}, {colors.amber-600})"
    textColor: "{colors.charcoal-950}"
    rounded: "{rounded.sm}"
    padding: "1em 1.9em"
    height: "min 48px"
  button-glass:
    backgroundColor: "rgba(255,255,255,0.08)"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.sm}"
    padding: "1em 1.9em"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.amber-700}"
    rounded: "{rounded.sm}"
    padding: "1em 1.9em"
  button-ghost-dark:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "1em 1.9em"
  fixed-call:
    backgroundColor: "linear-gradient(135deg, {colors.amber-400}, {colors.amber-600})"
    textColor: "{colors.charcoal-950}"
    rounded: "{rounded.pill}"
    padding: "0.95em 1.4em"
    height: "min 48px"
---

# Design System: St Marys Village Dry Cleaners

## Overview

**Creative North Star: "The Lit Counter"**

The shop's own showroom instruments — a steady amber worklight over a dark counter, panes of glass over display cases, cleanly bordered display cards for each garment category — are the interface's own vocabulary. A visitor opens on a cinematic, duotone-treated hero (dark charcoal ground, warm amber key light, deep vignette) under a glassmorphism nav, then the page resolves into a bright warm-ivory register of elevated, rounded cards: an asymmetric bento grid of services, a numeral-driven process timeline, a glowing why-us grid, a masonry gallery with lightbox, and a rich dark footer that closes the arc back to charcoal. This is a premium-local, craft-driven world, not a chain or a laundromat app — but unlike a flat, hairline-only system, depth here is real: glass, blur, gradient, and warm-tinted shadow all carry weight.

Confirmed visual rejections carried through finish review: no kicker/eyebrow label above any headline, no card that pairs a border with a box-shadow at rest ("ghost card"), no Unicode star/rating glyphs (SVG only), and no touch target under 48×48px. Gradient fill is reserved for exactly one word in the entire system (the hero's "Best"); it is not a general emphasis device.

**Key Characteristics:**
- A dark-charcoal-to-amber cinematic hero resolving into a bright warm-ivory register below it — a tonal arc, not a flat palette
- Sticky glassmorphism nav and a floating glass trust-card are native to this world; glassmorphism is not banned here, it is the showroom's "pane of glass over the display case"
- Warm-tinted shadow tokens (`--shadow-sm/md/lg/dark`) do real elevation work — never neutral gray
- A genuinely asymmetric bento-grid services section (xl/tall/wide/standard spans), not uniform icon tiles
- Exactly one sanctioned gradient-text use (hero's "Best"); everywhere else type is solid-color

## Colors

A warm, amber-lit palette: ivory and cream carry the resolved "showroom" register, charcoal anchors the cinematic hero/footer, and a five-step amber/brass ramp carries all action color, ratings, and the system's one gradient-text use.

### Primary
- **Amber 400 / Amber 600** (`#E7AE56` / `#BD7C2C`): the primary-button and fixed-call-affordance gradient (`linear-gradient(135deg, amber-400, amber-600)`); also the header "Call Now" pill.
- **Amber 500** (`#D89640`): nav active-link underline, scrollbar thumb, star-rating fill, hero-glow radial tint source.
- **Amber 700** (`#8F5E22`): outline-button text/border, hover link color on light grounds, focus-ring color, rating score numerals.
- **Amber 300** (`#F3C57A`): gradient-text start stop (hero "Best" only), scroll-cue dot, process-step numeral fill.
- **Amber Glow** (`rgba(216,150,64,0.45)`): the ambient glow behind hover shadows and hero background blobs — never a flat fill.

### Neutral
- **Ivory** (`#FBF8F2`): page resting background; the "after"-register surface for Services, Why, Gallery, FAQ.
- **Cream** (`#F4EDE1`): secondary light surface for Process and Contact, a half-step warmer than ivory to vary section rhythm.
- **Paper** (`#FFFFFF`): card surfaces (bento cards, why cards, contact-list rows, reviews card).
- **Ink / Ink Soft / Ink Faint** (`#241E17` / `#5B5147` / `#8C8176`): primary body text, secondary/lede copy, and faint labels on light grounds respectively.
- **Charcoal 950 / 900 / 800** (`#0B0A08` / `#17140F` / `#221C14`): the hero's dim "before" register and the footer background.
- **Text on Dark / Text on Dark Muted** (`#F6EFE2` / `#C9BCA8`): body and muted-body text on every dark/glass surface (hero, nav-on-transparent, footer).

### Named Rules
**The One Gradient Rule.** A warm amber gradient text-fill is used in exactly one place in the whole system — the word "Best" in the hero h1. It is a brief-sanctioned emphasis device, not a general pattern; no other heading or word takes a gradient fill.

**The Lit Glass Rule.** Glassmorphism (translucent fill + `backdrop-filter: blur`) is native to this world and appears deliberately in three places — the sticky nav, the floating trust-card, and the glass hero CTA — standing in for "panes of glass over the display case." It is not decoration to scatter onto arbitrary surfaces; it marks a surface that floats over or compresses against other content.

## Typography

**Display Font:** Playfair Display (with Iowan Old Style, Georgia, serif fallback)
**Body Font:** Plus Jakarta Sans (with system sans-serif fallback)

**Character:** A confident serif display paired with a clean geometric-humanist sans body — cinematic and premium-local, not corporate.

### Hierarchy
- **Display** (700, `clamp(2.6rem, 6vw, 4.6rem)`, line-height 1.08): hero h1 only; carries the system's one gradient-text word.
- **Headline** (700, `clamp(2rem, 3.6vw, 2.9rem)`, line-height 1.12): every section's `.section-title` (Services, Process, Why, Gallery, Reviews, Contact, FAQ).
- **Title** (700, 1.1rem–1.5rem, line-height 1.25): component-level headings — bento-card `h3` (1.22rem, 1.5rem in the xl card), why-card `h3` (1.08rem), process-step `h3` (1.18rem), accordion trigger (1.1rem).
- **Body** (400, 1rem, line-height 1.6): running copy throughout.
- **Label** (700, 0.72rem–0.78rem, letter-spacing 0.08em–0.1em, uppercase): `bento-tag`, `contact-label`, footer column headers, `brand-sub`.

### Named Rules
**The Serif-Weight Rule.** Every Playfair Display use in the system is weight 700, never italic and never a lighter weight; the serif carries authority through weight, not style variation.

## Layout

A single-column, full-bleed section stack. Inner content is constrained by `.section-inner` (max-width 1320px, responsive padding `clamp(1.25rem, 5vw, 4rem)` horizontal, section rhythm `clamp(4rem, 8vw, 7.5rem)` vertical). The services section uses a 4-column CSS grid with genuinely asymmetric spans (`bento-card--xl` = 2×2, `--tall` = 1×2, `--wide` = 2×1, standard = 1×1) rather than uniform tiles. The process section uses a 4-column horizontal timeline with a dashed connecting line (removed on tablet/mobile, where it collapses to a stacked single column). The gallery uses CSS multi-column masonry (`columns: 4 260px`, reducing to 2 then 1 column) rather than a grid. Below 1080px the bento and why grids collapse to 2 columns; below 860px the nav becomes a full-screen slide-in drawer with a backdrop dim; below 760px all grids collapse to a single column and the contact map un-stickies.

## Elevation & Depth

This is a lifted system, not a flat one: warm-tinted shadow tokens (never neutral gray) do real elevation work at rest, on hover, and as ambient glow. Glass surfaces (nav, trust-card, hero glass button) add a second depth register via `backdrop-filter: blur`.

### Shadow Vocabulary
- **`--shadow-sm`** (`0 2px 8px -2px rgba(43,31,15,0.12)`): resting elevation for bento cards, why cards, contact-list rows, hours-matrix, gallery items, scrolled header.
- **`--shadow-md`** (`0 12px 28px -10px rgba(43,31,15,0.18)`): hover elevation for bento/gallery cards; resting elevation for the reviews card and header-call pill.
- **`--shadow-lg`** (`0 24px 60px -18px rgba(43,31,15,0.28)`): the floating trust-card and the contact map frame; hover elevation on bento cards.
- **`--shadow-dark`** (`0 20px 50px -14px rgba(0,0,0,0.55)`): the fixed call affordance and the lightbox image, the two elements that must read as floating over any background.
- **Amber ring-glow** (`box-shadow: 0 0 0 1px var(--amber-400), 0 20px 46px -16px var(--amber-glow)`): the why-card hover state — a glow ring built entirely from box-shadow, never a `border`.

### Named Rules
**The Shadow-Only Elevation Rule ("no ghost cards").** A card declares elevation via `box-shadow` alone at rest and on hover. No card pairs a `border` with a `box-shadow` for the same edge; where a ring effect is wanted (why-card hover), it is built as a `box-shadow` spread, never an actual `border` property. Glass surfaces (nav, trust-card) are the one exception, since their border is doing material-edge work for the glass itself, not card elevation.

## Shapes

Generously rounded throughout: `--r-sm` (10px) on buttons and bento tags, `--r-md` (16px) on gallery items and contact rows, `--r-lg` (24px) on bento/why/reviews cards and the trust-card, `--r-pill` (999px) on the fixed call affordance, header-call pill, and all circular icon badges. No sharp corners appear anywhere in the system. Borders are rare and functional: glass edges (nav-scrolled, trust-card, glass button) use a 1px translucent-white border to define the pane; cards never carry a border for elevation (see Shadow-Only Elevation Rule).

## Components

### Buttons
- **Shape:** 10px radius (`--r-sm`), min-height 48px on every variant.
- **Primary:** amber gradient fill (`linear-gradient(135deg, #E7AE56, #BD7C2C)`), charcoal-950 text, `--shadow-md` at rest; on hover the shadow shifts to an amber-glow spread and the button lifts 2px. Primary CTAs additionally carry `.btn-shimmer`, a diagonal white sheen that sweeps left-to-right on hover/focus.
- **Glass:** translucent white fill (`rgba(255,255,255,0.08)`) with a 1px translucent-white border and `backdrop-filter: blur(10px)`; used for the hero's secondary CTA over the dark hero image.
- **Outline:** transparent fill, amber-500 border, amber-700 text; fills solid amber on hover.
- **Ghost-Dark:** transparent fill, ink-colored border, for dark-on-light contexts; fills ink on hover.

### Cards / Containers
- **Corner Style:** 24px radius (`--r-lg`) on bento, why, and reviews cards.
- **Background:** paper (`#FFFFFF`) on all card surfaces.
- **Shadow Strategy:** `--shadow-sm` at rest, `--shadow-md`/`--shadow-lg` or amber ring-glow on hover — see Elevation & Depth. No border.
- **Internal Padding:** bento-copy 1.4rem/1.5rem/1.6rem; why-card 2rem/1.6rem; reviews-card `clamp(2rem, 4vw, 3rem)`.

### Navigation
- **Style:** fixed glass header. Transparent over the hero (text-on-dark links); past ~scroll, gains a translucent ivory fill (`rgba(251,248,242,0.78)`), `backdrop-filter: blur(18px) saturate(1.4)`, and a hairline bottom border, compressing from 88px to 74px height. Link underline sweeps in from the left on hover/active.
- **Mobile (≤860px):** hamburger toggle opens a full-screen ivory slide-in drawer (`translateX(100%→0`) with a backdrop dim (`rgba(11,10,8,0.6)`, blurred), large serif nav links, and a pinned gradient "Call" CTA at the bottom of the drawer.
- **Call affordance:** the header carries a persistent pulsing-icon "Call Now" pill (desktop); a fixed bottom-right pill duplicates it once the hero scrolls out of view, never relocating again, with its own ambient pulse ring and `--shadow-dark`.

### Trust Card (signature component)
A floating glass card (`rgba(255,255,255,0.78)`, `backdrop-filter: blur(20px)`) carrying the 5.0★/TrueLocal social proof, overlapping the hero/services seam with a negative top margin (`clamp(-100px, -9vw, -70px)`). **Construction rule:** the negative margin lives on the card itself, not on its wrapper — the wrapper (`.trust-bar-wrap`) stays a normal, non-overflowing block with its own `background: var(--ivory)`. This is deliberate: if the offset were applied to the wrapper instead, the following section's opaque background would clip the card's overflow. Any future floating-overlap element should repeat this pattern (offset on the floating element, not the container).

### Bento Grid (signature component)
An asymmetric 4-column services grid (`xl` = 2×2, `tall` = 1×2, `wide` = 2×1, standard = 1×1) of image-top cards with a zoom-on-hover image, an optional floating category tag (glass pill, top-left), and a cta-row that fades/slides in on hover. Not a uniform icon-tile grid.

### Process Timeline (signature component)
A four-step horizontal timeline with a dashed amber connecting line. The step number is an outlined/muted serif numeral (`-webkit-text-stroke`, transparent fill) rather than a filled numeral or an icon tile — reserved for this one section because the 01–04 sequence is real; not reused as decoration elsewhere.

### Why-Us Grid (signature component)
A 4-card grid where the icon sits **beside** the heading (not stacked above it) inside a circular amber-tinted badge; hover adds the amber ring-glow (box-shadow only, no border) described in Elevation & Depth.

### Gallery / Lightbox (signature component)
A CSS multi-column masonry grid of rounded, shadow-sm image tiles with a hover zoom and a reveal expand-icon, opening into a full-screen dark lightbox with keyboard (arrow/Escape), swipe, and focus-return support.

### Contact Hub
A split grid: a contact list of icon + label + value rows (each with a 48×48px-minimum copy-to-clipboard button), an hours matrix with dashed row dividers, and a sticky map frame with a paper border and a floating "Get Directions" glass badge.

### FAQ Accordion
Borderless, hairline-divided rows; trigger carries a rotating `+`/`×` icon (built from two CSS pseudo-elements, not a glyph or icon font) and the panel expands via `grid-template-rows: 0fr → 1fr`, respecting `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** reserve the amber gradient text-fill for the hero's "Best" and nowhere else (The One Gradient Rule).
- **Do** elevate cards with `box-shadow` alone, never pairing a card border with a card shadow; build ring/glow hover effects as a box-shadow spread, not a `border` (The Shadow-Only Elevation Rule).
- **Do** keep glassmorphism to the three surfaces that are meant to float or compress over other content (nav, trust-card, hero glass CTA) — not decoration on arbitrary panels.
- **Do** author every icon and rating glyph as inline SVG, never a Unicode symbol or icon font.
- **Do** keep every interactive control (buttons, copy buttons, nav toggle, fixed call) at a 48×48px minimum touch target.
- **Do** put the floating-overlap offset on the floating element itself (e.g. the trust-card), never on its wrapper, so the following section's background can never clip it.
- **Do** reserve the outlined/muted serif numeral treatment for the Process section's real 01–04 sequence; do not add decorative numbering elsewhere.

### Don't:
- **Don't** invent review content, star counts, pricing, or years-in-business figures in any new copy; Reviews shows only the sourced TrueLocal aggregate, linked out.
- **Don't** add a hard-offset/neobrutalist drop shadow anywhere; all shadows in this system are soft, warm-tinted, and diffuse.
- **Don't** apply the bento asymmetric-span treatment to a grid where the content isn't genuinely unequal in weight; uniform content gets a uniform grid (why-us, contact-list).
