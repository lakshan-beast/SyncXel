import CyberPricingCard from "../../library/free/pricing/CyberPricingCard";
import MatrixEnterpriseTier from "../../library/free/pricing/MatrixEnterpriseTier";

export const pricingData = [
  {
    id: "pricing-neural-pro",
    title: "Neural Pro Pricing Card",
    category: "Pricing & Subscriptions",
    description: "Cyberpunk SaaS pricing card featuring neon badge, feature list, and hover scale micro-animations.",
    copiesCount: 310,
    component: <CyberPricingCard />,
    code: `<motion.div className="w-72 p-4 bg-slate-950 border border-cyan-500/40 rounded-2xl font-baloo"><div className="text-xl font-bold text-white">$49</div></motion.div>`,
  },
  {
    id: "pricing-quantum-grid",
    title: "Quantum Grid Enterprise Tier",
    category: "Pricing & Subscriptions",
    description: "High-end enterprise tier subscription card optimized for card preview container heights.",
    copiesCount: 265,
    component: <MatrixEnterpriseTier />,
    code: `<motion.div className="w-72 p-4 bg-slate-950 border border-indigo-500/40 rounded-2xl font-baloo"><div className="text-xl font-bold text-white">$199</div></motion.div>`,
  },
];