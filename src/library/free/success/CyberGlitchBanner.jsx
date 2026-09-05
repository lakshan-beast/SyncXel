import { motion } from "framer-motion";

export default function CyberGlitchBanner() {
  return (
    <motion.div
      whileHover={{ x: [-1, 1, -1, 0] }}
      className="w-80 p-3.5 bg-slate-950 border-2 border-cyan-400 rounded-xl font-baloo flex items-center gap-3 shadow-[0_0_15px_rgba(34,211,238,0.3)] text-white">
      <div className="w-8 h-8 rounded-lg bg-cyan-500 text-slate-950 flex items-center justify-center font-black text-xs">
        !
      </div>
      <div>
        <h4 className="text-xs font-black uppercase text-cyan-400">
          OVERRIDE_ACTIVE
        </h4>
        <p className="text-[10px] text-slate-300 font-mono">
          Protocol synchronized to L2
        </p>
      </div>
    </motion.div>
  );
}
