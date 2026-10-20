// import { motion } from "framer-motion";

// export default function GlassModal() {
//   return (
//     <motion.div
//       initial={{ scale: 0.9, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       className="w-80 p-5 bg-slate-900/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl font-baloo space-y-4 text-white">
//       <div className="flex justify-between items-center border-b border-white/10 pb-2">
//         <h3 className="text-xs font-bold tracking-wider text-cyan-400">
//           ENCLAVE_ACCESS
//         </h3>
//         <span className="text-xs text-slate-400 cursor-pointer">✕</span>
//       </div>
//       <p className="text-xs text-slate-300">
//         Establishing encrypted tunnel to edge node. Please wait...
//       </p>
//       <button className="w-full py-2 bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-bold text-xs rounded-xl shadow-inner cursor-pointer">
//         CONFIRM_TUNNEL
//       </button>
//     </motion.div>
//   );
// }


import { motion } from "framer-motion";
import { FiRotateCcw, FiX } from "react-icons/fi";

export default function GlassUndoToast() {
  return (
    <motion.div
      role="status"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="flex items-center gap-3 w-80 p-3.5 bg-white/10 backdrop-blur-xl border border-white/25 rounded-2xl shadow-2xl group"
    >
      <FiRotateCcw className="w-4 h-4 text-cyan-600 group-hover:animate-spin" />

      <p className="flex-1 text-sm text-cyan-500">
        Email archived
      </p>

      <button className="text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition">
        Undo
      </button>

      <button aria-label="Dismiss notification" className="text-white/50 hover:text-white transition">
        <FiX className="w-4 h-4" />
      </button>
    </motion.div>
  );
}