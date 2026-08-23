# Alizane Labs · Master Scroll & Motion Effects Database

This database is the master reference registry of all **21 ScrollCraft & High-Ticket Motion Effects** developed for Alizane Labs websites, client deliverables, and custom agency retainers ($1,500 – $4,500 tiers).

---

## Registry Index

| ID | Device Name | Family / Category | Primary Mechanism | Best Tier Fit |
|---|---|---|---|---|
| **01** | **Kinetic Typography** | Typography | Pinned stage + Masked line/word split | $1,500 – $4,500 |
| **02** | **Clip-Path Reveal Wipe** | Visual Reveal | `clip-path: inset()` / `circle()` wipe | $2,800 – $4,500 |
| **03** | **Rolling Tabular Numbers** | Telemetry | `tabular-nums` counter bloom on scroll | $1,500 – $4,500 |
| **04** | **Multi-Layer 3D Parallax** | Spatial Depth | Differential `translateY` rates (-1.4, 0, +1.2) | $1,500 – $4,500 |
| **05** | **Magnetic Cursor & Spotlight** | Pointer Physics | Distance-based cursor attraction + radial gradient | $2,800 – $4,500 |
| **06** | **Split-Flap Terminal Scramble**| Typography | Character iteration matrix bound to scroll | $4,500 Flagship |
| **07** | **3D Exploded Layer Assembly** | 3D Perspective | `perspective: 1200px` + `translateZ` compression | $4,500 Flagship |
| **08** | **Velocity-Inertia Typography** | Physics | Real scroll speed (`dY/dt`) skewing letterforms | $4,500 Flagship |
| **09** | **Stacking Sticky Card Deck** | Spatial Layout | Sticky stacked deck with progressive scale-down | $2,800 – $4,500 |
| **10** | **SVG Laser Circuit Trace** | Vector Motion | SVG `strokeDashoffset` laser line drawing on scroll | $2,800 – $4,500 |
| **11** | **Kinetic Text Highlighter Fill** | Typography | Linear letter/word opacity gradient unmasking | $1,500 – $4,500 |
| **12** | **3D Device Mockup Scrub** | 3D Perspective | 3D perspective pitch rotation + inner UI scroll | $4,500 Flagship |
| **13** | **Scroll-Accelerated Marquee** | Motion Rails | Continuous ticker loop accelerated by scroll speed | $1,500 – $2,800 |
| **14** | **Vertical Slat Unfold** | Spatial Reveal | Vertical blinds/slats opening progressively | $2,800 – $4,500 |
| **15** | **Dual-Axis Zoom-to-Screen** | Spatial Scale | Card scaling from `scale(0.65)` to full viewport | $4,500 Flagship |
| **16** | **Canvas Particle Velocity Swarm**| Canvas / Physics | Particle swarm scattering on scroll velocity | $4,500 Flagship |
| **17** | **Interactive Split Curtain** | Visual Comparison| Dual-pane comparison with scroll-drag curtain | $1,500 – $2,800 |
| **18** | **Stepped Waypoint Beacon** | Navigation | Radar ping wave on passing timeline milestones | $2,800 – $4,500 |
| **19** | **Hexadecimal Cipher Decrypt** | Typography | Random hex (`0x3F`) decrypting to English text | $4,500 Flagship |
| **20** | **3D Cylindrical Carousel** | 3D Perspective | Cards mapped on a 3D cylinder rotating with wheel | $4,500 Flagship |
| **21** | **Thermochromic Phosphor Trace** | Canvas / Pointer | Cursor/scroll heatprint trail that cools over time | $4,500 Flagship |

---

## Technical Specifications & Implementation Recipes

### 01. Kinetic Line Split (`pin + kinetic`)
- **How it works:** Outer container is `250vh`. Inner stage is `sticky top-0 h-screen`. Each headline line is wrapped inside an `overflow-hidden` container. `translateY` is mapped from `110%` to `0%` across discrete progress bands (e.g. `p = 0.05..0.35`, `0.35..0.65`, `0.65..0.95`).
- **CSS Formula:** `transform: translateY(calc((1 - p) * 110%)); opacity: calc(p / 0.8);`

### 02. Clip-Path Reveal Wipe (`reveal`)
- **How it works:** Two absolute layers are stacked. The top layer has dynamic `clipPath` applied directly from normalized scroll progress `p`.
- **Formulas:**
  - Horizontal linear: `clipPath: inset(0 0 0 ${(1 - p) * 100}%)`
  - Radial Iris: `clipPath: circle(${p * 85}% at 50% 50%)`

### 03. Rolling Tabular Number Bloom (`count`)
- **How it works:** Tracks scroll progress `p` through an IntersectionObserver or scroll listener. Interpolates from 0 to target value with `Math.round(p * Target)` and applies `font-variant-numeric: tabular-nums` to eliminate layout jitter.

### 04. Multi-Layer 3D Differential Parallax (`parallax`)
- **How it works:** Layers within a relative container are assigned speed multipliers (e.g., Background: `-1.4`, Mid: `0.0`, Foreground: `+1.2`).
- **Formula:** `transform: translate3d(0px, (progress - 0.5) * Rate * 100px, 0px)`

### 05. Magnetic Cursor Pull (`magnet`)
- **How it works:** Calculates distance from mouse pointer to element center `(dx, dy)`. If distance `< Threshold` (e.g. 180px), applies `transform: translate3d(dx * k, dy * k, 0)` with spring damping.

### 06. Split-Flap Terminal Scramble (`split-flap`)
- **How it works:** As `p` travels from 0 to 1, character indices resolve in sequence. Unresolved characters sample from an alphanumeric pool `[A-Z0-9]` based on seed `(p * 40 + i * 7) % pool.length`.

### 07. 3D Exploded Layer Assembly (`3d-explode`)
- **How it works:** Container has `perspective: 1200px`. 4 child layers have `transform: rotateX(20deg) rotateY(-10deg) translateZ((1 - p) * Offset)`. When `p=0`, layers are exploded apart; when `p=1`, layers compress into one solid card.

### 08. Velocity-Responsive Inertial Typography (`velocity-physics`)
- **How it works:** Measures `dY / dt = (scrollY - lastScrollY) / (time - lastTime)`. Multiplies velocity by individual letter mass to calculate `skewY(v * mass)` and `translateY(v * mass)`, decaying by 12% per frame via `requestAnimationFrame`.

### 09. Stacking Sticky Card Deck (`stacking-cards`)
- **How it works:** Multiple cards set to `sticky` with incrementally increasing `top` offsets (e.g. `top-28`, `top-36`, `top-44`). Cards scale down slightly as subsequent cards scroll over them (`scale(0.95)`, `scale(0.90)`).

### 10. SVG Laser Circuit Ring Trace (`svg-laser-circuit`)
- **How it works:** SVG path has `strokeDasharray = PathLength` and `strokeDashoffset = PathLength * (1 - p)`. Scrolling draws the glowing vector stroke along the perimeter.

### 11. Kinetic Text Highlighter Fill (`text-highlight-fill`)
- **How it works:** Paragraph text starts at `text-white/20`. As `p` advances, words or characters interpolate from muted gray to solid glowing emerald/white with a sliding gradient mask.

### 12. 3D Device Mockup Scrub (`device-3d-scrub`)
- **How it works:** An isometric device mockup starts pitched at `rotateX(45deg)` and `scale(0.85)`. As scroll advances to 1, it un-pitches to `rotateX(0deg)` and `scale(1.0)`, while the internal screenshot scrubs vertically.

### 13. Scroll-Accelerated Infinite Marquee (`scroll-marquee`)
- **How it works:** A standard CSS continuous horizontal marquee where scroll velocity (`dY / dt`) dynamically modulates the animation playback rate or translates the X position proportionally.

### 14. Vertical Slat Unfold (`slat-unfold`)
- **How it works:** 4 vertical accordion panels with `transform-origin: top`. As scroll enters, each slat rotates from `rotateX(90deg)` to `rotateX(0deg)` with staggered delays.

### 15. Dual-Axis Zoom-to-Screen Stage (`zoom-to-screen`)
- **How it works:** A centered card scales from `scale(0.65)` with `rounded-3xl` to `scale(1.0)` with `rounded-none` and full viewport width as scroll progresses from 0 to 1.

### 16. Canvas Particle Velocity Swarm (`particle-swarm`)
- **How it works:** 80 floating dots rendered on HTML5 canvas. High scroll velocity imparts outward radial velocity to particles, scattering them across the screen; damping brings them back to equilibrium.

### 17. Interactive Split Curtain Wipe (`dual-curtain`)
- **How it works:** A dual-pane before/after split where the vertical divider bar position is scrubbed by scroll position and can also be dragged manually.

### 18. Stepped Waypoint Beacon (`waypoint-beacon`)
- **How it works:** As scroll crosses discrete waypoint thresholds (25%, 50%, 75%, 100%), a radar pulse wave expands and permanently stamps the checkpoint indicator.

### 19. Hexadecimal Cipher Decryption (`cipher-decrypt`)
- **How it works:** Target strings start as random hex codes (`0x7F 0x9B`). Scroll progress triggers a cascading decryption wave that converts hex bytes into plain English letters.

### 20. 3D Cylindrical Carousel (`3d-cylinder`)
- **How it works:** 6 cards positioned at `rotateX(i * 60deg) translateZ(280px)` inside a `preserve-3d` container. Scroll wheel rotates the parent container's `rotateX(p * 360deg)`.

### 21. Thermochromic Phosphor Heatprint Trail (`phosphor-trace`)
- **How it works:** Pointer movement and scroll ticks paint glowing thermal coordinate stamps onto a fading canvas layer that slowly dissipates over 1.5 seconds.
