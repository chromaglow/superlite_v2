# Phase 01: Content + Type System — Context

**Gathered:** 2026-06-06
**Status:** Ready for planning
**Phase goal:** Define all page content in `config.ts`, add the TypeScript type, nail the copy.

---

<domain>
## Phase Boundary

This phase delivers: all written content for the `/work-with-me` consulting page, the `WorkWithMePageContent` TypeScript type, and the `workWithMePageContent` export in `config.ts`. No Astro page file is created here — that's Phase 02.

</domain>

<decisions>
## Implementation Decisions

### Page Structure (section order — LOCKED)
1. **Opening** — philosophy + positioning statement (no credentials, no numbers)
2. **Services** — four areas, each with title + 2–3 line description
3. **Background** — sparse proof paragraph (Amazon/scale, understated)
4. **CTA** — phone number, call or text

### Opening Statement — LOCKED (Ezra's exact words)
```
I work from one principle: good design is as little design as possible.
I've applied it to brand identities, products, and operations systems serving over a million businesses.
The discipline is the same regardless of the medium.
Start with the real problem.
Include everyone it touches.
Define success.
Data drives the solution.
```
**Typography note:** These 7 beats must be broken up visually — NOT a single block of text.
- "I work from one principle:" leads into a line break
- "Good design is as little design as possible." stands alone with space after
- "I've applied it..." sentence with space after
- "The discipline is the same regardless of the medium." stands alone
- The 4 process beats (Start with / Include / Define / Data) each on their own line, with added visual weight/spacing

### Services — ALL FOUR LOCKED

**Service 1: Brand identity and website builds**
> Strategy first: what does it need to say, look like, and accomplish. Everything follows from that — visual system, site design, e-commerce, fulfillment.

**Service 2: Product design and user research**
> Most product problems are definition problems — the wrong thing was built because the right question was never asked. I work at that layer: users, mental models, information architecture, interaction.

**Service 3: Operations transformation**
> I've redesigned systems that had to work for millions of businesses simultaneously. The method is the same at any scale: find the constraint, fix it at the source, measure the delta.

**Service 4: AI products, automation, and machine learning**
> The goal is always specific: reduce touches, improve forecast accuracy, create capacity, eliminate waste. Systems thinking maps where humans belong in each connected system — internal users, external customers, both.

### Background Section — LOCKED (sparse beats format)
```
Twenty years. Brand strategy, product design, and UX research. Amazon FBA and AWS — systems for over a million businesses. 600,000 labor hours removed through AI-enabled automation.
```
Four short sentences. No connective tissue. No labels. Prose only.

**Rationale for format:** "Twenty years + same approach" was rejected because it implied rigidity. The sparse beats format lets the facts stand without framing, avoiding the "hasn't changed in 20 years" read.

### CTA — LOCKED
- Phone number: (415) 335-9911
- Label: "Call or text"
- Desktop behavior: copy-to-clipboard (same pattern as `about.astro` phone link)
- No contact form, no Calendly, no email CTA

### Layout — PENDING FINAL SELECTION
Option C (stacked uppercase labels above sections) selected as the base direction.
Final variation to be chosen from HTML prototype — see `work-with-me-prototype.html`.
User is reviewing opening text typography variations before committing.

### TypeScript Type Structure — Claude's Discretion
Following existing codebase pattern:
- `WorkWithMePageContent` type in `src/types/config.ts`
- Structure: `{ seo: SEOInfo, opening: string, services: ServiceItem[], background: string, cta: { phone: string, label: string } }`
- `ServiceItem`: `{ title: string, description: string }`
- `opening` field: HTML string (rendered via `marked.parse()` or inline — allows the line-break typography to be controlled)
- Pattern mirrors `AboutPageContent` — section objects with string fields

### Aesthetic Rules — LOCKED
- Inter font, #000 background, white text — no exceptions
- `max-w-2xl mx-auto px-6` layout on all sections
- opacity hierarchy: full white for titles, `opacity-60` for body text, `opacity-35` for labels
- No shadows, no gradients, no animations, no testimonial carousels
- Dividers: `border-top: 1px solid rgba(255,255,255,0.08)` — same as prototype
- Service titles: `font-weight: 600` — matches existing `ResumeItem` title style

### What NOT to build (v1)
- Contact form
- Testimonials
- Pricing
- Case studies
- Sub-pages

</decisions>

<canonical_refs>
## Canonical References

Downstream agents MUST read these before planning or implementing.

### Existing patterns to match
- `src/pages/about.astro` — phone copy-to-clipboard pattern (exact JS to reuse), section layout structure
- `src/config.ts` — content export pattern (`aboutPageContent` → `workWithMePageContent`)
- `src/types/config.ts` — type definition pattern (`AboutPageContent` → `WorkWithMePageContent`)
- `src/layouts/Layout.astro` — wrapper component (no changes needed)
- `src/styles/global.css` — minimal (just `@import tailwindcss`)

### Design reference
- `work-with-me-prototype.html` — HTML prototype at project root showing layout options A/B/C with all final copy. Option C is the selected direction. Final typography variation TBD.

</canonical_refs>

<specifics>
## Specific Implementation Notes

- The `opening` field in `WorkWithMePageContent` should store the text as an HTML string with `<br>` tags or `<p>` tags to control line breaks — the typography beats must be preserved when rendered
- OR: store as an array of strings (`opening: string[]`) and render each in a separate element — cleaner and avoids HTML in config
- Recommendation: `opening: string[]` — each sentence/beat is one array item; the `.astro` file maps over them with appropriate spacing classes
- The `ServiceItem[]` approach (typed array) is preferred over flat HTML strings — allows Phase 02 to map over services and apply consistent styles without parsing HTML

</specifics>

<deferred>
## Deferred Ideas

- Case study section (detailed write-ups) — out of scope v1
- Calendly / booking link — may replace phone in future
- Client logos — possible v2 if Ezra wants to name clients publicly
- Separate service sub-pages — one page is right for now
- Navigation label variant ("Consulting" vs "Work With Me" in nav) — noted but not a blocker; "Work With Me" decided

</deferred>

---
*Phase: 01-content-type-system*
*Context gathered: 2026-06-06 via discuss-phase*
