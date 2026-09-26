// import { motion } from "framer-motion";

// export default function CyberNeonToast() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="w-80 p-3.5 bg-slate-950 border border-cyan-500/50 rounded-xl font-baloo flex items-center gap-3 shadow-[0_0_20px_rgba(34,211,238,0.2)] text-white">
//       <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-300 font-bold text-xs shadow-[0_0_10px_#22d3ee]">
//         ✓
//       </div>
//       <div>
//         <h4 className="text-xs font-bold text-cyan-300">SYSTEM_SUCCESS</h4>
//         <p className="text-[10px] text-slate-400 font-mono">
//           Changes deployed successfully ✨
//         </p>
//       </div>
//     </motion.div>
//   );
// }


import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function CyberNeonToast() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="min-w-50 max-w-100 p-4 bg-slate-950/95 backdrop-blur-xl border border-cyan-500/60 rounded-2xl font-baloo flex items-center gap-3.5 shadow-[0_0_25px_rgba(34,211,238,0.25)] text-white select-none cursor-pointer group"
    >
      {/* Glowing Success Icon */}
      <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-400/80 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_#22d3ee] shrink-0 group-hover:scale-105 transition-transform">
        <FiCheckCircle className="w-4 h-4" />
      </div>

      {/* Text Content */}
      <div className="space-y-0.5 flex-1">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-extrabold text-cyan-300 tracking-wide">SYSTEM_SUCCESS</h4>
          <span className="text-[9px] text-slate-400 font-mono">Just now</span>
        </div>
        <p className="text-[11px] text-slate-300 font-medium leading-relaxed">
          Production pipeline changes deployed successfully to edge cluster. ✨
        </p>
      </div>
    </motion.div>
  );
}