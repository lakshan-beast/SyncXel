import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineCodeBracket,
  HiOutlinePaintBrush,
  HiOutlineRocketLaunch,
  HiBookmark,
} from "react-icons/hi2";
import { HiOutlineSparkles } from "react-icons/hi";
import { GrDiamond } from "react-icons/gr";
import { VscPackage } from "react-icons/vsc";

export default function ServicesSection() {
  const services = [
    {
      icon: HiOutlineCodeBracket,
      title: "Custom Web Applications",
      description:
        "High-performance, scalable web apps built with React, Next.js, and Tailwind CSS tailored to your business needs.",
      tags: ["React", "Next.js", "Tailwind CSS", "REST APIs"],
    },
    {
      icon: HiOutlinePaintBrush,
      title: "Figma to Responsive Code",
      description:
        "Pixel-perfect conversion of your Figma or Adobe XD designs into clean, modular, and responsive production code.",
      tags: ["Figma", "Pixel-Perfect", "Clean Code", "Responsive UI"],
    },
    {
      icon: HiOutlineRocketLaunch,
      title: "Landing Pages & Re-design",
      description:
        "Modern, high-converting landing pages optimized for maximum performance, SEO, and interactive user experiences.",
      tags: ["High Conversion", "SEO Ready", "Fast Load", "Micro-interactions"],
    },
    {
      icon: VscPackage,
      title: "Premium UI Packs & Templates",
      description:
        "Exquisite frontend-only templates and premium UI packs across 8 categories including travel, dashboard, and gaming.",
      tags: ["Framer Motion", "UI Packs", "Website Templates", "Lemon Squeezy"],
    },
    {
      icon: GrDiamond,
      title: "Modular Free Components",
      description:
        "A growing library of 70-80+ free essential UI components like buttons, modals, and inputs with clean copy-paste code.",
      tags: [
        "Free Components",
        "Copy-Paste Code",
        "Tailwind CSS",
        "Desktop Ready",
      ],
    },
    {
      icon: HiOutlineSparkles,
      title: "SyncXelUI AI Generation",
      description:
        "An innovative, next-generation AI-powered UI layout generator tool designed to automate and accelerate your development workflow.",
      tags: ["AI Generator", "Automation", "Smart Layouts", "Next-Gen UI"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
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
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 text-slate-900 border-t-2 border-slate-200">
      <div className="relative z-10 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left space-y-3">
          <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs text-slate-400 block">
              // core_services_modules
            </motion.span>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center w-fit space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono shadow-xs">
              <HiBookmark className="w-3.5 h-3.5 text-slate-600" />
              <span>services_module.config</span>
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-left sm:text-center pt-1 sm:pt-3">
            Turn Your Web Ideas Into{" "}
            <span className="text-slate-900">Production Reality</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm sm:text-base text-slate-500 leading-tight max-w-3xl mx-auto font-baloo text-left sm:text-center">
            Need a custom web application or modern landing page? I partner with
            founders, startups, and businesses to build high-converting web
            solutions.
          </motion.p>
        </motion.div>

        {/* Services Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {services.map((item, index) => {
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

                  <motion.span
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-mono text-[10px] text-slate-400 block mb-2">
                    // service_0{index + 1}
                  </motion.span>

                  <motion.h3
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-base sm:text-lg font-bold text-slate-950 mb-2 tracking-tight">
                    {item.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-xs sm:text-sm text-slate-500 leading-tight font-baloo">
                    {item.description}
                  </motion.p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-100">
                  {item.tags.map((tag, tIndx) => (
                    <motion.span
                      initial={{ opacity: 0.3, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                      key={tIndx}
                      className="px-3 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-baloo text-slate-700 font-medium">
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
