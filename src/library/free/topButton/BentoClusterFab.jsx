import { motion } from "framer-motion";
export default function BentoClusterFab() {
  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "#1e293b" }}
      className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-slate-200 shadow-xl font-baloo cursor-pointer">
      ↑
    </motion.button>
  );
}
