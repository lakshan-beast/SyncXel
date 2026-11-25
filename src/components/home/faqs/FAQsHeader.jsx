// import React from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { HiOutlineSparkles } from "react-icons/hi2";

// export default function FAQHeader() {
//   const reduceMotion = useReducedMotion();

//   return (
//     <motion.div
//       initial={reduceMotion ? false : { opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="mb-10">
//       <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.02] px-4 py-2 dark:border-white/[0.1] dark:bg-white/[0.03]">
//         <HiOutlineSparkles className="text-sm text-blue-500" />

//         <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55">
//           Frequently asked questions
//         </span>
//       </div>

//       <h2 className="text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-[#171717] dark:text-white sm:text-5xl lg:text-6xl">
//         Got questions?
//         <br />
//         <span className="text-black/35 dark:text-white/35">
//           We've got answers.
//         </span>
//       </h2>

//       <p className="mt-5 max-w-md text-sm leading-tight text-black/55 dark:text-white/45 sm:text-base">
//         Everything you need to know about SyncXel, our digital resources, and
//         the services we provide.
//       </p>
//     </motion.div>
//   );
// }



import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function FAQHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mb-10">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-5 flex items-center gap-3"
      >
        <span className="h-px w-8 bg-blue-500" />

        <span className="text-xs font-semibold tracking-[0.25em] text-blue-600 dark:text-blue-400">
          FREQUENTLY ASKED QUESTIONS
        </span>
      </motion.div>

      <motion.h2
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] dark:text-white"
      >
        Got questions?{" "}
        <span className="text-blue-600 dark:text-blue-400">
          We've got answers.
        </span>
      </motion.h2>

      <motion.p
        initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-5 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-400"
      >
        Everything you need to know about SyncXel, our digital
        resources, and the services we provide.
      </motion.p>
    </div>
  );
}
