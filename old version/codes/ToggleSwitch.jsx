// export default function ToggleSwitch() {
//   return (
//     <label className="relative inline-flex items-center cursor-pointer">
//       <input type="checkbox" defaultChecked className="sr-only peer" />
//       <div className="w-11 h-6 bg-slate-900 border border-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500/20 peer-checked:border-cyan-500 peer-checked:after:bg-cyan-400 peer-checked:after:shadow-[0_0_10px_#22d3ee]"></div>
//     </label>
//   );
// }

import { motion } from "framer-motion";
import { useState } from "react";

// 5. Toggle Switch
export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors border ${
        isOn
          ? "bg-cyan-500/20 border-cyan-500"
          : "bg-slate-900 border-slate-800"
      }`}>
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`w-4 h-4 rounded-full shadow-md ${
          isOn ? "bg-cyan-400 shadow-[0_0_10px_#22d3ee]" : "bg-slate-400"
        }`}
        style={{ x: isOn ? 20 : 0 }}
      />
    </div>
  );
}
