// import { motion } from "framer-motion";

// export default function CyberHexaProfile() {
//   return (
//     <motion.div whileHover={{ scale: 1.02 }} className="w-72 p-4 bg-slate-950 border border-cyan-500/50 rounded-2xl font-baloo flex items-center gap-4 text-white shadow-[0_0_20px_rgba(34,211,238,0.2)] cursor-pointer">
//       <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-400 rounded-xl flex items-center justify-center font-mono font-bold text-cyan-300 text-xs rotate-3">
//         HEX
//       </div>
//       <div>
//         <h4 className="text-xs font-bold text-cyan-400">Cyber_Vanguard</h4>
//         <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">Verified Node</span>
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { FiZap, FiTrendingUp } from "react-icons/fi";

export default function CyberpunkGamerProfileCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className="w-80 p-5 bg-slate-950 border border-cyan-400/60 rounded-lg shadow-[0_0_25px_rgba(34,211,238,0.35)] text-cyan-300 font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.25em] text-cyan-500">
          Player_Profile
        </span>
        <FiZap className="w-4 h-4 text-fuchsia-400" />
      </div>

      <div className="flex items-center gap-4 mt-4">
        <img
          src="https://i.pravatar.cc/160?img=68"
          alt="Gamer"
          className="w-14 h-14 rounded-md object-cover border border-fuchsia-400/70 shadow-[0_0_15px_rgba(232,121,249,0.5)]"
        />
        <div>
          <p className="text-white font-bold tracking-wide">NEON_RAVEN</p>
          <p className="text-xs text-cyan-500">Level 87 · Ranked Diamond</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="p-2.5 bg-cyan-400/10 border border-cyan-400/30 rounded">
          <p className="text-[10px] text-cyan-500">WIN RATE</p>
          <p className="text-white font-bold">68.4%</p>
        </div>
        <div className="p-2.5 bg-fuchsia-400/10 border border-fuchsia-400/30 rounded">
          <p className="text-[10px] text-fuchsia-400">K/D RATIO</p>
          <p className="text-white font-bold">2.18</p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-400">
        <FiTrendingUp className="w-3 h-3" />
        <span>+312 RP this season</span>
      </div>
    </motion.div>
  );
}
