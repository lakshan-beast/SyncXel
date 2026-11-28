// import React from "react";
// import { motion, useReducedMotion } from "framer-motion";

// export default function DocsPreviewHeader() {
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <div className="mx-auto max-w-2xl text-center">
//       <motion.div
//         initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="mb-5 flex items-center justify-center gap-3">
//         <span className="h-px w-8 bg-blue-500" />

//         <span className="text-xs font-semibold tracking-[0.25em] text-blue-600 dark:text-blue-400">
//           DOCUMENTATION & GUIDES
//         </span>

//         <span className="h-px w-8 bg-blue-500" />
//       </motion.div>

//       <motion.h2
//         initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
//         Build smarter.
//         <span className="block text-blue-600 dark:text-blue-400">
//           Learn as you go.
//         </span>
//       </motion.h2>

//       <motion.p
//         initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         className="mx-auto mt-6 max-w-xl text-sm leading-tight text-slate-600 sm:text-base dark:text-slate-400">
//         From your first setup to deployment and advanced frontend techniques,
//         explore practical guides designed to make development easier.
//       </motion.p>
//     </div>
//   );
// }

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function DocsPreviewHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-16 mb-6 sm:mb-10">
      <div>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-blue-500" />

          <span className="text-xs font-semibold tracking-[0.25em] text-blue-600 dark:text-blue-400">
            DOCUMENTATION & GUIDES
          </span>
        </motion.div>

        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] dark:text-white">
          Build smarter.{" "}
          <span className="text-blue-600 dark:text-blue-400 block">
            Learn as you go.
          </span>
        </motion.h2>
      </div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-start gap-6 lg:items-end">
        <p className="max-w-md text-base leading-tight text-slate-600 lg:text-right dark:text-slate-400">
          From your first setup to deployment and advanced frontend techniques,
          explore practical guides designed to make development easier.
        </p>

        <a
          href="/docs"
          className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400">
          Explore Documentation
          <HiOutlineArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </motion.div>
    </div>
  );
}
