// import { motion } from "framer-motion";

// export default function GlitchButton() {
//   return (
//     <motion.button
//       whileHover={{ skewX: [-5, 5, -2, 0], scale: 1.03 }}
//       whileTap={{ scale: 0.95 }}
//       className="relative px-5 py-2.5 bg-slate-900 border border-rose-500/40 text-rose-400 hover:text-cyan-400 font-baloo text-xs font-bold rounded-xl shadow-[0_0_15px_rgba(244,63,94,0.2)] cursor-pointer"
//     >
//       SYS_GLITCH()
//     </motion.button>
//   );
// }

import { motion } from "framer-motion";
import { FiCpu } from "react-icons/fi";

export default function GlitchButton({ 
  text = "SYS_GLITCH()", 
  onClick 
}) {
  return (
    <motion.button
      whileHover={{ skewX: [-6, 6, -3, 0], scale: 1.05, boxShadow: "0 0 30px rgba(244, 63, 94, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative px-8 py-3.5 bg-gradient-to-r from-zinc-950 via-purple-950 to-zinc-950 border-2 border-rose-500/50 hover:border-cyan-400/80 text-rose-400 hover:text-cyan-300 font-mono text-xs font-bold rounded-2xl shadow-[0_10px_25px_rgba(244,63,94,0.25)] cursor-pointer select-none flex items-center gap-2.5 transition-colors group"
    >
      <FiCpu className="w-4 h-4 text-rose-500 group-hover:text-cyan-400 transition-colors animate-pulse" />
      <span className="tracking-widest">{text}</span>
    </motion.button>
  );
}