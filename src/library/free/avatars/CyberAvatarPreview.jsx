import { motion } from "framer-motion";

export default function CyberAvatarPreview() {
  return (
    <div className="w-72 p-4 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo flex items-center gap-4 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute -inset-1 border border-dashed border-cyan-400 rounded-full"
        />
        <div className="w-12 h-12 rounded-full bg-slate-900 border border-cyan-500 flex items-center justify-center text-cyan-300 font-bold text-sm shadow-[0_0_10px_#22d3ee]">
          NX
        </div>
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-950 rounded-full animate-pulse" />
      </div>
      <div>
        <div className="text-xs text-white font-bold">AGENT_ZERO</div>
        <div className="text-[10px] text-cyan-400/80">STATUS: ONLINE</div>
      </div>
    </div>
  );
}
