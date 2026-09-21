import { motion } from "framer-motion";

export default function MatrixStatusFooter() {
  return (
    <div className="w-72 p-3 bg-slate-950 border border-indigo-500/40 rounded-xl font-baloo shadow-[0_0_15px_rgba(99,102,241,0.15)] space-y-2 text-xs">
      <div className="flex justify-between items-center text-indigo-300 font-bold">
        <span>GRID_TELEMETRY</span>
        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
      </div>
      <div className="text-[10px] text-slate-400">NODES: 1,024 ONLINE</div>
      <div className="pt-2 border-t border-slate-900 flex justify-between text-[10px] text-slate-500">
        <span>SECURE_ENCLAVE</span>
        <span className="text-indigo-400 cursor-pointer">/LOGS</span>
      </div>
    </div>
  );
}
