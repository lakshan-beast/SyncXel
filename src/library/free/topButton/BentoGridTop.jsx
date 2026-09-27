import { motion } from "framer-motion";
export default function BentoGridTop() {
  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "#1e293b" }}
      className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-emerald-400 shadow-xl font-baloo text-xs font-bold cursor-pointer">
      TOP
    </motion.button>
  );
}
