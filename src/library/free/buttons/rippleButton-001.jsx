// export default function RippleButton() {
//   return (
//     <button className="relative overflow-hidden bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-300 group shadow-lg shadow-emerald-900/20 active:scale-95">
//       <span className="relative z-10">Click me</span>

//       {/* Ripple Animation Overlay */}
//       <span className="absolute inset-0 bg-white/20 scale-0 rounded-full transition-transform duration-700 ease-out group-hover:scale-150 origin-center opacity-0 group-hover:opacity-100 pointer-events-none" />
//     </button>
//   );
// }


import { motion } from "framer-motion";

// 1. Ripple Button (Cyberpunk Cyan Theme)
export default function RippleButton() {
  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-2 px-5 rounded-xl transition-colors duration-300 group shadow-lg shadow-cyan-500/20 cursor-pointer text-xs"
    >
      <span className="relative z-10">Click me</span>

      {/* Ripple Animation Overlay */}
      <span className="absolute inset-0 bg-white/30 scale-0 rounded-full transition-transform duration-700 ease-out group-hover:scale-150 origin-center opacity-0 group-hover:opacity-100 pointer-events-none" />
    </motion.button>
  );
}