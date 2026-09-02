import { motion } from "framer-motion";

export default function LiquidMorphButton() {
  return (
    <motion.button
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden px-5 py-2.5 bg-slate-950 border border-slate-800 text-slate-200 font-semibold text-xs rounded-xl cursor-pointer group"
    >
      <span className="relative z-10 group-hover:text-slate-950 transition-colors duration-300">
        Liquid Fill
      </span>
      <motion.span
        variants={{
          hover: { y: "0%" }
        }}
        initial={{ y: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 bg-cyan-400 z-0 pointer-events-none"
      />
    </motion.button>
  );
}