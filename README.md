# Saurabh — Portfolio

Astro + Lenis + GSAP (ScrollTrigger, MotionPath) + plain CSS variables.
One route (`/`); every "page" is a full-screen scroll section.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/ (Vercel / Cloudflare ready)
```

## Structure

```
src/
  pages/index.astro          the only route — stacks the scroll sections
  sections/
    Page1_Hero.astro         hero (built)
    Page2_Work.astro         placeholder — add your content
    Page3_Story.astro        placeholder
    Page4_Process.astro      placeholder
    Page5_Connect.astro      placeholder
  components/
    ui/Navbar.astro          glass pill + hamburger (mobile)
    ui/ThemeToggle.astro     light/dark, persisted to localStorage
    ui/ProfileBadge.astro    hover crossfade, click → Resume/LinkedIn card
    hero/LiquidBall.astro    gooey centerpiece — words in, "reality" out
    hero/StrikeHeadline.astro  designer→coder→architect→builder
    hero/SunMoon.astro       sketchy sun / glowing moon (theme-driven)
  layouts/Base.astro         Lenis + GSAP init, fonts, theme boot
  styles/global.css          theme variables, grid bg, resets
```

## Add a new section

1. Create `src/sections/Page6_X.astro` with `<section class="section" id="x">`.
2. Import + stack it in `src/pages/index.astro`.
3. Add a link in `Navbar.astro` if it should be navigable.

## TODOs before launch

- Replace `src/assets/images/profile-placeholder.svg` with real photos
  (see the README in that folder) and update `ProfileBadge.astro`.
- Set your real LinkedIn URL in `ProfileBadge.astro`.
- Replace `public/resume.pdf` with your actual resume.

## Motion rules baked in

- Heavy GSAP (ball wobble, cursor lean, MotionPath word streams) only
  initializes at `min-width: 1024px` via `gsap.matchMedia` — phones get a
  cheap CSS pulse instead.
- `prefers-reduced-motion: reduce` disables Lenis and all non-essential
  animation.
- All font sizes use `clamp()`; sections use `100dvh`.
