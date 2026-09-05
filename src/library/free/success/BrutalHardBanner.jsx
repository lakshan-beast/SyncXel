import { motion } from "framer-motion";

export default function BrutalHardBanner() {
  return (
    <motion.div
      whileHover={{ x: -2, y: -2, boxShadow: "5px 5px 0px 0px #020617" }}
      className="w-80 p-3.5 bg-pink-400 border-2 border-slate-950 rounded-xl font-baloo flex items-center gap-3 shadow-[3px_3px_0px_0px_#020617] text-slate-950">
      <div className="w-8 h-8 rounded-lg bg-yellow-300 border-2 border-slate-950 flex items-center justify-center text-slate-950 font-black text-xs shadow-[2px_2px_0px_0px_#020617]">
        ⚡
      </div>
      <div>
        <h4 className="text-xs font-black uppercase">DEPLOY_COMPLETE</h4>
        <p className="text-[10px] font-bold text-slate-900">
          Node cluster is now live.
        </p>
      </div>
    </motion.div>
  );
}
