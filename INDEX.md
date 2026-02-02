# Superlite Portfolio - Documentation Index

> A minimal, modern portfolio website built with Astro, Tailwind CSS, and TypeScript.

## Quick Links

| Document | Purpose |
|----------|---------|
| [README.md](README.md) | Project overview and getting started |
| [SETUP.md](SETUP.md) | Detailed setup instructions |
| [DEVELOPMENT.md](DEVELOPMENT.md) | Development log and modifications |
| [CHECKLIST.md](CHECKLIST.md) | Task tracking and progress |
| [QUICKREF.md](QUICKREF.md) | Common commands and quick reference |
| [TOOL_PLANNING.md](TOOL_PLANNING.md) | Future desktop tool specifications |

## Project Overview

**Superlite** is a personal portfolio website showcasing work as a process engineer and product designer. Built on Tim Witzdam's Astro Minimal Portfolio Template, it features:

- Single configuration file architecture (`src/config.ts`)
- Markdown-based blog with auto-generated pages
- Project gallery with image support
- Apple-inspired minimal aesthetic
- Fully responsive design
- Lightning-fast static site generation

## Architecture

```
superlite/
├── src/
│   ├── config.ts          # All site content lives here
│   ├── content/
│   │   └── posts/         # Drop .md files here for blog
│   ├── components/        # Reusable UI components
│   ├── layouts/           # Page layout templates
│   └── pages/             # Route definitions
├── public/                # Static assets (images, etc.)
└── docs/                  # Documentation files
```

## Key Concepts

### Content Management
All site content is managed through `src/config.ts`. Edit this single file to update:
- Personal identity (name, email, logo)
- Navigation links
- Social media links
- Home page content
- About page (bio, work experience)
- Projects listing

### Blog Posts
Create new blog posts by adding `.md` files to `src/content/posts/`. Each post needs frontmatter:

```markdown
---
title: "Post Title"
pubDate: 2024-01-15
description: "Brief description"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Projects
Add projects by editing the `projects` array in `src/config.ts`.

## Future Vision

This portfolio is the foundation for a larger automation project:
- Desktop application for content management
- Claude AI integration for SEO and tagging
- One-click publishing workflow
- No-code content updates

See [TOOL_PLANNING.md](TOOL_PLANNING.md) for detailed specifications.

---

*Last updated: 2026-02-02*
