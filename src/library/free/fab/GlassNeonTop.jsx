import { motion } from "framer-motion";
export default function GlassNeonTop() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-indigo-200 shadow-2xl font-baloo text-xs font-bold cursor-pointer shadow-[0_0_15px_#818cf8]">
      TOP
    </motion.button>
  );
}
