import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function ServiceCard({ service, index }) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = service.icon;

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: shouldReduceMotion ? 0 : index * 0.08,
      }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-500 sm:p-8 ${
        service.featured
          ? "border-slate-800 bg-slate-950/90 text-white dark:border-slate-800 dark:bg-slate-800"
          : "border-slate-200 bg-white text-slate-900 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-950/90 dark:text-white dark:hover:border-blue-900 dark:hover:shadow-black/20"
      }`}>
      {service.featured && (
        <>
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:35px_35px]" />
        </>
      )}

      <div className="relative z-10 flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
            service.featured
              ? "bg-blue-500/15 text-blue-400"
              : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          }`}>
          <Icon className="text-2xl" />
        </div>

        <span
          className={`font-mono text-sm ${
            service.featured
              ? "text-slate-500"
              : "text-slate-400 dark:text-slate-600"
          }`}>
          / {service.number}
        </span>
      </div>

      <div className="relative z-10 mt-6 flex-1">
        <h3 className="max-w-sm text-2xl font-semibold leading-snug tracking-tight sm:text-[1.5rem]">
          {service.title}
        </h3>

        <p
          className={`mt-2 max-w-lg text-sm leading-tight ${
            service.featured
              ? "text-slate-400"
              : "text-slate-600 dark:text-slate-400"
          }`}>
          {service.description}
        </p>
      </div>

      <div className="relative z-10 mt-3 flex flex-wrap gap-1">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full border px-3 py-1.5 text-[11px] font-medium ${
              service.featured
                ? "border-slate-700 bg-white/[0.04] text-slate-300"
                : "border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-800 dark:bg-white/[0.03] dark:text-slate-400"
            }`}>
            {tag}
          </span>
        ))}
      </div>

      <div
        className={`relative z-10 mt-3 border-t pt-3 ${
          service.featured
            ? "border-slate-800"
            : "border-slate-200 dark:border-slate-800"
        }`}>
        <a
          href="#contact-section"
          className={`group/link inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
            service.featured
              ? "text-white hover:text-blue-400"
              : "text-slate-800 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
          }`}>
          Discuss Project
          <HiOutlineArrowUpRight className="text-base transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
        </a>
      </div>
    </motion.article>
  );
}
