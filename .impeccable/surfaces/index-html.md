---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface: index.html (single-page marketing site)

Mode: Persuade. Audience: local St Marys/Western Sydney residents discovering the business via mobile search or Google Maps, deciding in seconds whether to call or drive over. Job: confirm legitimacy and service fit, then convert to a phone call, email, or visit. Proof/content: verified business facts from PRODUCT.md (address, hours, services, 5.0★/8-review TrueLocal rating), licensed garment-care photography already in `assets/` standing in for real shop photos. Constraints: no backend, no booking, no invented claims/pricing/years-in-business/certifications.

What must remain untouched: real business facts and links (phone, email, address, hours, TrueLocal rating/link, services list, Google Maps embed), section order (nav → hero → trust bar → services → process → why-us → gallery → reviews → contact/location → FAQ → footer), and every working accessible behavior (mobile drawer, scroll reveal, FAQ accordion, gallery lightbox with keyboard/swipe support, fixed call affordance).

Superseded: this surface previously shipped a different, fully-documented visual world ("The Pressed-Garment Transformation" — dark-to-ivory tonal arc, seam-stitch dividers, foil-sheen hovers, flat/no-shadow cards, no glassmorphism, no Unicode glyphs). The user explicitly reviewed that this redesign discards it rather than evolving it; DESIGN.md is rewritten at finish to document the new system, not the old one.

## Direction contract

THESIS: The shop's own showroom instruments — a steady amber worklight over a dark counter, panes of glass over display cases, cleanly bordered display cards for each garment category — become the interface's own vocabulary, so the page reads as a lit boutique counter rather than a generic brochure of stock photos dropped into template sections.

OWN-WORLD: A cinematic dark-charcoal-to-amber hero (duotone-treated existing hero photography, warm key light, deep vignette) under a sticky glassmorphism nav (`backdrop-blur`, translucent ivory-on-light/charcoal-on-dark) that compresses on scroll. Below the hero, the page resolves into a bright warm-ivory register: soft-elevated `rounded-2xl` cards (`shadow-xl shadow-slate-900/5`), a bento-style asymmetric services grid with image zoom-on-hover and floating category tags, a horizontal numeral-driven process timeline (desktop) collapsing to a stacked card timeline (mobile), a four-card why-us grid with warm glowing-amber border on hover, a masonry gallery with a full lightbox, and a rich dark multi-column footer closing the arc back to charcoal. Gold SVG star ratings (never Unicode glyphs) carry the 5.0/TrueLocal social proof as a floating trust strip beneath the hero. Serif display type (Playfair Display) pairs with Plus Jakarta Sans body copy; emphasis on key hero words comes from a restrained warm gradient fill, used nowhere else.

STORY: A visitor lands in a cinematic, premium-lit hero that immediately signals serious craft, not a laundromat; the floating trust badge confirms social proof before they scroll past the fold; the bento services grid lets them scan their exact garment category in seconds; the process timeline and why-us grid build confidence; the gallery and reviews close the trust loop; the split contact/location hub and FAQ remove every remaining friction to calling, emailing, or driving over; the dark footer closes the visual arc it opened in.

FIRST VIEWPORT: Sticky glass nav (logo left, anchor links center, pulsing-icon "Call Now" button right, hamburger on mobile). Full-bleed dark hero below it: duotone charcoal/amber-treated garment-steam photo, deep gradient scrim (`slate-950 → slate-900 → amber-950/30`), left-aligned fluid serif headline "Care That Keeps Your Clothes Looking Their Best." with a warm gradient highlight on "Best", one line of support copy naming The Village Centre, two CTAs (solid amber/forest "Get in Touch", glass-outline "Explore Our Services") with hover motion, and the floating 5.0-star/TrueLocal trust badge overlapping the hero's bottom edge into the ivory section below.

FORM: User/brief-pinned direction, not rolled via `concept-seed`: the user supplied an exact, fully-specified visual language (glassmorphism nav, bento cards, amber-lit hero, glowing accent borders, lightbox, split contact hub) and, on being shown the conflict with the incumbent documented system, explicitly confirmed a full replace rather than an evolution of the incumbent world. A brief-pinned direction supersedes the roll. seed: none (unavailable).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
