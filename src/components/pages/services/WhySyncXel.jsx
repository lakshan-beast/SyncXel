import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineDeviceMobile,
  HiOutlineAdjustments,
  HiOutlineChat,
  HiOutlineSparkles,
} from "react-icons/hi";

const benefits = [
  {
    icon: HiOutlineDeviceMobile,
    title: "Responsive by Design",
    description:
      "Interfaces are built with different screen sizes in mind, from mobile devices to desktop screens.",
  },
  {
    icon: HiOutlineAdjustments,
    title: "Tailored to Your Needs",
    description:
      "We consider your project goals and requirements instead of forcing every project into the same design.",
  },
  {
    icon: HiOutlineChat,
    title: "Clear Communication",
    description:
      "Stay informed throughout the project with clear discussions, updates and feedback.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Attention to Detail",
    description:
      "We focus on usability, visual consistency, interactions and the small details that improve the experience.",
  },
];

export default function WhySyncXel() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-5 sm:px-8 lg:px-12 py-16 sm:py-24  bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-bold tracking-[0.18em] text-emerald-300 uppercase">
            The SyncXel Approach
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-300 mt-4">
            More than just
            <span className="text-emerald-700 dark:text-emerald-800 block"> Building websites.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-tight mt-4">
            We focus on creating digital experiences that are practical,
            visually consistent and aligned with the purpose of each project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                className="relative group bg-white dark:bg-slate-800 border-2 border-slate-300/40 dark:border-slate-700 rounded-2xl sm:rounded-tr-3xl sm:rounded-bl-3xl sm:rounded-sm p-6 sm:p-8 flex flex-col hover:border-emerald-200/30 hover:dark:border-slate-700/30 hover:shadow-sm hover:shadow-slate-200/50 transition-all duration-300">
                <div className="relative z-10 w-14 h-14 rounded-2xl  shadow-sm flex items-center justify-center bg-emerald-900 text-emerald-300">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-col justify-between min-h-12">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-200 mt-3">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-tight mt-5">
                    {benefit.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
