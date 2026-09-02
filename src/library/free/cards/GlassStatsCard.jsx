import { motion } from "framer-motion";

export default function GlassStatsCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-72 p-4 bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl shadow-xl font-baloo space-y-2">
      <div className="flex justify-between items-center text-xs text-slate-300">
        <span>SYSTEM_LOAD</span>
        <span className="text-cyan-400 font-bold">42%</span>
      </div>
      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
        <div className="bg-cyan-400 h-full w-[42%]" />
      </div>
    </motion.div>
  );
}
