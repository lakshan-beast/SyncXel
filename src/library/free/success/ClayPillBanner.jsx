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
      className="w-100 py-3 px-3.5 bg-white rounded-full shadow-lg border border-slate-100 font-baloo flex items-center gap-3 text-white select-none cursor-pointer"
    >
      {/* Tactile Inner-Shadowed Icon Box */}
      <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-emerald-400 font-bold text-xs shrink-0 animate-pulse">
        <FiCheck className="w-5 h-5 stroke-[3]" />
      </div>

      {/* Text Content with Title Case */}
      <div className="flex-1 pr-1 space-y-0">
        <h4 className="text-xs font-bold text-emerald-400 tracking-wide">
          Profile Updated Successfully
        </h4>
        <p className="text-[10px] text-slate-400/70 font-medium">
          Your account details have been synchronized.
        </p>
      </div>
    </motion.div>
  );
}