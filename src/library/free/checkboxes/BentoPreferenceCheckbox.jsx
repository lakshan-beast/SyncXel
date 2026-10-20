// import { useState } from "react";

// export default function BentoClusterCheckbox() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <div
//       onClick={() => setChecked(!checked)}
//       className="flex items-center gap-3 w-64 p-3 bg-slate-900 border border-slate-800 rounded-2xl font-baloo cursor-pointer shadow-lg">
//       <div
//         className={`w-5 h-5 rounded-lg border border-slate-800 flex items-center justify-center transition-all ${checked ? "bg-slate-950 border-slate-700" : "bg-slate-950"}`}>
//         {checked && <div className="w-2.5 h-2.5 bg-indigo-500 rounded-sm" />}
//       </div>
//       <span className="text-xs text-slate-200 font-bold">BENTO_CHECKBOX</span>
//     </div>
//   );
// }


import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

export default function BentoPreferenceCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <button
      role="checkbox"
      aria-checked={checked}
      onClick={() => setChecked(!checked)}
      onKeyDown={(e) => e.key === " " && (e.preventDefault(), setChecked(!checked))}
      className="flex items-start gap-3 p-4 w-80 bg-slate-900 border border-slate-800 rounded-2xl text-left cursor-pointer hover:border-slate-700 transition"
    >
      <span
        className={`w-6 h-6 shrink-0 rounded-xl border flex items-center justify-center transition-colors ${
          checked ? "bg-indigo-500 border-indigo-400" : "bg-slate-800 border-slate-700"
        }`}
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3.5">
          <motion.path
            d="M20 6L9 17l-5-5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={false}
            animate={{ pathLength: checked ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />
        </svg>
      </span>

      <span className="flex-1">
        <span className="flex items-center gap-2">
          <FiMail className="w-4 h-4 text-indigo-400" />
          <span className="text-sm font-semibold text-white">Weekly report email</span>
        </span>
        <span className="block mt-1 text-xs text-slate-400 leading-relaxed">
          Get a Monday-morning summary of traffic, signups, and revenue.
        </span>
      </span>
    </button>
  );
}