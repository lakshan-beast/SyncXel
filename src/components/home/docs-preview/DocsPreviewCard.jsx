import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function DocsPreviewCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
        ease: "easeOut",
      }}>
      <Link
        to={`/docs?category=${item.id}`}
        className="group relative flex h-full flex-col overflow-hidden
        rounded-2xl border border-slate-200/80 bg-white/70 p-5
        transition-all duration-300 hover:-translate-y-1
        hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/5
        dark:border-white/10 dark:bg-slate-900/50
        dark:hover:border-blue-400/40">
        {/* Icon */}
        <div
          className="mb-5 flex h-11 w-11 items-center justify-center
          rounded-xl border border-slate-200 bg-slate-100
          text-slate-700 transition-all duration-300
          group-hover:border-blue-400/30 group-hover:bg-blue-500/10
          group-hover:text-blue-600
          dark:border-white/10 dark:bg-white/5 dark:text-slate-300
          dark:group-hover:text-blue-400">
          <Icon size={21} strokeWidth={1.7} />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3
            className="mb-2 text-base font-semibold text-slate-900
            transition-colors group-hover:text-blue-600
            dark:text-white dark:group-hover:text-blue-400">
            {item.title}
          </h3>

          <p className="text-sm leading-tight px-2  text-slate-600 dark:text-slate-400">
            {item.description}
          </p>
        </div>

        {/* Footer */}
        <div
          className="mt-2 flex items-center justify-between gap-3
          border-t border-slate-200/80 pt-4
          dark:border-white/10">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-500">
            {item.count}
          </span>

          <HiOutlineArrowNarrowRight
            size={17}
            className="shrink-0 text-slate-400 transition-all
            duration-300 group-hover:-translate-y-0.5
            group-hover:translate-x-0.5 group-hover:text-blue-500"
          />
        </div>
      </Link>
    </motion.div>
  );
}
