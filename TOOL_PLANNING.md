# Superlite Desktop Tool - Planning Document

> Future desktop application for automated portfolio content management

---

## Vision

A standalone desktop application that allows non-technical content updates to the Superlite portfolio without touching code. Features AI-powered SEO optimization and one-click publishing.

---

## Target Users

- Content creators who want simple publishing
- Portfolio owners who update frequently
- Anyone who prefers GUI over code editing

---

## Core Features

### 1. Content Management

**Blog Post Editor**
- Visual markdown editor with live preview
- Drag-and-drop image insertion
- Frontmatter form (title, date, tags, description)
- Auto-save drafts
- Version history

**Project Manager**
- Add/edit/remove projects via form
- Image upload with automatic optimization
- Drag-and-drop ordering
- Category management

**Config Editor**
- Visual form for `src/config.ts` values
- Identity settings (name, email, logo)
- Social links manager
- Navigation customizer

### 2. AI Integration (Claude API)

**SEO Description Generator**
- Analyze content and generate meta descriptions
- Suggest improvements for existing descriptions
- Character count validation (150-160 chars)

**Tag Suggestions**
- Analyze post content
- Suggest relevant tags from existing tags + new ones
- One-click to apply suggestions

**Content Optimization**
- Readability analysis
- Heading structure suggestions
- Image alt-text generation

### 3. Image Processing

**Automatic Optimization**
- Resize to appropriate dimensions
- Compress for web (WebP conversion)
- Generate responsive sizes
- Maintain originals as backup

**Image Management**
- Visual gallery of all images
- Usage tracking (which posts use which images)
- Bulk operations

### 4. Publishing Workflow

**One-Click Deploy**
- Build production site
- Commit changes to git
- Push to GitHub
- Trigger GitHub Pages deployment
- Verify deployment success

**Preview Mode**
- Local preview before publishing
- Mobile/tablet/desktop views
- Performance metrics

**Status Dashboard**
- Last deployment time
- Site health checks
- Pending changes indicator

---

## Technical Architecture

### Framework Options

**Option A: Electron + React**
- Pros: Large ecosystem, familiar stack
- Cons: Large bundle size, memory usage

**Option B: Electron + Svelte**
- Pros: Smaller bundle, fast performance
- Cons: Smaller ecosystem

**Option C: Tauri + React/Svelte**
- Pros: Tiny bundle, native performance, Rust backend
- Cons: Newer, less documentation

**Recommended:** Tauri + Svelte for best performance and minimal footprint

### Data Flow

```
┌─────────────────┐     ┌──────────────┐     ┌─────────────┐
│  Desktop App    │────▶│  Local Files │────▶│   GitHub    │
│  (Tauri/Svelte) │     │  (Markdown)  │     │   Pages     │
└────────┬────────┘     └──────────────┘     └─────────────┘
         │
         ▼
┌─────────────────┐
│   Claude API    │
│  (SEO/Tags)     │
└─────────────────┘
```

### File System Integration

```typescript
interface ContentManager {
  // Blog posts
  listPosts(): Post[];
  createPost(post: Post): void;
  updatePost(id: string, post: Post): void;
  deletePost(id: string): void;

  // Projects
  listProjects(): Project[];
  updateProjects(projects: Project[]): void;

  // Config
  getConfig(): SiteConfig;
  updateConfig(config: SiteConfig): void;

  // Images
  uploadImage(file: File): string; // Returns path
  optimizeImage(path: string): void;
  listImages(): Image[];
}
```

---

## Claude API Integration

### SEO Description Endpoint

```typescript
async function generateSEODescription(content: string): Promise<string> {
  const response = await claude.messages.create({
    model: "claude-3-haiku-20240307",
    max_tokens: 200,
    messages: [{
      role: "user",
      content: `Generate a 150-160 character SEO meta description for this blog post. Be concise and include a call to action:\n\n${content}`
    }]
  });
  return response.content[0].text;
}
```

### Tag Suggestion Endpoint

```typescript
async function suggestTags(content: string, existingTags: string[]): Promise<string[]> {
  const response = await claude.messages.create({
    model: "claude-3-haiku-20240307",
    max_tokens: 100,
    messages: [{
      role: "user",
      content: `Suggest 3-5 relevant tags for this blog post. Prefer from existing tags when applicable.\n\nExisting tags: ${existingTags.join(', ')}\n\nPost content:\n${content}`
    }]
  });
  // Parse response into array
  return parseTags(response.content[0].text);
}
```

---

## UI Design Principles

- **Minimal:** Match the portfolio's Apple-inspired aesthetic
- **Fast:** Instant response, no unnecessary loading
- **Clear:** Obvious actions, no hidden menus
- **Safe:** Confirm destructive actions, easy undo

### Main Views

1. **Dashboard** - Overview, quick actions, deployment status
2. **Posts** - Blog post list and editor
3. **Projects** - Project manager
4. **Settings** - Site configuration
5. **Media** - Image gallery and management

---

## Development Phases

### Phase 2.1: Foundation
- [ ] Set up Tauri + Svelte project
- [ ] File system reading/writing
- [ ] Parse existing config.ts
- [ ] Basic UI shell

### Phase 2.2: Content Management
- [ ] Blog post CRUD
- [ ] Project CRUD
- [ ] Config editor
- [ ] Markdown preview

### Phase 2.3: AI Features
- [ ] Claude API integration
- [ ] SEO description generator
- [ ] Tag suggestions
- [ ] Settings for API key

### Phase 2.4: Publishing
- [ ] Git integration
- [ ] Build automation
- [ ] GitHub push
- [ ] Deployment verification

### Phase 2.5: Polish
- [ ] Image optimization
- [ ] Bulk operations
- [ ] Keyboard shortcuts
- [ ] Auto-updates

---

## Security Considerations

- Store API keys securely (OS keychain)
- Never commit API keys to repository
- Validate all file paths (prevent directory traversal)
- Sanitize markdown output

---

## Success Metrics

- Time to publish new post: < 2 minutes
- Time to update project: < 1 minute
- Zero code editing required for content updates
- SEO description quality matches human-written

---

## Open Questions

1. Should we support multiple portfolios per installation?
2. Cloud backup of drafts?
3. Collaboration features (multiple users)?
4. Plugin system for extensions?

---

*This document will be updated as Phase 2 development progresses.*
