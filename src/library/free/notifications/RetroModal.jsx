import { motion } from "framer-motion";

export default function RetroModal() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-80 p-4 bg-black border-2 border-green-500 rounded font-mono space-y-3 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
      <div className="flex justify-between items-center text-xs text-green-500 border-b border-green-900 pb-2">
        <span>C:\SYS\MODAL_CONFIRM.EXE</span>
        <span className="cursor-pointer">[X]</span>
      </div>
      <p className="text-xs text-green-400">
        Execute root access command? All nodes will sync.
      </p>
      <div className="flex gap-2 pt-1">
        <button className="flex-1 py-1.5 bg-green-950 text-green-400 font-mono text-xs border border-green-500 cursor-pointer">
          YES
        </button>
        <button className="flex-1 py-1.5 bg-black text-green-600 font-mono text-xs border border-green-800 cursor-pointer">
          NO
        </button>
      </div>
    </motion.div>
  );
}
