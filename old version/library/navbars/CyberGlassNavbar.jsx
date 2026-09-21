import { motion } from "framer-motion";
import { useState } from "react";

export default function CyberGlassNavbar() {
  const [active, setActive] = useState("HOME");

  return (
    <nav className="w-full bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/30 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-[0_4px_30px_rgba(34,211,238,0.1)]">
      <div className="flex items-center gap-2 cursor-pointer">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="w-6 h-6 border-2 border-dashed border-cyan-400 rounded-full"
        />
        <span className="font-mono text-cyan-400 font-bold tracking-widest text-lg text-glow">
          NEXUS_UI
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-mono text-xs">
        {["HOME", "COMPONENTS", "DOCS", "PRICING"].map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`relative transition-colors duration-300 ${active === item ? "text-cyan-400" : "text-slate-400 hover:text-slate-200"}`}>
            {item}
            {active === item && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
              />
            )}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="font-mono text-xs text-slate-300 hover:text-cyan-400 transition-colors hidden sm:block">
          [ LOGIN ]
        </button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-1.5 bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-mono text-xs rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 font-bold">
          INIT_SYSTEM
        </motion.button>
      </div>
    </nav>
  );
}
