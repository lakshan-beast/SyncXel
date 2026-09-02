import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CyberAccordionPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-72 bg-slate-950 border border-cyan-500/40 rounded-xl overflow-hidden font-baloo shadow-[0_0_15px_rgba(34,211,238,0.15)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 flex justify-between items-center text-xs text-cyan-300 font-bold bg-slate-950 hover:bg-cyan-500/10 transition-colors cursor-pointer">
        <span>SYS_PROTOCOL_01</span>
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
            Neural network node connection established successfully. Data stream
            running at 100Gbps.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
