import { motion } from "framer-motion";

export default function GlassFrostToast() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-80 p-3.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo flex items-center gap-3 shadow-2xl text-white">
      <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 font-bold text-xs shadow-[0_0_10px_#22d3ee]">
        ✓
      </div>
      <div>
        <h4 className="text-xs font-bold text-cyan-200">FROST_SUCCESS</h4>
        <p className="text-[10px] text-slate-300 font-mono">
          Changes saved securely ✨
        </p>
      </div>
    </motion.div>
  );
}
