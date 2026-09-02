// export default function BtnPrimary() {
//   return (
//     <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-lg shadow-cyan-500/20 cursor-pointer">
//       Click Me
//     </button>
//   );
// }

import { motion } from "framer-motion";
import { useState } from "react";

// 1. Primary Button
export default function BtnPrimary() {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-lg shadow-cyan-500/20 cursor-pointer">
      Click Me
    </motion.button>
  );
}
