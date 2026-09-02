import { motion } from "framer-motion";
import { useState } from "react";

export default function CyberPowerSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center justify-between w-64 p-3 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo shadow-[0_0_15px_rgba(34,211,238,0.1)]">
      <span className="text-xs text-cyan-300 font-bold">SYS_POWER_GRID</span>
      <div
        onClick={() => setIsOn(!isOn)}
        className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
          isOn ? "bg-cyan-500/20 border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]" : "bg-slate-900 border border-slate-800"
        }`}
      >
        <motion.div
          animate={{ x: isOn ? 28 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`w-5 h-5 rounded-full shadow-md ${
            isOn ? "bg-cyan-400 shadow-[0_0_8px_#22d3ee]" : "bg-slate-600"
          }`}
        />
      </div>
    </div>
  );
}