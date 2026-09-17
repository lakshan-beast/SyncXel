import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineSparkles,
  HiOutlineCodeBracket,
  HiOutlineArrowRight,
} from "react-icons/hi2";

import TerminalBox from "./TerminalBox";
import TechStack from "./TeckStack";

// --- Framer Motion Variants ---
// container variants (stagger children )
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

// variants (fade-in සහ slide-up)
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative pt-0 pb-16 px-4 sm:px-8 md:pt-16 lg:pt-40 overflow-hidden min-h-screen flex items-center justify-center sm:items-start text-wrap">
      {/* 1. ANIMATED BACKGROUND GRID PATTERN */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:30px_30px] animate-pulse" />

      {/* 2. PULSING GLOW ORBS */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-95 sm:w-125 h-75 bg-cyan-500/85 blur-[130px] pointer-events-none rounded-full animate-pulse" />

      {/* Main Content Container - motion.div  */}
      <motion.div
        className="max-w-7xl mx-auto space-y-3 md:space-y-28 relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {/* Top Badge, Headline & CTAs */}
        <div className="text-center space-y-3 max-w-4xl mx-auto">
          {/* Version Badge - itemVariant */}
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
            <span> • Free UI, Paid Templates & Dev Guides</span>
            <HiOutlineArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          {/* Main Headline - itemVariant */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Build Modern Web Apps{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500 block sm:inline mt-1 sm:mt-0">
              10x Faster
            </span>
          </motion.h1>

          {/* Subtitle - itemVariant */}
          <motion.p
            variants={itemVariants}
            className="text-slate-300/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-5 md:leading-tight px-2">
            Hand-crafted React & Tailwind components, ready-to-use templates,
            step-by-step deployment guides, and custom web development
            services—all in one place.
          </motion.p>

          {/* Dual Action Buttons - itemVariant */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 pt-2">
            <motion.a
              href="#components"
              whileHover={{ scale: 1.03, y: -2 }} // Hover කරද්දී scale පොඩ්ඩක් වෙනස් කරමු
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-linear-to-r from-cyan-400 to-indigo-500 text-slate-950 font-bold text-sm hover:opacity-95 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20 group cursor-pointer">
              <HiOutlineSparkles className="w-5 h-5 mr-2 fill-slate-950 group-hover:scale-180 group-hover:-rotate-10 group-hover:mr-3 duration-300" />
              <span>Explore Components</span>
              <HiOutlineArrowRight className="w-4 h-4 font-bold group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#hire"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/80 border-2 border-white/15 hover:border-cyan-400/50 text-white font-semibold text-sm hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 cursor-pointer group">
              <HiOutlineCodeBracket className="w-4 h-4 text-cyan-400 group-hover:scale-[2.2] group-hover:-rotate-8 group-hover:mr-5 duration-300" />
              <span>Hire Us for Custom Project</span>
            </motion.a>
          </motion.div>
        </div>

        <TechStack />
      </motion.div>
    </section>
  );
}
