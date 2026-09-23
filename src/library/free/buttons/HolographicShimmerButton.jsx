import { motion } from "framer-motion";

export default function HolographicShimmerButton({
  text = "Mint Access Pass",
  onClick,
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(236,72,153,0.5" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative overflow-hidden px-6 py-2 bg-white border-4 border-pink-500/40 rounded-xl cursor-pointer group shadow-[0_0_15px_rgba(236,72,153,0.15)] select-none">
      {/* holographic gradient text */}
      <span className="relative z-10 font-baloo font-bold text-lg bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        {text}
      </span>

      {/* shimmer light sweep effect */}
      <motion.div
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400 to-transparent pointer-events-none"
      />
    </motion.button>
  );
}
