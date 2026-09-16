import { useState } from "react";
import React from "react";
import { quickStartData } from "../../data/docs/quickStartData";
import { HiOutlineClipboardCopy, HiOutlineCheck } from "react-icons/hi";

export default function QuickSetup() {
  const [copiedCode, setCopiedCode] = useState(null);

  // Global package manager state for all steps (optional, or per step)
  const [activePkg, setActivePkg] = useState("npm");

  const handleCopy = (code, key) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(key);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-6">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            {quickStartData?.title}
          </h2>
          {quickStartData?.licenseBanner && (
            <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {quickStartData.licenseBanner.badge}
            </span>
          )}
        </div>
        <p className="text-xs text-slate-400 mt-1">
          {quickStartData?.subtitle || quickStartData?.description}
        </p>
      </div>

      {/* Prerequisites Box */}
      {quickStartData?.prerequisites && (
        <div className="bg-slate-950/60 border border-white/5 rounded-xl p-4 space-y-2">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            {quickStartData.prerequisites.title}
          </h4>
          <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
            {quickStartData.prerequisites.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Steps List */}
      <div className="space-y-8">
        {quickStartData?.steps?.map((step) => (
          <div key={step.step} className="flex items-start space-x-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 font-extrabold text-sm border border-cyan-500/20 shrink-0">
              {step.step}
            </span>
            <div className="flex-1 space-y-3">
              <div>
                <h3 className="text-sm font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-400 mt-1">
                  {step.description}
                </p>
              </div>

              {/* Multi-Package Manager Commands Support */}
              {step.commands && (
                <div className="bg-slate-950 rounded-xl border border-white/10 overflow-hidden">
                  <div className="flex items-center border-b border-white/10 bg-slate-900/40 px-3 py-1.5 space-x-2">
                    {Object.keys(step.commands).map((pkg) => (
                      <button
                        key={pkg}
                        onClick={() => setActivePkg(pkg)}
                        className={`text-[10px] font-semibold px-2.5 py-1 rounded-md transition-all ${
                          activePkg === pkg
                            ? "bg-cyan-500 text-slate-950 font-bold"
                            : "text-slate-400 hover:text-white"
                        }`}>
                        {pkg}
                      </button>
                    ))}
                  </div>

                  <div className="p-3 font-mono text-xs text-cyan-300 flex items-center justify-between">
                    <span>{step.commands[activePkg]}</span>
                    <button
                      onClick={() =>
                        handleCopy(step.commands[activePkg], `qs-${step.step}`)
                      }
                      className="text-slate-400 hover:text-white transition-colors"
                      title="Copy command">
                      {copiedCode === `qs-${step.step}` ? (
                        <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <HiOutlineClipboardCopy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Standard Code Block Support */}
              {step.code && (
                <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
                  <button
                    onClick={() =>
                      handleCopy(step.code, `qs-${step.step}-code`)
                    }
                    className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors"
                    title="Copy code">
                    {copiedCode === `qs-${step.step}-code` ? (
                      <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <HiOutlineClipboardCopy className="w-4 h-4" />
                    )}
                  </button>
                  <pre>{step.code}</pre>
                </div>
              )}

              {/* Explanation text */}
              {step.explanation && (
                <p className="text-[11px] text-slate-400 italic bg-slate-950/30 p-2.5 rounded-lg border-l-2 border-cyan-500/50">
                  💡 <span className="font-medium text-slate-300">Why?</span>{" "}
                  {step.explanation}
                </p>
              )}

              {/* Pro-Tip Box */}
              {step.proTip && (
                <div className="text-[11px] text-amber-300/90 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                  🔥 <span className="font-bold">Pro Tip:</span> {step.proTip}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
