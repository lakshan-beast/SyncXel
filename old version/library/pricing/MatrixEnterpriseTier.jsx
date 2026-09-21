import { motion } from "framer-motion";

export default function MatrixEnterpriseTier() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-72 p-4 bg-slate-950 border border-indigo-500/40 rounded-2xl shadow-[0_0_20px_rgba(99,102,241,0.15)] font-baloo space-y-3"
    >
      <div className="flex justify-between items-center">
        <span className="text-xs text-indigo-400 font-bold tracking-wider">QUANTUM_GRID</span>
        <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-md border border-indigo-500/30">CUSTOM</span>
      </div>
      <div>
        <div className="text-xl font-bold text-white">$199 <span className="text-xs text-slate-500 font-normal">/month</span></div>
        <p className="text-[11px] text-slate-400 mt-1">Dedicated cluster infrastructure for massive enterprise scaling.</p>
      </div>
      <div className="space-y-1.5 text-xs text-slate-300 border-t border-slate-900 pt-2">
        <div className="flex items-center gap-2">✓ Unlimited Node Cluster</div>
        <div className="flex items-center gap-2">✓ 24/7 Priority Support</div>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-2 bg-indigo-500 text-slate-950 font-bold text-xs rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.3)] cursor-pointer"
      >
        CONTACT_CORE
      </motion.button>
    </motion.div>
  );
}