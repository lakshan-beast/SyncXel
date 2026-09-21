import { motion } from "framer-motion";
import { useState } from "react";

export default function MatrixTabPanel() {
  const [activeTab, setActiveTab] = useState("V1");
  const tabs = ["V1", "V2", "V3"];

  return (
    <div className="w-72 p-3 bg-slate-950 border border-indigo-500/40 rounded-xl font-baloo shadow-[0_0_15px_rgba(99,102,241,0.15)]">
      <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative flex-1 py-1 text-[11px] font-bold rounded-md transition-colors cursor-pointer ${
              activeTab === tab
                ? "text-indigo-300"
                : "text-slate-400 hover:text-slate-200"
            }`}>
            {activeTab === tab && (
              <motion.div
                layoutId="matrix-tab-bg"
                className="absolute inset-0 bg-indigo-500/20 border border-indigo-400/50 rounded-md shadow-[0_0_10px_rgba(99,102,241,0.2)]"
              />
            )}
            <span className="relative z-10">CLUSTER_{tab}</span>
          </button>
        ))}
      </div>
      <div className="mt-3 text-[11px] text-slate-400 px-1">
        Cluster State:{" "}
        <span className="text-indigo-400 font-bold">SYNCED_OK</span>
      </div>
    </div>
  );
}
