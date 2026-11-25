// import React from "react";
// import { motion } from "framer-motion";
// import { HiArrowLeft } from "react-icons/hi";
// import { MdOutlineTipsAndUpdates } from "react-icons/md";

// export default function LegalHeader({ itemVariants }) {
//   const currentDate = new Date();

//   const monthName = currentDate.toLocaleString("en-US", {
//     month: "long",
//   });

//   const currentYear = currentDate.getFullYear();

//   return (
//     <motion.div
//       variants={itemVariants}
//       className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white border-none rounded-2xl shadow-none relative overflow-hidden">
//       <div className="space-y-2 relative z-10 max-w-2xl">
//         <div className="inline-flex items-center space-x-2 px-5 py-1 rounded-full bg-white border border-slate-200/50 text-slate-500/50 text-xs font-mono shadow-xs">
//           <span>// legal_compliance_repository_V2.0</span>
//         </div>

//         <motion.h1
//           initial={{ opacity: 0, y: -10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{
//             type: "spring",
//             stiffness: 400,
//             damping: 17,
//           }}
//           className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
//           Legal &{" "}
//           <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-200 to-slate-700 block sm:inline mt-1 sm:mt-0">
//             Compliance Hub
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: -10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{
//             type: "spring",
//             stiffness: 400,
//             damping: 17,
//           }}
//           className="text-slate-500 text-xs sm:text-sm leading-tight font-baloo">
//           Review our terms of use, licensing policies, and privacy commitments
//           designed to ensure transparency for all developers and clients.
//         </motion.p>

//         <div className="text-xs text-slate-500 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 flex items-center gap-2 shadow-xs font-baloo w-fit">
//           <MdOutlineTipsAndUpdates className="w-5 h-5 text-slate-900 animate-pulse" />
//           <span>
//             Last Updated :{" "}
//             <strong className="text-slate-900">
//               {monthName} {currentYear}
//             </strong>
//           </span>
//         </div>

//         <a
//           href="/"
//           className="py-2.5 px-5 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-xl transition-all text-slate-200 hover:text-white flex items-center gap-2 space-x-2 text-xs font-baloo font-medium cursor-pointer w-fit shadow-xs hover:gap-3">
//           <HiArrowLeft className="w-4 h-4" />
//           <span>back_to_home()</span>
//         </a>
//       </div>
//     </motion.div>
//   );
// }

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const legalMeta = {
  label: "LEGAL & COMPLIANCE",
  description:
    "Clear guidelines and policies that explain how SyncXel works, how our digital products are used, and how we handle customer requests.",
};

export default function LegalHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
      <div>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-blue-500" />

          <span className="text-xs font-semibold tracking-[0.25em] text-blue-600 dark:text-blue-400">
            {legalMeta.label}
          </span>
        </motion.div>

        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] dark:text-white">
          Policies &{" "}
          <span className="text-blue-600 dark:text-blue-400">Terms.</span>
        </motion.h1>
      </div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-start gap-6 lg:items-end">
        <p className="max-w-md text-base leading-tight text-slate-600 lg:text-right dark:text-slate-400">
          {legalMeta.description}
        </p>

        <a
          href="mailto:syncxelofficial@gmail.com"
          className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400">
          Contact Support
          <HiOutlineArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </motion.div>
    </div>
  );
}
