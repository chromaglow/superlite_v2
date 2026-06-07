# Changelog

## v2.1.0 — June 2026 · Nav Overhaul + Site-Wide Typeface Consistency

Full integration of the `/work-with-me` consulting page into the main site navigation, plus a complete desktop nav redesign and consistent use of the Format 1452 custom typeface across the site.

---

### Navigation (`Layout.astro`)
- **Removed** profile photo avatar from desktop nav header
- **Removed** social icons from desktop nav header (still in mobile dropdown and About page)
- **Desktop nav** is now a single clean left-aligned row: Home · About · Resume · Work With Me · The Lab · Thinking
- "Home" link has no left padding — text aligns flush with page content below
- **Mobile nav** replaced with hamburger menu (☰/✕ toggle):
  - All 6 nav links stack vertically in dropdown
  - Social icons appear below nav links in dropdown
  - Implemented with vanilla JS, no dependencies
- **Nav link order** changed: Home → About → Resume → Work With Me → The Lab → Thinking

---

### Work With Me Page (`work-with-me.astro`)
- SVG name animation letter spacing applied — matches `Codex/share.html` exactly
- `viewBox` updated to `-21.2 0 636.0 66.462` (expanded to accommodate outward spread)
- All 23 path elements have `transform="translate(dx, 0)"` per formula `(formPos - 296.8) × 0.075`
- CSS width changed to `width: min(557px, 88vw)` — matches codex share page visual size

---

### Home Page (`index.astro`)
- Replaced `<h1>` bold text name with inline SVG in Format 1452 typeface
- Static display, white (`fill="currentColor"`), `max-width: 290px`

---

### About Page (`about.astro`)
- Replaced `<h1>` bold text name with inline SVG in Format 1452 typeface (same as home)

---

### Config (`config.ts`)
- `navBarLinks` reordered: Work With Me moved from last to 4th position (after Resume)

---

### Collab Deploy (`collab-deploy/`)
- `index.html` updated with latest built output from `dist/work-with-me/index.html`

---

## v2.0.0 — February 2026 · Portfolio Launch Overhaul

Complete rebrand and restructure of the portfolio site in preparation for active job search. All pages updated, routes renamed, new resume asset, and interactive phone behaviors added throughout.

---

### Navigation (`Layout.astro`)
- Renamed nav item "Projects" → "The Lab"
- Renamed nav item "Blog" → "Thinking"
- Added "Resume" nav link — opens PDF in new tab
- Added `rounded-full` to header avatar image
- Added `whitespace-nowrap` to nav links to prevent line wrapping
- Added click-to-copy behavior to phone icon in nav bar — desktop copies `+1 (415) 335-9911` to clipboard with "Copied!" tooltip; mobile dials directly

---

### Route Renames
- `/projects` → `/lab` (`src/pages/projects.astro` → `src/pages/lab.astro`)
- `/blog` → `/thinking` (`src/pages/blog/` → `src/pages/thinking/`)
- All internal `href` references updated across all pages and components

---

### Home Page (`index.astro`)
- Updated hero role text and description copy
- Added availability note: currently exploring Director TPM, VP Technical Operations, and Senior PM roles in Seattle
- Removed social icon links from hero section
- Added stat strip: **600K+** Labor Hours Removed · **$17M** Budget Impact · **1M+** Customers Served · **22-Person** Global Team
- Renamed CTA buttons: "The Lab" and "About Me"
- Updated section heading "Latest Posts" → "Recent Projects & Writing"
- Updated "View all" link to point to `/thinking`

---

### About Page (`about.astro`)
- Changed page `h1` from "About Ezra Stjärna-Shively" → "Ezra Stjärna-Shively"
- Full bio rewrite reflecting AI/ML automation background and Director-level TPM experience
- Added **Download Resume** button linking to `/assets/ezra-stjarna-shively-resume.pdf`
- Added **Call or Text Me** button with click-to-copy behavior (desktop copies number; mobile dials)
- Restructured Work section into two-row layout:
  - Row 1: "Work" heading + description paragraph
  - Row 2: Amazon logo (grid left column) + resume entries (grid right column), tops aligned natively
- Added **Technical Skills** section with four skill category lines (AI/ML, Cloud & Systems, Automation & Tools, Physical Prototyping)
- Updated Connect section margin (`mt-32` → `mt-16`)
- Added click-to-copy behavior to "Call or Text Ezra" `SocialLinkBox` in Connect section

---

### Config (`config.ts`)
- Complete rewrite of all exported page content objects
- Updated `navBarLinks`: added Resume, renamed Projects → The Lab, Blog → Thinking
- Updated `socialLinks`: added phone (Google Voice), removed Buy Me a Coffee
- Updated `homePageContent`: new SEO title/description, role, description, CTA links, cleared hero social links
- Updated `aboutPageContent`: new SEO, subtitle, full bio (markdown), work description, all 5 Amazon job titles and dates, connect description
- Updated `projectsPageContent`: new SEO, subtitle, cleared placeholder projects array
- Updated `blogPageContent`: new SEO title and description

---

### The Lab Page (`lab.astro`)
- Renamed from `projects.astro`
- Updated `h1` to "The Lab"
- Removed static placeholder demo project card
- Dynamic posts from content collection surfaced with links to `/thinking/[id]`

---

### Thinking Page (`thinking/index.astro`)
- Renamed from `blog/index.astro`
- Updated `h1` to "Thinking"
- Added styled callout box: "Professional Case Studies — Coming Soon" with program summary context

---

### Assets Added (`public/assets/`)
- `ezra-stjarna-shively-resume.pdf` — formatted, ATS-ready resume (single-column, Arial/Helvetica, print-optimized)
- `amazon-logo.jpg` — Amazon logo displayed beside Work section on About page

---

### Types (`types/config.ts`)
- Made `company.image` optional (`image?: string`) to support entries without logos

---

### Components
- **`ResumeItem.astro`**: simplified to flex layout with `white-space: nowrap` on date to prevent wrapping
- **`ProjectCard.astro`**: replaced Astro `<Image>` with plain `<img loading="lazy">` to resolve `LocalImageUsedWrongly` build error for string-path images from config
