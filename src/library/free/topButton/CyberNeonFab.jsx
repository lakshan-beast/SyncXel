import { motion } from "framer-motion";
export default function CyberNeonFab() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-12 h-12 bg-slate-950 border border-cyan-500/50 rounded-2xl flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] font-baloo cursor-pointer">
      ↑
    </motion.button>
  );
}
