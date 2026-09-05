import { motion } from "framer-motion";

export default function RetroTerminalToast() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-80 p-3.5 bg-black border-2 border-green-500 rounded font-mono flex items-center gap-3 shadow-[0_0_15px_rgba(34,197,94,0.3)] text-green-400">
      <div className="w-7 h-7 bg-green-950 border border-green-500 rounded flex items-center justify-center font-bold text-xs">
        OK
      </div>
      <div>
        <h4 className="text-xs font-bold">SUCCESS_LOG [200]</h4>
        <p className="text-[10px] text-green-600">SYS_COMMAND_EXECUTED_01</p>
      </div>
    </motion.div>
  );
}
