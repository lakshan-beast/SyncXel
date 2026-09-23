// import { motion } from "framer-motion";

// export default function LaserBeamButton() {
//   return (
//     <div className="relative p-[3px] rounded-2xl overflow-hidden inline-block group cursor-pointer">
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
//         className="absolute inset-[-50%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_180deg,#ff0000_360deg)]"
//       />
//       <button className="relative px-8 py-5 bg-slate-950 text-red-400 hover:text-red-300 text-xs font-baloo rounded-[11px] transition-colors cursor-pointer w-full h-full">
//         Laser Beam Button
//       </button>
//     </div>
//   );
// }



import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

export default function LaserBeamButton({ 
  text = "Override System Security", 
  onClick 
}) {
  return (
    <div 
      onClick={onClick}
      className="relative p-[2px] rounded-2xl overflow-hidden inline-block group cursor-pointer select-none"
    >
      {/* Spinning Laser Conic Gradient Border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
        className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_200deg,#ef4444_360deg)]"
      />
      
      {/* Inner Button Core */}
      <button className="relative px-8 py-3.5 bg-[#0a0203] text-red-400 group-hover:text-red-300 font-baloo text-xs font-bold rounded-[14px] transition-colors cursor-pointer flex items-center gap-2.5 shadow-[inset_0_0_15px_rgba(239,68,68,0.15)] w-full h-full">
        <FiZap className="w-4 h-4 text-red-500 group-hover:scale-125 transition-transform" />
        <span className="tracking-widest">{text}</span>
      </button>
    </div>
  );
}