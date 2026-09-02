// export default function NeonButton() {
//   return (
//     <button className="px-6 py-2.5 rounded-xl bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300">
//       Click Me
//     </button>
//   );
// }

import { motion } from "framer-motion";

// 4. Neon Glow Button
export default function NeonButton() {
  return (
    <motion.button 
      whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(34,211,238,0.4)" }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 bg-slate-950 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 text-xs font-medium rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.15)] cursor-pointer"
    >
      Neon Glow
    </motion.button>
  );
}