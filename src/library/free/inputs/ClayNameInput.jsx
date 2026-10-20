// import { motion } from "framer-motion";

// export default function CommandConsoleInput() {
//   return (
//     <div className="relative w-72 bg-slate-950 border border-indigo-500/40 rounded-xl px-4 py-2 flex items-center justify-between font-baloo text-xs shadow-[0_0_15px_rgba(99,102,241,0.15)]">
//       <input
//         type="text"
//         placeholder="EXECUTE_COMMAND..."
//         className="bg-transparent text-indigo-300 placeholder-indigo-900/60 focus:outline-none w-full"
//       />
//       <motion.span
//         animate={{ opacity: [1, 0, 1] }}
//         transition={{ repeat: Infinity, duration: 0.8 }}
//         className="w-2 h-4 bg-indigo-500 shadow-[0_0_8px_#6366f1]"
//       />
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";

export default function ClayNameInput() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="relative w-80"
    >
      <div className="flex items-center gap-3 px-4 py-3.5 bg-violet-100 rounded-[24px] shadow-[6px_6px_14px_#d8c9f0,-6px_-6px_14px_#ffffff] focus-within:shadow-[4px_4px_10px_#d8c9f0,-4px_-4px_10px_#ffffff] transition-all">
        <FiUser className="w-5 h-5 text-violet-400" />
        <input
          id="clay-name"
          type="text"
          placeholder="What should we call you?"
          className="flex-1 bg-transparent text-sm font-semibold text-violet-900 placeholder:text-violet-400 outline-none"
        />
      </div>
      <label htmlFor="clay-name" className="sr-only">
        Your name
      </label>
    </motion.div>
  );
}