import { motion } from "framer-motion";

export default function CommandConsoleInput() {
  return (
    <div className="relative w-72 bg-slate-950 border border-indigo-500/40 rounded-xl px-4 py-2 flex items-center justify-between font-baloo text-xs shadow-[0_0_15px_rgba(99,102,241,0.15)]">
      <input
        type="text"
        placeholder="EXECUTE_COMMAND..."
        className="bg-transparent text-indigo-300 placeholder-indigo-900/60 focus:outline-none w-full"
      />
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="w-2 h-4 bg-indigo-500 shadow-[0_0_8px_#6366f1]"
      />
    </div>
  );
}