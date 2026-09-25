// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function BrutalPopToggle() {
//   const [isOn, setIsOn] = useState(false);
//   return (
//     <div
//       onClick={() => setIsOn(!isOn)}
//       className="flex items-center justify-between w-64 p-3 bg-yellow-300 border-2 border-slate-950 rounded-xl font-baloo cursor-pointer shadow-[3px_3px_0px_0px_#020617]">
//       <span className="text-xs text-slate-950 font-black">BRUTAL_SWITCH</span>
//       <div
//         className={`w-12 h-6 flex items-center rounded-lg p-0.5 border-2 border-slate-950 ${isOn ? "bg-pink-500 justify-end" : "bg-white justify-start"}`}>
//         <motion.div
//           layout
//           transition={{ type: "spring", stiffness: 700, damping: 30 }}
//           className="w-4 h-4 rounded bg-slate-950"
//         />
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

export default function BrutalPopToggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className="flex items-center justify-between w-72 p-3.5 bg-yellow-300 border-2 border-slate-950 rounded-2xl font-baloo cursor-pointer shadow-[4px_4px_0px_0px_#020617] hover:shadow-[6px_6px_0px_0px_#020617] transition-all select-none group">
      {/* Icon and Standard Label */}
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 bg-slate-950 rounded-lg flex items-center justify-center text-yellow-300">
          <FiZap className="w-3.5 h-3.5" />
        </div>
        <div>
          <span className="text-xs text-slate-950 font-black block">
            Beta Features
          </span>
          <span className="text-[10px] text-slate-800 font-bold">
            {isOn ? "Active & Opted-In" : "Disabled"}
          </span>
        </div>
      </div>

      {/* Brutalist Switch Track */}
      <div
        className={`w-12 h-6 flex items-center rounded-lg p-0.5 border-2 border-slate-950 ${
          isOn ? "bg-pink-500 justify-end" : "bg-white justify-start"
        }`}>
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="w-4 h-4 rounded bg-slate-950 shadow-sm"
        />
      </div>
    </div>
  );
}
