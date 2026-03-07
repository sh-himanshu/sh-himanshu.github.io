A single-page, dark-themed software developer portfolio using a **Windows Phone / Windows 8 Metro tile grid layout** with **Microsoft Fluent 2 design language** — translucent acrylic surfaces, soft depth layers, smooth scroll-linked transitions, and bold typographic hierarchy. Desktop-first, fully responsive.

**DESIGN SYSTEM (REQUIRED):**

- Platform: Web, Desktop-first, responsive down to mobile
- Theme: Dark mode default, zinc base, indigo-violet primary accent
- Style: shadcn/ui `base-nova` with Base UI primitives — no Radix
- Background: Deep Zinc Black `oklch(0.141 0.005 285.823)` — `var(--background)`
- Surface / Card: Dark Zinc `oklch(0.21 0.006 285.885)` — `var(--card)` for tile faces
- Primary Accent: Deep Indigo `oklch(0.398 0.195 277.366)` — `var(--primary)` for active tiles, CTAs, and highlights
- Secondary Surface: Charcoal Zinc `oklch(0.274 0.006 286.033)` — `var(--secondary)` for muted tiles and inactive states
- Text Primary: Near White `oklch(0.985 0 0)` — `var(--foreground)` for headings and body
- Text Secondary: Muted Zinc `oklch(0.705 0.015 286.067)` — `var(--muted-foreground)` for labels and descriptions
- Border: White at 10% opacity `oklch(1 0 0 / 10%)` — `var(--border)` for tile edges and dividers
- Radius: `0.625rem` base — use `--radius-sm` through `--radius-lg` for tile corners
- Font: `var(--font-sans)` (Geist Sans) for body; `var(--font-geist-mono)` for code snippets
- Chart palette for skill/data visualizations: `--chart-1` through `--chart-5` (indigo gradient from light to deep)

**DESIGN LANGUAGE — FLUENT 2 × METRO:**

- **Acrylic / Mica surfaces:** Tiles use `backdrop-filter: blur()` with semi-transparent `var(--card)` backgrounds to create translucent depth layers over the dark background
- **Tile grid system:** CSS Grid with three tile sizes — **Large** (2×2), **Medium** (2×1 or 1×2), **Small** (1×1) — snapping to a consistent unit grid with `gap-3` gutters
- **Subtle depth:** Tiles use soft `box-shadow` and thin `var(--border)` outlines — no heavy drop shadows. Active/hovered tiles elevate slightly with a scale transform and brighter border
- **Fluid transitions:** All hover states, tile reveals, and section scrolls use `ease-out` or `cubic-bezier` transitions (200–400ms). Tiles stagger-animate into view on scroll with `IntersectionObserver`
- **Typography:** Bold, clean, left-aligned Segoe UI / Geist Sans style. Section headings are large and uppercase-tracking. Subtext uses `var(--muted-foreground)`
- **Monochrome + accent pops:** The palette is predominantly zinc/neutral with selective indigo-violet `var(--primary)` highlights on interactive elements, active nav items, and featured tiles

**NAVIGATION:**

- Fixed top navbar, translucent acrylic background with `backdrop-blur`
- Logo/name on the left, section links on the right
- Clicking a nav link smooth-scrolls (`scroll-behavior: smooth`) to the corresponding section — **no page navigation, single-page only**
- Active section highlighted in `var(--primary)` using scroll-spy logic
- On mobile: hamburger menu with slide-in drawer

**Page Structure:**

1. **Hero Section (full viewport):** Large Metro tile layout with name in oversized bold type, role title ("Software Developer") in `var(--muted-foreground)`, animated accent underline. A large tile shows a brief tagline, smaller tiles show quick stats (years of experience, projects count, tech stack icons). Subtle particle or grid-line background animation. Primary CTA button: "View Projects" scrolls to Projects section.

2. **About Section:** Left column with a portrait image inside a rounded tile with subtle border glow. Right column with bio text in clean paragraphs using `var(--foreground)` on `var(--card)` surface. Key facts displayed as small Metro tiles — location, education, interests. Fade-in-on-scroll animation.

3. **Skills Section:** A Metro-style tile mosaic where each skill category is a tile of varying size. Large tiles for primary skills (e.g., React, TypeScript), medium tiles for secondary, small tiles for tools. Each tile shows an icon and label. Optional: skill proficiency shown as a subtle filled bar using `var(--chart-*)` colors. Stagger animation on scroll.

4. **Projects Section:** Grid of project cards as large and medium Metro tiles. Each tile shows: project thumbnail/screenshot as background image with dark overlay, project name in bold, tech tags as small pills using `var(--secondary)`, and a brief description. On hover: tile elevates, overlay lightens, "View project details" link appears. Featured project gets a 2×2 large tile.

5. **Experience Section:** Vertical timeline layout with alternating left/right cards, or a Metro tile stack. Each entry shows: company name, role title in `var(--primary)`, date range in `var(--muted-foreground)`, and bullet-point achievements. Timeline line uses `var(--border)` color. Cards use `var(--card)` surface with acrylic effect.

6. **Contact Section:** Clean form with labeled input fields (Name, Email, Message) using shadcn/ui form components and `var(--input)` styling. Submit button in `var(--primary)`. Alongside the form, a tile grid with social links (GitHub, LinkedIn, Email) as small interactive Metro tiles with icons. Section has a subtle gradient fade to darker background at the page bottom.

**RESPONSIVE BEHAVIOR:**

- Desktop: Full Metro tile grid, 3–4 column layout
- Tablet: 2-column grid, tiles reflow and resize proportionally
- Mobile: Single-column stack, tiles become full-width cards, hamburger nav replaces link bar

**ANIMATION & MICRO-INTERACTIONS:**

- Tiles stagger-reveal on scroll (100ms delay between each, `translateY(20px)` → `translateY(0)` with `opacity` fade)
- Hover: tiles scale 1.02×, border brightens to `var(--primary)` at 30% opacity, subtle shadow deepens
- Nav links have an underline slide-in on hover using `var(--primary)`
- Smooth scroll with offset for fixed navbar height
- Optional: subtle parallax on hero background elements

**TECHNICAL CONSTRAINTS:**

- Use only existing shadcn/ui `base-nova` components and `@base-ui/react` primitives — no Radix UI
- All colors must use the CSS custom properties from `globals.css` (`var(--primary)`, `var(--card)`, etc.) — no hardcoded hex values
- Tailwind CSS v4 utility classes only; leverage the `@theme inline` tokens already defined
- Single `page.tsx` with section components imported from `components/sections/`
- TypeScript, React Server Components where possible, `"use client"` only where interactivity requires it
