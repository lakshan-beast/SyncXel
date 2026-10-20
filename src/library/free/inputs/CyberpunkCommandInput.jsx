// import { motion } from "framer-motion";

// export default function RetroTerminalInput() {
//   return (
//     <div className="w-72 p-2 bg-black border-2 border-green-500 rounded font-mono text-green-400 flex items-center gap-2 shadow-[0_0_10px_rgba(34,197,94,0.3)]">
//       <span className="text-xs">&gt;</span>
//       <input
//         type="text"
//         placeholder="ENTER_QUERY..."
//         className="bg-transparent text-green-300 text-xs focus:outline-none w-full font-mono placeholder:text-green-800"
//       />
//       <span className="w-2 h-4 bg-green-500 animate-pulse" />
//     </div>
//   );
// }


import { motion } from "framer-motion";

export default function MinimalAmountInput() {
  return (
    <motion.div
      whileHover={{ y: -1 }}
      className="w-80"
    >
      <label htmlFor="minimal-amount" className="block text-xs font-medium text-slate-500 mb-1.5">
        Amount
      </label>
      <div className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl focus-within:border-slate-900 focus-within:ring-2 focus-within:ring-slate-900/10 transition">
        <span className="text-sm font-semibold text-slate-400">$</span>
        <input
          id="minimal-amount"
          type="number"
          min="0"
          step="0.01"
          placeholder="0.00"
          className="flex-1 bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-300"
        />
      </div>
    </motion.div>
  );
}