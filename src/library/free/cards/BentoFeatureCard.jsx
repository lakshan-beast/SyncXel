// export default function BentoFeatureCard() {
//   return (
//     <div className="w-72 p-4 bg-slate-900 border border-slate-800 rounded-2xl font-baloo space-y-2">
//       <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
//         ⚡
//       </div>
//       <h4 className="text-xs font-bold text-white">Instant Deployment</h4>
//       <p className="text-[11px] text-slate-400">
//         Push changes instantly to edge servers worldwide.
//       </p>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

export default function BentoFeatureCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="w-80 p-5 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl shadow-xl font-baloo space-y-3 select-none cursor-pointer group">
      {/* Icon Header */}
      <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
        <FiZap className="w-4 h-4" />
      </div>

      {/* Title & Description */}
      <div className="space-y-1">
        <h4 className="text-xs font-bold text-white tracking-wide">
          Instant Global Deployment
        </h4>
        <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
          Push code changes instantly to multi-region edge servers worldwide
          with zero downtime pipelines.
        </p>
      </div>

      {/* Interactive Footer Link */}
      <div className="pt-1 flex items-center text-[10px] text-emerald-400 font-semibold gap-1 group-hover:translate-x-1 transition-transform">
        <span>Explore pipeline specs &rarr;</span>
      </div>
    </motion.div>
  );
}
