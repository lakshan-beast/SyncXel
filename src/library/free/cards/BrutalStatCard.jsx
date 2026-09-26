// import { motion } from "framer-motion";

// export default function BrutalStatCard() {
//   return (
//     <motion.div
//       whileHover={{ x: -2, y: -2 }}
//       className="w-72 p-4 bg-cyan-400 border-2 border-slate-950 rounded-xl shadow-[4px_4px_0px_0px_#020617] font-baloo space-y-2">
//       <span className="text-[10px] font-black uppercase text-slate-950">
//         REVENUE_STREAM
//       </span>
//       <div className="text-xl font-black text-slate-950">$84,200</div>
//       <p className="text-[10px] text-slate-900 font-bold">
//         +24.5% from last sync cycle.
//       </p>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { FiTrendingUp, FiDollarSign } from "react-icons/fi";

export default function BrutalStatCard() {
  return (
    <motion.div
      whileHover={{ x: -3, y: -3, boxShadow: "7px 7px 0px 0px #020617" }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="w-80 p-5 bg-cyan-400 border-2 border-slate-950 rounded-2xl shadow-[4px_4px_0px_0px_#020617] font-baloo space-y-3 select-none cursor-pointer">
      {/* Header with Title and Icon */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-black uppercase tracking-wider text-slate-950">
          Monthly Recurring Revenue
        </span>
        <div className="w-8 h-8 bg-slate-950 rounded-xl flex items-center justify-center text-cyan-400 shadow-[2px_2px_0px_0px_#020617]">
          <FiDollarSign className="w-4 h-4" />
        </div>
      </div>

      {/* Metric Value */}
      <div className="text-2xl font-black text-slate-950 tracking-tight">
        $84,200.00
      </div>

      {/* Footer details with growth badge */}
      <div className="flex items-center justify-between pt-1">
        <span className="text-[11px] text-slate-900 font-bold">
          vs. previous 30-day cycle
        </span>
        <div className="px-2.5 py-0.5 bg-emerald-300 border border-slate-950 rounded-lg text-[10px] font-black text-slate-950 flex items-center gap-1 shadow-[1px_1px_0px_0px_#020617]">
          <FiTrendingUp className="w-3 h-3" />
          <span>+24.5%</span>
        </div>
      </div>
    </motion.div>
  );
}
