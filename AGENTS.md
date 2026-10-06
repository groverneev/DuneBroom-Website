# AGENTS.md — DuneBroom Website

Next.js site for DuneBroom, an autonomous beach-cleaning robot. Live at [dunebroom.com](https://dunebroom.com).

## Stack
- Next.js 16 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS v4, themed through CSS variables in `app/globals.css`
- Inter, self-hosted via `next/font/google`
- Contact form posts to Formspree (`https://formspree.io/f/xnnvbrzq`)
- ESLint 9 flat config (`eslint.config.mjs`)

## Structure
```
app/
├── layout.tsx         # Site-wide metadata, font, pre-paint theme script, Navbar + Footer
├── globals.css        # Theme variables, Tailwind registration, shared component classes
├── page.tsx           # Homepage; each other route is app/<route>/page.tsx
├── contact/layout.tsx # Contact metadata (the contact page is a client component)
├── sitemap.ts         # Generates /sitemap.xml; list every route here
└── not-found.tsx      # 404 page
components/
├── Navbar.tsx         # Nav links live in the `navLinks` array
├── Footer.tsx
├── socialLinks.tsx    # Social links shared by the footer and contact page
└── ThemeProvider.tsx  # Theme toggle
public/                # Images, robots.txt
```

## Routes
| Route | Page |
|-------|------|
| `/` | Homepage — hero, overview, recognition |
| `/outreach` | Outreach & Impact — school outreach, news coverage |
| `/system-logic` | System Logic |
| `/technical-architecture` | Technical Architecture |
| `/about_me` | About Me |
| `/contact` | Contact form + social links |

## Styling
- Style with Tailwind utilities. Use inline `style` only for what utilities can't express
  (e.g. `width/height: auto` on `next/image`).
- Colours are CSS variables defined in `:root` (light) and `html.dark` (dark), then registered
  with Tailwind in the `@theme inline` block as `--color-*`. That registration is what makes
  `text-muted`, `bg-surface`, `border-border` etc. exist. A new colour needs both entries, or
  its utility silently generates nothing. Keep `inline`, or dark mode stops working.
- `dark:` variants follow the `html.dark` class (via `@custom-variant`), not the OS setting.
- Text must meet WCAG AA (4.5:1) on `background`, `surface` and `card-bg` in both themes.
  Text on an `accent` fill uses `text-on-accent` (white in light mode, near-black in dark),
  never `text-white`.
- Multi-property component classes (`.hero-section`, `.btn-primary`, `.form-input`, …) live in
  `globals.css`. Never define a class there that shares a Tailwind utility's name (`.mt-4`,
  `.container`, …); it would override the utility everywhere and break its variants.

## Theme
The theme is the `dark` class on `<html>` and nothing else — it is not React state. An inline
script in `app/layout.tsx` applies it before first paint — the choice saved in `localStorage`,
or else the OS `prefers-color-scheme` setting (hence
`suppressHydrationWarning` on `<html>`), and `ThemeProvider` toggles and saves it. The toggle
icons are swapped in CSS (`.theme-icon-light` / `.theme-icon-dark`).

## Adding a page
- Give its `<main>` `id="main-content"` — the skip link in the root layout targets it.
- Export `metadata` with `title`, `description` and `alternates.canonical`. The root layout
  supplies the `%s | DuneBroom` title template and `metadataBase`. A page-level `openGraph`
  block replaces the root one entirely, so repeat `images` in it.
- Add the route to `navLinks` in `components/Navbar.tsx` and to `routes` in `app/sitemap.ts`.

## Images
With `next/image`, the declared `width`/`height` must match the file's real aspect ratio.
Full-width images also need `style={{ width: "100%", height: "auto" }}` and a `sizes` attribute.

## Keeping docs current
When you change routes, file structure, the stack or these conventions, update this file, and
`README.md` if the change is visible to readers of the repo.
