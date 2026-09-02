import { motion } from "framer-motion";

// 18. Holographic Shimmer Button
export default function HolographicShimmerButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(236,72,153,0.3)" }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden px-5 py-2.5 bg-slate-950 border border-pink-500/40 text-pink-400 font-baloo text-xs rounded-xl cursor-pointer group shadow-[0_0_15px_rgba(236,72,153,0.15)]"
    >
      <span className="relative z-10">HOLO_SHIMMER</span>
      <motion.div
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/30 to-transparent pointer-events-none"
      />
    </motion.button>
  );
}