# OneScribe Homepage Redesign — Design Spec

**Date:** 2026-05-08
**Goal:** Modernize the homepage into a premium, conversion-optimized landing page for ad-driven traffic (Apple Search Ads, Google Ads, social).
**Primary KPI:** App Store downloads.
**Scope:** Homepage (`index.html`) only. All other pages (features, pricing, changelog, support, privacy) remain untouched.

---

## Context

OneScribe is launching paid advertising across Apple Search Ads, Google Ads, and social channels. The current homepage is a functional dark-theme landing page built from compiled Astro output, but it reads as a generic SaaS template. For ad traffic — especially high-intent Search Ads users comparing scanner apps — the site needs to:

1. Differentiate immediately from Scanner Pro, Genius Scan, Adobe Scan
2. Communicate four key value props: Document Intelligence (Data Cards), 100% On-Device Privacy, Proactive Features (alerts/briefings), and aggressive pricing ($0.99/mo or $9.99 lifetime)
3. Convert visitors to App Store downloads at every scroll position
4. Look premium enough to substitute for social proof (no reviews/ratings yet)

## Technical Approach

- **Single file:** `index.html` with embedded `<style>` and minimal `<script>`
- **No build tools:** No Tailwind build step, no Astro, no bundler. Clean hand-crafted HTML + CSS.
- **No dependencies:** Zero JS libraries. Vanilla CSS custom properties for theming. Vanilla JS for interactions.
- **Font stack:** `-apple-system, BlinkMacSystemFont, SF Pro Display, SF Pro Text, Helvetica Neue, Arial, sans-serif`
- **CSS strategy:** Custom properties for colors/spacing, BEM-lite class naming, mobile-first responsive breakpoints at 640px (sm), 768px (md), 1024px (lg)
- **JS scope:** IntersectionObserver for scroll-reveal + sticky CTA show/hide, hamburger menu toggle, screenshot carousel scroll-snap. ~50 lines total.
- **Accessibility:** `prefers-reduced-motion` disables all animations. Semantic HTML throughout. All images have descriptive `alt` text. Keyboard-navigable hamburger menu.

## Visual Language

| Token | Value |
|-------|-------|
| `--bg-primary` | `#000000` |
| `--bg-card` | `rgba(255,255,255,0.03)` |
| `--bg-card-hover` | `rgba(255,255,255,0.06)` |
| `--border-subtle` | `rgba(255,255,255,0.06)` |
| `--border-medium` | `rgba(255,255,255,0.1)` |
| `--text-primary` | `#FFFFFF` |
| `--text-secondary` | `#98989D` |
| `--text-tertiary` | `#6E6E73` |
| `--text-quaternary` | `#48484A` |
| `--accent-purple` | `#A855F7` |
| `--accent-gradient` | `linear-gradient(135deg, #a855f7, #818cf8, #60a5fa)` |
| `--accent-green` | `#4ADE80` |
| `--accent-red` | `#F87171` |
| `--accent-blue` | `#60A5FA` |
| `--accent-amber` | `#FBBF24` |
| `--glass-bg` | `rgba(0,0,0,0.6)` |
| `--glass-blur` | `blur(40px) saturate(180%)` |

## Page Structure (10 Sections)

### 1. Sticky Navigation Bar

- **Position:** `fixed`, top, full width, `z-index: 50`
- **Background:** Glass effect (`--glass-bg` + `--glass-blur`)
- **Height:** 64px
- **Layout:** Logo left, nav links center (hidden on mobile), Download CTA button right
- **Links:** Features, Pricing, What's New, Support — link to existing sub-pages
- **CTA:** Purple gradient pill button → App Store link
- **Mobile:** Hamburger icon (three lines) replaces nav links. Tapping opens a full-width dropdown with links stacked vertically. Closes on tap outside or link click.
- **Preserved:** Same App Store link URL, same logo treatment (app icon + "OneScribe" with gradient)

### 2. Hero Section

- **Layout:** Two-column on desktop (text left, device frame right). Single column stacked on mobile (text first, device below).
- **Left column:**
  - Badge: Green dot + "Scan free, forever" in a subtle pill (same as current)
  - Headline: `h1` — "Your documents work for you now." with gradient on second line. Font size: clamp(2.5rem, 8vw, 5.5rem).
  - Subhead: "Scan anything. Get structured Data Cards, spending insights, deadline alerts — all on-device AI. 83 document types. Zero cloud."
  - Sub-subhead: "100% on-device AI. No Apple Intelligence required." (dimmer)
  - Two CTAs: Primary purple gradient button ("Download Free" → App Store), secondary outline button ("See how it works" → #screenshots anchor)
- **Right column:** iPhone device frame (CSS-drawn rounded rect with notch) containing `Screenshots/OneScribe1.png`. Purple glow shadow beneath. Subtle float animation.
- **Background:** Radial gradient purple glow from top center + animated orbs (same as current but refined). `prefers-reduced-motion` disables orb animation.
- **Animation:** Staggered reveal — each element fades up with 150ms delay between them.

### 3. Trust Strip

- **Layout:** Horizontal bar, centered flex, wrapping on mobile
- **Border:** Top and bottom `--border-subtle`
- **Background:** `--bg-card`
- **Content:** Four stat pills with colored text:
  - "83 Doc Types" — purple
  - "100% On-Device" — green
  - "$0.99/mo" — blue
  - "No Apple Intelligence Required" — amber
- **Mobile:** Wraps to 2x2 grid

### 4. Screenshot Showcase

- **Header:** Section label "Data Cards" + headline "See it to believe it." + subhead about structured data
- **Carousel:** Horizontal scrolling container with `scroll-snap-type: x mandatory`. Contains all 6 screenshots (`OneScribe1.png` through `OneScribe6.png`) inside CSS device frames. Each frame has `scroll-snap-align: center`.
- **Device frames:** CSS-drawn iPhone outline (rounded rect, notch bar, home indicator). Screenshots as `<img>` inside.
- **Active state:** Center screenshot slightly scaled up (1.02) with purple glow shadow.
- **Captions:** Below each screenshot — "Receipt → vendor, total, items, warranty" etc. (carry over from current site and extend to all 6)
- **Below carousel:** Dim text listing all document categories
- **Mobile:** Same horizontal scroll, naturally touch-scrollable

### 5. Before/After Comparison

- **Header:** Section label "Not just another scanner" + headline "Other scanners flatten. OneScribe understands."
- **Layout:** Two cards side by side (stack on mobile)
- **Left card ("Other Scanners"):**
  - Red "✗" accent
  - Monospace text showing raw OCR dump of a Best Buy receipt — flat text, no structure, hard to parse
  - Dim styling to look unappealing
- **Right card ("OneScribe Data Card"):**
  - Purple accent border and subtle glow
  - Structured fields: Vendor → "Best Buy #1234", Total → "$942.82" (green), Category → "Electronics", Warranty → "Expires Apr 2026" (amber), action link "→ Export to Spreadsheet"
  - Clean, organized, clearly superior
- **Purpose:** Instant visual proof of the value proposition. This is the "aha moment" for Search Ads visitors comparing scanner apps.

### 6. Feature Moments (4 alternating sections)

Each section: large visual on one side, tight copy on the other. Alternating left/right layout. Each has its own accent color.

**6a. Proactive Alerts** (screenshot right)
- Accent: Red (`--accent-red`)
- Label: "Proactive Alerts"
- Headline: "Never miss a deadline again."
- Body: Contract expiring, insurance renewal, lease deadline — OneScribe watches and alerts before it's too late.
- Visual: CSS notification mockup (reuse the Daily Briefing notification from current site — app icon, title, body text, timestamp)

**6b. Privacy** (visual left)
- Accent: Green (`--accent-green`)
- Label: "Privacy"
- Headline: "Your documents never leave."
- Body: 100% on-device AI. No cloud. No data collection. No Apple Intelligence required. Tax returns, medical records, contracts stay on YOUR device.
- Visual: Large CSS shield icon with checkmark, surrounded by floating "No Cloud" / "No Tracking" / "On-Device" labels

**6c. Document Chat** (screenshot right)
- Accent: Blue (`--accent-blue`)
- Label: "Document Chat"
- Headline: "Ask your documents anything."
- Body: "What are the cancellation terms?" "Is my deductible covered?" Full document chat with 5 AI personas.
- Visual: CSS chat bubble mockup — user question bubble + AI response bubble with sample Q&A

**6d. Smart Exports** (visual left)
- Accent: Amber (`--accent-amber`)
- Label: "Smart Exports"
- Headline: "Contracts → Calendar. Cards → Contacts."
- Body: 8 smart export modes via the iOS Share Sheet. Receipts become spreadsheets. Meeting notes become reminders.
- Visual: CSS flow diagram — document icon → arrow → 4 destination icons (Calendar, Contacts, Spreadsheet, Reminders) with labels

Each feature moment uses `scroll-reveal` animation (fade up on viewport entry).

### 7. Comparison Table

- **Headline:** "OneScribe vs the rest."
- **Table:** Clean rows, OneScribe column highlighted with purple header
- **Rows:**
  - Document types: 83 vs 1-5
  - Structured data extraction: ✓ (green) vs ✗
  - On-device AI: ✓ (green) vs Cloud
  - Proactive alerts: ✓ (green) vs ✗
  - Document chat: ✓ (green) vs ✗
  - Smart exports: ✓ (green) vs Basic PDF
  - Price: $9.99 forever (amber, bold) vs $4-10/mo
- **Note:** We do NOT name specific competitors. "Others" / "the rest" keeps it clean and avoids legal issues.
- **Mobile:** Two-column layout (OneScribe vs Others) with horizontal scrolling disabled — table is narrow enough to fit

### 8. Pricing Section

- **Header:** Section label "Pricing" + headline "Less than a coffee. Forever."
- **Free tier callout:** Green pill — "Unlimited scans — always free, no credit card"
- **Two cards side by side:**
  - **Monthly:** $0.99/month. Feature checklist. Outline button "Download Free" → App Store.
  - **Lifetime (featured):** $9.99 one-time. "Best Value" purple badge. Purple glow border/shadow. Feature checklist + "All future updates" + "No subscriptions. Ever." Solid purple button "Buy Once" → App Store.
- **Below cards:** "Always free: Unlimited scans · PDF export · Data Card preview · Document reading"
- **Layout:** Cards side by side on desktop, stacked on mobile

### 9. Final CTA

- **Background:** Radial gradient purple glow from bottom
- **Content:** Large app icon (120px, 28% rounded, purple glow shadow) → headline "Stop scanning. Start understanding." → subhead → App Store badge (white SVG) → platform availability text
- **Subtle particle animation** in background (same as current, refined)

### 10. Sticky Bottom CTA Bar

- **Behavior:** Hidden initially. Appears (slides up) when user scrolls past the hero section. Uses `IntersectionObserver` on the hero to toggle visibility.
- **Layout:** Left — app name + "Free · 83 document types". Right — compact Download pill button.
- **Background:** Glass blur (`rgba(0,0,0,0.85)` + `backdrop-filter: blur(20px)`)
- **Border:** Top `--border-subtle`
- **Z-index:** 40 (below nav)
- **Mobile:** Full width, same layout but slightly smaller text

### 11. Footer

- Same as current: logo, nav links, platform availability, copyright
- Minor styling refresh to match new design tokens

## Preserved Assets

These files are NOT modified:
- `app-icon.png`, `app-store-badge-black.svg`, `app-store-badge-white.svg`
- `favicon.svg`
- `Screenshots/OneScribe1.png` through `OneScribe6.png`
- `CNAME`, `robots.txt`, `sitemap.xml`, `BingSiteAuth.xml`
- `apple-app-site-association`
- `features/index.html`, `pricing/index.html`, `changelog/index.html`, `support/index.html`, `privacy/index.html`
- `assets/` directory (still referenced by sub-pages)

## SEO Preserved

All existing meta tags, Schema.org JSON-LD, Open Graph, Twitter Cards, Apple Smart App Banner meta, and canonical URL are carried over verbatim into the new `index.html`.

## Analytics Preserved

Both Google Analytics (`G-8XQ50EWVB2`) and Plausible (`analytics.jonvargas.net`) script tags are carried over.

## Files Changed

| File | Action |
|------|--------|
| `index.html` | Complete rewrite |

That's it. One file.
