import NeonInputSearch from "../../library/free/inputs/NeonInputSearch";
import CommandConsoleInput from "../../library/free/inputs/CommandConsoleInput";

import BrutalOtpInput from "../../library/free/inputs/BrutalOtpInput";
import GlassFloatingInput from "../../library/free/inputs/GlassFloatingInput";
import BentoSearchShortcut from "../../library/free/inputs/BentoSearchShortcut";
import ClayTagInput from "../../library/free/inputs/ClayTagInput";

import RetroTerminalInput from "../../library/free/inputs/RetroTerminalInput";
import DualThumbSlider from "../../library/free/inputs/DualThumbSlider";

export const inputsData = [
  {
    id: "input-retro-terminal",
    title: "Retro 90s Terminal Input",
    category: "Inputs & Search Bars",
    description:
      "Green phosphor monospaced search bar with blinking block cursor.",
    copiesCount: 220,
    component: <RetroTerminalInput />,
    code: `<div className="w-72 p-2 bg-black border-2 border-green-500 rounded font-mono text-green-400 flex items-center gap-2"><span className="text-xs">&gt;</span><input type="text" placeholder="ENTER_QUERY..." className="bg-transparent text-green-300 text-xs focus:outline-none w-full" /><span className="w-2 h-4 bg-green-500 animate-pulse" /></div>`,
  },
  {
    id: "input-dual-slider",
    title: "Dual-Thumb Range Slider",
    category: "Inputs & Search Bars",
    description:
      "Interactive multi-thumb filter slider for price and parameter ranges.",
    copiesCount: 260,
    component: <DualThumbSlider />,
    code: `<div className="w-72 p-3 bg-slate-900 border border-slate-800 rounded-2xl font-baloo space-y-3"><div className="flex justify-between text-xs font-bold text-slate-300"><span>Range</span><span className="text-cyan-400">Filter</span></div><input type="range" min="0" max="100" className="w-full accent-cyan-400" /></div>`,
  },
  {
    id: "input-brutal-otp",
    title: "Neo-Brutalism OTP Field",
    category: "Inputs & Search Bars",
    description:
      "High-contrast geometric multi-box verification inputs with hard drop shadows.",
    copiesCount: 240,
    component: <BrutalOtpInput />,
    code: `<div className="flex gap-2">{[1,2,3,4].map(i => <input key={i} maxLength={1} className="w-12 h-12 text-center bg-yellow-300 text-slate-950 font-black text-lg border-2 border-slate-950 rounded-xl shadow-[3px_3px_0px_0px_#020617]" />)}</div>`,
  },
  {
    id: "input-glass-floating",
    title: "Glassmorphism Floating Label",
    category: "Inputs & Search Bars",
    description:
      "Frosted translucent text input box with floating label transition effect.",
    copiesCount: 295,
    component: <GlassFloatingInput />,
    code: `<div className="relative w-72"><input type="text" placeholder=" " className="w-full px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl text-white text-xs" /><label className="absolute left-4 top-2.5 text-slate-400 text-xs">IDENTIFIER</label></div>`,
  },
  {
    id: "input-bento-shortcut",
    title: "Bento Ctrl+K Search Bar",
    category: "Inputs & Search Bars",
    description:
      "Minimalist command palette search box with integrated keyboard shortcut indicator.",
    copiesCount: 350,
    component: <BentoSearchShortcut />,
    code: `<div className="w-72 bg-slate-900 border border-slate-800 rounded-2xl px-4 py-2.5 flex items-center justify-between text-xs"><input type="text" placeholder="Quick search..." className="bg-transparent text-slate-200 focus:outline-none w-full" /><span className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded-lg text-[10px]">⌘K</span></div>`,
  },
  {
    id: "input-clay-tags",
    title: "Claymorphism Tag Chip Input",
    category: "Inputs & Search Bars",
    description:
      "Soft volumetric matte tactile container featuring interactive tag chips.",
    copiesCount: 215,
    component: <ClayTagInput />,
    code: `<div className="w-72 p-2 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] flex flex-wrap gap-1.5"><span className="px-2.5 py-1 bg-indigo-600/30 text-indigo-300 text-[11px] font-bold rounded-xl">React</span><input type="text" placeholder="Add tag..." className="bg-transparent text-xs text-slate-300 focus:outline-none px-2 py-1" /></div>`,
  },
  {
    id: "input-neon-search",
    title: "Neon Glow Search Input",
    category: "Inputs & Search Bars",
    description:
      "Cyberpunk search bar featuring dynamic border glow and focus animation.",
    copiesCount: 310,
    component: <NeonInputSearch />,
    code: `<motion.div className="relative w-72 bg-slate-950 border rounded-xl px-4 py-2 flex items-center gap-2 font-baloo text-xs"><span className="text-cyan-400">&gt;</span><input type="text" placeholder="SEARCH_DATABASE..." className="bg-transparent text-slate-200 focus:outline-none w-full" /></motion.div>`,
  },
  {
    id: "input-command-console",
    title: "Command Console Input",
    category: "Inputs & Search Bars",
    description:
      "High-tech terminal style command input with a blinking neon cursor block.",
    copiesCount: 275,
    component: <CommandConsoleInput />,
    code: `<div className="relative w-72 bg-slate-950 border border-indigo-500/40 rounded-xl px-4 py-2 flex items-center justify-between font-baloo text-xs"><input type="text" placeholder="EXECUTE_COMMAND..." className="bg-transparent text-indigo-300 focus:outline-none w-full" /><span className="w-2 h-4 bg-indigo-500 animate-pulse" /></div>`,
  },
];
