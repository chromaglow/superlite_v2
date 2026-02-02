# Superlite Portfolio - Quick Reference

## Commands

```bash
# Development
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build

# Git
git status           # Check current status
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push             # Push to remote

# Troubleshooting
npm run astro check  # Check for TypeScript errors
rm -rf node_modules && npm install  # Fresh install
```

---

## File Locations

| What | Where |
|------|-------|
| Site content | `src/config.ts` |
| Blog posts | `src/content/posts/*.md` |
| Images | `public/` |
| Components | `src/components/` |
| Pages | `src/pages/` |
| Layout | `src/layouts/Layout.astro` |
| Styles | `src/styles/global.css` |

---

## Adding Content

### New Blog Post

Create `src/content/posts/your-post.md`:

```markdown
---
title: "Your Post Title"
pubDate: 2026-02-02
description: "Brief description for SEO"
tags: ["tag1", "tag2"]
---

Your content here. Supports **markdown**.

## Headings work

- Lists work
- Like this

![Images work](/images/your-image.jpg)
```

### New Project

Edit `src/config.ts`, add to `projects` array:

```typescript
{
  title: "Project Name",
  description: "What this project does",
  image: "/projects/project-image.jpg",
  year: "2026",
  url: "https://project-url.com"
}
```

---

## Common Edits

### Change Site Title/Name
`src/config.ts` → `identity.name`

### Change Email
`src/config.ts` → `identity.email`

### Change Logo
1. Add image to `public/logo.png`
2. `src/config.ts` → `identity.logo = "/logo.png"`

### Add Social Link
`src/config.ts` → `socialLinks` array:
```typescript
{ title: "Twitter", url: "https://twitter.com/you", icon: "mdi:twitter" }
```

### Change Navigation
`src/config.ts` → `navBarLinks` array

---

## Icons

Using [Iconify MDI](https://icon-sets.iconify.design/mdi/) icons.

Common icons:
- `mdi:github`
- `mdi:linkedin`
- `mdi:twitter`
- `mdi:email`
- `mdi:web`
- `mdi:instagram`
- `mdi:youtube`

---

## URLs

| Environment | URL |
|-------------|-----|
| Development | http://localhost:4321 |
| Production | https://yourusername.github.io/superlite |

---

## Keyboard Shortcuts (VS Code)

| Action | Shortcut |
|--------|----------|
| Save | Ctrl+S |
| Terminal | Ctrl+` |
| Command Palette | Ctrl+Shift+P |
| Quick Open | Ctrl+P |
| Find in files | Ctrl+Shift+F |

---

## Troubleshooting

**Dev server won't start:**
```bash
# Check if port is in use
netstat -ano | findstr :4321
# Use different port
npm run dev -- --port 3000
```

**Changes not showing:**
- Hard refresh: Ctrl+Shift+R
- Restart dev server

**Build errors:**
```bash
npm run astro check  # Find TypeScript errors
```

**Dependency issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## Links

- [Astro Docs](https://docs.astro.build)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [MDI Icons](https://icon-sets.iconify.design/mdi/)
- [Markdown Guide](https://www.markdownguide.org)

---

*Keep this file open for quick access during development.*
