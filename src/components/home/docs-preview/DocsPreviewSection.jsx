// import React from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { HiOutlineArrowUpRight } from "react-icons/hi2";

// import DocsPreviewHeader from "./DocsPreviewHeader";
// import DocsWindow from "./DocWindow";
// import DocsHighlights from "./DocsHighlights";

// export default function DocsPreviewSection() {
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <section
//       id="docs-preview"
//       className="relative isolate overflow-hidden bg-white px-5 py-24 transition-colors duration-300 sm:px-8 lg:px-12 lg:py-32 dark:bg-slate-950"
//     >
//       {/* Background Decoration */}
//       <div className="pointer-events-none absolute -left-40 top-40 -z-10 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-[120px]" />

//       <div className="pointer-events-none absolute -right-40 bottom-20 -z-10 h-96 w-96 rounded-full bg-indigo-500/[0.06] blur-[120px]" />

//       <div className="mx-auto max-w-7xl">
//         <DocsPreviewHeader />

//         {/* Interactive Documentation Window */}
//         <motion.div
//           initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.1 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="mt-14"
//         >
//           <DocsWindow />
//         </motion.div>

//         {/* Highlights */}
//         <DocsHighlights />

//         {/* Bottom CTA */}
//         <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-slate-200 pt-8 text-center sm:flex-row sm:text-left dark:border-slate-800">
//           <div>
//             <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
//               Ready to explore more?
//             </h3>

//             <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
//               Discover all the guides and resources available in SyncXel.
//             </p>
//           </div>

//           <a
//             href="/docs"
//             className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400"
//           >
//             Explore Documentation

//             <HiOutlineArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import DocsPreviewCard from "./DocsPreviewCard";
import { docsPreviewData } from "../../../data/docsPreviewData";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi";

import DocsPreviewHeader from "./DocsPreviewHeader";

export default function DocsPreviewSection() {
  return (
    <section
      id="docs-preview"
      className="relative isolate overflow-hidden px-5 py-24 sm:px-8 lg:px-20 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full
            border border-blue-500/20 bg-blue-500/5 px-4 py-2
            text-xs font-semibold tracking-wide text-blue-600
            dark:text-blue-400">
            <HiOutlineBookOpen size={15} />
            DOCUMENTATION
          </div>

          <h2
            className="text-3xl font-bold tracking-tight text-slate-900
            sm:text-4xl lg:text-5xl dark:text-white">
            Everything You Need to{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Build Better.
            </span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl text-sm leading-7
            text-slate-600 sm:text-base dark:text-slate-400">
            Explore practical guides, reusable code patterns, and integration
            tutorials to make your development workflow easier.
          </p>
        </motion.div> */}

        <DocsPreviewHeader />

        {/* Documentation Categories */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {docsPreviewData.map((item, index) => (
            <DocsPreviewCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex justify-center">
          <Link
            to="/docs"
            className="group inline-flex items-center gap-2 rounded-full
            border border-slate-300 bg-white px-6 py-3
            text-sm font-semibold text-slate-800
            transition-all duration-300 hover:border-blue-500
            hover:bg-blue-500 hover:text-white
            dark:border-white/15 dark:bg-white/5 dark:text-white
            dark:hover:border-blue-500 dark:hover:bg-blue-500">
            View All Documentation
            <HiOutlineArrowNarrowRight
              size={17}
              className="transition-transform duration-300
              group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
