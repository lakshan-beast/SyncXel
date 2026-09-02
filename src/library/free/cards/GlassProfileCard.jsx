import { motion } from "framer-motion";

export default function GlassProfileCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-72 p-4 bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl shadow-xl font-baloo space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 font-bold text-xs">
          GF
        </div>
        <div>
          <h4 className="text-xs font-bold text-white">GLASS_NODE</h4>
          <p className="text-[10px] text-slate-400">Frosted Enclave</p>
        </div>
      </div>
      <div className="text-[11px] text-slate-300">
        Ultra-clean frosted glass card layout with soft blur aesthetics.
      </div>
    </motion.div>
  );
}
