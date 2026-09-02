import { motion } from "framer-motion";

export default function BrutalProfileCard() {
  return (
    <motion.div
      whileHover={{ x: -2, y: -2 }}
      className="w-72 p-4 bg-yellow-300 border-2 border-slate-950 rounded-xl shadow-[4px_4px_0px_0px_#020617] font-baloo space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-pink-500 border-2 border-slate-950 rounded-lg shadow-[2px_2px_0px_0px_#020617] flex items-center justify-center font-black text-white">
          NB
        </div>
        <div>
          <h4 className="text-xs font-black text-slate-950">BRUTAL_DEV</h4>
          <p className="text-[10px] text-slate-800">UI/UX Engineer</p>
        </div>
      </div>
      <button className="w-full py-1.5 bg-slate-950 text-yellow-300 font-bold text-xs rounded-lg border-2 border-slate-950">
        CONNECT_NODE
      </button>
    </motion.div>
  );
}
