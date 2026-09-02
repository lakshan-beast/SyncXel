import { motion } from "framer-motion";

// 9. Live Soundwave Active Button
export default function SoundwaveButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      className="px-5 py-2.5 bg-slate-950 border border-indigo-500/40 text-indigo-300 font-baloo text-xs rounded-xl flex items-center gap-3 shadow-[0_0_15px_rgba(99,102,241,0.15)] cursor-pointer group"
    >
      <span>AUDIO_SYNC</span>
      <div className="flex items-end gap-0.5 h-3">
        {[0.4, 0.8, 0.3, 0.9, 0.5].map((h, i) => (
          <motion.span
            key={i}
            animate={{ height: ["20%", `${h * 100}%`, "20%"] }}
            transition={{ repeat: Infinity, duration: 0.6 + i * 0.1, ease: "easeInOut" }}
            className="w-1 bg-indigo-400 rounded-full"
          />
        ))}
      </div>
    </motion.button>
  );
}