# CLAUDE.md — DuneBroom Website

## Project Overview
DuneBroom is a Next.js website for an autonomous beach-cleaning robot project. Live at [dunebroom.com](https://dunebroom.com).

## Tech Stack
- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 utilities, backed by theme tokens registered in `globals.css`
- **Font:** Inter, self-hosted via `next/font/google` (exposed as `--font-inter`)
- **Theme:** Light/dark mode via the `html.dark` class; `ThemeProvider` only toggles it
- **Form:** Formspree endpoint for contact submissions
- **Lint:** ESLint 9 flat config (`eslint.config.mjs`) with `eslint-config-next`

## Commands
- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — ESLint

## Project Structure
```
app/
├── layout.tsx              # Root layout: metadata, next/font, pre-paint theme script, Navbar + Footer + ThemeProvider
├── globals.css             # CSS variables, @theme tokens, custom component classes
├── page.tsx                # Homepage (hero + overview + recognition) — server component
├── outreach/page.tsx       # Outreach & Impact (grassroots education + environmental literacy)
├── system-logic/page.tsx   # System Logic detail page
├── technical-architecture/page.tsx  # Technical Architecture detail page
├── about_me/page.tsx       # About Me page
├── contact/
│   ├── layout.tsx          # Holds contact metadata (the page is a client component)
│   └── page.tsx            # Contact form (Formspree) + social links
components/
├── Navbar.tsx              # Sticky nav, mobile hamburger drawer
├── Footer.tsx              # Site footer
├── ThemeProvider.tsx       # Toggles html.dark and persists the choice
public/
├── robots.txt, sitemap.xml # Static SEO files — update sitemap when adding a route
```

## Styling Conventions
- Pages are styled with **Tailwind utility classes**. Inline `style` is reserved for the
  few things utilities can't express (e.g. `width/height: auto` on `next/image`).
- CSS variables are defined in `:root` (light) and `html.dark` (dark) in `globals.css`:
  `--background`, `--foreground`, `--muted`, `--subtle`, `--border`, `--surface`,
  `--accent`, `--card-bg`.
- **Those variables are registered with Tailwind in an `@theme inline` block**, which is
  what makes `text-muted`, `bg-surface`, `border-border`, `text-accent` etc. exist.
  Adding a new colour variable means adding a matching `--color-*` entry there, or the
  utility silently generates no CSS.
  `inline` is required — without it Tailwind bakes in the resolved hex at build time and
  the `html.dark` overrides stop working.
- `dark:` variants work because `globals.css` declares
  `@custom-variant dark (&:where(.dark, .dark *))`; Tailwind's default would key off
  `prefers-color-scheme` and ignore the site's own toggle.
- Multi-property component classes (`.hero-section`, `.btn-primary`, `.form-input`,
  `.recognition-title`, `.skip-link`, …) live in `globals.css`.
- **Never redefine a Tailwind utility name** (`.mt-4`, `.text-sm`, `.container`, …) as plain
  CSS there. Unlayered rules beat everything in Tailwind's `@layer utilities`, so the
  override wins everywhere and responsive variants of that name stop working.

## Routes
| Route | Page |
|-------|------|
| `/` | Homepage (DuneBroom robot — hero, overview, recognition) |
| `/outreach` | Outreach & Impact (grassroots education, environmental literacy, news coverage) |
| `/system-logic` | System Logic |
| `/technical-architecture` | Technical Architecture |
| `/about_me` | About Me |
| `/contact` | Contact form + info |

## Important Notes
- Each page sets its own `title`/`description`/`canonical`; the root layout supplies the
  `%s | DuneBroom` template and `metadataBase`. A page-level `openGraph` block **replaces**
  the root one, so it must repeat `images` or the card image is lost.
- Layout widths: nav 1200px, footer 1152px, content column 860px, contact grid 900px.
- Theme: the inline script in `app/layout.tsx` applies `html.dark` before first paint, so
  `<html>` carries `suppressHydrationWarning`. The theme is **not** in React state — the
  toggle icons are swapped in CSS (`.theme-icon-light` / `.theme-icon-dark`).
- `next/image`: declared `width`/`height` must match the file's real aspect ratio, and
  full-width images need an inline `style={{ width: "100%", height: "auto" }}` plus a
  `sizes` attribute.
- The skip link is the first focusable element in `<body>`; every page's `<main>` must keep
  `id="main-content"`.
- Contact form submits to `https://formspree.io/f/xnnvbrzq`
- Nav links are defined in `components/Navbar.tsx` — update the `navLinks` array when adding/removing pages
- Outreach images live in `/public/` — `in-classroom.jpg`, `article-1.jpg` through `article-4.jpg` (Telugu newspaper clippings), `people-holding-up-book.jpg`

## Post-Edit Instructions
Whenever you make major changes to the codebase — adding/removing pages, changing routes, modifying the tech stack, altering styling conventions, or restructuring files — you MUST update this CLAUDE.md to reflect the current state. This includes updating the project structure, routes table, styling conventions, and any other affected sections.
