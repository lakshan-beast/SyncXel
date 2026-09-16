import { useState } from "react";
import React from "react";
import { vercelData } from "../../data/docs/vercelData";
import { HiOutlineClipboardCopy, HiOutlineCheck } from "react-icons/hi";

export default function VercelGuide() {
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
        <h2 className="text-xl font-bold text-white">{vercelData.title}</h2>
        <p className="text-xs text-slate-400">{vercelData.subtitle}</p>
        <p className="text-xs text-slate-400 italic">
          {vercelData.description}
        </p>
      </div>

      {/* Guides List Loop */}
      <div className="space-y-6">
        {vercelData.guides.map((guide, idx) => (
          <div
            key={guide.id || idx}
            className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
            <div>
              <h3 className="text-base font-bold text-white">{guide.title}</h3>
              <p className="text-xs text-slate-400 mt-1">{guide.description}</p>
            </div>

            {/* Code / Configuration Block */}
            <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-cyan-300 overflow-x-auto">
              <button
                onClick={() => handleCopy(guide.code, `vercel-${idx}`)}
                className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors"
                title="Copy code">
                {copiedCode === `vercel-${idx}` ? (
                  <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
                ) : (
                  <HiOutlineClipboardCopy className="w-4 h-4" />
                )}
              </button>
              <pre>{guide.code}</pre>
            </div>

            {/* Explanation */}
            {guide.explanation && (
              <p className="text-[11px] text-slate-400 italic bg-slate-950/30 p-2.5 rounded-lg border-l-2 border-cyan-500/50">
                💡 <span className="font-medium text-slate-300">Why?</span>{" "}
                {guide.explanation}
              </p>
            )}

            {/* Pro Tip */}
            {guide.proTip && (
              <div className="text-[11px] text-amber-300/90 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                🔥 <span className="font-bold">Pro Tip:</span> {guide.proTip}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
