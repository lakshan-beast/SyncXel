export const quickStartData = {
  title: "Quick Start Guide",
  description:
    "Learn how to easily integrate Syncxel components into your React, Vite, or Next.js projects.",
  licenseBanner: {
    badge: "100% FREE LICENSE",
    text: "Free for Personal & Commercial Use. No Attribution Required.",
  },
  steps: [
    {
      step: 1,
      title: "Install Dependencies",
      description:
        "Most components use Lucide Icons and Framer Motion for smooth animations.",
      command: "npm install lucide-react framer-motion react-icons",
    },
    {
      step: 2,
      title: "Setup Tailwind CSS",
      description:
        "Ensure your `tailwind.config.js` is configured to scan your source files and support custom animations.",
      code: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          500: "#06b6d4",
        },
      },
    },
  },
  plugins: [],
};`,
    },
    {
      step: 3,
      title: "Copy & Paste Component",
      description:
        "Browse any component from Syncxel, hit 'Copy Code', and paste it directly into your component tree.",
    },
  ],
};
