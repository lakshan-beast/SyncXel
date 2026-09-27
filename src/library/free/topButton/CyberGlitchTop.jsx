import { motion } from "framer-motion";
export default function CyberGlitchTop() {
  return (
    <motion.button
      whileHover={{ x: [-1, 1, -1, 0] }}
      className="w-12 h-12 bg-slate-950 border-2 border-cyan-400 rounded-2xl flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)] font-baloo cursor-pointer font-black text-sm">
      TOP
    </motion.button>
  );
}
