// import { FaSearch } from "react-icons/fa";
// export default function CommandSearchBar() {
//   return (
//     <div className="relative w-72">
//       <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 text-xs">
//         <FaSearch />
//       </span>
//       <input
//         type="text"
//         placeholder="Search components..."
//         className="w-full pl-10 pr-12 py-2.5 bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-all shadow-inner cursor-text"
//       />
//       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//         <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded-md shadow-sm">
//           Ctrl + K
//         </kbd>
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { FiCreditCard } from "react-icons/fi";

export default function LuxuryCardNumberInput() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="w-80 p-5 bg-neutral-950 border border-neutral-800 rounded-2xl space-y-3">
      <label
        htmlFor="luxury-card"
        className="block text-[11px] uppercase tracking-[0.2em] text-amber-200/70">
        Card number
      </label>

      <div className="flex items-center gap-3 px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl focus-within:border-amber-200/50 transition">
        <FiCreditCard className="w-4 h-4 text-amber-200/70" />
        <input
          id="luxury-card"
          type="text"
          inputMode="numeric"
          placeholder="1234 5678 9012 3456"
          className="flex-1 bg-transparent text-sm tracking-widest text-white placeholder:text-neutral-600 outline-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          inputMode="numeric"
          placeholder="MM / YY"
          className="px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white placeholder:text-neutral-600 outline-none focus:border-amber-200/50 transition"
        />
        <input
          type="text"
          inputMode="numeric"
          placeholder="CVC"
          className="px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white placeholder:text-neutral-600 outline-none focus:border-amber-200/50 transition"
        />
      </div>
    </motion.div>
  );
}
