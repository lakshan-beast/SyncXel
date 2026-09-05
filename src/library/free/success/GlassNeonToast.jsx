import { motion } from "framer-motion";

export default function GlassNeonToast() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-80 p-3.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo flex items-center gap-3 shadow-2xl text-white">
      <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 font-bold text-xs shadow-[0_0_10px_#818cf8]">
        ✦
      </div>
      <div>
        <h4 className="text-xs font-bold text-indigo-200">NEON_SYNC_OK</h4>
        <p className="text-[10px] text-slate-300 font-mono">
          Quantum state updated successfully
        </p>
      </div>
    </motion.div>
  );
}
