// import React from "react";
// import { Link } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   HiOutlineChevronDown,
//   HiOutlineCodeBracket,
//   HiOutlineBuildingOffice2,
// } from "react-icons/hi2";

// export default function SolutionsDropdown({ open, setOpen }) {
//   const solutions = [
//     {
//       title: "Developer Resources",
//       description: "Components, UI packs and frontend guides.",
//       path: "/components",
//       icon: HiOutlineCodeBracket,
//     },
//     {
//       title: "Custom Development",
//       description: "Websites and custom frontend solutions.",
//       path: "/services",
//       icon: HiOutlineBuildingOffice2,
//     },
//   ];

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}>
//       <button
//         type="button"
//         onClick={() => setOpen((prev) => !prev)}
//         aria-expanded={open}
//         className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-all">
//         Solutions
//         <HiOutlineChevronDown
//           className={`w-3.5 h-3.5 transition-transform ${
//             open ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 8 }}
//             transition={{ duration: 0.2 }}
//             className="absolute top-full right-0 pt-3 w-72 z-50">
//             <div className="p-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl">
//               {solutions.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <Link
//                     key={item.title}
//                     to={item.path}
//                     onClick={() => setOpen(false)}
//                     className="flex gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
//                     <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
//                       <Icon className="w-5 h-5" />
//                     </span>

//                     <span>
//                       <span className="block text-sm font-bold text-slate-900 dark:text-white">
//                         {item.title}
//                       </span>
//                       <span className="block mt-1 text-xs text-slate-500 dark:text-slate-400">
//                         {item.description}
//                       </span>
//                     </span>
//                   </Link>
//                 );
//               })}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineChevronDown,
  HiOutlineCodeBracket,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

export default function SolutionsDropdown({ open, setOpen }) {
  const solutions = [
    {
      title: "Developer Resources",
      description: "Components, UI packs and frontend guides.",
      path: "/components",
      icon: HiOutlineCodeBracket,
    },
    {
      title: "Custom Development",
      description: "Websites and custom frontend solutions.",
      path: "/services",
      icon: HiOutlineBuildingOffice2,
    },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-400 transition-all hover:bg-[#142238] hover:text-white">
        Solutions
        <HiOutlineChevronDown
          className={`h-3.5 w-3.5 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full z-50 w-72 pt-3">
            <div className="rounded-2xl border border-white/[0.08] bg-[#101a2c] p-2 shadow-xl shadow-black/30">
              {solutions.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-[#142238]">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-400/10 bg-emerald-400/[0.08] text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span>
                      <span className="block text-sm font-bold text-white">
                        {item.title}
                      </span>

                      <span className="mt-1 block text-xs text-slate-500">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
