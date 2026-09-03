// import React, { useState } from "react";
// import { motion } from "framer-motion";
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

//   const sampleCode = `import React from 'react';

// export default function GlassGlowHeroButton() {
//   return (
//     <button className="px-8 py-3.5 text-lg font-mono font-bold tracking-[4px] text-white bg-transparent border-2 border-white/80 rounded-full transition-all duration-300 hover:border-white hover:shadow-[0_0_35px_rgba(255,255,255,0.8)] active:scale-95 cursor-pointer">
//       GET STARTED
//     </button>
//   );
// }`;

//   // Fixed Copy Handler
//   const handleCopy = () => {
//     navigator.clipboard.writeText(sampleCode.trim());
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <section className="relative pt-0 pb-16 px-4 sm:px-8 md:pt-16 lg:pt-30 overflow-hidden min-h-screen flex items-center justify-center sm:items-start text-wrap">
//       {/* 1. ANIMATED BACKGROUND GRID PATTERN */}
//       <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:30px_30px] animate-pulse" />

//       {/* 2. PULSING GLOW ORBS (Standardized Arbitrary Classes)  */}
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 sm:w-125 h-75 bg-cyan-500/55 blur-[140px] pointer-events-none rounded-full animate-pulse" />
//       {/* <div className="absolute top-1/3 right-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-blue-600/15 blur-[150px] pointer-events-none rounded-full" />  */}

//       <div className="max-w-7xl mx-auto space-y-3 md:space-y-8 relative z-10 w-full">
//         {/* Top Badge, Headline & CTAs */}
//         <div className="text-center space-y-3 max-w-4xl mx-auto">
//           {/* Version Badge */}
//           <a
//             href="#components"
//             className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/70 border-2 border-white/20 hover:border-cyan-500/50 text-xs text-slate-300 transition-all duration-300 shadow-lg group text-wrap ">
//             <div className="relative flex items-center justify-center w-4 h-4">
//               <motion.div
//                 animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
//                 transition={{ repeat: Infinity, duration: 1.5 }}
//                 className="absolute w-3 h-3 rounded-full bg-cyan-500"
//               />
//             </div>
//             <span className="font-semibold text-white ">SyncXel v1.0</span>
//             <span>• React & Tailwind Architecture</span>
//             <HiOutlineArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
//           </a>

//           {/* Main Headline */}
//           <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
//             Build Modern Web Apps{" "}
//             <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500 block sm:inline mt-1 sm:mt-0">
//               10x Faster
//             </span>
//           </h1>

//           {/* Subtitle */}
//           <p className="text-slate-300/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-5 md:leading-relaxed px-2">
//             Production-ready UI components for developers, and high-performance
//             custom web engineering for startups and founders.
//           </p>

//           {/* Dual Action Buttons */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 pt-2">
//             <a
//               href="#components"
//               className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-linear-to-r from-cyan-400 to-indigo-500 text-slate-950 font-bold text-sm hover:opacity-95 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20 group cursor-pointer">
//               <HiOutlineSparkles className="w-4 h-4 fill-slate-950 group-hover:scale-250 group-hover:-rotate-12 duration-300" />
//               <span>Explore Components</span>
//               <HiOutlineArrowRight className="w-4 h-4 font-bold group-hover:translate-x-1 transition-transform" />
//             </a>
//             <a
//               href="#hire"
//               className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/80 border-2 border-white/15 hover:border-cyan-400/50 text-white font-semibold text-sm hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 cursor-pointer group:">
//               <HiOutlineCodeBracket className="w-4 h-4 text-cyan-400 group-hover:scale-250 group-hover:rotate-12 duration-300" />
//               <span>Hire Us for Custom Project</span>
//             </a>
//           </div>
//         </div>

//         {/* Hero Interactive Code & Preview Box */}
//         <div className="max-w-2xl mx-auto rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md">
//           {/* Header Bar */}
//           <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-white/10">
//             {/* Window Dots */}
//             <div className="flex items-center space-x-2">
//               <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
//               <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
//               <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
//               <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline-block">
//                 SyncXelComponent.jsx
//               </span>
//             </div>

//             {/* Tabs & Copy Button */}
//             <div className="flex items-center space-x-3">
//               <div className="flex bg-slate-800 p-1 rounded-lg border border-white/10 text-xs">
//                 <button
//                   type="button"
//                   onClick={() => setActiveTab("preview")}
//                   className={`px-3 py-1 rounded-md transition-colors ${
//                     activeTab === "preview"
//                       ? "bg-cyan-500/20 text-cyan-400 font-semibold"
//                       : "text-slate-400 hover:text-white"
//                   }`}>
//                   Preview
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setActiveTab("code")}
//                   className={`px-3 py-1 rounded-md transition-colors ${
//                     activeTab === "code"
//                       ? "bg-cyan-500/20 text-cyan-400 font-semibold"
//                       : "text-slate-400 hover:text-white"
//                   }`}>
//                   Code
//                 </button>
//               </div>

//               <button
//                 type="button"
//                 onClick={handleCopy}
//                 className="p-1.5 rounded-lg bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-colors"
//                 title="Copy Code">
//                 {copied ? (
//                   <HiOutlineCheck className="w-4 h-4 text-green-400" />
//                 ) : (
//                   <HiOutlineClipboardDocument className="w-4 h-4" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Tab Content Box */}
//           <div className="p-3 min-h-50 flex items-center justify-center bg-transparent bordernn] relative overflow-x-auto">
//             {activeTab === "preview" ? (
//               <div className="text-center space-y-4">
//                 <div className="p-6 rounded-2xl bg-slate-900 border-non border-white/10 shadow-xl space-y-4 max-w-sm mx-auto">
//                   <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
//                     Interactive UI Component
//                   </span>
//                   <h4 className="text-white font-bold text-base mt-0.5">
//                     SyncXel Premium Glow Button
//                   </h4>
//                   <div className="pt-2">
//                     {/* <button className="px-6 py-2.5 text-sm font-mono font-bold tracking-widest text-white bg-transparent border-2 border-white/80 rounded-full transition-all duration-300 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] active:scale-95 cursor-pointer">
//                       GET STARTED
//                     </button> */}
//                     {/* <button className="px-8 py-3.5 text-lg font-mono font-bold tracking-[4px] text-white bg-transparent border-2 border-white/80 rounded-full transition-all duration-300 ease-out hover:text-white hover:border-white hover:shadow-[0_0_45px_rgba(255,255,255,0.9)] [webkit-box-reflect:below_0px_linear-gradient(transparent,transparent,#0004)] active:scale-95 cursor-pointer">
//                       {" "}
//                       GET STARTED
//                     </button> */}

//                     <motion.button
//                       whileHover={{ skewX: [-5, 5, -2, 0], scale: 1.03 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="px-5 py-2.5 bg-slate-900 border border-rose-500/40 text-rose-400 hover:text-cyan-400 font-mono text-xs font-bold rounded-xl shadow-[0_0_15px_rgba(244,63,94,0.2)] cursor-pointer">
//                       SYS_GLITCH()
//                     </motion.button>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <pre className="w-full font-mono text-xs text-cyan-300 overflow-x-auto p-2 bg-slate-900/80 rounded-lg">
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
import { motion } from "framer-motion";
import {
  HiOutlineSparkles,
  HiOutlineCodeBracket,
  HiOutlineArrowRight,
  HiOutlineCheck,
  HiOutlineClipboardDocument,
} from "react-icons/hi2";

// --- Framer Motion Variants ---

// මුළු container එක සඳහා variants (stagger children සඳහා)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2, // මුල්ම animation එක පටන් ගන්න කලින් පොඩි delay එකක්
      staggerChildren: 0.15, // ළමා මූලද්‍රව්‍ය අතර පරතරය (තත්පර 0.15)
    },
  },
};

// ළමා මූලද්‍රව්‍ය සඳහා variants (fade-in සහ slide-up)
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8, // Animation එකේ දිග
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth feel
    },
  },
};

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

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleCode.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-0 pb-16 px-4 sm:px-8 md:pt-16 lg:pt-30 overflow-hidden min-h-screen flex items-center justify-center sm:items-start text-wrap">
      {/* 1. ANIMATED BACKGROUND GRID PATTERN */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:30px_30px] animate-pulse" />

      {/* 2. PULSING GLOW ORBS */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 sm:w-125 h-75 bg-cyan-500/55 blur-[140px] pointer-events-none rounded-full animate-pulse" />

      {/* Main Content Container - motion.div එකක් බවට පත් කළා */}
      <motion.div
        className="max-w-7xl mx-auto space-y-3 md:space-y-8 relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {/* Top Badge, Headline & CTAs */}
        <div className="text-center space-y-3 max-w-4xl mx-auto">
          {/* Version Badge - itemVariant එකක් යෙදුවා */}
          <motion.a
            href="#components"
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/70 border-2 border-white/20 hover:border-cyan-500/50 text-xs text-slate-300 transition-all duration-300 shadow-lg group text-wrap">
            <div className="relative flex items-center justify-center w-4 h-4">
              <motion.div
                animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute w-3 h-3 rounded-full bg-cyan-500"
              />
            </div>
            <span className="font-semibold text-white">SyncXel v1.0</span>
            <span>• React & Tailwind Architecture</span>
            <HiOutlineArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          {/* Main Headline - itemVariant එකක් යෙදුවා */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Build Modern Web Apps{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500 block sm:inline mt-1 sm:mt-0">
              10x Faster
            </span>
          </motion.h1>

          {/* Subtitle - itemVariant එකක් යෙදුවා */}
          <motion.p
            variants={itemVariants}
            className="text-slate-300/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-5 md:leading-relaxed px-2">
            Production-ready UI components for developers, and high-performance
            custom web engineering for startups and founders.
          </motion.p>

          {/* Dual Action Buttons - itemVariant එකක් යෙදුවා */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 pt-2">
            <motion.a
              href="#components"
              whileHover={{ scale: 1.03, y: -2 }} // Hover කරද්දී scale පොඩ්ඩක් වෙනස් කරමු
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-linear-to-r from-cyan-400 to-indigo-500 text-slate-950 font-bold text-sm hover:opacity-95 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20 group cursor-pointer">
              <HiOutlineSparkles className="w-4 h-4 fill-slate-950 group-hover:scale-250 group-hover:-rotate-12 duration-300" />
              <span>Explore Components</span>
              <HiOutlineArrowRight className="w-4 h-4 font-bold group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#hire"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/80 border-2 border-white/15 hover:border-cyan-400/50 text-white font-semibold text-sm hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 cursor-pointer group:">
              <HiOutlineCodeBracket className="w-4 h-4 text-cyan-400 group-hover:scale-250 group-hover:rotate-12 duration-300" />
              <span>Hire Us for Custom Project</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Hero Interactive Code & Preview Box - itemVariant එකක් යෙදුවා */}
        <motion.div
          variants={itemVariants}
          // Code block එක උඩට ගෙනියද්දී glow එකක් එන්න shadow එක animate කරමු
          whileHover={{ boxShadow: "0px 0px 30px rgba(6, 182, 212, 0.3)" }}
          transition={{ duration: 0.3 }}
          className="max-w-2xl mx-auto rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline-block">
                SyncXelComponent.jsx
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex bg-slate-800 p-1 rounded-lg border border-white/10 text-xs">
                {/* Tab Buttons - Animate Presence වලට සමාන logic එකක් activeTab state එකෙන් */}
                <button
                  type="button"
                  onClick={() => setActiveTab("preview")}
                  className={`px-3 py-1 rounded-md transition-colors relative ${
                    activeTab === "preview"
                      ? "text-cyan-400 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}>
                  Preview
                  {activeTab === "preview" && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-cyan-500/20 rounded-md"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("code")}
                  className={`px-3 py-1 rounded-md transition-colors relative ${
                    activeTab === "code"
                      ? "text-cyan-400 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}>
                  Code
                  {activeTab === "code" && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-cyan-500/20 rounded-md"
                      transition={{ duration: 0.2 }}
                    />
                  )}
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
          <div className="p-3 min-h-50 flex items-center justify-center bg-transparent relative overflow-x-auto">
            {activeTab === "preview" ? (
              <div className="text-center space-y-4">
                <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 space-y-4 max-w-sm mx-auto">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
                    Interactive UI Component
                  </span>
                  <h4 className="text-white font-bold text-base mt-0.5">
                    SyncXel Premium Glow Button
                  </h4>
                  <div className="pt-2">
                    {/* දැනට තිබුණු button එකට motion wrapper එකක් සහ hover effect එකක් දැම්මා */}
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 25px rgba(255,255,255,0.5)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 text-sm font-mono font-bold tracking-widest text-white bg-transparent border-2 border-white/80 rounded-full transition-all duration-300 cursor-pointer">
                      GET STARTED
                    </motion.button>
                  </div>
                </div>
              </div>
            ) : (
              <pre className="w-full font-mono text-xs text-cyan-300 overflow-x-auto p-2 bg-slate-900/80 rounded-lg">
                <code>{sampleCode}</code>
              </pre>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
