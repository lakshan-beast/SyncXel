import { useState } from "react";
import { motion } from "framer-motion";

export default function ClayPillToggle() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className="flex items-center justify-between w-64 p-3 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] border border-slate-800 font-baloo cursor-pointer">
      <span className="text-xs text-cyan-300 font-bold">VOLUMETRIC_MODE</span>
      <div
        className={`w-12 h-6 flex items-center rounded-full p-1 bg-slate-900 shadow-inner border border-slate-800 ${isOn ? "justify-end" : "justify-start"}`}>
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="w-4 h-4 rounded-full bg-cyan-400 shadow-sm"
        />
      </div>
    </div>
  );
}
