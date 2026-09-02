import { motion } from "framer-motion";

export default function CyberSecurityBadge() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo text-[11px] text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)] cursor-pointer"
    >
      <span className="text-cyan-400 font-bold">SECURE L3</span>
      <span className="w-1 h-3 bg-cyan-400 animate-pulse" />
    </motion.div>
  );
}