import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi";

export default function AuroraGlassButton({ 
  text = "Launch AI Studio", 
  onClick 
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(219,39,119,0.4)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative px-9 py-3.5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 text-white font-baloo text-sm font-bold rounded-2xl shadow-[0_10px_25px_rgba(219,39,119,0.3)] cursor-pointer overflow-hidden group select-none border border-white/25 backdrop-blur-xl"
    >
      {/* Liquid Light Sweep Effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
      
      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2.5 drop-shadow-md">
        <HiOutlineSparkles className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform duration-300" />
        {text}
      </span>
    </motion.button>
  );
}