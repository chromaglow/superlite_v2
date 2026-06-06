# Work With Me — Consulting Page

**Project:** Add a `/work-with-me` consulting page to chromaglow.github.io/superlite_v2
**Milestone:** v1.0 — Launch
**Last updated:** 2026-06-06 after initialization

---

## What This Is

A consulting page for Ezra Stjärna-Shively — a single page that establishes instant credibility for potential clients across brand design, product/UX, operations, and AI/ML automation. The page is sent directly to people who ask about consulting work. It needs to do one thing: make the reader feel certain they're talking to the right person, without any selling.

**Core value:** The page itself proves the point — sparse, clear, confident. No case-study theater. No pitch. Just the facts.

---

## Core Positioning

Design is one holistic process — not separate disciplines. Ezra approaches every problem (brand identity, product UX, operations systems, AI automation) from the same place: understand the real problem, include everyone who touches it, fix at the root. Good design is as little design as possible.

The arc is the credential: 15+ years from design research (NU Research + Design) → brand consulting (TFG Label Consulting) → sales operations (Carter Motors) → Amazon FBA/AWS at scale (1M+ sellers, 600K+ labor hours removed via AI/ML automation). Most clients hire three different consultants for problems Ezra sees as one problem.

---

## Services

1. **Brand + Web Design** — Brand identity, website design/rebuild, e-commerce strategy. Includes understanding the customer, the market position, and what the brand needs to convey before touching a pixel.

2. **Product Design + UX Research** — Product definition from the ground up. User research, information architecture, interaction design. Includes everyone in the process, not just the designers.

3. **Operations Transformation** — Diagnosing and redesigning operational systems for scale. Fulfillment strategy, process engineering, systems thinking applied to logistics and business operations.

4. **AI/ML Automation** — Implementing AI-enabled automation using AWS Bedrock, Claude, and related tools. Reducing operational overhead. Building systems that run without human intervention.

---

## Target Audience

Anyone who gets the link — startup founders, business owners, Amazon sellers, companies needing brand work or operational improvement. The page needs to work across contexts. Clients may be hiring for one service area but the page should make the full scope of capability legible.

---

## Page Anatomy

- **Opening** — One tight positioning statement. The arc, the philosophy, no fluff.
- **Services** — Four areas, each 2–3 lines. Concrete, no jargon theater.
- **Credibility markers** — Brief. Amazon, FBA/AWS, 1M+ sellers, 600K+ hours. Proof, not bragging.
- **CTA** — Phone number. Call or text. Direct.

---

## Aesthetic

"Consultant who doesn't need to sell." Matches the existing site: Inter font, black background, white text, max-w-2xl centered layout, opacity-based hierarchy. No gradients, no animations, no testimonial carousels. The constraint is the style.

---

## Technical Context

- **Framework:** Astro (static site, GitHub Pages)
- **Styling:** Tailwind CSS v4, Inter font, #000000 background
- **Layout pattern:** `Layout.astro` wrapper, `max-w-2xl mx-auto px-6` sections
- **Content pattern:** Config-driven (`config.ts`) — page content lives in config, not inline in .astro file
- **Deployment:** GitHub Pages at `chromaglow.github.io/superlite_v2` — `npm run build && git push`
- **Base path:** `/superlite_v2/` (all asset/nav links use this prefix)
- **New files needed:**
  - `src/pages/work-with-me.astro`
  - `src/types/config.ts` — add `WorkWithMePageContent` type
  - `src/config.ts` — add `workWithMePageContent` export + nav link
  - `public/assets/` — no new assets needed

---

## Requirements

### Active

- [ ] Page exists at `/work-with-me` and renders in the existing Layout
- [ ] Nav bar includes "Work With Me" link
- [ ] Opening section: positioning statement (the arc + philosophy)
- [ ] Services section: 4 areas with brief descriptions
- [ ] Credibility section: Amazon/FBA proof points, understated
- [ ] CTA: phone number prominent, call/text copy, uses existing copy-to-clipboard behavior
- [ ] Matches existing site aesthetic (black bg, Inter, opacity hierarchy, max-w-2xl)
- [ ] Config-driven: page content lives in `config.ts`, not hardcoded in `.astro`
- [ ] SEO meta tags set (title, description, og:image)

### Out of Scope

- Contact form — no friction, phone/text only
- Testimonials — contradicts the aesthetic
- Pricing — not on the page
- Case studies — mentioned briefly as proof points only, no full writeups
- Separate `/services` page — everything on one page

---

## Key Decisions

| Decision | Rationale |
|----------|-----------|
| /work-with-me URL | More direct/personal than /services or /consult |
| Phone-only CTA | No friction, matches existing copy-to-clipboard pattern |
| Config-driven content | Matches existing site pattern — all content in config.ts |
| Single page, no sub-pages | Consulting context = one send, read it all |
| Aesthetic: existing system | No new fonts/colors — discipline is the design |

---

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition:**
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions

**After milestone:**
1. Full review of all sections
2. Core Value check — still right?
3. Audit Out of Scope — reasons still valid?

---
*Last updated: 2026-06-06 | GSD workflow active*
