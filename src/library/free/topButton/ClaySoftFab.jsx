import { motion } from "framer-motion";
export default function ClaySoftFab() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="w-12 h-12 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] border border-slate-800 flex items-center justify-center text-indigo-300 font-baloo cursor-pointer">
      ↑
    </motion.button>
  );
}
