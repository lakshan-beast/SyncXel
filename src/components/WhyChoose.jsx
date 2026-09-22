import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineBolt,
  HiOutlinePaintBrush,
  HiOutlineDevicePhoneMobile,
  HiOutlineCodeBracketSquare,
  HiOutlineShieldCheck,
  HiOutlineRocketLaunch,
  HiBookmark,
} from "react-icons/hi2";

export default function Features() {
  const features = [
    {
      icon: HiOutlineBolt,
      title: "Ultra-Fast Performance",
      description:
        "Zero heavy bloatware. Built with highly optimized Tailwind CSS and React for lightning-fast page loading.",
    },
    {
      icon: HiOutlinePaintBrush,
      title: "Modern Minimalist Aesthetics",
      description:
        "Designed specifically for tech startups and modern developers with high-contrast slate and clean layout structures.",
    },
    {
      icon: HiOutlineDevicePhoneMobile,
      title: "100% Fully Responsive",
      description:
        "Pixel-perfect responsiveness rigorously tested on mobile, tablet, and desktop viewports.",
    },
    {
      icon: HiOutlineCodeBracketSquare,
      title: "Clean Production Code",
      description:
        "Modular, well-structured React code crafted for seamless copy-pasting and instant integration.",
    },
    {
      icon: HiOutlineShieldCheck,
      title: "SEO & Accessibility Ready",
      description:
        "Follows web accessibility (WCAG) standards and SEO best practices to ensure high search ranking.",
    },
    {
      icon: HiOutlineRocketLaunch,
      title: "Agile Client Delivery",
      description:
        "Rapid turnaround times, transparent weekly progress demos, and dedicated post-launch engineering support.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 text-slate-900 border-t-2 border-slate-200">
      <div className="relative z-10 space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left space-y-3">
          <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
            <span className="font-mono text-xs text-slate-400 block">
              // core_engineering_standards
            </span>

            <div className="inline-flex items-center w-fit space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono shadow-xs">
              <HiBookmark className="w-3.5 h-3.5 text-slate-600" />
              <span>features_module.config</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-left sm:text-center pt-1 sm:pt-3">
            Engineered for{" "}
            <span className="text-slate-900/80">
              Speed, Quality & Precision
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-tight max-w-3xl mx-auto font-baloo text-left sm:text-center">
            Whether you are using our pre-built component blocks or hiring us
            for custom development, we maintain the highest engineering
            standards.
          </p>
        </motion.div>

        {/* Features Grid with Optimized Gaps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-white px-8 sm:px-7 py-6 rounded-3xl lg:rounded-2xl border border-slate-200/50 hover:border-slate-300/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-2 border border-slate-200 group-hover:bg-slate-700/50 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5 font-bold" />
                  </div>

                  <span className="font-mono text-[10px] text-slate-400 block mb-2">
                    // feature_0{idx + 1}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2 tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="px-2 text-xs sm:text-sm text-slate-500 leading-tight font-baloo">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-baloo text-slate-500 font-bold">
                  <span className="group-hover:text-slate-900 transition-colors">
                    SyncXel Standard
                  </span>
                  <span className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-slate-900 transition-colors animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
