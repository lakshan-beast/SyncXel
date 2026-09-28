// export default function CyberGradientSpinner() {
//   return (
//     <div className="relative w-12 h-12">
//       <div className="absolute inset-0 rounded-full border-2 border-slate-800"></div>
//       <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-indigo-500 animate-spin shadow-[0_0_12px_rgba(34,211,238,0.3)]"></div>
//     </div>
//   );
// }

// import { motion } from "framer-motion";

// export default function CyberGradientSpinner() {
//   return (
//     <div className="relative w-12 h-12 flex items-center justify-center">
//       <div className="absolute inset-0 rounded-full border-2 border-slate-800" />
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
//         className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-indigo-500 shadow-[0_0_12px_rgba(34,211,238,0.3)]"
//       />
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function CyberGradientSpinner() {
  return (
    <div className="w-28 h-28 mx-auto bg-white border border-slate-200 rounded-3xl shadow-sm flex items-center justify-center relative select-none">
      {/* Sleek Rotating Gradient Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-10 h-10 rounded-full border-3 border-transparent border-t-cyan-500 border-r-indigo-500 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
      />
    </div>
  );
}