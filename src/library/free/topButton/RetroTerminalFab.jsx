import { motion } from "framer-motion";
export default function RetroTerminalFab() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="w-12 h-12 bg-black border-2 border-green-500 rounded flex items-center justify-center text-green-400 font-mono shadow-[0_0_15px_rgba(34,197,94,0.3)] cursor-pointer">
      ↑
    </motion.button>
  );
}
