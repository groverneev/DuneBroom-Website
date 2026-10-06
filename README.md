# DuneBroom — Autonomous Beach-Cleaning Robot

Welcome to the codebase for **[dunebroom.com](https://dunebroom.com)** — the digital home for **DuneBroom**, a student-led robotics initiative using autonomous edge-AI to clean beaches.

---

## About DuneBroom

DuneBroom is a youth-driven robotics project dedicated to combating beach pollution through **autonomous robots powered by edge AI**. We design, build, and prototype machines that help protect our beaches and environment while inspiring the next generation of innovators.

---

## About Me

**[Neev Grover](https://neevgrover.com)** is a Sophomore at the Harker School passionate about Computer Science, Chess, and Music. He enjoys building projects, playing competitive chess, and writing about technology on his **[blog](https://techunpacked.substack.com)**.

---

## Tech Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**, themed with CSS variables (light and dark mode)
- **Formspree** for contact form submissions

## Website Structure

```
app/
├── layout.tsx                       # Root layout (metadata, Navbar, Footer, theme)
├── globals.css                      # Theme variables, Tailwind setup, shared classes
├── page.tsx                         # Homepage
├── outreach/page.tsx                # Outreach & Impact
├── system-logic/page.tsx            # System Logic
├── technical-architecture/page.tsx  # Technical Architecture
├── about_me/page.tsx                # About Me
├── contact/                         # Contact form + social links
├── sitemap.ts                       # Generates /sitemap.xml
└── not-found.tsx                    # 404 page
components/
├── Navbar.tsx                       # Sticky navbar + mobile drawer
├── Footer.tsx                       # Site footer
├── socialLinks.tsx                  # Social links (footer + contact page)
└── ThemeProvider.tsx                # Light/dark theme toggle
public/                              # Images, robots.txt
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, project overview, recognition |
| `/outreach` | School outreach, environmental education, and news coverage |
| `/system-logic` | How DuneBroom detects, navigates, and collects debris |
| `/technical-architecture` | Hardware design, sensors, and software stack |
| `/about_me` | About the creator of DuneBroom |
| `/contact` | Contact form and social links |
