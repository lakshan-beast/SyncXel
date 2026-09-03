import { useState } from "react";
import { motion } from "framer-motion";

export default function CyberNeonCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => setChecked(!checked)}
      className="flex items-center gap-3 w-64 p-3 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.1)]">
      <div
        className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${checked ? "bg-cyan-950 border-cyan-400 shadow-[0_0_10px_#22d3ee]" : "bg-slate-900 border-slate-700"}`}>
        {checked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-2.5 h-2.5 bg-cyan-400 rounded-sm"
          />
        )}
      </div>
      <span className="text-xs text-cyan-300 font-bold">NEURAL_CHECK_L1</span>
    </div>
  );
}
