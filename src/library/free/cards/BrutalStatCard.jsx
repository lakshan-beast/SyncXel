import { motion } from "framer-motion";

export default function BrutalStatCard() {
  return (
    <motion.div
      whileHover={{ x: -2, y: -2 }}
      className="w-72 p-4 bg-cyan-400 border-2 border-slate-950 rounded-xl shadow-[4px_4px_0px_0px_#020617] font-baloo space-y-2">
      <span className="text-[10px] font-black uppercase text-slate-950">
        REVENUE_STREAM
      </span>
      <div className="text-xl font-black text-slate-950">$84,200</div>
      <p className="text-[10px] text-slate-900 font-bold">
        +24.5% from last sync cycle.
      </p>
    </motion.div>
  );
}
