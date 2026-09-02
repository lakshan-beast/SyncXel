import { motion } from "framer-motion";

export default function HolographicCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-72 p-5 bg-slate-950/80 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400 rounded-2xl shadow-[0_0_25px_rgba(34,211,238,0.1)] group overflow-hidden cursor-pointer"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all" />
      <div className="relative z-10 space-y-3 font-baloo">
        <div className="flex justify-between items-center text-[10px] text-cyan-400">
          <span>UNIT_01</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />ACTIVE</span>
        </div>
        <h3 className="text-white text-sm font-bold tracking-wide">QUANTUM CORE</h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          High-frequency data streaming pipeline optimized for distributed neural node networks.
        </p>
      </div>
    </motion.div>
  );
}