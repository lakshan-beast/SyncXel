// export default function GradientFillButton() {
//   return (
//     <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs rounded-xl shadow-[0_0_25px_rgba(34,211,238,0.2)] hover:opacity-90 transition-all">
//       Deploy Pipeline
//     </button>
//   );
// }

import { motion } from "framer-motion";
import { PiRocket } from "react-icons/pi";

export default function GradientFillButton({ 
  text = "Deploy Production Pipeline", 
  onClick 
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(244, 63, 94, 0.45)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-8 py-3.5 bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-baloo text-xs font-extrabold rounded-2xl shadow-[0_10px_25px_rgba(244,63,94,0.3)] cursor-pointer select-none flex items-center gap-2.5 transition-all group"
    >
      <PiRocket className="w-4 h-4 text-amber-200 group-hover:-translate-y-1 transition-transform" />
      <span className="tracking-wide">{text}</span>
    </motion.button>
  );
}
