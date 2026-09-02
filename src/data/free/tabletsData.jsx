import CyberTabPreview from "../../library/free/tabets/CyberTabPreview";
import MatrixTabPanel from "../../library/free/tabets/MatrixTabPanel";

export const tabsData = [
  {
    id: "tab-cyber-switcher",
    title: "Cyberpunk Animated Tab Switcher",
    category: "Tabs & Dynamic Panels",
    description:
      "Futuristic tab navigation component featuring framer-motion layout switching and font-baloo typography.",
    copiesCount: 315,
    component: <CyberTabPreview />,
    code: `<div className="w-72 p-3 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo">...</div>`,
  },
  {
    id: "tab-matrix-cluster",
    title: "Matrix Cluster Panel Switcher",
    category: "Tabs & Dynamic Panels",
    description:
      "Indigo neon styled tab switching module optimized for dashboard cards and view selections.",
    copiesCount: 280,
    component: <MatrixTabPanel />,
    code: `<div className="w-72 p-3 bg-slate-950 border border-indigo-500/40 rounded-xl font-baloo">...</div>`,
  },
];
