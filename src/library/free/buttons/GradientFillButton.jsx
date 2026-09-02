// export default function GradientFillButton() {
//   return (
//     <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs rounded-xl shadow-[0_0_25px_rgba(34,211,238,0.2)] hover:opacity-90 transition-all">
//       Deploy Pipeline
//     </button>
//   );
// }

import { motion } from "framer-motion";

// 7. Gradient Fill Button
export default function GradientFillButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(34,211,238,0.3)" }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.2)] cursor-pointer">
      Deploy Pipeline
    </motion.button>
  );
}
