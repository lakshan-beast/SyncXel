// import { motion } from "framer-motion";

// export default function CyberMetricCard() {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       className="relative w-72 p-5 bg-slate-950 border border-indigo-500/30 hover:border-indigo-400 rounded-2xl shadow-[0_0_25px_rgba(99,102,241,0.1)] font-baloo"
//     >
//       <div className="flex justify-between items-start mb-3">
//         <span className="text-[10px] text-indigo-400 uppercase tracking-widest">THROUGHPUT</span>
//         <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/30">+24.8%</span>
//       </div>
//       <div className="text-2xl font-bold text-white mb-1">98.4 <span className="text-xs text-slate-500 font-normal">GB/s</span></div>
//       <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800">
//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: "75%" }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="h-full bg-linear-to-r from-indigo-500 to-cyan-400 shadow-[0_0_10px_#6366f1]"
//         />
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { FiActivity } from "react-icons/fi";

export default function CyberMetricCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-80 p-5 bg-slate-950 border border-indigo-500/40 hover:border-indigo-400 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.15)] font-baloo select-none cursor-pointer group"
    >
      {/* Header with Title and Growth Badge */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-[11px] text-indigo-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
          <FiActivity className="w-3.5 h-3.5" />
          <span>Network Throughput</span>
        </span>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/30 font-bold">
          +24.8% peak
        </span>
      </div>

      {/* Main Metric Value */}
      <div className="text-3xl font-extrabold text-white mb-2 tracking-tight">
        98.4 <span className="text-xs text-slate-400 font-medium">GB/s</span>
      </div>

      {/* Animated Progress Bar & Capacity Indicator */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
          <span>Bandwidth Utilization</span>
          <span className="text-indigo-400">75% Capacity</span>
        </div>
        <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-linear-to-r from-indigo-500 to-cyan-400 shadow-[0_0_12px_#6366f1]"
          />
        </div>
      </div>
    </motion.div>
  );
}