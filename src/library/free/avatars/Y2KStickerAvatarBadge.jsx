// import { motion } from "framer-motion";

// export default function RetroTerminalUserCard() {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="w-72 p-4 bg-black border-2 border-green-500 rounded font-mono flex items-center gap-4 shadow-[0_0_15px_rgba(34,197,94,0.3)] text-green-400 cursor-pointer">
//       <div className="w-11 h-11 bg-green-950 border border-green-500 rounded flex items-center justify-center font-bold text-xs">
//         RT
//       </div>
//       <div>
//         <h4 className="text-xs font-bold">ROOT_USER</h4>
//         <p className="text-[10px] text-green-600">SYS_ID #9901</p>
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

export default function Y2KStickerAvatarBadge() {
  return (
    <motion.div
      whileHover={{ rotate: 3, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
      className="relative w-24 h-24 cursor-pointer">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-400 via-purple-400 to-cyan-300 p-1 shadow-[0_0_20px_rgba(217,70,239,0.55)]">
        <img
          src="https://i.pravatar.cc/160?img=36"
          alt="User"
          className="w-full h-full rounded-full object-cover border-2 border-white"
        />
      </div>

      <div className="absolute -top-2 -right-2 px-2 py-1 bg-yellow-300 border-2 border-black rounded-full flex items-center gap-1">
        <FiStar className="w-3 h-3 text-black" />
        <span className="text-[10px] font-black text-black">PRO</span>
      </div>
    </motion.div>
  );
}
