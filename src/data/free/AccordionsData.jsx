import CyberAccordionPreview from "../../library/free/accordions/CyberAccordionPreview";
import MatrixLogAccordion from "../../library/free/accordions/MatrixLogAccordion";

export const accordionsData = [
  {
    id: "accordion-cyber-protocol",
    title: "Cyber Protocol Accordion",
    category: "Accordions & Collapsibles",
    description: "Interactive collapsible system protocol log featuring smooth framer-motion height scaling.",
    copiesCount: 285,
    component: <CyberAccordionPreview />,
    code: `<div className="w-72 bg-slate-950 border border-cyan-500/40 rounded-xl overflow-hidden font-baloo"><button className="w-full p-3 flex justify-between items-center text-xs text-cyan-300 font-bold">SYS_PROTOCOL_01</button></div>`,
  },
  {
    id: "accordion-matrix-log",
    title: "Matrix Diagnostic Log",
    category: "Accordions & Collapsibles",
    description: "Terminal diagnostic expander optimized for compact container preview cards.",
    copiesCount: 240,
    component: <MatrixLogAccordion />,
    code: `<div className="w-72 bg-slate-950 border border-indigo-500/40 rounded-xl overflow-hidden font-baloo"><button className="w-full p-3 flex justify-between items-center text-xs text-indigo-300 font-bold">DIAGNOSTIC_LOG</button></div>`,
  },
];