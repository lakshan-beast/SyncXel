import React, { useState } from "react";
import { gitData } from "../../data/docs/gitData";
import { HiOutlineClipboardCopy, HiOutlineCheck } from "react-icons/hi";

export default function GitGuide() {
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
          // git_version_control_matrix
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {gitData.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          {gitData.subtitle}
        </p>
        <p className="text-xs text-slate-600 italic bg-slate-50 p-3.5 mt-5 rounded-2xl border border-slate-200/60 text-center">
          {gitData.description}
        </p>

        {/* Workflow Overview Box */}
        {gitData.workflowOverview && (
          <div className="mt-4 bg-slate-50 border border-slate-200/60 rounded-2xl p-4 sm:p-5 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              {gitData.workflowOverview.title}
            </h4>
            <div className="font-mono text-xs text-slate-600 space-y-1">
              {gitData.workflowOverview.steps.map((step, idx) => (
                <div key={idx} className="text-slate-700">{step}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 2. CONVENTIONAL COMMITS SECTION */}
      <div className="bg-white border border-slate-800/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-5">
        <div>
          <h3 className="text-md sm:text-lg font-bold text-slate-900 font-mono">
            Conventional Commits Standards
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Use these standard prefixes to keep your git history clean and professional.
          </p>
        </div>

        <div className="space-y-4">
          {gitData.commits.map((commit, idx) => (
            <div key={idx} className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/60 space-y-3">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-900 text-white border border-slate-800 shrink-0 shadow-xs">
                  {commit.type}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-600 text-right">{commit.desc}</span>
              </div>

              {/* Example Code Block (Mobile horizontal scroll fixed) */}
              <div className="relative bg-slate-950 p-4 sm:p-5 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 flex items-center justify-between w-full overflow-x-auto">
                <span className="truncate pr-8">{commit.example}</span>
                <button
                  onClick={() => handleCopy(commit.example, `commit-${idx}`)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors z-10 bg-slate-950/80 p-1 rounded"
                  title="Copy example">
                  {copiedCode === `commit-${idx}` ? (
                    <HiOutlineCheck className="w-4 h-4 text-white" />
                  ) : (
                    <HiOutlineClipboardCopy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Explanation */}
              {commit.explanation && (
                <p className="text-[11px] text-slate-600 italic bg-white py-2.5 px-3.5 rounded-lg border-l-4 border-l-slate-700 border border-slate-300/50">
                  💡 <span className="font-medium text-slate-800 mr-2">Why ? </span> {commit.explanation}
                </p>
              )}

              {/* Pro Tip */}
              {commit.proTip && (
                <div className="text-[11px] bg-white text-slate-700 py-2.5 px-3.5 rounded-lg border border-slate-200 font-baloo">
                  🔥 <span className="font-bold text-slate-900">Pro Tip : </span> {commit.proTip}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3. COMMON GIT ERRORS & TROUBLESHOOTING SECTION */}
      <div className="bg-white border border-slate-800/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-5">
        <div>
          <h3 className="text-md sm:text-lg font-bold text-slate-900 font-mono">
            Common Git Errors & Troubleshooting
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Quick copy-paste solutions for frequent git error roadblocks.
          </p>
        </div>

        <div className="space-y-5">
          {gitData.errors.map((errItem, idx) => (
            <div key={idx} className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/60 space-y-3">
              <div className="text-xs font-bold text-slate-900 font-mono bg-white px-3 py-1.5 rounded-lg border border-slate-200 inline-block shadow-xs">
                ❌ Error: {errItem.error}
              </div>

              {/* Fix Command Code Block (Mobile horizontal scroll fixed) */}
              <div className="relative bg-slate-950 p-4 sm:p-5 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto w-full">
                <button
                  onClick={() => handleCopy(errItem.fix, `error-${idx}`)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors z-10 bg-slate-950/80 p-1 rounded"
                  title="Copy fix command">
                  {copiedCode === `error-${idx}` ? (
                    <HiOutlineCheck className="w-4 h-4 text-white" />
                  ) : (
                    <HiOutlineClipboardCopy className="w-4 h-4" />
                  )}
                </button>
                <pre className="whitespace-pre">{errItem.fix}</pre>
              </div>

              {/* Explanation */}
              {errItem.explanation && (
                <p className="text-[11px] text-slate-600 italic bg-white py-2.5 px-3.5 rounded-lg border-l-4 border-l-slate-700 border border-slate-300/50">
                  💡 <span className="font-medium text-slate-800 mr-2">Why it happens : </span> {errItem.explanation}
                </p>
              )}

              {/* Pro Tip */}
              {errItem.proTip && (
                <div className="text-[11px] bg-white text-slate-700 py-2.5 px-3.5 rounded-lg border border-slate-200 font-baloo">
                  🔥 <span className="font-bold text-slate-900">Pro Tip : </span> {errItem.proTip}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}