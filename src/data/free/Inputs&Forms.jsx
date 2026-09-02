import NeonInputSearch from "../../library/free/inputs/NeonInputSearch";
import CommandConsoleInput from "../../library/free/inputs/CommandConsoleInput";

export const inputsData = [
  {
    id: "input-neon-search",
    title: "Neon Glow Search Input",
    category: "Inputs & Search Bars",
    description: "Cyberpunk search bar featuring dynamic border glow and focus animation.",
    copiesCount: 310,
    component: <NeonInputSearch />,
    code: `<motion.div className="relative w-72 bg-slate-950 border rounded-xl px-4 py-2 flex items-center gap-2 font-baloo text-xs"><span className="text-cyan-400">&gt;</span><input type="text" placeholder="SEARCH_DATABASE..." className="bg-transparent text-slate-200 focus:outline-none w-full" /></motion.div>`,
  },
  {
    id: "input-command-console",
    title: "Command Console Input",
    category: "Inputs & Search Bars",
    description: "High-tech terminal style command input with a blinking neon cursor block.",
    copiesCount: 275,
    component: <CommandConsoleInput />,
    code: `<div className="relative w-72 bg-slate-950 border border-indigo-500/40 rounded-xl px-4 py-2 flex items-center justify-between font-baloo text-xs"><input type="text" placeholder="EXECUTE_COMMAND..." className="bg-transparent text-indigo-300 focus:outline-none w-full" /><span className="w-2 h-4 bg-indigo-500 animate-pulse" /></div>`,
  },
];