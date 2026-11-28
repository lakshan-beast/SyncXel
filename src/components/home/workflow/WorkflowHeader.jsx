// import { motion, useReducedMotion } from "framer-motion";

// export default function WorkflowHeader() {
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <motion.div
//       initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.4 }}
//       transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
//       className="mx-auto mb-16 max-w-2xl text-center">
//       <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold tracking-wide text-slate-600 dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-300">
//         <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
//         HOW WE WORK
//       </div>

//       <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
//         From idea to{" "}
//         <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
//           execution.
//         </span>
//       </h2>

//       <p className="mt-5 text-sm leading-tight text-slate-600 sm:text-base dark:text-slate-400">
//         Whether you're exploring our digital products or building a custom
//         website, every project follows a thoughtful process designed to deliver
//         quality from start to finish.
//       </p>

//       <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
//         <span className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
//           For Developers
//         </span>

//         <span className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
//           For Businesses
//         </span>
//       </div>
//     </motion.div>
//   );
// }

// import React from "react";
// import { motion, useReducedMotion } from "framer-motion";

// export default function WorkflowHeader() {
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-16 mb-6 sm:mb-10">
//       <div>
//         <motion.div
//           initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mb-5 flex items-center gap-3">
//           <span className="h-px w-8 bg-blue-500" />

//           <span className="text-xs font-semibold tracking-[0.25em] text-blue-600 dark:text-blue-400">
//             HOW WE WORK
//           </span>
//         </motion.div>

//         <motion.h2
//           initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] dark:text-white">
//           From idea to{" "}
//           <span className="text-blue-600 dark:text-blue-400">Execution.</span>
//         </motion.h2>
//       </div>

//       <motion.div
//         initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         className="flex flex-col items-start gap-6 lg:items-end">
//         <p className="max-w-md text-base leading-tight text-slate-600 lg:text-right dark:text-slate-400">
//           Whether you're exploring our digital products or building a custom
//           website, every project follows a thoughtful process designed to
//           deliver quality from start to finish.
//         </p>

//         <div className="flex flex-wrap items-center gap-3">
//           <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
//             For Developers
//           </span>

//           <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
//             For Businesses
//           </span>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function WorkflowHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mb-6 grid grid-cols-1 gap-8 sm:mb-10 lg:grid-cols-2 lg:items-end lg:gap-16">
      <div>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-emerald-400" />

          <span className="text-xs font-semibold tracking-[0.25em] text-emerald-400">
            HOW WE WORK
          </span>
        </motion.div>

        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
          From idea to <span className="text-emerald-400">Execution.</span>
        </motion.h2>
      </div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-start gap-6 lg:items-end">
        <p className="max-w-md text-base leading-relaxed text-slate-400 lg:text-right">
          Whether you're exploring our digital products or building a custom
          website, every project follows a thoughtful process designed to
          deliver quality from start to finish.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-white/10 bg-[#101a2c] px-4 py-2 text-xs font-medium text-slate-300">
            For Developers
          </span>

          <span className="rounded-full border border-white/10 bg-[#101a2c] px-4 py-2 text-xs font-medium text-slate-300">
            For Businesses
          </span>
        </div>
      </motion.div>
    </div>
  );
}
