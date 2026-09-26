// export default function ClayCardPrimary() {
//   return (
//     <div className="w-72 p-4 bg-slate-900 rounded-3xl shadow-[8px_8px_16px_#020617,-8px_-8px_16px_#1e293b] font-baloo space-y-2 border border-slate-800">
//       <div className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xs shadow-inner">
//         CL
//       </div>
//       <h4 className="text-xs font-bold text-white">Soft Volumetric Card</h4>
//       <p className="text-[11px] text-slate-400">
//         Matte textured surface with smooth rounded depth lighting.
//       </p>
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { FiLayers, FiArrowRight } from "react-icons/fi";

export default function ClayCardPrimary() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="w-80 p-5 bg-slate-900 rounded-3xl shadow-[8px_8px_20px_#020617,-8px_-8px_20px_#1e293b] font-baloo space-y-4 border border-slate-800/80 select-none cursor-pointer group"
    >
      {/* Header with Icon and Badge */}
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shadow-inner">
          <FiLayers className="w-5 h-5" />
        </div>
        <div className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-300">
          WebGL 3D
        </div>
      </div>

      {/* Title & Description */}
      <div className="space-y-1.5">
        <h4 className="text-xs font-bold text-white tracking-wide">Spatial Asset Pipeline</h4>
        <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
          Matte textured volumetric surface optimized for high-end 3D rendering and creative design layers.
        </p>
      </div>

      {/* Action Link */}
      <div className="pt-1 flex items-center justify-between text-[11px] text-indigo-400 font-bold">
        <span className="group-hover:translate-x-1 transition-transform">Configure shaders</span>
        <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}