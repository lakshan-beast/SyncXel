// import { motion } from "framer-motion";
// import { HiSearch } from "react-icons/hi";

// export default function BentoSearchShortcut() {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="relative w-72 bg-slate-900 border border-slate-800 rounded-2xl px-4 py-2.5 flex items-center justify-between text-xs font-baloo shadow-lg">
//       <div className="flex items-center gap-2.5 w-full">
//         <HiSearch className="w-4 h-4 text-slate-400" />
//         <input
//           type="text"
//           placeholder="Quick search components..."
//           className="bg-transparent text-slate-200 focus:outline-none w-full placeholder:text-slate-500"
//         />
//       </div>
//       <span className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded-lg text-[10px] font-mono border border-slate-700">
//         ⌘K
//       </span>
//     </motion.div>
//   );
// }


import { motion } from "framer-motion";
import { FiLink, FiCheck } from "react-icons/fi";

export default function BentoURLInput() {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="w-80 p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2"
    >
      <label htmlFor="bento-url" className="text-xs font-semibold text-slate-400">
        Website URL
      </label>

      <div className="flex items-center gap-2 px-3 py-2.5 bg-slate-800/70 rounded-xl focus-within:ring-2 focus-within:ring-indigo-500/60 transition">
        <FiLink className="w-4 h-4 text-indigo-400" />
        <input
          id="bento-url"
          type="url"
          defaultValue="https://"
          className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          placeholder="yourdomain.com"
        />
        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400">
          <FiCheck className="w-3 h-3" /> Valid
        </span>
      </div>

      <p className="text-[11px] text-slate-500">
        Used for link previews and SEO metadata.
      </p>
    </motion.div>
  );
}