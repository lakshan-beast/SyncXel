export const cssTricksData = [
  {
    id: "center-div",
    title: "How to Center a Div (2 Best Tailwind Methods)",
    description:
      "The absolute cleanest ways to center elements both vertically and horizontally with modern CSS.",
    category: "Layout",
    methods: [
      {
        name: "Method 1: Flexbox (Recommended for Flex layouts)",
        code: `<div className="flex items-center justify-center min-h-[200px] border border-white/10 rounded-xl bg-slate-950">
  <div className="bg-cyan-500 text-slate-950 px-4 py-2 font-bold rounded-lg shadow-lg">
    Centered Child
  </div>
</div>`,
        explanation:
          "`items-center` aligns items vertically along the cross axis, while `justify-center` aligns them horizontally along the main axis.",
        proTip:
          "Use Flexbox when you need to distribute space dynamically or switch flex direction across responsive breakpoints.",
      },
      {
        name: "Method 2: CSS Grid Place-Items (Ultimate Shorthand)",
        code: `<div className="grid place-items-center min-h-[200px] border border-white/10 rounded-xl bg-slate-950">
  <div className="bg-cyan-500 text-slate-950 px-4 py-2 font-bold rounded-lg shadow-lg">
    Centered Child
  </div>
</div>`,
        explanation:
          "`place-items-center` combines `align-items` and `justify-items` into a single line, making it the shortest absolute centering syntax in Grid.",
        proTip:
          "Ideal for full-container centering when you don't need complex row or column arrangements.",
      },
    ],
  },
  {
    id: "gradient-text",
    title: "Stunning Gradient Text Effect",
    description:
      "Make your main headings pop with smooth multi-color linear gradients.",
    category: "Typography",
    methods: [
      {
        name: "Tailwind Background Clip Gradient",
        code: `<h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500 bg-clip-text text-transparent">
  Build Faster With Syncxel
</h1>`,
        explanation:
          "`bg-clip-text` clips the background gradient to the shape of the text, and `text-transparent` makes the original text color invisible so the gradient shines through.",
        proTip:
          "Pair this with dark background containers (`bg-slate-950`) to get high contrast and maximum visual punch.",
      },
    ],
  },
  {
    id: "glassmorphism",
    title: "Glassmorphism Card Effect",
    description:
      "Create sleek backdrop-blur cards with delicate semi-transparent borders for modern UI designs.",
    category: "Styling",
    methods: [
      {
        name: "Tailwind Backdrop Blur Container",
        code: `<div className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl">
  <h4 className="text-white font-bold text-sm">Glassmorphism Card</h4>
  <p className="text-slate-400 text-xs mt-1">Sleek, transparent, modern UI container with background blur.</p>
</div>`,
        explanation:
          "Backdrop blur only works when the element has a semi-transparent background (e.g., `bg-slate-900/40`).",
        proTip:
          "Use delicate white borders with low opacity (`border-white/10`) to create a realistic glass reflection.",
      },
    ],
  },
  {
    id: "custom-scrollbar",
    title: "Sleek Custom Scrollbar",
    description:
      "Replace chunky default browser scrollbars with thin, modern, styled scrollbars.",
    category: "Styling",
    methods: [
      {
        name: "Tailwind Custom Scrollbar Utility",
        code: `<div className="max-h-48 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-950 [&::-webkit-scrollbar-thumb]:bg-cyan-500/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-cyan-400">
  {/* Scrollable long content goes here */}
</div>`,
        explanation:
          "Tailwind's arbitrary variant selector `[&::-webkit-scrollbar]` targets pseudo-elements directly inside markup without writing external CSS files.",
        proTip:
          "Great for dropdown menus, sidebars, and code blocks with overflowing content.",
      },
    ],
  },
  {
    id: "line-clamp",
    title: "Multi-line Text Truncation (Line Clamp)",
    description:
      "Cleanly cut off long paragraphs after a specific number of lines using an ellipsis (...).",
    category: "Typography",
    methods: [
      {
        name: "Tailwind Line Clamp Utility",
        code: `<p className="text-slate-400 text-xs line-clamp-2">
  This is a very long description text that will automatically be cut off after two lines with an ellipsis at the end, preventing layout breaks in card grids.
</p>`,
        explanation:
          "`line-clamp-2` applies internal CSS properties (`display: -webkit-box`, `-webkit-line-clamp: 2`, etc.) automatically.",
        proTip:
          "Essential for blog cards, product cards, and component grids where titles or descriptions vary in length.",
      },
    ],
  },
  {
    id: "neon-glow",
    title: "Animated Glowing Border & Shadow",
    description:
      "Pulse cyan glow on hover using custom shadow brackets and smooth transition effects.",
    category: "Effects",
    methods: [
      {
        name: "Cyan Glow Interactive Button",
        code: `<button className="px-6 py-2.5 bg-slate-950 text-cyan-400 border border-cyan-500/50 rounded-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:border-cyan-400 transition-all duration-300">
  Glowing Button
</button>`,
        explanation:
          "Tailwind's arbitrary value syntax `shadow-[...]` allows injecting custom CSS box-shadow values for neon glows.",
        proTip:
          "Avoid excessively large blur radii on low-end mobile devices to maintain frame-rate stability.",
      },
    ],
  },
];
