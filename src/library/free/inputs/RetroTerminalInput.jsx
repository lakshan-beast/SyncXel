import { motion } from "framer-motion";

export default function RetroTerminalInput() {
  return (
    <div className="w-72 p-2 bg-black border-2 border-green-500 rounded font-mono text-green-400 flex items-center gap-2 shadow-[0_0_10px_rgba(34,197,94,0.3)]">
      <span className="text-xs">&gt;</span>
      <input
        type="text"
        placeholder="ENTER_QUERY..."
        className="bg-transparent text-green-300 text-xs focus:outline-none w-full font-mono placeholder:text-green-800"
      />
      <span className="w-2 h-4 bg-green-500 animate-pulse" />
    </div>
  );
}
