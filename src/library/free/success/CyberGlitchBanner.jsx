// import { motion } from "framer-motion";

// export default function CyberGlitchBanner() {
//   return (
//     <motion.div
//       whileHover={{ x: [-1, 1, -1, 0] }}
//       className="w-80 p-3.5 bg-slate-950 border-2 border-cyan-400 rounded-xl font-baloo flex items-center gap-3 shadow-[0_0_15px_rgba(34,211,238,0.3)] text-white">
//       <div className="w-8 h-8 rounded-lg bg-cyan-500 text-slate-950 flex items-center justify-center font-black text-xs">
//         !
//       </div>
//       <div>
//         <h4 className="text-xs font-black uppercase text-cyan-400">
//           OVERRIDE_ACTIVE
//         </h4>
//         <p className="text-[10px] text-slate-300 font-mono">
//           Protocol synchronized to L2
//         </p>
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { FiShield } from "react-icons/fi";

export default function CyberGlitchBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ x: [-2, 2, -2, 0], scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="w-80 p-4 bg-slate-950/95 backdrop-blur-xl border-2 border-cyan-400 rounded-2xl font-baloo flex items-center gap-3.5 shadow-[0_0_25px_rgba(34,211,238,0.3)] text-white select-none cursor-pointer group"
    >
      {/* Glitch Icon Box */}
      <div className="w-9 h-9 rounded-xl bg-cyan-400 text-slate-950 flex items-center justify-center font-black text-sm shadow-[0_0_15px_#22d3ee] shrink-0 group-hover:rotate-6 transition-transform">
        <FiShield className="w-4 h-4 stroke-[3]" />
      </div>

      {/* Text Content */}
      <div className="space-y-0.5 flex-1">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-extrabold uppercase text-cyan-400 tracking-wider">
            OVERRIDE_ACTIVE
          </h4>
          <span className="text-[9px] text-cyan-300 font-mono bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-500/40">
            SECURE
          </span>
        </div>
        <p className="text-[11px] text-slate-300 font-mono leading-relaxed">
          Security protocol successfully synchronized to L2 edge cluster node.
        </p>
      </div>
    </motion.div>
  );
}