// import { motion } from "framer-motion";

// // 6. Radar Scanner Button
// export default function RadarScannerButton() {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.03 }}
//       whileTap={{ scale: 0.95 }}
//       className="relative overflow-hidden px-5 py-2.5 bg-slate-950 border border-cyan-500/40 text-cyan-300 font-baloo text-xs rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.15)] cursor-pointer group"
//     >
//       <span className="relative z-10 flex items-center gap-2">
//         <motion.span
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
//           className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
//         />
//         SCAN_TARGET
//       </span>
//       <motion.div
//         animate={{ x: ["-100%", "100%"] }}
//         transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
//         className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none"
//       />
//     </motion.button>
//   );
// }

import { motion } from "framer-motion";

export default function RadarScannerButton({
  text = "Analyze Network Threats",
  onClick,
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(6, 182, 212, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-950 via-cyan-950 to-slate-900 border-2 border-cyan-400/50 text-cyan-200 font-baloo text-xs font-bold rounded-2xl shadow-[0_10px_25px_rgba(6,182,212,0.2)] cursor-pointer group select-none">
      {/* Radar Sweep Effect */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none"
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-3 tracking-wider">
        {/* Pulsing Radar Pulse Dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
        </span>

        {text}
      </span>
    </motion.button>
  );
}
