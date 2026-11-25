// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import { visualizer } from "rollup-plugin-visualizer";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//     visualizer({ open: true, filename: "stats.html" }),
//   ],
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes("node_modules")) {
//             if (id.includes("react") || id.includes("react-dom")) {
//               return "react-vendor";
//             }
//             if (id.includes("framer-motion")) {
//               return "framer-motion";
//             }
//             return "vendor";
//           }
//         },
//       },
//     },
//     sourcemap: false,
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import { projects } from "./src/data/projectsData.js";

const SITE_URL = "https://syncxel.vercel.app";

const staticRoutes = [
  "/",
  "/components",
  "/docs",
  "/templates",
  "/ui-packs",
  "/legal",
  "/services",
  "/projects",
];

function sitemapPlugin() {
  return {
    name: "syncxel-sitemap",

    generateBundle() {
      const projectRoutes = projects
        .filter((project) => project.status === "public" && project.caseStudy)
        .map((project) => `/projects/${project.id}`);

      const routes = [...staticRoutes, ...projectRoutes];

      const urls = routes
        .map(
          (route) => `
  <url>
    <loc>${SITE_URL}${route === "/" ? "/" : route}</loc>
  </url>`,
        )
        .join("");

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: sitemap,
      });
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemapPlugin(),
    visualizer({ open: true, filename: "stats.html" }),
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendor";
            }

            if (id.includes("framer-motion")) {
              return "framer-motion";
            }

            return "vendor";
          }
        },
      },
    },

    sourcemap: false,
  },
});
