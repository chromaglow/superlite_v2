# superlite_v2 — Claude Context

## Project

Personal site for Ezra Shively-Stjärna. A consulting/portfolio page built in Astro, deployed to GitHub Pages at `/superlite_v2/`.

Design philosophy: **good design is as little design as possible.** Every decision is defensible by that principle.

---

## Status

`/work-with-me` page is **complete and built**. Hosted independently by Ezra (not via the GitHub Pages deploy pipeline for this repo).

### What's done
- `src/types/config.ts` — `WorkWithMePageContent` and `ServiceItem` types added
- `src/config.ts` — `workWithMePageContent` export with all locked copy, correct service order (AI → Product → Brand → Ops), `<br>` tags in service descriptions, `background` field with `<br>` breaks
- `src/pages/work-with-me.astro` — standalone page, custom layout (no `Layout.astro`), no nav bar, matches `ezra-site-mockup.html` exactly
- `navBarLinks` in `src/config.ts` — "Work With Me" link added, appears in nav on all other pages

### What works
- Full page renders correctly and matches the mockup
- SVG name animation: letters fade in center-out with stagger, content fades in at midpoint
- Dot flicker (i, j, ä-dots): fires post-intro using `setAttribute('opacity')` — DEPTH=80, SPEED_MS=5000, INTERVAL=15000 (all mockup values, do not change)
- Copy-to-clipboard on desktop for both the CTA phone number and the small header phone icon
- Mobile responsive layout

### Next session — NAV
The nav on other pages now has 6 items including "Work With Me" (the longest label). On mobile the nav uses `justify-between` — 6 items is likely too tight. **Do not touch nav layout until next session.** The /work-with-me page itself intentionally has no nav bar — that's correct by design.

---

## Design Reference

`ezra-site-mockup.html` at the project root is the **locked final design** for the `/work-with-me` page. Iterate from this, do not replace it without discussion.

Key design decisions from the mockup:
- White hero section with SVG name animation, black content section below, `1px` divider between
- Content column: `max-width: 680px`, centered, `padding: 120px 48px 160px`
- No nav bar on this page — the name SVG IS the header. Phase 02 will use a custom layout, not `Layout.astro`
- No em dashes anywhere in copy — use colons, commas, or split into sentences instead
- Sentence breaks in service descriptions are intentional `<br>` tags, not browser wrapping
- `text-wrap: pretty` on body copy to prevent orphan words

### Colors
- Background: `#000` (black section), `#fff` (hero)
- Body copy: `#999`
- Muted labels: `#666`
- Dimmer labels: `#444`
- Hairline rules: `#1a1a1a` / `#222`

### Typography
- Name: Format 1452, rendered as SVG paths (not a font dependency)
- Body: `system-ui, -apple-system, sans-serif` — final font TBD (candidates: Fraunces, Atkinson Hyperlegible)
- Intro principle: `28px`, `font-weight: 300`
- Service titles: `18px`, `font-weight: 400`
- Service body: `14px`, `color: #666`, `line-height: 1.8`

### SVG Name Animation Rules (do not break these)
- All `<path>` elements have `opacity="0"` as an SVG attribute — prevents flash on load
- Flicker uses `setAttribute('opacity')`, NOT `el.style.opacity` — SVG paths require attribute, not CSS
- The `requestAnimationFrame` double-frame delay before intro starts must stay — removing it causes transitions to fire before reset paints
- Flicker `DEPTH` is `80` — this is the correct production value, do not change it

---

## Locked Copy

### Page structure (in order)
1. Intro: label, principle, body, method beats
2. Services (4)

### Intro block
- **Label:** Let's Collaborate
- **Principle:** Good design is as little design as possible.
- **Body P1:** I've applied it to brand identities, products, and operations systems serving over a million businesses. The discipline is the same regardless of the medium.
- **Body P2:** Twenty years. Brand strategy, product design, and UX research. Amazon FBA and AWS, systems for over a million businesses. 600,000 labor hours removed through AI-enabled automation.

### Method beats (in order, no lines between them)
1. Start with the real problem.
2. Include everyone it touches.
3. Define success.
4. Data drives the solution.

### Services (in order)
1. **AI products, automation, and machine learning** — The goal is always specific: reduce touches, improve forecast accuracy, create capacity, eliminate waste. Systems thinking maps where humans belong in each connected system: internal users, external customers, both.
2. **Product design and user research** — Most product problems are definition problems. The wrong thing was built because the right question was never asked. I work at that layer: users, mental models, information architecture, interaction.
3. **Brand identity and website builds** — Strategy first: what does it need to say, look like, and accomplish. Everything follows from that: visual system, site design, e-commerce, fulfillment.
4. **Operations transformation** — I've redesigned systems that had to work for millions of businesses simultaneously. The method is the same at any scale: find the constraint, fix it at the source, measure the delta.

### CTA
- Phone: (415) 335-9911
- `href`: `tel:+14153359911`
- Label: Call or text
- Desktop behavior: copy-to-clipboard (same pattern as `src/pages/about.astro`)

---

## Technical Rules

- **All page content** lives in `src/config.ts` exports — never hardcoded in `.astro` files
- **Types** in `src/types/config.ts` — follow existing patterns (`AboutPageContent`, `ResumeItem`)
- **Base path** is `/superlite_v2/` on all URLs and asset references
- **Deploy**: `npm run build` then `git push` — GitHub Actions handles the rest. Vercel is NOT connected.
- **Layout.astro** wraps all existing pages — `/work-with-me` uses its own standalone layout (no Layout.astro, no nav bar by design)
- `WorkWithMePageContent` type uses `opening: string[]` (array of beats) and `services: ServiceItem[]`

---

## What NOT to Change Without Discussion

- The `opacity="0"` attributes on SVG paths in the name animation
- The flicker mechanism (`setAttribute` not `style.opacity`)
- The locked copy above — any wording changes need explicit approval
- The service order: AI products → Product design → Brand identity → Operations transformation
