// export default function RetroLogCard() {
//   return (
//     <div className="w-72 p-3 bg-black border-2 border-amber-500 rounded font-mono space-y-1 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
//       <div className="text-[10px] text-amber-500 font-bold">
//         WARNING: MEM_THRESHOLD_90
//       </div>
//       <p className="text-[10px] text-amber-400/80">
//         GC routine triggered automatically at core level.
//       </p>
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { FiAlertTriangle } from "react-icons/fi";

export default function RetroLogCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="w-80 p-4 bg-black border-2 border-amber-500 rounded-xl font-mono space-y-3 shadow-[0_0_20px_rgba(245,158,11,0.3)] select-none cursor-pointer group"
    >
      {/* Header with Warning Icon & Code */}
      <div className="flex items-center justify-between border-b border-amber-900/80 pb-2">
        <div className="flex items-center gap-1.5 text-amber-500 font-bold text-xs">
          <FiAlertTriangle className="w-4 h-4 animate-pulse text-amber-400" />
          <span>WARN: MEM_THRESHOLD_90</span>
        </div>
        <span className="px-1.5 py-0.5 bg-amber-950/80 border border-amber-700/60 rounded text-[9px] text-amber-300 font-bold">
          [CRITICAL]
        </span>
      </div>

      {/* Log Message Details */}
      <div className="space-y-1.5 text-[11px] text-amber-400/90 font-mono">
        <p className="text-amber-300 font-bold">&gt; Garbage collection routine triggered automatically at core level.</p>
        <p className="text-amber-500/70 text-[10px]">&gt; Heap allocation: 88.4 GB / 96.0 GB</p>
      </div>

      {/* Footer Metadata */}
      <div className="flex justify-between items-center text-[9px] text-amber-600 pt-1 border-t border-amber-950">
        <span>NODE_ID: #US-EAST-04</span>
        <span>CODE: 0x8F4C</span>
      </div>
    </motion.div>
  );
}