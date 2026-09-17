import React from "react";

export default function HubTabs({ mainTab, setMainTab }) {
  return (
    <div className="flex justify-center items-center mb-10 font-mono">
      <div className="bg-slate-900 p-1.5 rounded-2xl border border-slate-800 flex flex-wrap justify-center gap-2 shadow-xl">
        <button
          onClick={() => setMainTab("freemium")}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            mainTab === "freemium"
              ? "bg-white text-slate-950 shadow-md"
              : "text-slate-400 hover:text-white"
          }`}>
          🧩 Freemium Components (Free)
        </button>
        <button
          onClick={() => setMainTab("uiPacksData")}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            mainTab === "uiPacksData"
              ? "bg-white text-slate-950 shadow-md"
              : "text-slate-400 hover:text-white"
          }`}>
          🚀 Premium UI-Packs
        </button>
        <button
          onClick={() => setMainTab("premium")}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            mainTab === "premium"
              ? "bg-white text-slate-950 shadow-md"
              : "text-slate-400 hover:text-white"
          }`}>
          🚀 Premium UI-Kit
        </button>
      </div>
    </div>
  );
}