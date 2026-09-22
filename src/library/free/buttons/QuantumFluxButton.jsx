import { motion } from "framer-motion";
import { FaFacebook, FaWhatsapp, FaPhone } from "react-icons/fa6";

// 20. Quantum Flux Slide Button - Optimized
export default function QuantumFluxButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-8 py-3 bg-slate-950 border border-violet-500/40 text-violet-300 font-baloo text-xs rounded-xl overflow-hidden cursor-pointer shadow-[0_0_20px_rgba(139,92,246,0.2)] group h-12 flex items-center justify-center select-none"
    >
      {/* Primary Text */}
      <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-y-8">
        Follow Me
      </span>

      {/* Social Icons Container */}
      <div className="absolute inset-0 flex items-center justify-center text-cyan-400 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
        <ul className="flex flex-row gap-5 items-center">
          <li>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              <FaFacebook className="w-4 h-4" />
            </a>
          </li>
          <li>
            <a 
              href="https://whatsapp.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </li>
          <li>
            <a 
              href="tel:+94000000000" 
              className="hover:text-white transition-colors"
            >
              <FaPhone className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}