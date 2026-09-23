// import { motion } from "framer-motion";
// import { useState } from "react";

// // 7. Spotlight Follower Button
// export default function SpotlightButton() {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//   };

//   return (
//     <motion.button
//       whileHover={{ scale: 1.03 }}
//       whileTap={{ scale: 0.95 }}
//       onMouseMove={handleMouseMove}
//       className="relative overflow-hidden px-5 py-2.5 bg-slate-900 border border-slate-800 text-slate-200 font-medium text-xs rounded-xl cursor-pointer group"
//     >
//       <span className="relative z-10">Spotlight Glow</span>
//       <div 
//         className="absolute pointer-events-none w-24 h-24 bg-cyan-500/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
//         style={{ top: mousePos.y - 48, left: mousePos.x - 48 }}
//       />
//     </motion.button>
//   );
// }

import { motion } from "framer-motion";
import { useState } from "react";
import { FiCompass } from "react-icons/fi";

export default function SpotlightButton({ 
  text = "Explore Elite Tiers", 
  onClick 
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(245, 158, 11, 0.25)" }}
      whileTap={{ scale: 0.95 }}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className="relative overflow-hidden px-10 py-4 bg-gradient-to-r from-stone-950 via-neutral-900 to-stone-950 border-2 border-amber-300 text-amber-200 font-baloo text-sm font-bold rounded-2xl cursor-pointer group select-none shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
    >
      <span className="relative z-10 flex items-center gap-2.5 tracking-wide drop-shadow-md">
        <FiCompass className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
        {text}
      </span>
      
      {/* Dynamic Cursor-Tracking Amber Spotlight Glow */}
      <div 
        className="absolute pointer-events-none w-32 h-32 bg-amber-400/20 rounded-full blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ top: mousePos.y - 64, left: mousePos.x - 64 }}
      />
    </motion.button>
  );
}