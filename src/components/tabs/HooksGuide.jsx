import { useState } from "react";
import React from "react";
import { customHooksData } from "../../data/docs/customHooksData";
import { HiOutlineClipboardCopy, HiOutlineCheck } from "react-icons/hi";

export default function CustomHooks() {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code, key) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(key);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Main Header Card */}
      <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-3">
        <h2 className="text-xl font-bold text-white">
          React Custom Hooks Library
        </h2>
        <p className="text-xs text-slate-400">
          Reusable, production-ready utility hooks to supercharge your React
          applications.
        </p>
        <p className="text-xs text-slate-400 italic">
          Copy and paste these clean TypeScript/JavaScript hooks directly into
          your project utils folder.
        </p>
      </div>

      {/* Hooks List Loop */}
      <div className="space-y-6">
        {customHooksData.map((hook, idx) => (
          <div
            key={hook.id || idx}
            className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-bold text-white font-mono">
                  {hook.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {hook.description}
                </p>
              </div>
              <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                Custom Hook
              </span>
            </div>

            {/* Code Block */}
            <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-cyan-300 overflow-x-auto max-h-80">
              <button
                onClick={() => handleCopy(hook.code, `hook-${idx}`)}
                className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors"
                title="Copy hook code">
                {copiedCode === `hook-${idx}` ? (
                  <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
                ) : (
                  <HiOutlineClipboardCopy className="w-4 h-4" />
                )}
              </button>
              <pre>{hook.code}</pre>
            </div>

            {/* Explanation */}
            {hook.explanation && (
              <p className="text-[11px] text-slate-400 italic bg-slate-950/30 p-2.5 rounded-lg border-l-2 border-cyan-500/50">
                💡 <span className="font-medium text-slate-300">Why?</span>{" "}
                {hook.explanation}
              </p>
            )}

            {/* Pro Tip */}
            {hook.proTip && (
              <div className="text-[11px] text-amber-300/90 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                🔥 <span className="font-bold">Pro Tip:</span> {hook.proTip}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
