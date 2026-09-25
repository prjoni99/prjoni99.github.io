import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://getonescribe.app',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  redirects: {
    // The changelog was renamed "What's new" in the 2026-09 redesign.
    '/changelog': '/whats-new/',
  },
  integrations: [
    sitemap({
      filter: (page) => !['/changelog/', '/404/'].includes(new URL(page).pathname),
    }),
  ],
});
