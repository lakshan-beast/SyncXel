// export default function CyberGradientSpinner() {
//   return (
//     <div className="relative w-12 h-12">
//       <div className="absolute inset-0 rounded-full border-2 border-slate-800"></div>
//       <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-indigo-500 animate-spin shadow-[0_0_12px_rgba(34,211,238,0.3)]"></div>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function CyberGradientSpinner() {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border-2 border-slate-800" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-indigo-500 shadow-[0_0_12px_rgba(34,211,238,0.3)]"
      />
    </div>
  );
}