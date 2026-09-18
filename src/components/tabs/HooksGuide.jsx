import React, { useState } from "react";
import { customHooksData } from "../../data/docs/customHooksData";
import { HiOutlineClipboardCopy, HiOutlineCheck } from "react-icons/hi";

export default function CustomHooks() {
  // --- STATE & HANDLERS ---
  const [copiedCode, setCopiedCode] = useState(null);

  // Handle clipboard text copy with feedback timer
  const handleCopy = (code, key) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(key);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-5 font-baloo">
      
      {/* 1. MAIN HEADER CARD */}
      <div className="bg-white border border-slate-800/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-1">
        <span className="text-[10px] font-mono text-slate-500/60">
          // custom_hooks_library
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          React Custom Hooks Library
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Reusable, production-ready utility hooks to supercharge your React
          applications.
        </p>
        <p className="text-xs text-slate-600 italic bg-slate-50 p-3.5 mt-5 rounded-2xl border border-slate-200/60 text-center">
          Copy and paste these clean TypeScript/JavaScript hooks directly into
          your project utils folder.
        </p>
      </div>

      {/* 2. HOOKS LIST LOOP */}
      <div className="space-y-5">
        {customHooksData.map((hook, idx) => (
          <div
            key={hook.id || idx}
            className="bg-white border border-slate-800/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-3">
            
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-md sm:text-lg font-bold text-slate-900 font-mono">
                  {hook.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {hook.description}
                </p>
              </div>
              <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-slate-900 text-white border border-slate-800 shrink-0 shadow-xs">
                Custom Hook
              </span>
            </div>

            {/* Code Block (Mobile horizontal scroll fixed) */}
            <div className="relative bg-slate-950 p-4 sm:p-5 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto w-full max-h-80">
              <button
                onClick={() => handleCopy(hook.code, `hook-${idx}`)}
                className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors z-10 bg-slate-950/80 p-1 rounded"
                title="Copy hook code">
                {copiedCode === `hook-${idx}` ? (
                  <HiOutlineCheck className="w-4 h-4 text-white" />
                ) : (
                  <HiOutlineClipboardCopy className="w-4 h-4" />
                )}
              </button>
              <pre className="whitespace-pre">{hook.code}</pre>
            </div>

            {/* Explanation */}
            {hook.explanation && (
              <p className="text-[11px] text-slate-600 italic bg-white py-2.5 px-3.5 rounded-lg border-l-4 border-l-slate-700 border border-slate-300/50">
                💡 <span className="font-medium text-slate-800 mr-2">Why ? </span>{" "}
                {hook.explanation}
              </p>
            )}

            {/* Pro Tip */}
            {hook.proTip && (
              <div className="text-[11px] bg-slate-50 text-slate-700 py-2.5 px-3.5 rounded-lg border border-slate-200 font-baloo">
                🔥 <span className="font-bold text-slate-900">Pro Tip : </span>{" "}
                {hook.proTip}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}