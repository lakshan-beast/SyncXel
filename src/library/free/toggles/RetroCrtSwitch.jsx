// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function RetroCrtSwitch() {
//   const [isOn, setIsOn] = useState(false);
//   return (
//     <div
//       onClick={() => setIsOn(!isOn)}
//       className="flex items-center justify-between w-64 p-3 bg-black border-2 border-green-500 rounded font-mono cursor-pointer shadow-[0_0_10px_rgba(34,197,94,0.3)]">
//       <span className="text-xs text-green-300">CRT_POWER</span>
//       <div
//         className={`w-12 h-5 flex items-center rounded p-0.5 border border-green-500 ${isOn ? "bg-green-950 justify-end" : "bg-black justify-start"}`}>
//         <motion.div
//           layout
//           transition={{ type: "spring", stiffness: 700, damping: 30 }}
//           className="w-3.5 h-3.5 rounded bg-green-400"
//         />
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { motion } from "framer-motion";
import { FiTerminal } from "react-icons/fi";

export default function RetroCrtSwitch() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className="flex items-center justify-between w-80 p-4 bg-black border-2 border-green-500 rounded-xl font-mono cursor-pointer shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:border-green-400 transition-all select-none group"
    >
      {/* Icon and Terminal Label */}
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
          isOn ? "bg-green-500/20 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.4)]" : "bg-neutral-900 text-neutral-600"
        }`}>
          <FiTerminal className="w-4 h-4" />
        </div>
        <div>
          <span className="text-xs text-green-300 font-bold tracking-wider block">Terminal CRT Mode</span>
          <span className="text-[10px] text-green-500/70">
            {isOn ? "Phosphor Scanlines Active" : "Standard Display"}
          </span>
        </div>
      </div>

      {/* Retro CRT Switch Track */}
      <div
        className={`w-12 h-6 flex items-center rounded p-0.5 border border-green-500 ${
          isOn ? "bg-green-950/80 justify-end shadow-[inset_0_0_8px_rgba(34,197,94,0.4)]" : "bg-black justify-start"
        }`}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="w-4 h-4 rounded bg-green-400 shadow-[0_0_10px_#4ade80]"
        />
      </div>
    </div>
  );
}