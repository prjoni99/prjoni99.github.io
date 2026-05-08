# OneScribe Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite `index.html` into a premium, conversion-optimized Apple Product Page–style landing page for ad-driven traffic.

**Architecture:** Single standalone HTML file with embedded CSS and minimal vanilla JS. No build tools, no dependencies. Mobile-first responsive design with CSS custom properties. The file builds incrementally — each task adds a section.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid, scroll-snap, backdrop-filter), vanilla JS (IntersectionObserver)

**Spec:** `docs/superpowers/specs/2026-05-08-homepage-redesign-design.md`

**Working directory:** `/Users/jonathan/Desktop/prjoni99.github.io`

**App Store URL:** `https://apps.apple.com/us/app/onescribe-ai-note-scanner/id6756506734`

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `index.html` | Complete rewrite | Entire homepage — head, styles, all 11 sections, scripts |

All other files are untouched.

---

### Task 1: Scaffold — Head, CSS Foundation, Body Shell

**Files:**
- Rewrite: `index.html`

This task creates the full `<head>` (preserving all SEO/analytics), defines all CSS custom properties, base reset, utility classes, component styles, animation keyframes, and responsive breakpoints. The `<body>` contains placeholder comments marking where each section will go.

- [ ] **Step 1: Write the complete index.html scaffold**

Create `index.html` with:

1. **`<head>`** — copy verbatim from current file:
   - Google Analytics gtag (`G-8XQ50EWVB2`)
   - charset, viewport meta
   - `<title>OneScribe — Your Documents Work For You Now</title>`
   - meta description, keywords, robots
   - Open Graph tags (og:title, og:description, og:type, og:url, og:image, og:site_name, og:locale)
   - canonical URL (`https://getonescribe.app`)
   - Apple Smart App Banner (`app-id=6756506734`)
   - apple-mobile-web-app-capable, apple-mobile-web-app-status-bar-style, apple-touch-icon
   - Twitter Card tags
   - favicon SVG link
   - Schema.org JSON-LD (MobileApplication with 3 offers)
   - Plausible analytics script (`analytics.jonvargas.net`)

2. **`<style>`** — all CSS in one embedded block:

```css
/* === RESET === */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; color-scheme: dark; }
body {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.5;
}
a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; height: auto; }
ul { list-style: none; }
::selection { background: rgba(139, 92, 246, 0.2); }

/* === TOKENS === */
:root {
  --bg-primary: #000000;
  --bg-card: rgba(255,255,255,0.03);
  --bg-card-hover: rgba(255,255,255,0.06);
  --border-subtle: rgba(255,255,255,0.06);
  --border-medium: rgba(255,255,255,0.1);
  --text-primary: #FFFFFF;
  --text-secondary: #98989D;
  --text-tertiary: #6E6E73;
  --text-quaternary: #48484A;
  --accent-purple: #A855F7;
  --accent-green: #4ADE80;
  --accent-red: #F87171;
  --accent-blue: #60A5FA;
  --accent-amber: #FBBF24;
  --glass-bg: rgba(0,0,0,0.6);
  --glass-blur: blur(40px) saturate(180%);
  --max-width: 72rem;
  --section-pad: 8rem;
}

/* === UTILITIES === */
.container { max-width: var(--max-width); margin: 0 auto; padding: 0 1.5rem; }
.container--narrow { max-width: 64rem; margin: 0 auto; padding: 0 1.5rem; }
.container--tight { max-width: 48rem; margin: 0 auto; padding: 0 1.5rem; }
.text-gradient {
  background: linear-gradient(135deg, #a855f7, #818cf8, #60a5fa);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.section-label {
  display: inline-block; font-size: 0.75rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem;
}
.section-heading {
  font-size: clamp(2rem, 6vw, 3rem); font-weight: 700; line-height: 1.1; margin-bottom: 1.5rem;
}
```

3. **`<body>`** — shell with section comments:

```html
<body>
  <!-- NAV -->
  <!-- HERO -->
  <main>
    <!-- TRUST STRIP -->
    <!-- SCREENSHOTS -->
    <!-- BEFORE/AFTER -->
    <!-- FEATURE: ALERTS -->
    <!-- FEATURE: PRIVACY -->
    <!-- FEATURE: CHAT -->
    <!-- FEATURE: EXPORTS -->
    <!-- COMPARISON -->
    <!-- PRICING -->
    <!-- FINAL CTA -->
  </main>
  <!-- STICKY BAR -->
  <!-- FOOTER -->
  <!-- SCRIPTS -->
</body>
```

- [ ] **Step 2: Verify the file opens in browser**

Run: `open /Users/jonathan/Desktop/prjoni99.github.io/index.html`
Expected: Black page, no errors in console, correct `<title>` in tab.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: scaffold homepage rewrite with head, CSS foundation, body shell"
```

---

### Task 2: Navigation Bar + Hero Section

**Files:**
- Modify: `index.html` — add nav CSS to `<style>`, add nav + hero HTML replacing the `<!-- NAV -->` and `<!-- HERO -->` comments

- [ ] **Step 1: Add nav and hero CSS to the style block**

Append these styles inside `<style>`:

```css
/* === NAV === */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 50;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);
  border-bottom: 0.5px solid var(--border-subtle);
}
.nav__inner {
  max-width: var(--max-width); margin: 0 auto; padding: 0 1.5rem;
  display: flex; align-items: center; justify-content: space-between; height: 4rem;
}
.nav__logo {
  display: flex; align-items: center; gap: 0.625rem; font-weight: 600; color: var(--text-primary);
}
.nav__logo img { width: 2rem; height: 2rem; border-radius: 0.5rem; }
.nav__logo-gradient {
  background: linear-gradient(135deg, #a855f7, #818cf8, #60a5fa);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.nav__links { display: flex; align-items: center; gap: 1.5rem; }
.nav__link {
  font-size: 0.875rem; color: var(--text-secondary); transition: color 0.2s;
}
.nav__link:hover { color: var(--text-primary); }
.nav__cta {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: #fff;
  font-size: 0.875rem; font-weight: 600; padding: 0.5rem 1.25rem;
  border-radius: 9999px; border: none; cursor: pointer;
  box-shadow: 0 2px 12px rgba(139,92,246,0.3); transition: all 0.2s;
}
.nav__cta:hover { box-shadow: 0 4px 20px rgba(139,92,246,0.5); transform: translateY(-1px); }
.nav__hamburger {
  display: none; background: none; border: none; cursor: pointer; padding: 0.5rem;
  color: var(--text-primary); width: 2.5rem; height: 2.5rem;
}
.nav__hamburger svg { width: 1.5rem; height: 1.5rem; }
.nav__mobile {
  display: none; position: absolute; top: 4rem; left: 0; right: 0;
  background: rgba(0,0,0,0.95); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px);
  border-bottom: 0.5px solid var(--border-subtle); padding: 1rem 1.5rem;
}
.nav__mobile.is-open { display: flex; flex-direction: column; gap: 0.25rem; }
.nav__mobile a {
  display: block; padding: 0.75rem 0; font-size: 1rem; color: var(--text-secondary);
  border-bottom: 0.5px solid var(--border-subtle); transition: color 0.2s;
}
.nav__mobile a:last-child { border-bottom: none; }
.nav__mobile a:hover { color: var(--text-primary); }

@media (max-width: 767px) {
  .nav__link { display: none; }
  .nav__hamburger { display: flex; align-items: center; justify-content: center; }
}

/* === HERO === */
.hero {
  position: relative; min-height: 100vh; display: flex; align-items: center;
  overflow: hidden; padding-top: 5rem;
}
.hero__bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 100% 100% at 50% -20%, rgba(139,92,246,0.12), transparent 50%),
    radial-gradient(ellipse 80% 50% at 0% 50%, rgba(99,102,241,0.08), transparent 50%),
    radial-gradient(ellipse 80% 50% at 100% 50%, rgba(168,85,247,0.08), transparent 50%);
}
.hero__orb {
  position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.3;
  animation: orbFloat 25s ease-in-out infinite;
}
.hero__orb--1 { width: 500px; height: 500px; background: rgba(139,92,246,0.25); top: 5%; left: 5%; }
.hero__orb--2 { width: 350px; height: 350px; background: rgba(99,102,241,0.2); bottom: 15%; right: 5%; animation-delay: -12s; }
.hero__orb--3 { width: 250px; height: 250px; background: rgba(59,130,246,0.15); top: 40%; right: 20%; animation-delay: -6s; }
@keyframes orbFloat {
  0%, 100% { transform: translate(0) scale(1); }
  33% { transform: translate(30px, -20px) scale(1.03); }
  66% { transform: translate(-20px, 15px) scale(0.97); }
}
.hero__inner {
  position: relative; z-index: 10; max-width: var(--max-width); margin: 0 auto; padding: 0 1.5rem;
  display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
}
.hero__badge {
  display: inline-flex; align-items: center; gap: 0.625rem;
  padding: 0.5rem 1rem; border-radius: 9999px;
  background: rgba(255,255,255,0.04); border: 0.5px solid rgba(255,255,255,0.08);
  margin-bottom: 2rem;
}
.hero__badge-dot {
  position: relative; width: 0.5rem; height: 0.5rem;
}
.hero__badge-dot::before {
  content: ''; position: absolute; inset: 0; border-radius: 50%;
  background: #22c55e; animation: ping 1.5s cubic-bezier(0,0,0.2,1) infinite;
}
.hero__badge-dot::after {
  content: ''; position: absolute; inset: 0; border-radius: 50%; background: #16a34a;
}
@keyframes ping { 75%, 100% { transform: scale(2.5); opacity: 0; } }
.hero__badge-text {
  font-size: 0.75rem; font-weight: 500; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--text-secondary);
}
.hero__heading {
  font-size: clamp(2.5rem, 8vw, 5.5rem); font-weight: 700;
  line-height: 1.05; letter-spacing: -0.025em; margin-bottom: 1.5rem;
}
.hero__sub { font-size: 1.25rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 0.75rem; max-width: 32rem; }
.hero__sub-dim { font-size: 1.125rem; color: var(--text-tertiary); margin-bottom: 2.5rem; }
.hero__ctas { display: flex; gap: 1rem; flex-wrap: wrap; }
.hero__cta-primary {
  display: inline-flex; align-items: center; padding: 1rem 2rem; border-radius: 1rem;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: #fff;
  font-weight: 600; font-size: 1.125rem; border: none; cursor: pointer;
  box-shadow: 0 4px 24px rgba(139,92,246,0.35); transition: all 0.2s;
}
.hero__cta-primary:hover { box-shadow: 0 8px 40px rgba(139,92,246,0.5); transform: translateY(-2px); }
.hero__cta-secondary {
  display: inline-flex; align-items: center; padding: 1rem 2rem; border-radius: 1rem;
  border: 1px solid var(--border-medium); color: var(--text-secondary);
  font-weight: 500; font-size: 1.125rem; transition: all 0.2s;
}
.hero__cta-secondary:hover { border-color: rgba(255,255,255,0.2); color: var(--text-primary); }
.hero__device {
  display: flex; justify-content: center;
}
.device-frame {
  position: relative; width: 280px; border-radius: 3rem;
  border: 3px solid rgba(255,255,255,0.1); background: #0a0a0a;
  padding: 0.75rem; overflow: hidden;
  box-shadow: 0 30px 80px rgba(139,92,246,0.15), 0 0 0 1px rgba(255,255,255,0.05);
  animation: deviceFloat 6s ease-in-out infinite;
}
@keyframes deviceFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
.device-frame__notch {
  position: absolute; top: 0.75rem; left: 50%; transform: translateX(-50%);
  width: 5rem; height: 0.35rem; border-radius: 1rem; background: rgba(255,255,255,0.12); z-index: 2;
}
.device-frame__screen { border-radius: 2.25rem; overflow: hidden; }
.device-frame__screen img { width: 100%; display: block; }
.device-frame__home {
  position: absolute; bottom: 0.5rem; left: 50%; transform: translateX(-50%);
  width: 2.5rem; height: 0.25rem; border-radius: 1rem; background: rgba(255,255,255,0.15);
}

@media (max-width: 767px) {
  .hero__inner { grid-template-columns: 1fr; text-align: center; gap: 2.5rem; }
  .hero__sub { max-width: none; }
  .hero__ctas { justify-content: center; }
  .device-frame { width: 220px; }
  .hero { min-height: auto; padding: 8rem 0 4rem; }
}

/* === STAGGER ANIMATION === */
.stagger > * {
  opacity: 0; animation: revealUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.stagger > *:nth-child(1) { animation-delay: 0.1s; }
.stagger > *:nth-child(2) { animation-delay: 0.25s; }
.stagger > *:nth-child(3) { animation-delay: 0.4s; }
.stagger > *:nth-child(4) { animation-delay: 0.55s; }
.stagger > *:nth-child(5) { animation-delay: 0.7s; }
.stagger > *:nth-child(6) { animation-delay: 0.85s; }
@keyframes revealUp {
  from { opacity: 0; transform: translateY(30px); filter: blur(4px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}

/* === SCROLL REVEAL === */
.reveal > * {
  opacity: 0; transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
}
.reveal.is-visible > * { opacity: 1; transform: translateY(0); }
.reveal.is-visible > *:nth-child(2) { transition-delay: 0.08s; }
.reveal.is-visible > *:nth-child(3) { transition-delay: 0.16s; }
.reveal.is-visible > *:nth-child(4) { transition-delay: 0.16s; }
```

- [ ] **Step 2: Add nav HTML**

Replace `<!-- NAV -->` with:

```html
<nav class="nav" role="navigation" aria-label="Main">
  <div class="nav__inner">
    <a href="/" class="nav__logo" aria-label="OneScribe home">
      <img src="/app-icon.png" alt="" width="32" height="32">
      <span>One<span class="nav__logo-gradient">Scribe</span></span>
    </a>
    <div class="nav__links">
      <a href="/features" class="nav__link">Features</a>
      <a href="/pricing" class="nav__link">Pricing</a>
      <a href="/changelog" class="nav__link">What's New</a>
      <a href="/support" class="nav__link">Support</a>
      <a href="https://apps.apple.com/us/app/onescribe-ai-note-scanner/id6756506734" class="nav__cta">Download Free</a>
    </div>
    <button class="nav__hamburger" aria-label="Open menu" aria-expanded="false" id="nav-toggle">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
      </svg>
    </button>
  </div>
  <div class="nav__mobile" id="nav-mobile" role="menu">
    <a href="/features" role="menuitem">Features</a>
    <a href="/pricing" role="menuitem">Pricing</a>
    <a href="/changelog" role="menuitem">What's New</a>
    <a href="/support" role="menuitem">Support</a>
    <a href="https://apps.apple.com/us/app/onescribe-ai-note-scanner/id6756506734" role="menuitem">Download Free →</a>
  </div>
</nav>
```

- [ ] **Step 3: Add hero HTML**

Replace `<!-- HERO -->` with:

```html
<section class="hero" id="hero">
  <div class="hero__bg" aria-hidden="true"></div>
  <div class="hero__orb hero__orb--1" aria-hidden="true"></div>
  <div class="hero__orb hero__orb--2" aria-hidden="true"></div>
  <div class="hero__orb hero__orb--3" aria-hidden="true"></div>
  <div class="hero__inner stagger">
    <div>
      <div class="hero__badge">
        <span class="hero__badge-dot" aria-hidden="true"></span>
        <span class="hero__badge-text">Scan free, forever</span>
      </div>
      <h1 class="hero__heading">Your documents<br><span class="text-gradient">work for you now.</span></h1>
      <p class="hero__sub">Scan anything. Get structured Data Cards, spending insights, deadline alerts — all on-device AI. 83 document types. Zero cloud.</p>
      <p class="hero__sub-dim">100% on-device AI. No Apple Intelligence required.</p>
      <div class="hero__ctas">
        <a href="https://apps.apple.com/us/app/onescribe-ai-note-scanner/id6756506734" class="hero__cta-primary">Download Free</a>
        <a href="#screenshots" class="hero__cta-secondary">See how it works</a>
      </div>
    </div>
    <div class="hero__device">
      <div class="device-frame">
        <div class="device-frame__notch" aria-hidden="true"></div>
        <div class="device-frame__screen">
          <img src="/Screenshots/OneScribe1.png" alt="OneScribe Data Card showing a receipt with extracted vendor, total, items, and warranty info" loading="eager">
        </div>
        <div class="device-frame__home" aria-hidden="true"></div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Verify in browser**

Run: `open /Users/jonathan/Desktop/prjoni99.github.io/index.html`
Expected: Glass nav bar at top with logo, links (hidden on mobile), purple Download button. Full-screen hero with headline left, iPhone device frame with screenshot right. Purple gradient background glow. Staggered fade-up animation on load.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: add nav bar with mobile hamburger and hero section with device frame"
```

---

### Task 3: Trust Strip + Screenshot Showcase

**Files:**
- Modify: `index.html` — append CSS to `<style>`, add HTML replacing `<!-- TRUST STRIP -->` and `<!-- SCREENSHOTS -->` comments

- [ ] **Step 1: Add trust strip and screenshot CSS**

Append to `<style>`:

```css
/* === TRUST STRIP === */
.trust {
  padding: 1.5rem 0; border-top: 0.5px solid var(--border-subtle);
  border-bottom: 0.5px solid var(--border-subtle); background: var(--bg-card);
}
.trust__inner {
  max-width: var(--max-width); margin: 0 auto; padding: 0 1.5rem;
  display: flex; justify-content: center; align-items: center;
  gap: 2.5rem; flex-wrap: wrap;
}
.trust__item { font-size: 0.875rem; font-weight: 600; white-space: nowrap; }

/* === SCREENSHOTS === */
.screenshots { padding: var(--section-pad) 0; overflow: hidden; }
.screenshots__header { text-align: center; margin-bottom: 3rem; }
.screenshots__sub { font-size: 1.25rem; color: var(--text-tertiary); max-width: 36rem; margin: 0 auto; }
.screenshots__carousel {
  display: flex; gap: 2rem; overflow-x: auto; scroll-snap-type: x mandatory;
  padding: 2rem calc(50vw - 140px); -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.screenshots__carousel::-webkit-scrollbar { display: none; }
.screenshots__item {
  flex: 0 0 auto; scroll-snap-align: center; text-align: center;
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
}
.screenshots__item:hover { transform: translateY(-4px) scale(1.01); }
.screenshots__frame {
  width: 260px; border-radius: 2.5rem; border: 2.5px solid rgba(255,255,255,0.08);
  background: #0a0a0a; padding: 0.625rem; overflow: hidden; position: relative;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}
.screenshots__frame-notch {
  position: absolute; top: 0.625rem; left: 50%; transform: translateX(-50%);
  width: 4rem; height: 0.3rem; border-radius: 1rem; background: rgba(255,255,255,0.1); z-index: 2;
}
.screenshots__frame-screen { border-radius: 2rem; overflow: hidden; }
.screenshots__frame-screen img { width: 100%; display: block; }
.screenshots__frame-home {
  position: absolute; bottom: 0.4rem; left: 50%; transform: translateX(-50%);
  width: 2rem; height: 0.2rem; border-radius: 1rem; background: rgba(255,255,255,0.12);
}
.screenshots__caption {
  margin-top: 1rem; font-size: 0.875rem; color: var(--text-tertiary);
}
.screenshots__types {
  text-align: center; margin-top: 3rem; font-size: 0.875rem; color: var(--text-quaternary);
  max-width: 48rem; margin-left: auto; margin-right: auto; padding: 0 1.5rem; line-height: 1.8;
}

@media (max-width: 767px) {
  .trust__inner { gap: 1rem; justify-content: center; }
  .trust__item { font-size: 0.8rem; }
  .screenshots__frame { width: 220px; }
  .screenshots__carousel { gap: 1.5rem; padding: 1.5rem calc(50vw - 110px); }
}
```

- [ ] **Step 2: Add trust strip HTML**

Replace `<!-- TRUST STRIP -->` with:

```html
<section class="trust">
  <div class="trust__inner">
    <span class="trust__item" style="color: var(--accent-purple);">83 Doc Types</span>
    <span class="trust__item" style="color: var(--accent-green);">100% On-Device</span>
    <span class="trust__item" style="color: var(--accent-blue);">$0.99/mo</span>
    <span class="trust__item" style="color: var(--accent-amber);">No Apple Intelligence Required</span>
  </div>
</section>
```

- [ ] **Step 3: Add screenshot showcase HTML**

Replace `<!-- SCREENSHOTS -->` with:

```html
<section class="screenshots reveal" id="screenshots">
  <div class="screenshots__header">
    <span class="section-label" style="color: var(--text-secondary);">Data Cards</span>
    <h2 class="section-heading">See it to <span class="text-gradient">believe it.</span></h2>
    <p class="screenshots__sub">Every scan produces a structured Data Card. Not just text — real, typed, searchable data.</p>
  </div>
  <div class="screenshots__carousel">
    <div class="screenshots__item">
      <div class="screenshots__frame">
        <div class="screenshots__frame-notch" aria-hidden="true"></div>
        <div class="screenshots__frame-screen">
          <img src="/Screenshots/OneScribe1.png" alt="Receipt Data Card — vendor, total, items, warranty extracted" loading="lazy">
        </div>
        <div class="screenshots__frame-home" aria-hidden="true"></div>
      </div>
      <p class="screenshots__caption">Receipt → vendor, total, items, warranty</p>
    </div>
    <div class="screenshots__item">
      <div class="screenshots__frame">
        <div class="screenshots__frame-notch" aria-hidden="true"></div>
        <div class="screenshots__frame-screen">
          <img src="/Screenshots/OneScribe2.png" alt="Contract Data Card — parties, renewal dates, risk flags extracted" loading="lazy">
        </div>
        <div class="screenshots__frame-home" aria-hidden="true"></div>
      </div>
      <p class="screenshots__caption">Contract → clauses, renewal date, risk flags</p>
    </div>
    <div class="screenshots__item">
      <div class="screenshots__frame">
        <div class="screenshots__frame-notch" aria-hidden="true"></div>
        <div class="screenshots__frame-screen">
          <img src="/Screenshots/OneScribe3.png" alt="Event Ticket Data Card — date, venue, calendar sync" loading="lazy">
        </div>
        <div class="screenshots__frame-home" aria-hidden="true"></div>
      </div>
      <p class="screenshots__caption">Ticket → date, venue, calendar sync</p>
    </div>
    <div class="screenshots__item">
      <div class="screenshots__frame">
        <div class="screenshots__frame-notch" aria-hidden="true"></div>
        <div class="screenshots__frame-screen">
          <img src="/Screenshots/OneScribe4.png" alt="Medical Record Data Card — provider, medications, appointments" loading="lazy">
        </div>
        <div class="screenshots__frame-home" aria-hidden="true"></div>
      </div>
      <p class="screenshots__caption">Medical → provider, meds, appointments</p>
    </div>
    <div class="screenshots__item">
      <div class="screenshots__frame">
        <div class="screenshots__frame-notch" aria-hidden="true"></div>
        <div class="screenshots__frame-screen">
          <img src="/Screenshots/OneScribe5.png" alt="Invoice Data Card — amount, due date, vendor, line items" loading="lazy">
        </div>
        <div class="screenshots__frame-home" aria-hidden="true"></div>
      </div>
      <p class="screenshots__caption">Invoice → amount, due date, line items</p>
    </div>
    <div class="screenshots__item">
      <div class="screenshots__frame">
        <div class="screenshots__frame-notch" aria-hidden="true"></div>
        <div class="screenshots__frame-screen">
          <img src="/Screenshots/OneScribe6.png" alt="Business Card Data Card — name, title, phone, email extracted" loading="lazy">
        </div>
        <div class="screenshots__frame-home" aria-hidden="true"></div>
      </div>
      <p class="screenshots__caption">Business Card → name, phone, email</p>
    </div>
  </div>
  <p class="screenshots__types">Receipts · Contracts · Medical · Boarding Passes · Prescriptions · Warranties · Tax Docs · Invoices · Meeting Notes · Insurance · Bank Statements · Pay Stubs · and 71 more</p>
</section>
```

- [ ] **Step 4: Verify in browser**

Expected: Colored trust strip below hero. Horizontal-scrolling screenshot carousel with 6 screenshots in device frames, smooth snap scrolling, captions below each.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: add trust strip and screenshot carousel with device frames"
```

---

### Task 4: Before/After Comparison Section

**Files:**
- Modify: `index.html` — append CSS, add HTML replacing `<!-- BEFORE/AFTER -->`

- [ ] **Step 1: Add before/after CSS**

```css
/* === BEFORE/AFTER === */
.compare {
  padding: var(--section-pad) 0; border-top: 0.5px solid var(--border-subtle);
  background: var(--bg-card);
}
.compare__header { text-align: center; margin-bottom: 3rem; }
.compare__grid {
  max-width: 48rem; margin: 0 auto; padding: 0 1.5rem;
  display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;
}
.compare__card {
  padding: 1.5rem; border-radius: 1rem; border: 0.5px solid var(--border-subtle);
}
.compare__card--old { background: rgba(255,255,255,0.02); }
.compare__card--new {
  background: rgba(139,92,246,0.04); border-color: rgba(139,92,246,0.15);
  box-shadow: 0 0 40px rgba(139,92,246,0.06);
}
.compare__label {
  font-size: 0.7rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.06em; margin-bottom: 1rem;
}
.compare__ocr {
  font-family: 'SF Mono', SFMono-Regular, ui-monospace, Menlo, monospace;
  font-size: 0.8rem; line-height: 1.8; color: var(--text-quaternary);
}
.compare__field { line-height: 2; font-size: 0.875rem; }
.compare__field-label { color: var(--text-tertiary); }
.compare__field-value { color: var(--text-primary); }
.compare__action {
  margin-top: 0.75rem; font-size: 0.8rem; color: var(--accent-purple); font-weight: 500;
}
@media (max-width: 639px) {
  .compare__grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 2: Add before/after HTML**

Replace `<!-- BEFORE/AFTER -->` with:

```html
<section class="compare reveal">
  <div class="compare__header container">
    <span class="section-label" style="color: var(--text-secondary);">Not just another scanner</span>
    <h2 class="section-heading">Other scanners <span style="color: var(--text-tertiary);">flatten.</span><br>OneScribe <span class="text-gradient">understands.</span></h2>
  </div>
  <div class="compare__grid">
    <div class="compare__card compare__card--old">
      <div class="compare__label" style="color: var(--accent-red);">✗ Other Scanners</div>
      <div class="compare__ocr">
        BEST BUY<br>Store #1234<br>04/15/2025<br>SAMSUNG TV 65"<br>$847.99<br>HDMI CABLE<br>$24.99<br>SUBTOTAL $872.98<br>TAX $69.84<br>TOTAL $942.82<br>VISA ****4821<br>THANK YOU
      </div>
    </div>
    <div class="compare__card compare__card--new">
      <div class="compare__label" style="color: var(--accent-purple);">✓ OneScribe Data Card</div>
      <div class="compare__field">
        <span class="compare__field-label">Vendor: </span><span class="compare__field-value">Best Buy #1234</span><br>
        <span class="compare__field-label">Total: </span><span class="compare__field-value" style="color: var(--accent-green); font-weight: 600;">$942.82</span><br>
        <span class="compare__field-label">Category: </span><span class="compare__field-value">Electronics</span><br>
        <span class="compare__field-label">Items: </span><span class="compare__field-value">Samsung TV 65", HDMI Cable</span><br>
        <span class="compare__field-label">Warranty: </span><span class="compare__field-value" style="color: var(--accent-amber);">Expires Apr 2026</span><br>
        <span class="compare__field-label">Payment: </span><span class="compare__field-value">Visa ····4821</span>
      </div>
      <div class="compare__action">→ Export to Spreadsheet</div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verify in browser**

Expected: Two cards side by side — left shows ugly raw OCR text, right shows clean structured data with colored values. Stacks on mobile.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add before/after comparison section"
```

---

### Task 5: Feature Moments (Alerts, Privacy, Chat, Exports)

**Files:**
- Modify: `index.html` — append CSS, add HTML replacing 4 feature comment placeholders

- [ ] **Step 1: Add feature moment CSS**

```css
/* === FEATURE MOMENTS === */
.feature {
  padding: var(--section-pad) 0; border-top: 0.5px solid var(--border-subtle);
}
.feature:nth-child(even) { background: rgba(255,255,255,0.015); }
.feature__inner {
  max-width: var(--max-width); margin: 0 auto; padding: 0 1.5rem;
  display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
}
.feature__inner--reverse { direction: rtl; }
.feature__inner--reverse > * { direction: ltr; }
.feature__content { max-width: 28rem; }
.feature__heading {
  font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700; line-height: 1.15; margin-bottom: 1rem;
}
.feature__body { font-size: 1rem; color: var(--text-tertiary); line-height: 1.7; }
.feature__visual {
  display: flex; justify-content: center; align-items: center;
}

/* Notification mockup */
.notif-mock {
  width: 100%; max-width: 22rem; padding: 1.25rem; border-radius: 1.5rem;
  background: rgba(28,28,30,0.9); backdrop-filter: blur(20px);
  border: 0.5px solid rgba(255,255,255,0.08);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}
.notif-mock__header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; }
.notif-mock__icon { width: 2.5rem; height: 2.5rem; border-radius: 0.75rem; }
.notif-mock__title { font-size: 0.875rem; font-weight: 600; }
.notif-mock__time { font-size: 0.75rem; color: var(--text-tertiary); }
.notif-mock__body { font-size: 0.875rem; color: rgba(255,255,255,0.85); line-height: 1.5; }

/* Shield */
.shield {
  width: 160px; height: 190px; position: relative; display: flex;
  align-items: center; justify-content: center;
}
.shield__icon {
  width: 120px; height: 140px; position: relative;
}
.shield__icon svg { width: 100%; height: 100%; }
.shield__labels { position: absolute; inset: -2rem; }
.shield__label {
  position: absolute; font-size: 0.7rem; font-weight: 600; color: var(--accent-green);
  padding: 0.25rem 0.625rem; border-radius: 9999px;
  background: rgba(34,197,94,0.1); border: 0.5px solid rgba(34,197,94,0.2);
  white-space: nowrap;
}
.shield__label:nth-child(1) { top: 0; right: -2rem; }
.shield__label:nth-child(2) { bottom: 1.5rem; left: -2.5rem; }
.shield__label:nth-child(3) { top: 2.5rem; left: -2rem; }

/* Chat mockup */
.chat-mock { width: 100%; max-width: 22rem; }
.chat-bubble {
  padding: 0.875rem 1rem; border-radius: 1rem; margin-bottom: 0.75rem;
  font-size: 0.875rem; line-height: 1.5; max-width: 85%;
}
.chat-bubble--user {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: #fff;
  margin-left: auto; border-bottom-right-radius: 0.25rem;
}
.chat-bubble--ai {
  background: rgba(255,255,255,0.06); color: var(--text-secondary);
  border-bottom-left-radius: 0.25rem;
}
.chat-mock__label {
  font-size: 0.7rem; color: var(--text-quaternary); text-align: center; margin-top: 0.5rem;
}

/* Export flow */
.export-flow { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; justify-content: center; }
.export-flow__source {
  width: 4rem; height: 5rem; border-radius: 0.75rem; background: var(--bg-card);
  border: 0.5px solid var(--border-subtle); display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 0.25rem;
}
.export-flow__source-icon { font-size: 1.5rem; }
.export-flow__source-text { font-size: 0.6rem; color: var(--text-quaternary); }
.export-flow__arrow { color: var(--accent-amber); font-size: 1.25rem; }
.export-flow__targets { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }
.export-flow__target {
  padding: 0.625rem; border-radius: 0.75rem; background: var(--bg-card);
  border: 0.5px solid var(--border-subtle); text-align: center; font-size: 0.7rem;
  color: var(--text-secondary);
}
.export-flow__target-icon { font-size: 1.25rem; margin-bottom: 0.25rem; }

@media (max-width: 767px) {
  .feature__inner, .feature__inner--reverse { grid-template-columns: 1fr; direction: ltr; text-align: center; gap: 2rem; }
  .feature__content { max-width: none; }
  .feature__visual { order: -1; }
  .notif-mock, .chat-mock { margin: 0 auto; }
  .shield { margin: 0 auto; }
  .export-flow { margin: 0 auto; }
}
```

- [ ] **Step 2: Add all 4 feature sections HTML**

Replace `<!-- FEATURE: ALERTS -->` with:

```html
<section class="feature reveal">
  <div class="feature__inner">
    <div class="feature__content">
      <span class="section-label" style="color: var(--accent-red);">Proactive Alerts</span>
      <h2 class="feature__heading">Never miss a<br><span style="color: var(--accent-red);">deadline again.</span></h2>
      <p class="feature__body">Contract expiring? Insurance renewal? Lease deadline? OneScribe watches your documents and alerts you before it's too late.</p>
    </div>
    <div class="feature__visual">
      <div class="notif-mock">
        <div class="notif-mock__header">
          <img src="/app-icon.png" alt="" class="notif-mock__icon" width="40" height="40">
          <div>
            <div class="notif-mock__title">OneScribe</div>
            <div class="notif-mock__time">Proactive Alert · Now</div>
          </div>
        </div>
        <div class="notif-mock__body">Your car insurance expires in 12 days. Tap to view the policy and set a renewal reminder.</div>
      </div>
    </div>
  </div>
</section>
```

Replace `<!-- FEATURE: PRIVACY -->` with:

```html
<section class="feature reveal">
  <div class="feature__inner feature__inner--reverse">
    <div class="feature__content">
      <span class="section-label" style="color: var(--accent-green);">Privacy</span>
      <h2 class="feature__heading">Your documents<br><span style="color: var(--accent-green);">never leave.</span></h2>
      <p class="feature__body">100% on-device AI. No cloud uploads. No data collection. No Apple Intelligence required. Your tax returns, medical records, and contracts stay on YOUR device.</p>
    </div>
    <div class="feature__visual">
      <div class="shield">
        <div class="shield__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="color: var(--accent-green);">
            <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="shield__labels">
          <span class="shield__label">No Cloud</span>
          <span class="shield__label">No Tracking</span>
          <span class="shield__label">On-Device</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

Replace `<!-- FEATURE: CHAT -->` with:

```html
<section class="feature reveal">
  <div class="feature__inner">
    <div class="feature__content">
      <span class="section-label" style="color: var(--accent-blue);">Document Chat</span>
      <h2 class="feature__heading">Ask your documents<br><span style="color: var(--accent-blue);">anything.</span></h2>
      <p class="feature__body">"What are the cancellation terms?" "Is my deductible covered?" Ask questions about any document and get instant answers. Full document chat with 5 AI personas.</p>
    </div>
    <div class="feature__visual">
      <div class="chat-mock">
        <div class="chat-bubble chat-bubble--user">What are the cancellation terms on this lease?</div>
        <div class="chat-bubble chat-bubble--ai">The lease requires 60 days written notice before the end of your term. Early termination incurs a fee of 2 months' rent. Your next renewal window opens March 1, 2026.</div>
        <p class="chat-mock__label">5 AI personas · Works on any document</p>
      </div>
    </div>
  </div>
</section>
```

Replace `<!-- FEATURE: EXPORTS -->` with:

```html
<section class="feature reveal">
  <div class="feature__inner feature__inner--reverse">
    <div class="feature__content">
      <span class="section-label" style="color: var(--accent-amber);">Smart Exports</span>
      <h2 class="feature__heading">Contracts → Calendar.<br><span style="color: var(--accent-amber);">Cards → Contacts.</span></h2>
      <p class="feature__body">8 smart export modes via the iOS Share Sheet. Receipts become spreadsheets. Meeting notes become reminders. Business cards become contacts in one tap.</p>
    </div>
    <div class="feature__visual">
      <div class="export-flow">
        <div class="export-flow__source">
          <div class="export-flow__source-icon">📄</div>
          <div class="export-flow__source-text">Document</div>
        </div>
        <div class="export-flow__arrow">→</div>
        <div class="export-flow__targets">
          <div class="export-flow__target"><div class="export-flow__target-icon">📅</div>Calendar</div>
          <div class="export-flow__target"><div class="export-flow__target-icon">👤</div>Contacts</div>
          <div class="export-flow__target"><div class="export-flow__target-icon">📊</div>Spreadsheet</div>
          <div class="export-flow__target"><div class="export-flow__target-icon">⏰</div>Reminders</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verify in browser**

Expected: Four alternating feature sections. Alerts shows notification mockup. Privacy shows shield with floating labels. Chat shows bubble conversation. Exports shows flow diagram. All stack on mobile.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add 4 feature moment sections with visual mockups"
```

---

### Task 6: Comparison Table + Pricing

**Files:**
- Modify: `index.html` — append CSS, add HTML replacing `<!-- COMPARISON -->` and `<!-- PRICING -->`

- [ ] **Step 1: Add comparison and pricing CSS**

```css
/* === COMPARISON TABLE === */
.vs { padding: var(--section-pad) 0; border-top: 0.5px solid var(--border-subtle); }
.vs__header { text-align: center; margin-bottom: 3rem; }
.vs__table {
  max-width: 40rem; margin: 0 auto; width: 100%; border-collapse: collapse;
}
.vs__table th {
  padding: 0.875rem 1rem; font-size: 0.7rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--text-tertiary); border-bottom: 0.5px solid var(--border-subtle);
}
.vs__table th:first-child { text-align: left; }
.vs__table th:not(:first-child) { text-align: center; }
.vs__table th.vs__col-us { color: var(--accent-purple); }
.vs__table td {
  padding: 0.875rem 1rem; font-size: 0.9rem; color: var(--text-secondary);
  border-bottom: 0.5px solid rgba(255,255,255,0.03);
}
.vs__table td:first-child { color: var(--text-secondary); }
.vs__table td:not(:first-child) { text-align: center; }
.vs__table tr:last-child td { border-bottom: none; }
.vs__check { color: var(--accent-green); font-weight: 600; }
.vs__x { color: var(--text-quaternary); }
.vs__highlight { color: var(--accent-amber); font-weight: 600; }

/* === PRICING === */
.pricing {
  padding: var(--section-pad) 0; border-top: 0.5px solid var(--border-subtle);
  overflow: hidden; position: relative;
}
.pricing__glow {
  position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
  width: 1000px; height: 500px;
  background: radial-gradient(ellipse, rgba(139,92,246,0.06), transparent 70%);
  pointer-events: none;
}
.pricing__header { text-align: center; margin-bottom: 1.5rem; position: relative; z-index: 1; }
.pricing__free-pill {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.5rem 1rem; border-radius: 9999px;
  background: rgba(34,197,94,0.06); border: 0.5px solid rgba(34,197,94,0.15);
  font-size: 0.875rem; font-weight: 500; color: rgba(74,222,128,0.9);
  margin-bottom: 3rem;
}
.pricing__cards {
  max-width: 40rem; margin: 0 auto; padding: 0 1.5rem;
  display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;
  position: relative; z-index: 1;
}
.pricing__card {
  position: relative; padding: 2rem; border-radius: 1.25rem;
  background: var(--bg-card); border: 0.5px solid rgba(255,255,255,0.08);
}
.pricing__card--featured {
  background: rgba(139,92,246,0.04); border-color: rgba(139,92,246,0.2);
  box-shadow: 0 0 60px rgba(139,92,246,0.08);
}
.pricing__badge {
  position: absolute; top: -0.75rem; left: 50%; transform: translateX(-50%);
  padding: 0.25rem 1rem; border-radius: 9999px; background: var(--accent-purple);
  color: #fff; font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.04em;
}
.pricing__tier {
  font-size: 0.75rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.06em; color: var(--text-secondary); margin-bottom: 1.5rem;
}
.pricing__card--featured .pricing__tier { color: #c4b5fd; }
.pricing__price { font-size: 3rem; font-weight: 700; color: var(--text-primary); }
.pricing__period { font-size: 0.875rem; color: var(--text-tertiary); }
.pricing__tagline { font-size: 0.875rem; font-weight: 500; margin: 0.5rem 0 1.5rem; }
.pricing__list { margin-bottom: 1.5rem; }
.pricing__list li {
  display: flex; align-items: center; gap: 0.75rem; padding: 0.375rem 0;
  font-size: 0.9rem; color: var(--text-secondary);
}
.pricing__list li::before {
  content: '✓'; color: var(--accent-green); font-weight: 600; font-size: 0.8rem; flex-shrink: 0;
}
.pricing__btn {
  display: block; width: 100%; text-align: center; padding: 0.75rem;
  border-radius: 0.75rem; font-weight: 600; font-size: 0.9rem; transition: all 0.2s;
  border: none; cursor: pointer;
}
.pricing__btn--outline {
  background: transparent; border: 1px solid var(--border-medium); color: var(--text-primary);
}
.pricing__btn--outline:hover { background: var(--bg-card-hover); }
.pricing__btn--solid {
  background: var(--accent-purple); color: #fff;
}
.pricing__btn--solid:hover { background: #9333ea; }
.pricing__footer {
  text-align: center; margin-top: 2rem; font-size: 0.875rem; color: var(--text-tertiary);
  position: relative; z-index: 1; padding: 0 1.5rem;
}
.pricing__footer strong { color: var(--text-secondary); }

@media (max-width: 639px) {
  .pricing__cards { grid-template-columns: 1fr; max-width: 22rem; }
}
```

- [ ] **Step 2: Add comparison table HTML**

Replace `<!-- COMPARISON -->` with:

```html
<section class="vs reveal">
  <div class="vs__header container">
    <h2 class="section-heading">OneScribe vs <span style="color: var(--text-tertiary);">the rest.</span></h2>
  </div>
  <div class="container--tight">
    <table class="vs__table">
      <thead>
        <tr>
          <th></th>
          <th class="vs__col-us">OneScribe</th>
          <th>Others</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Document types</td><td class="vs__check">83</td><td class="vs__x">1–5</td></tr>
        <tr><td>Structured data extraction</td><td class="vs__check">✓</td><td class="vs__x">✗</td></tr>
        <tr><td>On-device AI</td><td class="vs__check">✓</td><td class="vs__x">Cloud</td></tr>
        <tr><td>Proactive alerts</td><td class="vs__check">✓</td><td class="vs__x">✗</td></tr>
        <tr><td>Document chat</td><td class="vs__check">✓</td><td class="vs__x">✗</td></tr>
        <tr><td>Smart exports</td><td class="vs__check">✓</td><td class="vs__x">Basic PDF</td></tr>
        <tr><td>Price</td><td class="vs__highlight">$9.99 forever</td><td class="vs__x">$4–10/mo</td></tr>
      </tbody>
    </table>
  </div>
</section>
```

- [ ] **Step 3: Add pricing section HTML**

Replace `<!-- PRICING -->` with:

```html
<section class="pricing reveal" id="pricing">
  <div class="pricing__glow" aria-hidden="true"></div>
  <div class="pricing__header container">
    <span class="section-label" style="color: var(--text-secondary);">Pricing</span>
    <h2 class="section-heading">Less than a coffee. <span style="color: var(--accent-amber);">Forever.</span></h2>
  </div>
  <div style="text-align: center;">
    <div class="pricing__free-pill">
      <svg style="width:1rem;height:1rem;color:var(--accent-green);" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 12.75l6 6 9-13.5"/></svg>
      Unlimited scans — always free, no credit card
    </div>
  </div>
  <div class="pricing__cards">
    <div class="pricing__card">
      <div class="pricing__tier">Monthly</div>
      <div><span class="pricing__price">$0.99</span><span class="pricing__period">/month</span></div>
      <p class="pricing__tagline" style="color: var(--accent-green);">Less than a cup of coffee</p>
      <ul class="pricing__list">
        <li>Full Data Cards</li>
        <li>Document Chat</li>
        <li>Smart Alerts</li>
        <li>Daily Briefings</li>
        <li>Smart Exports</li>
        <li>Natural Language Search</li>
        <li>Cancel anytime</li>
      </ul>
      <a href="https://apps.apple.com/us/app/onescribe-ai-note-scanner/id6756506734" class="pricing__btn pricing__btn--outline">Download Free</a>
    </div>
    <div class="pricing__card pricing__card--featured">
      <div class="pricing__badge">Best Value</div>
      <div class="pricing__tier">Lifetime</div>
      <div><span class="pricing__price">$9.99</span></div>
      <p class="pricing__tagline" style="color: var(--accent-amber);">One-time purchase. Yours forever.</p>
      <ul class="pricing__list">
        <li>Everything in Pro</li>
        <li>All future updates</li>
        <li>No subscriptions. Ever.</li>
        <li>Pay once, own it</li>
      </ul>
      <a href="https://apps.apple.com/us/app/onescribe-ai-note-scanner/id6756506734" class="pricing__btn pricing__btn--solid">Buy Once</a>
    </div>
  </div>
  <div class="pricing__footer">
    <strong>Always free:</strong> Unlimited scans · PDF export · Data Card preview · Document reading
  </div>
</section>
```

- [ ] **Step 4: Verify in browser**

Expected: Clean comparison table with green checks for OneScribe, dim X marks for others. Price row highlighted amber. Two pricing cards below — Monthly outline, Lifetime with purple glow and "Best Value" badge.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: add comparison table and pricing section"
```

---

### Task 7: Final CTA + Sticky Bottom Bar + Footer

**Files:**
- Modify: `index.html` — append CSS, add HTML replacing `<!-- FINAL CTA -->`, `<!-- STICKY BAR -->`, `<!-- FOOTER -->`

- [ ] **Step 1: Add final CTA, sticky bar, and footer CSS**

```css
/* === FINAL CTA === */
.final-cta {
  position: relative; padding: 10rem 0; overflow: hidden; text-align: center;
}
.final-cta__glow {
  position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
  width: 1000px; height: 500px;
  background: radial-gradient(ellipse, rgba(139,92,246,0.1), transparent 60%);
  pointer-events: none;
}
.final-cta__icon {
  width: 7.5rem; height: 7.5rem; border-radius: 28%; margin: 0 auto 2.5rem;
  box-shadow: 0 20px 60px rgba(139,92,246,0.3);
}
.final-cta__heading {
  font-size: clamp(2.5rem, 7vw, 4.5rem); font-weight: 700; line-height: 1.1;
  margin-bottom: 1.5rem;
}
.final-cta__sub {
  font-size: 1.25rem; color: var(--text-secondary); max-width: 36rem;
  margin: 0 auto 2.5rem; line-height: 1.6;
}
.final-cta__badge { height: 3.5rem; margin: 0 auto; transition: opacity 0.2s; }
.final-cta__badge:hover { opacity: 0.8; }
.final-cta__note {
  margin-top: 1.5rem; font-size: 0.875rem; color: var(--text-quaternary);
}
.final-cta__particle {
  position: absolute; width: 3px; height: 3px; background: rgba(168,85,247,0.4);
  border-radius: 50%; animation: particleDrift 18s ease-in-out infinite;
}
.final-cta__particle:nth-child(2) { left: 15%; top: 25%; }
.final-cta__particle:nth-child(3) { left: 75%; top: 35%; animation-delay: -6s; }
.final-cta__particle:nth-child(4) { left: 45%; top: 65%; animation-delay: -12s; }
@keyframes particleDrift {
  0%, 100% { transform: translate(0) scale(1); opacity: 0; }
  10% { opacity: 0.8; } 90% { opacity: 0.8; }
  100% { transform: translate(80px, -150px) scale(0); opacity: 0; }
}

/* === STICKY BAR === */
.sticky-bar {
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 40;
  background: rgba(0,0,0,0.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-top: 0.5px solid var(--border-subtle);
  transform: translateY(100%); transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
}
.sticky-bar.is-visible { transform: translateY(0); }
.sticky-bar__inner {
  max-width: var(--max-width); margin: 0 auto; padding: 0.75rem 1.5rem;
  display: flex; align-items: center; justify-content: space-between;
}
.sticky-bar__info-title { font-size: 0.875rem; font-weight: 600; }
.sticky-bar__info-sub { font-size: 0.75rem; color: var(--text-tertiary); }
.sticky-bar__btn {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: #fff;
  font-size: 0.8rem; font-weight: 600; padding: 0.5rem 1.25rem;
  border-radius: 9999px; border: none; cursor: pointer; white-space: nowrap;
  box-shadow: 0 2px 12px rgba(139,92,246,0.3); transition: all 0.2s;
}
.sticky-bar__btn:hover { box-shadow: 0 4px 20px rgba(139,92,246,0.5); }

/* === FOOTER === */
.footer { padding: 5rem 0; border-top: 0.5px solid var(--border-subtle); }
.footer__inner { max-width: 56rem; margin: 0 auto; padding: 0 1.5rem; text-align: center; }
.footer__logo {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-weight: 600; margin-bottom: 2rem;
}
.footer__logo img { width: 2rem; height: 2rem; border-radius: 0.5rem; }
.footer__links {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem; margin-bottom: 2rem;
}
.footer__link { font-size: 0.875rem; color: var(--text-tertiary); transition: color 0.2s; }
.footer__link:hover { color: var(--text-primary); }
.footer__note { font-size: 0.875rem; color: var(--text-quaternary); margin-bottom: 0.75rem; }
.footer__copy { font-size: 0.75rem; color: var(--text-quaternary); }

/* === REDUCED MOTION === */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important; animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  html { scroll-behavior: auto; }
  .hero__orb { opacity: 0.15; }
  .final-cta__particle { opacity: 0; }
  .stagger > *, .reveal > * { opacity: 1; transform: none; }
}
```

- [ ] **Step 2: Add final CTA HTML**

Replace `<!-- FINAL CTA -->` with:

```html
<section class="final-cta">
  <div class="final-cta__glow" aria-hidden="true"></div>
  <div class="final-cta__particle" aria-hidden="true"></div>
  <div class="final-cta__particle" aria-hidden="true"></div>
  <div class="final-cta__particle" aria-hidden="true"></div>
  <div style="position: relative; z-index: 1; padding: 0 1.5rem;">
    <img src="/app-icon.png" alt="OneScribe" class="final-cta__icon" width="120" height="120">
    <h2 class="final-cta__heading">Stop scanning.<br><span class="text-gradient">Start understanding.</span></h2>
    <p class="final-cta__sub">Every document you scan makes OneScribe smarter. See what your documents have been trying to tell you.</p>
    <a href="https://apps.apple.com/us/app/onescribe-ai-note-scanner/id6756506734">
      <img src="/app-store-badge-white.svg" alt="Download on the App Store" class="final-cta__badge">
    </a>
    <p class="final-cta__note">Available on iPhone &amp; iPad · Requires iOS 26 · No Apple Intelligence required</p>
  </div>
</section>
```

- [ ] **Step 3: Add sticky bar HTML after `</main>`**

Replace `<!-- STICKY BAR -->` with:

```html
<div class="sticky-bar" id="sticky-bar" role="complementary" aria-label="Download OneScribe">
  <div class="sticky-bar__inner">
    <div>
      <div class="sticky-bar__info-title">OneScribe</div>
      <div class="sticky-bar__info-sub">Free · 83 document types</div>
    </div>
    <a href="https://apps.apple.com/us/app/onescribe-ai-note-scanner/id6756506734" class="sticky-bar__btn">Download</a>
  </div>
</div>
```

- [ ] **Step 4: Add footer HTML**

Replace `<!-- FOOTER -->` with:

```html
<footer class="footer">
  <div class="footer__inner">
    <div class="footer__logo">
      <img src="/app-icon.png" alt="" width="32" height="32">
      <span>One<span class="nav__logo-gradient">Scribe</span></span>
    </div>
    <div class="footer__links">
      <a href="/features" class="footer__link">Features</a>
      <a href="/pricing" class="footer__link">Pricing</a>
      <a href="/changelog" class="footer__link">What's New</a>
      <a href="/privacy" class="footer__link">Privacy</a>
      <a href="/support" class="footer__link">Support</a>
    </div>
    <p class="footer__note">Available on iPhone &amp; iPad · Requires iOS 26 · No Apple Intelligence required</p>
    <p class="footer__copy">&copy; 2025–2026 Casa Vargas Digital</p>
  </div>
</footer>
```

- [ ] **Step 5: Verify in browser**

Expected: Grand finale CTA with large app icon, purple glow, App Store badge. Sticky bar slides up from bottom when scrolling past hero (won't animate yet — JS is next task). Footer with logo, links, copyright.

- [ ] **Step 6: Commit**

```bash
git add index.html
git commit -m "feat: add final CTA, sticky bottom bar, and footer"
```

---

### Task 8: JavaScript — Scroll Reveal, Sticky Bar, Hamburger Menu

**Files:**
- Modify: `index.html` — add `<script>` block before closing `</body>` replacing `<!-- SCRIPTS -->`

- [ ] **Step 1: Add the script block**

Replace `<!-- SCRIPTS -->` with:

```html
<script>
  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObs.observe(el));

  // Sticky bar — show when hero leaves viewport
  const hero = document.getElementById('hero');
  const stickyBar = document.getElementById('sticky-bar');
  if (hero && stickyBar) {
    const stickyObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        stickyBar.classList.toggle('is-visible', !e.isIntersecting);
      });
    }, { threshold: 0 });
    stickyObs.observe(hero);
  }

  // Hamburger menu
  const toggle = document.getElementById('nav-toggle');
  const mobile = document.getElementById('nav-mobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      const open = mobile.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
    });
    mobile.addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        mobile.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !mobile.contains(e.target)) {
        mobile.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
</script>
```

- [ ] **Step 2: Verify all interactions in browser**

Test checklist:
1. **Scroll reveal:** Sections fade up as you scroll down
2. **Sticky bar:** Appears when hero scrolls out of view, hides when hero returns
3. **Hamburger (resize to mobile width):** Opens/closes menu, closes on link click, closes on outside click
4. **All links:** Nav links go to `/features`, `/pricing`, `/changelog`, `/support`. Download buttons go to App Store. "See how it works" scrolls to `#screenshots`.
5. **Reduced motion:** Enable "Reduce motion" in System Preferences → Accessibility. All animations should be instant.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add scroll reveal, sticky CTA bar, and hamburger menu JS"
```

---

### Task 9: Final Polish + Browser Verification

**Files:**
- Modify: `index.html` — any final CSS tweaks found during testing

- [ ] **Step 1: Test at mobile width (375px)**

Resize browser to 375px width. Verify:
- Nav shows hamburger, not links
- Hero stacks vertically (text above, device frame below)
- Trust strip wraps gracefully
- Screenshot carousel scrolls horizontally with snap
- Before/after cards stack vertically
- Feature sections stack (visual above, text below)
- Comparison table fits two columns
- Pricing cards stack vertically
- Sticky bar text is readable
- No horizontal overflow anywhere

- [ ] **Step 2: Test at tablet width (768px)**

Verify all grid layouts transition properly at the md breakpoint.

- [ ] **Step 3: Test at desktop (1440px)**

Verify max-width containers prevent content from stretching too wide.

- [ ] **Step 4: Validate HTML**

Run: `curl -s https://validator.w3.org/nu/?out=text -H 'Content-Type: text/html' -d @/Users/jonathan/Desktop/prjoni99.github.io/index.html | head -20`

Fix any validation errors.

- [ ] **Step 5: Check page weight**

Run: `wc -c /Users/jonathan/Desktop/prjoni99.github.io/index.html`

Target: Under 40KB for the HTML file itself (screenshots are loaded lazily).

- [ ] **Step 6: Final commit**

```bash
git add index.html
git commit -m "polish: responsive fixes and final verification"
```
