// import { useState } from "react";

// export default function RetroCrtCheckbox() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <div
//       onClick={() => setChecked(!checked)}
//       className="flex items-center gap-3 w-64 p-3 bg-black border-2 border-green-500 rounded font-mono cursor-pointer shadow-[0_0_10px_rgba(34,197,94,0.3)]">
//       <div
//         className={`w-4 h-4 rounded-none border border-green-500 flex items-center justify-center transition-all ${checked ? "bg-green-950" : "bg-black"}`}>
//         {checked && (
//           <span className="text-green-300 text-[10px] font-bold">X</span>
//         )}
//       </div>
//       <span className="text-xs text-green-300">CRT_SELECT_VAL</span>
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

export default function AuroraFeatureCheckbox() {
  const [checked, setChecked] = useState(true);

  return (
    <button
      role="checkbox"
      aria-checked={checked}
      onClick={() => setChecked(!checked)}
      onKeyDown={(e) =>
        e.key === " " && (e.preventDefault(), setChecked(!checked))
      }
      className="relative flex items-center gap-3 p-4 w-80 bg-slate-950 border border-white/10 rounded-2xl text-left cursor-pointer overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-cyan-400/30 blur-3xl" />

      <span
        className={`relative w-6 h-6 shrink-0 rounded-lg border flex items-center justify-center transition-colors ${
          checked
            ? "bg-gradient-to-br from-fuchsia-400 to-cyan-400 border-white/30"
            : "bg-white/5 border-white/20"
        }`}>
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 text-slate-950"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5">
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

      <span className="relative flex-1">
        <span className="flex items-center gap-2 text-sm font-semibold text-white">
          <FiZap className="w-4 h-4 text-cyan-300" />
          Priority rendering
        </span>
        <span className="block text-xs text-white/60 mt-0.5">
          Faster previews for Pro workspaces
        </span>
      </span>
    </button>
  );
}
