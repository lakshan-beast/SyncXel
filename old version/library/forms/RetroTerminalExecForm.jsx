import { useState } from "react";
import { motion } from "framer-motion";

export default function RetroTerminalExecForm() {
  const [executed, setExecuted] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-80 p-4 bg-black border-2 border-green-500 rounded font-mono space-y-3 shadow-[0_0_15px_rgba(34,197,94,0.3)] text-green-400">
      <div className="flex justify-between items-center text-xs border-b border-green-900 pb-2">
        <span>C:\SYS\EXEC_CMD.EXE</span>
        <span className="animate-pulse">●</span>
      </div>
      {executed ? (
        <div className="py-4 text-xs text-green-300">
          PROCESS_COMPLETED_SUCCESS
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setExecuted(true);
          }}
          className="space-y-2.5">
          <input
            type="text"
            placeholder="COMMAND_ARGS..."
            className="w-full p-2 bg-black border border-green-500 text-xs text-green-300 focus:outline-none font-mono"
            required
          />
          <button
            type="submit"
            className="w-full py-1.5 bg-green-950 text-green-400 border border-green-500 text-xs font-mono cursor-pointer">
            RUN_EXEC
          </button>
        </form>
      )}
    </motion.div>
  );
}
