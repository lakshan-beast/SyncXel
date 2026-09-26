
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiOutlineTerminal,
  HiOutlineCode,
  HiOutlineCloudUpload,
  HiOutlineArrowRight,
  HiBookmark,
} from "react-icons/hi";

export default function DocsPreviewSection() {
  const features = [
    {
      icon: HiOutlineCode,
      title: "Backend Integrations",
      desc: "Instant copy-paste snippets for Formspree, EmailJS, Resend & Supabase auth.",
    },
    {
      icon: HiOutlineCloudUpload,
      title: "Vercel & SEO Guides",
      desc: "Fix SPA 404 errors, environment setup, and OpenGraph social meta tags.",
    },
    {
      icon: HiOutlineTerminal,
      title: "Git & Terminal Troubleshooting",
      desc: "Conventional commits cheat-sheet and immediate fixes for common Git push bugs.",
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 scroll-mt-20 text-slate-900 border-t-2 border-slate-200">
      <div className="relative z-10 space-y-12 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3">
          <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
            <span className="font-mono text-xs text-slate-400 block">
              // free_developer_ecosystem
            </span>

            <div className="inline-flex items-center w-fit space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono shadow-xs">
              <HiBookmark className="w-3.5 h-3.5 text-slate-600" />
              <span>ecosystem_overview.config</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-left sm:text-center pt-1 sm:pt-3">
            Everything You Need To Build & Deploy Faster.
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-tight max-w-3xl text-left sm:text-center mx-auto font-baloo">
            SyncXel isn't just a component library. Access our curated knowledge
            hub to solve frontend challenges in seconds.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-white px-8 sm:px-7 py-6 rounded-2xl border border-slate-200/50 hover:border-slate-300/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center mb-4 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="font-mono text-[10px] text-slate-400 block mb-2">
                    // module_0{index + 1}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 leading-tight font-baloo">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center">
          <Link to="/docs" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="group inline-flex items-center space-x-3 px-6 py-3.5 bg-slate-900 border border-slate-900 text-white font-mono text-xs sm:text-sm font-bold rounded-xl hover:bg-slate-800 shadow-xs cursor-pointer transition-all">
              <span>const docs = () =&gt; view_ecosystem();</span>
              <HiOutlineArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
