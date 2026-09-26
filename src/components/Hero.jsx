
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
    <section className="relative pt-26 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex flex-col justify-center bg-white text-slate-900">
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
              <span className="text-slate-500 md:hidden sm:inline">
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