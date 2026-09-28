// export default function TokenizingLoader() {
//   return (
//     <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800 shadow-md">
//       <span>TOKENIZING</span>
//       <span className="flex gap-1">
//         <span className="w-1.5 h-3 bg-cyan-400 animate-pulse"></span>
//         <span className="w-1.5 h-3 bg-indigo-500 animate-pulse [animation-delay:0.2s]"></span>
//         <span className="w-1.5 h-3 bg-cyan-400 animate-pulse [animation-delay:0.4s]"></span>
//       </span>
//     </div>
//   );
// }

// import { motion } from "framer-motion";

// export default function TokenizingLoader() {
//   return (
//     <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800 shadow-md">
//       <span>TOKENIZING</span>
//       <span className="flex gap-1">
//         {[0, 0.2, 0.4].map((delay, i) => (
//           <motion.span
//             key={i}
//             animate={{ opacity: [1, 0.2, 1] }}
//             transition={{ repeat: Infinity, duration: 0.8, delay }}
//             className={`w-1.5 h-3 ${i === 1 ? "bg-indigo-500" : "bg-cyan-400"}`}
//           />
//         ))}
//       </span>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function TokenizingLoader() {
  return (
    <div className="w-full max-w-sm mx-auto p-4 bg-white border border-slate-200/80 rounded-3xl shadow-xs flex items-center justify-between font-baloo select-none">
      {/* Left Icon & Text Stack */}
      <div className="flex items-center gap-3">
        {/* Subtle Minimalist Status Indicator */}
        <div className="relative w-8 h-8 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0">
          <motion.div
            animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 rounded-2xl bg-cyan-400/20"
          />
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-800 tracking-wide">
            Tokenizing API Stream
          </span>
          <span className="text-[11px] text-slate-400 font-medium">
            Encrypting payload data...
          </span>
        </div>
      </div>

      {/* Right Minimalist Pulsing Blocks */}
      <div className="flex items-center gap-1 bg-slate-50 border border-slate-100 px-3 py-2 rounded-2xl">
        {[0, 0.2, 0.4].map((delay, i) => (
          <motion.span
            key={i}
            animate={{ opacity: [1, 0.2, 1], scaleY: [1, 0.6, 1] }}
            transition={{ repeat: Infinity, duration: 0.8, delay }}
            className={`w-1 h-3 rounded-full ${
              i === 1 ? "bg-indigo-500" : "bg-cyan-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}