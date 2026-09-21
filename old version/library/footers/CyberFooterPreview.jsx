import { motion } from "framer-motion";

export default function CyberFooterPreview() {
  return (
    <div className="w-72 p-3 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo shadow-[0_0_15px_rgba(34,211,238,0.15)] space-y-2 text-xs">
      <div className="flex justify-between items-center text-cyan-300 font-bold">
        <span>NEXUS_SYS_v2.6</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </div>
      <div className="text-[10px] text-slate-400">
        STATUS: SECURE | PING: 14ms
      </div>
      <div className="pt-2 border-t border-slate-900 flex justify-between text-[10px] text-slate-500">
        <span>© 2026 NEXUS_CORE</span>
        <span className="text-cyan-400 cursor-pointer">/TERMINAL</span>
      </div>
    </div>
  );
}