# AGENTS.md — DuneBroom Website

Static Astro site for DuneBroom, an autonomous beach-cleaning robot. Hosted on Vercel at https://dunebroom.com.

## Stack
- Astro 7, TypeScript 6 (strict), Tailwind CSS 4 through `@tailwindcss/vite`
- Bun for dependency installation and package scripts; commit `bun.lock`
- Node.js 24 for Astro tooling; the deployed site has no server runtime
- Inter Variable, self-hosted through `@fontsource-variable/inter`
- Formspree contact endpoint: `https://formspree.io/f/xnnvbrzq`
- ESLint flat config with Astro and TypeScript rules
- Playwright for browser checks

## Structure
```
src/
  assets/                 Original photos, optimized at build time
  components/             Navbar, Footer, theme button, social links, SiteImage
  content/technical/      Markdown technical writeups
  content.config.ts       Validated Astro content collection
  data/                   Navigation and social link definitions
  layouts/Layout.astro    Shared metadata, font, pre-paint theme script, shell
  pages/                  Static pages; [...slug].astro renders technical articles
  styles/global.css       Theme tokens, Tailwind registration, shared components
public/                   robots.txt, favicon, original social preview image
tests/                    Browser regression checks
astro.config.mjs          Static output, canonical site URL, sitemap, Tailwind
vercel.json               Astro preset, Bun install/build commands, dist output
```

## Routes
- `/`: homepage, overview, recognition
- `/outreach`: school outreach, news coverage, children's book
- `/system-logic`: operational workflow and collection sequence
- `/technical-architecture`: hardware architecture
- `/about_me`: about the creator
- `/contact`: contact form and social links
- `404.astro` supplies the custom error page and is excluded from the sitemap

## Styling and theme
- Use Tailwind utilities; shared multi-property classes belong in `global.css`.
- Never create a shared class with a Tailwind utility's name.
- Theme tokens live in `:root` and `html.dark`, registered with `@theme inline` as `--color-*`. New colors need both a token and registration.
- Text must meet WCAG AA (4.5:1) on background, surface, and card backgrounds in both themes. Text on accent fills uses `text-on-accent`.
- The `dark` class on `<html>` is the only theme state. The inline head script applies the saved preference or OS setting before paint. The theme button toggles and saves it; icons switch through CSS.
- Respect reduced motion. Preserve the original PNG diagrams in public/ and display them responsively through DiagramImage.astro with alternative text and semantic figure captions.

## Pages and content
- Every page must have one `<main id="main-content">` and one `<h1>`.
- Wrap pages in `Layout`, passing title and description. The layout supplies canonical, Open Graph, Twitter, structured data, favicon, and shared navigation.
- Technical articles use Markdown frontmatter (`title`, `description`) validated by the content collection. Their filenames become routes through `[...slug].astro`.
- Add navigable pages to `src/data/navigation.ts`. `@astrojs/sitemap` discovers generated routes automatically; robots.txt points to `/sitemap-index.xml`.
- Keep static content server-rendered at build time. Use small scripts for interactions; add a UI framework only if a feature needs it.
- Contact uses a normal POST form enhanced with fetch. Preserve native validation, the `_gotcha` honeypot, pending state, live status messages, retry behavior, and the no-JavaScript fallback.

## Images
- Put photos in `src/assets` and render through `SiteImage.astro` for build-time WebP and responsive srcsets.
- Dimensions must follow actual source metadata. Full-width photos need `sizes` and responsive width/height styling.
- Keep `/public/DuneBroom_Robot.jpg` available as the absolute social preview URL.

## Validation and deployment
- `bun ci`, `bun run check`, `bun run lint`, `bun run build`, then `bun run test`.
- Browser setup: `bunx playwright install chromium`; optionally set `PLAYWRIGHT_CHANNEL=msedge` to use an installed Edge browser.
- Tests mock Formspree; do not send real messages during checks.
- Vercel uses static `dist` output and the settings in `vercel.json`. No Astro server adapter is required.

## Keeping docs current
Update this file and README.md when changing routes, structure, stack, or conventions.

## Commits
Do not add AI co-author trailers or "Generated with" lines to commits or PR descriptions.
