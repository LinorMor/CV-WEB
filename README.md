# Linor Mor — CV Website

A luxurious, animated one-page CV built with **Vite + React + Framer Motion**.
Dark navy + champagne-gold aesthetic, scroll-driven career timeline, animated
stat counters, English/Hebrew toggle with full RTL, and downloadable résumé
(EN + HE).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build for production

```bash
npm run build    # outputs static site to /dist
npm run preview  # preview the production build
```

Deploy the `dist/` folder to any static host — **Netlify, Vercel, GitHub Pages,
Cloudflare Pages** all work with zero config (drag-and-drop `dist/`, or connect
the repo and set build command `npm run build`, output dir `dist`).

## Customize

| What | Where |
|------|-------|
| **Profile photo** | Drop your image in `public/` (e.g. `linor.jpg`) and set `photo` in `src/i18n/translations.js` → `profile`. A placeholder (`public/portrait.svg`) is used until then. |
| **All text (EN + HE)** | `src/i18n/translations.js` — every string lives here, per language. |
| **Contact / links** | `profile` object at the bottom of `src/i18n/translations.js`. |
| **Colors / fonts / spacing** | CSS variables at the top of `src/index.css` (`:root`). |
| **Résumé PDFs** | `public/cv-en.pdf` and `public/cv-he.pdf`. |

## Regenerating the Hebrew résumé PDF

The Hebrew PDF was generated with a Python script using `fpdf2` (with RTL text
shaping via `uharfbuzz`). To regenerate after editing content, re-run that
script (see project notes). The English PDF is the LinkedIn export.

## Tech notes

- **Smooth scroll:** Lenis (disabled automatically under `prefers-reduced-motion`).
- **Animations:** Framer Motion (`whileInView`, `useScroll`/`useTransform`),
  all motion respects reduced-motion.
- **i18n:** lightweight context in `src/context/LanguageContext.jsx`; switching
  language updates `<html dir/lang>` and swaps to the Heebo font for Hebrew.
- **No backend** — fully static.
