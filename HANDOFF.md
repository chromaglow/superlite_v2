# Session Handoff — Work With Me Consulting Page

**Date:** 2026-06-06
**Project:** `C:\Users\ezras\OneDrive\Documents\work\GitHub\superlite_v2`
**Read this first when resuming.**

---

## What We Built This Session

Added a full GSD planning structure for a new `/work-with-me` consulting page to this Astro site.

### Files created
```
.planning/
  PROJECT.md           — full project context and positioning
  REQUIREMENTS.md      — 11 requirements across 2 phases
  ROADMAP.md           — 2-phase plan
  STATE.md             — project state tracker
  config.json          — YOLO mode, coarse, research+checker+verifier
  phases/
    01-content-type-system/
      01-CONTEXT.md    — ALL copy decisions locked (read this)
work-with-me-prototype.html   — HTML prototype with 3 layout options + copy
HANDOFF.md            — this file
```

---

## All Copy — Locked and Ready to Build

### Page URL
`/work-with-me`

### Opening Statement (7 beats — must be broken up typographically, NOT a text block)
```
I work from one principle: good design is as little design as possible.

I've applied it to brand identities, products, and operations systems serving over a million businesses.

The discipline is the same regardless of the medium.

Start with the real problem.
Include everyone it touches.
Define success.
Data drives the solution.
```

### Services (4 — all locked)
**Brand identity and website builds**
Strategy first: what does it need to say, look like, and accomplish. Everything follows from that — visual system, site design, e-commerce, fulfillment.

**Product design and user research**
Most product problems are definition problems — the wrong thing was built because the right question was never asked. I work at that layer: users, mental models, information architecture, interaction.

**Operations transformation**
I've redesigned systems that had to work for millions of businesses simultaneously. The method is the same at any scale: find the constraint, fix it at the source, measure the delta.

**AI products, automation, and machine learning**
The goal is always specific: reduce touches, improve forecast accuracy, create capacity, eliminate waste. Systems thinking maps where humans belong in each connected system — internal users, external customers, both.

### Background (4 sparse beats — locked)
Twenty years. Brand strategy, product design, and UX research. Amazon FBA and AWS — systems for over a million businesses. 600,000 labor hours removed through AI-enabled automation.

### CTA
(415) 335-9911 — Call or text — copy-to-clipboard on desktop

---

## Where We Left Off

**Layout prototype** (`work-with-me-prototype.html`) shows 3 options — Option C (stacked uppercase labels) was chosen as the base direction, but the **opening text typography needs variations** before we commit.

**The specific ask:** Option C's opening text ("I work from one principle...") must be broken into dramatic beats with spacing — NOT a text block. Ezra asked for variations on Option C showing different ways to handle this.

**See `work-with-me-prototype-v2.html`** (created at end of this session) for the typography variations.

---

## What to Do Next

### Immediate (this session)
1. Open `work-with-me-prototype-v2.html` in browser
2. Pick a typography variation for the opening (C1, C2, or C3)
3. Confirm layout is good
4. Run: `/gsd:plan-phase 1` from this project directory

### After that
- Phase 1 plan will define: `WorkWithMePageContent` type + all config content
- Phase 2: builds the `.astro` page, adds nav link, verifies build

### Commands to use (run from `C:\Users\ezras\OneDrive\Documents\work\GitHub\superlite_v2`)
```
/gsd:plan-phase 1       — creates execution plan for Phase 1
/gsd:execute-phase 1    — executes Phase 1 (type + content in config.ts)
/gsd:plan-phase 2       — creates execution plan for Phase 2
/gsd:execute-phase 2    — builds the page and nav
```

---

## Key Technical Facts

- **Framework:** Astro, GitHub Pages, base path `/superlite_v2/`
- **Deploy:** `npm run build` then `git push` — Vercel is NOT connected, manual deploy only
- **Pattern:** All page content lives in `src/config.ts` exports, not in `.astro` files
- **Phone CTA pattern:** Already implemented in `src/pages/about.astro` — copy the script block exactly
- **Layout wrapper:** `src/layouts/Layout.astro` — `<Layout seo={...}>` wraps every page

---

## GSD Planning Files
All planning context is in `.planning/` — especially:
- `.planning/phases/01-content-type-system/01-CONTEXT.md` — all copy and layout decisions
- `.planning/ROADMAP.md` — 2-phase structure
- `.planning/PROJECT.md` — full background and positioning

---
*Generated: 2026-06-06 | Resume with: read HANDOFF.md then open work-with-me-prototype-v2.html*
