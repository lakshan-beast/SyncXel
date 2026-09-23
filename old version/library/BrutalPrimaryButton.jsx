import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function BrutalPrimaryButton({
  text = "Claim Your Freebie",
  onClick,
}) {
  return (
    <motion.button
      whileHover={{ x: -3, y: -3 }}
      whileTap={{ x: 3, y: 3 }}
      onClick={onClick}
      className="group relative inline-flex items-center gap-3 px-8 py-3 bg-yellow-400 text-slate-950 font-black font-baloo text-sm border-2 border-slate-950 rounded-xl shadow-[5px_5px_0px_0px_#020617] hover:shadow-[8px_8px_0px_0px_#020617] transition-shadow cursor-pointer select-none">
      <span>{text}</span>
      <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.button>
  );
}
