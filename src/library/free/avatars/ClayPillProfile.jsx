// import { motion } from "framer-motion";

// export default function ClayPillProfile() {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="w-72 p-3 bg-slate-900 rounded-full shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] border border-slate-800 font-baloo flex items-center gap-4 text-white px-5 cursor-pointer">
//       <div className="w-9 h-9 rounded-full bg-slate-900 shadow-inner border border-slate-800 flex items-center justify-center font-bold text-cyan-300 text-[11px]">
//         CP
//       </div>
//       <div>
//         <h4 className="text-xs font-bold">Clay_Pill</h4>
//         <p className="text-[9px] text-cyan-400">Active Node</p>
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";

export default function ClayTeamAvatarStack() {
  const users = [21, 44, 15, 68];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      className="inline-flex items-center gap-3 p-4 bg-orange-100 rounded-[28px] shadow-[8px_8px_18px_#e7c9a8,-8px_-8px_18px_#ffffff] cursor-pointer">
      <div className="flex -space-x-3">
        {users.map((id, i) => (
          <img
            key={id}
            src={`https://i.pravatar.cc/100?img=${id}`}
            alt="Team member"
            className={`w-11 h-11 rounded-full object-cover border-4 border-orange-100 ${
              i === 0 ? "z-40" : i === 1 ? "z-30" : i === 2 ? "z-20" : "z-10"
            }`}
          />
        ))}
        <div className="w-11 h-11 rounded-full bg-pink-300 border-4 border-orange-100 flex items-center justify-center text-xs font-bold text-slate-800 z-0">
          +9
        </div>
      </div>

      <div>
        <p className="text-sm font-bold text-slate-700">Design Team</p>
        <p className="text-xs text-slate-500">13 members active</p>
      </div>
    </motion.div>
  );
}
