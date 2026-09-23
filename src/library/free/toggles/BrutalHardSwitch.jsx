import { useState } from "react";
import { motion } from "framer-motion";

export default function BrutalHardSwitch() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className="flex items-center justify-between w-64 p-3 bg-pink-400 border-2 border-slate-950 rounded-xl font-baloo cursor-pointer shadow-[3px_3px_0px_0px_#020617]">
      <span className="text-xs text-slate-950 font-black">HARD_TOGGLE</span>
      <div
        className={`w-12 h-6 flex items-center rounded-lg p-0.5 border-2 border-slate-950 ${isOn ? "bg-yellow-300 justify-end" : "bg-white justify-start"}`}>
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="w-4 h-4 rounded bg-slate-950"
        />
      </div>
    </div>
  );
}
