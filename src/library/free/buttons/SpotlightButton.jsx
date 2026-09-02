import { motion } from "framer-motion";
import { useState } from "react";

// 7. Spotlight Follower Button
export default function SpotlightButton() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden px-5 py-2.5 bg-slate-900 border border-slate-800 text-slate-200 font-medium text-xs rounded-xl cursor-pointer group"
    >
      <span className="relative z-10">Spotlight Glow</span>
      <div 
        className="absolute pointer-events-none w-24 h-24 bg-cyan-500/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ top: mousePos.y - 48, left: mousePos.x - 48 }}
      />
    </motion.button>
  );
}