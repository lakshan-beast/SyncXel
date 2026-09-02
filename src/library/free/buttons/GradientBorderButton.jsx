// export default function GradientBorderButton() {
//   return (
//     <div className="p-0.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 inline-block">
//       <button className="px-5 py-2 bg-slate-950 text-white text-xs font-semibold rounded-[10px] hover:bg-slate-900 transition-all">
//         Secure Access
//       </button>
//     </div>
//   );
// }

import { motion } from "framer-motion";

// 6. Gradient Border Button
export default function GradientBorderButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className="p-0.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 inline-block shadow-lg shadow-cyan-500/10 cursor-pointer">
      <button className="px-4 py-1.5 bg-slate-950 text-white text-xs font-semibold rounded-[10px] hover:bg-slate-900 transition-colors w-full h-full cursor-pointer">
        Secure Access
      </button>
    </motion.div>
  );
}
