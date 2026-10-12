# Vishwa Bhaavni Yoga Centre — Website

Marketing website for **Vishwa Bhaavni Yoga Centre**, a yoga studio in Shanti Nagar, Bengaluru. It was migrated from a single hand-written HTML page into a modular **Next.js (App Router) + React + TypeScript** application. Design, content and behaviour match the original page.

## Features

Sticky glass navbar with scroll-progress bar · mobile menu · dark mode toggle · hero with breathing-ring animation · animated stat counters · scroll-reveal animations · programs, schedule, instructor and benefits sections · auto-playing reviews carousel · gallery with keyboard-accessible lightbox · FAQ accordion · trial-class and newsletter forms · WhatsApp / call / map contact options · SEO metadata, Open Graph, JSON-LD, `robots.txt` and `sitemap.xml`.

## Tech stack

| Purpose | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS 3.4 + a small global stylesheet |
| Linting | ESLint 10 with `eslint-config-next` |
| Package manager | npm |
| Hosting | Netlify (works on any Node host) |

> **Why Tailwind?** The original page was built with Tailwind (via the CDN script and an inline config). Every class is kept as-is, so Tailwind is installed properly instead of rewriting the styling. The theme tokens live in `tailwind.config.ts`. Tailwind is pinned to v3 to match the CDN build the original used.

## Prerequisites

- **Node.js 20.9 or newer** (22 LTS recommended) — <https://nodejs.org>
- npm (installed together with Node.js)

Check with `node -v` and `npm -v`.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. The page reloads as you edit files.

## Production build

```bash
npm run build
npm run start
```

`npm run start` serves the production build at <http://localhost:3000>.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Optimised production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check without emitting files |

## Project structure

```text
vishwa-bhaavni-yoga/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # <html>, fonts, site-wide metadata
│   │   ├── page.tsx            # Home page: composes all sections + JSON-LD
│   │   ├── globals.css         # Tailwind layers, custom classes, keyframes
│   │   ├── icon.svg            # Favicon (the logo mark)
│   │   ├── robots.ts           # /robots.txt
│   │   └── sitemap.ts          # /sitemap.xml
│   ├── components/
│   │   ├── Navbar.tsx, DarkModeToggle.tsx, ScrollProgress.tsx
│   │   ├── HeroSection.tsx, StatsBar.tsx, Counter.tsx
│   │   ├── AboutSection.tsx, WhyChooseSection.tsx, BenefitsSection.tsx, CtaStrip.tsx
│   │   ├── ProgramsSection.tsx, ScheduleSection.tsx, InstructorSection.tsx
│   │   ├── ReviewsSection.tsx, ReviewsCarousel.tsx
│   │   ├── GallerySection.tsx, GalleryGrid.tsx, Lightbox.tsx
│   │   ├── FaqSection.tsx, FaqAccordion.tsx
│   │   ├── ContactSection.tsx, ContactForm.tsx, NewsletterForm.tsx
│   │   ├── Footer.tsx, FloatingActions.tsx
│   │   └── Reveal.tsx, SectionHeader.tsx, Icon.tsx   # shared building blocks
│   ├── data/
│   │   ├── site.ts             # Business details, nav links, stats
│   │   └── content.ts          # Programs, schedule, reviews, gallery, FAQs…
│   └── lib/
│       ├── utilities.ts        # classNames, easing, lightbox image URL
│       ├── hooks.ts            # useScrolledPast
│       └── seo.ts              # JSON-LD builder
├── tailwind.config.ts · postcss.config.mjs · next.config.mjs
├── eslint.config.mjs · tsconfig.json
├── netlify.toml · .env.example · .gitignore
└── package.json · package-lock.json
```

Only components that need browser features (scroll listeners, state, timers) are Client Components (`"use client"`). Everything else is rendered on the server.

## Editing content

Most text lives in two files, so you rarely need to touch components:

- `src/data/site.ts` — phone, e-mail, address, opening hours, nav links, hero stats.
- `src/data/content.ts` — programs & prices, schedule, reviews, gallery images, FAQs, form options.

## Images and fonts

- All photos are **Unsplash URLs**, exactly as in the original page, so there are no local image files to ship. To self-host an image, place it in `public/images/` and change its URL in `src/data/content.ts` (or the section component) to `/images/your-file.jpg`.
- Fonts (Fraunces, Inter, Noto Sans Kannada) load from Google Fonts with the same request as the original (see `src/app/layout.tsx`).
- Please check that you have the right to use the Unsplash photos for your business before publishing.

## Environment variables

None are required. One optional variable exists:

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public site URL used for canonical/Open Graph URLs, sitemap and robots | `https://www.vishwabhaavniyoga.com` |

To use it locally, copy `.env.example` to `.env.local`. Never commit `.env.local` (it is git-ignored).

## Forms (important)

The **"Book your free trial"** form and the **newsletter** form are **front-end only**, as in the original page: submitting shows the confirmation message and clears the fields, but **nothing is sent or stored**. Before going live, connect them to a real service, for example:

- [Netlify Forms](https://docs.netlify.com/forms/setup/), a Next.js Route Handler (`src/app/api/.../route.ts`) that sends e-mail, or a form provider such as Formspree.
- Keep any API keys in server-side environment variables (never `NEXT_PUBLIC_*`).

## Placeholders carried over from the original

These were `#` or generic links in the original and are intentionally unchanged. Replace them when you have real URLs:

- Footer social icons (Instagram, Facebook, YouTube) and "Privacy Policy" / "Terms" → `href="#"` (`src/data/site.ts`, `src/components/Footer.tsx`).
- "Read all reviews on Google" and "Leave a Google Review" → generic `https://www.google.com/maps` (`googleMapsHref` in `src/data/site.ts`).
- JSON-LD `sameAs` uses generic Instagram/Facebook home pages (`src/data/site.ts`).

## Upload to GitHub

1. Create an empty repository on <https://github.com/new> (no README or `.gitignore`).
2. In the project folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

`.gitignore` already excludes `node_modules`, `.next`, and `.env*.local`.

## Deploy to Netlify

1. Push the project to GitHub (above).
2. In Netlify choose **Add new site → Import an existing project → GitHub** and pick the repository.
3. Settings are read from `netlify.toml`: build command `npm run build`, Node 22. Netlify detects Next.js and uses its built-in Next.js runtime automatically — leave the publish directory empty.
4. (Optional) add `NEXT_PUBLIC_SITE_URL` under **Site configuration → Environment variables**, set to your final domain.
5. Click **Deploy**. Every push to `main` redeploys.

This site has no server-only features, so it is also fully static-exportable if you ever prefer that, but it does not require it.

## Notes on fidelity

- Class names, colours, spacing, animations and breakpoints are copied from the original. Tailwind utility classes keep the same cascade priority over the custom CSS as they had in the original.
- Two original classes (`border-forest/8`, `bg-forest/8`) use an opacity step that Tailwind v3 does not define, so they produce no CSS — in the original too. They are kept untouched to preserve the exact look. To get the faint green border/tint they were probably meant to produce, change `/8` to `/[0.08]`.
- Small technical improvements: the mobile "Book Free Trial" button now also closes the menu; `keypress` became `keydown` for the gallery tiles; the page uses a `<main>` landmark, and a `<noscript>` rule keeps content visible without JavaScript.
