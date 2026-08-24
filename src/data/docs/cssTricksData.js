export const cssTricksData = [
  {
    id: "center-div",
    title: "How to Center a Div (3 Best Methods)",
    description:
      "The absolute cleanest ways to center elements both vertically and horizontally.",
    category: "Layout",
    methods: [
      {
        name: "Method 1: Flexbox (Recommended)",
        code: `<div className="flex items-center justify-center min-h-[200px] border border-white/10 rounded-xl">
  <div className="bg-cyan-500 text-slate-950 px-4 py-2 font-bold rounded-lg">
    Centered Child
  </div>
</div>`,
      },
      {
        name: "Method 2: Grid Place-Items",
        code: `<div className="grid place-items-center min-h-[200px] border border-white/10 rounded-xl">
  <div className="bg-cyan-500 text-slate-950 px-4 py-2 font-bold rounded-lg">
    Centered Child
  </div>
</div>`,
      },
    ],
  },
  {
    id: "glassmorphism",
    title: "Glassmorphism Card Effect",
    description: "Create sleek backdrop-blur cards with delicate borders.",
    category: "Styling",
    methods: [
      {
        name: "Tailwind Backdrop Blur",
        code: `<div className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl">
  <h4 className="text-white font-bold">Glassmorphism Card</h4>
  <p className="text-slate-400 text-xs mt-1">Sleek, transparent, modern UI container.</p>
</div>`,
      },
    ],
  },
  {
    id: "neon-glow",
    title: "Animated Glowing Border",
    description:
      "Pulse cyan glow on hover using shadow and transition effects.",
    category: "Effects",
    methods: [
      {
        name: "Cyan Glow Button",
        code: `<button className="px-6 py-2.5 bg-slate-950 text-cyan-400 border border-cyan-500/50 rounded-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:border-cyan-400 transition-all duration-300">
  Glowing Button
</button>`,
      },
    ],
  },
];
