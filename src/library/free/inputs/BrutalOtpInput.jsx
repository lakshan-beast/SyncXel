import { motion } from "framer-motion";

export default function BrutalOtpInput() {
  return (
    <div className="flex gap-2 font-baloo">
      {[1, 2, 3, 4].map((item) => (
        <motion.input
          key={item}
          type="text"
          maxLength={1}
          whileFocus={{ scale: 1.05 }}
          className="w-12 h-12 text-center bg-yellow-300 text-slate-950 font-black text-lg border-2 border-slate-950 rounded-xl shadow-[3px_3px_0px_0px_#020617] focus:outline-none"
        />
      ))}
    </div>
  );
}
