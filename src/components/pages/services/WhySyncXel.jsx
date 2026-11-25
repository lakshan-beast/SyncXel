
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
    <section className="px-5 sm:px-8 lg:px-12 py-16 sm:py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-bold tracking-[0.18em] text-blue-400 uppercase">
            The SyncXel Approach
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-4">
            More than just
            <span className="text-blue-400"> building websites.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mt-4">
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
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-white mt-6">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mt-3">
                  {benefit.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
