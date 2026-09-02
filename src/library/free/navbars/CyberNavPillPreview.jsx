import { motion } from "framer-motion";
import { useState } from "react";

export default function CyberNavPillPreview() {
  const [activeTab, setActiveTab] = useState("CORE");

  return (
    <div className="flex items-center gap-1 bg-slate-950 p-1.5 border border-indigo-500/40 rounded-xl font-mono text-xs shadow-[0_0_15px_rgba(99,102,241,0.15)]">
      {["CORE", "NET", "LOGS"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
            activeTab === tab
              ? "text-indigo-300 font-bold"
              : "text-slate-400 hover:text-slate-200"
          }`}>
          {activeTab === tab && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-indigo-500/20 border border-indigo-500/50 rounded-lg shadow-[0_0_10px_rgba(99,102,241,0.3)]"
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}
