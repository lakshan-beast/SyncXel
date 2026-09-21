import React from "react";
import { HiGift } from "react-icons/hi";
import {
  HiArrowLeft,
  HiSparkles,
  HiCheckCircle,
  HiShieldCheck,
} from "react-icons/hi2";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

export default function HubHeader() {
  return (
    <div className="space-y-2 mb-6 font-mono">
      {/* HEADER & TECH SYSTEM BAR (White / Light Theme) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white border-none border-slate-50 px-6 py-3 sm:px-8 sm:py-7 rounded-2xl shadow-sm relative overflow-hidden">
        {/* Left Column: Title, Expanded Description, Metadata & Back Button */}
        <div className="space-y-2 relative z-10 max-w-2xl">
          {/* Terminal Style Pill Badge */}
          <div className="inline-flex items-center space-x-2 px-5 py-1 rounded-full bg-white border border-slate-200 text-slate-500/50 text-xs font-mono shadow-xs">
            {/* <HiSparkles className="w-3.5 h-3.5 text-slate-700" /> */}
            <span>// next_gen_ui_ecosystem_v2.0</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Developer <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-200 to-slate-700 block sm:inline mt-1 sm:mt-0">Components Hub</span>
          </h1>

          {/* Expanded Rich Description */}
          <p className="text-slate-500 text-xs sm:text-sm leading-tight font-baloo">
            Explore a comprehensive engineering repository featuring modular,
            highly optimized React & Tailwind CSS components, interactive UI
            packs, and professional production-grade UI-Kit bundles crafted for
            modern web applications. Designed to accelerate your full-stack
            development workflow with clean copy-and-paste snippets, smooth
            Framer Motion animations, and precise architectural patterns.
          </p>

          {/* Metadata & Legal Notice (Placed BEFORE Back Button) */}
          <div className="flex flex-wrap items-center gap-1 pt-1">
            {/* Last Updated */}
            <div className="text-xs text-slate-500 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 flex items-center gap-2 shadow-xs font-baloo">
              <MdOutlineTipsAndUpdates className="w-5 h-5  text-slate-900 animate-bounce" />
              <span>
                Last Updated :{" "}
                <strong className="text-slate-900">September 2026</strong>
              </span>
            </div>

            {/* Legal / Free Usage Message */}
            <div className="bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl flex items-center gap-4 text-xs text-slate-700 shadow-xs font-baloo">
              <HiGift className="w-4 h-4 text-slate-900 shrink-0 animate-ping" />
              <span className="animate-pulse">
                Free components can be used in personal & client projects!
              </span>
            </div>
          </div>

          {/* Back to Home Button */}
          <a
            href="/"
            className="py-2.5 px-5 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-xl transition-all text-slate-200 hover:text-white flex items-center gap-2 space-x-2 text-xs font-baloo font-medium cursor-pointer w-fit shadow-xs hover:gap-3">
            <HiArrowLeft className="w-4 h-4" />
            <span>back-to_home()</span>
          </a>
        </div>

        {/* Right Column: Feature Highlights / Badges */}
        <div className="relative z-10 flex flex-col gap-1.5 shrink-0 self-start">
          <div className="grid grid-cols-2 md:flex md:flex-col gap-1.5 font-baloo">
            <span className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs text-slate-500 flex items-center gap-2 font-medium shadow-xs">
              <HiCheckCircle className="w-4 h-4 text-slate-900" /> Tailwind CSS
              v4 Ready
            </span>
            <span className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs text-slate-500 flex items-center gap-2 font-medium shadow-xs">
              <HiCheckCircle className="w-4 h-4 text-slate-900" /> Framer Motion
              Animations
            </span>
            <span className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs text-slate-500 flex items-center gap-2 font-medium shadow-xs">
              <HiCheckCircle className="w-4 h-4 text-slate-900" /> Copy & Paste
              Friendly
            </span>
            <span className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs text-slate-500 flex items-center gap-2 font-medium shadow-xs">
              <HiCheckCircle className="w-4 h-4 text-slate-900" /> TypeScript
              Native Support
            </span>
            <span className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs text-slate-500 flex items-center gap-2 font-medium shadow-xs">
              <HiCheckCircle className="w-4 h-4 text-slate-900" /> Fully
              Responsive Layouts
            </span>
            <span className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs text-slate-500 flex items-center gap-2 font-medium shadow-xs">
              <HiCheckCircle className="w-4 h-4 text-slate-900" /> Production
              Ready Code
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
