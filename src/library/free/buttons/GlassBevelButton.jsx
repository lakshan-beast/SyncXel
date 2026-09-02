import { motion } from "framer-motion";

// 10. Glassmorphic Reflection Bevel Button
export default function GlassBevelButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden px-5 py-2.5 bg-slate-900/60 backdrop-blur-md border border-white/10 hover:border-cyan-500/40 text-white font-semibold text-xs rounded-xl shadow-lg cursor-pointer group"
    >
      <span className="relative z-10">Secure Bevel</span>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-700 pointer-events-none" />
    </motion.button>
  );
}