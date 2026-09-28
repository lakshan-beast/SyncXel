// import { useState } from "react";
// import React from "react";
// import { quickStartData } from "../../data/docs/quickStartData";
// import { HiOutlineClipboardCopy, HiOutlineCheck } from "react-icons/hi";

// export default function QuickSetup() {
//   const [copiedCode, setCopiedCode] = useState(null);

//   // Global package manager state for all steps (optional, or per step)
//   const [activePkg, setActivePkg] = useState("npm");

//   const handleCopy = (code, key) => {
//     navigator.clipboard.writeText(code);
//     setCopiedCode(key);
//     setTimeout(() => setCopiedCode(null), 2000);
//   };

//   return (
//     <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-6">
//       <div>
//         <div className="flex items-center justify-between">
//           <h2 className="text-xl font-bold text-white">
//             {quickStartData?.title}
//           </h2>
//           {quickStartData?.licenseBanner && (
//             <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
//               {quickStartData.licenseBanner.badge}
//             </span>
//           )}
//         </div>
//         <p className="text-xs text-slate-400 mt-1">
//           {quickStartData?.subtitle || quickStartData?.description}
//         </p>
//       </div>

//       {/* Prerequisites Box */}
//       {quickStartData?.prerequisites && (
//         <div className="bg-slate-950/60 border border-white/5 rounded-xl p-4 space-y-2">
//           <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
//             {quickStartData.prerequisites.title}
//           </h4>
//           <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
//             {quickStartData.prerequisites.items.map((item, idx) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Steps List */}
//       <div className="space-y-8">
//         {quickStartData?.steps?.map((step) => (
//           <div key={step.step} className="flex items-start space-x-4">
//             <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 font-extrabold text-sm border border-cyan-500/20 shrink-0">
//               {step.step}
//             </span>
//             <div className="flex-1 space-y-3">
//               <div>
//                 <h3 className="text-sm font-bold text-white">{step.title}</h3>
//                 <p className="text-xs text-slate-400 mt-1">
//                   {step.description}
//                 </p>
//               </div>

//               {/* Multi-Package Manager Commands Support */}
//               {step.commands && (
//                 <div className="bg-slate-950 rounded-xl border border-white/10 overflow-hidden">
//                   <div className="flex items-center border-b border-white/10 bg-slate-900/40 px-3 py-1.5 space-x-2">
//                     {Object.keys(step.commands).map((pkg) => (
//                       <button
//                         key={pkg}
//                         onClick={() => setActivePkg(pkg)}
//                         className={`text-[10px] font-semibold px-2.5 py-1 rounded-md transition-all ${
//                           activePkg === pkg
//                             ? "bg-cyan-500 text-slate-950 font-bold"
//                             : "text-slate-400 hover:text-white"
//                         }`}>
//                         {pkg}
//                       </button>
//                     ))}
//                   </div>

//                   <div className="p-3 font-mono text-xs text-cyan-300 flex items-center justify-between">
//                     <span>{step.commands[activePkg]}</span>
//                     <button
//                       onClick={() =>
//                         handleCopy(step.commands[activePkg], `qs-${step.step}`)
//                       }
//                       className="text-slate-400 hover:text-white transition-colors"
//                       title="Copy command">
//                       {copiedCode === `qs-${step.step}` ? (
//                         <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
//                       ) : (
//                         <HiOutlineClipboardCopy className="w-4 h-4" />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Standard Code Block Support */}
//               {step.code && (
//                 <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
//                   <button
//                     onClick={() =>
//                       handleCopy(step.code, `qs-${step.step}-code`)
//                     }
//                     className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors"
//                     title="Copy code">
//                     {copiedCode === `qs-${step.step}-code` ? (
//                       <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
//                     ) : (
//                       <HiOutlineClipboardCopy className="w-4 h-4" />
//                     )}
//                   </button>
//                   <pre>{step.code}</pre>
//                 </div>
//               )}

//               {/* Explanation text */}
//               {step.explanation && (
//                 <p className="text-[11px] text-slate-400 italic bg-slate-950/30 p-2.5 rounded-lg border-l-2 border-cyan-500/50">
//                   💡 <span className="font-medium text-slate-300">Why?</span>{" "}
//                   {step.explanation}
//                 </p>
//               )}

//               {/* Pro-Tip Box */}
//               {step.proTip && (
//                 <div className="text-[11px] text-amber-300/90 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
//                   🔥 <span className="font-bold">Pro Tip:</span> {step.proTip}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { quickStartData } from "../../data/docs/quickStartData";
import { HiOutlineClipboardCopy, HiOutlineCheck } from "react-icons/hi";

export default function QuickSetup() {
  // --- STATE & HANDLERS ---
  const [copiedCode, setCopiedCode] = useState(null);
  const [activePkg, setActivePkg] = useState("npm");

  // Handle clipboard text copy with feedback timer
  const handleCopy = (code, key) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(key);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="bg-white border border-slate-800/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-8 font-baloo shadow-xl">
      {/* 1. HEADER & LICENSE BANNER */}
      <div>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-slate-500/60">
              // quick_setup_matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {quickStartData?.title}
            </h2>
          </div>
          {quickStartData?.licenseBanner && (
            <span className="text-[10px] font-baloo font-extrabold px-3 py-1 rounded-full bg-slate-900 text-white border border-slate-800 shadow-xs">
              {quickStartData.licenseBanner.badge}
            </span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-2">
          {quickStartData?.subtitle || quickStartData?.description}
        </p>
      </div>

      {/* 2. PREREQUISITES BOX */}
      {quickStartData?.prerequisites && (
        <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 sm:p-5 space-y-1">
          <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider font-mono">
            // {quickStartData.prerequisites.title}
          </h4>
          <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-1 ml-2">
            {quickStartData.prerequisites.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* 3. STEPS LIST */}
      <div className="space-y-8">
        {quickStartData?.steps?.map((step) => (
          <div key={step.step} className="flex items-start space-x-4">
            {/* Step Number Badge */}
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-slate-900 text-white font-mono font-extrabold text-sm border border-slate-800 shrink-0 shadow-xs">
              {step.step}
            </span>

            {/* CRITICAL FIX: min-w-0 added here so inner horizontal scroll works perfectly on mobile */}
            <div className="flex-1 min-w-0 space-y-3">
              <div>
                <h3 className="text-md font-bold text-slate-900 font-mono">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {step.description}
                </p>
              </div>

              {/* Multi-Package Manager Commands Support */}
              {step.commands && (
                <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden w-full">
                  <div className="flex items-center border-b border-slate-800 bg-slate-900/40 px-3 py-1.5 space-x-2 font-mono overflow-x-auto">
                    {Object.keys(step.commands).map((pkg) => (
                      <button
                        key={pkg}
                        onClick={() => setActivePkg(pkg)}
                        className={`text-[10px] font-semibold px-2.5 py-1 rounded-md transition-all shrink-0 ${
                          activePkg === pkg
                            ? "bg-white text-slate-950 font-bold shadow-sm scale-105"
                            : "text-slate-400 hover:text-white"
                        }`}>
                        {pkg}
                      </button>
                    ))}
                  </div>

                  <div className="p-3 font-mono text-xs text-slate-200 flex items-center justify-between gap-4 overflow-x-auto">
                    <span className="whitespace-nowrap">
                      {step.commands[activePkg]}
                    </span>
                    <button
                      onClick={() =>
                        handleCopy(step.commands[activePkg], `qs-${step.step}`)
                      }
                      className="text-slate-400 hover:text-white transition-colors shrink-0"
                      title="Copy command">
                      {copiedCode === `qs-${step.step}` ? (
                        <HiOutlineCheck className="w-4 h-4 text-white" />
                      ) : (
                        <HiOutlineClipboardCopy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Standard Code Block Support */}
              {step.code && (
                <div className="relative bg-slate-950 p-4 sm:p-5 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto w-full">
                  <button
                    onClick={() =>
                      handleCopy(step.code, `qs-${step.step}-code`)
                    }
                    className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors z-10 bg-slate-950/80 p-1 rounded"
                    title="Copy code">
                    {copiedCode === `qs-${step.step}-code` ? (
                      <HiOutlineCheck className="w-4 h-4 text-white" />
                    ) : (
                      <HiOutlineClipboardCopy className="w-4 h-4" />
                    )}
                  </button>
                  <pre className="whitespace-pre">{step.code}</pre>
                </div>
              )}

              {/* Explanation text */}
              {step.explanation && (
                <p className="text-[11px] text-slate-600 italic bg-slate-50 py-2.5 px-3.5 rounded-lg border-l-4 border-l-slate-700 border border-slate-300/50">
                  💡{" "}
                  <span className="font-medium text-slate-800 mr-2">Why?</span>{" "}
                  {step.explanation}
                </p>
              )}

              {/* Pro-Tip Box */}
              {step.proTip && (
                <div className="text-[11px] bg-slate-50 text-slate-700 py-2.5 px-3.5 rounded-lg border border-slate-200 font-baloo">
                  🔥{" "}
                  <span className="font-bold text-slate-900">Pro Tip : </span>{" "}
                  {step.proTip}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
