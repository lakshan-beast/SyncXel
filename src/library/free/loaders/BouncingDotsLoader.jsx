// export default function BouncingDotsLoader() {
//   return (
//     <div className="flex space-x-2 items-center justify-center">
//       <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s] shadow-[0_0_10px_#22d3ee]"></div>
//       <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s] shadow-[0_0_10px_#6366f1]"></div>
//       <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce shadow-[0_0_10px_#22d3ee]"></div>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function BouncingDotsLoader() {
  return (
    <div className="flex space-x-2 items-center justify-center">
      {[0, 0.2, 0.4].map((delay, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            delay,
            ease: "easeInOut",
          }}
          className={`w-3 h-3 rounded-full ${i === 1 ? "bg-indigo-500 shadow-[0_0_10px_#6366f1]" : "bg-cyan-400 shadow-[0_0_10px_#22d3ee]"}`}
        />
      ))}
    </div>
  );
}
