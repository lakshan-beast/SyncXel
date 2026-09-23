// import { motion } from "framer-motion";

// // 8. Terminal Command Prompt Button
// export default function TerminalButton() {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.03, borderColor: "rgba(34,211,238,0.8)" }}
//       whileTap={{ scale: 0.95 }}
//       className="px-4 py-2.5 bg-slate-950 border border-slate-800 text-cyan-400 font-baloo text-xs rounded-xl shadow-md flex items-center gap-2 cursor-pointer"
//     >
//       <span className="text-slate-500">$</span>
//       <span>npm run deploy</span>
//       <motion.span
//         animate={{ opacity: [1, 0, 1] }}
//         transition={{ repeat: Infinity, duration: 0.8 }}
//         className="w-1.5 h-3 bg-cyan-400"
//       />
//     </motion.button>
//   );
// }

import { motion } from "framer-motion";

export default function TerminalButton({
  command = "npm run deploy",
  onClick,
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        boxShadow: "0 0 25px rgba(16, 185, 129, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-5 py-3 bg-[#0d1117] border-2 border-emerald-500/40 text-emerald-400 font-mono text-xs rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.4)] flex items-center gap-2.5 cursor-pointer select-none group">
      <span className="text-emerald-600 font-bold select-none">$</span>
      <span className="font-semibold tracking-wide group-hover:text-emerald-300 transition-colors">
        {command}
      </span>

      {/* Blinking Terminal Cursor */}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "steps(1)" }}
        className="w-2 h-3.5 bg-emerald-400 shadow-[0_0_8px_#34d399]"
      />
    </motion.button>
  );
}
