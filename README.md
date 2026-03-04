# Ezra Stjärna-Shively Portfolio

[![Deploy to GitHub Pages](https://github.com/chromaglow/superlite/actions/workflows/deploy.yml/badge.svg)](https://github.com/chromaglow/superlite/actions/workflows/deploy.yml)

> A minimal, modern portfolio website for process engineering and product design work.

Built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and TypeScript. Based on [Tim Witzdam's Minimal Portfolio Template](https://github.com/TimWitzdam/astro-minimal-portfolio-template).

## Features

- **Single Config Architecture** - All content managed through `src/config.ts`
- **Markdown Blog** - Drop `.md` files in `src/content/posts/` and they auto-appear
- **Project Gallery** - Showcase work with images and descriptions
- **Apple-Inspired Design** - Minimal, clean, lots of white space
- **Lightning Fast** - Static site generation for optimal performance
- **Mobile Responsive** - Looks great on all devices
- **SEO Optimized** - Perfect Lighthouse scores

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Development server runs at `http://localhost:4321`

## Project Structure

```
superlite/
├── src/
│   ├── config.ts        # All site content
│   ├── content/posts/   # Blog posts (Markdown)
│   ├── components/      # UI components
│   ├── layouts/         # Page templates
│   └── pages/           # Routes
├── public/              # Static assets (images)
└── docs/                # Documentation
```

## Configuration

Edit `src/config.ts` to customize:

- **Identity** - Name, email, logo
- **Navigation** - Menu links
- **Social Links** - GitHub, LinkedIn, etc.
- **Home Page** - Role, description, CTAs
- **About Page** - Bio, work experience
- **Projects** - Portfolio items
- **Blog** - Metadata

## Documentation

| Document | Description |
|----------|-------------|
| [INDEX.md](INDEX.md) | Documentation overview |
| [SETUP.md](SETUP.md) | Detailed setup guide |
| [DEVELOPMENT.md](DEVELOPMENT.md) | Change log |
| [CHECKLIST.md](CHECKLIST.md) | Task tracking |
| [QUICKREF.md](QUICKREF.md) | Common commands |
| [TOOL_PLANNING.md](TOOL_PLANNING.md) | Future desktop tool |

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Adding Content

### Blog Post

Create `src/content/posts/my-post.md`:

```markdown
---
title: "My Post"
pubDate: 2026-02-02
description: "Post description"
tags: ["tag1", "tag2"]
---

Content here...
```

### Project

Create `src/content/posts/YYYY-MM-DD-my-project/index.md` with `type: "project"`:

```markdown
---
title: "My Project"
pubDate: 2026-01-01
description: "What it does"
author: "Ezra"
type: "project"
datePosted: '2026-01-01'
image:
  url: ./cover.webp
  alt: "Cover image"
tags: ["project"]
---

Content here...
```

`datePosted` controls ordering on The Lab page — the project with the most recent `datePosted` is pinned to the top. When a newer project is published, it takes the top spot automatically. Posts without `datePosted` fall into `pubDate` order.

Static projects can still be added via `src/config.ts` in the `projects` array.

## Desktop Publishing Tool

Content is authored and published via [superlite-autoblog](https://github.com/chromaglow/superlite-autoblog) — an Electron desktop app with a 6-step wizard, AI content generation (Claude API), Imgur scraping, image optimization, and Git push integration.

## Credits

- Template: [Tim Witzdam](https://github.com/TimWitzdam/astro-minimal-portfolio-template)
- Framework: [Astro](https://astro.build/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)

## License

MIT
