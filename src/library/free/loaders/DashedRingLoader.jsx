// export default function DashedRingLoader() {
//   return (
//     <div className="relative flex items-center justify-center w-12 h-12">
//       <div className="absolute inset-0 border-2 border-dashed border-cyan-500/40 rounded-full animate-spin"></div>
//       <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
//     </div>
//   );
// }


// import { motion } from "framer-motion";

// export default function DashedRingLoader() {
//   return (
//     <div className="w-28 h-28 mx-auto bg-white border border-slate-200 rounded-3xl shadow-sm flex items-center justify-center relative select-none">
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 2, ease: "easeIn" }}
//         className="absolute inset-0 border-2 border-dashed border-cyan-500/90 rounded-full w-8 h-8"
//       />
//       <div className="absolute flex justify-center w-5 h-5 animate-ping bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function DashedRingLoader() {
  return (
    <div className="w-28 h-28 mx-auto bg-white border border-slate-200 rounded-3xl shadow-sm flex items-center justify-center relative select-none">
      {/* Centered Rotating Dashed Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="absolute w-12 h-12 border-2 border-dashed border-cyan-500/80 rounded-full"
      />
      
      {/* Centered Glowing Core with Ping Effect */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-5 h-5 animate-ping bg-cyan-400/35 rounded-full" />
        <div className="w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_#22d3ee]" />
      </div>
    </div>
  );
}