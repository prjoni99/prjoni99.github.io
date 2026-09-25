# AGENTS.md: getonescribe.app

## Project

This is the marketing site for OneScribe, an iPhone and iPad document scanner by Casa Vargas LLC.

- **Stack:** Astro 5 static site with plain CSS.
- **Deploy:** GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`. **Merging to `main` deploys.**
- **Spec:** `PLAN.md` holds the redesign spec and decisions. Read it before changing layout or copy.

## Commands

- `npm run dev`: dev server.
- `npm run build`: production build to `dist/`.
- `npm run preview`: serve the build. Verify against this, not dev.
- `node scripts/og-cards.mjs`: re-render `public/og/*.png`. Needs Chrome on macOS, so the font is SF Pro.

## Claims: read before writing any copy

Every product claim must have a row in the OneScribe repo's `marketing/copy/claims.md`, the owner's source of truth traced to code. Product facts live in `src/data/facts.ts`. As of 2026-09-24 that file rules out:

- **Any document-type count.** "83" is retired. Say "dozens of document types".
- **"No Apple Intelligence required".** The downloadable-model fallback hasn't passed its release gate. Data Cards need an iPhone 15 Pro or later, or an iPad with M1 or A17 Pro.
- **Smart Lookup.** Not until PRIVACY.md covers it.
- **A Siri count.**
- **"100% on-device", "never leaves", "zero cloud".** Say "no OneScribe account, no OneScribe server, no analytics SDK" and "iCloud sync off by default".
- **Subscription pricing.** Pro is $9.99 once. The March–May 2026 monthly plan is history only.

## Must-keep URLs and files

Everything in `public/` is copied as-is.

- **`/privacy/` and `/support/`.** The App Store listing and the app's Settings link here.
- **`/apple-app-site-association`.** Universal link for the Notion OAuth redirect.
- **`/sitemap.xml`.** Kept as an index (`src/pages/sitemap.xml.ts`) because Search Console registered it.
- **`BingSiteAuth.xml`, `CNAME`, `Screenshots/`.** `Screenshots/` holds old marketing images kept for inbound links; the site no longer uses them.
- **`/changelog/`.** Redirects to `/whats-new/` (`astro.config.mjs`).

## The privacy policy is legal text

`src/pages/privacy.astro` was rewritten on 2026-09-25 at the owner's request. Every statement traces to the app source (1.8.6 and main) and to the OneScribe repo's `PRIVACY.md`; the sources are listed in the file's header comment.

- **When the app changes** anything that sends data off the device (a new Smart Lookup provider, a new PCC feature, a download), update this page and its date in the same release.
- **Keep it consistent** with the App Store privacy label.
- **Don't soften or extend its commitments** without the owner.

## Structure

```
src/data/facts.ts        prices, counts, requirements: the only place they live
src/data/datacards.json  the Data Card library, extracted from the app source
src/data/cards.ts        grouping, slugs, related cards, article helper
src/components/          Nav, Footer, Device (CSS phone frame), PaperPass (hero), Specimen (blank card)
src/pages/cards/         library index + one page per card type
src/assets/captures/     phone captures, fictional data only
```

## Screenshots

- Use only the fictional-data captures from `OneScribe/AppStoreAssets/captures`, and open every image before you use it.
- These are rejected, with the reason:
  - **Real brands:** `02-drivers-license` (a realistic personal ID), the entity browser (Tesla, Toyota, BMW) and pet DNA (Embark).
  - **Real brands and health data:** the prescription and health-timeline captures (CVS, BCBS).
  - **Wrong totals:** `11-receipt`, whose total doesn't add up.
  - **Contradicts itself:** `05-ask-answer`, whose sources don't match its answer.

## Before saying it works

- `npm run build` is clean.
- Every internal link resolves.
- No em dashes in copy.
- No horizontal overflow at 390, 768, 1024 and 1440 px.
- Lighthouse Accessibility, Best practices and SEO are 100.
