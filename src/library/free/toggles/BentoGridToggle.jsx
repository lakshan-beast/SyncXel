import { useState } from "react";
import { motion } from "framer-motion";

export default function BentoGridToggle() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className="flex items-center justify-between w-64 p-3 bg-slate-900 border border-slate-800 rounded-2xl font-baloo cursor-pointer shadow-lg">
      <span className="text-xs text-slate-200 font-bold">BENTO_CLUSTER</span>
      <div
        className={`w-12 h-6 flex items-center rounded-xl p-1 border border-slate-800 ${isOn ? "bg-slate-950 justify-end" : "bg-slate-950 justify-start"}`}>
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="w-4 h-4 rounded-lg bg-indigo-500"
        />
      </div>
    </div>
  );
}
