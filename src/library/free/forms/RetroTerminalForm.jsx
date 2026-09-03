import { useState } from "react";
import { motion } from "framer-motion";

export default function RetroTerminalForm() {
  const [authed, setAuthed] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-80 p-4 bg-black border-2 border-green-500 rounded font-mono space-y-3 shadow-[0_0_15px_rgba(34,197,94,0.3)] text-green-400">
      <div className="text-xs border-b border-green-900 pb-2">
        C:\SYS\AUTH.EXE
      </div>
      {authed ? (
        <div className="py-4 text-xs text-green-300">ROOT_ACCESS_GRANTED</div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setAuthed(true);
          }}
          className="space-y-2.5">
          <input
            type="text"
            placeholder="USER"
            className="w-full p-1.5 bg-black border border-green-500 text-xs text-green-300 focus:outline-none font-mono"
            required
          />
          <input
            type="password"
            placeholder="PASS"
            className="w-full p-1.5 bg-black border border-green-500 text-xs text-green-300 focus:outline-none font-mono"
            required
          />
          <button
            type="submit"
            className="w-full py-1 bg-green-950 text-green-400 border border-green-500 text-xs font-mono cursor-pointer">
            EXECUTE
          </button>
        </form>
      )}
    </motion.div>
  );
}
