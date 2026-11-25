
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function PolicySection({
  number,
  title,
  description,
  children,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10 dark:border-slate-800 dark:bg-slate-900/70"
    >
      <div className="mb-8 border-b border-slate-100 pb-7 dark:border-slate-800">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-600 dark:text-blue-400">
            {number}
          </span>

          <span className="h-px w-8 bg-blue-500/60" />
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          {title}
        </h2>

        {description && (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
            {description}
          </p>
        )}
      </div>

      <div className="space-y-8">{children}</div>
    </motion.section>
  );
}

export function PolicyItem({ title, children }) {
  return (
    <div>
      <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>

      <div className="text-sm leading-7 text-slate-600 dark:text-slate-400">
        {children}
      </div>
    </div>
  );
}
