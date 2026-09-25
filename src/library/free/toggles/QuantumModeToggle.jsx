// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function QuantumModeToggle() {
//   const [active, setActive] = useState(true);

//   return (
//     <div className="flex items-center justify-between w-64 p-3 bg-slate-950 border border-indigo-500/40 rounded-xl font-baloo shadow-[0_0_15px_rgba(99,102,241,0.1)]">
//       <span className="text-xs text-indigo-300 font-bold">QUANTUM_SYNC</span>
//       <button
//         onClick={() => setActive(!active)}
//         className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
//           active
//             ? "bg-indigo-500 text-slate-950 shadow-[0_0_10px_#6366f1]"
//             : "bg-slate-900 text-slate-500 border border-slate-800"
//         }`}>
//         {active ? "ONLINE" : "STANDBY"}
//       </button>
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { useState } from "react";
import { FiActivity } from "react-icons/fi";

export default function QuantumModeToggle() {
  const [active, setActive] = useState(true);

  return (
    <div className="flex items-center justify-between w-72 p-3.5 bg-white border border-slate-200/90 rounded-2xl font-baloo shadow-[0_10px_30px_rgba(100,116,139,0.08)] select-none">
      <div className="flex items-center gap-2.5">
        <FiActivity className={`w-4 h-4 transition-colors ${active ? "text-indigo-600 animate-pulse" : "text-slate-400"}`} />
        <span className="text-xs text-slate-700 font-bold tracking-wider">QUANTUM SYNC</span>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setActive(!active)}
        className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
          active
            ? "bg-indigo-600 text-white shadow-[0_4px_15px_rgba(99,102,241,0.35)]"
            : "bg-slate-100 text-slate-500 border border-slate-200 hover:bg-slate-200/60"
        }`}
      >
        {active ? "ONLINE" : "STANDBY"}
      </motion.button>
    </div>
  );
}