import { useState } from "react";
import { motion } from "framer-motion";

export default function RetroCrtSwitch() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className="flex items-center justify-between w-64 p-3 bg-black border-2 border-green-500 rounded font-mono cursor-pointer shadow-[0_0_10px_rgba(34,197,94,0.3)]">
      <span className="text-xs text-green-300">CRT_POWER</span>
      <div
        className={`w-12 h-5 flex items-center rounded p-0.5 border border-green-500 ${isOn ? "bg-green-950 justify-end" : "bg-black justify-start"}`}>
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="w-3.5 h-3.5 rounded bg-green-400"
        />
      </div>
    </div>
  );
}
