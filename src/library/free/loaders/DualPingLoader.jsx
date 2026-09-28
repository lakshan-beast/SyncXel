// export default function DualPingLoader() {
//   return (
//     <div className="relative flex items-center justify-center w-14 h-14">
//       <div className="absolute w-full h-full rounded-full bg-cyan-500/20 animate-ping"></div>
//       <div className="absolute w-3/4 h-3/4 rounded-full bg-indigo-500/30 animate-pulse"></div>
//       <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"></div>
//     </div>
//   );
// }

// import { motion } from "framer-motion";

// export default function DualPingLoader() {
//   return (
//     <div className="relative flex items-center justify-center w-14 h-14">
//       <motion.div
//         animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
//         transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
//         className="absolute w-full h-full rounded-full bg-cyan-500/20"
//       />
//       <motion.div
//         animate={{ scale: [1, 1.3], opacity: [0.8, 0] }}
//         transition={{ repeat: Infinity, duration: 1.2, delay: 0.3, ease: "easeOut" }}
//         className="absolute w-3/4 h-3/4 rounded-full bg-indigo-500/30"
//       />
//       <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
//     </div>
//   );
// }

// import { motion } from "framer-motion";

// export default function DualPingLoader() {
//   return (
//     <div className="w-50 h-50 mx-auto p-5  rounded-3xl bg-slate-300 border border-slate-200 flex flex-col justify-between items-center text-center font-baloo select-none shadow-xl">
//       {/* Top Status Info */}
//       <div className="space-y-1">
//         <h4 className="text-lg font-bold text-white text-shadow- tracking-wide">
//           Live Radar Telemetry
//         </h4>
//       </div>

//       {/* Central Dual Ping Radar Animation */}
//       <div className="relative flex items-center justify-center my-auto mt-5 w-14 h-14">
//         <motion.div
//           animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
//           transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
//           className="absolute w-full h-full rounded-full bg-cyan-500/20"
//         />
//         <motion.div
//           animate={{ scale: [1, 1.3], opacity: [0.8, 0] }}
//           transition={{
//             repeat: Infinity,
//             duration: 1.2,
//             delay: 0.3,
//             ease: "easeOut",
//           }}
//           className="absolute w-3/4 h-3/4 rounded-full bg-indigo-500/30"
//         />
//         <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function DualPingLoader() {
  return (
    <div className="w-28 h-28 mx-auto bg-white border border-slate-200/20 rounded-3xl shadow-sm flex items-center justify-center relative select-none">
      {/* Outer Pulse Ring */}
      <motion.div
        animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
        className="absolute w-12 h-12 rounded-full bg-cyan-500/20"
      />
      {/* Inner Pulse Ring */}
      <motion.div
        animate={{ scale: [1, 1.3], opacity: [0.8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          delay: 0.3,
          ease: "easeOut",
        }}
        className="absolute w-9 h-9 rounded-full bg-indigo-500/25"
      />
      {/* Core Dot */}
      <div className="w-3.5 h-3.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]" />
    </div>
  );
}
