import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MatrixLogAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-72 bg-slate-950 border border-indigo-500/40 rounded-xl overflow-hidden font-baloo shadow-[0_0_15px_rgba(99,102,241,0.15)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 flex justify-between items-center text-xs text-indigo-300 font-bold bg-slate-950 hover:bg-indigo-500/10 transition-colors cursor-pointer">
        <span>DIAGNOSTIC_LOG</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}>
          ▼
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="px-3 pb-3 text-[11px] text-slate-400 border-t border-slate-900">
            All core parameters operating within safe structural limits. Zero
            packet loss detected.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
