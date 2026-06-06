# Work With Me — Roadmap

**Milestone:** v1.0 — Launch consulting page
**Last updated:** 2026-06-06

---

## Phase 01: Content + Type System

**Status:** PENDING
**Goal:** Define all page content in `config.ts`, add the TypeScript type, and nail the copy — positioning statement, services, credibility markers, CTA. This is the hard part; the build is easy once the words are right.

**Requirements:** TECH-01, TECH-02, TECH-03, CONTENT-01, CONTENT-02, CONTENT-03, CONTENT-04

**Plans:** 1 plan

Plans:
- [ ] 01-01-PLAN.md — Add WorkWithMePageContent type and workWithMePageContent export (two file edits)

**Success Criteria:**
1. `WorkWithMePageContent` type exists in `src/types/config.ts` and covers all sections
2. `workWithMePageContent` is exported from `src/config.ts` with complete content
3. Opening statement captures the "holistic process" positioning in ≤ 4 sentences
4. Services section has all 4 areas with 2–3 line descriptions each
5. Credibility markers are present and understated (not a brag list)
6. CTA copy is direct — phone number, "Call or text"

---

## Phase 02: Page Build + Nav

**Status:** PENDING
**Goal:** Create `src/pages/work-with-me.astro` using the content from Phase 01, add it to the nav, verify the build passes, and confirm the page looks right.

**Requirements:** ROUTE-01, ROUTE-02, DESIGN-01, DESIGN-02, DESIGN-03, DESIGN-04, TECH-04

**Depends on:** Phase 01

**Success Criteria:**
1. `src/pages/work-with-me.astro` exists and renders at `/superlite_v2/work-with-me`
2. "Work With Me" appears in the nav bar linking to `/superlite_v2/work-with-me`
3. All sections use `max-w-2xl mx-auto px-6` layout — aligned with rest of site
4. Phone CTA uses the existing copy-to-clipboard behavior on desktop
5. `npm run build` exits 0 with no TypeScript or Astro errors
6. Page visually matches the existing site aesthetic (black bg, Inter, opacity hierarchy)

---

## Requirements Coverage

| Phase | Requirements | Status |
|-------|-------------|--------|
| Phase 01 | TECH-01, TECH-02, TECH-03, CONTENT-01, CONTENT-02, CONTENT-03, CONTENT-04 | PENDING |
| Phase 02 | ROUTE-01, ROUTE-02, DESIGN-01, DESIGN-02, DESIGN-03, DESIGN-04, TECH-04 | PENDING |

---
*Roadmap initialized: 2026-06-06*
