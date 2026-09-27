// import { motion } from "framer-motion";

// export default function BouncingDotsLoader() {
//   const colors = [
//     "bg-amber-400 shadow-[0_0_12px_#fbbf24]",
//     "bg-orange-500 shadow-[0_0_12px_#f97316]",
//     "bg-rose-500 shadow-[0_0_12px_#f43f5e]"
//   ];

//   return (
//     <div className="flex space-x-3 items-center justify-center p-4 bg-gradient-to-r from-stone-950 via-neutral-950 to-stone-950 rounded-2xl border border-orange-500/30 shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
//       {[0, 0.2, 0.4].map((delay, i) => (
//         <motion.div
//           key={i}
//           animate={{ y: [0, -10, 0], scale: [1, 1.15, 1] }}
//           transition={{
//             repeat: Infinity,
//             duration: 0.6,
//             delay,
//             ease: "easeInOut",
//           }}
//           className={`w-3.5 h-3.5 rounded-full ${colors[i]}`}
//         />
//       ))}
//     </div>
//   );
// }
// import { motion } from "framer-motion";
// import { FiActivity } from "react-icons/fi";

// export default function BouncingDotsLoader() {
//   const colors = [
//     "bg-amber-400 shadow-[0_0_12px_#fbbf24]",
//     "bg-orange-500 shadow-[0_0_12px_#f97316]",
//     "bg-rose-500 shadow-[0_0_12px_#f43f5e]",
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ scale: 1.02 }}
//       transition={{ type: "spring", stiffness: 400, damping: 25 }}
//       className="w-100 p-4 bg-white backdrop-blur-xl border-2 border-orange-300/40 rounded-2xl shadow-[0_2px_3px_rgba(0,0,0,0.1)] font-baloo flex items-center justify-between select-none cursor-pointer group">
//       {/* Left Icon and Status Info */}
//       <div className="flex items-center gap-3">
//         <div className="w-9 h-9 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shadow-inner group-hover:scale-105 transition-transform">
//           <FiActivity
//             className="w-4 h-4 animate-spin"
//             style={{ animationDuration: "6s" }}
//           />
//         </div>
//         <div className="space-y-0.5">
//           <h4 className="text-xs font-bold text-orange-300 tracking-wide">
//             Neural Data Synthesis
//           </h4>
//           <p className="text-[10px] text-slate-400 font-medium">
//             Processing multi-region nodes...
//           </p>
//         </div>
//       </div>

//       {/* Solar Flare Bouncing Dots Loader */}
//       <div className="flex space-x-2 items-center px-2">
//         {[0, 0.2, 0.4].map((delay, i) => (
//           <motion.div
//             key={i}
//             animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }}
//             transition={{
//               repeat: Infinity,
//               duration: 0.6,
//               delay,
//               ease: "easeInOut",
//             }}
//             className={`w-2.5 h-2.5 rounded-full ${colors[i]}`}
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// }


import { motion } from "framer-motion";

export default function BouncingDotsLoader() {
  const colors = [
    "bg-amber-400 shadow-[0_0_10px_#fbbf24]",
    "bg-orange-500 shadow-[0_0_10px_#f97316]",
    "bg-rose-500 shadow-[0_0_10px_#f43f5e]"
  ];

  return (
    <div className="w-full max-w-sm mx-auto py-5 px-5 rounded-2xl bg-transparent flex items-center justify-between font-baloo select-none shadow-md border border-slate-200">
      {/* Status Label */}
      <div className="flex items-center gap-2.5">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
        <span className="text-base font-semibold text-slate-400 tracking-wide capitalize">
          Synthesizing AI Response...
        </span>
      </div>

      {/* Clean Transparent Bouncing Dots */}
      <div className="flex space-x-2.5 items-center">
        {[0, 0.2, 0.4].map((delay, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -6, 0], scale: [1, 1.15, 1] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              delay,
              ease: "easeInOut",
            }}
            className={`w-3 h-3 rounded-full ${colors[i]}`}
          />
        ))}
      </div>
    </div>
  );
}