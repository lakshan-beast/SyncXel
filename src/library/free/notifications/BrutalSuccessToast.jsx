// import { motion } from "framer-motion";

// export default function BentoModal() {
//   return (
//     <motion.div
//       initial={{ scale: 0.9, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       className="w-80 p-5 bg-slate-900 border border-slate-800 rounded-2xl font-baloo space-y-4">
//       <div className="flex justify-between items-center border-b border-slate-800 pb-2">
//         <h3 className="text-xs font-bold text-white uppercase">
//           System Config
//         </h3>
//         <span className="text-xs text-slate-500 cursor-pointer">✕</span>
//       </div>
//       <p className="text-xs text-slate-400">
//         Review edge performance metrics before committing container changes.
//       </p>
//       <div className="flex gap-2 pt-1">
//         <button className="flex-1 py-2 bg-slate-800 text-white font-bold text-xs rounded-xl border border-slate-700 cursor-pointer">
//           Save
//         </button>
//         <button className="flex-1 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl cursor-pointer">
//           Apply
//         </button>
//       </div>
//     </motion.div>
//   );
// }


import { motion } from "framer-motion";
import { FiCheck, FiX } from "react-icons/fi";

export default function BrutalSuccessToast() {
  return (
    <motion.div
      role="status"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className="flex items-center gap-3 w-80 p-3.5 bg-emerald-300 border-2 border-slate-950 rounded-2xl shadow-[4px_4px_0px_0px_#020617]"
    >
      <span className="w-8 h-8 shrink-0 bg-slate-950 rounded-xl flex items-center justify-center">
        <FiCheck className="w-4 h-4 text-emerald-300" />
      </span>

      <div className="flex-1">
        <p className="text-sm font-black text-slate-950">Project saved</p>
        <p className="text-[11px] font-bold text-slate-800">
          Your changes are live.
        </p>
      </div>

      <button aria-label="Dismiss notification" className="text-slate-950 hover:opacity-60 transition">
        <FiX className="w-4 h-4" />
      </button>
    </motion.div>
  );
}