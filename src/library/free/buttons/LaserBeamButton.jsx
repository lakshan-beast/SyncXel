import { motion } from "framer-motion";

export default function LaserBeamButton() {
  return (
    <div className="relative p-[1px] rounded-xl overflow-hidden inline-block group cursor-pointer">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="absolute inset-[-50%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_180deg,#22d3ee_360deg)]"
      />
      <button className="relative px-5 py-2 bg-slate-950 text-cyan-400 hover:text-cyan-300 text-xs font-baloo rounded-[11px] transition-colors cursor-pointer w-full h-full">
        // Laser Beam
      </button>
    </div>
  );
}
