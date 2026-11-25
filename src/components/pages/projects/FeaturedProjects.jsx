import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowUpRight, HiOutlineSparkles } from "react-icons/hi2";

export default function FeaturedProject({ project }) {
  const shouldReduceMotion = useReducedMotion();

  if (!project) return null;

  return (
    <section className="border-y border-slate-200 bg-slate-50 py-24 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
              <HiOutlineSparkles className="text-base" />
              Featured Project
            </div>

            <h2 className="mt-7 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              {project.title}
            </h2>

            <p className="mt-3 text-sm font-medium text-blue-600 dark:text-blue-400">
              {project.subtitle}
            </p>

            <p className="mt-6 max-w-xl text-base leading-tight text-slate-600 dark:text-slate-400">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                  Explore Project
                  <HiArrowUpRight />
                </a>
              )}

              {project.caseStudy && (
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400">
                  Read Case Study
                  <HiArrowUpRight />
                </Link>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/15 to-indigo-500/15 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-blue-50 to-indigo-100 p-8 shadow-2xl shadow-slate-900/5 dark:border-slate-700 dark:from-slate-800 dark:via-slate-900 dark:to-blue-950/60 dark:shadow-black/20 sm:p-12">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                  Project Preview
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
              </div>

              <div className="mt-12 rounded-2xl border border-white/70 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-950/70 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                    D
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">
                      Dream Track
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Study Dashboard
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    "Study Goals",
                    "Focus Sessions",
                    "Progress",
                    "Analytics",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                      <div className="mb-3 h-2 w-8 rounded-full bg-blue-500/40" />
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {item}
                      </p>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                        <div
                          className="h-full rounded-full bg-blue-500"
                          style={{ width: `${35 + index * 15}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Weekly Progress
                  </p>
                  <div className="mt-4 flex h-16 items-end gap-2">
                    {[35, 65, 45, 85, 55, 95, 70].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-indigo-400"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
