// export default function CyanRingLoader() {
//   return (
//     <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin cursor-pointer" />
//   );
// }

import { motion } from "framer-motion";

export default function CyanRingLoader() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full shadow-[0_0_10px_rgba(34,211,238,0.3)] cursor-pointer"
    />
  );
}