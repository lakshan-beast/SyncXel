import { motion } from "framer-motion";
import { FiDroplet } from "react-icons/fi";

export default function LiquidMorphButton({ 
  text = "Activate Fluid Flow", 
  onClick 
}) {
  return (
    <motion.button
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative overflow-hidden px-8 py-3.5 bg-[#08120d] border-2 border-emerald-500/50 text-emerald-300 font-baloo text-xs font-bold rounded-2xl cursor-pointer group select-none shadow-[0_10px_25px_rgba(16,185,129,0.2)]"
    >
      <span className="relative z-10 flex items-center gap-2.5 group-hover:text-slate-950 transition-colors duration-300">
        <FiDroplet className="w-4 h-4 text-emerald-400 group-hover:text-slate-950 transition-colors duration-300" />
        {text}
      </span>
      
      {/* Rising Liquid Fill Overlay */}
      <motion.span
        variants={{
          hover: { y: "0%" }
        }}
        initial={{ y: "100%" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="absolute inset-0 bg-emerald-400 z-0 pointer-events-none"
      />
    </motion.button>
  );
}