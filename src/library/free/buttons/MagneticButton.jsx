import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

export default function MagneticButton({ 
  text = "Initialize Core Drive", 
  onClick 
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.08, y: -2, boxShadow: "0 0 35px rgba(249, 115, 22, 0.5)" }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
      onClick={onClick}
      className="relative px-7 py-3.5 bg-gradient-to-r from-orange-950 via-rose-950 to-amber-950 border-2 border-orange-500/60 text-orange-200 font-baloo text-xs font-bold rounded-2xl shadow-[0_10px_25px_rgba(249,115,22,0.25)] cursor-pointer select-none flex items-center gap-2.5 group"
    >
      <FiZap className="w-4 h-4 text-orange-400 group-hover:scale-125 transition-transform" />
      
      <span className="tracking-widest group-hover:text-white transition-colors">
        [ {text} ]
      </span>
    </motion.button>
  );
}