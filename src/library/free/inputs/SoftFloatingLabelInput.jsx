// import { motion } from "framer-motion";

// export default function ClayTagInput() {
//   return (
//     <div className="w-72 p-2 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] border border-slate-800 flex flex-wrap gap-1.5 items-center">
//       <span className="px-2.5 py-1 bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-[11px] font-bold rounded-xl flex items-center gap-1">
//         React <span className="cursor-pointer text-[9px]">×</span>
//       </span>
//       <span className="px-2.5 py-1 bg-cyan-600/30 border border-cyan-500/40 text-cyan-300 text-[11px] font-bold rounded-xl flex items-center gap-1">
//         Tailwind <span className="cursor-pointer text-[9px]">×</span>
//       </span>
//       <input
//         type="text"
//         placeholder="Add tag..."
//         className="bg-transparent text-xs text-slate-300 focus:outline-none px-2 py-1 flex-1 min-w-[80px]"
//       />
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function SoftFloatingLabelInput() {
  return (
    <motion.div whileHover={{ y: -2 }} className="relative w-80">
      <input
        id="soft-name"
        type="text"
        placeholder=" "
        className="peer w-full px-4 pt-6 pb-2 bg-slate-200 rounded-2xl text-sm text-slate-700 outline-none shadow-[inset_2px_2px_6px_#cbd5e1,inset_-2px_-2px_6px_#ffffff] focus:ring-2 focus:ring-slate-400/50"
      />
      <label
        htmlFor="soft-name"
        className="absolute left-4 top-4 text-sm text-slate-500 transition-all peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-slate-600 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[11px]">
        Full name
      </label>
    </motion.div>
  );
}
