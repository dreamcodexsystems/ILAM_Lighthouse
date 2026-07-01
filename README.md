# ILMA LightHouse — Luxury Lighting Website

A premium, 3D-animated marketing site for the chandelier & lighting brand **ILMA LightHouse**
("Where Light Becomes Art"). Cinematic R3F hero, dark + ghee themes, and a calm, gallery-like feel.

## Stack
- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (theming via CSS variables)
- **React Three Fiber** + **drei** + **@react-three/postprocessing** (procedural chandelier + Bloom)
- **GSAP / ScrollTrigger** (scroll reveals) + **Lenis** (smooth scroll) + **Framer Motion** (micro-interactions)
- **next-themes** (dark = default, light/ghee toggle) · **lucide-react** (icons)

## Run
```bash
npm install      # .npmrc sets legacy-peer-deps for the R3F stack
npm run dev      # http://localhost:3000
npm run build && npm start
```
> Requires Node 18.18+ (Node 20+ recommended).

## Sections
Hero (3D) · Featured Categories · Shop by Space · Signature Collection · Services ·
Why ILMA (stat counters) · Lookbook (lightbox) · Testimonials · Visit/Contact · Footer.

## Theme tokens (`app/globals.css`)
Gold `#c9a24b → #e4c580` · Charcoal `#0e0d0b / #14110d` · Ghee `#f5eedd / #fbf6ea`.
Edit the `:root/.dark` and `.light` blocks to retune.

## Brand assets
`/public/logo/` — `ilma-lockup-{dark,light}.svg` (navbar) and `ilma-badge-{dark,light}.svg`
(footer + favicon, also wired as `app/icon.svg`). The `<Logo/>` component swaps them by theme.

## Swapping in real assets
- **Imagery:** the `<Placeholder/>` component draws branded gradient tiles everywhere a photo
  goes. Drop HD photos into `/public/img/` and replace `<Placeholder/>` with `next/image`.
  (Add any external image host to `next.config.mjs > images.remotePatterns`.)
- **Hero 3D model:** the chandelier in `components/three/Chandelier.tsx` is built procedurally
  (no external asset). To use a real model, add a draco-compressed `.glb` to `/public`, load it
  with `useGLTF` from drei, and render it in place of the procedural group.
- **Hero poster:** `/public/img/hero-poster.png` shows on mobile / reduced-motion. Replace freely.
- **Contact form:** `onSubmit` in `components/sections/Contact.tsx` is stubbed — wire it to a
  Next route handler or an email service.

## Notes
- 3D hero is lazy-loaded (`ssr:false`) and only mounts on ≥768px without reduced-motion;
  otherwise the poster shows — keeps mobile fast.
- All copy/data lives in `lib/data.ts`.

## Animation layer (v2)
- **LightField** — ambient drifting gold light motes across the whole page (`components/LightField.tsx`).
- **SectionDecor** — faint swaying chandeliers behind every section (`components/SectionDecor.tsx` + `MiniChandelier.tsx`).
- **StringLights** — twinkling garlands in Shop-by-Space & Lookbook.
- **3D mid-page** — a second real R3F chandelier in the Signature Collection (desktop; photo fallback on mobile/reduced-motion).
- **ScrollProgress** — gold scroll bar; plus shimmer headings & glow-pulse CTA.
- All ambient motion respects `prefers-reduced-motion` and 3D is desktop-gated for performance.
