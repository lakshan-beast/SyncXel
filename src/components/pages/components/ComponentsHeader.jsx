import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HiGift } from "react-icons/hi";
import { HiArrowLeft, HiCheckCircle } from "react-icons/hi2";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

const features = [
  "React & Tailwind CSS",
  "Framer Motion Support",
  "Copy & Paste Ready",
  "Interactive Live Preview",
  "Fully Responsive Layouts",
  "Reusable Components",
];

export default function HubHeader() {
  const shouldReduceMotion = useReducedMotion();

  const currentDate = new Date();
  const monthName = currentDate.toLocaleString("en-US", {
    month: "long",
  });
  const currentYear = currentDate.getFullYear();

  return (
    <section className="mb-10 font-baloo max-w-7xl mx-auto mt-32">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="space-y-4">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3">
            <span className="h-px w-8 bg-blue-600" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Free Components Library
            </span>
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Free React{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Components.
            </span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-sm leading-tight text-slate-500 dark:text-slate-400 sm:text-base">
            Explore a collection of reusable React components built with
            Tailwind CSS and Framer Motion. Preview interactive elements,
            explore their code, and copy the snippets to use in your own
            projects.
          </motion.p>

          {/* METADATA */}
          <div className="flex flex-wrap gap-2 pt-1">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <MdOutlineTipsAndUpdates className="h-4 w-4 text-blue-500" />
              <span>
                Last Updated:{" "}
                <strong className="text-slate-900 dark:text-white">
                  {monthName} {currentYear}
                </strong>
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <HiGift className="h-4 w-4 text-blue-500" />
              <span>Free for Personal & Client Projects</span>
            </div>
          </div>

          {/* BACK BUTTON */}
          <a
            href="/"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:gap-3 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-500 dark:hover:text-white">
            <HiArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </a>
        </div>

        {/* RIGHT FEATURE LIST */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-2 sm:gap-3 lg:pb-1">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-3 text-xs font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 sm:px-4">
              <HiCheckCircle className="h-4 w-4 shrink-0 text-blue-500" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
