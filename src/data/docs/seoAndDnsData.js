export const seoAndDnsData = {
  title: "SEO & Custom Domain Setup Guide",
  items: [
    {
      title: "1. OpenGraph Social Sharing Meta Tags",
      description:
        "Add these meta tags inside your index.html <head> section to show rich image previews and correct metadata when sharing links on WhatsApp, Facebook, or Twitter:",
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
    },
    {
      title: "2. Custom Domain DNS Settings (Namecheap / Cloudflare / GoDaddy)",
      description:
        "Configure these DNS records at your domain registrar to connect a custom domain to Vercel:",
      code: `Type   | Name | Value
-----------------------------------------
A      | @    | 76.76.21.21
CNAME  | www  | cname.vercel-dns.com`,
    },
  ],
};
