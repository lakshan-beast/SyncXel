// import { motion } from "framer-motion";

// export default function RetroModal() {
//   return (
//     <motion.div
//       initial={{ scale: 0.9, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       className="w-80 p-4 bg-black border-2 border-green-500 rounded font-mono space-y-3 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
//       <div className="flex justify-between items-center text-xs text-green-500 border-b border-green-900 pb-2">
//         <span>C:\SYS\MODAL_CONFIRM.EXE</span>
//         <span className="cursor-pointer">[X]</span>
//       </div>
//       <p className="text-xs text-green-400">
//         Execute root access command? All nodes will sync.
//       </p>
//       <div className="flex gap-2 pt-1">
//         <button className="flex-1 py-1.5 bg-green-950 text-green-400 font-mono text-xs border border-green-500 cursor-pointer">
//           YES
//         </button>
//         <button className="flex-1 py-1.5 bg-black text-green-600 font-mono text-xs border border-green-800 cursor-pointer">
//           NO
//         </button>
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { FiUploadCloud, FiX } from "react-icons/fi";

export default function BentoUploadToast() {
  return (
    <motion.div
      role="status"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="flex items-center gap-3 w-80 p-4 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl">
      <span className="w-9 h-9 shrink-0 bg-indigo-500/15 rounded-xl flex items-center justify-center">
        <FiUploadCloud className="w-4 h-4 text-indigo-400" />
      </span>

      <div className="flex-1">
        <p className="text-sm font-semibold text-white">3 files uploaded</p>
        <div className="mt-1.5 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full bg-indigo-500 rounded-full"
          />
        </div>
      </div>

      <button
        aria-label="Dismiss notification"
        className="text-slate-500 hover:text-white transition">
        <FiX className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
