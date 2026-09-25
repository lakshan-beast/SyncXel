import { motion } from "framer-motion";

export default function BouncingDotsLoader() {
  const colors = [
    "bg-amber-400 shadow-[0_0_12px_#fbbf24]",
    "bg-orange-500 shadow-[0_0_12px_#f97316]",
    "bg-rose-500 shadow-[0_0_12px_#f43f5e]"
  ];

  return (
    <div className="flex space-x-3 items-center justify-center p-4 bg-gradient-to-r from-stone-950 via-neutral-950 to-stone-950 rounded-2xl border border-orange-500/30 shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
      {[0, 0.2, 0.4].map((delay, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -10, 0], scale: [1, 1.15, 1] }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            delay,
            ease: "easeInOut",
          }}
          className={`w-3.5 h-3.5 rounded-full ${colors[i]}`}
        />
      ))}
    </div>
  );
}