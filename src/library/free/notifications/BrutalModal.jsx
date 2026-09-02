import { motion } from "framer-motion";

export default function BrutalModal() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-80 p-5 bg-yellow-300 border-3 border-slate-950 rounded-2xl shadow-[6px_6px_0px_0px_#020617] font-baloo space-y-4"
    >
      <div className="flex justify-between items-center border-b-2 border-slate-950 pb-2">
        <h3 className="text-sm font-black text-slate-950 uppercase">SYSTEM_ALERT</h3>
        <span className="text-xs font-black cursor-pointer bg-slate-950 text-yellow-300 px-2 py-0.5 rounded">✕</span>
      </div>
      <p className="text-xs font-bold text-slate-900">Critical core update ready for deployment. Authorize sequence?</p>
      <div className="flex gap-2 pt-2">
        <button className="flex-1 py-2 bg-pink-500 text-white font-black text-xs border-2 border-slate-950 rounded-lg shadow-[3px_3px_0px_0px_#020617] cursor-pointer">AUTHORIZE</button>
        <button className="flex-1 py-2 bg-white text-slate-950 font-black text-xs border-2 border-slate-950 rounded-lg shadow-[3px_3px_0px_0px_#020617] cursor-pointer">ABORT</button>
      </div>
    </motion.div>
  );
}