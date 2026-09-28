import React, { useState } from "react";
import { authData } from "../../data/docs/authData";
import { HiOutlineClipboardCopy, HiOutlineCheck } from "react-icons/hi";

export default function AuthGuide() {
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
          // authentication_security_module
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {authData.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          {authData.subtitle}
        </p>
        <p className="text-xs text-slate-600 italic bg-slate-50 p-3.5 mt-5 rounded-2xl border border-slate-200/60 text-center">
          {authData.description}
        </p>
      </div>

      {/* 2. SNIPPETS LOOP */}
      <div className="space-y-5">
        {authData.snippets.map((snippet, idx) => (
          <div
            key={snippet.id || idx}
            className="bg-white border border-slate-800/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-3">
            
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-md sm:text-lg font-bold text-slate-900 font-mono">
                  {snippet.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {snippet.desc}
                </p>
              </div>
              <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-slate-900 text-white border border-slate-800 shrink-0 shadow-xs">
                Security
              </span>
            </div>

            {/* Code Block (Mobile horizontal scroll fixed) */}
            <div className="relative bg-slate-950 p-4 sm:p-5 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto w-full max-h-80">
              <button
                onClick={() => handleCopy(snippet.code, `auth-${idx}`)}
                className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors z-10 bg-slate-950/80 p-1 rounded"
                title="Copy code">
                {copiedCode === `auth-${idx}` ? (
                  <HiOutlineCheck className="w-4 h-4 text-white" />
                ) : (
                  <HiOutlineClipboardCopy className="w-4 h-4" />
                )}
              </button>
              <pre className="whitespace-pre">{snippet.code}</pre>
            </div>

            {/* Explanation */}
            {snippet.explanation && (
              <p className="text-[11px] text-slate-600 italic bg-white py-2.5 px-3.5 rounded-lg border-l-4 border-l-slate-700 border border-slate-300/50">
                💡 <span className="font-medium text-slate-800 mr-2">Why ? </span>{" "}
                {snippet.explanation}
              </p>
            )}

            {/* Pro Tip */}
            {snippet.proTip && (
              <div className="text-[11px] bg-slate-50 text-slate-700 py-2.5 px-3.5 rounded-lg border border-slate-200 font-baloo">
                🔥 <span className="font-bold text-slate-900">Pro Tip : </span>{" "}
                {snippet.proTip}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}