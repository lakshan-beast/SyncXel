// import { motion } from "framer-motion";

// export default function CyberAvatarPreview() {
//   return (
//     <div className="w-72 p-4 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo flex items-center gap-4 text-white shadow-[0_0_15px_rgba(34,211,238,0.15)]">
//       <div className="relative">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//           className="absolute -inset-1 rounded-full border border-dashed border-cyan-400"
//         />
//         <div className="w-12 h-12 rounded-full bg-cyan-950 border border-cyan-500 flex items-center justify-center font-bold text-cyan-300 text-xs">
//           CY
//         </div>
//         <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-950 rounded-full animate-pulse" />
//       </div>
//       <div>
//         <h4 className="text-xs font-bold text-cyan-300">Agent_Zero</h4>
//         <p className="text-[10px] text-slate-400 font-mono">
//           NODE_ACTIVE // L2
//         </p>
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { FiInstagram, FiYoutube, FiTwitter } from "react-icons/fi";

export default function AuroraCreatorProfileCard() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
      className="relative w-80 p-6 rounded-3xl overflow-hidden bg-slate-950 text-white shadow-2xl">
      <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-fuchsia-500/40 blur-3xl" />
      <div className="absolute -bottom-16 -right-10 w-48 h-48 rounded-full bg-cyan-400/40 blur-3xl" />
      <div className="absolute top-10 right-0 w-32 h-32 rounded-full bg-violet-500/40 blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/160?img=59"
            alt="Creator"
            className="w-16 h-16 rounded-full object-cover ring-2 ring-white/30"
          />
          <div>
            <p className="font-bold">Mia Rivers</p>
            <p className="text-xs text-white/60">Content Creator</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-white/75">
          Making weekly design breakdowns and creative coding tutorials.
        </p>

        <div className="flex items-center gap-2 mt-5">
          {[FiInstagram, FiYoutube, FiTwitter].map((Icon, i) => (
            <div
              key={i}
              className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition">
              <Icon className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
