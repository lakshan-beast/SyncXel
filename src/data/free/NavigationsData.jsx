import CyberToastNotification from "../../library/free/notifications/CyberToastNotification";
import HolographicModalTrigger from "../../library/free/notifications/HolographicModalTrigger";

import BrutalModal from "../../library/free/notifications/BrutalModal";
import GlassModal from "../../library/free/notifications/GlassModal";

import BentoModal from "../../library/free/notifications/BentoModal";
import ClayModal from "../../library/free/notifications/ClayModal";
import RetroModal from "../../library/free/notifications/RetroModal";

export const notificationsData = [
  {
    id: "modal-bento-config",
    title: "Bento Minimalist Modal",
    category: "Modals, Toasts & Notifications",
    description: "Ultra-clean minimalist system configuration modal layout.",
    copiesCount: 310,
    component: <BentoModal />,
  },
  {
    id: "modal-clay-vault",
    title: "Claymorphism Volumetric Modal",
    category: "Modals, Toasts & Notifications",
    description: "Soft tactile 3D modal box with matte surface lighting.",
    copiesCount: 265,
    component: <ClayModal />,
  },
  {
    id: "modal-retro-terminal",
    title: "Retro 90s Terminal Modal",
    category: "Modals, Toasts & Notifications",
    description:
      "Green-screen vaporwave execution window with monospaced console interface.",
    copiesCount: 295,
    component: <RetroModal />,
  },
  {
    id: "modal-brutal-alert",
    title: "Neo-Brutalism Alert Modal",
    category: "Modals, Toasts & Notifications",
    description:
      "High-impact brutalist modal box featuring thick borders, hard shadows, and bold action triggers.",
    copiesCount: 290,
    component: <BrutalModal />,
  },
  {
    id: "modal-glass-enclave",
    title: "Glassmorphism Secure Modal",
    category: "Modals, Toasts & Notifications",
    description:
      "Frosted translucent overlay container built with deep backdrop blur and sleek borders.",
    copiesCount: 340,
    component: <GlassModal />,
  },
  {
    id: "notification-cyber-toast",
    title: "Cyberpunk Toast Alert",
    category: "Modals, Toasts & Notifications",
    description:
      "Interactive glowing toast notification with smooth spring entrance and dismiss actions.",
    copiesCount: 245,
    component: <CyberToastNotification />,
    code: `<motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.95 }} className="flex items-center gap-3 px-4 py-3 bg-slate-950/90 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-mono text-xs rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.2)]">\n  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />\n  <span>SYS_SUCCESS</span>\n</motion.div>`,
  },
  {
    id: "notification-holo-modal",
    title: "Holographic Terminal Modal",
    category: "Modals, Toasts & Notifications",
    description:
      "Futuristic modal dialog box featuring backdrop blur and spring scale animations.",
    copiesCount: 380,
    component: <HolographicModalTrigger />,
    code: `<motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="w-full max-w-sm p-5 bg-slate-950 border border-cyan-500/50 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.25)] font-mono">\n  <span className="text-cyan-400 text-xs font-bold">SECURITY_OVERRIDE</span>\n</motion.div>`,
  },
];

// import CyberToastNotification from "../../library/free/notifications/CyberToastNotification";
// import BrutalToastNotification from "../../library/free/notifications/BrutalToastNotification";
// import GlassToastNotification from "../../library/free/notifications/GlassToastNotification";
// import BentoToastNotification from "../../library/free/notifications/BentoToastNotification";
// import ClayToastNotification from "../../library/free/notifications/ClayToastNotification";
// import RetroToastNotification from "../../library/free/notifications/RetroToastNotification";

// export const notificationsData = [
//   {
//     id: "notification-cyber-toast",
//     title: "Cyberpunk Toast Alert",
//     category: "Modals, Toasts & Notifications",
//     description:
//       "Interactive glowing toast notification with smooth spring entrance and dismiss actions.",
//     copiesCount: 245,
//     component: <CyberToastNotification />,
//     code: `<motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="flex items-center gap-3 px-4 py-3 bg-slate-950/90 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-mono text-xs rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.2)]">\n  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />\n  <span>SYS_SUCCESS</span>\n</motion.div>`,
//   },
//   {
//     id: "notification-brutal-toast",
//     title: "Neo-Brutalism Toast Alert",
//     category: "Modals, Toasts & Notifications",
//     description:
//       "High-contrast brutalist toast element featuring sharp borders and hard shadows.",
//     copiesCount: 210,
//     component: <BrutalToastNotification />,
//     code: `<motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between gap-4 px-4 py-3 bg-yellow-300 border-2 border-slate-950 rounded-xl shadow-[4px_4px_0px_0px_#020617] text-slate-950">\n  <span className="font-black text-xs">BRUTAL_SYNC_OK</span>\n</motion.div>`,
//   },
//   {
//     id: "notification-glass-toast",
//     title: "Glassmorphism Toast Alert",
//     category: "Modals, Toasts & Notifications",
//     description:
//       "Frosted glass translucent container built with crisp border highlights.",
//     copiesCount: 275,
//     component: <GlassToastNotification />,
//     code: `<motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between gap-4 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white">\n  <span className="font-bold text-xs">SECURE_TUNNEL_ACTIVE</span>\n</motion.div>`,
//   },
//   {
//     id: "notification-bento-toast",
//     title: "Bento Minimalist Toast",
//     category: "Modals, Toasts & Notifications",
//     description: "Ultra-clean minimalist deployment status indicator.",
//     copiesCount: 290,
//     component: <BentoToastNotification />,
//     code: `<motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between gap-4 px-4 py-3 bg-slate-900 border border-slate-800 rounded-2xl text-white">\n  <span className="font-bold text-xs">DEPLOYMENT_COMPLETE</span>\n</motion.div>`,
//   },
//   {
//     id: "notification-clay-toast",
//     title: "Claymorphism Soft Toast",
//     category: "Modals, Toasts & Notifications",
//     description: "Volumetric matte tactile notification element.",
//     copiesCount: 195,
//     component: <ClayToastNotification />,
//     code: `<motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between gap-4 px-4 py-3 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] text-white">\n  <span className="font-bold text-xs">TACTILE_SYNC</span>\n</motion.div>`,
//   },
//   {
//     id: "notification-retro-toast",
//     title: "Retro 90s Terminal Toast",
//     category: "Modals, Toasts & Notifications",
//     description: "Green phosphor monospaced system notification block.",
//     copiesCount: 230,
//     component: <RetroToastNotification />,
//     code: `<motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between gap-4 px-4 py-2 bg-black border-2 border-green-500 rounded font-mono text-green-400">\n  <span className="text-xs">[OK] SYS_PACKET_RECEIVED</span>\n</motion.div>`,
//   },
// ];
