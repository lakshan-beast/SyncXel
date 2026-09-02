// export default function EmeraldTextLoader() {
//   return (
//     <div className="flex flex-col gap-4 items-center justify-center text-slate-300 font-mono text-xs">
//       <div className="w-8 h-8 border-3 border-t-emerald-400 border-slate-800 rounded-full animate-spin"></div>
//       <span>Coming Soon...</span>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function EmeraldTextLoader() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center text-slate-300 font-mono text-xs">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-8 h-8 border-3 border-t-emerald-400 border-slate-800 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.3)]"
      />
      <span className="tracking-wider text-emerald-400">LOADING...</span>
    </div>
  );
}