// import { motion } from "framer-motion";

// export default function GlassProfileCard() {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="w-72 p-4 bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl shadow-xl font-baloo space-y-3">
//       <div className="flex items-center gap-3">
//         <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 font-bold text-xs">
//           GF
//         </div>
//         <div>
//           <h4 className="text-xs font-bold text-white">GLASS_NODE</h4>
//           <p className="text-[10px] text-slate-400">Frosted Enclave</p>
//         </div>
//       </div>
//       <div className="text-[11px] text-slate-300">
//         Ultra-clean frosted glass card layout with soft blur aesthetics.
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { FiMail, FiCheckCircle } from "react-icons/fi";

export default function GlassProfileCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="w-80 p-5 bg-slate-900/90 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] font-baloo space-y-4 select-none cursor-pointer group">
      {/* Header with Avatar and Badge */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="relative">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 font-bold text-sm shadow-[0_0_15px_rgba(34,211,238,0.25)]">
              ER
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-950 rounded-full shadow-[0_0_8px_#10b981]" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white tracking-wide">
              Elena Rostova
            </h4>
            <p className="text-[11px] text-cyan-300 font-medium">
              Senior Cloud Architect
            </p>
          </div>
        </div>
        <div className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-[10px] text-cyan-200 font-semibold flex items-center gap-1 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
          <FiCheckCircle className="w-3 h-3 text-cyan-400" />
          <span>Verified</span>
        </div>
      </div>

      {/* Description / Bio */}
      <p className="text-[11px] text-slate-200 font-normal leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800">
        Specializing in multi-region Kubernetes deployments, serverless
        microservices, and enterprise zero-trust security.
      </p>

      {/* Action Button */}
      <button className="w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)] cursor-pointer">
        <FiMail className="w-3.5 h-3.5" />
        <span>Send Direct Message</span>
      </button>
    </motion.div>
  );
}
