import React, { useState } from "react";
import { HiOutlineCheck, HiOutlineClipboardCopy } from "react-icons/hi";
import { MdOutlineMaximize } from "react-icons/md";

// 🌟 export default යොදා ඇත
export default function ComponentCard({ item }) {
  // 🌟 1. Guard Clause: item එක නැත්නම් Crash නොවී ආරක්ෂා වෙනවා
  if (!item) {
    return null;
  }

  const [activeTab, setActiveTab] = useState("jsx");
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const LiveComponent = item.component;

  // Header, Footer, Hero, Navigation sections සදහා විශේෂ Layout handling
  const isLargeSection = item.category
    ? ["footers", "heroes", "navbars", "sections"].includes(
        item.category.toLowerCase(),
      )
    : false;

  const handleCopy = () => {
    const codeToCopy = item.code ? item.code[activeTab] : "";
    if (codeToCopy) {
      navigator.clipboard.writeText(codeToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <div
        className={`bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl flex flex-col justify-between hover:border-cyan-500/30 transition-all group ${
          isLargeSection
            ? "col-span-1 md:col-span-2 lg:col-span-3"
            : "col-span-1"
        }`}>
        <div>
          {/* Header Area */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                {item.title || "Untitled Component"}
              </h3>
              <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                {item.category || "General"}
              </span>
            </div>

            {/* Large Section එකක් නම් Expand / Fullscreen Button එකක් පෙන්නනවා */}
            {isLargeSection && (
              <button
                onClick={() => setIsFullscreen(true)}
                className="flex items-center space-x-1 text-xs text-slate-400 hover:text-white bg-slate-800 p-2 rounded-lg border border-white/10 transition-colors"
                title="Expand Full Preview">
                <MdOutlineMaximize className="w-4 h-4" />
                <span className="hidden sm:inline">Full Preview</span>
              </button>
            )}
          </div>

          {/* 1. Live Preview Area */}
          <div
            className={`bg-slate-950/90 rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center ${
              isLargeSection
                ? "h-[350px] overflow-y-auto p-2"
                : "min-h-[180px] p-8"
            }`}>
            <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

            <div className={`z-10 ${isLargeSection ? "w-full h-full" : ""}`}>
              {LiveComponent ? (
                <LiveComponent />
              ) : (
                <div className="text-amber-400 text-xs text-center p-3 border border-amber-500/20 rounded-lg bg-amber-500/5">
                  ⚠️ Preview Unavailable <br />
                  <span className="text-[10px] text-slate-400">
                    Check if {item.title} has 'export default'
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* 2. Code Tab Toggle */}
          <div className="mt-4 flex items-center justify-end">
            <div className="flex bg-slate-950 p-1 rounded-xl border border-white/10 text-xs shrink-0">
              <button
                onClick={() => setActiveTab("jsx")}
                className={`px-3 py-1 rounded-lg font-bold text-[11px] transition-all ${
                  activeTab === "jsx"
                    ? "bg-cyan-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}>
                React
              </button>
              <button
                onClick={() => setActiveTab("html")}
                className={`px-3 py-1 rounded-lg font-bold text-[11px] transition-all ${
                  activeTab === "html"
                    ? "bg-cyan-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}>
                HTML
              </button>
            </div>
          </div>
        </div>

        {/* 3. Copy Code Button */}
        <button
          onClick={handleCopy}
          className={`mt-4 w-full py-2.5 rounded-xl text-xs font-extrabold flex items-center justify-center space-x-2 transition-all active:scale-95 ${
            copied
              ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-400"
              : "bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-white border border-white/10"
          }`}>
          {copied ? (
            <>
              <HiOutlineCheck className="w-4 h-4" />
              <span>Copied {activeTab.toUpperCase()} Code!</span>
            </>
          ) : (
            <>
              <HiOutlineClipboardCopy className="w-4 h-4" />
              <span>Copy {activeTab.toUpperCase()} Code</span>
            </>
          )}
        </button>
      </div>

      {/* 🌟 FULLSCREEN MODAL FOR FOOTERS/HEROES */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-2xl flex flex-col p-4 sm:p-8">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <h2 className="text-xl font-bold text-white">
              {item.title} (Full Preview)
            </h2>
            <button
              onClick={() => setIsFullscreen(false)}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-white/10">
              Close Preview ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto bg-slate-900 rounded-2xl border border-white/10 p-4">
            {LiveComponent && <LiveComponent />}
          </div>
        </div>
      )}
    </>
  );
}
