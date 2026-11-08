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

Mode: Persuade. Audience: local St Marys/Western Sydney residents discovering the business via mobile search or Google Maps, deciding in seconds whether to call or drive over. Job: confirm legitimacy and service fit, then convert to a phone call, email, or visit. Proof/content: verified business facts from PRODUCT.md (address, hours, services, 5.0★/8-review TrueLocal rating), real photography already hosted in `assets/`. Constraints: no backend, no online booking, no pickup/delivery (the business is walk-in/drive-up only), no invented claims/pricing/years-in-business/certifications.

What must remain untouched: real business facts and links (phone, email, address, hours, TrueLocal rating/link, services list, Google Maps embed), section order (nav → hero → trust/about → services → process → why-us → storytelling → gallery → reviews → contact/location → FAQ → final CTA → footer), and every working accessible behavior (mobile drawer, scroll reveal, FAQ accordion, gallery lightbox with keyboard/swipe support, fixed call affordance). The real four-step process is drop-off-to-collection in person, never pickup/delivery.

Superseded: this surface previously shipped "The Lit Counter" (cinematic charcoal-to-amber hero, glassmorphism nav, bento-grid services, shadow-elevated cards). The user explicitly reviewed the conflict with a new brief and confirmed a full replace rather than an evolution of that world; DESIGN.md is rewritten at finish to document the new system, not the old one.

## Direction contract

THESIS: An international premium fabric-care brand doesn't read as a generic local-service grid, it reads as an editorial lifestyle spread built around real garments, so the page replaces icon-plus-heading service tiles with large image-led asymmetric compositions and a considered multi-hue editorial color rhythm, refusing the category default of one flat palette with a single accent chip.

OWN-WORLD: Deep forest green (#164D3A) and emerald (#24765A) anchor the dark editorial registers (hero, why-us, final CTA, footer); warm cream and soft ivory (#FFF8EE / #F8F3EA) carry the resting registers (services, gallery, FAQ); peach (#F6C7AD) and soft sage (#DCE9D9) each give one section its own distinct identity (storytelling spread, process section) so the page paces like a magazine, not a flat scroll; coral (#EF795D) and butter (#F4DB92) are precise small accents only (hover states, rating stars, link color), never a filled surface. DM Serif Display carries headlines, paired with Manrope body copy, a deliberately different serif voice from the previous system so this reads as a genuine new world rather than a palette swap. Services are large image-led asymmetric editorial tiles (one large featured service, a two-column pair, smaller supporting tiles), never generic icon cards. A single large storytelling spread ("Every Fabric Has Its Own Story") carries craftsmanship through one real photograph and short copy rather than another feature grid.

STORY: A visitor lands in a rich forest-green editorial hero with real garment photography and knows instantly this is a premium, considered brand, not a generic local-business template; scrolling down, the color rhythm moves through warm cream, sage, peach and back to forest green, pacing the page like a magazine rather than a flat repeat of identical cards; services are scannable in seconds through large real photography; the real four-step drop-off process, the real reasons to choose this shop, and the honest TrueLocal trust record build confidence without a single invented claim; the page closes on a confident forest-green call to action and a grounded dark footer.

FIRST VIEWPORT: A minimal sticky nav (wordmark left, anchor links center, a solid "Get in Touch" pill right) that compresses into a translucent cream bar on scroll. Full-bleed hero below it: deep forest-green ground with the existing hero steam-press photograph treated as a warm editorial duotone, large DM Serif Display headline "Your Clothes Deserve Better Care." in cream, one line of real supporting copy naming The Village Centre and drive-up access (no delivery or doorstep language), two CTAs (solid cream-on-forest "Get in Touch", outline glass "Explore Our Services"), a subtle scroll cue.

FORM: User/brief-pinned direction, not rolled via `concept-seed`: the user supplied a complete, fully specified palette (named hex values), a typography pairing, a per-section background rhythm, and a section-by-section composition brief, and on being shown (a) the factual conflict between the brief's pickup/delivery/booking copy and the real walk-in-only business, and (b) that this is a second full identity replacement discarding the just-reviewed "Lit Counter" system, explicitly confirmed both: keep the business drop-in only with real contact CTAs instead of a booking flow, and fully replace rather than evolve the current system. A brief-pinned direction supersedes the roll. seed: none (unavailable).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
