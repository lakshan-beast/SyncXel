import { motion } from "framer-motion";
import { useState } from "react";

export default function NeonInputSearch() {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      animate={{ 
        borderColor: focused ? "rgba(34, 211, 238, 0.8)" : "rgba(30, 41, 59, 1)",
        boxShadow: focused ? "0 0 20px rgba(34,211,238,0.2)" : "0 0 0px rgba(0,0,0,0)"
      }}
      className="relative w-72 bg-slate-950 border rounded-xl px-4 py-2 flex items-center gap-2 font-baloo text-xs"
    >
      <span className="text-cyan-400 font-bold">&gt;</span>
      <input
        type="text"
        placeholder="SEARCH_DATABASE..."
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="bg-transparent text-slate-200 placeholder-slate-600 focus:outline-none w-full"
      />
    </motion.div>
  );
}