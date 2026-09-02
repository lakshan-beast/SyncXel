import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CyberToastNotification() {
  const [show, setShow] = useState(true);

  return (
    <div className="relative min-h-[60px] flex items-center justify-center">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-3 px-4 py-3 bg-slate-950/90 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-baloo text-xs rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shadow-[0_0_8px_#22d3ee]" />
            <div className="flex flex-col">
              <span className="font-bold text-white text-left">SYS SUCCESS</span>
              <span className="text-[10px] text-slate-400">Data packet deployed successfully.</span>
            </div>
            <button
              onClick={() => setShow(false)}
              className="ml-3 text-slate-500 hover:text-cyan-400 cursor-pointer"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {!show && (
        <button
          onClick={() => setShow(true)}
          className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-baloo rounded-lg hover:border-cyan-500/50 cursor-pointer"
        >
          [ Trigger Toast ]
        </button>
      )}
    </div>
  );
}