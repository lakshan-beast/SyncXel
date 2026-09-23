// export default function NeonButton() {
//   return (
//     <button className="px-6 py-2.5 rounded-xl bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300">
//       Click Me
//     </button>
//   );
// }

import { motion } from "framer-motion";
import { FiActivity } from "react-icons/fi";

export default function NeonButton({ 
  text = "Activate Neon Matrix", 
  onClick 
}) {
  return (
    <motion.button 
      whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(217, 70, 239, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-8 py-3.5 bg-gradient-to-r from-purple-950 via-zinc-950 to-fuchsia-950 border-2 border-fuchsia-500/50 hover:border-fuchsia-400 text-fuchsia-300 hover:text-white font-baloo text-xs font-bold rounded-2xl shadow-[0_10px_25px_rgba(217,70,239,0.25)] cursor-pointer select-none flex items-center gap-2.5 transition-all group"
    >
      <FiActivity className="w-4 h-4 text-fuchsia-400 group-hover:scale-110 transition-transform" />
      <span className="tracking-widest">{text}</span>
    </motion.button>
  );
}