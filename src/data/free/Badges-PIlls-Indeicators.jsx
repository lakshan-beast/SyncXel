import LiveStatusBadge from "../../library/free/badges/LiveStatusBadge";
import CyberSecurityBadge from "../../library/free/badges/CyberSecurityBadge";

// import LiveStatusBadge2 from "../../library/free/badges/LiveStatusBadge2";
// import CyberSecurityBadge2 from "../../library/free/badges/CyberSecurityBadge2";
import BrutalAlertBadge from "../../library/free/badges/BrutalAlertBadge";
import BrutalRankBadge from "../../library/free/badges/BrutalRankBadge";
import GlassFrostBadge from "../../library/free/badges/GlassFrostBadge";
import GlassNeonBadge from "../../library/free/badges/GlassNeonBadge";
import BentoStatusBadge from "../../library/free/badges/BentoStatusBadge";
import BentoClusterBadge from "../../library/free/badges/BentoClusterBadge";
import ClaySoftBadge from "../../library/free/badges/ClaySoftBadge";
import ClayPillBadge from "../../library/free/badges/ClayPillBadge";
import RetroTerminalBadge from "../../library/free/badges/RetroTerminalBadge";
import RetroCrtBadge from "../../library/free/badges/RetroCrtBadge";

export const badgesData = [
  {
    id: "badge-live-status",
    title: "Live Status Ping Badge",
    category: "Badges & Status Indicators",
    description:
      "Pulsing system online status badge with glowing emerald indicators.",
    copiesCount: 290,
    component: <LiveStatusBadge />,
    code: `<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-950 border border-emerald-500/40 rounded-full font-baloo text-[11px] text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />SYS_ONLINE</div>`,
  },
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
  {
    id: "badge-brutal-alert",
    title: "Neo-Brutalism Alert Badge",
    category: "Badges & Status Indicators",
    description:
      "High-contrast geometric warning badge with sharp brutalist borders.",
    copiesCount: 315,
    component: <BrutalAlertBadge />,
    code: `<div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-yellow-300 border-2 border-slate-950 rounded-xl font-baloo text-[11px] text-slate-950 font-black shadow-[3px_3px_0px_0px_#020617]">SYSTEM_ALERT</div>`,
  },
  {
    id: "badge-brutal-rank",
    title: "Neo-Brutalism Elite Rank",
    category: "Badges & Status Indicators",
    description:
      "Vibrant pink brutalist rank badge featuring hard directional shadows.",
    copiesCount: 280,
    component: <BrutalRankBadge />,
    code: `<div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-pink-400 border-2 border-slate-950 rounded-xl font-baloo text-[11px] text-slate-950 font-black shadow-[3px_3px_0px_0px_#020617]">RANK_ELITE</div>`,
  },
  {
    id: "badge-glass-frost",
    title: "Glassmorphism Frost Badge",
    category: "Badges & Status Indicators",
    description:
      "Frosted translucent glass overlay badge with crisp cyan aura lighting.",
    copiesCount: 350,
    component: <GlassFrostBadge />,
    code: `<div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo text-[11px] text-cyan-200">FROST_SECURE</div>`,
  },
  {
    id: "badge-glass-neon",
    title: "Glassmorphism Neon Sync",
    category: "Badges & Status Indicators",
    description:
      "Translucent glass badge highlighted with ambient indigo lighting.",
    copiesCount: 295,
    component: <GlassNeonBadge />,
    code: `<div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo text-[11px] text-indigo-200">NEON_SYNC</div>`,
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
  {
    id: "badge-retro-terminal",
    title: "Retro Terminal Status Badge",
    category: "Badges & Status Indicators",
    description:
      "Green phosphor monospaced terminal environment status badge console.",
    copiesCount: 275,
    component: <RetroTerminalBadge />,
    code: `<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black border-2 border-green-500 rounded font-mono text-[11px] text-green-400">SYS_TERMINAL</div>`,
  },
  {
    id: "badge-retro-crt",
    title: "Retro CRT Active Badge",
    category: "Badges & Status Indicators",
    description: "Nostalgic glowing 90s CRT monitor status indicator badge.",
    copiesCount: 285,
    component: <RetroCrtBadge />,
    code: `<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black border-2 border-green-500 rounded font-mono text-[11px] text-green-300">CRT_ACTIVE</div>`,
  },
  {
    id: "badge-live-status",
    title: "Live Status Ping Badge",
    category: "Badges & Status Indicators",
    description:
      "Pulsing system online status badge with glowing emerald indicators.",
    copiesCount: 290,
    component: <LiveStatusBadge />,
    code: `<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-950 border border-emerald-500/40 rounded-full font-baloo text-[11px] text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />SYS_ONLINE</div>`,
  },
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
