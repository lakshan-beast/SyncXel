import { motion } from "framer-motion";

export default function BrutalBadgeProfile() {
  return (
    <motion.div
      whileHover={{ x: -2, y: -2, boxShadow: "5px 5px 0px 0px #020617" }}
      className="w-72 p-4 bg-pink-400 border-2 border-slate-950 rounded-2xl font-baloo flex items-center gap-4 shadow-[3px_3px_0px_0px_#020617] text-slate-950 cursor-pointer">
      <div className="w-12 h-12 bg-yellow-300 border-2 border-slate-950 rounded-full flex items-center justify-center font-black text-slate-950 text-xs">
        ✨
      </div>
      <div>
        <h4 className="text-xs font-black uppercase">Sticker_Avatar</h4>
        <span className="text-[10px] bg-slate-950 text-white px-2 py-0.5 rounded font-black">
          VIP PRO
        </span>
      </div>
    </motion.div>
  );
}
