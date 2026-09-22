// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   HiOutlineSparkles,
//   HiOutlineCodeBracket,
//   HiOutlineArrowRight,
// } from "react-icons/hi2";

// import TerminalBox from "./TerminalBox";
// import TechStack from "./TeckStack";

// // --- Framer Motion Variants ---
// // container variants (stagger children )
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delayChildren: 0.2,
//       staggerChildren: 0.15,
//     },
//   },
// };

// // variants (fade-in සහ slide-up)
// const itemVariants = {
//   hidden: { y: 30, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function Hero() {
//   return (
//     <section className="relative pt-0 pb-16 px-4 sm:px-8 md:pt-16 lg:pt-40 overflow-hidden min-h-screen flex items-center justify-center sm:items-start text-wrap">
//       {/* 1. ANIMATED BACKGROUND GRID PATTERN */}
//       <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:30px_30px] animate-pulse" />

//       {/* 2. PULSING GLOW ORBS */}
//       <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-95 sm:w-125 h-75 bg-cyan-500/85 blur-[130px] pointer-events-none rounded-full animate-pulse" />

//       {/* Main Content Container - motion.div  */}
//       <motion.div
//         className="max-w-7xl mx-auto space-y-3 md:space-y-28 relative z-10 w-full"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible">
//         {/* Top Badge, Headline & CTAs */}
//         <div className="text-center space-y-3 max-w-4xl mx-auto">
//           {/* Version Badge - itemVariant */}
//           <motion.a
//             href="#components"
//             variants={itemVariants}
//             className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/70 border-2 border-white/20 hover:border-cyan-500/50 text-xs text-slate-300 transition-all duration-300 shadow-lg group text-wrap">
//             <div className="relative flex items-center justify-center w-4 h-4">
//               <motion.div
//                 animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
//                 transition={{ repeat: Infinity, duration: 1.5 }}
//                 className="absolute w-3 h-3 rounded-full bg-cyan-500"
//               />
//             </div>
//             <span className="font-semibold text-white">SyncXel v1.0</span>
//             <span> • Free UI, Paid Templates & Dev Guides</span>
//             <HiOutlineArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
//           </motion.a>

//           {/* Main Headline - itemVariant */}
//           <motion.h1
//             variants={itemVariants}
//             className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
//             Build Modern Web Apps{" "}
//             <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500 block sm:inline mt-1 sm:mt-0">
//               10x Faster
//             </span>
//           </motion.h1>

//           {/* Subtitle - itemVariant */}
//           <motion.p
//             variants={itemVariants}
//             className="text-slate-300/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-5 md:leading-tight px-2">
//             Hand-crafted React & Tailwind components, ready-to-use templates,
//             step-by-step deployment guides, and custom web development
//             services—all in one place.
//           </motion.p>

//           {/* Dual Action Buttons - itemVariant */}
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 pt-2">
//             <motion.a
//               href="#components"
//               whileHover={{ scale: 1.03, y: -2 }} // Hover කරද්දී scale පොඩ්ඩක් වෙනස් කරමු
//               whileTap={{ scale: 0.97 }}
//               transition={{ type: "spring", stiffness: 400 }}
//               className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-linear-to-r from-cyan-400 to-indigo-500 text-slate-950 font-bold text-sm hover:opacity-95 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20 group cursor-pointer">
//               <HiOutlineSparkles className="w-5 h-5 mr-2 fill-slate-950 group-hover:scale-180 group-hover:-rotate-10 group-hover:mr-3 duration-300" />
//               <span>Explore Components</span>
//               <HiOutlineArrowRight className="w-4 h-4 font-bold group-hover:translate-x-1 transition-transform" />
//             </motion.a>

//             <motion.a
//               href="#hire"
//               whileHover={{ scale: 1.03, y: -2 }}
//               whileTap={{ scale: 0.97 }}
//               transition={{ type: "spring", stiffness: 400 }}
//               className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/80 border-2 border-white/15 hover:border-cyan-400/50 text-white font-semibold text-sm hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 cursor-pointer group">
//               <HiOutlineCodeBracket className="w-4 h-4 text-cyan-400 group-hover:scale-[2.2] group-hover:-rotate-8 group-hover:mr-5 duration-300" />
//               <span>Hire Us for Custom Project</span>
//             </motion.a>
//           </motion.div>
//         </div>

//         <TechStack />
//       </motion.div>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   HiOutlineSparkles,
//   HiOutlineCodeBracket,
//   HiOutlineArrowRight,
// } from "react-icons/hi2";

// import TerminalBox from "../../old version/codes/TerminalBox";
// import TechStack from "./TeckStack";

// // --- Framer Motion Variants ---
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delayChildren: 0.2,
//       staggerChildren: 0.15,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 30, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function Hero() {
//   return (
//     <section className="relative pt-0 pb-2 px-4 py-0 sm:px-8 md:pt-4 lg:pt-30 overflow-hidden min-h-screen flex items-center justify-center sm:items-start text-wrap bg-white text-slate-900">
//       {/* 1. SUBTLE GRID BACKGROUND (DevSync Style)
//       <div className="absolute inset-0 opacity-0 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px]" />
//       {/* // උදාහරණයක් විදිහට Subtle Dot Grid එකක් දානවා නම්: */}
//       {/* <div className="min-h-screen bg-white bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] space-y-5 font-baloo p-4 sm:p-8"></div> */} 
//       {/* Main Content Container */}
//       <motion.div
//         className="max-w-7xl mx-auto space-y-0 md:space-y-10 lg:space-y-20 relative z-10 w-full"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible">
//         {/* Content Block (Left Aligned) */}
//         <div className="space-y-5 max-w-6xl mx-auto">
//           {/* Section 1: Version Badge & Comment */}
//           <motion.div variants={itemVariants} className="text-left">
//             <span className="font-mono text-xs text-slate-500/50 block mb-1">
//               // project_status_and_updates
//             </span>
//             <a
//               href="#components"
//               className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-4xl bg-slate-100 border border-slate-300 hover:border-slate-400 text-xs text-slate-700 transition-all shadow-xs group">
//               <span className="w-2 h-2 rounded-full bg-slate-900 animate-ping" />
//               <span className="font-semibold text-slate-900">SyncXel v2.0</span>
//               <span className="text-slate-500">
//                 {" "}
//                 • Free UI, Paid Templates & Dev Guides
//               </span>
//               <HiOutlineArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-slate-600" />
//             </a>
//           </motion.div>

//           {/* Section 2: Main Headline & Comment */}
//           <motion.div variants={itemVariants} className="space-y-0 text-left">
//             <span className="font-mono text-xs text-slate-500/50 block">
//               // primary_headline
//             </span>
//             <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.1]">
//               Build Modern Web Apps <br className="hidden sm:inline" />
//               <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-200 to-slate-700 block sm:inline mt-1 sm:mt-0">
//                 10x Faster
//               </span>
//             </h1>
//           </motion.div>

//           {/* Section 3: Description & Comment */}
//           <motion.div
//             variants={itemVariants}
//             className="space-y-1 text-left max-w-3xl">
//             <span className="font-mono text-xs text-slate-500/50 block">
//               // project_description
//             </span>
//             <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-tight">
//               Hand-crafted React & Tailwind components, ready-to-use templates,
//               step-by-step deployment guides, and custom web development
//               services—all in one place.
//             </p>
//           </motion.div>

//           {/* Section 4: Call To Actions & Comment */}
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col sm:items-start justify-start gap-1.5 text-left">
//             <span className="font-mono text-xs text-slate-500/50 block w-full">
//               // cta_buttons
//             </span>
//             {/* Button 1: Explore Components */}
//             <motion.a
//               href="#components"
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.92, y: 1 }}
//               transition={{ type: "spring", stiffness: 400, damping: 15 }}
//               className="w-80 lg:w-90 h-12 px-8 rounded-4xl bg-slate-900 text-white font-medium text-base  hover:bg-slate-800 transition-all flex items-center justify-between shadow-sm group cursor-pointer font-baloo">
//               <div className="flex items-center space-x-4">
//                 <HiOutlineSparkles className="w-5 h-5 text-slate-300 group-hover:-rotate-12 group-hover:scale-125 transition-transform shrink-0 duration-300" />
//                 {/* Desktop view: Code style */}
//                 <span className="hidden lg:inline text-slate-200 text-md tracking-tight">
//                   return explore_components();
//                 </span>
//                 {/* Mobile view: Clean text */}
//                 <span className="lg:hidden text-xs">Explore Components</span>
//               </div>

//               <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-400 shrink-0" />
//             </motion.a>

//             {/* Button 2: Hire Us */}
//             <motion.a
//               href="#hire"
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.92, y: 1 }}
//               transition={{ type: "spring", stiffness: 400, damping: 15 }}
//               className="w-80 lg:w-90 h-12 px-8 rounded-4xl bg-white border border-slate-300 hover:border-slate-400 text-slate-900 font-medium text-sm md:text-base  hover:bg-slate-50 transition-all flex items-center justify-between cursor-pointer group font-baloo">
//               <div className="flex items-center space-x-2">
//                 <HiOutlineCodeBracket className="w-5 h-5 text-slate-700 group-hover:scale-125 group-hover:-rotate-16 transition-transform shrink-0 duration-300" />

//                 {/* Desktop view: Code style */}
//                 <span className="hidden lg:inline text-xs tracking-tight">
//                   const hire = () =&gt; custom_dev();
//                 </span>
//                 {/* Mobile view: Clean text */}
//                 <span className="lg:hidden text-xs">
//                   Hire Us for Custom Project
//                 </span>
//               </div>

//               <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-400 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
//             </motion.a>
//           </motion.div>
//         </div>

//         <TechStack />
//       </motion.div>
//     </section>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineSparkles,
  HiOutlineCodeBracket,
  HiOutlineArrowRight,
} from "react-icons/hi2";

import TechStack from "./TeckStack";

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex flex-col justify-center bg-white text-slate-900">
      {/* Main Content Container */}
      <motion.div
        className="max-w-7xl mx-auto space-y-6 sm:space-y-18 lg:space-y-28 relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        
        {/* Content Block */}
        <div className="space-y-6 max-w-6xl mx-auto">
          
          {/* Section 1: Version Badge */}
          <motion.div variants={itemVariants} className="text-left">
            <span className="font-mono text-xs text-slate-400 block mb-2">
              // project_status_and_updates
            </span>
            <a
              href="#components"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 hover:border-slate-300 text-xs text-slate-700 transition-all shadow-xs group w-fit">
              <span className="w-2 h-2 rounded-full bg-slate-900 animate-ping shrink-0" />
              <span className="font-semibold text-slate-900">SyncXel v2.0</span>
              <span className="text-slate-500 hidden sm:inline">
                • Free UI, Paid Templates & Dev Guides
              </span>
              <HiOutlineArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-slate-600" />
            </a>
          </motion.div>

          {/* Section 2: Main Headline */}
          <motion.div variants={itemVariants} className="space-y-2 text-left">
            <span className="font-mono text-xs text-slate-400 block">
              // primary_headline
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.1]">
              Build Modern Web Apps <br className="hidden sm:inline" />
              <span className="text-slate-700 block sm:inline mt-1 sm:mt-0">
                10x Faster
              </span>
            </h1>
          </motion.div>

          {/* Section 3: Description */}
          <motion.div
            variants={itemVariants}
            className="space-y-2 text-left max-w-3xl">
            <span className="font-mono text-xs text-slate-400 block">
              // project_description
            </span>
            <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-tight font-baloo">
              Hand-crafted React & Tailwind components, ready-to-use templates,
              step-by-step deployment guides, and custom web development
              services—all in one place.
            </p>
          </motion.div>

          {/* Section 4: Call To Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 text-left pt-2">
            
            {/* Button 1: Explore Components */}
            <motion.a
              href="#components"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="w-full sm:w-auto h-12 px-6 rounded-xl bg-slate-900 text-white font-medium text-xs sm:text-sm hover:bg-slate-800 transition-all flex items-center justify-between sm:justify-center sm:space-x-4 shadow-xs group cursor-pointer font-mono">
              <div className="flex items-center space-x-3">
                <HiOutlineSparkles className="w-4 h-4 text-slate-300 group-hover:-rotate-12 group-hover:scale-125 transition-transform shrink-0 duration-300" />
                <span className="hidden lg:inline text-slate-200 tracking-tight">
                  return explore_components();
                </span>
                <span className="lg:hidden">Explore Components</span>
              </div>
              <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-400 shrink-0 sm:ml-2" />
            </motion.a>

            {/* Button 2: Hire Us */}
            <motion.a
              href="#hire"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="w-full sm:w-auto h-12 px-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-900 font-medium text-xs sm:text-sm hover:bg-slate-50 transition-all flex items-center justify-between sm:justify-center sm:space-x-3 cursor-pointer group font-mono shadow-xs">
              <div className="flex items-center space-x-3">
                <HiOutlineCodeBracket className="w-4 h-4 text-slate-700 group-hover:scale-125 group-hover:-rotate-12 transition-transform shrink-0 duration-300" />
                <span className="hidden lg:inline tracking-tight">
                  const hire = () =&gt; custom_dev();
                </span>
                <span className="lg:hidden">Hire Us for Custom Project</span>
              </div>
              <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-400 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity sm:ml-2" />
            </motion.a>
          </motion.div>
        </div>

        {/* TechStack Component Integration */}
        <TechStack />
      </motion.div>
    </section>
  );
}