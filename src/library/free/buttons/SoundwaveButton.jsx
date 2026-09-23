// import { motion } from "framer-motion";

// // 9. Live Soundwave Active Button
// export default function SoundwaveButton() {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.03 }}
//       whileTap={{ scale: 0.95 }}
//       className="px-5 py-2.5 bg-slate-950 border border-indigo-500/40 text-indigo-300 font-baloo text-xs rounded-xl flex items-center gap-3 shadow-[0_0_15px_rgba(99,102,241,0.15)] cursor-pointer group"
//     >
//       <span>AUDIO_SYNC</span>
//       <div className="flex items-end gap-0.5 h-3">
//         {[0.4, 0.8, 0.3, 0.9, 0.5].map((h, i) => (
//           <motion.span
//             key={i}
//             animate={{ height: ["20%", `${h * 100}%`, "20%"] }}
//             transition={{ repeat: Infinity, duration: 0.6 + i * 0.1, ease: "easeInOut" }}
//             className="w-1 bg-indigo-400 rounded-full"
//           />
//         ))}
//       </div>
//     </motion.button>
//   );
// }

import { motion } from "framer-motion";

export default function SoundwaveButton({ 
  text = "AUDIO SYNC", 
  onClick 
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(129, 140, 248, 0.35)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-6 py-3.5 bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 border-2 border-indigo-500/50 text-indigo-200 font-baloo text-xs font-bold rounded-2xl shadow-[0_10px_25px_rgba(99,102,241,0.25)] flex items-center gap-4 cursor-pointer select-none group"
    >
      <span className="tracking-widest group-hover:text-white transition-colors">
        {text}
      </span>
      
      {/* Animated Equalizer Wave Bars */}
      <div className="flex items-end gap-1 h-4">
        {[0.4, 0.9, 0.3, 1.0, 0.6].map((h, i) => (
          <motion.span
            key={i}
            animate={{ height: ["20%", `${h * 100}%`, "20%"] }}
            transition={{ repeat: Infinity, duration: 0.5 + i * 0.1, ease: "easeInOut" }}
            className="w-1 bg-gradient-to-t from-indigo-500 to-fuchsia-400 rounded-full shadow-[0_0_8px_#818cf8]"
          />
        ))}
      </div>
    </motion.button>
  );
}