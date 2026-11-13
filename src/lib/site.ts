// Absolute site URL, used by metadataBase, sitemap and robots.
// Set SITE_URL in Vercel; falls back to the production hostname Vercel
// injects automatically, then localhost for local dev.
export const siteUrl = process.env.SITE_URL
  ? process.env.SITE_URL.replace(/\/$/, "")
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";
