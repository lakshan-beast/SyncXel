import { motion } from "framer-motion";

export default function GlitchButton() {
  return (
    <motion.button
      whileHover={{ skewX: [-5, 5, -2, 0], scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-5 py-2.5 bg-slate-900 border border-rose-500/40 text-rose-400 hover:text-cyan-400 font-baloo text-xs font-bold rounded-xl shadow-[0_0_15px_rgba(244,63,94,0.2)] cursor-pointer"
    >
      SYS_GLITCH()
    </motion.button>
  );
}