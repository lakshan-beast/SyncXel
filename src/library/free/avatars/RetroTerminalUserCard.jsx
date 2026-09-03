import { motion } from "framer-motion";

export default function RetroTerminalUserCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-72 p-4 bg-black border-2 border-green-500 rounded font-mono flex items-center gap-4 shadow-[0_0_15px_rgba(34,197,94,0.3)] text-green-400 cursor-pointer">
      <div className="w-11 h-11 bg-green-950 border border-green-500 rounded flex items-center justify-center font-bold text-xs">
        RT
      </div>
      <div>
        <h4 className="text-xs font-bold">ROOT_USER</h4>
        <p className="text-[10px] text-green-600">SYS_ID #9901</p>
      </div>
    </motion.div>
  );
}
