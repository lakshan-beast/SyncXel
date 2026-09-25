// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function GlassGlowToggle() {
//   const [isOn, setIsOn] = useState(false);
//   return (
//     <div
//       onClick={() => setIsOn(!isOn)}
//       className="flex items-center justify-between w-64 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo cursor-pointer shadow-xl">
//       <span className="text-xs text-indigo-200 font-bold">GLOW_MODE</span>
//       <div
//         className={`w-12 h-6 flex items-center rounded-full p-1 border border-white/25 ${isOn ? "bg-indigo-500/30 justify-end" : "bg-white/5 justify-start"}`}>
//         <motion.div
//           layout
//           transition={{ type: "spring", stiffness: 700, damping: 30 }}
//           className="w-4 h-4 rounded-full bg-indigo-300 shadow-md"
//         />
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi";

export default function GlassGlowToggle() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className="flex items-center justify-between w-80 p-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl font-baloo cursor-pointer shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:border-white/40 transition-all select-none group"
    >
      {/* Icon and Standard Label */}
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
          isOn ? "bg-indigo-500/20 text-indigo-300 shadow-[0_0_12px_rgba(99,102,241,0.4)]" : "bg-white/5 text-white/50"
        }`}>
          <HiSparkles className="w-4 h-4" />
        </div>
        <div>
          <span className="text-xs text-indigo-600 font-bold tracking-wide block">Ambient Glow Mode</span>
          <span className="text-[10px] text-indigo-200/70 font-medium">
            {isOn ? "Active & Enhanced" : "Standard UI"}
          </span>
        </div>
      </div>

      {/* Glass Switch Track */}
      <div
        className={`w-12 h-6 flex items-center rounded-full p-1 border border-white/25 ${
          isOn ? "bg-indigo-600/40 justify-end shadow-[inset_0_0_10px_rgba(99,102,241,0.5)]" : "bg-white/5 justify-start"
        }`}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="w-4 h-4 rounded-full bg-indigo-200 shadow-[0_0_10px_#818cf8]"
        />
      </div>
    </div>
  );
}