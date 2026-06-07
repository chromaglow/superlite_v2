# Phase 02: Page Build + Nav — Pattern Map

**Mapped:** 2026-06-06
**Files analyzed:** 2
**Analogs found:** 2 / 2

---

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|---|---|---|---|---|
| `src/pages/work-with-me.astro` | page (custom layout) | request-response | `src/pages/about.astro` (phone CTA, script pattern); `src/layouts/Layout.astro` (head/SEO/font pattern) | role-match (about.astro); structural (Layout.astro) |
| `src/config.ts` | config | — | `src/config.ts` navBarLinks array (existing) | exact — additive change only |

---

## Pattern Assignments

### `src/pages/work-with-me.astro` (page, custom layout, no Layout.astro wrapper)

**Primary analog:** `src/pages/about.astro` (phone CTA + script pattern)
**Structural analog:** `src/layouts/Layout.astro` (head/SEO/font — must be replicated inline)
**Design source:** `ezra-site-mockup.html` (all CSS values and SVG verbatim)

---

#### Frontmatter / imports pattern

Copy from `src/layouts/Layout.astro` line 2 (the global.css import), and `src/pages/about.astro` lines 2–4 (config import pattern):

```astro
---
import "../styles/global.css";
import { workWithMePageContent } from "../config";
const { seo, opening, services, background, cta } = workWithMePageContent;
---
```

Critical: the path `../styles/global.css` is correct from `src/pages/`. This is the same relative depth as `src/layouts/` which uses the same path (Layout.astro line 2).

---

#### Head / SEO pattern

Copy structure verbatim from `src/layouts/Layout.astro` lines 94–103. The custom page owns its own `<head>` — no Layout wrapper:

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/superlite_v2/favicon.svg" />
    <meta name="generator" content={Astro.generator} />
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />
    <meta property="og:title" content={seo.title} />
    <meta property="og:description" content={seo.description} />
    <meta property="og:image" content={seo.image} />
  </head>
```

`seo` is destructured from `workWithMePageContent` in the frontmatter. All four fields (`title`, `description`, `image`, and the og equivalents) are present in the config — verified in `src/config.ts` lines 227–231.

---

#### Font loading pattern

`src/layouts/Layout.astro` loads Inter via a `<style is:global>` block at lines 191–193. The custom page does NOT use Layout.astro, so Inter must be loaded independently. Use a `<style is:global>` block (same mechanism as Layout.astro):

```astro
<style is:global>
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");

  body {
    font-family: system-ui, -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  * {
    -webkit-font-smoothing: antialiased;
  }
</style>
```

Note: The mockup (`ezra-site-mockup.html` line 12) uses `system-ui, -apple-system, sans-serif` as the body font — not Inter. CLAUDE.md lists Inter as a candidate font with "final TBD." Use `system-ui` as the mockup does, with Inter as a fallback via the Google Fonts import. The executor should follow the mockup's `font-family` value.

---

#### Global style resets for custom layout

The custom page has no `html { background: #000 }` rule from Layout.astro. The mockup sets backgrounds per-section. Required `<style is:global>` additions (from `ezra-site-mockup.html` lines 8–13):

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #fff;
  font-family: system-ui, -apple-system, sans-serif;
}
```

---

#### Hero section structure and CSS

Source: `ezra-site-mockup.html` lines 16–21 (CSS) and lines 231–257 (HTML).

CSS values to use verbatim (as inline styles or a `<style>` block):
```css
#hero {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 130px 48px;        /* mobile: 72px 32px (max-width: 600px) */
}

#namesvg {
  width: 100%;
  max-width: 660px;
  height: auto;
}
```

HTML structure:
```html
<section id="hero">
  <!-- SVG block goes here — copy verbatim from ezra-site-mockup.html lines 232–256 -->
</section>
```

---

#### SVG block — copy verbatim

Source: `ezra-site-mockup.html` lines 232–256. Copy ALL 23 `<path>` elements exactly as-is. Every path already has `opacity="0"` as an SVG attribute — do not alter. The SVG open tag:

```html
<svg id="namesvg" viewBox="0 0 593.557 66.462" fill="#000" style="overflow:visible">
```

All 23 path IDs in the `allForms` array (mockup line 343–347):
`f-i-body`, `f-j-body`, `f-hyphen`, `f-l`, `f-t`, `f-z`, `f-v`, `f-y`, `f-E`, `f-r`, `f-r2`, `f-h`, `f-n`, `f-S1`, `f-S2`, `f-a1`, `f-a2`, `f-e`, `f-a-uml-body`, `f-i-dot`, `f-j-dot`, `f-a-dot1`, `f-a-dot2`

---

#### Divider

Source: `ezra-site-mockup.html` lines 24–28 (CSS) and line 260 (HTML).

```css
#divider { width: 100%; height: 1px; background: #000; }
```

```html
<div id="divider"></div>
```

---

#### Content section structure and CSS

Source: `ezra-site-mockup.html` lines 31–40 (CSS) and lines 263–330 (HTML).

```css
#content {
  background: #000;
  color: #fff;
  padding: 30px 48px 160px;   /* mobile: 18px 24px 100px */
}

#content-inner {
  max-width: 680px;
  margin: 0 auto;
}
```

HTML shell:
```html
<section id="content">
  <div id="content-inner">
    <!-- intro, services, cta -->
  </div>
</section>
```

---

#### Intro block CSS values

Source: `ezra-site-mockup.html` lines 42–88.

```css
.intro { margin-bottom: 54px; }

.intro-header {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 32px;
}

.intro-headline {
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #666;
}

.intro-principle {
  font-size: 28px;         /* mobile: 22px */
  font-weight: 300;
  line-height: 1.35;
  color: #fff;
  margin-bottom: 32px;
  letter-spacing: -0.01em;
}

.intro-body {
  font-size: 15px;
  line-height: 1.75;
  color: #999;
  max-width: 540px;
}
.intro-body p { margin-bottom: 16px; }
.intro-body p:last-child { margin-bottom: 0; }

.method { margin-top: 20px; margin-bottom: 40px; }
.method-item {
  font-size: 15px;
  line-height: 1.75;
  color: #666;
  padding: 4px 0;
}
```

**Content mapping for intro block** (source: `src/config.ts` lines 232–243 and CLAUDE.md locked copy):

| Template element | Config source | Value |
|---|---|---|
| `.intro-headline` | Hardcoded per mockup | "Let's Collaborate" |
| `.intro-principle` | Hardcoded per CLAUDE.md | "Good design is as little design as possible." |
| `.intro-body p[0]` | `opening[1]` + `opening[2]` combined | "I've applied it..." + "The discipline..." |
| `.intro-body p[1]` | `background` field | "Twenty years. Brand strategy..." |
| `.method-item` × 4 | `opening[3]`–`opening[6]` | "Start with the real problem." etc. |

**IMPORTANT — CLAUDE.md overrides config.ts opening[0]:** The `.intro-principle` text in CLAUDE.md locked copy is "Good design is as little design as possible." — this is the principle statement only. `opening[0]` in config.ts reads "I work from one principle: good design is as little design as possible." The mockup renders just the principle ("Good design...") as the large statement. Use the CLAUDE.md locked copy for this element, not `opening[0]` verbatim, OR split on ": " and take the second part. The planner must decide which approach the executor takes.

**IMPORTANT — service order:** CLAUDE.md locked copy specifies service order as: AI products → Product design → Brand identity → Operations. The `workWithMePageContent.services` array in config.ts (lines 241–258) stores them as: Brand identity → Product design → Operations → AI products. The executor must NOT use `services.map()` in config array order. Either (a) render services by explicit index `[3, 1, 0, 2]` to match CLAUDE.md order, or (b) the planner should call for a config.ts reorder of the services array to match CLAUDE.md. CLAUDE.md is authoritative.

---

#### Services section CSS values

Source: `ezra-site-mockup.html` lines 91–124.

```css
.services-label {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #444;
  margin-bottom: 48px;
}

.service { margin-bottom: 36px; }
.service:last-child { margin-bottom: 0; }

.service-title {
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  letter-spacing: -0.01em;
  margin-bottom: 16px;
  line-height: 1.3;
}

.service-body {
  font-size: 14px;
  line-height: 1.8;
  color: #666;
  max-width: 520px;
  text-wrap: pretty;
}
```

Services HTML template:
```html
<p class="services-label">Services</p>
<!-- render 4 services in CLAUDE.md order: [3],[1],[0],[2] from services array -->
<div class="service">
  <p class="service-title">{service.title}</p>
  <p class="service-body" set:html={service.description}></p>
</div>
```

Use `set:html` for `service-body` if descriptions contain `<br>` tags. Current config values use em dash separators, not `<br>`. CLAUDE.md says "No em dashes in copy" and "sentence breaks in service descriptions are intentional `<br>` tags." The config descriptions use em dashes — the executor must replace them with `<br>` tags (use `set:html` or update config values). Planner must decide which approach.

---

#### CTA section — full pattern (phone copy-to-clipboard)

CSS source: `ezra-site-mockup.html` lines 155–194.
HTML source: `ezra-site-mockup.html` lines 318–327.
Script source: `src/pages/about.astro` lines 82–95.

```css
.cta {
  margin-top: 36px;
  padding-top: 36px;
  border-top: 0.5px solid #222;
}

.cta-label {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #444;
  margin-bottom: 28px;
}

.cta-number {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 32px;            /* mobile: 24px */
  font-weight: 300;
  color: #fff;
  letter-spacing: -0.02em;
  text-decoration: none;
  margin-bottom: 10px;
}

.cta-number svg { flex-shrink: 0; opacity: 0.5; }

.cta-sublabel {
  font-size: 13px;
  letter-spacing: 0.06em;
  color: #555;
  padding-left: 46px;         /* mobile: 34px */
}
```

HTML (uses config data):
```html
<div class="cta">
  <p class="cta-label">Get in touch</p>
  <a id="phone-link" class="cta-number" href={cta.phoneHref}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
    {cta.phone}
  </a>
  <p id="phone-label" class="cta-sublabel">{cta.label}</p>
</div>
```

Phone copy-to-clipboard script — copy verbatim from `src/pages/about.astro` lines 82–95 with one change: reset label to `cta.label` value ("Call or text"), not the about.astro hardcoded "Call or Text Me":

```typescript
<script>
  const link = document.getElementById('phone-link') as HTMLAnchorElement;
  const label = document.getElementById('phone-label');
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

Using `original = label.textContent` (saves the current value before overwriting) is safer than hardcoding the reset string. The `id="phone-link"` and `id="phone-label"` IDs are safe — this page is its own document, not wrapped by Layout.astro, so no ID conflicts exist.

---

#### SVG animation script — change only DEPTH

Source: `ezra-site-mockup.html` lines 332–480. Copy the entire `<script>` block verbatim with one change only:

Line 337 in the mockup:
```javascript
const DEPTH     = 80;   // original (testing value)
```

Change to:
```javascript
const DEPTH     = 15;   // production value per CLAUDE.md
```

All other constants, functions, and the `window.addEventListener('load', ...)` block copy verbatim. Do not alter:
- `fadeDot()` function (lines 394–405) — uses `el.setAttribute('opacity', ...)` — leave as-is
- `setOpacity()` function (lines 361–372) — uses `el.style.opacity` — leave as-is (this is correct for intro animation)
- `requestAnimationFrame(() => requestAnimationFrame(() => { ... }))` double-frame wrapper (line 447) — required, do not remove
- Null check pattern: `const el = document.getElementById(id); if (!el) return;` — already present in `fadeDot` and `flickerDot`

TypeScript null safety for Astro's type checker: the `window.addEventListener('load', ...)` block accesses `contentEl` and `dividerEl` directly without null checks. Add type assertions to prevent `astro check` failures:

```typescript
const contentEl = document.getElementById('content') as HTMLElement;
const dividerEl = document.getElementById('divider') as HTMLElement;
```

---

### `src/config.ts` (config, additive change)

**Analog:** existing `navBarLinks` array, `src/config.ts` lines 18–40.

**Existing pattern** (lines 18–40):
```typescript
export const navBarLinks: NavBarLink[] = [
  { title: "Home",     url: "/superlite_v2/" },
  { title: "About",    url: "/superlite_v2/about" },
  { title: "Resume",   url: "/superlite_v2/assets/ezra-stjarna-shively-resume.pdf", external: true },
  { title: "The Lab",  url: "/superlite_v2/lab" },
  { title: "Thinking", url: "/superlite_v2/thinking" },
];
```

**Change:** Append one entry. No other property is needed (no `external: true` — internal page):

```typescript
{ title: "Work With Me", url: "/superlite_v2/work-with-me" },
```

Insert position: append as the 6th item (after "Thinking"). Layout.astro line 127 maps over this array automatically — no template change needed.

**Mobile nav crowding note:** Adding a 6th item to a `justify-between` nav on mobile may cause label crowding. "Work With Me" is 11 characters (3 words). The Layout.astro nav uses `whitespace-nowrap` (line 130) which prevents wrapping but could cause overflow. This is a UX concern to flag but not a build blocker.

---

## Shared Patterns

### Global CSS reset for custom layout
**Source:** `ezra-site-mockup.html` lines 8–13
**Apply to:** `work-with-me.astro` only (other pages use Layout.astro which provides its own reset)
```css
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: #fff; font-family: system-ui, -apple-system, sans-serif; }
```

### Font loading
**Source:** `src/layouts/Layout.astro` lines 191–193 (pattern); `src/pages/work-with-me.astro` must replicate
```astro
<style is:global>
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
</style>
```
**Apply to:** `work-with-me.astro` `<style is:global>` block

### Phone copy-to-clipboard script
**Source:** `src/pages/about.astro` lines 82–95 (exact)
**Apply to:** `work-with-me.astro` `<script>` block
**IDs required:** `id="phone-link"` on `<a>` tag, `id="phone-label"` on sublabel `<p>` tag

### SEO head block
**Source:** `src/layouts/Layout.astro` lines 94–103 (structure)
**Apply to:** `work-with-me.astro` `<head>` block
**Data source:** `workWithMePageContent.seo` — all four fields present in `src/config.ts` lines 227–231

---

## Decisions Required by Planner

The following are not pattern questions — they require a planner decision before the executor can proceed:

| # | Decision | Options | Recommendation |
|---|---|---|---|
| D1 | Service order | (a) Render `services[3,1,0,2]` to match CLAUDE.md; (b) Reorder services array in config.ts | Reorder config.ts to match CLAUDE.md canonical order — cleaner, avoids magic indexes |
| D2 | Intro principle source | (a) Split `opening[0]` on ": "; (b) Hardcode "Good design is as little design as possible." per CLAUDE.md locked copy | Hardcode per CLAUDE.md — it is the locked copy; `opening[0]` value was written before the lock was established |
| D3 | Service description `<br>` breaks | (a) Update config.ts descriptions to replace em dashes with `<br>` + use `set:html`; (b) Accept current config values as-is (no `<br>`) | Update config.ts — CLAUDE.md prohibits em dashes and mandates intentional `<br>` breaks; config values need cleanup |
| D4 | Opening variation (C1/C2/C3) | Three prototype variants from work-with-me-prototype-v2.html | Suggest C3 (minimal); or flag for Ezra to select before executor starts |

---

## No Analog Found

No files in this phase lack analogs. Both files have direct codebase matches.

---

## Metadata

**Analog search scope:** `src/pages/`, `src/layouts/`, project root (`ezra-site-mockup.html`)
**Files scanned:** 5 (`about.astro`, `index.astro`, `Layout.astro`, `config.ts`, `ezra-site-mockup.html`)
**Pattern extraction date:** 2026-06-06
