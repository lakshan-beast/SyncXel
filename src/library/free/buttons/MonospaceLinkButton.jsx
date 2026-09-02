// export default function MonospaceLinkButton() {
//   return (
//     <button className="px-4 py-2 bg-transparent text-slate-400 hover:text-cyan-400 font-mono text-xs tracking-wider uppercase transition-all">
//       [ View Logs ]
//     </button>
//   );
// }


import { motion } from "framer-motion";

// 3. Monospace Link Button
export default function MonospaceLinkButton() {
  return (
    <motion.button 
      whileHover={{ scale: 1.05, color: "#22d3ee" }}
      whileTap={{ scale: 0.95 }}
      className="px-3 py-1.5 bg-transparent text-slate-400 font-mono text-xs tracking-wider uppercase cursor-pointer transition-colors"
    >
      [ View Logs ]
    </motion.button>
  );
}