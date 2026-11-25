
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight, HiOutlineSparkles } from "react-icons/hi";

export default function ServicesHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative px-5 sm:px-8 lg:px-12 pt-20 sm:pt-28 pb-16 sm:pb-20 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-blue-600 uppercase">
              <HiOutlineSparkles className="w-4 h-4" />
              What We Offer
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08] mt-5">
              Digital solutions.
              <span className="block text-blue-600 mt-2">
                Built with purpose.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:pb-2"
          >
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl">
              From thoughtful interface design to responsive website
              development, we help turn ideas into meaningful digital
              experiences built around your goals.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-7">
              <a
                href="#core-services"
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all"
              >
                Explore Services
                <HiArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                View Our Work
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 sm:mt-20 border-t border-slate-200 pt-5 flex flex-wrap gap-x-8 gap-y-3 text-[11px] font-semibold tracking-wider uppercase text-slate-400">
          <span>Interface Design</span>
          <span>Website Development</span>
          <span>Custom Solutions</span>
        </div>
      </div>
    </section>
  );
}
