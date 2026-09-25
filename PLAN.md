# getonescribe.app redesign

**Status:** built and verified; deploying via PR. **Date:** 2026-09-24. **Branch:** `redesign/editorial-light-v2`.

## 1. Brief and decisions

The owner asked for getonescribe.app to be "completely redesigned". Decided on 2026-09-24:

| Question | Decision |
|---|---|
| Brand | **Evolve Editorial-Light.** Keep the palette that matches the App Store listing and the ad kit (8 Aug 2026 decision): warm paper, ink `#15171e`, one blue `#1366e6`. Rebuild everything else. |
| Pages | Home, Features, Pricing, What's new, Support, Privacy, **plus a Data Card library** covering all 83 types, one page per type. |
| Build | **Astro, deployed by GitHub Actions**, the same setup as casavargas.app. The Pages source changes from "deploy from branch" to "GitHub Actions". |
| Imagery | **Raw fictional-data captures** from `OneScribe/AppStoreAssets/captures`, framed in CSS on the site. No marketing copy baked into images. |

## 2. What was wrong

1. **Template tells**:
   - One accent-coloured word in each headline ("has a **story**.", "earn their **keep**.").
   - Uppercase tracked eyebrows over every section.
   - Emoji used as UI.
   - A sticky download bar.
   - A scroll-reveal that left a whole section blank when scrolled to.
2. **Stale or unsafe claims**:
   - "$0.99/mo" (fixed separately; see the pricing PR).
   - "5 AI personas" (actually 7) and "8 smart export modes" (actually 19).
   - "No data collection" stated as an absolute (Smart Lookup asks, then queries public databases; iCloud sync is opt-in).
   - A competitor comparison table.
3. **Real brands in demos**: a Best Buy / Samsung receipt.
4. **The product's real depth goes unused.** 83 Data Cards appear only as a comma list and "and 71 more".

## 3. Art direction: "paper in, data out"

OneScribe turns paper into structured data. The site shows that transformation directly.

- **Tokens (unchanged, from `AppStoreAssets/compositor/generate.mjs`)**:
  - paper `#faf9f6 → #f3f0ea → #ece8e1`
  - ink `#15171e`
  - sub `#6c7079`
  - accent `#1366e6`, used once per view at most
- **Type**:
  - Display and UI: the system SF Pro stack, heavy (700–800), tight tracking, matching the App Store screenshots. Non-Apple systems fall back to Inter Tight.
  - Printed-document specimens (receipts, labels) are set in a monospace, because that is what paper looks like.
  - Sentence case throughout. No uppercase eyebrows, no one-word accent colouring, no em dashes.
- **The one bold moment**: the hero shows a paper document next to the Data Card it becomes, with a single scan pass drawing the connections between them on load. Nothing else animates on its own.
- **Phones**: raw captures in a CSS device frame with a thin titanium bezel, on paper, with a soft contact shadow.
- **Structure only where it's information**:
  - field lists render as definition lists
  - the library is a real index grouped by category
  - pricing is a two-column fact table

## 4. Information architecture

| Route | Content |
|---|---|
| `/` | Hero (paper → card); what it reads (8 specimens drawn from the library); what it does after reading (briefing, alerts, connections, ask, exports); privacy; pricing; short FAQ |
| `/cards/` | The Data Card library: every type grouped by category, with a client-side filter |
| `/cards/<id>/` | One type: summary, fields, actions, related types, download CTA. Long-tail SEO. |
| `/features/` | Full feature detail |
| `/pricing/` | Free scanning, Pro one-time. Price facts from the pricing PR. |
| `/whats-new/` | The changelog, content carried over. `/changelog/` redirects here. |
| `/support/` | FAQ and contact, content carried over with stale claims fixed |
| `/privacy/` | **URL and substance preserved.** The App Store listing and the app's Settings link here. |

Kept byte-for-byte in `public/`: `apple-app-site-association` (Notion OAuth universal link), `BingSiteAuth.xml`, `CNAME`, the badges and icons. Both analytics tags are kept: GA4 `G-8XQ50EWVB2` and Plausible.

## 5. Facts of record (2026-09-24)

- iPhone and iPad, iOS/iPadOS 26+. Free download with unlimited free scans. Pro is $9.99 one-time (lifetime).
- "83 Data Cards". Say "Data Cards", not "document types": the store says 83 cards across 70+ types.
- 19 smart export modes, 14 Siri shortcuts, 7 chat personas.
- The AI runs on the device. Smart Lookup asks before querying public databases (FDA, NHTSA, Wikipedia). iCloud sync is opt-in.
- **Never say**:
  - "no data collection" or "nothing ever leaves" as absolutes
  - any subscription price
  - competitor names or comparisons
  - accuracy numbers
  - 2.0-only features

## 6. Verification

- `npm run build` clean.
- Every internal link resolves, and `/privacy/`, `/support/` and `/apple-app-site-association` are served.
- No horizontal overflow at 390, 768, 1024 and 1440 px.
- Lighthouse Accessibility, Best practices and SEO 100.
- Every image opened and read. No real brands, no personal data, no stale numbers.
- After deploy: the live URLs above return 200, and `/changelog/` redirects.

## 7. Phases

- [x] Scaffold Astro, tokens, layout, nav/footer, deploy workflow
- [x] Home
- [x] Data Card library (index + 92 per-type pages)
- [x] Features, Pricing, What's new, Support, Privacy
- [x] SEO: JSON-LD, OG cards, sitemap (`/sitemap.xml` kept as an index)
- [ ] Verify (§6), PR, switch Pages to Actions, merge, verify live

## 8. Changes during the build

- **OneScribe's `marketing/copy/claims.md` governs the copy.** It was found mid-build. It retires the "83" count, rules out "No Apple Intelligence required" (the MLX fallback hasn't passed its release gate), bars Smart Lookup until PRIVACY.md covers it, and bans a Siri count and "100% on-device". §5 above is superseded where it disagrees.
- **Data Card library.** 92 entries extracted from the app source at `c97e14d0`: 80 document types, with the tax form split into its 11 specific forms plus a generic entry. The site prints no total.
- **`--sub` darkened** from `#6c7079` to `#5f636c`, because the compositor value fails AA on `--paper-3`.
- **Privacy policy** was first carried over word for word (February 2026). It was then **rewritten on 2026-09-25** at the owner's request, traced to the app source. It now covers:
  - iCloud sync, Private Cloud Compute and Smart Lookup: every provider, and the exact term sent.
  - Downloads from Hugging Face, recipe import and tracking links.
  - Purchases, crash reports, email, this website's analytics, children, rights and changes.
- **What's new.** The March entry is annotated (the monthly plan was retired in May), a May entry records the change, and version 1.8.6 is listed. The unreleased 1.9.0 is not.

## 9. Verification (2026-09-24, `astro preview`)

- [x] Build clean: 101 HTML files, 189 JSON-LD blocks all parse, every internal `href`/`src` resolves.
- [x] Present in `dist/`: `/privacy/`, `/support/`, `/apple-app-site-association`, `BingSiteAuth.xml`, `CNAME`, `/sitemap.xml`, `Screenshots/`.
- [x] `/changelog/` redirects to `/whats-new/`.
- [x] No horizontal overflow at 390, 768, 1024 and 1440 px on 8 routes.
- [x] Lighthouse mobile: `/` 89/100/100/100, `/cards/` 100/100/100/100, `/support/` 100/100/100/100. `/cards/boarding-pass/` had a pill contrast failure, now fixed at 6.1:1.
- [x] No em dashes in any built page.
