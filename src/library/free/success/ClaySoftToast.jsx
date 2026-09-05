import { motion } from "framer-motion";

export default function ClaySoftToast() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-80 p-3.5 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] border border-slate-800 font-baloo flex items-center gap-3 text-white">
      <div className="w-8 h-8 rounded-xl bg-slate-900 shadow-inner border border-slate-800 flex items-center justify-center text-indigo-300 font-bold text-xs">
        ✓
      </div>
      <div>
        <h4 className="text-xs font-bold text-slate-200">CLAY_SUCCESS</h4>
        <p className="text-[10px] text-slate-400">
          Volumetric data saved successfully.
        </p>
      </div>
    </motion.div>
  );
}
