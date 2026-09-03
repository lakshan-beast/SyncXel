import { motion } from "framer-motion";

export default function ClayTagInput() {
  return (
    <div className="w-72 p-2 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] border border-slate-800 flex flex-wrap gap-1.5 items-center">
      <span className="px-2.5 py-1 bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-[11px] font-bold rounded-xl flex items-center gap-1">
        React <span className="cursor-pointer text-[9px]">×</span>
      </span>
      <span className="px-2.5 py-1 bg-cyan-600/30 border border-cyan-500/40 text-cyan-300 text-[11px] font-bold rounded-xl flex items-center gap-1">
        Tailwind <span className="cursor-pointer text-[9px]">×</span>
      </span>
      <input
        type="text"
        placeholder="Add tag..."
        className="bg-transparent text-xs text-slate-300 focus:outline-none px-2 py-1 flex-1 min-w-[80px]"
      />
    </div>
  );
}
