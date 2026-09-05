import { motion } from "framer-motion";

export default function ClayPillBanner() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-80 p-3 bg-slate-900 rounded-full shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] border border-slate-800 font-baloo flex items-center gap-3 px-4 text-white">
      <div className="w-7 h-7 rounded-full bg-slate-900 shadow-inner border border-slate-800 flex items-center justify-center text-cyan-300 font-bold text-[10px]">
        ✓
      </div>
      <div>
        <h4 className="text-[11px] font-bold text-cyan-300">
          Soft Matte Notification Saved
        </h4>
      </div>
    </motion.div>
  );
}
