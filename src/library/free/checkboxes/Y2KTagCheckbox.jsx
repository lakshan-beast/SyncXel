// import { useState } from "react";

// export default function CyberGlitchCheckbox() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <div
//       onClick={() => setChecked(!checked)}
//       className="flex items-center gap-3 w-64 p-3 bg-slate-950 border border-cyan-500/50 rounded-xl font-baloo cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.15)]">
//       <div
//         className={`w-5 h-5 rounded border-2 transition-all flex items-center justify-center ${checked ? "bg-cyan-500 border-cyan-300" : "bg-slate-900 border-cyan-600"}`}>
//         {checked && (
//           <span className="text-slate-950 text-[10px] font-black">✓</span>
//         )}
//       </div>
//       <span className="text-xs text-cyan-400 font-bold">SYS_OVERRIDE_BOX</span>
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";

export default function Y2KTagCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <button
      role="checkbox"
      aria-checked={checked}
      onClick={() => setChecked(!checked)}
      onKeyDown={(e) =>
        e.key === " " && (e.preventDefault(), setChecked(!checked))
      }
      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border-2 border-black cursor-pointer select-none transition-all ${
        checked
          ? "bg-gradient-to-r from-pink-400 to-cyan-300 shadow-[3px_3px_0px_0px_#000]"
          : "bg-white shadow-[2px_2px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000]"
      }`}>
      <FiHeart
        className={`w-4 h-4 ${checked ? "text-black" : "text-pink-500"}`}
      />
      <span className="text-xs font-black uppercase tracking-wide text-black">
        Y2K Aesthetic
      </span>
    </button>
  );
}
