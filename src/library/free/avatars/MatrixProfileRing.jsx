import { motion } from "framer-motion";

export default function MatrixProfileRing() {
  return (
    <div className="w-72 p-4 bg-slate-950 border border-indigo-500/40 rounded-xl font-baloo flex items-center gap-4 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
      <div className="relative">
        <div className="absolute -inset-1 bg-indigo-500/20 rounded-full blur-sm" />
        <div className="relative w-12 h-12 rounded-full bg-slate-900 border border-indigo-500 flex items-center justify-center text-indigo-300 font-bold text-sm shadow-[0_0_10px_#6366f1]">
          QT
        </div>
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-950 rounded-full animate-pulse" />
      </div>
      <div>
        <div className="text-xs text-white font-bold">QUANTUM_NODE</div>
        <div className="text-[10px] text-indigo-400/80">SYNC: 100%</div>
      </div>
    </div>
  );
}

// import { motion } from "framer-motion";

// export default function MatrixProfileRing() {
//   return (
//     <div className="w-72 p-4 bg-slate-950 border border-indigo-500/40 rounded-xl font-baloo flex items-center gap-4 text-white shadow-[0_0_15px_rgba(99,102,241,0.15)]">
//       <div className="relative">
//         <motion.div animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute -inset-1 rounded-full border border-dashed border-indigo-400" />
//         <div className="w-12 h-12 rounded-full bg-indigo-950 border border-indigo-500 flex items-center justify-center font-bold text-indigo-300 text-xs">MQ</div>
//         <span className="absolute bottom-0 right-0 w-3 h-3 bg-indigo-400 border-2 border-slate-950 rounded-full animate-pulse" />
//       </div>
//       <div>
//         <h4 className="text-xs font-bold text-indigo-300">Quantum_Agent</h4>
//         <p className="text-[10px] text-slate-400 font-mono">MATRIX_SYNC_100%</p>
//       </div>
//     </div>
//   );
// }
