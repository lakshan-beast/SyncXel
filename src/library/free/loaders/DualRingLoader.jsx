// export default function DualRingLoader() {
//   return (
//     <div className="relative w-12 h-12 flex items-center justify-center">
//       <div className="absolute inset-0 border-2 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin"></div>
//       <div className="absolute inset-2 border-2 border-indigo-500/20 border-b-indigo-400 rounded-full animate-spin [animation-direction:reverse] [animation-duration:1.5s]"></div>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function DualRingLoader() {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="absolute inset-0 border-2 border-cyan-500/20 border-t-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.2)]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        className="absolute inset-2 border-2 border-indigo-500/20 border-b-indigo-400 rounded-full"
      />
    </div>
  );
}
