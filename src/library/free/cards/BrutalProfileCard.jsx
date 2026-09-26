// import { motion } from "framer-motion";

// export default function BrutalProfileCard() {
//   return (
//     <motion.div
//       whileHover={{ x: -2, y: -2 }}
//       className="w-72 p-4 bg-yellow-300 border-2 border-slate-950 rounded-xl shadow-[4px_4px_0px_0px_#020617] font-baloo space-y-3">
//       <div className="flex items-center gap-3">
//         <div className="w-10 h-10 bg-pink-500 border-2 border-slate-950 rounded-lg shadow-[2px_2px_0px_0px_#020617] flex items-center justify-center font-black text-white">
//           NB
//         </div>
//         <div>
//           <h4 className="text-xs font-black text-slate-950">BRUTAL_DEV</h4>
//           <p className="text-[10px] text-slate-800">UI/UX Engineer</p>
//         </div>
//       </div>
//       <button className="w-full py-1.5 bg-slate-950 text-yellow-300 font-bold text-xs rounded-lg border-2 border-slate-950">
//         CONNECT_NODE
//       </button>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { FiExternalLink, FiShield } from "react-icons/fi";

export default function BrutalProfileCard() {
  return (
    <motion.div
      whileHover={{ x: -3, y: -3, boxShadow: "7px 7px 0px 0px #020617" }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="w-80 p-5 bg-yellow-300 border-2 border-slate-950 rounded-2xl shadow-[4px_4px_0px_0px_#020617] font-baloo space-y-4 select-none cursor-pointer">
      {/* Header with Avatar and Role */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-pink-500 border-2 border-slate-950 rounded-xl shadow-[2px_2px_0px_0px_#020617] flex items-center justify-center font-black text-white text-sm">
            SJ
          </div>
          <div>
            <h4 className="text-xs font-black text-slate-950 tracking-wide">
              Sarah Jenkins
            </h4>
            <p className="text-[11px] text-slate-900 font-bold">
              Principal Enterprise Architect
            </p>
          </div>
        </div>
        <div className="w-7 h-7 bg-white border-2 border-slate-950 rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_#020617]">
          <FiShield className="w-3.5 h-3.5 text-slate-950" />
        </div>
      </div>

      {/* Description / Team Info */}
      <p className="text-[11px] text-slate-900 font-semibold leading-relaxed bg-yellow-200/60 p-2.5 rounded-xl border border-slate-950">
        Leading core infrastructure security pipelines and multi-region
        deployment nodes.
      </p>

      {/* Action Button */}
      <button className="w-full py-2.5 bg-slate-950 text-yellow-300 font-bold text-xs rounded-xl border-2 border-slate-950 shadow-[2px_2px_0px_0px_#f43f5e] hover:bg-slate-900 flex items-center justify-center gap-2 transition-colors cursor-pointer">
        <span>View Full Profile</span>
        <FiExternalLink className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
}
