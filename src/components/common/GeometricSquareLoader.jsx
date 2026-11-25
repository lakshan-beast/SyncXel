import { motion } from "framer-motion";

export default function GeometricSquareLoader() {
  return (
    <div className="w-28 h-28 mx-auto bg-white/60 border border-slate-200 rounded-3xl shadow-sm flex items-center justify-center relative select-none">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute inset-0 border-3 border-cyan-500/30 rounded-xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute inset-2 border-3 border-indigo-500/40 rounded-lg"
        />
        <div className="w-2 h-2 bg-cyan-400 rounded-sm shadow-[0_0_10px_#22d3ee]" />
      </div>
    </div>
  );
}
