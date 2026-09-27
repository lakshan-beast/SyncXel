import { motion } from "framer-motion";
export default function RetroCrtTop() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="w-14 h-12 bg-black border-2 border-green-500 rounded flex items-center justify-center text-green-300 font-mono text-xs font-bold shadow-[0_0_15px_rgba(34,197,94,0.3)] cursor-pointer">
      TOP
    </motion.button>
  );
}
