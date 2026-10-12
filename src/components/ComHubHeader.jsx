import React from "react";
import { motion } from "framer-motion";
import { HiGift } from "react-icons/hi";
import { HiArrowLeft, HiCheckCircle } from "react-icons/hi2";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

export default function HubHeader() {
  // months
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const MonthName = Months[currentMonth];

  return (
    <div className="space-y-2 mb-6 font-mono ">
      {/* HEADER & TECH SYSTEM BAR (White / Light Theme) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white border-none border-slate-50  rounded-2xl shadow-none relative overflow-hidden">
        {/* Left Column: Title, Expanded Description, Metadata & Back Button */}
        <div className="space-y-2 relative z-10 max-w-2xl">
          {/* Terminal Style Pill Badge */}
          <div className="inline-flex items-center space-x-2 px-5 py-1 rounded-full bg-white border border-slate-200/50 text-slate-500/50 text-xs font-mono shadow-xs">
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}>
              // next_gen_ui_ecosystem_V2.0
            </motion.span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Developer{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-200 to-slate-700 block sm:inline mt-1 sm:mt-0">
              Components Hub
            </span>
          </motion.h1>

          {/* Expanded Rich Description */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            className="text-slate-500 text-xs sm:text-sm leading-tight font-baloo">
            Explore a comprehensive engineering repository featuring modular,
            highly optimized React & Tailwind CSS components, interactive UI
            packs, and professional production-grade UI-Kit bundles crafted for
            modern web applications. Designed to accelerate your full-stack
            development workflow with clean copy-and-paste snippets, smooth
            Framer Motion animations, and precise architectural patterns.
          </motion.p>

          {/* Metadata & Legal Notice (Placed BEFORE Back Button) */}
          <div className="flex flex-wrap items-center gap-1 pt-1">
            {/* Last Updated */}
            <div className="text-xs text-slate-500 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 flex items-center gap-2 shadow-xs font-baloo">
              <MdOutlineTipsAndUpdates className="w-5 h-5  text-slate-900 animate-pulse" />
              <span>
                Last Updated :{" "}
                <strong className="text-slate-900">
                  {MonthName} {currentYear}
                </strong>
              </span>
            </div>

            {/* Legal / Free Usage Message */}
            <div className="bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl flex items-center gap-4 text-xs text-slate-700 shadow-xs font-baloo">
              <HiGift className="w-4 h-4 text-slate-900 shrink-0 animate-bounce" />
              <span className="animate-pulse">
                Free components can be used in personal & client projects!
              </span>
            </div>
          </div>

          {/* Back to Home Button */}
          <a
            href="/"
            className="py-2.5 px-5 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-xl transition-all text-slate-200 hover:text-white flex items-center gap-2 space-x-2 text-xs font-baloo font-medium cursor-pointer w-fit shadow-xs hover:gap-3">
            <HiArrowLeft className="w-4 h-4" />
            <span>back_to_home()</span>
          </a>
        </div>

        {/* Right Column: Feature Highlights / Badges */}
        <div className="relative z-10 flex flex-col gap-1.5 shrink-0 self-start">
          <div className="grid grid-cols-2 md:flex md:flex-col gap-1.5 font-baloo">
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs text-slate-500 flex items-center gap-2 font-medium shadow-xs">
              <HiCheckCircle className="w-4 h-4 text-slate-900" /> Tailwind CSS
              v4 Ready
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3,
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs text-slate-500 flex items-center gap-2 font-medium shadow-xs">
              <HiCheckCircle className="w-4 h-4 text-slate-900" /> Framer Motion
              Animations
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.4,
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs text-slate-500 flex items-center gap-2 font-medium shadow-xs">
              <HiCheckCircle className="w-4 h-4 text-slate-900" /> Copy & Paste
              Friendly
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs text-slate-500 flex items-center gap-2 font-medium shadow-xs">
              <HiCheckCircle className="w-4 h-4 text-slate-900" /> Fully
              Accessible (ARIA Ready)
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.6,
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs text-slate-500 flex items-center gap-2 font-medium shadow-xs">
              <HiCheckCircle className="w-4 h-4 text-slate-900" /> Fully
              Responsive Layouts
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.7,
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs text-slate-500 flex items-center gap-2 font-medium shadow-xs">
              <HiCheckCircle className="w-4 h-4 text-slate-900" /> Production
              Ready Code
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}
