import HolographicCard from "../../library/free/cards/HolographicCard";
import CyberMetricCard from "../../library/free/cards/CyberMetricCard";

import BrutalProfileCard from "../../library/free/cards/BrutalProfileCard";
import BrutalStatCard from "../../library/free/cards/BrutalStatCard";
import GlassProfileCard from "../../library/free/cards/GlassProfileCard";
import GlassStatsCard from "../../library/free/cards/GlassStatsCard";
import BentoMetricCard from "../../library/free/cards/BentoMetricCard";
import BentoFeatureCard from "../../library/free/cards/BentoFeatureCard";
import ClayCardPrimary from "../../library/free/cards/ClayCardPrimary";
import ClayActionCard from "../../library/free/cards/ClayActionCard";
import RetroTerminalCard from "../../library/free/cards/RetroTerminalCard";
import RetroLogCard from "../../library/free/cards/RetroLogCard";

export const cardsData = [
  {
    id: "card-brutal-profile",
    title: "Neo-Brutalism Profile Card",
    category: "Cards & Containers",
    description:
      "High-contrast brutalist profile tile featuring thick borders and hard offset shadow styling.",
    copiesCount: 310,
    component: <BrutalProfileCard />,
  },
  {
    id: "card-brutal-stat",
    title: "Neo-Brutalism Revenue Metric",
    category: "Cards & Containers",
    description:
      "Vibrant yellow brutalist metric display designed for high-impact analytics dashboards.",
    copiesCount: 295,
    component: <BrutalStatCard />,
  },
  {
    id: "card-glass-profile",
    title: "Glassmorphism Profile Card",
    category: "Cards & Containers",
    description:
      "Frosted glass aesthetic card with backdrop blur and delicate border illumination.",
    copiesCount: 340,
    component: <GlassProfileCard />,
  },
  {
    id: "card-glass-stats",
    title: "Glassmorphism Progress Card",
    category: "Cards & Containers",
    description:
      "Translucent system load tracker built for modern SaaS control panels.",
    copiesCount: 280,
    component: <GlassStatsCard />,
  },
  {
    id: "card-bento-metric",
    title: "Bento Clean Performance Card",
    category: "Cards & Containers",
    description:
      "Ultra-clean minimalist Bento grid block optimized for high-end metrics.",
    copiesCount: 410,
    component: <BentoMetricCard />,
  },
  {
    id: "card-bento-feature",
    title: "Bento Feature Box",
    category: "Cards & Containers",
    description:
      "Minimalist feature container with subtle borders and crisp typography hierarchy.",
    copiesCount: 365,
    component: <BentoFeatureCard />,
  },
  {
    id: "card-clay-primary",
    title: "Claymorphism Soft 3D Card",
    category: "Cards & Containers",
    description:
      "Matte volumetric 3D card layout featuring dual-shadow depth rendering.",
    copiesCount: 275,
    component: <ClayCardPrimary />,
  },
  {
    id: "card-clay-action",
    title: "Claymorphism Cloud Sync Card",
    category: "Cards & Containers",
    description:
      "Soft rounded tactile interface card with inner shadows and smooth button integration.",
    copiesCount: 250,
    component: <ClayActionCard />,
  },
  {
    id: "card-retro-terminal",
    title: "Retro 90s Terminal Card",
    category: "Cards & Containers",
    description:
      "Vaporwave green-screen terminal box with monospaced log output aesthetics.",
    copiesCount: 330,
    component: <RetroTerminalCard />,
  },
  {
    id: "card-retro-log",
    title: "Retro Amber Warning Card",
    category: "Cards & Containers",
    description:
      "Amber phosphor terminal warning message container with high-contrast framing.",
    copiesCount: 290,
    component: <RetroLogCard />,
  },

  {
    id: "card-holographic",
    title: "Holographic Glassmorphic Card",
    category: "Cards & Containers",
    description:
      "Futuristic dark-glass card with dynamic neon border glow and smooth spring lift animation.",
    copiesCount: 420,
    component: <HolographicCard />,
    code: `<motion.div whileHover={{ scale: 1.02, y: -4 }} className="relative w-72 p-5 bg-slate-950/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-[0_0_25px_rgba(34,211,238,0.1)]">\n  <h3 className="text-white text-sm font-bold">QUANTUM CORE</h3>\n</motion.div>`,
  },
  {
    id: "card-cyber-metric",
    title: "Cyber Metric Analytics Card",
    category: "Cards & Containers",
    description:
      "Dashboard statistics card featuring animated progress indicator and neon indicators.",
    copiesCount: 310,
    component: <CyberMetricCard />,
    code: `<motion.div whileHover={{ scale: 1.02 }} className="relative w-72 p-5 bg-slate-950 border border-indigo-500/30 rounded-2xl font-mono">\n  <div className="text-2xl font-bold text-white">98.4 GB/s</div>\n</motion.div>`,
  },
];
