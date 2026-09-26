// import { motion } from "framer-motion";

// export default function RetroTerminalToast() {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="w-80 p-3.5 bg-black border-2 border-green-500 rounded font-mono flex items-center gap-3 shadow-[0_0_15px_rgba(34,197,94,0.3)] text-green-400">
//       <div className="w-7 h-7 bg-green-950 border border-green-500 rounded flex items-center justify-center font-bold text-xs">
//         OK
//       </div>
//       <div>
//         <h4 className="text-xs font-bold">SUCCESS_LOG [200]</h4>
//         <p className="text-[10px] text-green-600">SYS_COMMAND_EXECUTED_01</p>
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

export default function BrutalPopToast() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ x: -2, y: -2, boxShadow: "5px 5px 0px 0px #020617" }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="w-80 p-4 bg-yellow-300 border-2 border-slate-950 rounded-2xl font-baloo flex items-center gap-3.5 shadow-[3px_3px_0px_0px_#020617] text-slate-950 select-none cursor-pointer group">
      {/* Neo-brutalist Icon Box */}
      <div className="w-9 h-9 rounded-xl bg-pink-500 border-2 border-slate-950 flex items-center justify-center text-white font-black text-sm shadow-[2px_2px_0px_0px_#020617] shrink-0 group-hover:rotate-6 transition-transform">
        <FiCheck className="w-4 h-4 stroke-[3]" />
      </div>

      {/* Text Content */}
      <div className="space-y-0.5 flex-1">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-black tracking-wide text-slate-950">
            Changes Saved
          </h4>
          <span className="text-[9px] font-bold text-slate-900 bg-yellow-400 px-1.5 py-0.5 rounded border border-slate-950">
            Live
          </span>
        </div>
        <p className="text-[11px] font-medium text-slate-800 leading-relaxed">
          Your workspace billing configuration has been updated successfully.
        </p>
      </div>
    </motion.div>
  );
}
