import React from "react";
import {
  HiPuzzlePiece,
  HiRocketLaunch,
  HiSquare3Stack3D,
} from "react-icons/hi2";

export default function HubTabs({ mainTab, setMainTab }) {
  return (
    <div className="flex justify-start items-center mb-8 font-baloo">
      {/* Container - Left Aligned, Light Theme Style matching Header */}
      <div className="bg-white py-2 rounded-2xl border-none  flex flex-col lg:flex-row items-stretch lg:items-center gap-2  w-full lg:w-auto">
        {/* 1. Free Components Tab */}
        <button
          onClick={() => setMainTab("free")}
          className={`flex items-center gap-2.5 px-5 py-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            mainTab === "free"
              ? "bg-slate-900 text-white shadow-sm"
              : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
          }`}>
          <HiPuzzlePiece className="w-4 h-4 shrink-0" />
          <span>Freemium Components Repository</span>
        </button>

        {/* 2. UI Packs Tab */}
        <button
          onClick={() => setMainTab("packs")}
          className={`flex items-center gap-2.5 px-5 py-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            mainTab === "packs"
              ? "bg-slate-900 text-white shadow-sm"
              : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
          }`}>
          <HiRocketLaunch className="w-4 h-4 shrink-0" />
          <span>Production UI Packs & Bundles</span>
        </button>

        {/* 3. Templates / Kits Tab */}
        <button
          onClick={() => setMainTab("templates")}
          className={`flex items-center gap-2.5 px-5 py-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            mainTab === "templates"
              ? "bg-slate-900 text-white shadow-sm"
              : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
          }`}>
          <HiSquare3Stack3D className="w-4 h-4 shrink-0" />
          <span>Enterprise UI-Kit Suites</span>
        </button>
      </div>
    </div>
  );
}
