import { motion } from "framer-motion";

export default function SpringElasticButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 500, damping: 10 }}
      className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 cursor-pointer"
    >
      Elastic Pop
    </motion.button>
  );
}