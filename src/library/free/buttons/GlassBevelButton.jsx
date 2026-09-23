// import { motion } from "framer-motion";

// // 10. Glassmorphic Reflection Bevel Button
// export default function GlassBevelButton() {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.04, y: -1 }}
//       whileTap={{ scale: 0.95 }}
//       className="relative overflow-hidden px-5 py-2.5 bg-slate-900/60 backdrop-blur-md border border-white/10 hover:border-cyan-500/40 text-white font-semibold text-xs rounded-xl shadow-lg cursor-pointer group"
//     >
//       <span className="relative z-10">Secure Bevel</span>
//       <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-700 pointer-events-none" />
//     </motion.button>
//   );
// }

import { motion } from "framer-motion";
import { FiShield } from "react-icons/fi";

export default function GlassBevelButton({ 
  text = "Secure Vault Access", 
  onClick 
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2, boxShadow: "0 15px 35px rgba(99, 102, 241, 0.35)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative overflow-hidden px-8 py-3.5 bg-gradient-to-br from-indigo-950/70 via-slate-900/80 to-purple-950/70 backdrop-blur-2xl border-2 border-indigo-400/30 hover:border-indigo-400/70 text-indigo-100 font-baloo text-xs font-bold rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer group select-none flex items-center gap-2.5"
    >
      {/* Icon */}
      <FiShield className="w-4 h-4 text-indigo-400 group-hover:text-white transition-colors" />

      <span className="relative z-10 tracking-wider group-hover:text-white transition-colors">
        {text}
      </span>
      
      {/* Vertical Light Refraction Sweep Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-700 pointer-events-none" />
    </motion.button>
  );
}