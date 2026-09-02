import { motion } from "framer-motion";

// 20. Quantum Flux Slide Button
export default function QuantumFluxButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-5 py-2.5 bg-slate-950 border border-violet-500/40 text-violet-300 font-baloo text-xs rounded-xl overflow-hidden cursor-pointer shadow-[0_0_20px_rgba(139,92,246,0.2)] group h-9 flex items-center justify-center"
    >
      <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-y-8">
        QUANTUM_FLUX
      </span>
      <span className="absolute inset-0 flex items-center justify-center text-cyan-400 translate-y-8 group-hover:translate-y-0 transition-transform duration-300 font-bold">
        EXECUTE_CORE
      </span>
    </motion.button>
  );
}