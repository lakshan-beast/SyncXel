// import { motion } from "framer-motion";

// export default function BrutalBadgeProfile() {
//   return (
//     <motion.div
//       whileHover={{ x: -2, y: -2, boxShadow: "5px 5px 0px 0px #020617" }}
//       className="w-72 p-4 bg-pink-400 border-2 border-slate-950 rounded-2xl font-baloo flex items-center gap-4 shadow-[3px_3px_0px_0px_#020617] text-slate-950 cursor-pointer">
//       <div className="w-12 h-12 bg-yellow-300 border-2 border-slate-950 rounded-full flex items-center justify-center font-black text-slate-950 text-xs">
//         ✨
//       </div>
//       <div>
//         <h4 className="text-xs font-black uppercase">Sticker_Avatar</h4>
//         <span className="text-[10px] bg-slate-950 text-white px-2 py-0.5 rounded font-black">
//           VIP PRO
//         </span>
//       </div>
//     </motion.div>
//   );
// }


import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

export default function GlassProfileCard() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="w-80 p-6 rounded-3xl bg-white/15 backdrop-blur-xl border border-white/25 shadow-2xl text-white"
    >
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/160?img=32"
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover border-2 border-white/40"
        />
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="font-bold text-lg">Ava Mitchell</h3>
            <FiCheck className="w-4 h-4 text-cyan-300" />
          </div>
          <p className="text-sm text-white/70">Product Designer</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-white/80 leading-relaxed">
        Designing calm, useful interfaces for modern SaaS products.
      </p>

      <button className="mt-5 w-full py-2.5 rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 text-sm font-semibold backdrop-blur-md transition">
        Follow
      </button>
    </motion.div>
  );
}