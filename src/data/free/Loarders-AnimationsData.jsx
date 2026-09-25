import CyanRingLoader from "../../library/free/loaders/CyanRingLoader";
import PristineLightButton from "./PristineLightButton";
import EmeraldTextLoader from "../../library/free/loaders/EmeraldTextLoader";
import PingRadarLoader from "../../library/free/loaders/PingRadarLoader";
import BouncingDotsLoader from "../../library/free/loaders/BouncingDotsLoader";
import DualRingLoader from "../../library/free/loaders/DualRingLoader";
import FacebookSkeletonLoader from "../../library/free/loaders/FacebookSkeletonLoader";
import SoundWaveLoader from "../../library/free/loaders/SoundWaveLoader";
import DashedRingLoader from "../../library/free/loaders/DashedRingLoader";
import DualPingLoader from "../../library/free/loaders/DualPingLoader";
import CyberGradientSpinner from "../../library/free/loaders/CyberGradientSpinner";
import TokenizingLoader from "../../library/free/loaders/TokenizingLoader";
import GeometricSquareLoader from "../../library/free/loaders/GeometricSquareLoader";
import GridMatrixLoader from "../../library/free/loaders/GridMatrixLoader";
import NeonSpinnerLoader from "../../library/free/loaders/NeonSpinnerLoader";

export const loadersData = [
  {
    id: "loader-bouncing-dots",
    title: "Solar Flare Bouncing Dots Loader",
    category: "Loaders & Animations",
    description:
      "High-energy bouncing dots loader featuring multi-color solar flare gradients, smooth vertical spring physics, scaling feedback, and intense neon glow.",
    copiesCount: 185,

    // Hyper-realistic use cases
    useCases: [
      "AI Content Generation & Chat Platforms: Positioned inside chat bubbles or streaming response areas while waiting for AI text synthesis.",
      "Fintech & Real-Time Trading Portals: Used as a status indicator during background transaction processing or portfolio synchronization.",
    ],

    component: <BouncingDotsLoader />,

    code: `import { motion } from "framer-motion";\n\nexport default function BouncingDotsLoader() {\n  const colors = [\n    "bg-amber-400 shadow-[0_0_12px_#fbbf24]",\n    "bg-orange-500 shadow-[0_0_12px_#f97316]",\n    "bg-rose-500 shadow-[0_0_12px_#f43f5e]"\n  ];\n\n  return (\n    <div className="flex space-x-3 items-center justify-center p-4 bg-gradient-to-r from-stone-950 via-neutral-950 to-stone-950 rounded-2xl border border-orange-500/30 shadow-[0_10px_25px_rgba(0,0,0,0.5)]">\n      {[0, 0.2, 0.4].map((delay, i) => (\n        <motion.div\n          key={i}\n          animate={{ y: [0, -10, 0], scale: [1, 1.15, 1] }}\n          transition={{\n            repeat: Infinity,\n            duration: 0.6,\n            delay,\n            ease: "easeInOut",\n          }}\n          className={\`w-3.5 h-3.5 rounded-full \${colors[i]}\`}\n        />\n      ))}\n    </div>\n  );\n}`,
  },

  {
    id: "btn-pristine-light",
    title: "Pristine Pastel Corporate Light CTA Button",
    category: "Buttons & Actions",
    description:
      "Clean, professional light-mode action button featuring soft pastel gradient backdrops, crisp slate typography, delicate drop shadows, and an interactive icon container.",
    copiesCount: 390,

    // Hyper-realistic use cases
    useCases: [
      "B2B SaaS Enterprise Portals: Positioned on clean light-mode marketing headers for 'Schedule Enterprise Demo' or 'Request Access' triggers.",
      "Corporate Financial Platforms: Used in professional executive dashboards, billing settings, and invoice approval flows.",
    ],

    component: <PristineLightButton />,

    code: `import { motion } from "framer-motion";\nimport { FiArrowRight } from "react-icons/fi";\n\nexport default function PristineLightButton({ text = "Schedule Enterprise Demo", onClick }) {\n  return (\n    <motion.button\n      whileHover={{ scale: 1.03, y: -2, boxShadow: "0 20px 35px -10px rgba(99, 102, 241, 0.25)" }}\n      whileTap={{ scale: 0.96 }}\n      transition={{ type: "spring", stiffness: 400, damping: 17 }}\n      onClick={onClick}\n      className="px-7 py-3.5 bg-gradient-to-r from-white via-slate-50 to-indigo-50/50 border border-slate-200/80 hover:border-indigo-300 text-slate-800 font-baloo text-xs font-bold rounded-2xl shadow-[0_10px_25px_rgba(100,116,139,0.1)] cursor-pointer select-none flex items-center gap-3 group transition-colors"\n    >\n      <span className="tracking-wide group-hover:text-indigo-600 transition-colors">\n        {text}\n      </span>\n      <div className="w-6 h-6 rounded-full bg-indigo-50 group-hover:bg-indigo-600 flex items-center justify-center transition-colors">\n        <FiArrowRight className="w-3.5 h-3.5 text-indigo-600 group-hover:text-white transition-colors" />\n      </div>\n    </motion.button>\n  );\n}`,
  },

  {
    id: "loader-emerald-text",
    title: "Emerald Spinner with Text",
    category: "Loaders & Animations",
    description:
      "Centered vertical motion spinner paired with a clean status message indicator.",
    copiesCount: 188,
    component: <EmeraldTextLoader />,
    code: `<div className="flex flex-col gap-3 items-center justify-center text-slate-300 font-mono text-xs"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-8 h-8 border-3 border-t-emerald-400 border-slate-800 rounded-full" /><span className="tracking-wider text-emerald-400">LOADING...</span></div>`,
  },

  {
    id: "loader-ping-radar",
    title: "Cyan Radar Ping Loader",
    category: "Loaders & Animations",
    description: "Pulsing expanding radar ring motion with a glowing core dot.",
    copiesCount: 210,
    component: <PingRadarLoader />,
    code: `<div className="relative flex items-center justify-center w-12 h-12"><motion.div scale={[1, 1.8]} opacity={[0.6, 0]} transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }} className="absolute w-full h-full rounded-full border border-cyan-500/60" /><div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" /></div>`,
  },

  {
    id: "loader-bouncing-dots",
    title: "Gradient Bouncing Dots",
    category: "Loaders & Animations",
    description:
      "Playful bouncing dot trio featuring smooth Framer Motion spring physics.",
    copiesCount: 265,
    component: <BouncingDotsLoader />,
    code: `<div className="flex space-x-2 items-center justify-center"><motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" /></div>`,
  },
  {
    id: "loader-dual-ring",
    title: "Counter-Rotating Dual Ring",
    category: "Loaders & Animations",
    description:
      "Advanced dual-axis counter-rotating motion rings with cyan and indigo gradients.",
    copiesCount: 312,
    component: <DualRingLoader />,
    code: `<div className="relative w-12 h-12 flex items-center justify-center"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="absolute inset-0 border-2 border-cyan-500/20 border-t-cyan-400 rounded-full" /></div>`,
  },

  {
    id: "loader-fb-skeleton",
    title: "Facebook-Style Shimmer Skeleton",
    category: "Loaders & Animations",
    description:
      "Horizontal sweeping shimmer card loader powered by Framer Motion placeholders.",
    copiesCount: 489,
    component: <FacebookSkeletonLoader />,
    code: `<div className="w-72 p-4 rounded-2xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-xl space-y-3 overflow-hidden relative shadow-lg"><motion.div animate={{ x: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" /></div>`,
  },

  {
    id: "loader-sound-wave",
    title: "Audio Equalizer Wave",
    category: "Loaders & Animations",
    description:
      "Rhythmic pulsing vertical bars simulating live audio or data processing streams.",
    copiesCount: 230,
    component: <SoundWaveLoader />,
    code: `<div className="flex items-end gap-1 h-6"><motion.div animate={{ height: ["20%", "100%", "20%"] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1 bg-cyan-400 rounded-full" /></div>`,
  },
  {
    id: "loader-dashed-ring",
    title: "Dashed Neon Ring",
    category: "Loaders & Animations",
    description:
      "Rotating dashed border container framing a glowing central nexus.",
    copiesCount: 175,
    component: <DashedRingLoader />,
    code: `<div className="relative flex items-center justify-center w-12 h-12"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute inset-0 border-2 border-dashed border-cyan-500/40 rounded-full" /></div>`,
  },
  {
    id: "loader-dual-ping",
    title: "Multi-Layer Pulse Radar",
    category: "Loaders & Animations",
    description:
      "Concentric glowing motion rings radiating outward for status feeds.",
    copiesCount: 204,
    component: <DualPingLoader />,
    code: `<div className="relative flex items-center justify-center w-14 h-14"><motion.div animate={{ scale: [1, 1.6], opacity: [0.6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute w-full h-full rounded-full bg-cyan-500/20" /></div>`,
  },
  {
    id: "loader-gradient-spinner",
    title: "Cyber Gradient Spinner",
    category: "Loaders & Animations",
    description:
      "Sleek border ring transitioning smoothly with cyan and indigo motion hues.",
    copiesCount: 295,
    component: <CyberGradientSpinner />,
    code: `<div className="relative w-12 h-12 flex items-center justify-center"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-indigo-500" /></div>`,
  },
  {
    id: "loader-tokenizing",
    title: "Tokenizing Process Indicator",
    category: "Loaders & Animations",
    description:
      "Monospace status pill with sequential pulsing block animation.",
    copiesCount: 340,
    component: <TokenizingLoader />,
    code: `<div className="flex items-center gap-2 font-mono text-xs text-cyan-400 bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800"><span>TOKENIZING</span></div>`,
  },
  {
    id: "loader-geometric-square",
    title: "Nested Geometric Spinner",
    category: "Loaders & Animations",
    description:
      "Counter-rotating square borders framing a bright center coordinate.",
    copiesCount: 162,
    component: <GeometricSquareLoader />,
    code: `<div className="relative w-12 h-12 flex items-center justify-center"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3 }} className="absolute inset-0 border border-cyan-500/30 rounded-xl" /></div>`,
  },
  {
    id: "loader-grid-matrix",
    title: "Pulsing Grid Matrix",
    category: "Loaders & Animations",
    description:
      "2x2 pulsing dot matrix with staggered neon motion illumination.",
    copiesCount: 218,
    component: <GridMatrixLoader />,
    code: `<div className="grid grid-cols-2 gap-1.5 w-8 h-8"><motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} className="rounded-sm bg-cyan-400" /></div>`,
  },
  {
    id: "loader-neon-spinner",
    title: "Glowing Neon Ring Loader",
    category: "Loaders & Animations",
    description:
      "Smooth glowing circular spinner with vivid neon backdrop dispersion.",
    copiesCount: 410,
    component: <NeonSpinnerLoader />,
    code: `<div className="relative w-12 h-12 flex items-center justify-center"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent" /></div>`,
  },
];
