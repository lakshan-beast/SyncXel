import { motion } from "framer-motion";

export default function GlassFloatingInput() {
  return (
    <div className="relative w-72">
      <motion.input
        type="text"
        placeholder=" "
        className="w-full px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl text-white text-xs focus:outline-none focus:border-cyan-400 peer"
      />
      <label className="absolute left-4 top-2.5 text-slate-400 text-xs transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-cyan-400 pointer-events-none">
        SECURE IDENTIFIER
      </label>
    </div>
  );
}
