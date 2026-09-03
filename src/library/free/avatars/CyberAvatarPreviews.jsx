import { motion } from "framer-motion";

export default function CyberAvatarPreview() {
  return (
    <div className="w-72 p-4 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo flex items-center gap-4 text-white shadow-[0_0_15px_rgba(34,211,238,0.15)]">
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-1 rounded-full border border-dashed border-cyan-400"
        />
        <div className="w-12 h-12 rounded-full bg-cyan-950 border border-cyan-500 flex items-center justify-center font-bold text-cyan-300 text-xs">
          CY
        </div>
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-950 rounded-full animate-pulse" />
      </div>
      <div>
        <h4 className="text-xs font-bold text-cyan-300">Agent_Zero</h4>
        <p className="text-[10px] text-slate-400 font-mono">
          NODE_ACTIVE // L2
        </p>
      </div>
    </div>
  );
}
