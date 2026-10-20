// import { useState } from "react";

// export default function BentoGridCheckbox() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <div onClick={() => setChecked(!checked)} className="flex items-center gap-3 w-64 p-3 bg-slate-900 border border-slate-800 rounded-2xl font-baloo cursor-pointer shadow-lg">
//       <div className={`w-5 h-5 rounded-lg border border-slate-800 flex items-center justify-center transition-all ${checked ? "bg-slate-950 border-slate-700" : "bg-slate-950"}`}>
//         {checked && <div className="w-2.5 h-2.5 bg-emerald-500 rounded-sm" />}
//       </div>
//       <span className="text-xs text-slate-200 font-bold">GRID_SELECT_BOX</span>
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

export default function LuxuryPlanCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <button
      role="checkbox"
      aria-checked={checked}
      onClick={() => setChecked(!checked)}
      onKeyDown={(e) =>
        e.key === " " && (e.preventDefault(), setChecked(!checked))
      }
      className="flex items-center gap-4 p-4 w-80 bg-neutral-950 border border-neutral-800 rounded-2xl text-left cursor-pointer hover:border-amber-200/40 transition">
      <span
        className={`w-6 h-6 shrink-0 rounded-full border flex items-center justify-center transition-all ${
          checked ? "bg-amber-200 border-amber-200" : "border-neutral-600"
        }`}>
        {checked && <FiCheck className="w-3.5 h-3.5 text-neutral-950" />}
      </span>

      <span className="flex-1">
        <span className="block text-sm font-medium text-white">
          Priority support
        </span>
        <span className="block text-xs text-neutral-500 mt-0.5">
          Dedicated response within 2 hours
        </span>
      </span>

      <span className="text-sm font-serif text-amber-200">$12/mo</span>
    </button>
  );
}
