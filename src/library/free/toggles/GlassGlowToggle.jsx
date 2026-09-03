import { useState } from "react";
import { motion } from "framer-motion";

export default function GlassGlowToggle() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className="flex items-center justify-between w-64 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo cursor-pointer shadow-xl">
      <span className="text-xs text-indigo-200 font-bold">GLOW_MODE</span>
      <div
        className={`w-12 h-6 flex items-center rounded-full p-1 border border-white/25 ${isOn ? "bg-indigo-500/30 justify-end" : "bg-white/5 justify-start"}`}>
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="w-4 h-4 rounded-full bg-indigo-300 shadow-md"
        />
      </div>
    </div>
  );
}
