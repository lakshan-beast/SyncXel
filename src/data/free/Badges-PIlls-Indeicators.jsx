import LiveStatusBadge from "../../library/free/badges/LiveStatusBadge";
import CyberSecurityBadge from "../../library/free/badges/CyberSecurityBadge";

export const badgesData = [
  {
    id: "badge-live-status",
    title: "Live Status Ping Badge",
    category: "Badges & Status Indicators",
    description: "Pulsing system online status badge with glowing emerald indicators.",
    copiesCount: 290,
    component: <LiveStatusBadge />,
    code: `<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-950 border border-emerald-500/40 rounded-full font-baloo text-[11px] text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />SYS_ONLINE</div>`,
  },
  {
    id: "badge-cyber-security",
    title: "Cyber Security Clearance Badge",
    category: "Badges & Status Indicators",
    description: "High-security tier badge with hover scale effect and blinking matrix cursor.",
    copiesCount: 340,
    component: <CyberSecurityBadge />,
    code: `<div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo text-[11px] text-cyan-300">SECURE_L3</div>`,
  },
];