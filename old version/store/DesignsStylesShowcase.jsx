import React from "react";

export default function DesignStylesShowcase() {
  const designStyles = [
    // {
    //   name: "Modern Slate",
    //   tag: "Core Developer Vibe",
    //   desc: "Clean, precise slate tones and terminal aesthetics built for modern SaaS applications.",
    //   badgeColor: "bg-slate-900 text-white",
    // },
    // {
    //   name: "Neo-Brutalism",
    //   tag: "High-Contrast",
    //   desc: "Thick borders, hard black shadows, and bold accents for high-impact creator products.",
    //   badgeColor: "bg-amber-400 text-slate-950",
    // },
    // {
    //   name: "Glassmorphism",
    //   tag: "Frosted Glow",
    //   desc: "Semi-transparent glass backgrounds with backdrop blur and soft futuristic lighting.",
    //   badgeColor: "bg-purple-600 text-white",
    // },
    // {
    //   name: "Clean Minimalist",
    //   tag: "Enterprise SaaS",
    //   desc: "Apple-inspired minimalist layouts with subtle typography and spacious padding.",
    //   badgeColor: "bg-emerald-600 text-white",
    // },
    // {
    //   name: "Vibrant Gradient",
    //   tag: "Creative & Bold",
    //   desc: "Rich color blending and dynamic gradients ideal for modern digital agencies and portfolios.",
    //   badgeColor: "bg-blue-600 text-white",
    // },

    // {
    //   id: "modern-slate",
    //   name: "AI-First Slate",
    //   tag: "Command-Line & AI Ready",
    //   desc: "Deep slate tones integrated with ⌘K command palettes, live status indicators, and sleek terminal aesthetics.",
    //   badgeColor: "bg-slate-900 border border-slate-700 text-slate-200",
    // },
    // {
    //   id: "tech-brutalism",
    //   name: "Tech Brutalism",
    //   tag: "Raw High-Impact",
    //   desc: "Bold thick borders, hard structural shadows, and monospace accents designed for high-impact developer tools.",
    //   badgeColor:
    //     "bg-amber-400 border border-slate-950 text-slate-950 font-bold",
    // },
    // {
    //   id: "frosted-glass",
    //   name: "Ambient Glass",
    //   tag: "Frosted & Glow",
    //   desc: "Ultra-thin 1px gradient borders, deep backdrop blurs, and floating ambient background lighting effects.",
    //   badgeColor:
    //     "bg-purple-600/30 border border-purple-500/40 text-purple-200 backdrop-blur-md",
    // },
    // {
    //   id: "zenith-minimal",
    //   name: "Zenith Minimal",
    //   tag: "Enterprise Clarity",
    //   desc: "Apple-inspired precise typography, generous whitespace, and restrained, elegant monochrome contrast.",
    //   badgeColor:
    //     "bg-emerald-600/20 border border-emerald-500/30 text-emerald-300",
    // },
    // {
    //   id: "hyper-gradient",
    //   name: "Hyper Gradient",
    //   tag: "Vibrant & Futuristic",
    //   desc: "Rich multi-stop color blending, fluid mesh gradients, and glowing accents ideal for modern SaaS products.",
    //   badgeColor:
    //     "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25",
    // },

    {
      id: "modern-slate",
      name: "AI-First Slate",
      tag: "Command-Line & AI Ready",
      niche: "Edge Cloud & Serverless Infrastructure",
      desc: "Deep slate tones integrated with ⌘K command palettes, live status indicators, and sleek terminal aesthetics for developer infrastructure.",
      badgeColor: "bg-slate-900 border border-slate-700 text-slate-200",
    },
    {
      id: "tech-brutalism",
      name: "Tech Brutalism",
      tag: "Raw High-Impact",
      niche: "Web3 Neo-Bank & Crypto Assets",
      desc: "Bold thick borders, hard structural shadows, and monospace accents designed for high-impact neo-banks and digital wallets.",
      badgeColor:
        "bg-amber-400 border border-slate-950 text-slate-950 font-bold",
    },
    {
      id: "frosted-glass",
      name: "Ambient Glass",
      tag: "Frosted & Glow",
      niche: "Green Energy & Smart Solar Grid",
      desc: "Ultra-thin 1px gradient borders, deep backdrop blurs, and floating ambient lighting ideal for clean-tech and smart grid monitors.",
      badgeColor:
        "bg-purple-600/10 border border-purple-500/40 text-purple-400 backdrop-blur-md",
    },
    {
      id: "zenith-minimal",
      name: "Zenith Minimal",
      tag: "Enterprise Clarity",
      niche: "AI-First Autonomous Agents Hub",
      desc: "Apple-inspired precise typography, generous whitespace, and restrained monochrome contrast tailored for AI platforms.",
      badgeColor:
        "bg-emerald-600/10 border border-emerald-500/30 text-emerald-400",
    },
    {
      id: "hyper-gradient",
      name: "Hyper Gradient",
      tag: "Vibrant & Futuristic",
      niche: "EV & Smart Mobility Fleet SaaS",
      desc: "Rich multi-stop color blending, fluid mesh gradients, and glowing accents built for modern electric vehicle and fleet SaaS platforms.",
      badgeColor:
        "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25",
    },
  ];

  return (
    <section className="py-0 px-2 pb-5 max-w-7xl mx-auto font-mono border-b-2 border-slate-200">
      {/* Header Info */}
      <div className="space-y-3 mb-10 max-w-2xl">
        <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-400 text-xs shadow-xs">
          <span className="w- h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span>// available_design_families_V.0</span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-sans">
          Built Across{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-900 to-slate-500">
            5 Signature Styles
          </span>
        </h2>

        <p className="text-slate-500 text-xs sm:text-sm leading-tight font-baloo">
          Every component pack is meticulously crafted in 5 distinct design
          families. This ensures you can seamlessly build a visually consistent
          full-stack application without switching design systems.
        </p>
      </div>

      {/* Grid of 5 Design Styles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {designStyles.map((style, idx) => (
          <div
            key={idx}
            className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-3 group">
            <div className="flex items-center justify-between">
              <span
                className={`text-[10px] font-baloo font-bold px-4 py-1.5 rounded-full ${style.badgeColor}`}>
                {style.tag}
              </span>
              <span className="text-xs text-slate-300 font-mono">
                // design 0{idx + 1}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-900 font-sans group-hover:text-emerald-600 transition-colors">
                {style.name}
              </h3>
              <p className="text-xs text-slate-500 font-baloo leading-tight pl-1">
                {style.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
