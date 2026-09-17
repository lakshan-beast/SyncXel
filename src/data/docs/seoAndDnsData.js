
export const seoAndDnsData = {
  title: "SEO & Custom Domain Setup Guide",
  subtitle:
    "Optimize your website for search engines, social media previews, and custom domain routing.",
  description:
    "Essential OpenGraph tags, DNS record configurations, and search engine verification guidelines.",
  items: [
    {
      id: "opengraph-tags",
      title: "1. OpenGraph Social Sharing Meta Tags",
      description:
        "Add these meta tags inside your index.html <head> section to show rich image previews and correct metadata when sharing links on WhatsApp, Facebook, or Twitter.",
      code: `<!-- Open Graph / Facebook / WhatsApp -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://syncxel.com/" />
<meta property="og:title" content="Syncxel UI - Premium React Components" />
<meta property="og:description" content="Copy-paste dark themed UI components for React and Tailwind CSS." />
<meta property="og:image" content="https://syncxel.com/og-banner.png" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Syncxel UI - Premium React Components" />
<meta property="twitter:image" content="https://syncxel.com/og-banner.png" />`,
      explanation:
        "When someone shares your website link on social media or chat apps, scrapers crawl your HTML `<head>` for `og:image`, `og:title`, and `og:description` to build an attractive rich card instead of showing a plain text link.",
      proTip:
        "Always use an absolute image URL (starting with `https://`) for `og:image`, and keep your preview banner dimensions around 1200x630 pixels for optimal rendering across all platforms.",
    },
    {
      id: "dns-settings",
      title: "2. Custom Domain DNS Settings (Namecheap / Cloudflare / GoDaddy)",
      description:
        "Configure these DNS records at your domain registrar to connect a custom domain to Vercel:",
      code: `Type   | Name | Value
-----------------------------------------
A      | @    | 76.76.21.21
CNAME  | www  | cname.vercel-dns.com`,
      explanation:
        "The root domain (`@` or your domain name like `syncxel.com`) must point to Vercel's static server IP using an **A Record**. The `www` subdomain uses a **CNAME Record** to route traffic seamlessly to Vercel's global CDN.",
      proTip:
        "DNS propagation can take anywhere from 5 minutes up to 24 hours globally after saving changes at your domain registrar.",
    },
    {
      id: "seo-basics",
      title: "3. Essential Viewport & Page Title Meta Tags",
      description:
        "Basic SEO fundamentals required for mobile responsiveness and browser indexing.",
      code: `<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Explore premium copy-paste dark themed components for React." />
<title>Syncxel UI - Premium React Components</title>`,
      explanation:
        "The viewport meta tag is critical for making your website scale correctly on mobile and tablet screens, while the title and description tags help Google index your pages accurately for search queries.",
      proTip:
        "Keep your page titles under 60 characters and descriptions under 160 characters so they don't get cut off in Google search results.",
    },
  ],
};
