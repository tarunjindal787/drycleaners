---
name: St Marys Village Dry Cleaners
description: A dark-to-ivory cinematic brochure site for an independent local garment-care shop, built on a seam-stitch and foil-sheen motif system.
colors:
  ivory: "#F8F6F1"
  cream: "#F0ECE3"
  white: "#FFFFFF"
  charcoal: "#202522"
  graphite: "#626762"
  forest: "#254D43"
  forest-dark: "#1A362F"
  sage: "#A8B7A5"
  champagne: "#D7C8AE"
  champagne-ink: "#9C8862"
  before-ground: "#14181A"
  before-ground-deep: "#0D1110"
  text-on-dark: "#F3EFE6"
  text-on-dark-muted: "#C9C2B4"
typography:
  display:
    fontFamily: "Playfair Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.6rem, 5.4vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Playfair Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.1
  title:
    fontFamily: "Playfair Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)"
    fontWeight: 600
    lineHeight: 1.1
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    letterSpacing: "0.1em"
rounded:
  s: "2px"
  pill: "999px"
spacing:
  section-y: "clamp(4.5rem, 9vw, 8rem)"
  section-x: "clamp(1.25rem, 5vw, 4rem)"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.s}"
    padding: "0.95em 1.9em"
  button-primary-hover:
    backgroundColor: "{colors.forest-dark}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.s}"
    padding: "0.95em 1.9em"
  button-ghost-dark:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.s}"
    padding: "0.95em 1.9em"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.forest}"
    rounded: "{rounded.s}"
    padding: "0.95em 1.9em"
  fixed-call:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.pill}"
    padding: "0.85em 1.3em"
---

# Design System: St Marys Village Dry Cleaners

## Overview

**Creative North Star: "The Pressed-Garment Transformation"**

The site performs the service it sells: a visitor's scroll re-enacts a garment's own journey from worn to restored. It opens in a dim, warm-lit "before" register (near-black charcoal ground, a single warm key light) and resolves, section by section, through forest green into the brief-pinned warm-ivory "after" register — dawn breaking, felt in ground color rather than stated in copy. This is a premium-local, craft-driven world: a real independently run neighbourhood shop, not a chain or a laundromat app, so the system favors hairline structure, restrained motion, and licensed photography over iconography, cards, or drop shadows.

Two literal tailoring motifs carry the identity in place of generic UI chrome: a dashed "seam-stitch" hairline divider marks every section boundary instead of a shadow or card edge, and a soft diagonal foil-sheen highlight sweeps across interactive surfaces on hover/focus, standing in for "pressed and finished" rather than a shadow-lift. Confirmed visual rejections carried through the build: no kicker/eyebrow label above the hero headline, no italic hero h1 (roman weight 700), no colored border-left accents, no Unicode star glyphs, no decorative sequence numbering outside the one section where a sequence is real (Process).

**Key Characteristics:**
- A single continuous dark-to-ivory-to-forest tonal arc down the page, not a flat palette
- Dashed champagne "seam" hairlines in place of shadows or cards at every section boundary
- A restrained diagonal foil-sheen sweep on buttons, service rows, and gallery tiles on hover/focus
- Oversized serif numerals (01–04) as the dominant visual weight in Process only
- One fixed-position call affordance, bottom-right, that never relocates once revealed

## Colors

A narrow, warm, editorial palette: near-black charcoal and forest green anchor the dark registers, ivory and cream carry the resolved "after" register, and a single champagne accent does all divider and hover-accent work.

### Primary
- **Forest** (`#254D43`): primary action color — primary buttons, the fixed call affordance, link accents, focus-ring color, rating score numerals, accordion plus-icon.
- **Forest Dark** (`#1A362F`): hover/pressed state for forest-backed elements; the deep end of the final-CTA gradient.

### Secondary
- **Champagne** (`#D7C8AE`): the seam-stitch divider stroke, hairline-top motifs (Process, Why Choose Us), hero-float rule, nav mobile underline accent, header scroll-state border.
- **Champagne Ink** (`#9C8862`): darker champagne used only where champagne must sit on a light ground and stay legible (star-row glyph color in the About rating card).

### Neutral
- **Ivory** (`#F8F6F1`): the page's resting background — body background and every "after"-register section (Services, Why, Gallery, Contact).
- **Cream** (`#F0ECE3`): secondary light surface for Process, Reviews, FAQ — a half-step warmer than ivory to vary section rhythm without a border.
- **White** (`#FFFFFF`): rating-card surface only.
- **Charcoal** (`#202522`): default body text color; also a dark section background (Feature/video panel, Footer).
- **Graphite** (`#626762`): secondary/supporting body copy on light grounds (lede text, service copy, FAQ answers).
- **Sage** (`#A8B7A5`): scrollbar thumb only.
- **Before Ground / Before Ground Deep** (`#14181A` / `#0D1110`): the hero's dim "before" register and the top anchor of the About section's dawn gradient.
- **Text on Dark / Text on Dark Muted** (`#F3EFE6` / `#C9C2B4`): body and muted-body text color on every dark/mid-tone section (hero, about, feature panel, footer, final CTA).

### Named Rules
**The Seam, Not Shadow Rule.** Section boundaries are marked by a thread-thin dashed champagne line (`stroke-dasharray: 2 7`), never by a box-shadow, card edge, or background-color block alone.

**The One Accent Rule.** Champagne never fills a surface; it only outlines, divides, or appears as a single-pixel rule or small glyph accent.

## Typography

**Display Font:** Playfair Display (with Iowan Old Style, Georgia, serif fallback)
**Body Font:** Inter (with system sans-serif fallback)

**Character:** A confident serif display paired with a quiet, workmanlike sans body — editorial and crafted, not corporate, with the serif weight held at 600–700 and never set in italic for primary headings.

### Hierarchy
- **Display** (700, `clamp(2.6rem, 5.4vw, 4.4rem)`, line-height 1.1): hero h1 only. Roman (non-italic) weight 700 — the hero headline carries no kicker/eyebrow above it.
- **Headline** (600, `clamp(1.9rem, 3.4vw, 2.6rem)`, line-height 1.1): section h2s (About, Why, Feature panel, Contact).
- **Title** (600, `clamp(1.4rem, 2.2vw, 1.9rem)`, line-height 1.1): service-row and process-step h3s.
- **Body** (400, 1rem, line-height 1.6): running copy; paragraphs capped at a 62ch measure.
- **Label** (600, 0.78rem, letter-spacing 0.1em, uppercase): footer column headers, contact-list item labels ("Phone", "Email", "Location", "Hours").

### Named Rules
**The Roman-Headline Rule.** Primary display headlines (the hero h1) are set in roman weight 700, never italic; italic is reserved for small supporting flourishes (the hero-float caption, final-CTA h2) that are explicitly secondary, not load-bearing claims.

## Layout

A single-column, full-bleed section stack (no outer card or app shell), each section its own full-width background color/gradient, with inner content constrained by `.section-inner` (max-width 1280px, responsive padding `clamp(4.5rem, 9vw, 8rem)` vertical / `clamp(1.25rem, 5vw, 4rem)` horizontal). Section layouts alternate between two-column grids (About, Feature panel, Contact, Why) and an asymmetric alternating-row pattern (Services: `1.1fr/1fr` flipping to `1fr/1.1fr` on even rows, media/copy order swapping). Below 1024px, two-column grids collapse to one column with media promoted above copy; below 860px the nav collapses to a full-screen slide-in panel; below 560px Process and Gallery drop to a single column. The gallery uses a CSS multi-column masonry layout (`columns: 3 320px`) rather than a grid, with per-item aspect ratios cycling 3/4, 4/3, 1/1 by position.

## Elevation & Depth

Flat by design: no box-shadow is used for resting-state depth anywhere in the page body. Depth and "lift" are conveyed instead by (a) the dashed seam-stitch divider marking section joins, (b) background-color/gradient shifts between sections (the dark-to-ivory-to-forest tonal arc), and (c) a 2px translateY lift plus the foil-sheen sweep on interactive hover/focus. The one true shadow in the system is utilitarian: the fixed call button's `0 10px 30px -8px rgba(20,24,26,0.45)`, which keeps it legible as a floating affordance over any background it passes over.

### Shadow Vocabulary
- **Floating-affordance shadow** (`box-shadow: 0 10px 30px -8px rgba(20,24,26,0.45)`): used only on `.fixed-call`, the one element meant to read as floating above the page.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest; shadow appears only on the single persistent floating affordance, never on cards, buttons, or panels.

## Shapes

Corners are nearly square throughout: a single 2px radius (`--radius-s`) softens images, buttons, and media containers just enough to avoid a hard edge, without reading as "rounded." The one exception is the pill-shaped (999px radius) fixed call affordance, deliberately distinct in form from every other interactive element so it reads as its own persistent instrument. No borders are used as decoration on content blocks; the only recurring border-like elements are the champagne hairline rules (seam dividers, Process/Why list-item top rules, FAQ accordion top/bottom rules) and functional focus outlines.

## Components

### Buttons
- **Shape:** 2px radius (`--radius-s`), same as images/media containers.
- **Primary:** forest green background (`#254D43`), text-on-dark text, 1px forest border, padding `0.95em 1.9em`; hover/focus darkens to forest-dark (`#1A362F`).
- **Hover / Focus:** every button carries the diagonal foil-sheen sweep (`linear-gradient(115deg, transparent 20%, rgba(255,255,255,.35) 40%, rgba(255,255,255,.05) 55%, transparent 70%)`, translated from -120% to 120% over 0.7s) plus a 2px translateY lift — this sheen+lift pairing is the system's universal hover signature, not unique to buttons.
- **Ghost / Ghost-Dark / Outline:** transparent background with a 1px border in the current context's ink color (light text/border on dark grounds for `.btn-ghost`, charcoal border for `.btn-ghost-dark` on light grounds, forest border/text for `.btn-outline`); hover fills with that same ink color.

### Cards / Containers
- **Corner Style:** 2px radius, matching buttons and media.
- **Background:** white only (the rating-card component); every other "container" is a transparent content block against its section's background, not a bordered card.
- **Shadow Strategy:** none — see Elevation & Depth.
- **Border:** none on cards; dashed champagne hairlines handle all other divider work.

### Navigation
- **Style:** fixed, full-width header, transparent over the hero, transitioning to translucent ivory with 14px backdrop-blur and a champagne hairline bottom-border after ~60px scroll (`.is-scrolled`); header height steps from 84px to 72px on scroll. Link color inverts from text-on-dark to charcoal with the scroll-state; active/hover underline sweeps in from the left via a `right: 100%→0` transition on `::after`.
- **Mobile:** below 860px, nav collapses behind a hamburger (`.nav-toggle`) into a full-screen ivory slide-in panel (`translateX(100%→0`), links set in large display-serif type, centered.

### Fixed Call Affordance (signature component)
A pill-shaped, forest-green `tel:` link fixed to the bottom-right corner, hidden until the hero scrolls out of view, then fading/sliding in and never relocating or disappearing again for the rest of the scroll. It is the one UI element in the system exempt from the flat-by-default rule, carrying its own ambient shadow to read as a constantly-available instrument.

### Seam Divider (signature component)
A full-width, 2px-tall inline SVG line with `stroke-dasharray: 2 7` in champagne, placed between every major section as the system's only divider — a literal tailoring/stitch reference, used in place of shadows, cards, or background-only transitions to mark a section boundary.

### Service Row (signature component)
An alternating two-column media/copy row (no card, no border) with a diagonal foil-sheen sweep over the image on row hover and a subtle 1.04x image zoom; rows alternate media-left/media-right and widen to a 1.35/1 feature ratio for "feature" rows (first dry cleaning, bridal, and airtight-boxing rows).

### Process Steps (signature component)
A four-item numbered list where the step number itself — not an icon or a tile — is the dominant visual element: oversized serif numerals (`clamp(2.6rem, 5vw, 3.6rem)`, weight 700, forest green) sit above a thin champagne top-rule and the step title/copy. This oversized-numeral treatment is reserved for Process, where the 01–04 sequence is real; it is not reused as decoration elsewhere on the page.

### Gallery / Lightbox (signature component)
A CSS multi-column masonry grid of unbordered image tiles with the same foil-sheen hover sweep as buttons/service rows, opening into a full-screen lightbox (dark scrim, prev/next arrow buttons, swipe support, Escape/arrow-key handling, focus returned to the triggering tile on close).

### Accordion
Borderless list of champagne-hairline-divided rows; trigger is full-width, left-aligned text with a `+` glyph that rotates 45° to an `×` on open; panel height animates via `grid-template-rows: 0fr → 1fr` rather than `max-height`, respecting `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** mark every section boundary with the dashed champagne seam divider (`stroke-dasharray: 2 7`), not a shadow or card edge.
- **Do** apply the diagonal foil-sheen hover sweep to any new interactive surface (buttons, media tiles, panels) as the system's one hover signature.
- **Do** keep the hero h1 (and any primary display headline) roman weight 700, never italic.
- **Do** reserve oversized sequence numerals for a section where the sequence is real (Process); do not add decorative numbering to list items elsewhere.
- **Do** keep the fixed call affordance as the only element with a resting-state shadow and the only pill-radius element in the system.
- **Do** author icons and rating glyphs as inline SVG `<path>` elements, never Unicode symbol characters or icon fonts.

### Don't:
- **Don't** add a kicker/eyebrow label above a primary headline — this was built, flagged in finish review, and removed; it is not a pattern to reuse.
- **Don't** add a colored border-left accent to list items; the confirmed motif is a champagne hairline top-rule, matching Process and Why Choose Us.
- **Don't** introduce a hard-offset/neobrutalist drop shadow anywhere; this is a flat, tonal-depth system.
- **Don't** invent review content, star counts, pricing, or years-in-business figures in any new copy; the Reviews section intentionally shows only the sourced TrueLocal aggregate rating, linked out, with no fabricated testimonial text.
