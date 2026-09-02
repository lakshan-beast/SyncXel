import { motion } from "framer-motion";

export default function BrutalActionPill() {
  return (
    <motion.button
      whileHover={{ x: -2, y: -2 }}
      whileTap={{ x: 2, y: 2 }}
      className="px-5 py-2.5 bg-pink-500 text-white font-black text-xs border-2 border-slate-950 rounded-lg shadow-[4px_4px_0px_0px_#020617] cursor-pointer">
      EXECUTE_ACTION
    </motion.button>
  );
}
