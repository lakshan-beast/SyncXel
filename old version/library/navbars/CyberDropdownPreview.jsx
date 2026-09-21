import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CyberDropdownPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative font-mono text-xs">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2 bg-slate-950 border border-cyan-500/40 text-cyan-300 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.15)] cursor-pointer"
      >
        <span>SYSTEM_MODULES</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          ▼
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-56 bg-slate-950 border border-cyan-500/40 rounded-xl p-2 shadow-[0_0_20px_rgba(34,211,238,0.2)] backdrop-blur-xl z-20 space-y-1"
          >
            <div className="px-3 py-2 rounded-lg hover:bg-cyan-500/10 cursor-pointer transition-colors">
              <div className="text-white font-bold">Neural Engine</div>
              <div className="text-[10px] text-slate-400">v4.2 active core</div>
            </div>
            <div className="px-3 py-2 rounded-lg hover:bg-cyan-500/10 cursor-pointer transition-colors">
              <div className="text-white font-bold">Quantum Grid</div>
              <div className="text-[10px] text-slate-400">Distributed sync</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}