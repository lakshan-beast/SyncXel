import { motion } from "framer-motion";

export default function ClayVolumetricAvatar() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-72 p-4 bg-slate-900 rounded-3xl shadow-[8px_8px_16px_#020617,-8px_-8px_16px_#1e293b] border border-slate-800 font-baloo flex items-center gap-4 text-white cursor-pointer">
      <div className="w-12 h-12 rounded-2xl bg-slate-900 shadow-inner border border-slate-800 flex items-center justify-center font-bold text-indigo-300 text-xs">
        CL
      </div>
      <div>
        <h4 className="text-xs font-bold">Volumetric_User</h4>
        <p className="text-[10px] text-slate-400">Soft Matte Profile</p>
      </div>
    </motion.div>
  );
}
