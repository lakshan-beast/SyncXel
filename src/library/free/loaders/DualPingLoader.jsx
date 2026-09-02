// export default function DualPingLoader() {
//   return (
//     <div className="relative flex items-center justify-center w-14 h-14">
//       <div className="absolute w-full h-full rounded-full bg-cyan-500/20 animate-ping"></div>
//       <div className="absolute w-3/4 h-3/4 rounded-full bg-indigo-500/30 animate-pulse"></div>
//       <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"></div>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function DualPingLoader() {
  return (
    <div className="relative flex items-center justify-center w-14 h-14">
      <motion.div
        animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
        className="absolute w-full h-full rounded-full bg-cyan-500/20"
      />
      <motion.div
        animate={{ scale: [1, 1.3], opacity: [0.8, 0] }}
        transition={{ repeat: Infinity, duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="absolute w-3/4 h-3/4 rounded-full bg-indigo-500/30"
      />
      <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
    </div>
  );
}