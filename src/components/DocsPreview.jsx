import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiOutlineTerminal,
  HiOutlineCode,
  HiOutlineCloudUpload,
  HiOutlineSparkles,
  HiOutlineArrowRight,
  HiBookmark,
} from "react-icons/hi";

export default function DocsPreviewSection() {
  const features = [
    {
      icon: HiOutlineCode,
      title: "Backend Integrations",
      desc: "Instant copy-paste snippets for Formspree, EmailJS, Resend & Supabase auth.",
      glow: "hover:shadow-cyan-500/10",
    },
    {
      icon: HiOutlineCloudUpload,
      title: "Vercel & SEO Guides",
      desc: "Fix SPA 404 errors, environment setup, and OpenGraph social meta tags.",
      glow: "hover:shadow-indigo-500/10",
    },
    {
      icon: HiOutlineTerminal,
      title: "Git & Terminal Troubleshooting",
      desc: "Conventional commits cheat-sheet and immediate fixes for common Git push bugs.",
      glow: "hover:shadow-purple-500/10",
    },
    // {
    //   icon: HiOutlineSparkles,
    //   title: "Custom Hooks & Motion",
    //   desc: "Reusable React custom hooks (useDebounce, useLocalStorage) and Tailwind animation effects.",
    //   glow: "hover:shadow-pink-500/5",
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-10 px-4 sm:px-8 max-w-7xl mx-auto space-y-10 scroll-mt-0 text-slate-900">
      {/* <section className="py-10 px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto relative overflow-hidden bg-white text-slate-900"> */}
      {/* Subtle Grid Background */}
      {/* <div className="absolute inset-0 opacity-0 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px]" /> */}

      <div className="text-left space-y-2 p-2 sm:py-8 max-w-6xl mx-auto">
        {/* Header (Left Aligned DevSync Style) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12 space-y-3">
          <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
            <span className="font-mono text-xs text-slate-500/50 mb-0 block">
              // free_developer_ecosystem
            </span>

            <div className="inline-flex items-center w-fit space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono shadow-xs">
              <HiBookmark className="w-3.5 h-3.5 text-slate-600" />
              <span>ecosystem_overview.config</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Everything You Need To Build & Deploy Faster.
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-tight max-w-6xl">
            Syncxel isn't just a component library. Access our curated knowledge
            hub to solve frontend challenges in seconds.
          </p>
        </motion.div>

        {/* Feature Grid with Framer Motion Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 lg:gap-2 mb-12">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-white p-8 sm:p-7 rounded-2xl border border-slate-200/10 hover:border-slate-200/20 transition-all duration-300 shadow-xs hover:shadow-md w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center mb-4 border border-slate-300 group-hover:bg-slate-600 group-hover:text-white group-hover:-rotate-6 group-hover:scale-125 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="font-mono text-[10px] text-slate-400 block mb-0">
                    // module_0{index + 1}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 leading-tight">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button with Glitch / Tactile Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-left mx-auto w-fit">
          <Link to="/docs">
            <motion.button
              whileHover={{ skewX: [-3, 3, -1, 0], scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="group inline-flex items-center space-x-5 px-6 py-3.5 bg-slate-800 border border-slate-800 text-white font-mono text-xs sm:text-md font-bold rounded-xl hover:bg-slate-800 shadow-sm cursor-pointer transition-all mx-auto">
              <span className="hidden lg:inline text-xs tracking-tight">
                const docs = () =&gt; view_ecosystem();
              </span>
              {/* Mobile view: Clean text */}
              <span className="lg:hidden text-xs">view_ecosystem()</span>
              <HiOutlineArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
