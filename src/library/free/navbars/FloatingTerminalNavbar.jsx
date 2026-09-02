import { motion } from "framer-motion";

export default function FloatingTerminalNavbar() {
  return (
    <div className="w-full flex justify-center p-4 pointer-events-none">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="pointer-events-auto w-full max-w-3xl bg-slate-900 border border-indigo-500/40 rounded-2xl px-5 py-3 flex items-center justify-between shadow-[0_0_25px_rgba(99,102,241,0.15)] font-mono">
        <div className="flex items-center gap-4">
          <span className="text-indigo-400 text-sm font-bold">
            &gt;_SYS_NAV
          </span>
          <div className="hidden sm:flex items-center gap-4 border-l border-slate-700 pl-4 text-xs">
            <button className="text-slate-400 hover:text-indigo-300 transition-colors">
              /OVERVIEW
            </button>
            <button className="text-slate-400 hover:text-indigo-300 transition-colors">
              /MODULES
            </button>
            <button className="text-slate-400 hover:text-indigo-300 transition-colors">
              /NETWORK
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-950 rounded-md border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-slate-400">STATUS: OK</span>
          </div>
          <button className="text-slate-500 hover:text-white transition-colors cursor-pointer">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
