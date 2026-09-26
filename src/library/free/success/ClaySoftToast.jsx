// import { motion } from "framer-motion";

// export default function ClaySoftToast() {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="w-80 p-3.5 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] border border-slate-800 font-baloo flex items-center gap-3 text-white">
//       <div className="w-8 h-8 rounded-xl bg-slate-900 shadow-inner border border-slate-800 flex items-center justify-center text-indigo-300 font-bold text-xs">
//         ✓
//       </div>
//       <div>
//         <h4 className="text-xs font-bold text-slate-200">CLAY_SUCCESS</h4>
//         <p className="text-[10px] text-slate-400">
//           Volumetric data saved successfully.
//         </p>
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

export default function ClaySoftToast() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="w-80 p-4 bg-slate-900 rounded-2xl shadow-[6px_6px_14px_#020617,-6px_-6px_14px_#1e293b] border border-slate-800 font-baloo flex items-center gap-3.5 text-white select-none cursor-pointer">
      {/* Tactile Inner-Shadowed Icon Box */}
      <div className="w-9 h-9 rounded-xl bg-slate-900 shadow-[inset_2px_2px_5px_#020617,inset_-2px_-2px_5px_#1e293b] border border-slate-800 flex items-center justify-center text-indigo-400 font-bold text-xs shrink-0">
        <FiCheck className="w-4 h-4 stroke-[3]" />
      </div>

      {/* Text Content with Title Case */}
      <div className="flex-1 space-y-0.5">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-100 tracking-wide">
            Data Export Complete
          </h4>
          <span className="text-[9px] text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/30 font-medium">
            Ready
          </span>
        </div>
        <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
          Your database snapshot has been compiled and saved successfully.
        </p>
      </div>
    </motion.div>
  );
}
