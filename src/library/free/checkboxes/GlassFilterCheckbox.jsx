// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function GlassFrostCheckbox() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <div
//       onClick={() => setChecked(!checked)}
//       className="flex items-center gap-3 w-64 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo cursor-pointer shadow-xl">
//       <div
//         className={`w-5 h-5 rounded-lg border border-white/25 flex items-center justify-center transition-all ${checked ? "bg-cyan-500/30 shadow-[0_0_10px_#22d3ee]" : "bg-white/5"}`}>
//         {checked && (
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             className="w-2.5 h-2.5 bg-cyan-300 rounded-sm"
//           />
//         )}
//       </div>
//       <span className="text-xs text-cyan-200 font-bold">FROST_CHECK</span>
//     </div>
//   );
// }


import { useState } from "react";
import { motion } from "framer-motion";

export default function GlassFilterCheckbox() {
  const [checked, setChecked] = useState(true);

  return (
    <button
      role="checkbox"
      aria-checked={checked}
      onClick={() => setChecked(!checked)}
      onKeyDown={(e) => e.key === " " && (e.preventDefault(), setChecked(!checked))}
      className="flex items-center gap-3 p-3.5 w-72 bg-white/10 backdrop-blur-xl border border-white/25 rounded-2xl text-left cursor-pointer text-white shadow-lg hover:bg-white/15 transition font-baloo"
    >
      <span
        className={`w-6 h-6 shrink-0 rounded-lg border flex items-center justify-center transition-all ${
          checked ? "bg-cyan-400/90 border-cyan-300" : "bg-white/10 border-white/40"
        }`}
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" strokeWidth="3.5">
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
        <span className="block text-sm font-semibold text-slate-600 capitalize">In stock only</span>
        <span className="block text-xs text-slate-400">Hide sold-out products</span>
      </span>

      <span className="text-[10px] font-bold bg-white/15 border border-white/25 rounded-full px-2 py-0.5">
        128
      </span>
    </button>
  );
}