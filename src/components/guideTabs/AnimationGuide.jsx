import React, { useState } from "react";
import { motion } from "framer-motion";
import { animationData } from "../../data/docs/animationData";
import { HiOutlineClipboardCopy, HiOutlineCheck } from "react-icons/hi";

export default function AnimationGuide() {
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
          // animations_motion_guide
        </span>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", stiffness: 400, damping: 17 }}
          className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Animations & Motion Guide
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm text-slate-500">
          Bring your website to life with smooth Framer Motion snippets and
          custom Tailwind keyframe animations.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs text-slate-600 italic bg-slate-50 p-3.5 mt-5 rounded-2xl border border-slate-200/60 text-center">
          Copy-paste these animation configurations directly into your project
          components and config files.
        </motion.p>
      </div>

      {/* 2. ANIMATIONS LIST LOOP */}
      <div className="space-y-5">
        {animationData.map((item, idx) => (
          <div
            key={item.id || idx}
            className="bg-white border border-slate-800/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <motion.h3
                   initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                  className="text-md sm:text-lg font-bold text-slate-900 font-mono">
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                  className="text-xs sm:text-sm text-slate-500 mt-1">
                  {item.desc}
                </motion.p>
              </div>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-slate-900 text-white border border-slate-800 shrink-0 shadow-xs">
                Motion
              </motion.span>
            </div>

            {/* Code Block (Mobile horizontal scroll fixed) */}
            <div className="relative bg-slate-950 p-4 sm:p-5 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto w-full max-h-80">
              <button
                onClick={() => handleCopy(item.code, `anim-${idx}`)}
                className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors z-10 bg-slate-950/80 p-1 rounded hidden lg:block"
                title="Copy code">
                {copiedCode === `anim-${idx}` ? (
                  <HiOutlineCheck className="w-5 h-5 text-emerald-400 bg-emerald-500/50 rounded-sm" />
                ) : (
                  <HiOutlineClipboardCopy className="w-5 h-5" />
                )}
              </button>
              <motion.pre
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                className="whitespace-pre">
                {item.code}
              </motion.pre>
            </div>

            {/* Explanation */}
            {item.explanation && (
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                className="text-[11px] text-slate-600 italic bg-white py-2.5 px-3.5 rounded-lg border-l-4 border-l-slate-700 border border-slate-300/50">
                💡{" "}
                <span className="font-medium text-slate-800 mr-2">Why ? </span>{" "}
                {item.explanation}
              </motion.p>
            )}

            {/* Pro Tip */}
            {item.proTip && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                className="text-[11px] bg-slate-50 text-slate-700 py-2.5 px-3.5 rounded-lg border border-slate-200 font-baloo">
                🔥 <span className="font-bold text-slate-900">Pro Tip : </span>{" "}
                {item.proTip}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
