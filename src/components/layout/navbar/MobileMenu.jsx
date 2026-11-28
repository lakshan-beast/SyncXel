// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { HiOutlineArrowUpRight } from "react-icons/hi2";

// export default function MobileMenu({
//   items,
//   onNavigate,
//   onClose,
//   currentPath,
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, height: 0 }}
//       animate={{ opacity: 1, height: "auto" }}
//       exit={{ opacity: 0, height: 0 }}
//       transition={{ duration: 0.25 }}
//       className="xl:hidden overflow-hidden border-t border-slate-200 dark:border-slate-800">
//       <div className="p-4 space-y-2">
//         {items.map((item) => (
//           <Link
//             key={item.path}
//             to={item.path}
//             onClick={onClose}
//             className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
//               currentPath === item.path
//                 ? "bg-slate-100 text-slate-950 dark:bg-slate-800 dark:text-white"
//                 : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
//             }`}>
//             {item.label}
//           </Link>
//         ))}

//         <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
//           <p className="px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-slate-400">
//             Solutions
//           </p>

//           <button
//             type="button"
//             onClick={() => onNavigate("/services")}
//             className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
//             Custom Development
//             <HiOutlineArrowUpRight className="w-4 h-4" />
//           </button>
//         </div>

//         <button
//           type="button"
//           onClick={() => onNavigate("#contact-section")}
//           className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-slate-950 dark:bg-white px-4 py-3 text-sm font-bold text-white dark:text-slate-950">
//           Let's Talk
//           <HiOutlineArrowUpRight className="w-4 h-4" />
//         </button>
//       </div>
//     </motion.div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function MobileMenu({
  items,
  onNavigate,
  onClose,
  currentPath,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden border-t border-white/[0.08] xl:hidden">
      <div className="space-y-2 p-4">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
              currentPath === item.path
                ? "bg-emerald-400/10 text-emerald-400"
                : "text-slate-400 hover:bg-[#142238] hover:text-white"
            }`}>
            {item.label}
          </Link>
        ))}

        <div className="border-t border-white/[0.08] pt-2">
          <p className="px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">
            Solutions
          </p>

          <button
            type="button"
            onClick={() => onNavigate("/services")}
            className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-400 transition-colors hover:bg-[#142238] hover:text-emerald-400">
            Custom Development
            <HiOutlineArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => onNavigate("#contact-section")}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-4 py-3 text-sm font-bold text-[#080f1e] transition-colors hover:bg-emerald-300">
          Let's Talk
          <HiOutlineArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}
