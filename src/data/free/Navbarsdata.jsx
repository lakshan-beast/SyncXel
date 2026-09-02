import CyberGlassNavbar from "../../library/free/navbars/CyberGlassNavbar";
import FloatingTerminalNavbar from "../../library/free/navbars/FloatingTerminalNavbar";

import CyberDropdownPreview from "../../library/free/navbars/CyberDropdownPreview";
import CyberNavPillPreview from "../../library/free/navbars/CyberNavPillPreview";

export const navbarsData = [
  {
    id: "nav-cyber-glass",
    title: "Cyber Glassmorphism Navbar",
    category: "Navbars & Dropdowns",
    description:
      "Full-width sticky navigation bar with backdrop blur, smooth animated active indicators, and glowing call-to-action.",
    copiesCount: 450,
    component: <CyberGlassNavbar />,
    code: `<nav className="w-full bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/30 px-6 py-4 flex items-center justify-between sticky top-0 z-50">...</nav>`,
  },
  {
    id: "nav-floating-terminal",
    title: "Floating Terminal Navbar",
    category: "Navbars & Dropdowns",
    description:
      "Pill-shaped floating navigation menu with terminal-style text, system status indicator, and spring entrance animation.",
    copiesCount: 385,
    component: <FloatingTerminalNavbar />,
    code: `<motion.nav initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-full max-w-3xl bg-slate-900 border border-indigo-500/40 rounded-2xl px-5 py-3 flex items-center justify-between">...</motion.nav>`,
  },

  {
    id: "nav-cyber-dropdown",
    title: "Compact Cyber Dropdown Menu",
    category: "Navbars & Dropdowns",
    description:
      "Compact interactive dropdown component built for card previews and modular layout usage.",
    copiesCount: 310,
    component: <CyberDropdownPreview />,
    code: `<motion.div className="relative font-mono text-xs"><button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 bg-slate-950 border border-cyan-500/40 text-cyan-300 rounded-xl">SYSTEM_MODULES</button></motion.div>`,
  },
  {
    id: "nav-pill-switcher",
    title: "Floating Nav Pill Switcher",
    category: "Navbars & Dropdowns",
    description:
      "Sleek animated navigation pill container with smooth layout background transitions.",
    copiesCount: 290,
    component: <CyberNavPillPreview />,
    code: `<div className="flex items-center gap-1 bg-slate-950 p-1.5 border border-indigo-500/40 rounded-xl font-mono text-xs"><button className="px-3 py-1.5 rounded-lg">CORE</button></div>`,
  },
];
