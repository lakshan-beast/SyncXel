// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function ClayPillToggle() {
//   const [isOn, setIsOn] = useState(false);
//   return (
//     <div
//       onClick={() => setIsOn(!isOn)}
//       className="flex items-center justify-between w-64 p-3 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] border border-slate-800 font-baloo cursor-pointer">
//       <span className="text-xs text-cyan-300 font-bold">VOLUMETRIC_MODE</span>
//       <div
//         className={`w-12 h-6 flex items-center rounded-full p-1 bg-slate-900 shadow-inner border border-slate-800 ${isOn ? "justify-end" : "justify-start"}`}>
//         <motion.div
//           layout
//           transition={{ type: "spring", stiffness: 700, damping: 30 }}
//           className="w-4 h-4 rounded-full bg-cyan-400 shadow-sm"
//         />
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { motion } from "framer-motion";
import { FiBox } from "react-icons/fi";

export default function ClayPillToggle() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className="flex items-center justify-between w-80 p-4 bg-slate-900 rounded-2xl shadow-[6px_6px_14px_#020617,-6px_-6px_14px_#1e293b] border border-slate-800 hover:border-slate-700 font-baloo cursor-pointer transition-all select-none group"
    >
      {/* Icon and Standard Label */}
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
          isOn ? "bg-cyan-500/20 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.3)]" : "bg-slate-800 text-slate-500"
        }`}>
          <FiBox className="w-4 h-4" />
        </div>
        <div>
          <span className="text-xs text-slate-200 font-bold tracking-wide block">Volumetric Rendering</span>
          <span className="text-[10px] text-cyan-300/80 font-medium">
            {isOn ? "WebGL 3D Accelerated" : "Standard 2D Mode"}
          </span>
        </div>
      </div>

      {/* Clay Switch Track */}
      <div
        className={`w-12 h-6 flex items-center rounded-full p-1 bg-slate-950 shadow-inner border border-slate-800 ${
          isOn ? "justify-end bg-cyan-950/40" : "justify-start"
        }`}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
        />
      </div>
    </div>
  );
}