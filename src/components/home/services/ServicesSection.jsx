import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services-section"
      className="relative isolate overflow-hidden  px-5 py-24 transition-colors duration-300 sm:px-8 lg:px-12 lg:py-32 bg-slate-50 dark:bg-slate-900/80">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-40 -z-10 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-indigo-500/[0.06] blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <ServicesHeader />

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}>
          <ServicesGrid />
        </motion.div>

        {/* Bottom Note */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">
          <p className="text-xs leading-tight text-slate-500 dark:text-slate-500">
            Have a different idea? Let's discuss what we can build together.
          </p>

          <a
            href="#contact-section"
            className="w-fit text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
            Tell us about your project  ↗
          </a>
        </div>
      </div>
    </section>
  );
}
