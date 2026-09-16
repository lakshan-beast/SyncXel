import { useState } from "react";
import React from "react";
import { cssTricksData } from "../../data/docs/cssTricksData";
import { HiOutlineClipboardCopy, HiOutlineCheck } from "react-icons/hi";

export default function CssTricks() {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code, key) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(key);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-8">
      {cssTricksData.map((trick) => (
        <div
          key={trick.id}
          className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-5">
          {/* Header & Category Badge */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">{trick.title}</h2>
              <p className="text-xs text-slate-400 mt-1">{trick.description}</p>
            </div>
            <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
              {trick.category}
            </span>
          </div>

          {/* Methods Loop */}
          <div className="space-y-6 pt-2">
            {trick.methods.map((method, idx) => (
              <div
                key={idx}
                className="space-y-3 bg-slate-950/40 p-4 rounded-xl border border-white/5">
                <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  {method.name}
                </h3>

                {/* Code Block */}
                <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
                  <button
                    onClick={() =>
                      handleCopy(method.code, `${trick.id}-${idx}`)
                    }
                    className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors"
                    title="Copy code">
                    {copiedCode === `${trick.id}-${idx}` ? (
                      <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <HiOutlineClipboardCopy className="w-4 h-4" />
                    )}
                  </button>
                  <pre>{method.code}</pre>
                </div>

                {/* Explanation */}
                {method.explanation && (
                  <p className="text-[11px] text-slate-400 italic bg-slate-950/30 p-2.5 rounded-lg border-l-2 border-cyan-500/50">
                    💡 <span className="font-medium text-slate-300">Why?</span>{" "}
                    {method.explanation}
                  </p>
                )}

                {/* Pro Tip */}
                {method.proTip && (
                  <div className="text-[11px] text-amber-300/90 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                    🔥 <span className="font-bold">Pro Tip:</span>{" "}
                    {method.proTip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
