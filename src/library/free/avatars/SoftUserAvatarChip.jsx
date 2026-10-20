// import { motion } from "framer-motion";

// export default function ClayVolumetricAvatar() {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="w-72 p-4 bg-slate-900 rounded-3xl shadow-[8px_8px_16px_#020617,-8px_-8px_16px_#1e293b] border border-slate-800 font-baloo flex items-center gap-4 text-white cursor-pointer">
//       <div className="w-12 h-12 rounded-2xl bg-slate-900 shadow-inner border border-slate-800 flex items-center justify-center font-bold text-indigo-300 text-xs">
//         CL
//       </div>
//       <div>
//         <h4 className="text-xs font-bold">Volumetric_User</h4>
//         <p className="text-[10px] text-slate-400">Soft Matte Profile</p>
//       </div>
//     </motion.div>
//   );
// }


import { motion } from "framer-motion";
import { FiMoreVertical } from "react-icons/fi";

export default function SoftUserAvatarChip() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="flex items-center gap-3 p-3 pr-4 w-72 bg-slate-200 rounded-2xl shadow-[inset_2px_2px_6px_#cbd5e1,inset_-2px_-2px_6px_#ffffff] cursor-pointer"
    >
      <div className="w-11 h-11 rounded-full bg-slate-200 shadow-[3px_3px_6px_#cbd5e1,-3px_-3px_6px_#ffffff] p-0.5">
        <img
          src="https://i.pravatar.cc/120?img=5"
          alt="User"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <div className="flex-1">
        <p className="text-sm font-semibold text-slate-700">Liam Carter</p>
        <p className="text-xs text-slate-500">Online now</p>
      </div>

      <FiMoreVertical className="w-4 h-4 text-slate-500" />
    </motion.div>
  );
}