// import { useState } from "react";

// export default function ClaySoftCheckbox() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <div
//       onClick={() => setChecked(!checked)}
//       className="flex items-center gap-3 w-64 p-3 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] border border-slate-800 font-baloo cursor-pointer">
//       <div
//         className={`w-5 h-5 rounded-xl border border-slate-800 bg-slate-900 shadow-inner flex items-center justify-center transition-all ${checked ? "bg-slate-950" : ""}`}>
//         {checked && (
//           <div className="w-2.5 h-2.5 bg-indigo-400 rounded-lg shadow-sm" />
//         )}
//       </div>
//       <span className="text-xs text-slate-300 font-bold">CLAY_CHECKBOX</span>
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSmile } from "react-icons/fi";

export default function ClayOnboardingCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <button
      role="checkbox"
      aria-checked={checked}
      onClick={() => setChecked(!checked)}
      onKeyDown={(e) =>
        e.key === " " && (e.preventDefault(), setChecked(!checked))
      }
      className="flex items-center gap-3 p-4 w-80 bg-violet-100 rounded-[28px] text-left cursor-pointer shadow-[8px_8px_16px_#d8c9f0,-8px_-8px_16px_#ffffff]">
      <span
        className={`w-8 h-8 shrink-0 rounded-2xl flex items-center justify-center transition-all ${
          checked ? "bg-violet-400" : "bg-white"
        } shadow-[4px_4px_10px_#d8c9f0,-4px_-4px_10px_#ffffff]`}>
        {checked ? (
          <FiSmile className="w-4 h-4 text-white" />
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 text-violet-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5">
            <motion.path
              d="M20 6L9 17l-5-5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={false}
              animate={{ pathLength: 0 }}
            />
          </svg>
        )}
      </span>

      <span>
        <span className="block text-sm font-bold text-violet-900">
          Enable playful mode
        </span>
        <span className="block text-xs text-violet-500">
          Fun animations and friendly microcopy
        </span>
      </span>
    </button>
  );
}
