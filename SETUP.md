# Superlite Portfolio - Setup Guide

## Prerequisites

Before starting, ensure you have:

- **Node.js** v18.17.1 or higher (v20+ recommended)
- **npm** v9+ (comes with Node.js)
- **Git** for version control
- **VS Code** (recommended editor)

### Verify Installation

```bash
node --version    # Should show v18.17.1 or higher
npm --version     # Should show v9 or higher
git --version     # Should show git version
```

---

## Initial Setup

### 1. Install Dependencies

```bash
cd c:\Users\ezras\OneDrive\Documents\GitHub\superlite
npm install
```

This installs all required packages:
- Astro v5 (static site generator)
- Tailwind CSS v4 (styling)
- TypeScript (type safety)
- And supporting libraries

### 2. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### 3. Verify Setup

Open your browser to `http://localhost:4321`. You should see the portfolio template.

---

## Project Structure

```
superlite/
├── src/
│   ├── config.ts           # Main content configuration
│   ├── content.config.ts   # Content collection schema
│   ├── components/         # Reusable Astro components
│   │   ├── Link.astro
│   │   ├── ProjectCard.astro
│   │   ├── ResumeItem.astro
│   │   ├── SocialLink.astro
│   │   └── SocialLinkBox.astro
│   ├── content/
│   │   └── posts/          # Blog posts (Markdown)
│   ├── layouts/
│   │   └── Layout.astro    # Main page layout
│   ├── pages/
│   │   ├── index.astro     # Home page
│   │   ├── about.astro     # About page
│   │   ├── projects.astro  # Projects page
│   │   └── blog/
│   │       ├── index.astro # Blog listing
│   │       └── [id].astro  # Blog post template
│   ├── styles/
│   │   └── global.css      # Global styles
│   └── types/
│       └── config.ts       # TypeScript type definitions
├── public/                  # Static assets
├── astro.config.mjs        # Astro configuration
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
└── tailwind.config.mjs     # Tailwind config (if present)
```

---

## Configuration

### Site Content (`src/config.ts`)

All content is managed in this single file:

```typescript
// Identity
export const identity: Identity = {
  name: "Your Name",
  logo: "/logo.png",
  email: "your@email.com"
};

// Navigation
export const navBarLinks: NavBarLink[] = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Projects", url: "/projects" },
  { title: "Blog", url: "/blog" }
];

// Social Links
export const socialLinks: SocialLink[] = [
  { title: "GitHub", url: "https://github.com/yourusername", icon: "mdi:github" },
  { title: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "mdi:linkedin" }
];
```

### Adding Images

Place images in the `public/` folder:
- `public/logo.png` - Your logo
- `public/profile.jpg` - Profile picture
- `public/projects/` - Project images

Reference in code as `/logo.png`, `/profile.jpg`, etc.

---

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

---

## GitHub Pages Deployment

### 1. Update Astro Config

Edit `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/superlite',  // If deploying to username.github.io/superlite
  output: 'static',    // Required for GitHub Pages
});
```

### 2. Build for Production

```bash
npm run build
```

### 3. Deploy

Push to GitHub and enable GitHub Pages in repository settings, pointing to the `dist/` folder or using GitHub Actions.

---

## Troubleshooting

### Port Already in Use

```bash
# Find process using port 4321
netstat -ano | findstr :4321

# Or use a different port
npm run dev -- --port 3000
```

### Dependencies Issues

```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Check for type errors
npm run astro check
```

---

## Next Steps

1. Customize `src/config.ts` with your information
2. Replace sample blog posts in `src/content/posts/`
3. Add your projects to the projects array
4. Deploy to GitHub Pages

See [DEVELOPMENT.md](DEVELOPMENT.md) for detailed modification log.

---

*Last updated: 2026-02-02*
