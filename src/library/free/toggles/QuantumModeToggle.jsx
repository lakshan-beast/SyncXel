import { motion } from "framer-motion";
import { useState } from "react";

export default function QuantumModeToggle() {
  const [active, setActive] = useState(true);

  return (
    <div className="flex items-center justify-between w-64 p-3 bg-slate-950 border border-indigo-500/40 rounded-xl font-baloo shadow-[0_0_15px_rgba(99,102,241,0.1)]">
      <span className="text-xs text-indigo-300 font-bold">QUANTUM_SYNC</span>
      <button
        onClick={() => setActive(!active)}
        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
          active
            ? "bg-indigo-500 text-slate-950 shadow-[0_0_10px_#6366f1]"
            : "bg-slate-900 text-slate-500 border border-slate-800"
        }`}>
        {active ? "ONLINE" : "STANDBY"}
      </button>
    </div>
  );
}
