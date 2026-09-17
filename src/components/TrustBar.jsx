
import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineChartBar,
  HiOutlineCodeBracket,
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineClock,
} from "react-icons/hi2";

export default function MetricsSection() {
  const stats = [
    {
      id: 1,
      icon: <HiOutlineCodeBracket className="w-5 h-5 text-cyan-400" />,
      value: "10k+",
      label: "Code Snippets Delivered",
    },
    {
      id: 2,
      icon: <HiOutlineBolt className="w-5 h-5 text-amber-400" />,
      value: "100/100",
      label: "Lighthouse Performance",
    },
    {
      id: 3,
      icon: <HiOutlineShieldCheck className="w-5 h-5 text-emerald-400" />,
      value: "100%",
      label: "Production-Ready Standard",
    },
    {
      id: 4,
      icon: <HiOutlineClock className="w-5 h-5 text-purple-400" />,
      value: "24/7",
      label: "Agile Client Delivery",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Background Neon Accent Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-indigo-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold shadow-sm">
            <HiOutlineChartBar className="w-4 h-4" />
            <span>Proven Impact & Metrics</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Driven by Numbers, Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
              Excellence
            </span>
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Real metrics that reflect our commitment to speed, code quality, and
            reliability.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative p-6 sm:p-7 rounded-3xl bg-[#161B26]/80 border border-white/10 hover:border-cyan-500/40 hover:bg-[#1c2230] text-center sm:text-left space-y-4 backdrop-blur-xl shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-xs font-mono text-cyan-400/80 bg-cyan-500/5 px-2 py-1 rounded-lg border border-cyan-500/10">
                  Verified
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 tracking-tight">
                  {item.value}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  {item.label}
                </p>
              </div>

              {/* Bottom Subtle Line Glow on Hover */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/0 group-hover:via-cyan-400 to-transparent transition-all duration-500 rounded-b-3xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
