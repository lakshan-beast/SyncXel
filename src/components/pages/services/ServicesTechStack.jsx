import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HiOutlineCode, HiOutlineLightningBolt } from "react-icons/hi";

const technologies = [
  {
    name: "HTML5",
    type: "Structure",
  },
  {
    name: "CSS3",
    type: "Styling",
  },
  {
    name: "JavaScript",
    type: "Programming",
  },
  {
    name: "React",
    type: "Frontend",
  },
  {
    name: "Tailwind CSS",
    type: "Styling",
  },
  {
    name: "Framer Motion",
    type: "Animation",
  },
  {
    name: "Vite",
    type: "Build Tool",
  },
  {
    name: "Git & GitHub",
    type: "Version Control",
  },
];

export default function ServicesTechStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-5 sm:px-8 lg:px-12 py-16 sm:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-[11px] font-bold tracking-[0.18em] text-emerald-300 uppercase">
              Our Technology Stack
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-300 mt-4">
              Modern tools.
              <span className="text-emerald-700 dark:text-emerald-800 block">
                Thoughtful implementation.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-tight mt-4">
              We use modern frontend technologies and development tools to
              create responsive interfaces, maintainable components and engaging
              digital experiences.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 dark:bg-slate-800 dark:text-slate-200/70 dark:border-slate-600 border border-slate-200 rounded-lg px-5 py-2">
                <HiOutlineCode className="w-4 h-4 text-emerald-600" />
                Modern Frontend
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 dark:bg-slate-800 dark:text-slate-200/70 dark:border-slate-600 border border-slate-200 rounded-lg px-5 py-2">
                <HiOutlineLightningBolt className="w-4 h-4 text-emerald-600" />
                Interactive UI
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }
                }
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : index * 0.05,
                }}
                className="min-h-[112px] py-3 px-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex flex-col justify-between transition-colors">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-300">
                  {tech.name}
                </span>

                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400/60 text-center">
                  {tech.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
