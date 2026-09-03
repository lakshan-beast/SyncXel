// import CyberPowerSwitch from "../../library/free/toggles/CyberPowerSwitch";
// import QuantumModeToggle from "../../library/free/toggles/QuantumModeToggle";

// export const togglesData = [
//   {
//     id: "toggle-cyber-power",
//     title: "Cyberpunk Power Switch",
//     category: "Toggles & Switches",
//     description: "Interactive glowing sliding power switch built with Framer Motion spring physics and font-baloo typography.",
//     copiesCount: 290,
//     component: <CyberPowerSwitch />,
//     code: `<div className="flex items-center justify-between w-64 p-3 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo"><span className="text-xs text-cyan-300 font-bold">SYS_POWER_GRID</span></div>`,
//   },
//   {
//     id: "toggle-quantum-mode",
//     title: "Quantum Mode Switcher",
//     category: "Toggles & Switches",
//     description: "Futuristic state switcher toggle featuring neon active shadows and clean card preview dimensions.",
//     copiesCount: 240,
//     component: <QuantumModeToggle />,
//     code: `<div className="flex items-center justify-between w-64 p-3 bg-slate-950 border border-indigo-500/40 rounded-xl font-baloo"><span className="text-xs text-indigo-300 font-bold">QUANTUM_SYNC</span></div>`,
//   },
// ];

import CyberPowerSwitch from "../../library/free/toggles/CyberPowerSwitch";
import QuantumModeToggle from "../../library/free/toggles/QuantumModeToggle";
import CyberNeuralToggle from "../../library/free/toggles/CyberNeuralToggle";
import BrutalPopToggle from "../../library/free/toggles/BrutalPopToggle";
import BrutalHardSwitch from "../../library/free/toggles/BrutalHardSwitch";
import GlassFrostToggle from "../../library/free/toggles/GlassFrostToggle";
import GlassGlowToggle from "../../library/free/toggles/GlassGlowToggle";
import BentoGridToggle from "../../library/free/toggles/BentoGridToggle";
import BentoSyncSwitch from "../../library/free/toggles/BentoSyncSwitch";
import ClaySoftToggle from "../../library/free/toggles/ClaySoftToggle";
import ClayPillToggle from "../../library/free/toggles/ClayPillToggle";
import RetroTerminalToggle from "../../library/free/toggles/RetroTerminalToggle";
import RetroCrtSwitch from "../../library/free/toggles/RetroCrtSwitch";

export const togglesData = [
  {
    id: "toggle-cyber-power",
    title: "Cyberpunk Power Switch",
    category: "Toggles & Switches",
    description:
      "Interactive glowing sliding power switch built with Framer Motion spring physics and font-baloo typography.",
    copiesCount: 290,
    component: <CyberPowerSwitch />,
    code: `<div className="flex items-center justify-between w-64 p-3 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo"><span className="text-xs text-cyan-300 font-bold">SYS_POWER_GRID</span></div>`,
  },
  {
    id: "toggle-quantum-mode",
    title: "Quantum Mode Switcher",
    category: "Toggles & Switches",
    description:
      "Futuristic state switcher toggle featuring neon active shadows and clean card preview dimensions.",
    copiesCount: 240,
    component: <QuantumModeToggle />,
    code: `<div className="flex items-center justify-between w-64 p-3 bg-slate-950 border border-indigo-500/40 rounded-xl font-baloo"><span className="text-xs text-indigo-300 font-bold">QUANTUM_SYNC</span></div>`,
  },
  {
    id: "toggle-cyber-neural",
    title: "Cyberpunk Neural Link Toggle",
    category: "Toggles & Switches",
    description:
      "Glowing cyan neural state switcher with framer-motion spring sliding physics.",
    copiesCount: 275,
    component: <CyberNeuralToggle />,
    code: `<div className="flex items-center justify-between w-64 p-3 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo"><span className="text-xs text-cyan-300 font-bold">NEURAL_LINK</span></div>`,
  },
  {
    id: "toggle-brutal-pop",
    title: "Neo-Brutalism Pop Switch",
    category: "Toggles & Switches",
    description:
      "High-contrast geometric brutalist toggle featuring hard directional drop-shadows.",
    copiesCount: 310,
    component: <BrutalPopToggle />,
    code: `<div className="flex items-center justify-between w-64 p-3 bg-yellow-300 border-2 border-slate-950 rounded-xl font-baloo shadow-[3px_3px_0px_0px_#020617]"><span className="text-xs font-black">BRUTAL_SWITCH</span></div>`,
  },
  {
    id: "toggle-brutal-hard",
    title: "Neo-Brutalism Hard Toggle",
    category: "Toggles & Switches",
    description:
      "Vibrant pink brutalist switch container with bold sharp borders and drop-shadows.",
    copiesCount: 260,
    component: <BrutalHardSwitch />,
    code: `<div className="flex items-center justify-between w-64 p-3 bg-pink-400 border-2 border-slate-950 rounded-xl font-baloo shadow-[3px_3px_0px_0px_#020617]"><span className="text-xs font-black">HARD_TOGGLE</span></div>`,
  },
  {
    id: "toggle-glass-frost",
    title: "Glassmorphism Frost Toggle",
    category: "Toggles & Switches",
    description:
      "Frosted translucent glass overlay switch built with deep backdrop blur.",
    copiesCount: 345,
    component: <GlassFrostToggle />,
    code: `<div className="flex items-center justify-between w-64 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo text-white"><span className="text-xs font-bold">FROST_TOGGLE</span></div>`,
  },
  {
    id: "toggle-glass-glow",
    title: "Glassmorphism Glow Mode",
    category: "Toggles & Switches",
    description:
      "Translucent glass switch highlighted with indigo ambient aura lighting.",
    copiesCount: 290,
    component: <GlassGlowToggle />,
    code: `<div className="flex items-center justify-between w-64 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo text-white"><span className="text-xs font-bold">GLOW_MODE</span></div>`,
  },
  {
    id: "toggle-bento-grid",
    title: "Bento Grid Cluster Switch",
    category: "Toggles & Switches",
    description:
      "Clean minimalist bento dashboard state toggle container layout.",
    copiesCount: 320,
    component: <BentoGridToggle />,
    code: `<div className="flex items-center justify-between w-64 p-3 bg-slate-900 border border-slate-800 rounded-2xl font-baloo text-white"><span className="text-xs font-bold">BENTO_CLUSTER</span></div>`,
  },
  {
    id: "toggle-bento-sync",
    title: "Bento Sync Status Switch",
    category: "Toggles & Switches",
    description:
      "Minimalist bento module sync toggle with emerald active indicator.",
    copiesCount: 285,
    component: <BentoSyncSwitch />,
    code: `<div className="flex items-center justify-between w-64 p-3 bg-slate-900 border border-slate-800 rounded-2xl font-baloo text-white"><span className="text-xs font-bold">SYNC_STATUS</span></div>`,
  },
  {
    id: "toggle-clay-soft",
    title: "Claymorphism Soft Switch",
    category: "Toggles & Switches",
    description:
      "Soft tactile 3D matte volumetric state switch with diffuse shadows.",
    copiesCount: 255,
    component: <ClaySoftToggle />,
    code: `<div className="flex items-center justify-between w-64 p-3 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617] border border-slate-800 text-white"><span className="text-xs font-bold">CLAY_SWITCH</span></div>`,
  },
  {
    id: "toggle-clay-pill",
    title: "Claymorphism Pill Toggle",
    category: "Toggles & Switches",
    description:
      "Smooth pill-shaped tactile volumetric toggle component with inner shadows.",
    copiesCount: 270,
    component: <ClayPillToggle />,
    code: `<div className="flex items-center justify-between w-64 p-3 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617] border border-slate-800 text-white"><span className="text-xs font-bold">VOLUMETRIC_MODE</span></div>`,
  },
  {
    id: "toggle-retro-terminal",
    title: "Retro 90s Terminal Toggle",
    category: "Toggles & Switches",
    description:
      "Green phosphor monospaced terminal environment state switch console.",
    copiesCount: 295,
    component: <RetroTerminalToggle />,
    code: `<div className="flex items-center justify-between w-64 p-3 bg-black border-2 border-green-500 rounded font-mono text-green-400"><span className="text-xs">SYS_TOGGLE</span></div>`,
  },
  {
    id: "toggle-retro-crt",
    title: "Retro CRT Power Switch",
    category: "Toggles & Switches",
    description:
      "Nostalgic glowing 90s CRT monitor power toggle with phosphor shadow effects.",
    copiesCount: 265,
    component: <RetroCrtSwitch />,
    code: `<div className="flex items-center justify-between w-64 p-3 bg-black border-2 border-green-500 rounded font-mono text-green-400"><span className="text-xs">CRT_POWER</span></div>`,
  },
];
