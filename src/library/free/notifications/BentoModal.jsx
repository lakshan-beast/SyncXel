import { motion } from "framer-motion";

export default function BentoModal() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-80 p-5 bg-slate-900 border border-slate-800 rounded-2xl font-baloo space-y-4">
      <div className="flex justify-between items-center border-b border-slate-800 pb-2">
        <h3 className="text-xs font-bold text-white uppercase">
          System Config
        </h3>
        <span className="text-xs text-slate-500 cursor-pointer">✕</span>
      </div>
      <p className="text-xs text-slate-400">
        Review edge performance metrics before committing container changes.
      </p>
      <div className="flex gap-2 pt-1">
        <button className="flex-1 py-2 bg-slate-800 text-white font-bold text-xs rounded-xl border border-slate-700 cursor-pointer">
          Save
        </button>
        <button className="flex-1 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl cursor-pointer">
          Apply
        </button>
      </div>
    </motion.div>
  );
}
