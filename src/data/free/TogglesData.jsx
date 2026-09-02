import CyberPowerSwitch from "../../library/free/toggles/CyberPowerSwitch";
import QuantumModeToggle from "../../library/free/toggles/QuantumModeToggle";

export const togglesData = [
  {
    id: "toggle-cyber-power",
    title: "Cyberpunk Power Switch",
    category: "Toggles & Switches",
    description: "Interactive glowing sliding power switch built with Framer Motion spring physics and font-baloo typography.",
    copiesCount: 290,
    component: <CyberPowerSwitch />,
    code: `<div className="flex items-center justify-between w-64 p-3 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo"><span className="text-xs text-cyan-300 font-bold">SYS_POWER_GRID</span></div>`,
  },
  {
    id: "toggle-quantum-mode",
    title: "Quantum Mode Switcher",
    category: "Toggles & Switches",
    description: "Futuristic state switcher toggle featuring neon active shadows and clean card preview dimensions.",
    copiesCount: 240,
    component: <QuantumModeToggle />,
    code: `<div className="flex items-center justify-between w-64 p-3 bg-slate-950 border border-indigo-500/40 rounded-xl font-baloo"><span className="text-xs text-indigo-300 font-bold">QUANTUM_SYNC</span></div>`,
  },
];