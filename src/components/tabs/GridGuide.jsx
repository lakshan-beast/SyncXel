import { useState } from "react";
import React from "react";
import { gitData } from "../../data/docs/gitData";
import { HiOutlineClipboardCopy, HiOutlineCheck } from "react-icons/hi";

export default function GitGuide() {
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
        <h2 className="text-xl font-bold text-white">{gitData.title}</h2>
        <p className="text-xs text-slate-400">{gitData.subtitle}</p>
        <p className="text-xs text-slate-400 italic">{gitData.description}</p>

        {/* Workflow Overview Box */}
        {gitData.workflowOverview && (
          <div className="mt-4 bg-slate-950/60 border border-white/5 rounded-xl p-4 space-y-2">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              {gitData.workflowOverview.title}
            </h4>
            <div className="font-mono text-xs text-slate-300 space-y-1">
              {gitData.workflowOverview.steps.map((step, idx) => (
                <div key={idx} className="text-slate-400">{step}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Conventional Commits Section */}
      <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-6">
        <div>
          <h3 className="text-lg font-bold text-white">Conventional Commits Standards</h3>
          <p className="text-xs text-slate-400 mt-1">Use these standard prefixes to keep your git history clean and professional.</p>
        </div>

        <div className="space-y-4">
          {gitData.commits.map((commit, idx) => (
            <div key={idx} className="bg-slate-950/40 p-4 rounded-xl border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {commit.type}
                </span>
                <span className="text-[11px] text-slate-400">{commit.desc}</span>
              </div>

              {/* Example Code Block */}
              <div className="relative bg-slate-950 p-3 rounded-xl border border-white/10 font-mono text-xs text-cyan-300 flex items-center justify-between">
                <span>{commit.example}</span>
                <button
                  onClick={() => handleCopy(commit.example, `commit-${idx}`)}
                  className="text-slate-400 hover:text-white transition-colors"
                  title="Copy example">
                  {copiedCode === `commit-${idx}` ? (
                    <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <HiOutlineClipboardCopy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Explanation */}
              {commit.explanation && (
                <p className="text-[11px] text-slate-400 italic bg-slate-950/30 p-2.5 rounded-lg border-l-2 border-cyan-500/50">
                  💡 <span className="font-medium text-slate-300">Why?</span> {commit.explanation}
                </p>
              )}

              {/* Pro Tip */}
              {commit.proTip && (
                <div className="text-[11px] text-amber-300/90 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                  🔥 <span className="font-bold">Pro Tip:</span> {commit.proTip}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Common Git Errors & Fixes Section */}
      <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-6">
        <div>
          <h3 className="text-lg font-bold text-white">Common Git Errors & Troubleshooting</h3>
          <p className="text-xs text-slate-400 mt-1">Quick copy-paste solutions for frequent git error roadblocks.</p>
        </div>

        <div className="space-y-6">
          {gitData.errors.map((errItem, idx) => (
            <div key={idx} className="bg-slate-950/40 p-4 rounded-xl border border-white/5 space-y-3">
              <div className="text-xs font-bold text-rose-400 font-mono bg-rose-500/10 px-3 py-1.5 rounded-lg border border-rose-500/20 inline-block">
                ❌ Error: {errItem.error}
              </div>

              {/* Fix Command Code Block */}
              <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-emerald-300 overflow-x-auto">
                <button
                  onClick={() => handleCopy(errItem.fix, `error-${idx}`)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors"
                  title="Copy fix command">
                  {copiedCode === `error-${idx}` ? (
                    <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <HiOutlineClipboardCopy className="w-4 h-4" />
                  )}
                </button>
                <pre>{errItem.fix}</pre>
              </div>

              {/* Explanation */}
              {errItem.explanation && (
                <p className="text-[11px] text-slate-400 italic bg-slate-950/30 p-2.5 rounded-lg border-l-2 border-cyan-500/50">
                  💡 <span className="font-medium text-slate-300">Why it happens:</span> {errItem.explanation}
                </p>
              )}

              {/* Pro Tip */}
              {errItem.proTip && (
                <div className="text-[11px] text-amber-300/90 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                  🔥 <span className="font-bold">Pro Tip:</span> {errItem.proTip}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}