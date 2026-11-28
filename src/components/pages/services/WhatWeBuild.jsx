import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineDesktopComputer,
  HiOutlinePhotograph,
  HiOutlineViewGrid,
  HiOutlineCalendar,
  HiOutlineChartBar,
  //   HiArrowUpRight,
} from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";

const projectTypes = [
  {
    icon: HiOutlineBriefcase,
    title: "Business Websites",
    description:
      "Professional websites that introduce your business, services and brand to potential customers.",
    number: "01",
  },
  {
    icon: HiOutlinePhotograph,
    title: "Portfolio Websites",
    description:
      "Personal and creative portfolios designed to showcase your work, skills and achievements.",
    number: "02",
  },
  {
    icon: HiOutlineDesktopComputer,
    title: "Landing Pages",
    description:
      "Focused landing pages built to communicate an offer, highlight a product or encourage action.",
    number: "03",
  },
  {
    icon: HiOutlineViewGrid,
    title: "Admin Dashboards",
    description:
      "Organized dashboard interfaces for viewing information, managing workflows and handling daily tasks.",
    number: "04",
  },
  {
    icon: HiOutlineCalendar,
    title: "Booking Interfaces",
    description:
      "Booking and reservation experiences designed to make service selection and scheduling easier.",
    number: "05",
  },
  {
    icon: HiOutlineChartBar,
    title: "Custom Web Interfaces",
    description:
      "Tailored frontend experiences for unique ideas, products and business requirements.",
    number: "06",
  },
];

export default function WhatWeBuild() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-5 sm:px-8 lg:px-12 py-16 sm:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold tracking-[0.18em] text-blue-300 uppercase">
              Project Possibilities
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-300 mt-4">
              Ideas we can
              <span className="text-blue-700 dark:text-blue-800 block">
                {" "}
                bring to life.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-tight mt-4">
              Whether you're starting a new business or improving an existing
              digital presence, we can help shape the right frontend experience.
            </p>
          </div>

          <span className="text-sm sm:text-base font-mono text-slate-500 dark:text-slate-400 leading-tight mt-4">
            // project_types_01 — 06
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-50 dark:border-slate-800/20 rounded-2xl overflow-hidden max-w-7xl mx-auto gap-3">
          {projectTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : (index % 3) * 0.08,
                }}
                className="group min-h-55 p-6 sm:py-6 sm:px-8 border-r-2 border-b-2 border-r-slate-200/50 border-b-slate-200/50 hover:bg-slate-200/30 transition-colors duration-300 dark:border-r-slate-900/50 dark:border-b-slate-900/50 shadow-md rounded-2xl sm:rounded-tr-3xl sm:rounded-bl-3xl sm:rounded-sm">
                <div className="flex items-center justify-between">
                  <div className="relative z-10 w-10 h-10 rounded-xl  shadow-sm flex items-center justify-center bg-blue-900 text-blue-300 ">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] uppercase tracking-wider font-bold text-blue-600 mt-3">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-600 dark:text-slate-400 mt-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-tight mt-3 px-1">
                  {item.description}
                </p>

                <HiArrowUpRight className="w-4 h-4 text-slate-300 mt-5 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
