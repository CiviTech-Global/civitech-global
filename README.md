# CiviTech Global Official Website

Official company website for **Rayan Tamaddon Jahan Gostar** (برند: **CiviTech Global**).

## Features

- Multi-language: English, Persian (Farsi), French, German, Spanish
- RTL support for Persian
- Light / dark theme toggle
- Advanced 2D/3D animations and effects:
  - 3D digital globe (WebGL with Canvas fallback)
  - Kinetic typography hero
  - Scroll-triggered reveals and parallax
  - Magnetic buttons, ripple effects, neon cursor trail
  - Glassmorphism UI, ambient gradient orbs, particle fields
  - Page transitions and staggered animations
- All content from `members-workflows-guidelines`:
  - 5 teams with stories
  - 18 roles with responsibilities, skills, tools, roadmaps, resources
  - Volunteer Open Call page
  - Git Workflow guide

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4
- React Router v7
- Framer Motion + GSAP
- React Three Fiber + Three.js
- i18next

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/    # Reusable UI, layout, and effects
  pages/         # Route-level pages
  data/          # Team, role, Open Call, and Git Workflow data
  i18n/          # Translations for 5 languages
  hooks/         # Theme, direction, reduced-motion hooks
  lib/           # Utilities
```

## License

© Rayan Tamaddon Jahan Gostar (CiviTech Global). All rights reserved.
