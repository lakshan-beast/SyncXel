import { motion } from "framer-motion";

export default function GlassEnclaveCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-72 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl font-baloo flex items-center gap-4 text-white shadow-2xl cursor-pointer">
      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center font-bold text-cyan-300 text-xs">
        GE
      </div>
      <div>
        <h4 className="text-xs font-bold text-cyan-200">Enclave_Member</h4>
        <p className="text-[10px] text-slate-300 font-mono">SECURE_TUNNEL</p>
      </div>
    </motion.div>
  );
}
