import CyberNeonToast from "../../library/free/toasts/CyberNeonToast";
import CyberGlitchBanner from "../../library/free/toasts/CyberGlitchBanner";
import BrutalPopToast from "../../library/free/toasts/BrutalPopToast";
import BrutalHardBanner from "../../library/free/toasts/BrutalHardBanner";
import GlassFrostToast from "../../library/free/toasts/GlassFrostToast";
import GlassNeonToast from "../../library/free/toasts/GlassNeonToast";
import BentoStatusToast from "../../library/free/toasts/BentoStatusToast";
import BentoClusterBanner from "../../library/free/toasts/BentoClusterBanner";
import ClaySoftToast from "../../library/free/toasts/ClaySoftToast";
import ClayPillBanner from "../../library/free/toasts/ClayPillBanner";
import RetroTerminalToast from "../../library/free/toasts/RetroTerminalToast";
import RetroCrtBanner from "../../library/free/toasts/RetroCrtBanner";

export const toastsData = [
  {
    id: "toast-cyber-neon",
    title: "Cyberpunk Neon Success Toast",
    category: "Success & Toasts",
    description:
      "Pulsing glowing cyber neon success confirmation notification.",
    copiesCount: 310,
    component: <CyberNeonToast />,
    code: `<div className="w-80 p-3.5 bg-slate-950 border border-cyan-500/50 rounded-xl font-baloo flex items-center gap-3 text-white">...</div>`,
  },
  {
    id: "toast-cyber-glitch",
    title: "Cyberpunk Glitch Banner",
    category: "Success & Toasts",
    description:
      "High-tech cyberpunk override warning banner with neon borders.",
    copiesCount: 285,
    component: <CyberGlitchBanner />,
    code: `<div className="w-80 p-3.5 bg-slate-950 border-2 border-cyan-400 rounded-xl font-baloo flex items-center gap-3 text-white">...</div>`,
  },
  {
    id: "toast-brutal-pop",
    title: "Neo-Brutalism Pop Toast",
    category: "Success & Toasts",
    description:
      "High-contrast geometric brutalist confirmation popup with hard shadows.",
    copiesCount: 340,
    component: <BrutalPopToast />,
    code: `<div className="w-80 p-3.5 bg-yellow-300 border-2 border-slate-950 rounded-xl font-baloo flex items-center gap-3 shadow-[3px_3px_0px_0px_#020617]">...</div>`,
  },
  {
    id: "toast-brutal-hard",
    title: "Neo-Brutalism Hard Banner",
    category: "Success & Toasts",
    description:
      "Vibrant pink brutalist deploy completion banner with heavy borders.",
    copiesCount: 295,
    component: <BrutalHardBanner />,
    code: `<div className="w-80 p-3.5 bg-pink-400 border-2 border-slate-950 rounded-xl font-baloo flex items-center gap-3 shadow-[3px_3px_0px_0px_#020617]">...</div>`,
  },
  {
    id: "toast-glass-frost",
    title: "Glassmorphism Frost Toast",
    category: "Success & Toasts",
    description:
      "Translucent frosted glass success overlay card with deep backdrop blur.",
    copiesCount: 360,
    component: <GlassFrostToast />,
    code: `<div className="w-80 p-3.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo flex items-center gap-3 text-white">...</div>`,
  },
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
  {
    id: "toast-bento-status",
    title: "Bento Grid Status Toast",
    category: "Success & Toasts",
    description:
      "Clean minimalist bento dashboard success notification container.",
    copiesCount: 325,
    component: <BentoStatusToast />,
    code: `<div className="w-80 p-3.5 bg-slate-900 border border-slate-800 rounded-2xl font-baloo flex items-center gap-3 text-white">...</div>`,
  },
  {
    id: "toast-bento-cluster",
    title: "Bento Cluster Sync Banner",
    category: "Success & Toasts",
    description:
      "Minimalist bento module banner for operational cluster data channels.",
    copiesCount: 280,
    component: <BentoClusterBanner />,
    code: `<div className="w-80 p-3.5 bg-slate-900 border border-slate-800 rounded-2xl font-baloo flex items-center gap-3 text-white">...</div>`,
  },
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
  {
    id: "toast-retro-crt",
    title: "Retro CRT Alert Banner",
    category: "Success & Toasts",
    description:
      "Nostalgic glowing 90s CRT monitor alert banner with phosphor effects.",
    copiesCount: 275,
    component: <RetroCrtBanner />,
    code: `<div className="w-80 p-3.5 bg-black border-2 border-green-500 rounded font-mono flex items-center gap-3 text-green-400">...</div>`,
  },
];
