import { useState } from "react";
import React from "react";
import { authData } from "../../data/docs/authData";
import { HiOutlineClipboardCopy, HiOutlineCheck } from "react-icons/hi";

export default function AuthGuide() {
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
        <h2 className="text-xl font-bold text-white">{authData.title}</h2>
        <p className="text-xs text-slate-400">{authData.subtitle}</p>
        <p className="text-xs text-slate-400 italic">{authData.description}</p>
      </div>

      {/* Snippets Loop */}
      <div className="space-y-6">
        {authData.snippets.map((snippet, idx) => (
          <div
            key={snippet.id || idx}
            className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-bold text-white">
                  {snippet.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">{snippet.desc}</p>
              </div>
              <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                Security
              </span>
            </div>

            {/* Code Block */}
            <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-cyan-300 overflow-x-auto max-h-80">
              <button
                onClick={() => handleCopy(snippet.code, `auth-${idx}`)}
                className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors"
                title="Copy code">
                {copiedCode === `auth-${idx}` ? (
                  <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
                ) : (
                  <HiOutlineClipboardCopy className="w-4 h-4" />
                )}
              </button>
              <pre>{snippet.code}</pre>
            </div>

            {/* Explanation */}
            {snippet.explanation && (
              <p className="text-[11px] text-slate-400 italic bg-slate-950/30 p-2.5 rounded-lg border-l-2 border-cyan-500/50">
                💡 <span className="font-medium text-slate-300">Why?</span>{" "}
                {snippet.explanation}
              </p>
            )}

            {/* Pro Tip */}
            {snippet.proTip && (
              <div className="text-[11px] text-amber-300/90 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                🔥 <span className="font-bold">Pro Tip:</span> {snippet.proTip}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
