import CyberNeonToast from "../../library/free/success/CyberNeonToast";
import CyberGlitchBanner from "../../library/free/success/CyberGlitchBanner";
import BrutalPopToast from "../../library/free/success/BrutalPopToast";
import BrutalHardBanner from "../../library/free/success/BrutalHardBanner";
import GlassFrostToast from "../../library/free/success/GlassFrostToast";
import GlassNeonToast from "../../library/free/success/GlassNeonToast";
import BentoStatusToast from "../../library/free/success/BentoStatusToast";
import BentoClusterBanner from "../../library/free/success/BentoClusterBanner";
import ClaySoftToast from "../../library/free/success/ClaySoftToast";
import ClayPillBanner from "../../library/free/success/ClayPillBanner";
import RetroTerminalToast from "../../library/free/success/RetroTerminalToast";
import RetroCrtBanner from "../../library/free/success/RetroCrtBanner";

export const successData = [
  {
    id: "toast-cyber-neon",
    title: "Cyberpunk Neon Success Toast",
    category: "Success & Toasts",
    description:
      "Pulsing glowing cyber neon success confirmation notification featuring high-contrast borders, neon drop shadows, spring entrance animations, and professional deployment feedback styling.",
    copiesCount: 310,

    // Hyper-realistic use cases
    useCases: [
      "Cloud Deployment & CI/CD Portals: Positioned as real-time toast alerts when serverless functions or container builds are successfully pushed to production.",
      "Developer SaaS Dashboards: Used for notifying successful API token generation, database migrations, or edge rule updates with futuristic cyber-neon aesthetics.",
    ],

    component: <CyberNeonToast />,

    code: `import { motion } from "framer-motion";\nimport { FiCheckCircle } from "react-icons/fi";\n\nexport default function CyberNeonToast() {\n  return (\n    <motion.div\n      initial={{ opacity: 0, y: 15, scale: 0.95 }}\n      animate={{ opacity: 1, y: 0, scale: 1 }}\n      whileHover={{ scale: 1.02 }}\n      transition={{ type: "spring", stiffness: 400, damping: 25 }}\n      className="w-80 p-4 bg-slate-950/95 backdrop-blur-xl border border-cyan-500/60 rounded-2xl font-baloo flex items-center gap-3.5 shadow-[0_0_25px_rgba(34,211,238,0.25)] text-white select-none cursor-pointer group"\n    >\n      <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-400/80 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_#22d3ee] shrink-0 group-hover:scale-105 transition-transform">\n        <FiCheckCircle className="w-4 h-4" />\n      </div>\n      <div className="space-y-0.5 flex-1">\n        <div className="flex items-center justify-between">\n          <h4 className="text-xs font-extrabold text-cyan-300 tracking-wide">SYSTEM_SUCCESS</h4>\n          <span className="text-[9px] text-slate-400 font-mono">Just now</span>\n        </div>\n        <p className="text-[11px] text-slate-300 font-medium leading-relaxed">\n          Production pipeline changes deployed successfully to edge cluster ✨\n        </p>\n      </div>\n    </motion.div>\n  );\n}`,
  },
  // {
  //   id: "toast-cyber-glitch",
  //   title: "Cyberpunk Glitch Banner",
  //   category: "Success & Toasts",
  //   description:
  //     "High-tech cyberpunk override warning banner featuring neon borders, glitch hover animations, secure badge tags, and professional system notification styling.",
  //   copiesCount: 285,

  //   // Hyper-realistic use cases
  //   useCases: [
  //     "Cybersecurity & Threat Response Dashboards: Positioned as real-time alert banners when security overrides or network protocol switches are initiated.",
  //     "High-Performance Cloud Infrastructure: Used for displaying critical failover statuses, L2 protocol syncs, and emergency system notifications.",
  //   ],

  //   component: <CyberGlitchBanner />,

  //   code: `import { motion } from "framer-motion";\nimport { FiShield } from "react-icons/fi";\n\nexport default function CyberGlitchBanner() {\n  return (\n    <motion.div\n      initial={{ opacity: 0, y: 15 }}\n      animate={{ opacity: 1, y: 0 }}\n      whileHover={{ x: [-2, 2, -2, 0], scale: 1.02 }}\n      transition={{ type: "spring", stiffness: 400, damping: 25 }}\n      className="w-80 p-4 bg-slate-950/95 backdrop-blur-xl border-2 border-cyan-400 rounded-2xl font-baloo flex items-center gap-3.5 shadow-[0_0_25px_rgba(34,211,238,0.3)] text-white select-none cursor-pointer group"\n    >\n      <div className="w-9 h-9 rounded-xl bg-cyan-400 text-slate-950 flex items-center justify-center font-black text-sm shadow-[0_0_15px_#22d3ee] shrink-0 group-hover:rotate-6 transition-transform">\n        <FiShield className="w-4 h-4 stroke-[3]" />\n      </div>\n      <div className="space-y-0.5 flex-1">\n        <div className="flex items-center justify-between">\n          <h4 className="text-xs font-extrabold uppercase text-cyan-400 tracking-wider">\n            OVERRIDE_ACTIVE\n          </h4>\n          <span className="text-[9px] text-cyan-300 font-mono bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-500/40">\n            SECURE\n          </span>\n        </div>\n        <p className="text-[11px] text-slate-300 font-mono leading-relaxed">\n          Security protocol successfully synchronized to L2 edge cluster node.\n        </p>\n      </div>\n    </motion.div>\n  );\n}`,
  // },
  {
    id: "toast-brutal-pop",
    title: "Neo-Brutalism Pop Toast",
    category: "Success & Toasts",
    description:
      "High-contrast geometric brutalist confirmation popup featuring hard shadows, bold yellow styling, professional title-case typography, and settings save feedback.",
    copiesCount: 340,

    // Hyper-realistic use cases
    useCases: [
      "SaaS Billing & Subscription Portals: Positioned as real-time success popups when users update payment methods or upgrade tiers.",
      "Creator Dashboard Settings: Used for confirming profile adjustments and workspace configurations with bold neo-brutalist aesthetics.",
    ],

    component: <BrutalPopToast />,

    code: `import { motion } from "framer-motion";\nimport { FiCheck } from "react-icons/fi";\n\nexport default function BrutalPopToast() {\n  return (\n    <motion.div\n      initial={{ opacity: 0, y: 15 }}\n      animate={{ opacity: 1, y: 0 }}\n      whileHover={{ x: -2, y: -2, boxShadow: "5px 5px 0px 0px #020617" }}\n      transition={{ type: "spring", stiffness: 400, damping: 25 }}\n      className="w-80 p-4 bg-yellow-300 border-2 border-slate-950 rounded-2xl font-baloo flex items-center gap-3.5 shadow-[3px_3px_0px_0px_#020617] text-slate-950 select-none cursor-pointer group"\n    >\n      <div className="w-9 h-9 rounded-xl bg-pink-500 border-2 border-slate-950 flex items-center justify-center text-white font-black text-sm shadow-[2px_2px_0px_0px_#020617] shrink-0 group-hover:rotate-6 transition-transform">\n        <FiCheck className="w-4 h-4 stroke-[3]" />\n      </div>\n      <div className="space-y-0.5 flex-1">\n        <div className="flex items-center justify-between">\n          <h4 className="text-xs font-black tracking-wide text-slate-950">Changes Saved</h4>\n          <span className="text-[9px] font-bold text-slate-900 bg-yellow-400 px-1.5 py-0.5 rounded border border-slate-950">\n            Live\n          </span>\n        </div>\n        <p className="text-[11px] font-medium text-slate-800 leading-relaxed">\n          Your workspace billing configuration has been updated successfully.\n        </p>\n      </div>\n    </motion.div>\n  );\n}`,
  },
  // {
  //   id: "toast-brutal-hard",
  //   title: "Neo-Brutalism Hard Banner",
  //   category: "Success & Toasts",
  //   description:
  //     "Vibrant pink brutalist deploy completion banner with heavy borders.",
  //   copiesCount: 295,
  //   component: <BrutalHardBanner />,
  //   code: `<div className="w-80 p-3.5 bg-pink-400 border-2 border-slate-950 rounded-xl font-baloo flex items-center gap-3 shadow-[3px_3px_0px_0px_#020617]">...</div>`,
  // },
  // {
  //   id: "toast-glass-frost",
  //   title: "Glassmorphism Frost Toast",
  //   category: "Success & Toasts",
  //   description:
  //     "Translucent frosted glass success overlay card with deep backdrop blur.",
  //   copiesCount: 360,
  //   component: <GlassFrostToast />,
  //   code: `<div className="w-80 p-3.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo flex items-center gap-3 text-white">...</div>`,
  // },
  {
    id: "toast-glass-neon",
    title: "Glassmorphism Neon Toast",
    category: "Success & Toasts",
    description:
      "Translucent glass notification container highlighted with ambient indigo aura.",
    copiesCount: 315,
    component: <GlassNeonToast />,
    code: `<div className="w-80 p-3.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo flex items-center gap-3 text-white">...</div>`,
  },
  // {
  //   id: "toast-bento-status",
  //   title: "Bento Grid Status Toast",
  //   category: "Success & Toasts",
  //   description:
  //     "Clean minimalist bento dashboard success notification container.",
  //   copiesCount: 325,
  //   component: <BentoStatusToast />,
  //   code: `<div className="w-80 p-3.5 bg-slate-900 border border-slate-800 rounded-2xl font-baloo flex items-center gap-3 text-white">...</div>`,
  // },
  // {
  //   id: "toast-bento-cluster",
  //   title: "Bento Cluster Sync Banner",
  //   category: "Success & Toasts",
  //   description:
  //     "Minimalist bento module banner for operational cluster data channels.",
  //   copiesCount: 280,
  //   component: <BentoClusterBanner />,
  //   code: `<div className="w-80 p-3.5 bg-slate-900 border border-slate-800 rounded-2xl font-baloo flex items-center gap-3 text-white">...</div>`,
  // },
  {
    id: "toast-clay-soft",
    title: "Claymorphism Soft Toast",
    category: "Success & Toasts",
    description:
      "Tactile 3D matte volumetric success notification with diffuse shadows.",
    copiesCount: 270,
    component: <ClaySoftToast />,
    code: `<div className="w-80 p-3.5 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617] border border-slate-800 text-white">...</div>`,
  },
  {
    id: "toast-clay-pill",
    title: "Claymorphism Soft Pill Banner",
    category: "Success & Toasts",
    description:
      "Smooth pill-shaped tactile volumetric success banner component.",
    copiesCount: 290,
    component: <ClayPillBanner />,
    code: `<div className="w-80 p-3 bg-slate-900 rounded-full shadow-[6px_6px_12px_#020617] border border-slate-800 text-white">...</div>`,
  },
  {
    id: "toast-retro-terminal",
    title: "Retro 90s Terminal Success Log",
    category: "Success & Toasts",
    description:
      "Green phosphor monospaced terminal environment response message console.",
    copiesCount: 305,
    component: <RetroTerminalToast />,
    code: `<div className="w-80 p-3.5 bg-black border-2 border-green-500 rounded font-mono flex items-center gap-3 text-green-400">...</div>`,
  },
//   {
//     id: "toast-retro-crt",
//     title: "Retro CRT Alert Banner",
//     category: "Success & Toasts",
//     description:
//       "Nostalgic glowing 90s CRT monitor alert banner with phosphor effects.",
//     copiesCount: 275,
//     component: <RetroCrtBanner />,
//     code: `<div className="w-80 p-3.5 bg-black border-2 border-green-500 rounded font-mono flex items-center gap-3 text-green-400">...</div>`,
//   },
];
