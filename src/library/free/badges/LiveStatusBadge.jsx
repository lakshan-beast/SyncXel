import { motion } from "framer-motion";

export default function LiveStatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-950 border border-emerald-500/40 rounded-full font-baloo text-[11px] text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
      <motion.span
        animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"
      />
      <span>SYS ONLINE // 99.9%</span>
    </div>
  );
}