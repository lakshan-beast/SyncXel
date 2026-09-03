import CyberNeonFab from "../../library/free/fab/CyberNeonFab";
import CyberGlitchTop from "../../library/free/fab/CyberGlitchTop";
import BrutalPopFab from "../../library/free/fab/BrutalPopFab";
import BrutalHardTop from "../../library/free/fab/BrutalHardTop";
import GlassFrostFab from "../../library/free/fab/GlassFrostFab";
import GlassNeonTop from "../../library/free/fab/GlassNeonTop";
import BentoClusterFab from "../../library/free/fab/BentoClusterFab";
import BentoGridTop from "../../library/free/fab/BentoGridTop";
import ClaySoftFab from "../../library/free/fab/ClaySoftFab";
import ClayPillTop from "../../library/free/fab/ClayPillTop";
import RetroTerminalFab from "../../library/free/fab/RetroTerminalFab";
import RetroCrtTop from "../../library/free/fab/RetroCrtTop";

export const fabData = [
  {
    id: "fab-cyber-neon",
    title: "Cyberpunk Neon Action Button",
    category: "Back to Top & FAB",
    description:
      "Pulsing glowing cyber neon floating action button with spring scaling.",
    copiesCount: 310,
    component: <CyberNeonFab />,
    code: `<motion.button className="w-12 h-12 bg-slate-950 border border-cyan-500/50 rounded-2xl flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]">↑</motion.button>`,
  },
  {
    id: "fab-cyber-glitch",
    title: "Cyberpunk Glitch Top Button",
    category: "Back to Top & FAB",
    description:
      "High-tech cyberpunk back to top control button with sharp neon border.",
    copiesCount: 295,
    component: <CyberGlitchTop />,
    code: `<motion.button className="w-12 h-12 bg-slate-950 border-2 border-cyan-400 rounded-2xl flex items-center justify-center text-cyan-400">TOP</motion.button>`,
  },
  {
    id: "fab-brutal-pop",
    title: "Neo-Brutalism Pop FAB",
    category: "Back to Top & FAB",
    description:
      "High-contrast geometric brutalist floating action button with hard shadows.",
    copiesCount: 340,
    component: <BrutalPopFab />,
    code: `<motion.button className="w-12 h-12 bg-yellow-300 border-2 border-slate-950 rounded-2xl flex items-center justify-center text-slate-950 shadow-[3px_3px_0px_0px_#020617]">↑</motion.button>`,
  },
  {
    id: "fab-brutal-hard",
    title: "Neo-Brutalism Hard Top Button",
    category: "Back to Top & FAB",
    description:
      "Vibrant pink brutalist back to top button with heavy directional borders.",
    copiesCount: 280,
    component: <BrutalHardTop />,
    code: `<motion.button className="w-12 h-12 bg-pink-400 border-2 border-slate-950 rounded-2xl flex items-center justify-center text-slate-950 shadow-[3px_3px_0px_0px_#020617]">TOP</motion.button>`,
  },
  {
    id: "fab-glass-frost",
    title: "Glassmorphism Frost FAB",
    category: "Back to Top & FAB",
    description:
      "Translucent frosted glass floating button built with deep backdrop blur.",
    copiesCount: 355,
    component: <GlassFrostFab />,
    code: `<motion.button className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-cyan-200">↑</motion.button>`,
  },
  {
    id: "fab-glass-neon",
    title: "Glassmorphism Neon Top Button",
    category: "Back to Top & FAB",
    description:
      "Translucent glass scroll-to-top button highlighted with ambient indigo aura.",
    copiesCount: 310,
    component: <GlassNeonTop />,
    code: `<motion.button className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-indigo-200">TOP</motion.button>`,
  },
  {
    id: "fab-bento-cluster",
    title: "Bento Grid Cluster FAB",
    category: "Back to Top & FAB",
    description:
      "Clean minimalist bento dashboard floating action control container.",
    copiesCount: 320,
    component: <BentoClusterFab />,
    code: `<motion.button className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-slate-200">↑</motion.button>`,
  },
  {
    id: "fab-bento-grid",
    title: "Bento Grid Top Button",
    category: "Back to Top & FAB",
    description:
      "Minimalist bento module scroll button container with emerald highlight.",
    copiesCount: 275,
    component: <BentoGridTop />,
    code: `<motion.button className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-emerald-400">TOP</motion.button>`,
  },
  {
    id: "fab-clay-soft",
    title: "Claymorphism Soft FAB",
    category: "Back to Top & FAB",
    description:
      "Tactile 3D matte volumetric floating action button with diffuse shadows.",
    copiesCount: 260,
    component: <ClaySoftFab />,
    code: `<motion.button className="w-12 h-12 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617] border border-slate-800 text-indigo-300">↑</motion.button>`,
  },
  {
    id: "fab-clay-pill",
    title: "Claymorphism Pill Top Button",
    category: "Back to Top & FAB",
    description:
      "Smooth pill-shaped tactile volumetric scroll-to-top component.",
    copiesCount: 290,
    component: <ClayPillTop />,
    code: `<motion.button className="w-14 h-12 bg-slate-900 rounded-full shadow-[6px_6px_12px_#020617] border border-slate-800 text-cyan-300">TOP</motion.button>`,
  },
  {
    id: "fab-retro-terminal",
    title: "Retro 90s Terminal FAB",
    category: "Back to Top & FAB",
    description:
      "Green phosphor monospaced terminal environment floating control button.",
    copiesCount: 285,
    component: <RetroTerminalFab />,
    code: `<motion.button className="w-12 h-12 bg-black border-2 border-green-500 rounded flex items-center justify-center text-green-400">↑</motion.button>`,
  },
  {
    id: "fab-retro-crt",
    title: "Retro CRT Top Button",
    category: "Back to Top & FAB",
    description:
      "Nostalgic glowing 90s CRT monitor scroll-to-top console element.",
    copiesCount: 270,
    component: <RetroCrtTop />,
    code: `<motion.button className="w-14 h-12 bg-black border-2 border-green-500 rounded flex items-center justify-center text-green-300">TOP</motion.button>`,
  },
];
