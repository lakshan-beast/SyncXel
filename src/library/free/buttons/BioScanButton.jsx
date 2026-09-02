import { motion } from "framer-motion";
import { useState } from "react";

// 19. Bio-Scan Pulse Button
export default function BioScanButton() {
  const [scanning, setScanning] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setScanning(true)}
      onHoverEnd={() => setScanning(false)}
      whileTap={{ scale: 0.95 }}
      className="relative px-5 py-2.5 bg-slate-900 border border-emerald-500/40 text-emerald-400 font-baloo text-xs rounded-xl overflow-hidden cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.15)]"
    >
      <span className="relative z-10 flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${scanning ? "bg-emerald-400 animate-ping" : "bg-emerald-600"}`} />
        BIO_ACCESS
      </span>
      {scanning && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-emerald-400 shadow-[0_0_8px_#34d399]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
}