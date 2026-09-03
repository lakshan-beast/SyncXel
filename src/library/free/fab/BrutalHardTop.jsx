import { motion } from "framer-motion";
export default function BrutalHardTop() {
  return (
    <motion.button
      whileHover={{ x: -2, y: -2, boxShadow: "5px 5px 0px 0px #020617" }}
      className="w-12 h-12 bg-pink-400 border-2 border-slate-950 rounded-2xl flex items-center justify-center text-slate-950 shadow-[3px_3px_0px_0px_#020617] font-baloo font-black text-xs cursor-pointer">
      TOP
    </motion.button>
  );
}
