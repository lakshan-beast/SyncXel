import { motion } from "framer-motion";

// 8. Terminal Command Prompt Button
export default function TerminalButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.03, borderColor: "rgba(34,211,238,0.8)" }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2.5 bg-slate-950 border border-slate-800 text-cyan-400 font-mono text-xs rounded-xl shadow-md flex items-center gap-2 cursor-pointer"
    >
      <span className="text-slate-500">$</span>
      <span>npm run deploy</span>
      <motion.span 
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="w-1.5 h-3 bg-cyan-400"
      />
    </motion.button>
  );
}