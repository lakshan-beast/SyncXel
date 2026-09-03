import { motion } from "framer-motion";

export default function ClayPillProfile() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-72 p-3 bg-slate-900 rounded-full shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] border border-slate-800 font-baloo flex items-center gap-4 text-white px-5 cursor-pointer">
      <div className="w-9 h-9 rounded-full bg-slate-900 shadow-inner border border-slate-800 flex items-center justify-center font-bold text-cyan-300 text-[11px]">
        CP
      </div>
      <div>
        <h4 className="text-xs font-bold">Clay_Pill</h4>
        <p className="text-[9px] text-cyan-400">Active Node</p>
      </div>
    </motion.div>
  );
}
