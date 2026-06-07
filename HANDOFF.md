# Session Handoff — superlite_v2

**Last updated:** 2026-06-07
**Project:** `C:\Users\ezras\OneDrive\Documents\work\GitHub\superlite_v2`
**Read this first when resuming.**

---

## Current State of the Site

All major work is complete and committed. The site is a fully integrated personal + consulting site. Deploy via `npm run build` then push to GitHub (Actions handles Pages), or drag `dist/` to Cloudflare.

The `/work-with-me` consulting page also has its own standalone deploy at `collab-deploy/` — drag that folder to Cloudflare separately. It is NOT part of the GitHub Pages pipeline.

---

## What Changed — 2026-06-07

### 1. Work With Me SVG — Letter Spacing Applied
**File:** `src/pages/work-with-me.astro`

- `viewBox` updated: `0 0 593.557 66.462` → `-21.2 0 636.0 66.462`
- All 23 path elements received `transform="translate(dx, 0)"` — outward letter spread matching `Codex/share.html`
- Formula: `shift = (formPos[letter] - 296.8) × 0.075`
- CSS width: `width: min(557px, 88vw)` — matches codex share page visual size exactly
- **Do not change translate values, viewBox, or CSS width** — they are locked to match share.html

### 2. Navigation — Full Overhaul
**File:** `src/layouts/Layout.astro`

**Desktop (≥ 640px):**
- Removed profile photo (was `identity.logo` avatar — no longer in nav)
- Social icons removed from nav header entirely
- Nav links now flush-left, "Home" has no left padding to align with page content below
- Single clean row: Home · About · Resume · Work With Me · The Lab · Thinking

**Mobile (< 640px):**
- Replaced always-visible single-row nav (was crowded with 6 items) with hamburger menu
- Hamburger button (☰) toggles to (✕) on tap
- Dropdown renders all 6 nav links stacked vertically + social icons at bottom
- Implemented with ~15 lines of vanilla JS, no dependencies

### 3. Nav Link Order
**File:** `src/config.ts` → `navBarLinks`

New order (left → right on desktop, top → bottom in mobile dropdown):
1. Home
2. About
3. Resume
4. Work With Me
5. The Lab
6. Thinking

### 4. Name Heading — Format 1452 Typeface
**Files:** `src/pages/index.astro`, `src/pages/about.astro`

- Replaced `<h1 class="font-bold text-3xl mb-1">` text on both pages
- Replaced with inline SVG of full name "Ezra Shively-Stjärna" in Format 1452 typeface
- Path data sourced from `Ezra.svg` (user-supplied, on Desktop)
- Static display (no animation — animation is a hero-only feature of work-with-me and codex)
- `fill="currentColor"` — inherits white from body CSS
- `max-width: 290px; width: 100%; height: auto` — sits slightly smaller than text-3xl was

---

## Architecture

```
src/
  config.ts              — ALL page content. Edit copy here, not in .astro files.
  types/config.ts        — TypeScript types for all config exports
  layouts/
    Layout.astro          — Main layout (sticky nav + footer). Used by all pages except work-with-me.
  pages/
    index.astro           — Home page
    about.astro           — About page
    work-with-me.astro    — Consulting page (standalone layout, no nav bar by design)
    lab.astro             — The Lab (projects)
    thinking/
      index.astro         — Thinking index
      [id].astro          — Individual post
    work/
      amazon.astro        — Work case study
  components/
    ResumeItem.astro
    SocialLinkBox.astro
    Link.astro

collab-deploy/            — Standalone deploy of /work-with-me for Cloudflare drag-and-drop
  index.html              — Built work-with-me page (copy from dist/work-with-me/index.html after build)
  favicon.svg
  profile.jpg
```

---

## Deploy Instructions

### Main site (GitHub Pages)
```
npm run build
git add -A && git commit -m "..."
git push
```
GitHub Actions deploys automatically from `dist/`.

### Collab page (Cloudflare)
```
npm run build
# Copy dist/work-with-me/index.html → collab-deploy/index.html
# Drag collab-deploy/ folder to Cloudflare dashboard
```

---

## Open Items / Future Work

- **Nav on mobile:** Hamburger is implemented and working. No known issues.
- **Social links:** Removed from desktop nav header. Still present in mobile dropdown and on About page Connect section. Consider adding a minimal footer with social links for desktop.
- **`identity.logo` image:** Still referenced in `config.ts` and used on Home page (circular photo in hover tooltip). Nav avatar removed but file still in use.
- **No em dashes anywhere in copy** — use colons, commas, or split sentences instead (locked rule).

---

## Key Rules (do not break)

- All page copy lives in `src/config.ts` — never hardcode in `.astro` files
- `work-with-me.astro` has no nav bar by design — the SVG name IS the header
- SVG path `opacity="0"` attributes on work-with-me — prevents flash on load
- Flicker animation uses `setAttribute('opacity')` NOT `el.style.opacity`
- work-with-me SVG translate values and viewBox are locked to match share.html
- No em dashes in copy

---

*Resume with: read HANDOFF.md → check `src/config.ts` for content → check `src/layouts/Layout.astro` for nav*
