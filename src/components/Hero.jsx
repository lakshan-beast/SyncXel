// import React, { useState, useEffect } from "react";
// import {
//   HiOutlineSparkles,
//   HiOutlineCodeBracket,
//   HiOutlineArrowRight,
//   HiOutlineCheck,
//   HiOutlineClipboardDocument,
// } from "react-icons/hi2";

// export default function Hero() {
//   const [activeTab, setActiveTab] = useState("preview");
//   const [copied, setCopied] = useState(false);

//   const sampleCode = `
//   import React from 'react';

//   export default function GlassGlowHeroButton() {
//     return (
//       <button className="px-8 py-3.5 text-lg font-mono font-bold tracking-[4px] text-white bg-transparent border-2 border-white/80 rounded-full transition-all duration-300 ease-out hover:text-white hover:border-white hover:shadow-[0_0_45px_rgba(255,255,255,0.9)] [webkit-box-reflect:below_0px_linear-gradient(transparent,transparent,#0004)] active:scale-95 cursor-pointer">
//         GET STARTED
//       </button>
//     );
//   };`;

//   const handleCopy = () => {
//     navigator.clipboard.write(sampleCode);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <section className="relative pt-12 pb-20 px-4 sm:px-8 overflow-hidden ">
//       {/* 🌟 1. ANIMATED BACKGROUND GRID PATTERN */}
//       <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [bg-size:24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-pulse" />

//       {/* <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-87.5 bg-syncxel-cyan/10 blur-[170px] pointer-events-none rounded-full" />
//       <div className="absolute top-1/3 right-10 w-100 h-100 bg-syncxel-blue/10 blur-[180px] pointer-events-none rounded-full" /> */}

//       {/* 🌟 2. PULSING GLOW ORBS */}
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-syncxel-cyan/15 blur-[150px] pointer-events-none rounded-full animate-pulse duration-1000" />
//       <div className="absolute top-1/3 right-10 w-87.5 h-87.5 bg-syncxel-blue/15 blur-[160px] pointer-events-none rounded-full animate-bounce duration-3000" />

//       <div className="max-w-7xl mx-auto space-y-10 relative z-10 h-dvh">
//         {/* top badge headline & CTAs */}
//         <div className="text-center space-y-1 max-w-4xl mx-auto">
//           <a
//             href="#features"
//             className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-syncxel-card border border-syncxel-border/90 hover:border-syncxel-cyan/50 text-xs text-syncxel-textMuted hover:text-white transition-all duration-300 shadow-lg group">
//             <span className="flex h-2 w-2 rounded-full bg-syncxel-cyan animate-pulse" />
//             <span className="font-semibold text-white">SyncXel v1.0</span>
//             <span>• Modern React & Tailwind Architecture</span>
//             <HiOutlineArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
//           </a>

//           {/* main headine */}
//           <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white font-heading tracking-tight leading-tight">
//             Build Modern Web Apps
//             <span className="text-transparent bg-clip-text bg-syncxel-gradient ml-3 inline-flex">
//               10x Faster
//             </span>
//           </h1>

//           {/* subtitle */}
//           <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
//             Production-ready UI components for developers, and high-performance
//             custom web engineering for startups and founders.
//           </p>

//           {/* dual action buttons */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-1 md:gap-4 pt-4">
//             <a
//               href="#components"
//               className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-syncxel-gradient text-syncxel-dark font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-syncxel-cyan/20 group cursor-pointer">
//               <HiOutlineSparkles className="w-4 h-4 fill-syncxel-dark" />
//               <span>Explore Components</span>
//               <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </a>
//             <a
//               href="#hire"
//               className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-syncxel-card border border-syncxel-border hover:border-syncxel-cyan/40 text-white font-semibold text-sm hover:bg-syncxel-dark transition-all flex items-center justify-center space-x-2 cursor-pointer">
//               <HiOutlineCodeBracket className="w-4 h-4 text-syncxel-cyan" />
//               <span>Hire Us for Custom Project</span>
//             </a>
//           </div>
//         </div>

//         {/* hero interactive code & preview box */}
//         <div className="max-w-2xl mx-auto rounded-2xl bg-syncxel-card/80 border border-syncxel-border/80 shadow-2xl overflow-hidden backdrop-blur-md">
//           {/* header bar */}
//           <div className="flex items-center justify-between px-4 py-3 bg-syncxel-dark/90 border-b border-syncxel-border/60">
//             {/* window dots */}
//             <div className="flex items-center space-x-2">
//               <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
//               <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
//               <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
//               <span className="text-xs text-syncxel-textMuted font-mono ml-2 hidden sm:inline-block">
//                 SyncXelComponent.jsx
//               </span>
//             </div>

//             {/* tabs & copy button */}
//             <div className="flex items-center space-x-3">
//               <div className="flex bg-syncxel-card p-1 rounded-lg border border-syncxel-border/60 text-xs">
//                 {/* preview button */}
//                 <button
//                   type="button"
//                   onClick={() => setActiveTab("preview")}
//                   className={`px-3 py-1 rounded-md transition-colors ${
//                     activeTab === "preview"
//                       ? "bg-syncxel-cyan/20 text-syncxel-cyan font-semibold"
//                       : "text-syncxel-textMuted hover:text-white"
//                   }`}>
//                   Preview
//                 </button>
//                 {/* code button */}
//                 <button
//                   type="button"
//                   onClick={() => setActiveTab("code")}
//                   className={`px-3 py-1 rounded-md transition-colors ${
//                     activeTab === "code"
//                       ? "bg-syncxel-cyan/20 text-syncxel-cyan font-semibold"
//                       : "text-syncxel-textMuted hover:text-white"
//                   }`}>
//                   Code
//                 </button>
//               </div>

//               <button
//                 type="button"
//                 onClick={handleCopy}
//                 className="p-1.5 rounded-lg bg-syncxel-card border border-syncxel-border text-syncxel-textMuted hover:text-white transition-colors"
//                 title="Copy Code">
//                 {copied ? (
//                   <HiOutlineCheck className="w-4 h-4 text-green-400" />
//                 ) : (
//                   <HiOutlineClipboardDocument className="w-4 h-4" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* tab content box */}
//           <div className="p-2 sm:p-3 min-h-55 flex items-center justify-center bg-[#080b12] relative overflow-hidden">
//             {activeTab === "preview" ? (
//               <div className="text-center space-y-4 relative z-10">
//                 <div className="p-6 rounded-2xl bg-syncxel-dark/90 border border-syncxel-border shadow-xl space-y-3 max-w-sm mx-auto">
//                   <span className="px-2.5 py-0.5 rounded-full bg-syncxel-cyan/10 text-syncxel-cyan text-xs font-semibold">
//                     Interactive UI Component
//                   </span>
//                   <h4 className="text-white font-bold text-lg font-heading">
//                     SyncXel Premium Card
//                   </h4>
//                   {/* <button className="w-full py-2.5 rounded-xl bg-syncxel-gradient text-syncxel-dark font-bold text-xs shadow-lg shadow-syncxel-cyan/20 hover:opacity-90 transition-opacity">
//                     Get Started Now
//                   </button> */}
//                   <button className="px-8 py-3.5 text-lg font-mono font-bold tracking-[4px] text-white bg-transparent border-2 border-white/80 rounded-full transition-all duration-300 ease-out hover:text-white hover:border-white hover:shadow-[0_0_45px_rgba(255,255,255,0.9)] [webkit-box-reflect:below_0px_linear-gradient(transparent,transparent,#0004)] active:scale-95 cursor-pointer">
//                     GET STARTED
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <pre className="w-full font-mono text-xs sm:text-sm text-syncxel-cyan overflow-x-auto p-2">
//                 <code>{sampleCode}</code>
//               </pre>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import {
  HiOutlineSparkles,
  HiOutlineCodeBracket,
  HiOutlineArrowRight,
  HiOutlineCheck,
  HiOutlineClipboardDocument,
} from "react-icons/hi2";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const sampleCode = `import React from 'react';

export default function GlassGlowHeroButton() {
  return (
    <button className="px-8 py-3.5 text-lg font-mono font-bold tracking-[4px] text-white bg-transparent border-2 border-white/80 rounded-full transition-all duration-300 hover:border-white hover:shadow-[0_0_35px_rgba(255,255,255,0.8)] active:scale-95 cursor-pointer">
      GET STARTED
    </button>
  );
}`;

  // Fixed Copy Handler
  const handleCopy = () => {
    navigator.clipboard.writeText(sampleCode.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-3 pb-16 px-4 sm:px-8  lg:pt-28 overflow-hidden min-h-screen flex items-center justify-center">
      {/* 1. ANIMATED BACKGROUND GRID PATTERN */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] animate-pulse" />

      {/* 2. PULSING GLOW ORBS (Standardized Arbitrary Classes) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] bg-cyan-500/55 blur-[140px] pointer-events-none rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-blue-600/15 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10 w-full">
        {/* Top Badge, Headline & CTAs */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          {/* Version Badge */}
          <a
            href="#components"
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/10 hover:border-cyan-500/50 text-xs text-slate-300 transition-all duration-300 shadow-lg group">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-semibold text-white">SyncXel v1.0</span>
            <span>• React & Tailwind Architecture</span>
            <HiOutlineArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Build Modern Web Apps{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 block sm:inline mt-1 sm:mt-0">
              10x Faster
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            Production-ready UI components for developers, and high-performance
            custom web engineering for startups and founders.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#components"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-bold text-sm hover:opacity-95 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20 group cursor-pointer">
              <HiOutlineSparkles className="w-4 h-4 fill-slate-950" />
              <span>Explore Components</span>
              <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#hire"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/80 border border-white/15 hover:border-cyan-400/50 text-white font-semibold text-sm hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 cursor-pointer">
              <HiOutlineCodeBracket className="w-4 h-4 text-cyan-400" />
              <span>Hire Us for Custom Project</span>
            </a>
          </div>
        </div>

        {/* Hero Interactive Code & Preview Box */}
        <div className="max-w-2xl mx-auto rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-white/10">
            {/* Window Dots */}
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline-block">
                SyncXelComponent.jsx
              </span>
            </div>

            {/* Tabs & Copy Button */}
            <div className="flex items-center space-x-3">
              <div className="flex bg-slate-800 p-1 rounded-lg border border-white/10 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab("preview")}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activeTab === "preview"
                      ? "bg-cyan-500/20 text-cyan-400 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}>
                  Preview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("code")}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activeTab === "code"
                      ? "bg-cyan-500/20 text-cyan-400 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}>
                  Code
                </button>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="p-1.5 rounded-lg bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-colors"
                title="Copy Code">
                {copied ? (
                  <HiOutlineCheck className="w-4 h-4 text-green-400" />
                ) : (
                  <HiOutlineClipboardDocument className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Tab Content Box */}
          <div className="p-6 min-h-[200px] flex items-center justify-center bg-slate-950/50 relative overflow-x-auto">
            {activeTab === "preview" ? (
              <div className="text-center space-y-4">
                <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 shadow-xl space-y-4 max-w-sm mx-auto">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
                    Interactive UI Component
                  </span>
                  <h4 className="text-white font-bold text-base">
                    SyncXel Premium Glow Button
                  </h4>
                  <div className="pt-2">
                    {/* <button className="px-6 py-2.5 text-sm font-mono font-bold tracking-widest text-white bg-transparent border-2 border-white/80 rounded-full transition-all duration-300 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] active:scale-95 cursor-pointer">
                      GET STARTED
                    </button> */}
                    <button className="px-8 py-3.5 text-lg font-mono font-bold tracking-[4px] text-white bg-transparent border-2 border-white/80 rounded-full transition-all duration-300 ease-out hover:text-white hover:border-white hover:shadow-[0_0_45px_rgba(255,255,255,0.9)] [webkit-box-reflect:below_0px_linear-gradient(transparent,transparent,#0004)] active:scale-95 cursor-pointer">
                      {" "}
                      GET STARTED
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <pre className="w-full font-mono text-xs text-cyan-300 overflow-x-auto p-2 bg-slate-900/80 rounded-lg">
                <code>{sampleCode}</code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
