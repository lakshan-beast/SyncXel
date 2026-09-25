// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function CyberNeuralToggle() {
//   const [isOn, setIsOn] = useState(false);
//   return (
//     <div
//       onClick={() => setIsOn(!isOn)}
//       className="flex items-center justify-between w-64 p-3 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.1)]">
//       <span className="text-xs text-cyan-300 font-bold">NEURAL_LINK</span>
//       <div
//         className={`w-12 h-6 flex items-center rounded-full p-1 border border-cyan-500/50 ${isOn ? "bg-cyan-950 justify-end" : "bg-slate-900 justify-start"}`}>
//         <motion.div
//           layout
//           transition={{ type: "spring", stiffness: 700, damping: 30 }}
//           className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
//         />
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { motion } from "framer-motion";
import { FiCpu } from "react-icons/fi";

export default function CyberNeuralToggle() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className="flex items-center justify-between w-80 p-4 bg-slate-950 border border-cyan-500/40 hover:border-cyan-400 rounded-2xl font-baloo cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all select-none group"
    >
      {/* Icon & Label Details */}
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
          isOn ? "bg-cyan-500/20 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]" : "bg-slate-900 text-slate-500"
        }`}>
          <FiCpu className="w-4 h-4" />
        </div>
        <div>
          <span className="text-xs text-cyan-300 font-bold tracking-wider block">Neural Engine</span>
          <span className="text-[10px] text-slate-400 font-medium">
            {isOn ? "Active (GPU Accelerated)" : "Standby (CPU Mode)"}
          </span>
        </div>
      </div>

      {/* Switch Track */}
      <div
        className={`w-12 h-6 flex items-center rounded-full p-1 border border-cyan-500/50 ${
          isOn ? "bg-cyan-950/80 justify-end shadow-[inset_0_0_8px_rgba(34,211,238,0.3)]" : "bg-slate-900 justify-start"
        }`}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
        />
      </div>
    </div>
  );
}