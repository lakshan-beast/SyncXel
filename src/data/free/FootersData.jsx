import CyberFooterPreview from "../../library/free/footers/CyberFooterPreview";
import MatrixStatusFooter from "../../library/free/footers/MatrixStatusFooter";

export const footersData = [
  {
    id: "footer-cyber-sys",
    title: "Cyberpunk Terminal Footer",
    category: "Footers & Status Bars",
    description:
      "System status bar and telemetry footer featuring real-time ping indicator and font-baloo typography.",
    copiesCount: 270,
    component: <CyberFooterPreview />,
    code: `<div className="w-72 p-3 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo">...</div>`,
  },
  {
    id: "footer-matrix-telemetry",
    title: "Matrix Grid Telemetry Footer",
    category: "Footers & Status Bars",
    description:
      "Indigo neon status monitor footer optimized for compact card preview layout structures.",
    copiesCount: 245,
    component: <MatrixStatusFooter />,
    code: `<div className="w-72 p-3 bg-slate-950 border border-indigo-500/40 rounded-xl font-baloo">...</div>`,
  },
];
