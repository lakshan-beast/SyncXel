import { motion } from "framer-motion";

export default function GlassModal() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-80 p-5 bg-slate-900/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl font-baloo space-y-4 text-white">
      <div className="flex justify-between items-center border-b border-white/10 pb-2">
        <h3 className="text-xs font-bold tracking-wider text-cyan-400">
          ENCLAVE_ACCESS
        </h3>
        <span className="text-xs text-slate-400 cursor-pointer">✕</span>
      </div>
      <p className="text-xs text-slate-300">
        Establishing encrypted tunnel to edge node. Please wait...
      </p>
      <button className="w-full py-2 bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-bold text-xs rounded-xl shadow-inner cursor-pointer">
        CONFIRM_TUNNEL
      </button>
    </motion.div>
  );
}
