import React, { useState } from "react";
import { motion } from "framer-motion";
import { vercelData } from "../../data/docs/vercelData";
import { HiOutlineClipboardCopy, HiOutlineCheck } from "react-icons/hi";

export default function VercelGuide() {
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
          // vercel_deployment_matrix
        </span>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", stiffness: 400, damping: 17 }}
          className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {vercelData.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm text-slate-500">
          {vercelData.subtitle}
        </motion.p>
        <p className="text-xs text-slate-600 italic bg-slate-50 p-3.5 mt-5 rounded-2xl border border-slate-200/60 text-center">
          {vercelData.description}
        </p>
      </div>

      {/* 2. GUIDES LIST LOOP */}
      <div className="space-y-1">
        {vercelData.guides.map((guide, idx) => (
          <div
            key={guide.id || idx}
            className="bg-white border border-slate-800/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-2">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-md sm:text-lg font-bold text-slate-900 font-mono">
                {guide.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xs sm:text-sm text-slate-500 mt-1">
                {guide.description}
              </motion.p>
            </div>

            {/* Code / Configuration Block (Mobile horizontal scroll fixed) */}
            <div className="relative bg-slate-950 p-4 sm:p-5 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto w-full">
              <button
                onClick={() => handleCopy(guide.code, `vercel-${idx}`)}
                className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors z-10 bg-slate-950/80 p-1 rounded"
                title="Copy code">
                {copiedCode === `vercel-${idx}` ? (
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
                {guide.code}
              </motion.pre>
            </div>

            {/* Explanation */}
            {guide.explanation && (
              <p className="text-[11px] text-slate-600 italic bg-white py-2.5 px-3.5 rounded-lg border-l-4 border-l-slate-700 border border-slate-300/50">
                💡{" "}
                <span className="font-medium text-slate-800 mr-2">Why ? </span>{" "}
                {guide.explanation}
              </p>
            )}

            {/* Pro Tip */}
            {guide.proTip && (
              <div className="text-[11px] bg-slate-50 text-slate-700 py-2.5 px-3.5 rounded-lg border border-slate-200 font-baloo">
                🔥 <span className="font-bold text-slate-900">Pro Tip : </span>{" "}
                {guide.proTip}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
