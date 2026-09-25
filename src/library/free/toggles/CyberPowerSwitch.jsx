// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function CyberPowerSwitch() {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <div className="flex items-center justify-between w-64 p-3 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo shadow-[0_0_15px_rgba(34,211,238,0.1)]">
//       <span className="text-xs text-cyan-300 font-bold">SYS_POWER_GRID</span>
//       <div
//         onClick={() => setIsOn(!isOn)}
//         className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
//           isOn ? "bg-cyan-500/20 border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]" : "bg-slate-900 border border-slate-800"
//         }`}
//       >
//         <motion.div
//           animate={{ x: isOn ? 28 : 0 }}
//           transition={{ type: "spring", stiffness: 500, damping: 30 }}
//           className={`w-5 h-5 rounded-full shadow-md ${
//             isOn ? "bg-cyan-400 shadow-[0_0_8px_#22d3ee]" : "bg-slate-600"
//           }`}
//         />
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { useState } from "react";
import { FiCloud, FiCheck } from "react-icons/fi";

export default function EnterpriseToggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center justify-between w-72 p-4 bg-white border border-slate-200/90 rounded-2xl font-baloo shadow-[0_10px_30px_rgba(100,116,139,0.08)] select-none">
      {/* Label and Icon Section */}
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
            isOn
              ? "bg-indigo-50 text-indigo-600"
              : "bg-slate-100 text-slate-500"
          }`}>
          <FiCloud className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-800">Cloud Auto-Sync</p>
          <p className="text-[10px] text-slate-400 font-medium">
            {isOn ? "Active & Syncing" : "Paused"}
          </p>
        </div>
      </div>

      {/* Switch Track */}
      <div
        onClick={() => setIsOn(!isOn)}
        className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
          isOn
            ? "bg-indigo-600 shadow-[0_0_12px_rgba(99,102,241,0.35)]"
            : "bg-slate-200"
        }`}>
        <motion.div
          animate={{ x: isOn ? 28 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center">
          {isOn && <FiCheck className="w-3 h-3 text-indigo-600" />}
        </motion.div>
      </div>
    </div>
  );
}
