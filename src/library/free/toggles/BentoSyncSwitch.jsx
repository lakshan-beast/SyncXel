// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function BentoSyncSwitch() {
//   const [isOn, setIsOn] = useState(false);
//   return (
//     <div
//       onClick={() => setIsOn(!isOn)}
//       className="flex items-center justify-between w-64 p-3 bg-slate-900 border border-slate-800 rounded-2xl font-baloo cursor-pointer shadow-lg">
//       <span className="text-xs text-slate-200 font-bold">SYNC_STATUS</span>
//       <div
//         className={`w-12 h-6 flex items-center rounded-xl p-1 border border-slate-800 ${isOn ? "bg-slate-950 justify-end" : "bg-slate-950 justify-start"}`}>
//         <motion.div
//           layout
//           transition={{ type: "spring", stiffness: 700, damping: 30 }}
//           className="w-4 h-4 rounded-lg bg-emerald-500"
//         />
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { FiDatabase } from "react-icons/fi";

export default function BentoSyncSwitch() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className="flex items-center justify-between w-80 p-4 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl font-baloo cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition-all select-none group">
      {/* Icon and Standard Label */}
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
            isOn
              ? "bg-emerald-500/15 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
              : "bg-slate-800 text-slate-500"
          }`}>
          <FiDatabase className="w-4 h-4" />
        </div>
        <div>
          <span className="text-xs text-slate-200 font-bold tracking-wide block">
            Cloud Database Sync
          </span>
          <span className="text-[10px] text-slate-400 font-medium">
            {isOn ? "Syncing Live Data" : "Paused & Offline"}
          </span>
        </div>
      </div>

      {/* Bento Switch Track */}
      <div
        className={`w-12 h-6 flex items-center rounded-xl p-1 border border-slate-800 bg-slate-950 ${
          isOn
            ? "justify-end shadow-[inset_0_0_8px_rgba(16,185,129,0.3)]"
            : "justify-start"
        }`}>
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="w-4 h-4 rounded-lg bg-emerald-500 shadow-[0_0_10px_#10b981]"
        />
      </div>
    </div>
  );
}
