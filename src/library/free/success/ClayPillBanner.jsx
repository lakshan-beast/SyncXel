// import { motion } from "framer-motion";

// export default function ClayPillBanner() {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="w-80 p-3 bg-slate-900 rounded-full shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] border border-slate-800 font-baloo flex items-center gap-3 px-4 text-white">
//       <div className="w-7 h-7 rounded-full bg-slate-900 shadow-inner border border-slate-800 flex items-center justify-center text-cyan-300 font-bold text-[10px]">
//         ✓
//       </div>
//       <div>
//         <h4 className="text-[11px] font-bold text-cyan-300">
//           Soft Matte Notification Saved
//         </h4>
//       </div>
//     </motion.div>
//   );
// }


import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

export default function ClayPillBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="w-80 p-3 bg-slate-900 rounded-full shadow-[6px_6px_14px_#020617,-6px_-6px_14px_#1e293b] border border-slate-800 font-baloo flex items-center gap-3 px-4 text-white select-none cursor-pointer"
    >
      {/* Tactile Inner-Shadowed Icon Box */}
      <div className="w-8 h-8 rounded-full bg-slate-900 shadow-[inset_2px_2px_5px_#020617,inset_-2px_-2px_5px_#1e293b] border border-slate-800 flex items-center justify-center text-emerald-400 font-bold text-xs shrink-0">
        <FiCheck className="w-4 h-4 stroke-[3]" />
      </div>

      {/* Text Content with Title Case */}
      <div className="flex-1 pr-1 space-y-0.5">
        <h4 className="text-xs font-bold text-slate-100 tracking-wide">
          Profile Updated Successfully
        </h4>
        <p className="text-[10px] text-slate-400 font-medium">
          Your account details have been synchronized.
        </p>
      </div>
    </motion.div>
  );
}