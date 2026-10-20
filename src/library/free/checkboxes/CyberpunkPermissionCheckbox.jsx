// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function CyberNeonCheckbox() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <div
//       onClick={() => setChecked(!checked)}
//       className="flex items-center gap-3 w-64 p-3 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.1)]">
//       <div
//         className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${checked ? "bg-cyan-950 border-cyan-400 shadow-[0_0_10px_#22d3ee]" : "bg-slate-900 border-slate-700"}`}>
//         {checked && (
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             className="w-2.5 h-2.5 bg-cyan-400 rounded-sm"
//           />
//         )}
//       </div>
//       <span className="text-xs text-cyan-300 font-bold">NEURAL_CHECK_L1</span>
//     </div>
//   );
// }


import { useState } from "react";
import { motion } from "framer-motion";
import { FiLock } from "react-icons/fi";

export default function CyberpunkPermissionCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <button
      role="checkbox"
      aria-checked={checked}
      onClick={() => setChecked(!checked)}
      onKeyDown={(e) => e.key === " " && (e.preventDefault(), setChecked(!checked))}
      className="flex items-center gap-3 p-3.5 w-80 bg-slate-950 border border-fuchsia-400/50 rounded-lg text-left cursor-pointer font-mono shadow-[0_0_18px_rgba(232,121,249,0.25)] hover:border-fuchsia-400 transition"
    >
      <span
        className={`w-6 h-6 shrink-0 rounded border flex items-center justify-center transition-all ${
          checked ? "bg-fuchsia-500 border-fuchsia-300 shadow-[0_0_12px_rgba(232,121,249,0.7)]" : "bg-slate-900 border-fuchsia-400/40"
        }`}
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-950" fill="none" stroke="currentColor" strokeWidth="3.5">
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

      <span className="flex-1">
        <span className="flex items-center gap-2 text-sm font-bold text-fuchsia-300">
          <FiLock className="w-3.5 h-3.5" />
          ALLOW_API_ACCESS
        </span>
        <span className="block text-[11px] text-cyan-500/80 mt-0.5">
          Grants read-only access to workspace data
        </span>
      </span>
    </button>
  );
}