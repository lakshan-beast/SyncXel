import { motion } from "framer-motion";

export default function RetroCrtAgentBadge() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-72 p-4 bg-black border-2 border-green-500 rounded font-mono flex items-center justify-between shadow-[0_0_15px_rgba(34,197,94,0.3)] text-green-400 cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-green-950 border border-green-500 rounded flex items-center justify-center font-bold text-xs">
          CRT
        </div>
        <div>
          <h4 className="text-xs font-bold">CRT_AGENT</h4>
          <span className="text-[9px] text-green-300">ONLINE</span>
        </div>
      </div>
      <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
    </motion.div>
  );
}
