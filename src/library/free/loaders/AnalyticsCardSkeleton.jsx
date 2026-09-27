// import { motion } from "framer-motion";

// export default function AnalyticsCardSkeleton() {
//   return (
//     <div className="w-full max-w-sm mx-auto p-4 rounded-2xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-xl space-y-4 overflow-hidden relative shadow-lg select-none">
//       {/* Sweeping Shimmer Light Effect */}
//       <motion.div
//         animate={{ x: ["-100%", "100%"] }}
//         transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
//         className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none"
//       />

//       {/* Header Row Placeholder */}
//       <div className="flex items-center justify-between">
//         <div className="h-3 bg-slate-800 rounded-md w-1/3" />
//         <div className="h-5 bg-slate-800/60 rounded-md w-12" />
//       </div>

//       {/* Metric Value Placeholder */}
//       <div className="space-y-2">
//         <div className="h-7 bg-slate-800 rounded-md w-1/2" />
//         <div className="h-2 bg-slate-800/60 rounded-md w-2/3" />
//       </div>

//       {/* Mini Chart Bars Placeholder */}
//       <div className="flex items-end gap-2 pt-2 h-12">
//         <div className="w-1/4 h-full bg-slate-800/50 rounded-t-lg" />
//         <div className="w-1/4 h-3/4 bg-slate-800/50 rounded-t-lg" />
//         <div className="w-1/4 h-5/6 bg-slate-800/50 rounded-t-lg" />
//         <div className="w-1/4 h-full bg-slate-800/50 rounded-t-lg" />
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function AnalyticsCardSkeleton() {
  return (
    <div className="w-full max-w-sm mx-auto p-4 rounded-2xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-xl space-y-4 overflow-hidden relative shadow-lg select-none">
      {/* Sweeping Shimmer Light Effect */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent pointer-events-none z-10"
      />

      {/* Header Row Placeholder */}
      <div className="flex items-center justify-between">
        <div className="h-3 bg-slate-600 rounded-md w-1/3" />
        <div className="h-5 bg-slate-600/60 rounded-md w-12 border border-slate-700/30" />
      </div>

      {/* Metric Value Placeholder */}
      <div className="space-y-2">
        <div className="h-7 bg-slate-600/50 rounded-md w-1/2" />
        <div className="h-2 bg-slate-600/60 rounded-md w-2/3" />
      </div>

      {/* Sleek Outline Chart Area (No Heavy Dark Blocks) */}
      <div className="pt-1">
        <div className="h-14 w-full rounded-xl border border-dashed border-slate-800 bg-slate-600/40 flex items-center justify-center">
          <span className="text-[10px] font-mono text-slate-600 tracking-wider">
            Loading Metrics...
          </span>
        </div>
      </div>
    </div>
  );
}
