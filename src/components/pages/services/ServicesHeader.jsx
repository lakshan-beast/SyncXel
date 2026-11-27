import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight, HiOutlineSparkles } from "react-icons/hi";

export default function ServicesHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative px-5 sm:px-8 lg:px-12 pt-20 sm:pt-32 pb-8 sm:pb-10 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-blue-600 uppercase">
              <span className="h-px w-8 bg-blue-300" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                What We Offer
              </span>
            </span>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-3 text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl">
              Digital solutions.
              <span className="block text-blue-800 dark:text-blue-700">
                Built with purpose.
              </span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:pb-2 text-left sm:text-right">
            <p className="max-w-2xl text-sm leading-tight text-slate-500 dark:text-slate-400 sm:text-base ">
              From thoughtful interface design to responsive website
              development, we help turn ideas into meaningful digital
              experiences built around your goals.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-7 sm:justify-end">
              <a
                href="#core-services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all">
                Explore Services
                <HiArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                View Our Work
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 sm:mt-10 border-t border-slate-200 pt-5 flex flex-wrap  gap-x-8 gap-y-3 text-[11px] font-semibold tracking-wider uppercase text-slate-400/70 ">
          <span>Interface Design</span>
          <span>Website Development</span>
          <span>Custom Solutions</span>
        </div>
      </div>
    </section>
  );
}
