import CyberAvatarPreview from "../../library/free/avatars/CyberAvatarPreview";
import MatrixProfileRing from "../../library/free/avatars/MatrixProfileRing";

export const avatarsData = [
  {
    id: "avatar-cyber-agent",
    title: "Cyber Agent Avatar Ring",
    category: "Avatars & Profiles",
    description: "Futuristic user profile badge with rotating dashed neon ring and live status pulse indicator.",
    copiesCount: 295,
    component: <CyberAvatarPreview />,
    code: `<div className="w-72 p-4 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo flex items-center gap-4">...</div>`,
  },
  {
    id: "avatar-matrix-ring",
    title: "Matrix Quantum Profile Ring",
    category: "Avatars & Profiles",
    description: "Indigo neon glow avatar component optimized for card preview container layouts.",
    copiesCount: 260,
    component: <MatrixProfileRing />,
    code: `<div className="w-72 p-4 bg-slate-950 border border-indigo-500/40 rounded-xl font-baloo flex items-center gap-4">...</div>`,
  },
];