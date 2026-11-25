import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineBookOpen,
//   HiOutlineCode,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";
import { HiOutlineCodeBracket } from "react-icons/hi2";

const highlights = [
  {
    number: "01",
    title: "Getting Started",
    description:
      "Step-by-step setup guides to help you get your projects running.",
    icon: HiOutlineBookOpen,
  },
  {
    number: "02",
    title: "Practical Code Guides",
    description:
      "Understand frontend techniques, integrations, and reusable code.",
    icon: HiOutlineCodeBracket,
  },
  {
    number: "03",
    title: "Deployment & Beyond",
    description:
      "Learn about Git, hosting, SEO, and preparing projects for launch.",
    icon: HiOutlineRocketLaunch,
  },
];

export default function DocsHighlights() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {highlights.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.number}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: shouldReduceMotion ? 0 : index * 0.1,
            }}
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-950/90 dark:hover:border-blue-900 dark:hover:shadow-black/20">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-500">
                <Icon className="text-xl" />
              </div>

              <span className="font-mono text-xs text-slate-400 dark:text-slate-600">
                / {item.number}
              </span>
            </div>

            <h3 className="mt-6 text-base font-semibold text-slate-900 dark:text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-xs leading-tight text-slate-600 dark:text-slate-400">
              {item.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
