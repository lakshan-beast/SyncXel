import { motion, useReducedMotion } from "framer-motion";
import { HiArrowUpRight, HiOutlineSquares2X2 } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function ProjectsHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 left-1/4 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-end gap-12 px-5 py-24 sm:px-8 md:grid-cols-2 md:gap-16 md:py-32 lg:px-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
            <HiOutlineSquares2X2 className="text-base" />
            Selected Work
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            Ideas turned into
            <span className="mt-2 block bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              digital experiences.
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-xl md:justify-self-end">
          <p className="text-base leading-tight text-slate-600 sm:text-lg dark:text-slate-400">
            A collection of client work, independent concepts and personal
            projects. Each project represents an opportunity to explore ideas,
            solve problems and create meaningful digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/#contact-section"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">
              Start a Project
              <HiArrowUpRight className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <span className="text-sm text-slate-500 dark:text-slate-400">
              A closer look at what we create.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
