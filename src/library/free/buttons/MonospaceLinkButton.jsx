// export default function MonospaceLinkButton() {
//   return (
//     <button className="px-4 py-2 bg-transparent text-slate-400 hover:text-cyan-400 font-baloo text-xs tracking-wider uppercase transition-all">
//       [ View Logs ]
//     </button>
//   );
// }


import { motion } from "framer-motion";
import { FiTerminal } from "react-icons/fi";

export default function MonospaceLinkButton({ 
  text = "view_system_logs.sh", 
  onClick 
}) {
  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative px-5 py-2.5 bg-transparent text-zinc-400 font-mono text-xs tracking-widest uppercase cursor-pointer transition-colors group inline-flex items-center gap-2 select-none"
    >
      <FiTerminal className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
      
      <span className="group-hover:text-emerald-300 transition-colors">
        [ {text} ]
      </span>
      
      {/* Subtle Bottom Neon Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-400/0 group-hover:bg-emerald-400/80 transition-all rounded-full shadow-[0_0_8px_#34d399]" />
    </motion.button>
  );
}