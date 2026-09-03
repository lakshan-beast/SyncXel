import { useState } from "react";
import { motion } from "framer-motion";

export default function GlassNeonCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => setChecked(!checked)}
      className="flex items-center gap-3 w-64 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo cursor-pointer shadow-xl">
      <div
        className={`w-5 h-5 rounded-lg border border-white/25 flex items-center justify-center transition-all ${checked ? "bg-indigo-500/30 shadow-[0_0_10px_#818cf8]" : "bg-white/5"}`}>
        {checked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-2.5 h-2.5 bg-indigo-300 rounded-sm"
          />
        )}
      </div>
      <span className="text-xs text-indigo-200 font-bold">NEON_GLASS_BOX</span>
    </div>
  );
}
