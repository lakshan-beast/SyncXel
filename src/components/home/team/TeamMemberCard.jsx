// import { motion, useReducedMotion } from "framer-motion";
// import { HiOutlineArrowUpRight } from "react-icons/hi2";

// export default function TeamMemberCard({
//   name,
//   role,
//   image,
//   description = "Contributing ideas and skills to create meaningful digital experiences.",
//   github,
//   linkedin,
// }) {
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <motion.article
//       initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
//       className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-950/90 dark:hover:border-blue-500/30 dark:hover:shadow-black/20">
//       {/* Member image */}
//       <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-900">
//         {image ? (
//           <img
//             src={image}
//             alt={name}
//             loading="lazy"
//             className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//           />
//         ) : (
//           <div className="flex h-full items-center justify-center">
//             <span className="text-5xl font-bold text-slate-300 dark:text-slate-700">
//               {name?.charAt(0)?.toUpperCase() || "?"}
//             </span>
//           </div>
//         )}

//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent opacity-60" />
//       </div>

//       {/* Member information */}
//       <div className="p-5 sm:p-6">
//         <span className="text-[10px] font-bold tracking-[0.18em] text-blue-600 dark:text-blue-400">
//           TEAM MEMBER
//         </span>

//         <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
//           {name}
//         </h3>

//         <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
//           {role}
//         </p>

//         <p className="mt-4 text-sm leading-tight text-slate-600 dark:text-slate-400">
//           {description}
//         </p>

//         {(github || linkedin) && (
//           <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
//             {github && (
//               <a
//                 href={github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={`${name} GitHub profile`}
//                 className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
//                 GitHub
//                 <HiOutlineArrowUpRight className="h-3.5 w-3.5" />
//               </a>
//             )}

//             {linkedin && (
//               <a
//                 href={linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={`${name} LinkedIn profile`}
//                 className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
//                 LinkedIn
//                 <HiOutlineArrowUpRight className="h-3.5 w-3.5" />
//               </a>
//             )}
//           </div>
//         )}
//       </div>
//     </motion.article>
//   );
// }

import { motion, useReducedMotion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function TeamMemberCard({
  name,
  role,
  image,
  description = "Contributing ideas and skills to create meaningful digital experiences.",
  github,
  linkedin,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
      className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101a2c] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:bg-[#142238] hover:shadow-xl hover:shadow-black/20">
      {/* Member image */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#080f1e]">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-5xl font-bold text-slate-700">
              {name?.charAt(0)?.toUpperCase() || "?"}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#080f1e]/50 to-transparent opacity-60" />
      </div>

      {/* Member information */}
      <div className="p-5 sm:p-6">
        <span className="text-[10px] font-bold tracking-[0.18em] text-emerald-400">
          TEAM MEMBER
        </span>

        <h3 className="mt-2 text-lg font-bold text-white">{name}</h3>

        <p className="mt-1 text-sm font-medium text-slate-400">{role}</p>

        <p className="mt-4 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        {(github || linkedin) && (
          <div className="mt-5 flex items-center gap-4 border-t border-white/[0.08] pt-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} GitHub profile`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 transition-colors hover:text-emerald-400">
                GitHub
                <HiOutlineArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}

            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} LinkedIn profile`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 transition-colors hover:text-emerald-400">
                LinkedIn
                <HiOutlineArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
