import { motion } from "framer-motion";
import { HiSearch } from "react-icons/hi";

export default function BentoSearchShortcut() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative w-72 bg-slate-900 border border-slate-800 rounded-2xl px-4 py-2.5 flex items-center justify-between text-xs font-baloo shadow-lg">
      <div className="flex items-center gap-2.5 w-full">
        <HiSearch className="w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Quick search components..."
          className="bg-transparent text-slate-200 focus:outline-none w-full placeholder:text-slate-500"
        />
      </div>
      <span className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded-lg text-[10px] font-mono border border-slate-700">
        ⌘K
      </span>
    </motion.div>
  );
}
