import { motion } from "framer-motion";
export default function GlassFrostFab() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-cyan-200 shadow-2xl font-baloo cursor-pointer">
      ↑
    </motion.button>
  );
}
