// import React from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { HiOutlineSparkles } from "react-icons/hi2";

// export default function ContactHeader() {
//   const reduceMotion = useReducedMotion();

//   return (
//     <motion.div
//       initial={reduceMotion ? false : { opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}>
//       <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/60 px-4 py-2 dark:border-white/10 dark:bg-white/[0.04]">
//         <HiOutlineSparkles className="text-sm text-blue-500" />
//         <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 dark:text-slate-300">
//           Let's work together
//         </span>
//       </div>

//       <h2 className="text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-slate-950 dark:text-white sm:text-5xl lg:text-[3.5rem]">
//         Have a project
//         <br />
//         in mind?
//         <br />
//         <span className="text-slate-400 dark:text-slate-500">
//           Let's make it happen.
//         </span>
//       </h2>

//       <p className="mt-6 max-w-lg text-sm leading-tight text-slate-600 dark:text-slate-400 sm:text-base">
//         Whether you're building a business website, exploring our UI resources,
//         or bringing a new idea to life, we'd love to hear about it.
//       </p>
//     </motion.div>
//   );
// }

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function ContactHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-16 mb-6 ">
      <div>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-blue-500" />

          <span className="text-xs font-semibold tracking-[0.25em] text-blue-600 dark:text-blue-400">
            LET'S WORK TOGETHER
          </span>
        </motion.div>

        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] dark:text-white">
          Have a project in mind?{" "}
          <span className="text-blue-600 dark:text-blue-400 block">
            Let's make it happen.
          </span>
        </motion.h2>
      </div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-start gap-6 lg:items-end lg:justify-between">
        <p className="max-w-md text-base leading-tight text-slate-600 lg:text-right dark:text-slate-400">
          Whether you're building a business website, exploring our UI
          resources, or bringing a new idea to life, we'd love to hear about it.
        </p>

        <a
          href="mailto:syncxelofficial@gmail.com"
          className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400">
          Get in Touch
          <HiOutlineArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </motion.div>
    </div>
  );
}
