import EncryptedVaultBadge from "../../library/free/badges/EncryptedVaultBadge";
import CyberSecurityBadge from "../../library/free/badges/CyberSecurityBadge";

import BrutalAlertBadge from "../../library/free/badges/BrutalAlertBadge";
import GlassNeonBadge from "../../library/free/badges/GlassNeonBadge";
import BentoStatusBadge from "../../library/free/badges/BentoStatusBadge";
import BentoClusterBadge from "../../library/free/badges/BentoClusterBadge";
import ClaySoftBadge from "../../library/free/badges/ClaySoftBadge";
import ClayPillBadge from "../../library/free/badges/ClayPillBadge";
import RetroCrtBadge from "../../library/free/badges/RetroCrtBadge";

import RetroTerminalBadge from "../../library/free/badges/RetroTerminalBadge";
import BrutalRankBadge from "../../library/free/badges/BrutalRankBadge";
import GlassFrostBadge from "../../library/free/badges/GlassFrostBadge";

// import LiveStatusBadge2 from "../../library/free/badges/LiveStatusBadge2";
// import CyberSecurityBadge2 from "../../library/free/badges/CyberSecurityBadge2";

export const badgesData = [
  {
    id: "badge-encrypted-vault",
    title: "Encrypted Vault Status Badge",
    category: "Badges & Status Indicators",
    description:
      "Secure fintech status indicator featuring a pulsing indigo core and clean white container layout for encrypted gateway sessions.",
    copiesCount: 312,

    useCases: [
      "Fintech Vault Panels: Positioned inside payment gateway headers to indicate active TLS 1.3 encryption.",
      "SaaS Security Settings: Used in compliance and API key management screens.",
    ],

    component: <EncryptedVaultBadge />,

    code: `import { motion } from "framer-motion";\n\nexport default function EncryptedVaultBadge() {\n  return (\n    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white border border-slate-200 rounded-full font-baloo text-xs font-semibold text-slate-700 shadow-2xs select-none">\n      <div className="relative flex items-center justify-center w-2.5 h-2.5">\n        <motion.span\n          animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}\n          transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}\n          className="absolute inset-0 rounded-full bg-indigo-500/30"\n        />\n        <span className="w-2 h-2 rounded-full bg-indigo-600" />\n      </div>\n      <span className="tracking-wide">ENCRYPTED_VAULT // TLS 1.3</span>\n    </div>\n  );\n}`,
  },

  {
    id: "badge-neural-sync",
    title: "AI Neural Sync Status Badge",
    category: "Badges & Status Indicators",
    description:
      "High-end telemetry badge featuring a dual-layer pulsing neon core and split monospace typography, built for modern AI and LLM workflow dashboards.",
    copiesCount: 342,

    useCases: [
      "AI SaaS Platforms: Positioned in LLM playground headers or prompt streaming panels to indicate real-time neural connection.",
      "Data Intelligence Portals: Used in analytics cards to show active background model syncing status.",
    ],

    component: <BrutalAlertBadge />,

    code: `import { motion } from "framer-motion";\n\nexport default function BrutalAlertBadge() {\n  return (\n    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white border border-slate-200/80 rounded-full font-baloo text-xs font-semibold text-slate-800 shadow-xs select-none">\n      <div className="relative flex items-center justify-center w-2.5 h-2.5">\n        <motion.div\n          animate={{ scale: [1, 2], opacity: [0.5, 0] }}\n          transition={{ repeat: Infinity, duration: 1.6, ease: "easeOut" }}\n          className="absolute inset-0 rounded-full bg-cyan-400/40"\n        />\n        <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />\n      </div>\n      <div className="flex items-center gap-1.5 font-mono text-[11px]">\n        <span className="text-slate-900 font-bold tracking-wide">AI_SYNC</span>\n        <span className="text-slate-300">/</span>\n        <span className="text-emerald-600 font-semibold">ACTIVE</span>\n      </div>\n    </div>\n  );\n}`,
  },
  
  {
    id: "badge-glass-neon",
    title: "Glassmorphism Neon Sync",
    category: "Badges & Status Indicators",
    description:
      "Translucent glass badge highlighted with ambient indigo lighting.",
    copiesCount: 295,
    component: <GlassNeonBadge />,
    code: `<div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo text-[11px] text-indigo-200">NEON SYNC</div>`,
  },
  {
    id: "badge-bento-status",
    title: "Bento Grid Status Badge",
    category: "Badges & Status Indicators",
    description:
      "Clean minimalist bento status indicator with emerald active dot.",
    copiesCount: 310,
    component: <BentoStatusBadge />,
    code: `<div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-xl font-baloo text-[11px] text-slate-200">BENTO_ONLINE</div>`,
  },
  {
    id: "badge-bento-cluster",
    title: "Bento Cluster Active Badge",
    category: "Badges & Status Indicators",
    description:
      "Minimalist bento module cluster badge with indigo accent indicator.",
    copiesCount: 265,
    component: <BentoClusterBadge />,
    code: `<div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-xl font-baloo text-[11px] text-slate-200">CLUSTER_ACTIVE</div>`,
  },
  {
    id: "badge-clay-soft",
    title: "Claymorphism Soft Node",
    category: "Badges & Status Indicators",
    description:
      "Soft tactile 3D matte volumetric status node with diffuse shadows.",
    copiesCount: 245,
    component: <ClaySoftBadge />,
    code: `<div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 rounded-xl shadow-[4px_4px_8px_#020617] border border-slate-800 font-baloo text-[11px] text-slate-300">CLAY_NODE</div>`,
  },
  {
    id: "badge-clay-pill",
    title: "Claymorphism Volumetric ID",
    category: "Badges & Status Indicators",
    description:
      "Smooth pill-shaped tactile volumetric badge with cyan accent dot.",
    copiesCount: 290,
    component: <ClayPillBadge />,
    code: `<div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 rounded-full shadow-[4px_4px_8px_#020617] border border-slate-800 font-baloo text-[11px] text-cyan-300">VOLUMETRIC_ID</div>`,
  },
  // {
  //   id: "badge-retro-terminal",
  //   title: "Retro Terminal Status Badge",
  //   category: "Badges & Status Indicators",
  //   description:
  //     "Green phosphor monospaced terminal environment status badge console.",
  //   copiesCount: 275,
  //   component: <RetroTerminalBadge />,
  //   code: `<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black border-2 border-green-500 rounded font-mono text-[11px] text-green-400">SYS_TERMINAL</div>`,
  // },
  {
    id: "badge-retro-crt",
    title: "Retro CRT Active Badge",
    category: "Badges & Status Indicators",
    description: "Nostalgic glowing 90s CRT monitor status indicator badge.",
    copiesCount: 285,
    component: <RetroCrtBadge />,
    code: `<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black border-2 border-green-500 rounded font-mono text-[11px] text-green-300">CRT_ACTIVE</div>`,
  },
  // {
  //   id: "badge-live-status",
  //   title: "Live Status Ping Badge",
  //   category: "Badges & Status Indicators",
  //   description:
  //     "Pulsing system online status badge with glowing emerald indicators.",
  //   copiesCount: 290,
  //   component: <LiveStatusBadge />,
  //   code: `<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-950 border border-emerald-500/40 rounded-full font-baloo text-[11px] text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />SYS_ONLINE</div>`,
  // },
  {
    id: "badge-cyber-security",
    title: "Cyber Security Clearance Badge",
    category: "Badges & Status Indicators",
    description:
      "High-security tier badge with hover scale effect and blinking matrix cursor.",
    copiesCount: 340,
    component: <CyberSecurityBadge />,
    code: `<div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo text-[11px] text-cyan-300">SECURE_L3</div>`,
  },
];
