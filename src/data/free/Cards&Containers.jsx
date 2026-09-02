import HolographicCard from "../../library/free/cards/HolographicCard";
import CyberMetricCard from "../../library/free/cards/CyberMetricCard";

export const cardsData = [
  {
    id: "card-holographic",
    title: "Holographic Glassmorphic Card",
    category: "Cards & Containers",
    description: "Futuristic dark-glass card with dynamic neon border glow and smooth spring lift animation.",
    copiesCount: 420,
    component: <HolographicCard />,
    code: `<motion.div whileHover={{ scale: 1.02, y: -4 }} className="relative w-72 p-5 bg-slate-950/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-[0_0_25px_rgba(34,211,238,0.1)]">\n  <h3 className="text-white text-sm font-bold">QUANTUM CORE</h3>\n</motion.div>`,
  },
  {
    id: "card-cyber-metric",
    title: "Cyber Metric Analytics Card",
    category: "Cards & Containers",
    description: "Dashboard statistics card featuring animated progress indicator and neon indicators.",
    copiesCount: 310,
    component: <CyberMetricCard />,
    code: `<motion.div whileHover={{ scale: 1.02 }} className="relative w-72 p-5 bg-slate-950 border border-indigo-500/30 rounded-2xl font-mono">\n  <div className="text-2xl font-bold text-white">98.4 GB/s</div>\n</motion.div>`,
  },
];