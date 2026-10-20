// import { useState } from "react";

// export default function ClayPillCheckbox() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <div
//       onClick={() => setChecked(!checked)}
//       className="flex items-center gap-3 w-64 p-3 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] border border-slate-800 font-baloo cursor-pointer">
//       <div
//         className={`w-5 h-5 rounded-full border border-slate-800 bg-slate-900 shadow-inner flex items-center justify-center transition-all ${checked ? "bg-slate-950" : ""}`}>
//         {checked && (
//           <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-sm" />
//         )}
//       </div>
//       <span className="text-xs text-cyan-300 font-bold">VOLUMETRIC_CHECK</span>
//     </div>
//   );
// }


import { useState } from "react";
import { motion } from "framer-motion";

export default function MinimalFilterCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <button
      role="checkbox"
      aria-checked={checked}
      onClick={() => setChecked(!checked)}
      onKeyDown={(e) => e.key === " " && (e.preventDefault(), setChecked(!checked))}
      className="flex items-center gap-3 p-3 w-64 bg-white border border-slate-200 rounded-xl text-left cursor-pointer hover:border-slate-300 transition"
    >
      <span
        className={`w-5 h-5 shrink-0 rounded-md border flex items-center justify-center transition-colors ${
          checked ? "bg-slate-900 border-slate-900" : "bg-white border-slate-300"
        }`}
      >
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3.5">
          <motion.path
            d="M20 6L9 17l-5-5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={false}
            animate={{ pathLength: checked ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </svg>
      </span>

      <span className="text-sm font-medium text-slate-700">Free shipping</span>
      <span className="ml-auto text-xs text-slate-400">24</span>
    </button>
  );
}