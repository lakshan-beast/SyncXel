import React from "react";
import {
  HiArrowLeft,
  HiSparkles,
  HiCheckCircle,
  HiShieldCheck,
} from "react-icons/hi2";

export default function HubHeader() {
  return (
    <div className="space-y-8 mb-10 font-mono">
      {/* 1. TOP NAVIGATION & STATUS BAR */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="/"
            className="p-2.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-xl transition-all text-slate-300 hover:text-white flex items-center space-x-2 text-xs font-medium cursor-pointer shadow-sm">
            <HiArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>
          <span className="text-xs text-slate-400 bg-slate-900 px-4 py-2.5 rounded-xl border border-slate-800 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            Last Updated :{" "}
            <strong className="text-white">September 2026</strong>
          </span>
        </div>

        {/* Friendly Free Usage Banner */}
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 px-4 py-2.5 rounded-xl flex items-center space-x-2 text-xs text-slate-300 shadow-sm">
          <HiSparkles className="w-4 h-4 text-white shrink-0" />
          <span>
            Free components can be used in personal & client projects!
          </span>
        </div>
      </div>

      {/* 2. MAIN HEADING & DESCRIPTION SECTION */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-2">
        {/* Mini Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold bg-slate-900 border border-slate-800 text-slate-300 shadow-inner">
          <HiShieldCheck className="w-3.5 h-3.5 text-white" />
          <span>Next-Gen UI Ecosystem & Component Library</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
          Developer{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600">
            Hub
          </span>
        </h1>

        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed font-sans">
          Explore modular, highly optimized React & Tailwind components or
          unlock professional production-grade UI-Kit bundles crafted for modern
          web apps.
        </p>

        {/* Feature Highlights Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-[11px] text-slate-400 font-medium">
          <span className="bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <HiCheckCircle className="w-3.5 h-3.5 text-white" /> Tailwind CSS v4
            Ready
          </span>
          <span className="bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <HiCheckCircle className="w-3.5 h-3.5 text-white" /> Framer Motion
            Animations
          </span>
          <span className="bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <HiCheckCircle className="w-3.5 h-3.5 text-white" /> Copy & Paste
            Friendly
          </span>
        </div>
      </div>
    </div>
  );
}
