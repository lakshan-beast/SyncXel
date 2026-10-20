// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function NeonInputSearch() {
//   const [focused, setFocused] = useState(false);

//   return (
//     <motion.div
//       animate={{ 
//         borderColor: focused ? "rgba(34, 211, 238, 0.8)" : "rgba(30, 41, 59, 1)",
//         boxShadow: focused ? "0 0 20px rgba(34,211,238,0.2)" : "0 0 0px rgba(0,0,0,0)"
//       }}
//       className="relative w-72 bg-slate-950 border rounded-xl px-4 py-2 flex items-center gap-2 font-baloo text-xs"
//     >
//       <span className="text-cyan-400 font-bold">&gt;</span>
//       <input
//         type="text"
//         placeholder="SEARCH_DATABASE..."
//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//         className="bg-transparent text-slate-200 placeholder-slate-600 focus:outline-none w-full"
//       />
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { FiMail, FiArrowRight } from "react-icons/fi";

export default function GlassEmailInput() {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="flex items-center gap-2 w-80 p-2 pl-4 bg-white/10 backdrop-blur-xl border border-white/25 rounded-2xl shadow-xl"
    >
      <FiMail className="w-4 h-4 text-white/70" />
      <input
        id="glass-email"
        type="email"
        placeholder="Enter your work email"
        className="flex-1 bg-transparent text-sm text-white placeholder:text-white/50 outline-none"
      />
      <button className="flex items-center gap-1.5 px-3.5 py-2 bg-white/20 hover:bg-white/30 border border-white/25 rounded-xl text-xs font-semibold text-white backdrop-blur-md transition">
        Join
        <FiArrowRight className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
}