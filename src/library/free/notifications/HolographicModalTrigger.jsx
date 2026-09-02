import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function HolographicModalTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-slate-950 border border-indigo-500/40 text-indigo-300 font-baloo text-xs rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.15)] cursor-pointer"
      >
        [ Open Terminal Modal ]
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="w-full max-w-sm p-5 bg-slate-950 border border-cyan-500/50 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.25)] font-baloo"
            >
              <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                <span className="text-cyan-400 text-xs font-bold">SECURITY_OVERRIDE</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-500 hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <p className="py-4 text-xs text-slate-300 leading-relaxed">
                Warning: You are about to initiate a full-stack code compilation sequence. Proceed with caution.
              </p>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-400 text-xs rounded-lg hover:text-white cursor-pointer"
                >
                  Abort
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1.5 bg-cyan-500 text-slate-950 font-bold text-xs rounded-lg shadow-lg shadow-cyan-500/20 cursor-pointer"
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}