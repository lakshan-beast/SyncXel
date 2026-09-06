// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   build: {
//     rolldownOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes("node_modules")) {
//             if (id.includes("framer-motion")) {
//               return "framer-motion";
//             }
//             return "vendor";
//           }
//         },
//       },
//     },
//   },
// });

// import { defineConfig } from "vite";

// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   build: {
//     rolldownOptions: {
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
//     sourcemap: true,
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({ open: true, filename: "stats.html" }), // බිල්ඩ් එක කරද්දී ඔටෝ ග්‍රාෆ් එක ඕපන් වෙන්න
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
    sourcemap: false, // ඊයේ ආපු source-map වෝනිං මඟහරවා ගැනීමට false කරන්න
  },
});
