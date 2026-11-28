// import { motion, useReducedMotion } from "framer-motion";

// export default function WorkflowStep({ step, index }) {
//   const shouldReduceMotion = useReducedMotion();
//   const Icon = step.icon;

//   return (
//     <motion.article
//       initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{
//         duration: shouldReduceMotion ? 0 : 0.5,
//         delay: shouldReduceMotion ? 0 : index * 0.08,
//       }}
//       className="group relative min-w-0">
//       {/* Timeline marker */}
//       <div className="relative z-10 mb-6 flex items-center gap-4 lg:mb-7 lg:flex-col lg:gap-0">
//         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 group-hover:border-blue-400 group-hover:bg-blue-50 group-hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:group-hover:border-blue-500/60 dark:group-hover:bg-blue-500/10 dark:group-hover:text-blue-400">
//           <Icon className="h-5 w-5" />
//         </div>

//         <span className="text-xs font-bold tracking-[0.18em] text-blue-600 dark:text-blue-400 lg:mt-3">
//           STEP {step.number}
//         </span>
//       </div>

//       {/* Step content */}
//       <div className="rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-lg group-hover:shadow-slate-200/50 sm:p-6 dark:border-slate-800 dark:bg-slate-950/90 dark:group-hover:border-blue-500/30 dark:group-hover:shadow-black/20">
//         <h3 className="text-base font-semibold text-slate-900 sm:text-lg dark:text-white">
//           {step.title}
//         </h3>

//         <p className="mt-3 text-sm leading-tight text-slate-600 dark:text-slate-400">
//           {step.description}
//         </p>

//         <ul className="mt-5 space-y-3">
//           {step.details.map((detail) => (
//             <li
//               key={detail}
//               className="flex items-start gap-2.5 text-xs leading-tight text-slate-600 dark:text-slate-400">
//               <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 leading-tight" />
//               {detail}
//             </li>
//           ))}
//         </ul>

//         <div className="mt-6 flex flex-wrap justify-center gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
//           {step.audience.map((item) => (
//             <span
//               key={item}
//               className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// import { motion, useReducedMotion } from "framer-motion";

// export default function WorkflowStep({ step, index, side }) {
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <motion.article
//       initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{
//         duration: shouldReduceMotion ? 0 : 0.5,
//         delay: shouldReduceMotion ? 0 : index * 0.08,
//       }}
//       className={`group relative min-w-0 ${
//         side === "left" ? "lg:text-left" : "lg:text-left"
//       }`}>
//       <div className="rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-lg group-hover:shadow-slate-200/50 sm:p-6 dark:border-slate-800 dark:bg-slate-950/90 dark:group-hover:border-blue-500/30 dark:group-hover:shadow-black/20">
//         <h3 className="text-base font-semibold text-slate-900 sm:text-lg dark:text-white">
//           {step.title}
//         </h3>

//         <p className="mt-1 text-sm leading-tight text-slate-600 dark:text-slate-400">
//           {step.description}
//         </p>

//         <ul className="mt-2 mx-3 space-y-1">
//           {step.details.map((detail) => (
//             <li
//               key={detail}
//               className={`flex items-start gap-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400 ${
//                 side === "left" ? "lg:flex-row" : "lg:flex-row"
//               }`}>
//               <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
//               <span>{detail}</span>
//             </li>
//           ))}
//         </ul>

//         <div
//           className={`mt-3 flex flex-wrap gap-2 border-t border-slate-100 pt-6 dark:border-slate-800 ${
//             side === "left" ? "lg:justify-center" : "lg:justify-center"
//           }`}>
//           {step.audience.map((item) => (
//             <span
//               key={item}
//               className="rounded-md bg-slate-100 px-3.5 py-1 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>
//     </motion.article>
//   );
// }



import { motion, useReducedMotion } from "framer-motion";

export default function WorkflowStep({ step, index, side }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.08,
      }}
      className="group relative min-w-0"
    >
      <div className="rounded-2xl border border-white/[0.08] bg-[#101a2c] p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-emerald-400/25 group-hover:bg-[#142238] group-hover:shadow-lg group-hover:shadow-black/20 sm:p-6">
        <h3 className="text-base font-semibold text-white sm:text-lg">
          {step.title}
        </h3>

        <p className="mt-1 text-sm leading-relaxed text-slate-400">
          {step.description}
        </p>

        <ul className="mx-3 mt-3 space-y-1">
          {step.details.map((detail) => (
            <li
              key={detail}
              className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-400"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2 border-t border-white/[0.07] pt-5">
          {step.audience.map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/[0.06] bg-white/[0.04] px-3.5 py-1 text-[10px] font-medium text-slate-400"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
