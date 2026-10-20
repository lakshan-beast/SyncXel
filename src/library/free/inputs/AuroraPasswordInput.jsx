// import { useState } from "react";

// export default function DualThumbSlider() {
//   const [minVal, setMinVal] = useState(25);
//   const [maxVal, setMaxVal] = useState(75);

//   return (
//     <div className="w-72 p-3 bg-slate-900 border border-slate-800 rounded-2xl font-baloo space-y-3">
//       <div className="flex justify-between text-xs font-bold text-slate-300">
//         <span>
//           Range: ${minVal} - ${maxVal}
//         </span>
//         <span className="text-cyan-400">Filter</span>
//       </div>
//       <div className="relative flex items-center h-4">
//         <div className="absolute w-full h-1.5 bg-slate-800 rounded-full" />
//         <div
//           className="absolute h-1.5 bg-cyan-500 rounded-full"
//           style={{ left: `${minVal}%`, right: `${100 - maxVal}%` }}
//         />
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={minVal}
//           onChange={(e) =>
//             setMinVal(Math.min(Number(e.target.value), maxVal - 5))
//           }
//           className="absolute w-full appearance-none bg-transparent pointer-events-none accent-cyan-400 z-10 cursor-pointer"
//         />
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={maxVal}
//           onChange={(e) =>
//             setMaxVal(Math.max(Number(e.target.value), minVal + 5))
//           }
//           className="absolute w-full appearance-none bg-transparent pointer-events-none accent-cyan-400 z-20 cursor-pointer"
//         />
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { motion } from "framer-motion";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";

export default function AuroraPasswordInput() {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="relative w-80"
    >
      <div className="absolute -top-8 -right-6 w-28 h-28 rounded-full bg-fuchsia-500/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-6 w-28 h-28 rounded-full bg-cyan-400/30 blur-3xl pointer-events-none" />

      <div className="relative flex items-center gap-3 px-4 py-3.5 bg-slate-950 border border-white/10 rounded-2xl focus-within:border-cyan-400/50 transition">
        <FiLock className="w-4 h-4 text-cyan-300" />
        <input
          id="aurora-password"
          type={show ? "text" : "password"}
          placeholder="Create a strong password"
          className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          aria-label={show ? "Hide password" : "Show password"}
          className="text-white/50 hover:text-white transition"
        >
          {show ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
        </button>
      </div>

      <div className="flex gap-1.5 mt-2">
        {[1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`h-1 flex-1 rounded-full ${i <= 2 ? "bg-gradient-to-r from-fuchsia-400 to-cyan-400" : "bg-white/10"}`}
          />
        ))}
      </div>
    </motion.div>
  );
}