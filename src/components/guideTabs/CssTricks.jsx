import React, { useState } from "react";
import { motion } from "framer-motion";
import { cssTricksData } from "../../data/docs/cssTricksData";
import { HiOutlineClipboardCopy, HiOutlineCheck } from "react-icons/hi";

export default function CssTricks() {
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
      {cssTricksData.map((trick) => (
        <div
          key={trick.id}
          className="bg-white border border-slate-800/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-5">
          {/* Header & Category Badge */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-slate-500/60">
                // css_trick_module
              </span>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "tween", stiffness: 400, damping: 17 }}
                className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                {trick.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xs sm:text-sm text-slate-500 mt-1">
                {trick.description}
              </motion.p>
            </div>
            <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-slate-900 text-white border border-slate-800 shrink-0 shadow-xs">
              {trick.category}
            </span>
          </div>

          {/* Methods Loop */}
          <div className="space-y-5 pt-2">
            {trick.methods.map((method, idx) => (
              <div
                key={idx}
                className="space-y-3.5 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/60">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                  {method.name}
                </motion.h3>

                {/* Code Block (Mobile horizontal scroll fixed) */}
                <div className="relative bg-slate-950 p-4 sm:p-5 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto w-full">
                  <button
                    onClick={() =>
                      handleCopy(method.code, `${trick.id}-${idx}`)
                    }
                    className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors z-10 bg-slate-950/80 p-1 rounded"
                    title="Copy code">
                    {copiedCode === `${trick.id}-${idx}` ? (
                      <HiOutlineCheck className="w-4 h-4 text-white" />
                    ) : (
                      <HiOutlineClipboardCopy className="w-4 h-4" />
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
                    {method.code}
                  </motion.pre>
                </div>

                {/* Explanation */}
                {method.explanation && (
                  <p className="text-[11px] text-slate-600 italic bg-white py-2.5 px-3.5 rounded-lg border-l-4 border-l-slate-700 border border-slate-300/50">
                    💡{" "}
                    <span className="font-medium text-slate-800 mr-2">
                      Why ?{" "}
                    </span>{" "}
                    {method.explanation}
                  </p>
                )}

                {/* Pro Tip */}
                {method.proTip && (
                  <div className="text-[11px] bg-white text-slate-700 py-2.5 px-3.5 rounded-lg border border-slate-200 font-baloo">
                    🔥{" "}
                    <span className="font-bold text-slate-900">Pro Tip : </span>{" "}
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
