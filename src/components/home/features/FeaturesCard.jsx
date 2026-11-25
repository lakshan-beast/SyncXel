import { motion, useReducedMotion } from "framer-motion";
import FeatureVisual from "./FeatureVisual";

export default function FeatureCard({ feature, index }) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = feature.icon;

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : (index % 3) * 0.08,
      }}
      className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50 sm:p-7 dark:border-slate-800 dark:bg-slate-950/90 dark:hover:border-blue-500/30 dark:hover:shadow-black/20 ${feature.size}`}>
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/0 blur-3xl transition-colors duration-500 group-hover:bg-blue-500/10" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors duration-300 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:group-hover:border-blue-500/30 dark:group-hover:bg-blue-500/10 dark:group-hover:text-blue-400">
          <Icon className="h-5 w-5" />
        </div>

        <span className="text-xs font-semibold tabular-nums text-slate-400 dark:text-slate-600">
          {feature.number}
        </span>
      </div>

      <div className="relative mt-6">
        <p className="text-[10px] font-bold tracking-[0.18em] text-blue-600 dark:text-blue-400">
          {feature.label}
        </p>

        <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-white">
          {feature.title}
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-tight text-slate-600 dark:text-slate-400">
          {feature.description}
        </p>
      </div>

      <div className="relative mt-auto">
        <FeatureVisual type={feature.visual} />
      </div>
    </motion.article>
  );
}
