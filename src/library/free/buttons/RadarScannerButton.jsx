import { motion } from "framer-motion";

// 6. Radar Scanner Button
export default function RadarScannerButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden px-5 py-2.5 bg-slate-950 border border-cyan-500/40 text-cyan-300 font-mono text-xs rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.15)] cursor-pointer group"
    >
      <span className="relative z-10 flex items-center gap-2">
        <motion.span 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
        />
        SCAN_TARGET
      </span>
      <motion.div 
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none"
      />
    </motion.button>
  );
}