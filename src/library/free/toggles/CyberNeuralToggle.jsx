import { useState } from "react";
import { motion } from "framer-motion";

export default function CyberNeuralToggle() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className="flex items-center justify-between w-64 p-3 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.1)]">
      <span className="text-xs text-cyan-300 font-bold">NEURAL_LINK</span>
      <div
        className={`w-12 h-6 flex items-center rounded-full p-1 border border-cyan-500/50 ${isOn ? "bg-cyan-950 justify-end" : "bg-slate-900 justify-start"}`}>
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
        />
      </div>
    </div>
  );
}
