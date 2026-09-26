// import { motion } from "framer-motion";

// export default function HolographicCard() {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02, y: -4 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       className="relative w-72 p-5 bg-slate-950/80 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400 rounded-2xl shadow-[0_0_25px_rgba(34,211,238,0.1)] group overflow-hidden cursor-pointer"
//     >
//       <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all" />
//       <div className="relative z-10 space-y-3 font-baloo">
//         <div className="flex justify-between items-center text-[10px] text-cyan-400">
//           <span>UNIT_01</span>
//           <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />ACTIVE</span>
//         </div>
//         <h3 className="text-white text-sm font-bold tracking-wide">QUANTUM CORE</h3>
//         <p className="text-xs text-slate-400 leading-relaxed">
//           High-frequency data streaming pipeline optimized for distributed neural node networks.
//         </p>
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { FiCpu, FiActivity } from "react-icons/fi";

export default function HolographicCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-80 p-5 bg-slate-950/90 backdrop-blur-2xl border border-cyan-500/40 hover:border-cyan-400 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.15)] group overflow-hidden cursor-pointer select-none"
    >
      {/* Holographic Ambient Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-400/30 transition-all pointer-events-none" />
      
      <div className="relative z-10 space-y-3 font-baloo">
        {/* Header with Unit & Active Status */}
        <div className="flex justify-between items-center text-[11px] text-cyan-400 font-bold">
          <span className="flex items-center gap-1.5">
            <FiCpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>NODE_CLUSTER_01</span>
          </span>
          <span className="flex items-center gap-1.5 px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-[9px] text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            ACTIVE
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-1">
          <h3 className="text-white text-xs font-extrabold tracking-wide">Quantum AI Inference Core</h3>
          <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
            High-frequency LLM token streaming pipeline optimized for distributed neural node clusters.
          </p>
        </div>

        {/* Real-world Metrics Footer */}
        <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-300 font-semibold">
          <span className="flex items-center gap-1 text-cyan-300">
            <FiActivity className="w-3 h-3" />
            <span>Throughput: 4.2k tok/s</span>
          </span>
          <span className="text-emerald-400 font-bold">Latency: 12ms</span>
        </div>
      </div>
    </motion.div>
  );
}