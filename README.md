# DuneBroom — Autonomous Beach-Cleaning Robot

The source for [dunebroom.com](https://dunebroom.com), a student-led robotics project combining edge AI and mechanical sieving to clean beaches.

Created by [Neev Grover](https://neevgrover.com). The site covers the robot, its technical design, school outreach reaching 450+ students across five schools in India, and the children's book *Adventures of Sunbeam*.

## Stack

- **Astro 7** with static generation and Markdown content collections
- **TypeScript 6** in strict mode
- **Tailwind CSS 4** with CSS-variable light/dark themes
- **Bun** for packages and scripts; **Node.js 24** for Astro tooling
- Self-hosted **Inter Variable** and build-time responsive WebP images
- **Formspree** for contact submissions
- **Vercel** for static hosting and deployment previews
- **ESLint** and **Playwright** for verification

No application server, database, or client UI framework is needed. Navigation, theme switching, and the contact form use small browser scripts. The original diagram images are preserved as responsive images with descriptive alternative text and captions.

## Local development

Install Node.js 24 and Bun (the packageManager field records the selected Bun version).

```sh
bun ci
bun run dev
```

Open `http://localhost:4321`. No environment variables are required. The contact form posts to Formspree; real submissions send real messages.

```sh
bun run check
bun run lint
bun run build
bunx playwright install chromium
bun run test
```

Playwright starts a production preview automatically. It covers desktop/mobile pages, images, metadata, theme persistence, menu behavior, diagrams, the 404 page, sitemap, and mocked contact submissions. To use installed Edge instead of downloading Chromium, set `PLAYWRIGHT_CHANNEL=msedge` before running tests.

Use `bun run preview` to inspect the built `dist/` directory locally.

## Content and structure

- `src/pages`: homepage, outreach, about, contact, and 404 pages
- `src/content/technical`: Markdown for System Logic and Technical Architecture
- `src/pages/[...slug].astro`: collection-backed technical routes
- `src/components/DiagramImage.astro`: original workflow, hardware architecture, and collection sequence images
- `src/layouts/Layout.astro`: shared shell and search/social metadata
- `src/styles/global.css`: theme tokens and shared styling
- `src/assets`: source photographs optimized during the build
- `src/data`: shared navigation and social links

| Route | Content |
|-------|---------|
| `/` | Homepage, project overview, recognition |
| `/outreach` | School outreach, news coverage, children's book |
| `/system-logic` | Detection, classification, collection, and preservation |
| `/technical-architecture` | Hardware, sensors, processing, and actuators |
| `/about_me` | About Neev Grover |
| `/contact` | Contact form and social links |

Technical Markdown files require `title` and `description` frontmatter. Their filenames determine their URLs. Add new navigation items to `src/data/navigation.ts`; the sitemap is generated automatically at `/sitemap-index.xml`.

## Vercel

`vercel.json` selects the Astro preset, installs with `bun ci`, builds with `bun run build`, and publishes `dist`. Use Node.js 24 in the Vercel project. The generated site is entirely static; no server adapter or Bun Functions runtime is required. Commit `bun.lock` with dependency changes.
