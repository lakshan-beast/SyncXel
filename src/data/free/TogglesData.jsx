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
    id: "toggle-enterprise-sync",
    title: "Enterprise Cloud Auto-Sync Light Toggle",
    category: "Toggles & Switches",
    description:
      "Clean light-mode interactive switch featuring smooth spring-physics motion, dynamic status text indicators, professional white card styling, and indigo accents.",
    copiesCount: 340,

    // Hyper-realistic use cases
    useCases: [
      "SaaS System Preferences & Settings Dashboards: Positioned in system configuration panels for 'Cloud Auto-Sync' or 'Background Data Backup' toggles.",
      "Enterprise Data Platforms: Used for enabling real-time data telemetry pipelines and live multi-device synchronization triggers.",
    ],

    component: <CyberPowerSwitch />,

    code: `import { motion } from "framer-motion";\nimport { useState } from "react";\nimport { FiCloud, FiCheck } from "react-icons/fi";\n\nexport default function EnterpriseToggle() {\n  const [isOn, setIsOn] = useState(false);\n\n  return (\n    <div className="flex items-center justify-between w-72 p-4 bg-white border border-slate-200/90 rounded-2xl font-baloo shadow-[0_10px_30px_rgba(100,116,139,0.08)] select-none">\n      <div className="flex items-center gap-3">\n        <div className={\`w-8 h-8 rounded-xl flex items-center justify-center transition-colors \${isOn ? "bg-indigo-50 text-indigo-600" : "bg-slate-100 text-slate-500"}\`}>\n          <FiCloud className="w-4 h-4" />\n        </div>\n        <div>\n          <p className="text-xs font-bold text-slate-800">Cloud Auto-Sync</p>\n          <p className="text-[10px] text-slate-400 font-medium">\n            {isOn ? "Active & Syncing" : "Paused"}\n          </p>\n        </div>\n      </div>\n      <div\n        onClick={() => setIsOn(!isOn)}\n        className={\`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors \${\n          isOn ? "bg-indigo-600 shadow-[0_0_12px_rgba(99,102,241,0.35)]" : "bg-slate-200"\n        }\`}\n      >\n        <motion.div\n          animate={{ x: isOn ? 28 : 0 }}\n          transition={{ type: "spring", stiffness: 500, damping: 30 }}\n          className="w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center"\n        >\n          {isOn && <FiCheck className="w-3 h-3 text-indigo-600" />}\n        </motion.div>\n      </div>\n    </div>\n  );\n}`,
  },

  {
    id: "toggle-quantum-mode",
    title: "Quantum Mode Switcher",
    category: "Toggles & Switches",
    description:
      "Clean light-mode state switcher toggle featuring crisp typography, animated activity icons, professional white card dimensions, and smooth indigo active feedback.",
    copiesCount: 240,

    // Hyper-realistic use cases
    useCases: [
      "AI & Cloud Server Management Dashboards: Positioned in system configuration panels for toggling 'QUANTUM_SYNC' between ONLINE and STANDBY states.",
      "Enterprise Telemetry & IoT Control Screens: Used for switching device connection clusters and background synchronization nodes.",
    ],

    component: <QuantumModeToggle />,

    code: `import { motion } from "framer-motion";\nimport { useState } from "react";\nimport { FiActivity } from "react-icons/fi";\n\nexport default function QuantumModeToggle() {\n  const [active, setActive] = useState(true);\n\n  return (\n    <div className="flex items-center justify-between w-72 p-3.5 bg-white border border-slate-200/90 rounded-2xl font-baloo shadow-[0_10px_30px_rgba(100,116,139,0.08)] select-none">\n      <div className="flex items-center gap-2.5">\n        <FiActivity className={\`w-4 h-4 transition-colors \${active ? "text-indigo-600 animate-pulse" : "text-slate-400"}\`} />\n        <span className="text-xs text-slate-700 font-bold tracking-wider">QUANTUM_SYNC</span>\n      </div>\n      <motion.button\n        whileTap={{ scale: 0.95 }}\n        onClick={() => setActive(!active)}\n        className={\`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer \${\n          active\n            ? "bg-indigo-600 text-white shadow-[0_4px_15px_rgba(99,102,241,0.35)]"\n            : "bg-slate-100 text-slate-500 border border-slate-200 hover:bg-slate-200/60"\n        }\`}\n      >\n        {active ? "ONLINE" : "STANDBY"}\n      </motion.button>\n    </div>\n  );\n}`,
  },

  {
    id: "toggle-cyber-neural",
    title: "Cyberpunk Neural Engine Toggle",
    category: "Toggles & Switches",
    description:
      "High-tech neural state switcher featuring glowing cyan indicators, GPU acceleration status labels, Framer Motion spring physics, and obsidian dark container styling.",
    copiesCount: 275,

    // Hyper-realistic use cases
    useCases: [
      "AI Model Development & LLM Dashboards: Positioned in advanced configuration settings for toggling 'NEURAL_ENGINE' between GPU accelerated and CPU fallback modes.",
      "Developer Copilot & Cloud IDE Platforms: Used for enabling real-time neural code completion and AI telemetry nodes.",
    ],

    component: <CyberNeuralToggle />,

    code: `import { useState } from "react";\nimport { motion } from "framer-motion";\nimport { FiCpu } from "react-icons/fi";\n\nexport default function CyberNeuralToggle() {\n  const [isOn, setIsOn] = useState(true);\n\n  return (\n    <div\n      onClick={() => setIsOn(!isOn)}\n      className="flex items-center justify-between w-80 p-4 bg-slate-950 border border-cyan-500/40 hover:border-cyan-400 rounded-2xl font-baloo cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all select-none group"\n    >\n      <div className="flex items-center gap-3">\n        <div className={\`w-8 h-8 rounded-xl flex items-center justify-center transition-colors \${isOn ? "bg-cyan-500/20 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]" : "bg-slate-900 text-slate-500"}\`}>\n          <FiCpu className="w-4 h-4" />\n        </div>\n        <div>\n          <span className="text-xs text-cyan-300 font-bold tracking-wider block">NEURAL_ENGINE</span>\n          <span className="text-[10px] text-slate-400 font-medium">\n            {isOn ? "Active (GPU Accelerated)" : "Standby (CPU Mode)"}\n          </span>\n        </div>\n      </div>\n      <div\n        className={\`w-12 h-6 flex items-center rounded-full p-1 border border-cyan-500/50 \${is\n          isOn ? "bg-cyan-950/80 justify-end shadow-[inset_0_0_8px_rgba(34,211,238,0.3)]" : "bg-slate-900 justify-start"\n        }\`}\n      >\n        <motion.div\n          layout\n          transition={{ type: "spring", stiffness: 700, damping: 30 }}\n          className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]"\n        />\n      </div>\n    </div>\n  );\n}`,
  },

  {
    id: "toggle-brutal-pop",
    title: "Neo-Brutalism Beta Features Toggle",
    category: "Toggles & Switches",
    description:
      "High-contrast geometric brutalist toggle featuring hard directional drop-shadows, bold yellow-pink styling, standard user setting labels, and spring physics.",
    copiesCount: 310,

    // Hyper-realistic use cases
    useCases: [
      "SaaS User Settings & Preferences: Positioned in account configuration panels for opting into 'Beta Features' or new experimental UI updates.",
      "Developer Portals & Creator Tools: Used in dashboard feature flag toggles for early-access system pipelines.",
    ],

    component: <BrutalPopToggle />,

    code: `import { useState } from "react";\nimport { motion } from "framer-motion";\nimport { FiZap } from "react-icons/fi";\n\nexport default function BrutalPopToggle() {\n  const [isOn, setIsOn] = useState(false);\n\n  return (\n    <div\n      onClick={() => setIsOn(!isOn)}\n      className="flex items-center justify-between w-72 p-3.5 bg-yellow-300 border-2 border-slate-950 rounded-2xl font-baloo cursor-pointer shadow-[4px_4px_0px_0px_#020617] hover:shadow-[6px_6px_0px_0px_#020617] transition-all select-none group"\n    >\n      <div className="flex items-center gap-2.5">\n        <div className="w-7 h-7 bg-slate-950 rounded-lg flex items-center justify-center text-yellow-300">\n          <FiZap className="w-3.5 h-3.5" />\n        </div>\n        <div>\n          <span className="text-xs text-slate-950 font-black block">Beta Features</span>\n          <span className="text-[10px] text-slate-800 font-bold">\n            {isOn ? "Active & Opted-In" : "Disabled"}\n          </span>\n        </div>\n      </div>\n      <div\n        className={\`w-12 h-6 flex items-center rounded-lg p-0.5 border-2 border-slate-950 \${\n          isOn ? "bg-pink-500 justify-end" : "bg-white justify-start"\n        }\`}\n      >\n        <motion.div\n          layout\n          transition={{ type: "spring", stiffness: 700, damping: 30 }}\n          className="w-4 h-4 rounded bg-slate-950 shadow-sm"\n        />\n      </div>\n    </div>\n  );\n}`,
  },

  // {
  //   id: "toggle-brutal-hard",
  //   title: "Neo-Brutalism Hard Toggle",
  //   category: "Toggles & Switches",
  //   description:
  //     "Vibrant pink brutalist switch container with bold sharp borders and drop-shadows.",
  //   copiesCount: 260,
  //   component: <BrutalHardSwitch />,
  //   code: `<div className="flex items-center justify-between w-64 p-3 bg-pink-400 border-2 border-slate-950 rounded-xl font-baloo shadow-[3px_3px_0px_0px_#020617]"><span className="text-xs font-black">HARD_TOGGLE</span></div>`,
  // },
  // {
  //   id: "toggle-glass-frost",
  //   title: "Glassmorphism Frost Toggle",
  //   category: "Toggles & Switches",
  //   description:
  //     "Frosted translucent glass overlay switch built with deep backdrop blur.",
  //   copiesCount: 345,
  //   component: <GlassFrostToggle />,
  //   code: `<div className="flex items-center justify-between w-64 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo text-white"><span className="text-xs font-bold">FROST_TOGGLE</span></div>`,
  // },
  {
    id: "toggle-glass-glow",
    title: "Glassmorphism Ambient Glow Mode Toggle",
    category: "Toggles & Switches",
    description:
      "Translucent glass switch featuring high-end backdrop blur, indigo ambient aura lighting, sparkle icon accents, and fully responsive spring-physics sliding motion.",
    copiesCount: 290,

    // Hyper-realistic use cases
    useCases: [
      "Creative Portfolio & Design Studio Sites: Positioned in display settings or theme customizers for toggling 'Ambient Glow Mode' or visual interface enhancements.",
      "SaaS Web Application Settings: Used in modern dashboard appearance menus for activating high-fidelity glassmorphism layers and neon auras.",
    ],

    component: <GlassGlowToggle />,

    code: `import { useState } from "react";\nimport { motion } from "framer-motion";\nimport { HiSparkles } from "react-icons/hi";\n\nexport default function GlassGlowToggle() {\n  const [isOn, setIsOn] = useState(true);\n\n  return (\n    <div\n      onClick={() => setIsOn(!isOn)}\n      className="flex items-center justify-between w-80 p-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl font-baloo cursor-pointer shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:border-white/40 transition-all select-none group"\n    >\n      <div className="flex items-center gap-3">\n        <div className={\`w-8 h-8 rounded-xl flex items-center justify-center transition-colors \${isOn ? "bg-indigo-500/20 text-indigo-300 shadow-[0_0_12px_rgba(99,102,241,0.4)]" : "bg-white/5 text-white/50"}\`}>\n          <HiSparkles className="w-4 h-4" />\n        </div>\n        <div>\n          <span className="text-xs text-white font-bold tracking-wide block">Ambient Glow Mode</span>\n          <span className="text-[10px] text-indigo-200/70 font-medium">\n            {isOn ? "Active & Enhanced" : "Standard UI"}\n          </span>\n        </div>\n      </div>\n      <div\n        className={\`w-12 h-6 flex items-center rounded-full p-1 border border-white/25 \${isOn ? "bg-indigo-600/40 justify-end shadow-[inset_0_0_10px_rgba(99,102,241,0.5)]" : "bg-white/5 justify-start"}\`}\n      >\n        <motion.div\n          layout\n          transition={{ type: "spring", stiffness: 700, damping: 30 }}\n          className="w-4 h-4 rounded-full bg-indigo-200 shadow-[0_0_10px_#818cf8]"\n        />\n      </div>\n    </div>\n  );\n}`,
  },
  // {
  //   id: "toggle-bento-grid",
  //   title: "Bento Grid Cluster Switch",
  //   category: "Toggles & Switches",
  //   description:
  //     "Clean minimalist bento dashboard state toggle container layout.",
  //   copiesCount: 320,
  //   component: <BentoGridToggle />,
  //   code: `<div className="flex items-center justify-between w-64 p-3 bg-slate-900 border border-slate-800 rounded-2xl font-baloo text-white"><span className="text-xs font-bold">BENTO_CLUSTER</span></div>`,
  // },
  {
    id: "toggle-bento-sync",
    title: "Bento Cloud Database Sync Switch",
    category: "Toggles & Switches",
    description:
      "Minimalist bento module sync toggle featuring sleek dark obsidian styling, emerald active indicators, database icon accents, and smooth spring-physics motion.",
    copiesCount: 285,

    // Hyper-realistic use cases
    useCases: [
      "Cloud Database & Backend Consoles: Positioned in database configuration panels for toggling 'Cloud Database Sync' and real-time streaming states.",
      "SaaS Analytics & Telemetry Dashboards: Used for enabling live data ingestion pipelines and background synchronization modules.",
    ],

    component: <BentoSyncSwitch />,

    code: `import { useState } from "react";\nimport { motion } from "framer-motion";\nimport { FiDatabase } from "react-icons/fi";\n\nexport default function BentoSyncSwitch() {\n  const [isOn, setIsOn] = useState(true);\n\n  return (\n    <div\n      onClick={() => setIsOn(!isOn)}\n      className="flex items-center justify-between w-80 p-4 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl font-baloo cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition-all select-none group"\n    >\n      <div className="flex items-center gap-3">\n        <div className={\`w-8 h-8 rounded-xl flex items-center justify-center transition-colors \${isOn ? "bg-emerald-500/15 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]" : "bg-slate-800 text-slate-500"}\`}>\n          <FiDatabase className="w-4 h-4" />\n        </div>\n        <div>\n          <span className="text-xs text-slate-200 font-bold tracking-wide block">Cloud Database Sync</span>\n          <span className="text-[10px] text-slate-400 font-medium">\n            {isOn ? "Syncing Live Data" : "Paused & Offline"}\n          </span>\n        </div>\n      </div>\n      <div\n        className={\`w-12 h-6 flex items-center rounded-xl p-1 border border-slate-800 bg-slate-950 \${isOn ? "justify-end shadow-[inset_0_0_8px_rgba(16,185,129,0.3)]" : "justify-start"}\`}\n      >\n        <motion.div\n          layout\n          transition={{ type: "spring", stiffness: 700, damping: 30 }}\n          className="w-4 h-4 rounded-lg bg-emerald-500 shadow-[0_0_10px_#10b981]"\n        />\n      </div>\n    </div>\n  );\n}`,
  },
  // {
  //   id: "toggle-clay-soft",
  //   title: "Claymorphism Soft Switch",
  //   category: "Toggles & Switches",
  //   description:
  //     "Soft tactile 3D matte volumetric state switch with diffuse shadows.",
  //   copiesCount: 255,
  //   component: <ClaySoftToggle />,
  //   code: `<div className="flex items-center justify-between w-64 p-3 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617] border border-slate-800 text-white"><span className="text-xs font-bold">CLAY_SWITCH</span></div>`,
  // },
  {
    id: "toggle-clay-pill",
    title: "Claymorphism Volumetric Rendering Toggle",
    category: "Toggles & Switches",
    description:
      "Smooth pill-shaped tactile volumetric toggle component featuring tactile claymorphism shadows, inner depth, cyan accent glow, and standard professional settings labels.",
    copiesCount: 270,

    // Hyper-realistic use cases
    useCases: [
      "3D Design & WebGL Rendering Platforms: Positioned in viewport settings for toggling 'Volumetric Rendering' and hardware-accelerated shaders.",
      "Engineering & CAD Dashboard Configurations: Used in real-time visual simulation controls and spatial rendering menus.",
    ],

    component: <ClayPillToggle />,

    code: `import { useState } from "react";\nimport { motion } from "framer-motion";\nimport { FiBox } from "react-icons/fi";\n\nexport default function ClayPillToggle() {\n  const [isOn, setIsOn] = useState(true);\n\n  return (\n    <div\n      onClick={() => setIsOn(!isOn)}\n      className="flex items-center justify-between w-80 p-4 bg-slate-900 rounded-2xl shadow-[6px_6px_14px_#020617,-6px_-6px_14px_#1e293b] border border-slate-800 hover:border-slate-700 font-baloo cursor-pointer transition-all select-none group"\n    >\n      <div className="flex items-center gap-3">\n        <div className={\`w-8 h-8 rounded-xl flex items-center justify-center transition-colors \${isOn ? "bg-cyan-500/20 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.3)]" : "bg-slate-800 text-slate-500"}\`}>\n          <FiBox className="w-4 h-4" />\n        </div>\n        <div>\n          <span className="text-xs text-slate-200 font-bold tracking-wide block">Volumetric Rendering</span>\n          <span className="text-[10px] text-cyan-300/80 font-medium">\n            {isOn ? "WebGL 3D Accelerated" : "Standard 2D Mode"}\n          </span>\n        </div>\n      </div>\n      <div\n        className={\`w-12 h-6 flex items-center rounded-full p-1 bg-slate-950 shadow-inner border border-slate-800 \${isOn ? "justify-end bg-cyan-950/40" : "justify-start"}\`}\n      >\n        <motion.div\n          layout\n          transition={{ type: "spring", stiffness: 700, damping: 30 }}\n          className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"\n        />\n      </div>\n    </div>\n  );\n}`,
  },
  // {
  //   id: "toggle-retro-terminal",
  //   title: "Retro 90s Terminal Toggle",
  //   category: "Toggles & Switches",
  //   description:
  //     "Green phosphor monospaced terminal environment state switch console.",
  //   copiesCount: 295,
  //   component: <RetroTerminalToggle />,
  //   code: `<div className="flex items-center justify-between w-64 p-3 bg-black border-2 border-green-500 rounded font-mono text-green-400"><span className="text-xs">SYS_TOGGLE</span></div>`,
  // },
  {
    id: "toggle-retro-crt",
    title: "Retro CRT Phosphor Display Switch",
    category: "Toggles & Switches",
    description:
      "Nostalgic glowing 90s CRT monitor power toggle featuring authentic phosphor green glow, terminal icon accents, scanline indicators, and spring-physics motion.",
    copiesCount: 265,

    // Hyper-realistic use cases
    useCases: [
      "Developer Portals & Hacker Themes: Positioned in theme customizers for toggling 'Terminal CRT Mode' or vintage scanline overlays.",
      "Retro Gaming & Terminal Emulation Dashboards: Used for activating legacy hardware simulations and phosphor display effects.",
    ],

    component: <RetroCrtSwitch />,

    code: `import { useState } from "react";\nimport { motion } from "framer-motion";\nimport { FiTerminal } from "react-icons/fi";\n\nexport default function RetroCrtSwitch() {\n  const [isOn, setIsOn] = useState(true);\n\n  return (\n    <div\n      onClick={() => setIsOn(!isOn)}\n      className="flex items-center justify-between w-80 p-4 bg-black border-2 border-green-500 rounded-xl font-mono cursor-pointer shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:border-green-400 transition-all select-none group"\n    >\n      <div className="flex items-center gap-3">\n        <div className={\`w-8 h-8 rounded-lg flex items-center justify-center transition-colors \${isOn ? "bg-green-500/20 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.4)]" : "bg-neutral-900 text-neutral-600"}\`}>\n          <FiTerminal className="w-4 h-4" />\n        </div>\n        <div>\n          <span className="text-xs text-green-300 font-bold tracking-wider block">Terminal CRT Mode</span>\n          <span className="text-[10px] text-green-500/70">\n            {isOn ? "Phosphor Scanlines Active" : "Standard Display"}\n          </span>\n        </div>\n      </div>\n      <div\n        className={\`w-12 h-6 flex items-center rounded p-0.5 border border-green-500 \${isOn ? "bg-green-950/80 justify-end shadow-[inset_0_0_8px_rgba(34,197,94,0.4)]" : "bg-black justify-start"}\`}\n      >\n        <motion.div\n          layout\n          transition={{ type: "spring", stiffness: 700, damping: 30 }}\n          className="w-4 h-4 rounded bg-green-400 shadow-[0_0_10px_#4ade80]"\n        />\n      </div>\n    </div>\n  );\n}`,
  },
];
