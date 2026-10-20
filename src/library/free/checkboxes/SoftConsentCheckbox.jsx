// import { useState } from "react";

// export default function RetroTerminalCheckbox() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <div
//       onClick={() => setChecked(!checked)}
//       className="flex items-center gap-3 w-64 p-3 bg-black border-2 border-green-500 rounded font-mono cursor-pointer shadow-[0_0_10px_rgba(34,197,94,0.3)]">
//       <div
//         className={`w-4 h-4 rounded-none border border-green-500 flex items-center justify-center transition-all ${checked ? "bg-green-950" : "bg-black"}`}>
//         {checked && (
//           <span className="text-green-400 text-[10px] font-bold">X</span>
//         )}
//       </div>
//       <span className="text-xs text-green-400">SYS_CHECK_BOX</span>
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";

export default function SoftConsentCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <button
      role="checkbox"
      aria-checked={checked}
      onClick={() => setChecked(!checked)}
      onKeyDown={(e) =>
        e.key === " " && (e.preventDefault(), setChecked(!checked))
      }
      className="flex items-center gap-3 p-4 w-80 bg-slate-200 rounded-2xl text-left cursor-pointer shadow-[inset_2px_2px_6px_#cbd5e1,inset_-2px_-2px_6px_#ffffff]">
      <span
        className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center transition-all ${
          checked
            ? "bg-slate-700 shadow-[inset_2px_2px_4px_#0f172a]"
            : "bg-slate-200 shadow-[3px_3px_6px_#cbd5e1,-3px_-3px_6px_#ffffff]"
        }`}>
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 text-emerald-500"
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

      <span className="text-sm text-slate-600 leading-snug">
        I agree to the{" "}
        <span className="font-semibold text-slate-800">Terms of Service</span>{" "}
        and Privacy Policy.
      </span>
    </button>
  );
}
