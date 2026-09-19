// // src/data/componentsData.js

// // 1. Live Render වෙන්න React Components Import කරගන්නවා
// const componentModules = import.meta.glob("../library/**/*.jsx", {
//   eager: true,
// });

// // 2. JSX Code එක string එකක් විදිහට ගන්නවා
// const jsxCodes = import.meta.glob("../library/**/*.jsx", {
//   query: "?raw",
//   import: "default",
//   eager: true,
// });

// // 3. HTML Code එක string එකක් විදිහට ගන්නවා
// const htmlCodes = import.meta.glob("../library/**/*.html", {
//   query: "?raw",
//   import: "default",
//   eager: true,
// });

// export const componentsData = Object.keys(componentModules).map((filePath) => {
//   // filePath = "../library/buttons/GlowButton.jsx"
//   const pathParts = filePath.split("/");
//   const fileName = pathParts[pathParts.length - 1].replace(".jsx", ""); // "GlowButton"
//   const category = pathParts[pathParts.length - 2]; // "buttons"

//   // HTML File එකේ Path එක හදාගන්නවා ("../library/buttons/GlowButton.html")
//   const htmlPath = filePath.replace(".jsx", ".html");

//   return {
//     id: fileName.toLowerCase(),
//     title: fileName.replace(/([A-Z])/g, " $1").trim(), // "GlowButton" -> "Glow Button"
//     category: category,
//     component: componentModules[filePath].default, // Dynamic React Component (Live Render)
//     code: {
//       jsx: jsxCodes[filePath] || "", // JSX Code String
//       html: htmlCodes[htmlPath] || jsxCodes[filePath] || "", // HTML Code String (HTML එක නැත්නම් JSX වැටෙනවා)
//     },
//   };
// });

const componentModules = import.meta.glob("../library/**/*.jsx", {
  eager: true,
});

const jsxCodes = import.meta.glob("../library/**/*.jsx", {
  query: "?raw",
  import: "default",
  eager: true,
});

const htmlCodes = import.meta.glob("../library/**/*.html", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const componentsData = Object.keys(componentModules).map((filePath) => {
  const pathParts = filePath.split("/");
  const fileName = pathParts[pathParts.length - 1].replace(".jsx", "");
  const category = pathParts[pathParts.length - 2];
  const htmlPath = filePath.replace(".jsx", ".html");

  const module = componentModules[filePath];

  return {
    id: fileName.toLowerCase(),
    title: fileName.replace(/([A-Z])/g, " $1").trim(),
    category: category,
    isPro: module.meta?.isPro || false,
    views: module.meta?.views || 150, // Initial views count
    copies: module.meta?.copies || 42, // Initial copies count
    component: module.default,
    code: {
      jsx: jsxCodes[filePath] || "",
      html: htmlCodes[htmlPath] || jsxCodes[filePath] || "",
    },
  };
});
