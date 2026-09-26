// export default function RetroTerminalCard() {
//   return (
//     <div className="w-72 p-3 bg-black border-2 border-green-500 rounded font-mono space-y-2 shadow-[0_0_10px_rgba(34,197,94,0.2)]">
//       <div className="flex justify-between items-center text-[10px] text-green-500 border-b border-green-900 pb-1">
//         <span>C:\SYS\USER.EXE</span>
//         <span>[ACTIVE]</span>
//       </div>
//       <p className="text-[11px] text-green-400">
//         System prompt initialized. Ready for user commands...
//       </p>
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { FiTerminal } from "react-icons/fi";

export default function RetroTerminalCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="w-80 p-4 bg-black border-2 border-green-500 rounded-xl font-mono space-y-3 shadow-[0_0_20px_rgba(34,197,94,0.3)] select-none cursor-pointer group"
    >
      {/* Terminal Window Header */}
      <div className="flex justify-between items-center text-[10px] text-green-400 border-b border-green-900/80 pb-2">
        <div className="flex items-center gap-1.5 font-bold">
          <FiTerminal className="w-3.5 h-3.5 text-green-500 animate-pulse" />
          <span>SYS_SHELL://v2.4</span>
        </div>
        <span className="px-1.5 py-0.5 bg-green-950 border border-green-700 rounded text-[9px] text-green-300">
          [ACTIVE]
        </span>
      </div>

      {/* Terminal Log Output */}
      <div className="space-y-1 text-[11px] text-green-400/90 font-mono">
        <p className="text-green-500 font-bold">&gt; Initializing kernel modules...</p>
        <p className="text-green-400/80">&gt; Loading environment variables...</p>
        <p className="text-green-300 font-semibold animate-pulse">&gt; Ready for user commands_</p>
      </div>

      {/* Footer Status */}
      <div className="flex justify-between items-center text-[9px] text-green-600 pt-1 border-t border-green-950">
        <span>PID: 4096</span>
        <span>UTF-8</span>
      </div>
    </motion.div>
  );
}