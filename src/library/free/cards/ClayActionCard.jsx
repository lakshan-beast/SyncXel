// export default function ClayActionCard() {
//   return (
//     <div className="w-72 p-4 bg-slate-900 rounded-3xl shadow-[8px_8px_16px_#020617,-8px_-8px_16px_#1e293b] font-baloo space-y-3 border border-slate-800">
//       <h4 className="text-xs font-bold text-white">Cloud Sync Matrix</h4>
//       <p className="text-[11px] text-slate-400">
//         All local nodes synchronized with master core.
//       </p>
//       <button className="w-full py-2 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-xl shadow-inner border border-indigo-500/30 cursor-pointer">
//         SYNC_NOW
//       </button>
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { FiCloud, FiRefreshCw } from "react-icons/fi";

export default function ClayActionCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="w-80 p-5 bg-slate-900 rounded-3xl shadow-[8px_8px_20px_#020617,-8px_-8px_20px_#1e293b] font-baloo space-y-4 border border-slate-800/80 select-none cursor-pointer group"
    >
      {/* Header with Icon and Live Badge */}
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shadow-inner">
          <FiCloud className="w-5 h-5" />
        </div>
        <div className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Synced</span>
        </div>
      </div>

      {/* Title & Description */}
      <div className="space-y-1.5">
        <h4 className="text-xs font-bold text-white tracking-wide">Cloud Database Replica</h4>
        <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
          All multi-region worker nodes and local caches are synchronized with master core database.
        </p>
      </div>

      {/* Action Button with Inner Shadow */}
      <button className="w-full py-2.5 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 font-bold text-xs rounded-2xl shadow-inner border border-indigo-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer group">
        <FiRefreshCw className="w-3.5 h-3.5 group-hover:animate-spin" />
        <span>Force Sync Now</span>
      </button>
    </motion.div>
  );
}