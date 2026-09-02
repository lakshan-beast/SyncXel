import { motion } from "framer-motion";

export default function MagneticButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
      className="px-5 py-2.5 bg-slate-900 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 font-mono text-xs rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.15)] cursor-pointer">
      [ Magnetic Pull ]
    </motion.button>
  );
}
