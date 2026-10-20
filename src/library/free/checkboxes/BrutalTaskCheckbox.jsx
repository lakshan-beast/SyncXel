// import { useState } from "react";

// export default function BrutalHardCheckbox() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <div
//       onClick={() => setChecked(!checked)}
//       className="flex items-center gap-3 w-64 p-3 bg-pink-400 border-2 border-slate-950 rounded-xl font-baloo cursor-pointer shadow-[3px_3px_0px_0px_#020617]">
//       <div
//         className={`w-5 h-5 rounded border-2 border-slate-950 flex items-center justify-center transition-all ${checked ? "bg-yellow-300 shadow-[2px_2px_0px_0px_#020617]" : "bg-white"}`}>
//         {checked && (
//           <span className="text-slate-950 text-[10px] font-black">✓</span>
//         )}
//       </div>
//       <span className="text-xs text-slate-950 font-black">HARD_CHECKBOX</span>
//     </div>
//   );
// }


import { useState } from "react";
import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";

export default function BrutalTaskCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <button
      role="checkbox"
      aria-checked={checked}
      onClick={() => setChecked(!checked)}
      onKeyDown={(e) => e.key === " " && (e.preventDefault(), setChecked(!checked))}
      className="flex items-center gap-3 p-3.5 w-80 bg-yellow-300 border-2 border-slate-950 rounded-2xl shadow-[4px_4px_0px_0px_#020617] text-left cursor-pointer select-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#020617] transition-all"
    >
      <span
        className={`w-6 h-6 shrink-0 rounded-lg border-2 border-slate-950 flex items-center justify-center transition-colors ${
          checked ? "bg-slate-950" : "bg-white"
        }`}
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="3.5">
          <motion.path
            d="M20 6L9 17l-5-5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={false}
            animate={{ pathLength: checked ? 1 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
        </svg>
      </span>

      <span className="flex-1">
        <span className={`block text-sm font-black text-slate-950 ${checked ? "line-through opacity-60" : ""}`}>
          Ship landing page redesign
        </span>
        <span className="flex items-center gap-1 text-[11px] font-bold text-slate-800">
          <FiClock className="w-3 h-3" /> Due today
        </span>
      </span>
    </button>
  );
}