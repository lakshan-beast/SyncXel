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

import { motion } from "framer-motion";

export default function TokenizingLoader() {
  return (
    <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800 shadow-md">
      <span>TOKENIZING</span>
      <span className="flex gap-1">
        {[0, 0.2, 0.4].map((delay, i) => (
          <motion.span
            key={i}
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 0.8, delay }}
            className={`w-1.5 h-3 ${i === 1 ? "bg-indigo-500" : "bg-cyan-400"}`}
          />
        ))}
      </span>
    </div>
  );
}