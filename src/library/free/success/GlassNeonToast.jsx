// import { motion } from "framer-motion";

// export default function GlassNeonToast() {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="w-80 p-3.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo flex items-center gap-3 shadow-2xl text-white">
//       <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 font-bold text-xs shadow-[0_0_10px_#818cf8]">
//         ✦
//       </div>
//       <div>
//         <h4 className="text-xs font-bold text-indigo-200">NEON_SYNC_OK</h4>
//         <p className="text-[10px] text-slate-300 font-mono">
//           Quantum state updated successfully
//         </p>
//       </div>
//     </motion.div>
//   );
// }
import { motion } from "framer-motion";
import { FiCloud } from "react-icons/fi";

export default function GlassNeonToast() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="w-80 p-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl font-baloo flex items-center gap-3.5 shadow-[0_0_30px_rgba(129,140,248,0.2)] text-white select-none cursor-pointer group"
    >
      {/* Glass Neon Icon Box */}
      <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 font-bold text-xs shadow-[0_0_12px_#818cf8] shrink-0 group-hover:scale-105 transition-transform">
        <FiCloud className="w-4 h-4" />
      </div>

      {/* Text Content with Title Case */}
      <div className="space-y-0.5 flex-1">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-indigo-200 tracking-wide">
            Cloud Sync Complete
          </h4>
          <span className="text-[9px] text-indigo-300 bg-indigo-500/20 px-1.5 py-0.5 rounded border border-indigo-400/30 font-medium">
            Synced
          </span>
        </div>
        <p className="text-[11px] text-slate-300 font-medium leading-relaxed">
          All workspace preferences have been securely synchronized.
        </p>
      </div>
    </motion.div>
  );
}
