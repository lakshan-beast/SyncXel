// export default function EmeraldTextLoader() {
//   return (
//     <div className="flex flex-col gap-4 items-center justify-center text-slate-300 font-mono text-xs">
//       <div className="w-8 h-8 border-3 border-t-emerald-400 border-slate-800 rounded-full animate-spin"></div>
//       <span>Coming Soon...</span>
//     </div>
//   );
// }

// import { motion } from "framer-motion";

// export default function EmeraldTextLoader() {
//   return (
//     <div className="flex flex-col gap-3 items-center justify-center text-slate-300 font-mono text-xs">
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
//         className="w-8 h-8 border-3 border-t-emerald-400 border-slate-800 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.3)]"
//       />
//       <span className="tracking-wider text-emerald-400">LOADING...</span>
//     </div>
//   );
// }

// import { motion } from "framer-motion";

// export default function EmeraldTextLoader() {
//   return (
//     <div className="w-full max-w-xs mx-auto py-6 px-3 rounded-3xl bg-slate-100 backdrop-blur-md flex flex-col gap-5.5 items-center justify-center font-baloo border border-slate-200/50 shadow-xl select-none">
//       {/* Rotating Emerald Spinner */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
//         className="w-10 h-10 border-2 border-t-emerald-300 border-t-6 border-b-0 border-transparent rounded-full shadow-[0_0_15px_rgba(52,211,153,0.9)]"
//       />

//       {/* Professional Title Case Status & Subtext */}
//       <div className="flex flex-col items-center text-center gap-0 mt-2">
//         <span className="text-lg font-bold text-slate-400 tracking-wide">
//           Synchronizing Database
//         </span>
//         <span className="text-[10px] text-emerald-400">
//           Secure SSL tunnel established...
//         </span>
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function EmeraldTextLoader() {
  return (
    <div className="w-full max-w-sm mx-auto py-3.5 px-5 rounded-2xl bg-slate-100 border border-slate-200 shadow-md flex items-center gap-4 font-baloo select-none">
      {/* Rotating Emerald Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-7 h-7 border-2 border-transparent border-t-[4px] border-t-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)] shrink-0"
      />

      {/* Clean Horizontal Text Layout */}
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-800 tracking-wide">
            Synchronizing Database
          </span>
          <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
            Live
          </span>
        </div>
        <p className="text-[11px] text-slate-500 font-medium mt-0.5">
          Secure SSL tunnel established...
        </p>
      </div>
    </div>
  );
}
