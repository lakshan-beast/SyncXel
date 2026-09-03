// import CyberAvatarPreview from "../../library/free/avatars/CyberAvatarPreview";
// import MatrixProfileRing from "../../library/free/avatars/MatrixProfileRing";

import CyberAvatarPreview from "../../library/free/avatars/CyberAvatarPreview";
import CyberHexaProfile from "../../library/free/avatars/CyberHexaProfile";
import BrutalPopAvatar from "../../library/free/avatars/BrutalPopAvatar";
import BrutalBadgeProfile from "../../library/free/avatars/BrutalBadgeProfile";
import MatrixProfileRing from "../../library/free/avatars/MatrixProfileRing";
import GlassEnclaveCard from "../../library/free/avatars/GlassEnclaveCard";
import BentoProfileCard from "../../library/free/avatars/BentoProfileCard";
import BentoStatusBadge from "../../library/free/avatars/BentoStatusBadge";
import ClayVolumetricAvatar from "../../library/free/avatars/ClayVolumetricAvatar";
import ClayPillProfile from "../../library/free/avatars/ClayPillProfile";
import RetroTerminalUserCard from "../../library/free/avatars/RetroTerminalUserCard";
import RetroCrtAgentBadge from "../../library/free/avatars/RetroCrtAgentBadge";

export const avatarsData = [
  {
    id: "avatar-cyber-agent",
    title: "Cyber Agent Avatar Ring",
    category: "Avatars & Profiles",
    description:
      "Futuristic user profile badge with rotating dashed neon ring and live status pulse indicator.",
    copiesCount: 295,
    component: <CyberAvatarPreview />,
    code: `<div className="w-72 p-4 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo flex items-center gap-4 text-white">...</div>`,
  },
  {
    id: "avatar-cyber-hexa",
    title: "Cyberpunk Hexagonal Profile",
    category: "Avatars & Profiles",
    description:
      "Sleek geometric cyber agent profile badge with validated status node.",
    copiesCount: 280,
    component: <CyberHexaProfile />,
    code: `<div className="w-72 p-4 bg-slate-950 border border-cyan-500/50 rounded-2xl font-baloo flex items-center gap-4 text-white">...</div>`,
  },
  {
    id: "avatar-brutal-pop",
    title: "Neo-Brutalism Pop Avatar",
    category: "Avatars & Profiles",
    description:
      "High-contrast brutalist user card with hard drop-shadows and bold typography.",
    copiesCount: 310,
    component: <BrutalPopAvatar />,
    code: `<div className="w-72 p-4 bg-yellow-300 border-2 border-slate-950 rounded-2xl font-baloo flex items-center gap-4 shadow-[3px_3px_0px_0px_#020617]">...</div>`,
  },
  {
    id: "avatar-brutal-badge",
    title: "Neo-Brutalism Sticker Badge",
    category: "Avatars & Profiles",
    description:
      "Vibrant pink sticker container with high-contrast geometric borders.",
    copiesCount: 275,
    component: <BrutalBadgeProfile />,
    code: `<div className="w-72 p-4 bg-pink-400 border-2 border-slate-950 rounded-2xl font-baloo flex items-center gap-4 shadow-[3px_3px_0px_0px_#020617]">...</div>`,
  },
  {
    id: "avatar-matrix-ring",
    title: "Matrix Quantum Profile Ring",
    category: "Avatars & Profiles",
    description:
      "Indigo neon glow avatar component optimized for card preview container layouts.",
    copiesCount: 260,
    component: <MatrixProfileRing />,
    code: `<div className="w-72 p-4 bg-slate-950 border border-indigo-500/40 rounded-xl font-baloo flex items-center gap-4 text-white">...</div>`,
  },
  {
    id: "avatar-glass-enclave",
    title: "Glassmorphism Enclave Card",
    category: "Avatars & Profiles",
    description:
      "Frosted translucent glass overlay badge built with deep backdrop blur.",
    copiesCount: 340,
    component: <GlassEnclaveCard />,
    code: `<div className="w-72 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl font-baloo flex items-center gap-4 text-white">...</div>`,
  },
  {
    id: "avatar-bento-profile",
    title: "Bento Grid Workspace Profile",
    category: "Avatars & Profiles",
    description:
      "Clean minimalist bento grid card layout for team workspace owners.",
    copiesCount: 330,
    component: <BentoProfileCard />,
    code: `<div className="w-72 p-4 bg-slate-900 border border-slate-800 rounded-2xl font-baloo flex items-center gap-4 text-white">...</div>`,
  },
  {
    id: "avatar-bento-status",
    title: "Bento Live Status Badge",
    category: "Avatars & Profiles",
    description:
      "Minimalist grid profile module with live pulsing availability indicator.",
    copiesCount: 290,
    component: <BentoStatusBadge />,
    code: `<div className="w-72 p-4 bg-slate-900 border border-slate-800 rounded-2xl font-baloo flex items-center justify-between text-white">...</div>`,
  },
  {
    id: "avatar-clay-volumetric",
    title: "Claymorphism Soft Avatar",
    category: "Avatars & Profiles",
    description:
      "Soft tactile volumetric 3D matte user card with inner depth lighting.",
    copiesCount: 265,
    component: <ClayVolumetricAvatar />,
    code: `<div className="w-72 p-4 bg-slate-900 rounded-3xl shadow-[8px_8px_16px_#020617,-8px_-8px_16px_#1e293b] border border-slate-800 text-white">...</div>`,
  },
  {
    id: "avatar-clay-pill",
    title: "Claymorphism Soft Pill Profile",
    category: "Avatars & Profiles",
    description:
      "Pill-shaped smooth tactile matte profile badge with subtle inner shadows.",
    copiesCount: 250,
    component: <ClayPillProfile />,
    code: `<div className="w-72 p-3 bg-slate-900 rounded-full shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] border border-slate-800 text-white">...</div>`,
  },
  {
    id: "avatar-retro-terminal",
    title: "Retro 90s Terminal User Card",
    category: "Avatars & Profiles",
    description:
      "Green phosphor monospaced terminal profile console container.",
    copiesCount: 285,
    component: <RetroTerminalUserCard />,
    code: `<div className="w-72 p-4 bg-black border-2 border-green-500 rounded font-mono flex items-center gap-4 text-green-400">...</div>`,
  },
  {
    id: "avatar-retro-crt",
    title: "Retro CRT Agent Badge",
    category: "Avatars & Profiles",
    description:
      "Nostalgic glowing 90s CRT monitor user badge with blinking ping pulse.",
    copiesCount: 270,
    component: <RetroCrtAgentBadge />,
    code: `<div className="w-72 p-4 bg-black border-2 border-green-500 rounded font-mono flex items-center justify-between text-green-400">...</div>`,
  },
  {
    id: "avatar-cyber-agent",
    title: "Cyber Agent Avatar Ring",
    category: "Avatars & Profiles",
    description:
      "Futuristic user profile badge with rotating dashed neon ring and live status pulse indicator.",
    copiesCount: 295,
    component: <CyberAvatarPreview />,
    code: `<div className="w-72 p-4 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo flex items-center gap-4">...</div>`,
  },
  {
    id: "avatar-matrix-ring",
    title: "Matrix Quantum Profile Ring",
    category: "Avatars & Profiles",
    description:
      "Indigo neon glow avatar component optimized for card preview container layouts.",
    copiesCount: 260,
    component: <MatrixProfileRing />,
    code: `<div className="w-72 p-4 bg-slate-950 border border-indigo-500/40 rounded-xl font-baloo flex items-center gap-4">...</div>`,
  },
];
