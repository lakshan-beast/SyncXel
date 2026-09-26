// import { motion } from "framer-motion";

// export default function GlassStatsCard() {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="w-72 p-4 bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl shadow-xl font-baloo space-y-2">
//       <div className="flex justify-between items-center text-xs text-slate-300">
//         <span>SYSTEM_LOAD</span>
//         <span className="text-cyan-400 font-bold">42%</span>
//       </div>
//       <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
//         <div className="bg-cyan-400 h-full w-[42%]" />
//       </div>
//     </motion.div>
//   );
// }


import { motion } from "framer-motion";
import { FiCpu, FiActivity } from "react-icons/fi";

export default function GlassStatsCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="w-80 p-5 bg-slate-900/90 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] font-baloo space-y-4 select-none cursor-pointer group"
    >
      {/* Header with Icon and Label */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)]">
            <FiCpu className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-white tracking-wide block">CPU Node Cluster</span>
            <span className="text-[10px] text-cyan-300 font-medium">US-East Primary Pool</span>
          </div>
        </div>
        <div className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-[10px] font-bold text-emerald-300 flex items-center gap-1 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Optimal</span>
        </div>
      </div>

      {/* Progress Bar Section */}
      <div className="space-y-2 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-300 font-medium flex items-center gap-1.5">
            <FiActivity className="w-3.5 h-3.5 text-cyan-400" />
            <span>System Utilization</span>
          </span>
          <span className="text-cyan-400 font-bold">42.8%</span>
        </div>
        <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "42.8%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-gradient-to-r from-cyan-500 to-cyan-300 h-full rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          />
        </div>
      </div>

      {/* Sub-metrics */}
      <div className="flex justify-between text-[10px] text-slate-400 font-medium px-1">
        <span>Allocated: 16.4 GB</span>
        <span>Max Capacity: 38.0 GB</span>
      </div>
    </motion.div>
  );
}