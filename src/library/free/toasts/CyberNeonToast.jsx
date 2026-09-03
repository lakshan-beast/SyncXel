import { motion } from "framer-motion";

export default function CyberNeonToast() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-80 p-3.5 bg-slate-950 border border-cyan-500/50 rounded-xl font-baloo flex items-center gap-3 shadow-[0_0_20px_rgba(34,211,238,0.2)] text-white">
      <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-300 font-bold text-xs shadow-[0_0_10px_#22d3ee]">
        ✓
      </div>
      <div>
        <h4 className="text-xs font-bold text-cyan-300">SYSTEM_SUCCESS</h4>
        <p className="text-[10px] text-slate-400 font-mono">
          Changes deployed successfully ✨
        </p>
      </div>
    </motion.div>
  );
}
