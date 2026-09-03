import { motion } from "framer-motion";

export default function BrutalPopAvatar() {
  return (
    <motion.div
      whileHover={{ x: -2, y: -2, boxShadow: "5px 5px 0px 0px #020617" }}
      className="w-72 p-4 bg-yellow-300 border-2 border-slate-950 rounded-2xl font-baloo flex items-center gap-4 shadow-[3px_3px_0px_0px_#020617] text-slate-950 cursor-pointer">
      <div className="w-12 h-12 bg-pink-500 border-2 border-slate-950 rounded-xl flex items-center justify-center font-black text-white text-xs shadow-[2px_2px_0px_0px_#020617]">
        BP
      </div>
      <div>
        <h4 className="text-xs font-black uppercase">Brutal_User</h4>
        <p className="text-[10px] font-bold text-slate-800">LEVEL_MAX_99</p>
      </div>
    </motion.div>
  );
}
