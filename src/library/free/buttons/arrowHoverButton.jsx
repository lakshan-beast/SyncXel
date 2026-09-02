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

// 2. Arrow Hover Button
export default function ArrowHoverButton() {
  return (
    <motion.button
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      className="group px-4 py-2 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-200 text-xs rounded-xl inline-flex items-center gap-2 cursor-pointer shadow-md">
      <span>Explore More</span>
      <motion.span
        variants={{ hover: { x: 5 } }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="text-cyan-400">
        →
      </motion.span>
    </motion.button>
  );
}
