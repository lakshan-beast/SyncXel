import { motion } from "framer-motion";

export default function CyberHexaProfile() {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="w-72 p-4 bg-slate-950 border border-cyan-500/50 rounded-2xl font-baloo flex items-center gap-4 text-white shadow-[0_0_20px_rgba(34,211,238,0.2)] cursor-pointer">
      <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-400 rounded-xl flex items-center justify-center font-mono font-bold text-cyan-300 text-xs rotate-3">
        HEX
      </div>
      <div>
        <h4 className="text-xs font-bold text-cyan-400">Cyber_Vanguard</h4>
        <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">Verified Node</span>
      </div>
    </motion.div>
  );
}