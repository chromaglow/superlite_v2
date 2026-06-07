# Phase 02: Page Build + Nav — Research

**Researched:** 2026-06-06
**Domain:** Astro page construction, custom layout, Tailwind CSS v4, nav wiring, inline SVG animation
**Confidence:** HIGH — all findings drawn from direct codebase inspection of files already in the repo

---

<user_constraints>
## User Constraints (from CONTEXT.md / CLAUDE.md)

### Locked Decisions
- URL: `/work-with-me` (served at `/superlite_v2/work-with-me`)
- CTA: phone number only — call or text, copy-to-clipboard on desktop
- Aesthetic: existing site system only — no new fonts, colors, or tokens
- Content model: config-driven (`workWithMePageContent` in `config.ts`)
- Scope: single page, no sub-pages, no contact form, no testimonials
- Layout: custom (NOT `Layout.astro`) — no nav bar on this page; the SVG name IS the header
- SVG animation rules: `opacity="0"` attributes on all `<path>` elements; `setAttribute('opacity')` not `el.style.opacity`; rAF double-frame delay before intro start; `DEPTH` reduce from 80 to ~15 for production
- No em dashes in copy (colons, commas, or split sentences)
- Service order: AI products → Product design → Brand identity → Operations transformation (note: mockup shows this order; config.ts stores Brand identity first — see Content Mapping section)
- Sentence breaks in service descriptions are intentional `<br>` tags, not browser wrapping
- `text-wrap: pretty` on body copy

### Claude's Discretion
- Opening typography variation (C1/C2/C3) — not locked; prototype-v2 shows three options; planner must pick one or flag for user selection

### Deferred Ideas (OUT OF SCOPE)
- Case study section
- Calendly / booking link
- Client logos
- Separate service sub-pages
- Navigation label variant already resolved: "Work With Me"
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| ROUTE-01 | Page exists at `/work-with-me`, served by Astro build | Custom layout `.astro` file at `src/pages/work-with-me.astro`; Astro file-based routing handles this automatically |
| ROUTE-02 | Nav bar includes "Work With Me" link to `/superlite_v2/work-with-me` | Add one entry to `navBarLinks` array in `src/config.ts`; Layout.astro renders it automatically |
| DESIGN-01 | ~~Use Layout.astro wrapper~~ OVERRIDDEN BY CLAUDE.md — use custom layout | CLAUDE.md is authoritative: no nav bar, SVG name is the header, custom layout required |
| DESIGN-02 | All sections use `max-w-2xl mx-auto px-6` layout | Mockup uses `max-width: 680px` + `padding: 120px 48px`; Tailwind equivalent is `max-w-2xl mx-auto px-12` or inline style — see Layout Analysis section |
| DESIGN-03 | Typography uses opacity-based hierarchy | Mockup uses literal hex colors (`#999`, `#666`, `#444`); prototype-v2 uses `rgba(255,255,255,0.X)` pattern; Tailwind `opacity-60` etc. are equivalent — see Typography section |
| DESIGN-04 | Page is sparse — no decorative elements beyond existing design system | Confirmed by mockup: SVG name + text sections + phone CTA only |
| TECH-04 | `npm run build` completes without errors | `build` script runs `astro check` (TypeScript) then `astro build`; potential failure points documented in Build Verification section |
</phase_requirements>

---

## Summary

Phase 02 creates a single Astro page file (`src/pages/work-with-me.astro`) and adds one nav link. The page uses a **custom layout** (not `Layout.astro`) because CLAUDE.md explicitly prohibits a nav bar on this page — the SVG animated name IS the header. REQUIREMENTS.md DESIGN-01 says to use `Layout.astro`, but CLAUDE.md overrides it.

The page has two visual sections: a white hero with the inline SVG name animation, then a black content section with intro copy, services, and a phone CTA. All content is already in `workWithMePageContent` from Phase 01. The executor's primary work is (a) writing the `.astro` file with the correct structure, (b) porting the SVG + animation script from the mockup, and (c) adding one entry to `navBarLinks`.

The copy-to-clipboard behavior for the phone CTA should follow `about.astro`'s pattern exactly — `id` on the anchor, `<script>` block at the bottom with mobile UA check. The `Layout.astro` phone-copy script targets `header a[href^="tel:"]`, which will not be present on the custom-layout page, so the page must include its own script.

**Primary recommendation:** Write `src/pages/work-with-me.astro` as a self-contained page (imports `global.css`, sets its own `<head>`, no Layout wrapper). Port the SVG + animation verbatim from `ezra-site-mockup.html`, reduce `DEPTH` to 15. Add the phone CTA with inline copy-to-clipboard script from `about.astro`. Add "Work With Me" to `navBarLinks` with `url: "/superlite_v2/work-with-me"`.

---

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Page routing | Astro file-based routing | — | `src/pages/work-with-me.astro` automatically becomes `/work-with-me` |
| HTML structure + layout | `.astro` template | — | Self-contained page, no Layout.astro wrapper |
| SVG animation | Inline `<script>` in `.astro` | — | Requires DOM access; must run client-side; no SSR concern |
| Phone copy-to-clipboard | Inline `<script>` in `.astro` | — | Same pattern as `about.astro`; custom layout means no Layout.astro script |
| Content data | `src/config.ts` (already built) | — | All text from `workWithMePageContent`; no changes to config needed |
| Nav wiring | `src/config.ts` `navBarLinks` | `Layout.astro` renders it | One array push; Layout.astro loops over it, no template change needed |
| SEO metadata | Inline in `<head>` | — | Custom layout owns its own `<head>`; uses `workWithMePageContent.seo` |
| Styling | Tailwind utility classes + inline styles | `global.css` (Inter font, reset) | Mockup uses specific pixel values not covered by default Tailwind scale |

---

## KEY RESEARCH FINDINGS

### Finding 1: Layout Conflict Resolution — CLAUDE.md Wins

**REQUIREMENTS.md DESIGN-01** says: "Page uses the existing `Layout.astro` wrapper (sticky nav, footer, lightbox, phone-copy script)"

**CLAUDE.md** says: "No nav bar on this page — the name SVG IS the header. Phase 02 will use a custom layout, not `Layout.astro`"

**Resolution:** CLAUDE.md is authoritative. The project instructions in the `<additional_context>` also state: "CLAUDE.md is authoritative — it overrides REQUIREMENTS.md where they conflict."

**What Layout.astro provides that the custom layout must replicate or deliberately omit:**

| Layout.astro feature | Action for custom layout |
|----------------------|--------------------------|
| `@import "../styles/global.css"` (Inter font, reset) | MUST replicate — import in custom page frontmatter |
| `<head>` with SEO meta tags | MUST replicate — write directly in page `<head>` using `workWithMePageContent.seo` |
| Sticky nav bar | INTENTIONALLY OMIT — this is the point of a custom layout |
| `<main class="mb-32"><slot /></main>` | Build equivalent structure inline |
| Footer `<footer></footer>` | OMIT or include empty — mockup has no footer |
| Lightbox overlay + script | OMIT — no images on this page |
| Phone copy script targeting `header a[href^="tel:"]` | OMIT — write a dedicated script (see Finding 2) |
| `<style is:global>` with Inter import | MUST replicate — `global.css` `@import tailwindcss` plus the `<style is:global>` Google Fonts block from Layout.astro, OR just `@import "../styles/global.css"` in frontmatter (this pulls in `@import "tailwindcss"`) plus the Inter font link in `<head>` |

**Recommended approach:** The custom page should import `global.css` in the frontmatter (`import "../styles/global.css"`), add the Google Fonts link for Inter in `<head>`, and set its own SEO `<head>` tags. No Layout wrapper at all.

---

### Finding 2: Copy-to-Clipboard Pattern (Exact Code from about.astro)

The `about.astro` script block (lines 82–112) is the pattern to replicate. The relevant portion for the page-level phone CTA is:

```typescript
// from about.astro lines 82-95 — the primary phone CTA pattern
const link = document.getElementById('phone-link') as HTMLAnchorElement;
const label = document.getElementById('phone-label');
if (link && label) {
  link.addEventListener('click', (e) => {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard.writeText('+1 (415) 335-9911').then(() => {
        label.textContent = 'Copied!';
        setTimeout(() => { label.textContent = 'Call or text'; }, 2000);
      });
    }
  });
}
```

**HTML structure in about.astro (line 25-28):**
```html
<a id="phone-link" href="tel:+14153359911" class="...">
  <svg ...>...</svg>
  <span id="phone-label">Call or Text Me</span>
</a>
```

**For work-with-me.astro:** The CTA label text should be "Call or text" (from `workWithMePageContent.cta.label`) and the timeout should reset to `'Call or text'` (not `'Call or Text Me'`). The `id="phone-link"` and `id="phone-label"` pattern is safe to reuse — these IDs won't conflict because the work-with-me page is its own document, not wrapped by Layout.astro.

**Why Layout.astro's phone script does NOT apply:** Layout.astro's phone script (lines 72–90) targets `document.querySelector('header a[href^="tel:"]')`. The custom layout has no `<header>` element with a nav, so this script would find nothing. The custom page must include its own phone CTA script.

---

### Finding 3: SVG Name Animation — Full Specification

The SVG and animation script are in `ezra-site-mockup.html` (lines 232–481). Key facts for the planner:

**SVG structure:**
- Inline SVG with `id="namesvg"`, `viewBox="0 0 593.557 66.462"`, `fill="#000"` (renders black-on-white in the hero)
- 23 `<path>` elements, each with `opacity="0"` as an SVG attribute and a unique `id` (e.g., `f-E`, `f-z`, `f-r`, `f-a1`, etc.)
- `width: 100%; max-width: 660px; height: auto` for responsive sizing

**Animation script settings (mockup has `DEPTH = 80` — must reduce to 15 per CLAUDE.md):**
```javascript
const FADE_MS   = 3800;   // fade duration per letter
const SPREAD_MS = 5000;   // total stagger spread
const VAR_LEVEL = 8;      // randomness level
const DEPTH     = 15;     // CHANGED from 80 (production value per CLAUDE.md)
const SPEED_MS  = 5000;   // flicker speed
const INTERVAL  = 15000;  // flicker interval
const CENTER    = 296;    // center x-position for stagger order
```

**Critical animation rules (CLAUDE.md locked, verified in mockup):**
1. `opacity="0"` on all `<path>` elements — prevents flash on load [VERIFIED: mockup line 233-255]
2. Flicker uses `el.setAttribute('opacity', ...)` via the `fadeDot` function — NOT `el.style.opacity` [VERIFIED: mockup line 401]
3. The `requestAnimationFrame(() => requestAnimationFrame(() => { ... }))` double-frame delay at line 447 must be preserved
4. `setOpacity()` function (lines 361-374) uses `el.style.opacity` for the intro fade-in — this is correct; the `setAttribute` rule applies specifically to the `fadeDot` flicker function

**Note on style.opacity vs setAttribute:** The mockup actually uses both mechanisms:
- `setOpacity()` (intro animation): sets `el.style.transition` and `el.style.opacity` — used for the initial reveal
- `fadeDot()` (flicker animation): uses `el.setAttribute('opacity', ...)` via rAF — used for the ongoing dot flicker
- CLAUDE.md's rule "use setAttribute not style.opacity" applies to the flicker mechanism. The planner should copy the script verbatim and only change `DEPTH`.

**Hero section styling (from mockup CSS):**
```css
#hero {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 130px 48px;   /* mobile: 72px 32px */
}
```

**Content section + divider (from mockup CSS):**
```css
#divider { width: 100%; height: 1px; background: #000; }
#content { background: #000; color: #fff; padding: 30px 48px 160px; }
#content-inner { max-width: 680px; margin: 0 auto; }
```

The animation script hides `#content` and `#divider` on load (`opacity: 0`), then fades them in partway through the letter animation. This is intentional — copy verbatim.

---

### Finding 4: Nav Wiring — Exact Change Required

`src/config.ts` exports `navBarLinks: NavBarLink[]`. Currently has 5 entries. To add "Work With Me":

```typescript
// Add to navBarLinks array in src/config.ts — insert at end or preferred position
{
  title: "Work With Me",
  url: "/superlite_v2/work-with-me",
},
```

`Layout.astro` loops over `navBarLinks` with `{navBarLinks.map((link) => (...))}` at line 127. No changes to Layout.astro are needed — adding the entry to `config.ts` is the entire change.

**Nav bar capacity note:** The nav currently has 5 items. On mobile, `justify-between` fills the available width. Adding a 6th item "Work With Me" (3 words, ~11 chars) may cause wrapping or crowding on small screens. The planner should flag this as a potential mobile UX concern but not block on it — the layout is `justify-between` which distributes space.

---

### Finding 5: Opening Section Rendering — Content Mapping

`workWithMePageContent.opening` is `string[]` with 7 items (verified in `src/config.ts`):

```
[0] "I work from one principle: good design is as little design as possible."
[1] "I've applied it to brand identities, products, and operations systems serving over a million businesses."
[2] "The discipline is the same regardless of the medium."
[3] "Start with the real problem."
[4] "Include everyone it touches."
[5] "Define success."
[6] "Data drives the solution."
```

**Mockup visual treatment** (`ezra-site-mockup.html` intro block, lines 266-294):
- Label row: `<p class="intro-headline">Let's Collaborate</p>` + contact icons (phone + email SVGs)
- `opening[0]` maps to the combined "intro-principle" display: the first sentence ("I work from one principle:") becomes a quiet lead-in, and "good design is as little design as possible." becomes the large light statement — BUT the array stores them as one string
- `opening[1]` and `opening[2]` → `.intro-body` paragraphs
- `opening[3]`–`opening[6]` → `.method` block, each as a `.method-item` div

**Resolution for the executor:** Since `opening[0]` is a single string containing both the lead-in and the principle, the executor has two options:
1. Split on ": " in the template (fragile)
2. Render `opening[0]` as one element styled as the large principle statement (simpler, acceptable)

The prototype-v2 variations show how this can be rendered. For the planner's purposes: map `opening[0]` as the principle (large, light), `opening[1]`–`opening[2]` as body paragraphs, `opening[3]`–`opening[6]` as method beats.

**Service order discrepancy:** The mockup (`ezra-site-mockup.html`) shows: AI products → Product design → Brand identity → Operations. `workWithMePageContent.services` stores them as: Brand identity → Product design → Operations → AI products. The services section should render `workWithMePageContent.services` in array order (index 0–3) which gives: Brand identity, Product design, Operations, AI products. This does NOT match the mockup's order (AI products first). The planner must flag this discrepancy: either the executor renders the services in config order (which diverges from the mockup) or the executor reorders them in the template. [ASSUMED: config order is the intended rendering order since it was set in Phase 01 — but this needs confirmation from Ezra or the planner should decide]

**Background section:** `workWithMePageContent.background` is a single string — render as a prose paragraph in a "Background" labeled section (matching prototype-v2's `section-label` + `bg-text` pattern).

---

### Finding 6: Design System Fit — Tailwind v4 vs Mockup CSS

The project uses **Tailwind CSS v4** via `@tailwindcss/vite` plugin. No `tailwind.config.*` file exists — v4 uses CSS-first configuration. `global.css` is just `@import "tailwindcss"`.

**Mockup uses these specific values that have Tailwind equivalents:**

| Mockup value | Tailwind class | Notes |
|---|---|---|
| `max-width: 680px` | `max-w-2xl` = 672px or inline `style="max-width:680px"` | 8px difference; use inline style for pixel-perfect match |
| `color: #999` | `text-[#999]` or `opacity-60` on white text | Mockup uses literal hex; site uses opacity hierarchy — both work |
| `color: #666` | `text-[#666]` or `opacity-35`–`opacity-40` | Same |
| `color: #444` | `text-[#444]` | For labels |
| `font-weight: 300` | `font-light` | For principle/headline text |
| `font-weight: 400` | `font-normal` | Default |
| `font-size: 13px` | `text-[13px]` | Tailwind v4 supports arbitrary values |
| `font-size: 28px` | `text-[28px]` or `text-3xl` (30px) | Use arbitrary if pixel-perfect |
| `letter-spacing: 0.12em` | `tracking-[0.12em]` | Arbitrary value |
| `text-transform: uppercase` | `uppercase` | Standard |
| `line-height: 1.75` | `leading-7` or `leading-[1.75]` | |
| `text-wrap: pretty` | `text-pretty` | Tailwind v4 includes this |
| `border-top: 0.5px solid #222` | `border-t border-[#222]` | Note: `0.5px` borders may render as `1px` on some screens |
| `padding: 130px 48px` | `py-[130px] px-12` | Arbitrary y-value needed |

**Key point:** The mockup uses a `#fff` background hero section and a `#000` background content section. The existing site uses `background: #000000` on `html` (in Layout.astro's global style). The custom layout page needs to set `background: #fff` on the hero section explicitly — the global CSS default is black.

**`gray-bg` class:** Layout.astro uses `hover:bg-gray-bg` on nav links (line 131). This is a custom Tailwind token. Since the work-with-me page does not use Layout.astro and has no nav links, this is irrelevant.

**Tailwind v4 arbitrary values:** The syntax is the same as v3 for arbitrary values (`text-[28px]`, `tracking-[0.12em]`). No config needed. [VERIFIED: Tailwind v4 docs preserve arbitrary value syntax]

---

### Finding 7: Build Verification — What Could Fail

`package.json` `build` script: `astro check && astro build`

**`astro check` (TypeScript):** Will fail if:
- Import of `workWithMePageContent` is wrong (already works — Phase 01 verified)
- The `.astro` file has invalid TypeScript in its frontmatter
- Props passed to components don't match their types
- The `SEOInfo` type fields are not all present in `workWithMePageContent.seo` (they are — verified)

**`astro build` (component validation):** Will fail if:
- An Astro component is imported but doesn't exist
- An asset reference uses a path that doesn't exist
- A `getCollection` call references a non-existent collection (not applicable here)

**Likely failure points for this phase:**
1. Importing `global.css` with wrong relative path from `src/pages/` — correct path is `../styles/global.css`
2. Using a Tailwind class that doesn't exist in v4 (e.g., `bg-gray-bg` — this is a custom token that only exists via Layout.astro's context; don't use it in the custom page)
3. TypeScript errors from the animation script — Astro's `<script>` blocks are type-checked; `document.getElementById()` returns `HTMLElement | null`, so null checks are required (see `about.astro` pattern for how to handle)
4. The SVG animation script uses `function rand(min, max)` and other ES5-style functions — these are fine in Astro's `<script>` blocks (compiled by Vite)

**No new package installs required.** This phase uses only existing dependencies.

---

## Standard Stack

### Core (no new installs — all already in package.json)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| astro | ^5.16.15 | Page file routing, SSG build | Project's framework |
| tailwindcss | ^4.1.17 | Utility CSS | Already integrated via Vite plugin |
| typescript | ^5.4.3 | Type checking (`astro check`) | Already in project |

### No new packages needed for this phase.

**Package Legitimacy Audit:** Not applicable — this phase installs zero new packages.

---

## Architecture Patterns

### System Architecture Diagram

```
User request → GitHub Pages CDN
                    ↓
            /superlite_v2/work-with-me
                    ↓
    work-with-me.astro (SSG, rendered at build time)
         ├── <head> (SEO from workWithMePageContent.seo)
         ├── global.css import (Tailwind + Inter)
         ├── #hero section (white bg)
         │     └── SVG namesvg (23 paths, opacity=0)
         ├── #divider (1px black line)
         ├── #content section (black bg)
         │     ├── intro block
         │     │     ├── label + contact icons
         │     │     ├── opening[0] → principle statement
         │     │     ├── opening[1-2] → body paragraphs
         │     │     └── opening[3-6] → method beats
         │     ├── services (map over workWithMePageContent.services)
         │     ├── background (workWithMePageContent.background)
         │     └── cta (phone link, id="phone-link")
         └── <script> blocks
               ├── SVG animation (ported from mockup, DEPTH=15)
               └── phone copy-to-clipboard (ported from about.astro)
```

Nav wiring (separate change):
```
src/config.ts navBarLinks[]
      ↓ add { title: "Work With Me", url: "/superlite_v2/work-with-me" }
Layout.astro (no change) maps navBarLinks → renders new link automatically
```

### Recommended File Structure for Phase 02

```
src/
├── pages/
│   └── work-with-me.astro    ← NEW (primary deliverable)
└── config.ts                 ← EDIT (add one navBarLinks entry)
```

No new components, no new types, no new config exports.

### Pattern 1: Self-Contained Astro Page (no Layout wrapper)

**What:** An `.astro` file that owns its full HTML document — `<html>`, `<head>`, `<body>`.

**When to use:** When the page requires a fundamentally different visual structure from the site's shared layout (e.g., no nav bar, different background color in hero).

**Example structure:**
```astro
---
// Source: project codebase pattern — inferred from Layout.astro structure
import "../styles/global.css";
import { workWithMePageContent } from "../config";
const { seo, opening, services, background, cta } = workWithMePageContent;
---

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/superlite_v2/favicon.svg" />
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />
    <meta property="og:title" content={seo.title} />
    <meta property="og:description" content={seo.description} />
    <meta property="og:image" content={seo.image} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
  </head>
  <body>
    <!-- hero, content sections here -->
  </body>
</html>

<style is:global>
  /* page-specific resets if needed */
</style>

<script>
  // SVG animation + phone CTA
</script>
```

**Note:** The Inter font is loaded in Layout.astro via a `<style is:global>` Google Fonts import (line 192 of Layout.astro). Since the custom page does NOT use Layout.astro, it must either include the same `@import url(...)` in a `<style is:global>` block OR add the `<link>` tag in `<head>` directly. The `<link>` tag approach is simpler and avoids render-blocking CSS.

### Pattern 2: Opening Array Rendering

```astro
---
// opening[0] = principle statement (large, light)
// opening[1-2] = body paragraphs
// opening[3-6] = method beats
---

<p class="intro-principle">{opening[0]}</p>
<div class="intro-body">
  <p>{opening[1]}</p>
  <p>{opening[2]}</p>
</div>
<div class="method">
  {opening.slice(3).map((beat) => (
    <div class="method-item">{beat}</div>
  ))}
</div>
```

### Pattern 3: Services Rendering

```astro
{services.map((service) => (
  <div class="service">
    <p class="service-title">{service.title}</p>
    <p class="service-body">{service.description}</p>
  </div>
))}
```

**Note on `<br>` tags:** `workWithMePageContent.services[*].description` values in `config.ts` do NOT contain `<br>` tags — they use em dashes and single-paragraph prose. The mockup's `service-body` elements DO have `<br>` tags. If the planner wants explicit line breaks matching the mockup, the executor should either (a) use `set:html` to render descriptions that contain `<br>` tags, or (b) accept that the service descriptions will wrap naturally. The `text-wrap: pretty` rule prevents orphan words. Current config values use `—` (em dash) separators where the mockup has `<br>` — this is an inconsistency to flag.

### Anti-Patterns to Avoid

- **Using `Layout.astro` on this page:** Adds a nav bar that CLAUDE.md explicitly prohibits.
- **Hardcoding copy in the `.astro` file:** All text must come from `workWithMePageContent`; CLAUDE.md rule.
- **Using `el.style.opacity` for the flicker animation:** Use `el.setAttribute('opacity', ...)` for the `fadeDot` function per CLAUDE.md locked rule.
- **Using `DEPTH = 80` in production:** Reduce to `~15` per CLAUDE.md.
- **Omitting `opacity="0"` on SVG paths:** Copy SVG verbatim from `ezra-site-mockup.html` — paths already have `opacity="0"`.
- **Using `gray-bg` Tailwind class:** This custom token only exists in the Layout.astro context; not available as a standalone utility in v4 without defining it.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Copy-to-clipboard | Custom clipboard implementation | Exact code from `about.astro` script block | Already tested, handles mobile UA check |
| SVG animation | Rewrite animation logic | Copy verbatim from `ezra-site-mockup.html` script | Mockup is the locked design reference; animation is complex with rAF timing |
| Nav rendering | Custom nav component | Existing `navBarLinks` + Layout.astro (no changes) | Layout.astro already renders the array correctly |
| SEO head tags | Custom SEO component | Inline tags using `workWithMePageContent.seo` fields | No SEO component exists; follow the Layout.astro inline pattern |
| Font loading | Self-hosted Inter | Google Fonts `<link>` tag (same as Layout.astro) | Already how the site loads Inter |

---

## Common Pitfalls

### Pitfall 1: White background not applied to hero
**What goes wrong:** The `html` element has `background: #000000` set in Layout.astro's global style. If the hero section doesn't explicitly set `background: #fff`, it will render black.
**Why it happens:** The `html { background: #000 }` rule in `Layout.astro` is in a `<style is:global>` block. Custom page won't have this unless it includes `global.css` — but `global.css` only has `@import "tailwindcss"`, so the black background comes from Layout.astro's inline style block. The custom page avoids this entirely. However, the `* { color: white }` rule in Layout.astro's global styles also won't apply — text color must be set explicitly or via Tailwind.
**How to avoid:** Set `background: #fff` on `#hero`, `background: #000` on `#content` explicitly. Set `color: white` on `body` or the content section. Include a `<style is:global>` block with `-webkit-font-smoothing: antialiased` and the Inter font family on `body`.

### Pitfall 2: SVG paths visible before animation runs
**What goes wrong:** If `opacity="0"` attributes are stripped or the SVG is copied incorrectly, letters will flash visible on load.
**Why it happens:** The script resets opacity via `setOpacity(id, 0, 0)` after load, but there's a 600ms delay before this runs — a flash window.
**How to avoid:** Copy SVG verbatim from `ezra-site-mockup.html` — every `<path>` already has `opacity="0"`. Do not modify the SVG attributes.

### Pitfall 3: TypeScript errors from DOM access in script block
**What goes wrong:** `astro check` fails because `document.getElementById()` returns `HTMLElement | null`, but animation script code accesses properties without null checks.
**Why it happens:** Astro type-checks `<script>` blocks. The mockup's script was plain HTML with no type checking.
**How to avoid:** The mockup script already has `if (!el) return` guards in `fadeDot` and `flickerDot`. The `window.addEventListener('load', ...)` block accesses `contentEl` and `dividerEl` directly — add null checks or cast: `const contentEl = document.getElementById('content') as HTMLElement`. The phone CTA script from `about.astro` already has proper null checks.

### Pitfall 4: Nav link URL missing base path
**What goes wrong:** Adding `url: "/work-with-me"` (without base path) to `navBarLinks` results in a 404 on GitHub Pages.
**Why it happens:** The site is deployed at `/superlite_v2/`; all other nav links use the full path.
**How to avoid:** Use `url: "/superlite_v2/work-with-me"` — matching the pattern of all other `navBarLinks` entries.

### Pitfall 5: Service order mismatch between config and mockup
**What goes wrong:** Rendering `services.map()` in config order (Brand identity → Product design → Operations → AI products) diverges from the mockup order (AI products → Product design → Brand identity → Operations).
**Why it happens:** Config was written with Brand identity first; mockup has AI products first.
**How to avoid:** Planner decision required. If the config order is canonical (Phase 01 locked it), render in config order. If the mockup order is canonical (CLAUDE.md says mockup is locked design), the executor should either reorder the map or the planner should change the config. See Assumptions Log.

### Pitfall 6: `global.css` import path
**What goes wrong:** Build error if import path is wrong.
**Why it happens:** `src/pages/work-with-me.astro` is one level deep; `global.css` is at `src/styles/global.css`.
**How to avoid:** Use `import "../styles/global.css"` — same relative path that Layout.astro uses (Layout.astro is at `src/layouts/`, also one level deep, uses `"../styles/global.css"`).

---

## Code Examples

### Complete CTA Block Structure
```astro
<!-- Source: about.astro lines 25-28 adapted for work-with-me -->
<div class="cta">
  <p class="cta-label">{/* "Get in touch" — use a constant or inline */}</p>
  <a id="phone-link" class="cta-number" href={cta.phoneHref}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
    {cta.phone}
  </a>
  <p id="phone-label" class="cta-sublabel">{cta.label}</p>
</div>

<script>
  // Source: about.astro lines 82-95 (adapted)
  const link = document.getElementById('phone-link') as HTMLAnchorElement;
  const label = document.getElementById('phone-label') as HTMLElement;
  if (link && label) {
    link.addEventListener('click', (e) => {
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (!isMobile) {
        e.preventDefault();
        navigator.clipboard.writeText('+1 (415) 335-9911').then(() => {
          const original = label.textContent;
          label.textContent = 'Copied!';
          setTimeout(() => { label.textContent = original; }, 2000);
        });
      }
    });
  }
</script>
```

**Note:** `about.astro` puts the "Copied!" label on a `<span id="phone-label">` inside the `<a>` tag. The mockup puts the sublabel (`cta-sublabel`) as a separate `<p>` outside the `<a>`. The work-with-me page should follow the mockup's structure: the sublabel "Call or text" is outside the link. The script should update `label.textContent` on the sublabel `<p>` element.

### Nav Entry Addition
```typescript
// Source: src/config.ts navBarLinks array
// Add this entry to navBarLinks in src/config.ts
{
  title: "Work With Me",
  url: "/superlite_v2/work-with-me",
},
```

### Animation Script Key Section (DEPTH Change)
```javascript
// Source: ezra-site-mockup.html lines 333-339 — change DEPTH only
const FADE_MS   = 3800;
const SPREAD_MS = 5000;
const VAR_LEVEL = 8;
const DEPTH     = 15;     // CHANGED from 80 per CLAUDE.md production spec
const SPEED_MS  = 5000;
const INTERVAL  = 15000;
const CENTER    = 296;
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|---|---|---|---|
| Tailwind v3 config file | Tailwind v4 CSS-first (`@import "tailwindcss"`) | v4 release | No `tailwind.config.js` exists; all customization via CSS `@theme` or arbitrary values |
| `@tailwindcss/typography` | Not used in this phase | — | Package is installed as devDep but not used for work-with-me page |

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Service rendering order should follow config.ts array order (Brand identity → Product design → Operations → AI products), not the mockup order (AI products → Product design → Brand identity → Operations) | Finding 5, Pitfall 5 | Page visually diverges from locked mockup design; may require a config reorder or template reorder |
| A2 | The opening variation (C1/C2/C3) from prototype-v2 has not been selected; planner should either pick C3 (simplest, closest to mockup spirit) or flag for user decision before implementation | Finding 5 | Wrong variation chosen; requires visual rework |
| A3 | The contact icons row (phone + email SVGs) shown in the mockup's `intro-header` div are decorative quick-links, not the primary CTA — they may be omitted if the planner considers them outside scope of `workWithMePageContent` | Finding 3 (mockup lines 268-280) | Mockup fidelity reduced; not a functional issue |

---

## Open Questions

1. **Service order: config vs mockup**
   - What we know: config.ts has Brand identity first; mockup has AI products first
   - What's unclear: which order is canonical for the rendered page
   - Recommendation: Ask Ezra or default to the config order (Phase 01 set it intentionally)

2. **Opening variation: C1, C2, or C3**
   - What we know: prototype-v2 shows three valid variations; CONTEXT.md says "final variation TBD from prototype"; no selection was made
   - What's unclear: which typography treatment Ezra prefers
   - Recommendation: Planner should flag this as a decision point; suggest C3 (minimum ornamentation, aligns with "good design is as little design as possible" philosophy) as the default if no decision is made

3. **Contact icons in intro-header**
   - What we know: mockup shows small phone + email SVG icons next to the "Let's Collaborate" label
   - What's unclear: whether these are in scope (they're not in `workWithMePageContent` — no email field in the CTA type)
   - Recommendation: Omit for now; the phone CTA block handles the contact action; email is available via socialLinks but not wired into this page's content type

---

## Environment Availability

This phase requires no external dependencies beyond what is already installed. The Astro build toolchain is confirmed working (Phase 01 passed `npm run build`). No new packages needed.

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| astro | Page build | confirmed | ^5.16.15 | — |
| tailwindcss (v4) | Utility classes | confirmed | ^4.1.17 | — |
| Inter (Google Fonts) | Typography | network-dependent | — | system-ui fallback (already in font stack) |

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | `astro check` (TypeScript) + `astro build` (component validation) |
| Config file | none — built into `package.json` scripts |
| Quick run command | `npm run build` |
| Full suite command | `npm run build` |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| ROUTE-01 | `work-with-me.astro` exists and builds | build smoke | `npm run build` | ❌ Wave 0 |
| ROUTE-02 | Nav link present in built output | build smoke | `npm run build` (check `dist/`) | ❌ Wave 0 |
| DESIGN-01 | Custom layout (no Layout.astro wrapper) | visual / manual | inspect built HTML | ❌ Wave 0 |
| DESIGN-02 | Content column max-width constraint | visual / manual | inspect rendered page | ❌ Wave 0 |
| DESIGN-03 | Opacity hierarchy on text | visual / manual | inspect rendered page | ❌ Wave 0 |
| DESIGN-04 | No decorative elements | visual / manual | inspect rendered page | ❌ Wave 0 |
| TECH-04 | `npm run build` exits 0 | build | `npm run build` | ❌ Wave 0 |

### Sampling Rate
- **Per task commit:** `npm run build` (full build — this is fast for a static site with few pages)
- **Phase gate:** `npm run build` green + visual browser check of rendered page

### Wave 0 Gaps
- [ ] `src/pages/work-with-me.astro` — primary deliverable, does not exist yet
- No test framework setup needed — build-time type checking is the validation mechanism

---

## Security Domain

This phase has no authentication, session management, or user-provided input beyond a click event. The only security-adjacent concern:

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V5 Input Validation | no | No user input |
| V6 Cryptography | no | `navigator.clipboard` is a browser API, not crypto |

The phone copy-to-clipboard uses `navigator.clipboard.writeText()` which is a standard browser API. No security concerns. The `tel:` href is a static value from config — no injection risk.

---

## Sources

### Primary (HIGH confidence — direct codebase inspection)
- `ezra-site-mockup.html` — locked design reference; SVG, animation script, layout CSS all extracted verbatim
- `src/pages/about.astro` — copy-to-clipboard pattern extracted verbatim
- `src/layouts/Layout.astro` — confirmed what it provides, what must be replicated
- `src/config.ts` — confirmed `workWithMePageContent` structure and content
- `src/types/config.ts` — confirmed `WorkWithMePageContent` type
- `CLAUDE.md` — confirmed custom layout requirement, SVG animation rules, color system
- `work-with-me-prototype-v2.html` — typography variation options (C1/C2/C3)
- `package.json` + `astro.config.mjs` — confirmed tech stack, build script, base path

### Secondary (MEDIUM confidence)
- Tailwind v4 arbitrary value syntax — consistent with v3 pattern; v4 docs confirm unchanged [ASSUMED: based on training knowledge of Tailwind v4 CSS-first approach]

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — verified from package.json and existing pages
- Architecture: HIGH — verified from direct file inspection; custom layout pattern derived from Layout.astro analysis
- Pitfalls: HIGH — all pitfalls derived from direct code inspection, not speculation
- Service order discrepancy: MEDIUM — factual discrepancy is verified; resolution requires human decision

**Research date:** 2026-06-06
**Valid until:** 2026-07-06 (stable stack; no fast-moving dependencies)
