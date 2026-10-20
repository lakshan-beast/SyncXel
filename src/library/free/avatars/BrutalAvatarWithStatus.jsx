// import { motion } from "framer-motion";

// export default function GlassEnclaveCard() {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="w-72 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl font-baloo flex items-center gap-4 text-white shadow-2xl cursor-pointer">
//       <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center font-bold text-cyan-300 text-xs">
//         GE
//       </div>
//       <div>
//         <h4 className="text-xs font-bold text-cyan-200">Enclave_Member</h4>
//         <p className="text-[10px] text-slate-300 font-mono">SECURE_TUNNEL</p>
//       </div>
//     </motion.div>
//   );
// }


import { motion } from "framer-motion";

export default function BrutalAvatarWithStatus() {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="relative w-20 h-20 cursor-pointer select-none"
    >
      <img
        src="https://i.pravatar.cc/160?img=12"
        alt="User avatar"
        className="w-20 h-20 rounded-full object-cover border-2 border-slate-950 shadow-[4px_4px_0px_0px_#020617]"
      />
      <span className="absolute bottom-0 right-0 w-5 h-5 bg-emerald-400 border-2 border-slate-950 rounded-full shadow-[2px_2px_0px_0px_#020617]" />
    </motion.div>
  );
}