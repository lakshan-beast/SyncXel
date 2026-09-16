// export const quickStartData = {
//   title: "Quick Start Guide",
//   description:
//     "Learn how to easily integrate Syncxel components into your React, Vite, or Next.js projects.",
//   licenseBanner: {
//     badge: "100% FREE LICENSE",
//     text: "Free for Personal & Commercial Use. No Attribution Required.",
//   },
//   steps: [
//     {
//       step: 1,
//       title: "Install Dependencies",
//       description:
//         "Most components use Lucide Icons and Framer Motion for smooth animations.",
//       command: "npm install lucide-react framer-motion react-icons",
//     },
//     {
//       step: 2,
//       title: "Setup Tailwind CSS",
//       description:
//         "Ensure your `tailwind.config.js` is configured to scan your source files and support custom animations.",
//       code: `/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         cyan: {
//           500: "#06b6d4",
//         },
//       },
//     },
//   },
//   plugins: [],
// };`,
//     },
//     {
//       step: 3,
//       title: "Copy & Paste Component",
//       description:
//         "Browse any component from Syncxel, hit 'Copy Code', and paste it directly into your component tree.",
//     },
//   ],
// };

export const quickStartData = {
  title: "Quick Start Guide",
  subtitle: "Get up and running with Syncxel components in under 5 minutes.",
  description:
    "Syncxel provides beautifully crafted, highly customizable components built for React, Vite, and Next.js. Follow this quick guide to set up your environment.",
  licenseBanner: {
    badge: "100% FREE LICENSE",
    text: "Free for Personal & Commercial Use. No Attribution Required.",
  },
  prerequisites: {
    title: "Prerequisites",
    items: [
      "React 18+ or Next.js 14+",
      "Tailwind CSS v3.4+ or v4",
      "TypeScript (Optional, but fully supported)",
    ],
  },
  steps: [
    {
      step: 1,
      title: "Install Dependencies & Icons",
      description:
        "Most Syncxel components rely on Tailwind CSS for styling, Lucide React for modern icons, and Framer Motion for smooth animations.",
      commands: {
        npm: "npm install clsx tailwind-merge lucide-react framer-motion",
        pnpm: "pnpm add clsx tailwind-merge lucide-react framer-motion",
        yarn: "yarn add clsx tailwind-merge lucide-react framer-motion",
        bun: "bun add clsx tailwind-merge lucide-react framer-motion",
      },
      explanation:
        "We install `clsx` and `tailwind-merge` as they are essential for dynamically merging Tailwind CSS classes without style conflicts.",
    },
    {
      step: 2,
      title: "Create the Utility Helper (`cn`)",
      description:
        "Create a utility file to handle conditional classes smoothly. Paste this helper into `src/lib/utils.ts` (or `utils/cn.ts`):",
      code: `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
      explanation:
        "This utility function safely merges multiple Tailwind classes and resolves conflicting classes (e.g., overriding padding or colors dynamically).",
    },
    {
      step: 3,
      title: "Configure Tailwind CSS",
      description:
        "Ensure your `tailwind.config.js` scans your source files and includes necessary support for custom themes and dark mode.",
      code: `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
    },
  },
  plugins: [],
};`,
      proTip:
        "If you are using Tailwind CSS v4, you can skip the config file and directly import your theme variables in your main CSS entry point.",
    },
    {
      step: 4,
      title: "Copy & Paste Component",
      description:
        "You are all set! Browse any component in the Syncxel library, hit 'Copy Code', paste it directly into your component directory, and customize it to match your design.",
    },
  ],
};
