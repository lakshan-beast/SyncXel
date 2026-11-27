import { motion, useReducedMotion } from "framer-motion";
import { HiArrowUpRight, HiOutlineSquares2X2 } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function ProjectsHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative px-5 sm:px-8 lg:px-12 pt-20 sm:pt-32 pb-8 sm:pb-10 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-blue-600 uppercase">
              <span className="h-px w-8 bg-blue-300" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                Selected Work
              </span>
            </span>

            <motion.h1
                          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className="mt-3 text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl">
              Ideas turned into
              <span className="block text-blue-800 dark:text-blue-700">
                digital experiences.
              </span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:pb-2 text-left sm:text-right">
            <p className="max-w-2xl text-sm leading-tight text-slate-500 dark:text-slate-400 sm:text-base">
              A collection of client work, independent concepts and personal
              projects. Each project represents an opportunity to explore ideas,
              solve problems and create meaningful digital experiences.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-7 sm:justify-end">
              <Link
                to="/#contact-section"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all">
                Start a Project
                <HiArrowUpRight className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <span className="text-sm text-slate-500 dark:text-slate-400">
                A closer look at what we create.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
