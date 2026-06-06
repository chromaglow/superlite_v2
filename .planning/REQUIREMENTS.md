# Requirements — Work With Me Consulting Page

**Milestone:** v1.0 — Launch
**Last updated:** 2026-06-06

---

## v1 Requirements

### Page & Routing

- [ ] **ROUTE-01**: Page exists at `/work-with-me` and is served by the existing Astro build
- [ ] **ROUTE-02**: Nav bar includes a "Work With Me" link pointing to `/superlite_v2/work-with-me`

### Content Sections

- [ ] **CONTENT-01**: Opening section — a tight positioning statement (the arc: design research → sales → Amazon FBA/AWS scale → AI/ML; the philosophy: design is one holistic process, good design = as little as possible)
- [ ] **CONTENT-02**: Services section — four areas (Brand + Web Design; Product Design + UX Research; Operations Transformation; AI/ML Automation), each described in 2–3 lines
- [ ] **CONTENT-03**: Credibility section — brief proof points (Amazon FBA/AWS, 1M+ sellers, 600K+ labor hours removed) presented as context, not bragging
- [ ] **CONTENT-04**: CTA section — phone number prominently displayed with "Call or text" copy; uses existing copy-to-clipboard behavior on desktop (matches about.astro pattern)

### Design & Aesthetic

- [ ] **DESIGN-01**: Page uses the existing `Layout.astro` wrapper (sticky nav, footer, lightbox, phone-copy script)
- [ ] **DESIGN-02**: All sections use `max-w-2xl mx-auto px-6` layout pattern matching the rest of the site
- [ ] **DESIGN-03**: Typography uses existing opacity-based hierarchy (full white for headings, `opacity-60` for supporting text, `opacity-80` for labels) — no new font weights or colors
- [ ] **DESIGN-04**: Page is sparse — no testimonial carousels, no case-study cards, no decorative elements beyond what the existing design system provides

### Technical

- [ ] **TECH-01**: All page content is config-driven — lives in a `workWithMePageContent` export in `src/config.ts`, not hardcoded in the `.astro` file
- [ ] **TECH-02**: TypeScript type `WorkWithMePageContent` added to `src/types/config.ts`
- [ ] **TECH-03**: SEO frontmatter set (title, description, og:image) using the existing `SEOInfo` type
- [ ] **TECH-04**: `npm run build` completes without errors after all changes

---

## v2 / Deferred

- **Case study section** — detailed write-ups of specific engagements (out of scope for v1; brief proof points are sufficient)
- **Calendly / booking link** — may replace phone CTA in future if async scheduling is preferred
- **Separate services sub-pages** — one page is right for now; expand later if scope warrants
- **Client logos** — could add if Ezra wants to name specific clients publicly

## Out of Scope

- Contact form — no friction, phone/text only (v1)
- Pricing — not on the page
- Testimonials — contradicts the aesthetic
- New fonts, colors, or design tokens — use existing system only

---

## Traceability

| Phase | Requirements |
|-------|-------------|
| Phase 01: Content + Type System | TECH-01, TECH-02, TECH-03, CONTENT-01, CONTENT-02, CONTENT-03, CONTENT-04 |
| Phase 02: Page + Nav | ROUTE-01, ROUTE-02, DESIGN-01, DESIGN-02, DESIGN-03, DESIGN-04, TECH-04 |
