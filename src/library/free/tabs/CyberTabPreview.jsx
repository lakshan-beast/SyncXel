import { motion } from "framer-motion";
import { useState } from "react";

export default function CyberTabPreview() {
  const [activeTab, setActiveTab] = useState("CORE");
  const tabs = ["CORE", "NET", "LOGS"];

  return (
    <div className="w-72 p-3 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo shadow-[0_0_15px_rgba(34,211,238,0.15)]">
      <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative flex-1 py-1 text-[11px] font-bold rounded-md transition-colors cursor-pointer ${
              activeTab === tab
                ? "text-cyan-300"
                : "text-slate-400 hover:text-slate-200"
            }`}>
            {activeTab === tab && (
              <motion.div
                layoutId="cyber-tab-bg"
                className="absolute inset-0 bg-cyan-500/20 border border-cyan-400/50 rounded-md shadow-[0_0_10px_rgba(34,211,238,0.2)]"
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>
      <div className="mt-3 text-[11px] text-slate-400 px-1">
        Active Stream:{" "}
        <span className="text-cyan-400 font-bold">{activeTab}_NODE_ACTIVE</span>
      </div>
    </div>
  );
}
