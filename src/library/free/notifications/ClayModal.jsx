import { motion } from "framer-motion";

export default function ClayModal() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-80 p-5 bg-slate-900 rounded-3xl shadow-[10px_10px_20px_#020617,-10px_-10px_20px_#1e293b] font-baloo space-y-4 border border-slate-800">
      <div className="flex justify-between items-center border-b border-slate-800 pb-2">
        <h3 className="text-xs font-bold text-white">Volumetric Vault</h3>
        <span className="text-xs text-slate-400 cursor-pointer">✕</span>
      </div>
      <p className="text-xs text-slate-400">
        Soft tactile feedback enabled for high-security node access.
      </p>
      <button className="w-full py-2 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-2xl shadow-inner border border-indigo-500/30 cursor-pointer">
        UNLOCK_VAULT
      </button>
    </motion.div>
  );
}
