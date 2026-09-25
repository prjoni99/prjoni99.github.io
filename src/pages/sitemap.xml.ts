// Search Console and Bing have /sitemap.xml registered from the old site.
// Keep that URL alive as an index pointing at Astro's generated sitemap.
export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>https://getonescribe.app/sitemap-0.xml</loc></sitemap>
</sitemapindex>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
