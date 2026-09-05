import { motion } from "framer-motion";

export default function BentoClusterBanner() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, backgroundColor: "#1e293b" }}
      className="w-80 p-3.5 bg-slate-900 border border-slate-800 rounded-2xl font-baloo flex items-center gap-3 shadow-xl text-white">
      <div className="w-8 h-8 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-indigo-400 font-bold text-xs">
        i
      </div>
      <div>
        <h4 className="text-xs font-bold text-slate-100">CLUSTER_SYNCED</h4>
        <p className="text-[10px] text-slate-400">
          All data channels operational.
        </p>
      </div>
    </motion.div>
  );
}
