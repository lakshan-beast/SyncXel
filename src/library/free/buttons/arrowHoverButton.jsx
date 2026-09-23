// export default function ArrowHoverButton() {
//   return (
//     <button className="group relative inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 px-6 rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-amber-500/20 active:scale-95">
//       <span className="inline-block transition-all duration-300 group-hover:pr-6">
//         Hover
//       </span>
//       <span className="absolute right-4 opacity-0 transition-all duration-300 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-lg">
//         »
//       </span>
//     </button>
//   );
// }

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function ArrowHoverButton({
  text = "Explore Articles",
  onClick,
}) {
  return (
    <motion.button
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group px-8 py-3.5 bg-gradient-to-r from-violet-950 via-purple-950 to-stone-950 border-2 border-amber-500/40 hover:border-amber-400 text-amber-100 font-baloo text-xs font-bold rounded-2xl inline-flex items-center gap-3 cursor-pointer select-none shadow-[0_10px_25px_rgba(245,158,11,0.2)] transition-colors">
      <span className="tracking-wide group-hover:text-amber-300 transition-colors">
        {text}
      </span>

      <motion.span
        variants={{ hover: { x: 6 } }}
        transition={{ type: "spring", stiffness: 350, damping: 15 }}
        className="text-amber-400 flex items-center">
        <FiArrowRight className="w-4 h-4" />
      </motion.span>
    </motion.button>
  );
}
