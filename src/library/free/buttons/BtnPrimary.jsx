// export default function BtnPrimary() {
//   return (
//     <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-lg shadow-cyan-500/20 cursor-pointer">
//       Click Me
//     </button>
//   );
// }

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function BtnPrimary({ 
  text = "Launch Dashboard", 
  onClick 
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -1, boxShadow: "0 15px 35px rgba(6, 182, 212, 0.45)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      className="px-8 py-3.5 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-baloo text-xs font-extrabold rounded-2xl shadow-[0_10px_25px_rgba(6,182,212,0.3)] cursor-pointer select-none flex items-center gap-2.5 group transition-all"
    >
      <span className="tracking-wide">{text}</span>
      <FiArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1.5 transition-transform" />
    </motion.button>
  );
}