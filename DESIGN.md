---
name: St Marys Village Dry Cleaners
description: A minimalist, visual-first boutique identity built from full-bleed photography, a fixed-row editorial mosaic, and a quiet dark/light/dark section rhythm.
colors:
  ivory: "#F5F2EA"
  white: "#FFFFFF"
  stone: "#DCD7CD"
  charcoal: "#171918"
  charcoal-soft: "#44443F"
  champagne: "#C7AD85"
  champagne-deep: "#7D6342"
  text-on-dark: "#F5F2EA"
  text-on-dark-muted: "rgba(245,242,234,0.66)"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(3rem, 9vw, 7.2rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2rem, 3.8vw, 3.2rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.05rem to 1.5rem"
    fontWeight: 500
  stat:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)"
    fontWeight: 600
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.7rem to 0.86rem"
    fontWeight: 600 to 700
    letterSpacing: "0.02em to 0.24em"
rounded:
  img: "2px"
  sm: "3px"
  pill: "999px"
spacing:
  section-y: "clamp(4rem, 8vw, 8rem)"
  section-x: "clamp(1.25rem, 5vw, 4rem)"
  gap: "clamp(0.75rem, 1.6vw, 1.5rem)"
  max-w: "1560px"
components:
  btn-primary:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: "1.05em 2.1em"
    height: "min 48px"
  btn-outline-light:
    backgroundColor: "transparent"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.pill}"
    border: "1px solid rgba(245,242,234,0.4)"
  btn-outline-dark:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.pill}"
    border: "1px solid rgba(23,25,24,0.3)"
  header-cta:
    backgroundColor: "{colors.champagne}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.pill}"
    padding: "0.6em 1.4em"
  fixed-call:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: "0.95em 1.4em"
    height: "min 48px"
---

# Design System: St Marys Village Dry Cleaners

## Overview

**Creative North Star: "Quiet Luxury"**

This system fully replaces "The Linen Press" (forest green/cream/peach/sage/coral/butter, DM Serif Display + Manrope, a 12-section alternating-hue editorial stack). Nothing from that palette, type pairing, or component set carries forward. The new world reads as a minimalist, visual-first boutique identity — closer to an Apple/Aesop/luxury-fashion-editorial brochure than a warm multi-hue magazine spread: a restrained ivory/stone/charcoal/champagne palette, a single full-bleed hero video, and large photography doing almost all of the persuasion work, with short, quiet copy rather than paragraphs of trust-building prose.

The page is a 7-section stack (hero, services, process, why-choose-us, gallery, contact, footer). The previous system's standalone Reviews section and FAQ accordion are both gone in this redesign; the facts they carried were folded into Why Choose Us's stat row (customer rating, turnaround, drive-up access, locally run) and the Contact split screen (hours, map, direct TrueLocal link). These are not to be re-documented as current components — see Not Canonized below.

**Key Characteristics:**
- A quiet three-register rhythm (ivory → white → charcoal → ivory → white) rather than the superseded system's six-hue page-turn pacing
- A deliberate radius contrast: photography and image tiles are nearly square (`--r-img: 2px`), while every button, pill, and the floating navbar are fully rounded (`--r-pill: 999px`) — never the same radius vocabulary for images and controls
- The services and gallery sections both use independent fixed-height flex row-groups (not CSS Grid spanning) to build an asymmetric editorial mosaic without risking empty-cell gaps
- Playfair Display (used across its real weight range, 400–700, including an italic cut) paired with Inter — a different serif voice and weight behavior from the superseded system's bold-free DM Serif Display
- All JS-driven motion (hero mouse-parallax, 3D tile tilt, scroll-reveal stagger, call-pulse, scroll-cue) is gated behind `prefers-reduced-motion`, both in CSS (`animation-duration`/`transition-duration` collapse) and in `js/main.js` (`reduceMotion` guards)

## Colors

A restrained, low-saturation palette: ivory and white carry nearly every light surface, charcoal is the one dark register, and champagne is the system's single warm accent, used sparingly as a mark of attention rather than a filled surface.

### Primary
- **Charcoal** (`#171918`): hero/why/footer/contact-intro-panel background, `.btn-primary` fill, fixed-call fill, scrolled nav-toggle bars, skip-link background.
- **Charcoal Soft** (`#44443F`): scrolled nav-link color, process-step body copy, hours-row label text.

### Accent
- **Champagne** (`#C7AD85`): header-cta fill, service-tag text, nav-link hover underline/color, step-icon color, stat-num color, reviews-link color, text selection highlight, scrollbar thumb.
- **Champagne Deep** (`#7D6342`): eyebrow text color, focus-ring color, header-cta hover fill, contact-directions link color — the text-safe, slightly darker partner to champagne for anything read as a link/label on a light ground.

### Neutral
- **Ivory** (`#F5F2EA`): page body background, `.btn-primary` text, light-register section backgrounds (process is white, services/gallery/footer-adjacent are ivory).
- **White** (`#FFFFFF`): process section background, contact-card-panel light surfaces.
- **Stone** (`#DCD7CD`): process connecting-line color, step-num outline stroke, hours-list divider, contact-map-frame placeholder fill.
- **Text on Dark / Text on Dark Muted** (`#F5F2EA` / `rgba(245,242,234,0.66)`): body and muted-body text on the charcoal dark register (hero sub-copy, why stat labels, footer copy).

### Named Rules
**The Single-Accent Rule.** Champagne/champagne-deep are the system's only warm color; every other surface is ivory, white, stone, or charcoal. There is no second accent hue (no coral, no butter) — restraint is the point of a quiet-luxury palette, not an oversight.

## Typography

**Display Font:** Playfair Display (with Georgia, serif fallback), loaded at weights 400/500/600/700 plus italic 500 via Google Fonts.
**Body Font:** Inter (with system sans-serif fallback), loaded at weights 400/500/600/700.

**Character:** Unlike the superseded system's single-weight serif, Playfair Display is used across its full loaded weight range here — 700 for the hero display line and the contact-intro headline, 600 for stat numerals, 500 for section titles and component headings — so weight itself carries hierarchy, something the old DM Serif Display (no bold cut) could never do.

### Hierarchy
- **Display** (700, `clamp(3rem, 9vw, 7.2rem)`, line-height 0.98, uppercase): hero `h1` only; the `<em>` second line is weight 500 in champagne, not italic.
- **Headline** (500, `clamp(2rem, 3.8vw, 3.2rem)`, line-height 1.08): every section's `.section-title`; the contact-intro `h2` is a heavier (700, uppercase) variant of this role.
- **Title** (500, 1.05rem–1.5rem): service-tile `h3`, process-step `h3` (uppercase), footer-name.
- **Stat** (600, `clamp(1.9rem, 3.6vw, 2.9rem)`): Why Choose Us `.stat-num` only.
- **Body** (400, 1rem, line-height 1.6): running copy (Inter).
- **Label** (600–700, 0.7rem–0.86rem, letter-spacing 0.02em–0.24em, uppercase): eyebrows, service-tag, brand-name/brand-sub, stat-label, footer column headers.

## Layout

A single-column, full-bleed section stack constrained by `.section-inner` (max-width 1560px, horizontal padding `clamp(1.25rem, 5vw, 4rem)`, section rhythm `clamp(4rem, 8vw, 8rem)` vertical). Services and Gallery each use a stack of independently fixed-height flex row-groups (`.mosaic-row--split/--triple/--full` for services at `clamp(360px,40vw,540px)` / `clamp(260px,28vw,360px)` / `clamp(300px,34vw,440px)`; `.mosaic-row--g1/--g2/--g3` for gallery) rather than CSS Grid with spanning cells. Process is a 4-column horizontal row with a hairline connecting line that is removed (not just hidden) below 860px as steps wrap to 2-then-1 columns. Why Choose Us is a 4-up stat row with hairline vertical dividers, collapsing to 2 then 1 column with the dividers rotating from left-border to top-border. Below 1080px the footer grid collapses to 2 columns and the contact split stacks vertically; below 860px the nav becomes a full-height slide-in drawer and all mosaic rows switch from fixed-height flex rows to stacked auto-height tiles.

### Named Rules
**The Fixed-Row-Group Mosaic Rule.** Asymmetric tile variety in Services and Gallery is built from a vertical stack of independent flex rows, each with its own explicit `clamp()` height and `flex: 1` / `flex: 1.5` / `flex: 1.8` tiles inside it — never a single CSS Grid with `grid-column`/`grid-row` spans. This was a deliberate avoidance, carried forward from the superseded system, of the empty-cell/whitespace bug class that auto-sized Grid row-spanning caused earlier in this project's history.

## Elevation & Depth

A quieter, softer shadow system than the superseded build's: every shadow is a diffuse, de-saturated blur (no hard offsets), and most image tiles (service tiles, gallery items) intentionally carry **no shadow at all** (`box-shadow: none` on `.gallery-item`) — in this world, flatness against the ivory background is the resting state, and shadow is reserved for controls and dark-surface elements that need to read as floating.

### Shadow Vocabulary
- **`--shadow-sm`** (`0 1px 3px rgba(23,25,24,0.06), 0 3px 12px -6px rgba(23,25,24,0.1)`): scrolled header only.
- **`--shadow-md`** (`0 20px 44px -24px rgba(23,25,24,0.22)`): `.btn-primary` resting elevation.
- **`--shadow-lg`** (`0 34px 80px -30px rgba(23,25,24,0.3)`): `.btn-primary` hover elevation.
- **`--shadow-dark`** (`0 20px 50px -14px rgba(0,0,0,0.5)`): fixed-call affordance and the lightbox image.

## Shapes

**The Radius Contrast Rule.** Two radius vocabularies are used, deliberately never mixed: `--r-img` (2px, nearly square) on every photographic surface — service tiles, gallery items, the contact-map frame, the lightbox figure — and `--r-pill` (999px, fully rounded) on every button, the floating navbar, the header-cta, the fixed-call affordance, and the scroll-cue. `--r-sm` (3px) is a minor third value used only for the skip-link and the lightbox image's inner radius. No surface in the system uses a mid-range radius (no 8px/12px/16px cards) — the contrast between near-square imagery and pill-shaped controls is the system's signature shape statement, not an inconsistency.

## Components

### Buttons
- **Shape:** fully pill-shaped (`--r-pill`), min-height 48px on every variant.
- **Primary** (`.btn-primary`): charcoal fill, ivory text, `--shadow-md` resting / `--shadow-lg` hover; used on both light and dark backgrounds (hero, services, contact).
- **Outline Light** (`.btn-outline-light`): transparent fill, translucent ivory border and text; dark backgrounds only (hero, contact-intro-panel).
- **Outline Dark** (`.btn-outline-dark`): transparent fill, translucent charcoal border and text, inverts to solid charcoal fill on hover; light backgrounds.

### Navigation
- **Style:** a floating, pill-shaped header (`border-radius: var(--r-pill)` on `.header-inner`), transparent with ivory text over the hero, gaining a translucent ivory fill (`rgba(245,242,234,0.82)`), `backdrop-filter: blur(18px) saturate(1.3)`, and a hairline border on scroll.
- **Content:** trimmed to exactly three links (Services / Our Care / Contact) plus a champagne-filled "Call Now" pill — intentionally minimal, not a full site-map nav.
- **Mobile (≤860px):** hamburger toggle opens a right-side slide-in ivory drawer with large Playfair Display links and a pinned charcoal "Call" button at the bottom; a separate full-screen dark backdrop handles outside-click dismissal.
- **Call affordance:** a fixed bottom-right charcoal pill (`.fixed-call`) with an ambient champagne pulse ring, appearing once the hero scrolls out of view and hiding again once the footer enters view.

### Hero
A full-viewport (`100svh`) video background (grayscale(0.15) + contrast(1.05) filtered, not a photo), a layered radial+linear scrim, and a single static large headline ("Care, *Redefined.*" — the emphasis word in champagne, weight 500 against the headline's weight 700) with one short sub-line. No multi-scene headline rotation. A subtle JS mouse-parallax moves the whole hero-content block (±14px/±10px) and a scroll-cue dot animates at the bottom — both suppressed under `prefers-reduced-motion`.

### Service Mosaic (signature component)
Seven service tiles arranged across three independently fixed-height row-groups (one large split row with a 1.5-flex featured tile, one triple row, one full-width banner row) — see The Fixed-Row-Group Mosaic Rule. Each tile is a plain photo with a bottom gradient scrim and caption text (tag + heading) overlaid directly on the image; the two "Most Popular" and "Long-Term Storage" tag badges sit on the photo itself, consistent across tiles. A lightweight vanilla-JS 3D tilt (`perspective(900px)` + `rotateX`/`rotateY`, max ±4deg, via `mousemove`) is applied to every `.service-tile`, gated behind `prefers-reduced-motion`.

### Process Row (signature component)
An ultra-minimal 4-step horizontal row: a small line-icon, an outlined/transparent-fill serif numeral (`-webkit-text-stroke`, no fill), and a single uppercase one-word label (Drop Off / We Care / Ready / Collect) — no paragraph copy at all. A hairline connecting line threads behind the icons and is removed entirely (not just visually hidden) below 860px as steps wrap into a 2-column, then 1-column, grid.

### Why Choose Us Stat Row (signature component)
A dark charcoal section: four large Playfair Display numerals/short-values (5.0, 24HR, Drive-Up, St Marys) each paired with a tiny uppercase champagne-muted label, divided by hairline vertical rules (rotating to horizontal top-rules on narrow screens). This is a minimal statistics row, not a prose or icon-card block — it replaced an earlier icon-card-block pattern from the prior build. A single champagne text link below points out to the TrueLocal review listing; no review text is reproduced on-page.

### Gallery / Lightbox
The same fixed-row-group mosaic technique as Services (`--g1/--g2/--g3` rows) builds an asymmetric grid of flat, shadow-less image tiles with a hover zoom and a small expand-icon pill, opening into a full-screen dark lightbox with keyboard (arrow/Escape), touch-swipe, and focus-return support.

### Contact Split (signature component)
A 50/50 split screen: a dark, photo-backed `.contact-intro-panel` (charcoal scrim over a grayscale background image) carrying the headline and Call/Email CTAs, beside a light `.contact-card-panel` carrying the address, a dashed-divided hours list, and a sticky-less `--r-img` map frame with an embedded Google Maps iframe. No booking form anywhere in this section. This replaced the prior system's separate contact-list-plus-final-CTA section structure.

## Do's and Don'ts

### Do:
- **Do** use `--r-img` (2px) for every photographic surface and `--r-pill` for every control; never introduce a mid-range (8–16px) card radius (The Radius Contrast Rule).
- **Do** build mosaic/asymmetric layouts (Services, Gallery) from independently fixed-height flex row-groups, never CSS Grid with `grid-column`/`grid-row` spans (The Fixed-Row-Group Mosaic Rule).
- **Do** gate every JS-driven motion effect (parallax, tilt, reveal, pulse, scroll-cue) behind `prefers-reduced-motion`, matching both the CSS media query and the `js/main.js` `reduceMotion` flag.
- **Do** keep the nav to exactly Services / Our Care / Contact plus one Call Now pill; don't grow it into a full site map.
- **Do** keep every interactive control (buttons, nav toggle, fixed call, lightbox controls) at a 48×48px minimum touch target.
- **Do** use real line-art SVG icons (never a glyph/icon font) for process steps, contact affordances, and gallery/lightbox controls.

### Don't:
- **Don't** carry over any token, color, or component from the superseded "Linen Press" system (forest green/cream/peach/sage/coral/butter, DM Serif Display, the 12-section hue-rotation rhythm, icon-led Why Choose Us blocks, the FAQ accordion, the standalone Reviews pull); this is a full replacement, not a merge.
- **Don't** achieve service-tile or gallery-tile visual variety via `grid-column`/`grid-row` spanning; use fixed row-groups with varied `flex` ratios instead, to avoid the empty-cell bug class found earlier in this project.
- **Don't** add a booking/scheduling form to Contact; the business is walk-in/drive-up only (see PRODUCT.md), a brand-truth constraint, not a stylistic choice.
- **Don't** invent review content, star counts, pricing, or years-in-business figures; the Why Choose Us stat row and footer show only the sourced TrueLocal aggregate (5.0, 8 reviews), linked out.

## Not Canonized

The shipped build carries four `.eyebrow` kicker labels (above "What We Care For," "From Drop-Off to Collection," "Garment Care, Up Close," and "Visit Us") styled in champagne-deep uppercase. Kickers/eyebrows are a device the craft floor bans outright, and the predecessor system ("Linen Press") explicitly rejected the same device in its own finish review ("no kicker/eyebrow label above any heading anywhere on the page"). This build reintroduced it. It is recorded here only as a defect this build currently carries — it is **not** promoted to a DESIGN.md rule, pattern, or component, and future surfaces should not inherit it; it should be removed from the markup, not re-legitimized by documentation.
