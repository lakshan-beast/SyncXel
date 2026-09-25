import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function PristineLightButton({ 
  text = "Schedule Enterprise Demo", 
  onClick 
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2, boxShadow: "0 20px 35px -10px rgba(99, 102, 241, 0.25)" }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      className="px-7 py-3.5 bg-gradient-to-r from-white via-slate-50 to-indigo-50/50 border border-slate-200/80 hover:border-indigo-300 text-slate-800 font-baloo text-xs font-bold rounded-2xl shadow-[0_10px_25px_rgba(100,116,139,0.1)] cursor-pointer select-none flex items-center gap-3 group transition-colors"
    >
      <span className="tracking-wide group-hover:text-indigo-600 transition-colors">
        {text}
      </span>
      
      {/* Interactive Circular Icon Container */}
      <div className="w-6 h-6 rounded-full bg-indigo-50 group-hover:bg-indigo-600 flex items-center justify-center transition-colors">
        <FiArrowRight className="w-3.5 h-3.5 text-indigo-600 group-hover:text-white transition-colors" />
      </div>
    </motion.button>
  );
}