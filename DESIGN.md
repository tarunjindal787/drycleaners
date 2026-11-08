---
name: St Marys Village Dry Cleaners
description: An editorial fabric-care brochure site built from image-led tiles and a paced, multi-hue section rhythm.
colors:
  forest-deep: "#164D3A"
  forest-dark: "#0E3527"
  emerald: "#24765A"
  cream: "#FFF8EE"
  ivory: "#F8F3EA"
  paper: "#FFFFFF"
  peach: "#F6C7AD"
  sage: "#DCE9D9"
  coral: "#EF795D"
  coral-ink: "#B9502F"
  butter: "#F4DB92"
  ink: "#252823"
  ink-soft: "#585B52"
  ink-faint: "#8B8D82"
  text-on-dark: "#FFF8EE"
  text-on-dark-muted: "#CFE0D6"
typography:
  display:
    fontFamily: "DM Serif Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.6rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "DM Serif Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.1rem, 3.8vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  title:
    fontFamily: "DM Serif Display, Iowan Old Style, Georgia, serif"
    fontSize: "1.15rem to 1.25rem"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.72rem to 0.78rem"
    fontWeight: 700
    letterSpacing: "0.08em to 0.1em"
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
    backgroundColor: "{colors.cream}"
    textColor: "{colors.forest-dark}"
    rounded: "{rounded.sm}"
    padding: "1em 1.9em"
    height: "min 48px"
  button-primary-dark:
    backgroundColor: "{colors.forest-deep}"
    textColor: "{colors.cream}"
    rounded: "{rounded.sm}"
    padding: "1em 1.9em"
    height: "min 48px"
  button-glass:
    backgroundColor: "rgba(255,248,238,0.1)"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.sm}"
    padding: "1em 1.9em"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.coral-ink}"
    rounded: "{rounded.sm}"
    padding: "1em 1.9em"
  fixed-call:
    backgroundColor: "{colors.forest-deep}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "0.95em 1.4em"
    height: "min 48px"
---

# Design System: St Marys Village Dry Cleaners

## Overview

**Creative North Star: "The Linen Press"**

This system reads as an editorial fabric-care spread, not a generic local-service grid: large image-led tiles stand in for icon-plus-heading cards, and a deliberate multi-hue section rhythm (forest green, ivory, sage, peach, cream, near-black) paces the page like a magazine rather than a flat single-background scroll. A visitor opens on a dark forest-green hero with a duotone-treated garment photograph, then moves through alternating light and dark registers — each section change is a page turn, not a repeated card pattern. Real photography, a real four-step drop-off process, and the sourced TrueLocal rating carry the trust work; nothing is invented to fill a gap.

This replaces "The Lit Counter" (amber/charcoal, glassmorphism nav, bento-grid cards) in full. The two systems are deliberately incompatible by design: this world uses flat image-led tiles instead of bento-span cards, a plain-marked list instead of an icon-circle grid for Why Choose Us and Reviews, and a different serif voice (DM Serif Display, never bold — it has no bold cut) in place of Playfair Display, specifically so the page reads as a genuine new identity rather than a palette reskin.

Confirmed visual rejections carried through finish review: no kicker/eyebrow label above any heading anywhere on the page (a "Most Popular" tag briefly drifted into that position above the featured service tile during build and was relocated onto the photo itself before ship); no card pairs a resting border with a box-shadow ("ghost card"); no generic 4-card icon grid for Why Choose Us or Reviews (the user's brief explicitly banned the pattern); no invented testimonial text (TrueLocal blocks scraping individual reviews, so only the sourced aggregate rating is shown).

**Key Characteristics:**
- A 12-section alternating light/dark/light background rhythm (forest-deep → ivory → sage → forest-deep → peach → cream → ivory → sage → ivory → forest-deep → ink) that paces the page, not a flat repeated surface
- One large full-bleed "featured" service tile with cream text overlaid directly on a photo under a gradient scrim — a distinct editorial technique, never repeated on the other six supporting tiles
- Shadow-only elevation everywhere; no card ever pairs a resting border with a box-shadow
- Two sections (Why Choose Us, Reviews) deliberately use a plain marked/divided list instead of a card grid, by brief and by necessity (no individually-attributed review text exists)
- DM Serif Display (weight 400 only, never bold) paired with Manrope — a different serif voice from the superseded system, chosen to make the replacement unmistakable

## Colors

A warm editorial palette built for section-to-section pacing: forest green anchors the dark registers, cream/ivory carry the resting registers, and peach/sage each give one section its own distinct identity; coral and butter are small precise accents, never filled surfaces.

### Primary
- **Forest Deep** (`#164D3A`): dark-register section background (hero, Why Choose Us, Final CTA), `.btn-primary-dark` fill, fixed-call-affordance fill, nav active-icon tint.
- **Forest Dark** (`#0E3527`): hero/final-CTA gradient partner to forest-deep, hover state for forest-deep buttons, `.btn-primary` text color.
- **Emerald** (`#24765A`): hero radial glow tint, scrollbar thumb, scrolled-nav brand-mark color.

### Secondary
- **Coral** (`#EF795D`): star-rating fill, nav-link hover underline, Why Choose Us list-item dot marker, `.btn-outline` border, selection highlight. Used only as a small accent or marker, never a filled surface.
- **Coral Ink** (`#B9502F`): a darkened coral reserved specifically for text and links on light backgrounds (trust-card link, contact-item hover, FAQ link, `.btn-outline` text, focus-ring color) so link color passes contrast; raw coral (`#EF795D`) is never used as body/link text.
- **Butter** (`#F4DB92`): hero headline emphasis word, header brand-mark (unscrolled), service-tag pill fill, footer link hover, scroll-cue dot — a second small accent distinct from coral.

### Neutral
- **Cream** (`#FFF8EE`): text-on-dark color throughout (hero, why, final-cta, footer headings), `.btn-primary` fill, featured-service-tile headline color.
- **Ivory** (`#F8F3EA`): resting section background (trust-bar/services, reviews, FAQ), page body background.
- **Paper** (`#FFFFFF`): card/row surfaces (contact-list rows, hours-matrix, map frame border).
- **Sage** (`#DCE9D9`): a distinct resting-register section background (Process, Contact), half-step cooler than ivory to vary the page rhythm; also the contact-icon badge fill.
- **Peach** (`#F6C7AD`): a distinct section background reserved for the storytelling spread only — gives that one section its own identity rather than repeating ivory or sage.
- **Ink / Ink Soft / Ink Faint** (`#252823` / `#585B52` / `#8B8D82`): primary body text, secondary/lede copy, and faint labels on light grounds.
- **Text on Dark / Text on Dark Muted** (`#FFF8EE` / `#CFE0D6`): body and muted-body text on every dark-register surface.

### Named Rules
**The Section Rhythm Rule.** Section background color is a deliberate pacing device, not a flat repeat: hero/why/final-cta/footer are dark (forest-deep, forest-deek-to-forest-dark, or ink), services/reviews/faq are ivory, process/contact are sage, storytelling is peach alone, gallery is cream. No two adjacent sections in the stack share the same background.

**The Coral-Ink Split Rule.** Raw coral (`#EF795D`) is reserved for stars, markers, borders, and large decorative elements. Any coral used as readable text or a link on a light background uses coral-ink (`#B9502F`) instead, to clear contrast — the two are never interchangeable.

## Typography

**Display Font:** DM Serif Display (with Iowan Old Style, Georgia, serif fallback)
**Body Font:** Manrope (with system sans-serif fallback)

**Character:** A quieter, single-weight editorial serif (DM Serif Display has no bold cut, so every use is weight 400) paired with a clean geometric sans body — deliberately a different serif voice from the superseded system's bold Playfair Display, so the page reads as a genuine new world.

### Hierarchy
- **Display** (400, `clamp(2.6rem, 6vw, 4.5rem)`, line-height 1.12): hero `h1` only; carries the butter-colored emphasis word.
- **Headline** (400, `clamp(2.1rem, 3.8vw, 3rem)`, line-height 1.12): every section's `.section-title`.
- **Title** (400, 1.15rem–1.25rem): component-level headings — service-tile `h3`, process-step `h3`, why-list item `h3`, accordion trigger, reviews-facts `h3`.
- **Body** (400, 1rem, line-height 1.6): running copy throughout (Manrope).
- **Label** (700, 0.72rem–0.78rem, letter-spacing 0.08em–0.1em, uppercase): `contact-label`, footer column headers, `brand-sub` (Manrope).

### Named Rules
**The No-Bold-Serif Rule.** DM Serif Display has no bold cut in the loaded weight set; every display/headline/title use in the system is weight 400. Emphasis within a serif heading is carried by color (the butter hero word) or italic, never by faking a bold weight.

## Layout

A single-column, full-bleed section stack of 12 sections, each constrained by `.section-inner` (max-width 1500px, responsive horizontal padding `clamp(1.25rem, 5vw, 4rem)`, section rhythm `clamp(4rem, 8vw, 7.5rem)` vertical). Services use a 3-column CSS grid of fixed tiles (one full-bleed featured tile above, six supporting tiles below) rather than spanning grid cells — a deliberate choice to avoid risky `grid-column`/`grid-row` spans after an empty-cell bug was caught earlier in the session; visual variety instead comes from alternating tile image aspect-ratios (4:3 standard, 3:4 for "tall"/"wide" variants). The process section is a 4-column horizontal timeline with a dashed connecting line (collapses to 2 columns at 1080px, line removed). The gallery uses CSS multi-column masonry (`columns: 4 260px`, reducing to 2 then 1). Below 1080px, why/story/reviews grids collapse to a single column; below 860px the nav becomes a full-screen slide-in drawer; below 760px all grids collapse to one column and the contact map un-stickies.

## Elevation & Depth

A shadow-only elevation system: every card or raised surface declares depth via `box-shadow` alone, never a resting border paired with a shadow. This was an explicit carry-forward guardrail from the prior system's finish review, enforced from the start of this build. Glass surfaces (nav-on-scroll, trust-card, hero glass button) are the one structural exception — their 1px translucent border defines the glass pane's material edge, not card elevation.

### Shadow Vocabulary
- **`--shadow-sm`** (`0 2px 8px -2px rgba(22,40,32,0.12)`): resting elevation for service tiles, contact-list rows, hours-matrix, gallery items, scrolled header.
- **`--shadow-md`** (`0 14px 30px -12px rgba(22,40,32,0.2)`): hover elevation for gallery items; resting elevation for header-cta and map-badge.
- **`--shadow-lg`** (`0 26px 60px -18px rgba(22,40,32,0.28)`): the floating trust-card, featured service tile, story/why media frames, contact-map frame.
- **`--shadow-dark`** (`0 20px 50px -14px rgba(0,0,0,0.5)`): the fixed call affordance and the why-media frame — elements that must read as floating over any background.

### Named Rules
**The Shadow-Only Elevation Rule.** A card or raised surface declares elevation via `box-shadow` alone, at rest and on hover. No surface pairs a `border` with a `box-shadow` for the same edge. Verified directly in the build: `.contact-list li`, `.hours-matrix`, and `.service-tile-media` all carry `box-shadow` with no accompanying border property.

## Shapes

Generously rounded throughout: `--r-sm` (10px) on buttons and the contact-icon badge, `--r-md` (16px) on gallery items and contact rows, `--r-lg` (24px) on service tiles, the trust-card, and media frames (story, why, contact-map), `--r-pill` (999px) on all pill buttons, the fixed call affordance, and circular markers. No sharp corners appear anywhere in the system. Borders are rare and purposeful: glass-pane edges (scrolled nav, trust-card, hero glass button) use a 1px translucent border to define the pane itself; the contact-map frame uses a 6px solid paper border as a photo-frame device. Cards never carry a border for elevation purposes (see Shadow-Only Elevation Rule).

## Components

### Buttons
- **Shape:** 10px radius (`--r-sm`), min-height 48px on every variant.
- **Primary** (`.btn-primary`): cream fill, forest-dark text, `--shadow-md`; for use on dark backgrounds (hero, why, final-cta).
- **Primary Dark** (`.btn-primary-dark`): forest-deep fill, cream text, `--shadow-sm`; for use on light backgrounds (services, contact).
- **Glass** (`.btn-glass`): translucent cream fill (`rgba(255,248,238,0.1)`) with a 1px translucent border and `backdrop-filter: blur(8px)`; dark backgrounds only (hero secondary CTA).
- **Outline** (`.btn-outline`): transparent fill, coral border, coral-ink text; fills solid coral with cream text on hover.

### Cards / Containers
- **Corner Style:** 24px radius (`--r-lg`) on service tiles and the trust-card; 16px (`--r-md`) on gallery items and contact rows.
- **Background:** paper (`#FFFFFF`) on contact-list rows and the hours-matrix; the service tiles and story/why media are photo-filled, not flat-color cards.
- **Shadow Strategy:** `box-shadow`-only at rest, see Elevation & Depth. No resting border on any card.
- **Internal Padding:** contact-list rows 1.1rem/1.2rem; hours-matrix 1.2rem/1.4rem.

### Navigation
- **Style:** fixed header, transparent over the hero (cream text), gaining a translucent ivory fill (`rgba(248,243,234,0.9)`), `backdrop-filter: blur(16px) saturate(1.3)`, and a hairline bottom border on scroll, compressing from 86px to 72px.
- **Mobile (≤860px):** hamburger toggle opens a full-screen ivory slide-in drawer with large DM Serif Display nav links and a pinned forest-deep "Call" CTA at the bottom.
- **Call affordance:** a fixed bottom-right forest-deep pill (`.fixed-call`) appears once the hero scrolls out of view, with an ambient pulse ring and `--shadow-dark`; never relocates again.

### Service Tiles (signature component)
One large full-bleed "featured" tile (Professional Dry Cleaning): a photo with a bottom gradient scrim and cream text overlaid directly on the image — a magazine-spread technique distinct from every other tile on the page. Six supporting tiles follow in a 3-column grid, each a plain photo-top card (no overlay text) with the heading and copy below the image; tag badges ("Specialty," "Long-Term Storage," "Most Popular") are positioned absolutely on the photo itself in every tile, including the featured one — never in the text column above a heading.

### Why Choose Us List (signature component)
A dark forest-deep section pairing one large real photograph with a plain marked list: a small coral dot (not an icon-in-a-circle, not a bordered card) precedes each item's heading and copy. Deliberately not a 4-card icon grid, per the user's own brief.

### Reviews Pull (signature component)
An ivory section pairing a large pulled rating stat ("5.0" in DM Serif Display at 4.5rem) with a plain top-rule-divided list of three verified facts. Not a card grid, for the same reason as Why Choose Us, and because no individually-attributed review text could be sourced — only the TrueLocal aggregate rating is shown.

### Process Timeline (signature component)
A four-step horizontal timeline with a dashed forest-deep connecting line. Step numerals use an outlined/transparent-fill serif treatment (`-webkit-text-stroke`, no fill) — reserved for this section because the 01–04 sequence is real, in-order information (drop off → discuss → collect → pick up), not decoration.

### Gallery / Lightbox
A CSS multi-column masonry grid of rounded, shadow-sm image tiles with a hover zoom and reveal expand-icon, opening into a full-screen dark lightbox with keyboard (arrow/Escape), swipe, and focus-return support. Visually restyled to this palette; behaviorally unchanged from the prior system.

### Contact Hub
A split grid: a contact list of icon + label + value rows (each paper, box-shadow-only, with a 48×48px-minimum copy-to-clipboard button), a dashed-divided hours matrix, and a sticky map frame with a paper border and a floating "Get Directions" badge. No booking form anywhere in this section — contact is real `tel:`/`mailto:`/in-person only, a durable brand-truth constraint (the business is walk-in/drive-up only; see PRODUCT.md), not a stylistic omission.

### FAQ Accordion
Borderless, hairline-divided rows; trigger carries a rotating `+`/`×` icon built from two CSS pseudo-elements (never a glyph or icon font), panel expands via `grid-template-rows: 0fr → 1fr`, respecting `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** alternate section background across the full page stack so no two adjacent sections share a color (The Section Rhythm Rule).
- **Do** elevate every card/raised surface with `box-shadow` alone, never a border-plus-shadow pair (The Shadow-Only Elevation Rule).
- **Do** use coral-ink, not raw coral, for any text or link on a light background; reserve raw coral for stars, dots, and borders (The Coral-Ink Split Rule).
- **Do** position any service-tile tag badge on the photo itself, never in the text column above a heading.
- **Do** keep DM Serif Display at weight 400 everywhere; it has no bold cut (The No-Bold-Serif Rule).
- **Do** keep every interactive control (buttons, copy buttons, nav toggle, fixed call) at a 48×48px minimum touch target.
- **Do** use a plain marked/divided list instead of a card grid for Why Choose Us and Reviews; do not default to a 4-card icon grid.

### Don't:
- **Don't** place a kicker/eyebrow label above any heading anywhere on the page — this was caught and fixed in this build's own finish review and must not recur.
- **Don't** invent review content, star counts, pricing, or years-in-business figures in any new copy; Reviews shows only the sourced TrueLocal aggregate, linked out.
- **Don't** add a booking/scheduling form to the Contact section; the business is walk-in/drive-up only (see PRODUCT.md) and this is a brand-truth constraint, not a stylistic choice.
- **Don't** achieve service-tile visual variety via `grid-column`/`grid-row` spanning; use fixed tiles with varied image aspect-ratios instead, to avoid the empty-cell bug class found earlier in this project.
- **Don't** carry over any token, color, or component from the superseded "Lit Counter" system (amber palette, Playfair Display, glassmorphism bento cards); this is a full replacement, not a merge.
