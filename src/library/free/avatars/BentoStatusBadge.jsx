import { motion } from "framer-motion";

export default function BentoStatusBadge() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-72 p-4 bg-slate-900 border border-slate-800 rounded-2xl font-baloo flex items-center justify-between text-white shadow-lg cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center font-bold text-emerald-400 text-xs">
          BS
        </div>
        <div>
          <h4 className="text-xs font-bold">Live_Status</h4>
          <span className="text-[10px] text-emerald-400">Available</span>
        </div>
      </div>
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
    </motion.div>
  );
}
