import CyberToastNotification from "../../library/free/notifications/CyberToastNotification";
import HolographicModalTrigger from "../../library/free/notifications/HolographicModalTrigger";

export const notificationsData = [
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
