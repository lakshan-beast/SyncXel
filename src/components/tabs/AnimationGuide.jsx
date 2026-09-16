import { useState } from "react";
import React from "react";
import { animationData } from "../../data/docs/animationData";
import { HiOutlineClipboardCopy, HiOutlineCheck } from "react-icons/hi";

export default function AnimationGuide() {
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
          Animations & Motion Guide
        </h2>
        <p className="text-xs text-slate-400">
          Bring your website to life with smooth Framer Motion snippets and
          custom Tailwind keyframe animations.
        </p>
        <p className="text-xs text-slate-400 italic">
          Copy-paste these animation configurations directly into your project
          components and config files.
        </p>
      </div>

      {/* Animations List Loop */}
      <div className="space-y-6">
        {animationData.map((item, idx) => (
          <div
            key={item.id || idx}
            className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
              </div>
              <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                Motion
              </span>
            </div>

            {/* Code Block */}
            <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-cyan-300 overflow-x-auto max-h-80">
              <button
                onClick={() => handleCopy(item.code, `anim-${idx}`)}
                className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors"
                title="Copy code">
                {copiedCode === `anim-${idx}` ? (
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
