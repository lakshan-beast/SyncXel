// export default function BentoMetricCard() {
//   return (
//     <div className="w-72 p-4 bg-slate-900 border border-slate-800 rounded-2xl font-baloo space-y-2">
//       <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
//         PERFORMANCE
//       </span>
//       <div className="text-2xl font-bold text-white">99.98%</div>
//       <p className="text-[11px] text-slate-400">
//         System latency optimized via edge computing nodes.
//       </p>
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

export default function BentoMetricCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="w-80 p-5 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl shadow-xl font-baloo space-y-3 select-none cursor-pointer group"
    >
      {/* Header with Title and Icon */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-cyan-400 uppercase tracking-widest font-bold">
          Uptime Performance
        </span>
        <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
          <FiZap className="w-4 h-4" />
        </div>
      </div>

      {/* Metric Value */}
      <div className="text-3xl font-extrabold text-white tracking-tight">
        99.98%
      </div>

      {/* Description */}
      <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
        System latency optimized via global edge computing routing nodes and CDN clusters.
      </p>
    </motion.div>
  );
}