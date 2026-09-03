import { motion } from "framer-motion";

export default function BentoProfileCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, backgroundColor: "#1e293b" }}
      className="w-72 p-4 bg-slate-900 border border-slate-800 rounded-2xl font-baloo flex items-center gap-4 text-white shadow-xl cursor-pointer">
      <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center font-bold text-indigo-400 text-xs">
        BN
      </div>
      <div>
        <h4 className="text-xs font-bold">Bento_Profile</h4>
        <p className="text-[10px] text-slate-400">Workspace Owner</p>
      </div>
    </motion.div>
  );
}
