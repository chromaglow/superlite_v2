# Superlite v2 Website Runbook (Local Dev)

**Purpose:** This document guides you through setting up, developing, and managing content for the Superlite v2 portfolio website.

**Audience:** Content creators and maintainers.

**Scope:** Local development (Astro) and GitHub Pages deployment.

---

## 0) Quick Facts

- **Project name:** Superlite v2
- **Repo folder:** `superlite_v2`
- **Framework:** Astro v5.16
- **Styling:** TailwindCSS v4
- **Deployment:** GitHub Pages (Static)
- **Node version:** `v20` (Recommended)
- **Docs:** `docs/WEBSITE_RUNBOOK.md`

---

## 1) Repository Map

### Top-level structure
- `./`
  - `package.json` (Scripts)
  - `astro.config.mjs` (Astro + Tailwind config)
  - `src/`
    - `content/` (The Database)
      - `posts/` (Markdown files for Blog/Projects)
      - `config.ts` (Content Schema Definition)
    - `pages/` (Routes)
      - `index.astro` (Home)
      - `projects.astro` (Portfolio Feed)
      - `blog/` (Blog Feed)
    - `components/` (UI Cards, Layouts)
  - `public/` (Static Assets)
    - `posts/` (Gallery Images - CRITICAL STORAGE LOCATION)
    - `profile.jpg`, `logo.webp` (Site assets)
  - `dist/` (Build output)

---

## 2) Prerequisites

- **Node.js:** `v18+` or `v20` (LTS)
- **Git**
- **VS Code** (Recommended)

---

## 3) One-Page Setup

### Clone + Install
```powershell
git clone <REPO_URL>
cd superlite_v2
npm install
```

### Run Dev Server
```powershell
npm run dev
```

### Success Criteria
*   Terminal shows: `Local: http://localhost:4321/superlite_v2/`
*   Adding `.md` file to `src/content/posts` auto-updates the list.

---

## 4) Content Management (The "Tricky" Part)

This layout uses a **Two-Location Strategy** for images to maximize performance and build stability.

### 1. The Post Text (`src/content`)
*   **Location:** `src/content/posts/[YYYY-MM-DD-Title]/`
*   **Contains:** `index.md` and `cover.jpg` (only!).
*   **Purpose:** Fast markdown parsing for the front page.

### 2. The Gallery Images (`public/posts`)
*   **Location:** `public/posts/[YYYY-MM-DD-Title]/`
*   **Contains:** All high-res gallery images.
*   **Purpose:** Served directly to the browser without bogging down the build.

**How to Add Content:**
*   **Preferred Method:** Use the **Superlite Autoblog** desktop app. It handles this split automatically.
*   **Manual Method:** You must manually create both folders and place images in `public` and markdown in `src/content`.

---

## 5) Key Commands

| Command | Action | Notes |
| :--- | :--- | :--- |
| `npm run dev` | **Start Preview** | Live reload at localhost:4321 |
| `npm run build` | **Build Site** | Generates static HTML in `dist/` |
| `npm run preview` | Check Build | Serves `dist/` to verify production look |

---

## 6) Troubleshooting

**Issue: "LocalImageUsedWrongly" or Build Error**
- **Cause:** You have a markdown file referencing an image that doesn't exist, OR you're trying to pass a file path string where Astro expects an Image object.
- **Fix:**
    1.  Clean Cache: `Remove-Item .astro -Recurse -Force`
    2.  Clean Dist: `Remove-Item dist -Recurse -Force`
    3.  Rebuild: `npm run build`

**Issue: Gallery Images 404**
- **Cause:** Images were put in `src/content` instead of `public/posts`.
- **Fix:** Move the gallery folder to `public/posts/`.

---

## 7) Deployment

The site is deployed via **GitHub Actions**.

1.  **Commit & Push:**
    ```powershell
    git add .
    git commit -m "New post: My Cool Project"
    git push
    ```
2.  **Wait:** GitHub Actions will auto-build.
3.  **Verify:** Check `https://chromaglow.github.io/superlite_v2/` in ~2 minutes.

**Config Location:** `.github/workflows/deploy.yml`

---
