import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowUpRight, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

export default function ProjectsCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white px-5 py-4 dark:bg-slate-950 sm:px-8 lg:px-10">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-7 py-16 dark:border-blue-400/10 dark:from-blue-950/40 dark:via-slate-900 dark:to-indigo-950/40 sm:px-12 lg:px-16">
        <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
              <HiOutlineChatBubbleLeftRight className="text-lg" />
              Have an idea?
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              Let's build something
              <span className="text-blue-600 dark:text-blue-400">
                {" "}
                meaningful.
              </span>
            </h2>

            <p className="mt-5 text-base leading-tight text-slate-600 dark:text-slate-400">
              Have a project in mind? Let's discuss your idea and explore how we
              can turn it into a useful digital experience.
            </p>
          </div>

          <Link
            to="/#contact-section"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700">
            Let's Talk
            <HiArrowUpRight className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
