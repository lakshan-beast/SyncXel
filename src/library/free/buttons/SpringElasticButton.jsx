// import { motion } from "framer-motion";

// export default function SpringElasticButton() {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
//       whileTap={{ scale: 0.9 }}
//       transition={{ type: "spring", stiffness: 500, damping: 10 }}
//       className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 cursor-pointer"
//     >
//       Elastic Pop
//     </motion.button>
//   );
// }

import { motion } from "framer-motion";
import { FiGift } from "react-icons/fi";

export default function SpringElasticButton({ 
  text = "Claim Mystery Box", 
  onClick 
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: [-1.5, 1.5, -1.5, 0] }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 500, damping: 10 }}
      onClick={onClick}
      className="relative px-8 py-3.5 bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 text-white font-baloo text-xs font-bold rounded-2xl shadow-[0_12px_30px_rgba(236,72,153,0.45)] cursor-pointer select-none flex items-center gap-2.5 group"
    >
      <FiGift className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
      
      <span className="tracking-widest drop-shadow-md">
        {text}
      </span>
    </motion.button>
  );
}