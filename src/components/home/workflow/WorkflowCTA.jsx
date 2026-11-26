import { HiOutlineArrowRight } from "react-icons/hi2";
import { motion, useReducedMotion } from "framer-motion";

export default function WorkflowCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
      className="max-w-5xl mx-auto mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-10 dark:border-slate-800/50 dark:bg-slate-950/90">
      <div className="flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-blue-600 dark:text-blue-400">
            LET'S BUILD SOMETHING
          </p>

          <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Have an idea in mind?
          </h3>

          <p className="mt-1 text-sm leading-tight text-slate-600 dark:text-slate-400">
            Explore our digital products or tell us about your next website
            project. Let's find the right direction together.
          </p>
        </div>

        <a
          href="#contact-section"
          className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white">
          Start a Conversation
          <HiOutlineArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}
