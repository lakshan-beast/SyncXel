// export const vercelData = {
//   title: "Vercel & Hosting Guides",
//   guides: [
//     {
//       title: "1. SPA Route Refresh 404 Fix (Vite / React Router)",
//       description:
//         "To prevent 404 errors when refreshing inner routes on Vercel, create a vercel.json file in your project root.",
//       code: `{
//   "rewrites": [
//     { "source": "/(.*)", "destination": "/" }
//   ]
// }`,
//     },
//     {
//       title: "2. Environment Variables (.env) Setup",
//       description:
//         "How to add your local environment variables to the Vercel Project Dashboard:",
//       code: `Vercel Dashboard ➔ Select Project ➔ Settings ➔ Environment Variables
// Name: VITE_API_KEY
// Value: your_actual_api_key_here`,
//     },
//     {
//       title: "3. Build Command & Output Directory",
//       description:
//         "Default build settings for a standard Vite + React application on Vercel:",
//       code: `Build Command: npm run build
// Output Directory: dist
// Install Command: npm install`,
//     },
//   ],
// };

export const vercelData = {
  title: "Vercel & Hosting Guides",
  subtitle: "Deploy effortlessly and configure production settings smoothly.",
  description:
    "Essential configuration fixes for Vite, React Router, environment variables, and build settings on Vercel.",
  guides: [
    {
      id: "spa-404-fix",
      title: "1. SPA Route Refresh 404 Fix (Vite / React Router)",
      description:
        "Prevent 404 errors when refreshing inner application routes on Vercel by routing all requests through index.html.",
      code: `{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}`,
      explanation:
        "Single Page Applications (SPAs) handle routing on the client side using JavaScript. When you refresh a sub-route (e.g., `/dashboard`), Vercel looks for a physical folder/file named `dashboard` on the server and throws a 404 error. Rewriting requests to `/index.html` hands control back to React Router.",
      proTip:
        "Place the `vercel.json` configuration file directly in the root directory of your project (at the same level as your `package.json`).",
    },
    {
      id: "env-setup",
      title: "2. Environment Variables (.env) Setup",
      description:
        "Securely inject production API keys and private variables into your Vercel deployment dashboard.",
      code: `Vercel Dashboard ➔ Select Project ➔ Settings ➔ Environment Variables
Name: VITE_API_KEY
Value: your_actual_api_key_here`,
      explanation:
        "Never commit your actual production `.env` file into public GitHub repositories. Vercel injects dashboard-configured variables safely into your code during the build pipeline.",
      proTip:
        "In Vite projects, environment variables must start with the `VITE_` prefix (e.g., `VITE_API_URL`) to be exposed to the frontend client code via `import.meta.env`.",
    },
    {
      id: "build-settings",
      title: "3. Build Command & Output Directory",
      description:
        "Standard production build configurations for a high-performance Vite + React application on Vercel.",
      code: `Build Command: npm run build
Output Directory: dist
Install Command: npm install`,
      explanation:
        "Vercel automatically detects most modern frameworks, but explicitly specifying these custom values ensures your production static asset folder matches your bundler settings.",
      proTip:
        "If you are using a monorepo or a subfolder structure, remember to adjust the Root Directory setting inside Vercel Project Settings.",
    },
  ],
};
