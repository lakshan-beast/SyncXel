// import { motion } from "framer-motion";

// export default function LiveStatusBadge() {
//   return (
//     <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-950 border border-emerald-500/40 rounded-full font-baloo text-[11px] text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
//       <motion.span
//         animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
//         transition={{ repeat: Infinity, duration: 1.5 }}
//         className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"
//       />
//       <span>SYS ONLINE // 99.9%</span>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function EncryptedVaultBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white border border-slate-200 rounded-full font-baloo text-xs font-semibold text-slate-700 shadow-2xs select-">
      {/* Animated Shield / Lock Dot Indicator */}
      <div className="relative flex items-center justify-center w-2.5 h-2.5">
        <motion.span
          animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-indigo-500/30"
        />
        <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
      </div>

      <span className="tracking-wide">ENCRYPTED_VAULT // TLS 1.3</span>
    </div>
  );
}