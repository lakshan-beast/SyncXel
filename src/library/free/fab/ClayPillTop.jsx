import { motion } from "framer-motion";
export default function ClayPillTop() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="w-14 h-12 bg-slate-900 rounded-full shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] border border-slate-800 flex items-center justify-center text-cyan-300 font-baloo text-xs font-bold cursor-pointer">
      TOP
    </motion.button>
  );
}
