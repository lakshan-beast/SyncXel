import { useState } from "react";
import React from "react";
import { seoAndDnsData } from "../../data/docs/seoAndDnsData";
import { HiOutlineClipboardCopy, HiOutlineCheck } from "react-icons/hi";

export default function SeoDnsGuide() {
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
        <h2 className="text-xl font-bold text-white">{seoAndDnsData.title}</h2>
        <p className="text-xs text-slate-400">{seoAndDnsData.subtitle}</p>
        <p className="text-xs text-slate-400 italic">
          {seoAndDnsData.description}
        </p>
      </div>

      {/* Items Loop */}
      <div className="space-y-6">
        {seoAndDnsData.items.map((item, idx) => (
          <div
            key={item.id || idx}
            className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
            <div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-400 mt-1">{item.description}</p>
            </div>

            {/* Code / Configuration Block */}
            <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-cyan-300 overflow-x-auto">
              <button
                onClick={() => handleCopy(item.code, `seo-${idx}`)}
                className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors"
                title="Copy configuration">
                {copiedCode === `seo-${idx}` ? (
                  <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
                ) : (
                  <HiOutlineClipboardCopy className="w-4 h-4" />
                )}
              </button>
              <pre>{item.code}</pre>
            </div>

            {/* Explanation */}
            {item.explanation && (
              <p className="text-[11px] text-slate-400 italic bg-slate-950/30 p-2.5 rounded-lg border-l-2 border-cyan-500/50">
                💡 <span className="font-medium text-slate-300">Why?</span>{" "}
                {item.explanation}
              </p>
            )}

            {/* Pro Tip */}
            {item.proTip && (
              <div className="text-[11px] text-amber-300/90 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                🔥 <span className="font-bold">Pro Tip:</span> {item.proTip}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
