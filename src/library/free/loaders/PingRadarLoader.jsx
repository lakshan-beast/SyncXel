// export default function PingRadarLoader() {
//   return (
//     <div className="relative flex items-center justify-center w-12 h-12">
//       <div className="absolute w-full h-full rounded-full border border-cyan-500/40 animate-ping"></div>
//       <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"></div>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function PingRadarLoader() {
  return (
    <div className="relative flex items-center justify-center w-12 h-12">
      <motion.div
        scale={[1, 1.8]}
        opacity={[0.6, 0]}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
        className="absolute w-full h-full rounded-full border border-cyan-500/60"
      />
      <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
    </div>
  );
}