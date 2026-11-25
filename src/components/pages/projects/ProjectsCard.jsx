import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiArrowUpRight,
  HiOutlineLockClosed,
  HiOutlineGlobeAlt,
  HiOutlineBookOpen,
} from "react-icons/hi2";

const categoryStyles = {
  "Client Projects":
    "bg-violet-50 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300",
  "Concept Projects":
    "bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300",
  "Personal Projects":
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300",
};

export default function ProjectCard({ project, index = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/40 dark:hover:shadow-black/20">
      {/* Project visual */}
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-800 dark:via-slate-900 dark:to-blue-950/50">
        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-blue-500/10" />
        <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full border border-indigo-500/10" />

        <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/70 bg-white/70 text-3xl font-bold text-blue-600 shadow-xl shadow-blue-900/5 backdrop-blur dark:border-white/10 dark:bg-slate-800/80 dark:text-blue-400">
          {project.title.charAt(0)}
        </div>

        <div className="absolute left-5 top-5">
          <span
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${categoryStyles[project.category]}`}>
            {project.category}
          </span>
        </div>

        {project.status === "private" && (
          <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-slate-600 backdrop-blur dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-300">
            <HiOutlineLockClosed />
            Private
          </div>
        )}

        {project.status === "concept" && (
          <div className="absolute right-5 top-5 rounded-full border border-amber-200 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-amber-700 backdrop-blur dark:border-amber-400/20 dark:bg-slate-900/90 dark:text-amber-300">
            Concept
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-3">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
            {project.subtitle}
          </p>

          <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {project.title}
          </h3>
        </div>

        <p className="flex-1 text-sm leading-tight text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
              Live Preview
              <HiArrowUpRight className="text-base" />
            </a>
          )}

          {project.status === "private" && (
            <span className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              <HiOutlineLockClosed />
              Private Project
            </span>
          )}

          {project.category === "Personal Projects" && (
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-500/50 dark:hover:text-blue-400">
              <HiOutlineBookOpen />
              Case Study
            </Link>
          )}

          {/* {project.caseStudy && (
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-500/50 dark:hover:text-blue-400">
              <HiOutlineBookOpen />
              Case Study
            </Link>
          )} */}

          
        </div>
      </div>
    </motion.article>
  );
}
