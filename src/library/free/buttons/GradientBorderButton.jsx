// export default function GradientBorderButton() {
//   return (
//     <div className="p-0.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 inline-block">
//       <button className="px-5 py-2 bg-slate-950 text-white text-xs font-semibold rounded-[10px] hover:bg-slate-900 transition-all">
//         Secure Access
//       </button>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { FiKey } from "react-icons/fi";

export default function GradientBorderButton({ 
  text = "Secure System Access", 
  onClick 
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(16, 185, 129, 0.35)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="p-[2px] rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-500 to-indigo-500 inline-block cursor-pointer select-none shadow-[0_10px_25px_rgba(0,0,0,0.4)] group"
    >
      <button className="px-8 py-3.5 bg-[#0a0f1d] text-emerald-300 group-hover:text-white font-baloo text-xs font-bold rounded-[14px] transition-colors w-full h-full cursor-pointer flex items-center gap-2.5">
        <FiKey className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
        <span className="tracking-widest">{text}</span>
      </button>
    </motion.div>
  );
}
