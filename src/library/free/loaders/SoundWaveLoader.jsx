// export default function SoundWaveLoader() {
//   return (
//     <div className="flex items-end gap-1 h-6">
//       <div className="w-1 bg-cyan-400 animate-[pulse_0.6s_ease-in-out_infinite] h-full rounded-full shadow-[0_0_8px_#22d3ee]"></div>
//       <div className="w-1 bg-cyan-400 animate-[pulse_0.8s_ease-in-out_infinite] h-3/4 rounded-full"></div>
//       <div className="w-1 bg-indigo-500 animate-[pulse_0.5s_ease-in-out_infinite] h-5/6 rounded-full shadow-[0_0_8px_#6366f1]"></div>
//       <div className="w-1 bg-cyan-400 animate-[pulse_0.7s_ease-in-out_infinite] h-1/2 rounded-full"></div>
//     </div>
//   );
// }

// import { motion } from "framer-motion";

// export default function SoundWaveLoader() {
//   return (
//     <div className="flex items-end gap-1 h-6">
//       {[0.6, 0.8, 0.5, 0.7].map((dur, i) => (
//         <motion.div
//           key={i}
//           animate={{ height: ["20%", "100%", "20%"] }}
//           transition={{ repeat: Infinity, duration: dur, ease: "easeInOut" }}
//           className={`w-1 rounded-full ${i === 2 ? "bg-indigo-500 shadow-[0_0_8px_#6366f1]" : "bg-cyan-400 shadow-[0_0_8px_#22d3ee]"}`}
//         />
//       ))}
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function SoundWaveLoader() {
  return (
    <div className="w-48 h-48 mx-auto p-5 rounded-3xl bg-transparent border border-slate-100 flex flex-col justify-between items-center text-center font-baloo select-none shadow-md">
      {/* Top Text & Status Info */}
      <div className="space-y-1">
        <h4 className="text-xs font-bold text-cyan-600 leading-tight tracking-wide">
          Searching Audio Streams
        </h4>
      </div>

      {/* Centered Equalizer Wave Animation */}
      <div className="flex items-end justify-center gap-1.5 h-10 my-auto">
        {[0.6, 0.8, 0.5, 0.7, 0.65].map((dur, i) => (
          <motion.div
            key={i}
            animate={{ height: ["20%", "100%", "20%"] }}
            transition={{ repeat: Infinity, duration: dur, ease: "easeInOut" }}
            className={`w-2 rounded-full ${
              i === 2
                ? "bg-indigo-500 shadow-[0_0_8px_#6366f1]"
                : "bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
