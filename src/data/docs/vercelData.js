export const vercelData = {
  title: "Vercel & Hosting Guides",
  guides: [
    {
      title: "1. SPA Route Refresh 404 Fix (Vite / React Router)",
      description:
        "To prevent 404 errors when refreshing inner routes on Vercel, create a vercel.json file in your project root.",
      code: `{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}`,
    },
    {
      title: "2. Environment Variables (.env) Setup",
      description:
        "How to add your local environment variables to the Vercel Project Dashboard:",
      code: `Vercel Dashboard ➔ Select Project ➔ Settings ➔ Environment Variables
Name: VITE_API_KEY
Value: your_actual_api_key_here`,
    },
    {
      title: "3. Build Command & Output Directory",
      description:
        "Default build settings for a standard Vite + React application on Vercel:",
      code: `Build Command: npm run build
Output Directory: dist
Install Command: npm install`,
    },
  ],
};
