// import { motion } from "framer-motion";

// export default function BentoStatusBadge() {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="w-72 p-4 bg-slate-900 border border-slate-800 rounded-2xl font-baloo flex items-center justify-between text-white shadow-lg cursor-pointer">
//       <div className="flex items-center gap-3">
//         <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center font-bold text-emerald-400 text-xs">
//           BS
//         </div>
//         <div>
//           <h4 className="text-xs font-bold">Live_Status</h4>
//           <span className="text-[10px] text-emerald-400">Available</span>
//         </div>
//       </div>
//       <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { FiUser, FiUsers, FiGrid } from "react-icons/fi";

export default function BentoProfileStatsCard() {
  const stats = [
    { icon: FiUsers, label: "Followers", value: "12.4K" },
    { icon: FiUser, label: "Following", value: "318" },
    { icon: FiGrid, label: "Projects", value: "46" },
  ];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="w-80 p-4 bg-slate-900 rounded-3xl border border-slate-800 shadow-xl">
      <div className="flex items-center gap-3 p-3 bg-slate-800/70 rounded-2xl">
        <img
          src="https://i.pravatar.cc/160?img=47"
          alt="Profile"
          className="w-12 h-12 rounded-xl object-cover"
        />
        <div>
          <p className="text-white font-semibold">Noah Bennett</p>
          <p className="text-xs text-slate-400">Creative Developer</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-3">
        {stats.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="p-3 bg-slate-800/70 rounded-2xl text-center">
            <Icon className="w-4 h-4 mx-auto text-indigo-400" />
            <p className="mt-1.5 text-white font-bold text-sm">{value}</p>
            <p className="text-[10px] text-slate-400">{label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
