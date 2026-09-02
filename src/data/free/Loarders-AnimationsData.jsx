import LoaderSpinner from "../../library/free/loaders/LoaderSpinner";
// --- Loaders Imports ---
import CyanRingLoader from "../../library/free/loaders/CyanRingLoader";
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
    id: "loader-cyan-ring",
    title: "Minimal Cyan Spinner",
    category: "Loaders & Animations",
    description:
      "A clean, minimalist spinning ring loader with vibrant cyan accent.",
    copiesCount: 142,
    component: <CyanRingLoader />,
    code: `<div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin cursor-pointer" />`,
  },
  {
    id: "loader-emerald-text",
    title: "Emerald Spinner with Text",
    category: "Loaders & Animations",
    description:
      "Centered vertical spinner paired with a clean status message indicator.",
    copiesCount: 188,
    component: <EmeraldTextLoader />,
    code: `<div className="flex flex-col gap-4 items-center justify-center text-slate-300 font-mono text-xs">\n  <div className="w-8 h-8 border-3 border-t-emerald-400 border-slate-800 rounded-full animate-spin"></div>\n  <span>Coming Soon...</span>\n</div>`,
  },
  {
    id: "loader-ping-radar",
    title: "Cyan Radar Ping Loader",
    category: "Loaders & Animations",
    description: "Pulsing expanding radar ring with a glowing core dot.",
    copiesCount: 210,
    component: <PingRadarLoader />,
    code: `<div className="relative flex items-center justify-center w-12 h-12">\n  <div className="absolute w-full h-full rounded-full border border-cyan-500/40 animate-ping"></div>\n  <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"></div>\n</div>`,
  },
  {
    id: "loader-bouncing-dots",
    title: "Gradient Bouncing Dots",
    category: "Loaders & Animations",
    description: "Playful bouncing dot trio featuring shifting neon colors.",
    copiesCount: 265,
    component: <BouncingDotsLoader />,
    code: `<div className="flex space-x-2 items-center justify-center">\n  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s] shadow-[0_0_10px_#22d3ee]"></div>\n  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s] shadow-[0_0_10px_#6366f1]"></div>\n  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce shadow-[0_0_10px_#22d3ee]"></div>\n</div>`,
  },
  {
    id: "loader-dual-ring",
    title: "Counter-Rotating Dual Ring",
    category: "Loaders & Animations",
    description:
      "Advanced dual-axis spinning rings with contrasting indigo and cyan gradients.",
    copiesCount: 312,
    component: <DualRingLoader />,
    code: `<div className="relative w-12 h-12 flex items-center justify-center">\n  <div className="absolute inset-0 border-2 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin"></div>\n  <div className="absolute inset-2 border-2 border-indigo-500/20 border-b-indigo-400 rounded-full animate-spin [animation-direction:reverse] [animation-duration:1.5s]"></div>\n</div>`,
  },
  {
    id: "loader-fb-skeleton",
    title: "Facebook-Style Shimmer Skeleton",
    category: "Loaders & Animations",
    description:
      "Horizontal sweeping shimmer card loader mimicking modern social feed placeholders.",
    copiesCount: 489,
    component: <FacebookSkeletonLoader />,
    code: `<div className="w-72 p-4 rounded-2xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-xl space-y-3 overflow-hidden relative shadow-lg">\n  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>\n  <div className="flex items-center space-x-3">\n    <div className="rounded-full bg-slate-800 h-10 w-10 shrink-0"></div>\n    <div className="space-y-2 flex-1">\n      <div className="h-3 bg-slate-800 rounded-md w-3/4"></div>\n      <div className="h-2 bg-slate-800/60 rounded-md w-1/2"></div>\n    </div>\n  </div>\n  <div className="h-16 bg-slate-800/50 rounded-xl"></div>\n</div>`,
  },
  {
    id: "loader-sound-wave",
    title: "Audio Equalizer Wave",
    category: "Loaders & Animations",
    description:
      "Rhythmic pulsing bars simulating live audio or data processing streams.",
    copiesCount: 230,
    component: <SoundWaveLoader />,
    code: `<div className="flex items-end gap-1 h-6">\n  <div className="w-1 bg-cyan-400 animate-[pulse_0.6s_ease-in-out_infinite] h-full rounded-full shadow-[0_0_8px_#22d3ee]"></div>\n  <div className="w-1 bg-cyan-400 animate-[pulse_0.8s_ease-in-out_infinite] h-3/4 rounded-full"></div>\n  <div className="w-1 bg-indigo-500 animate-[pulse_0.5s_ease-in-out_infinite] h-5/6 rounded-full shadow-[0_0_8px_#6366f1]"></div>\n  <div className="w-1 bg-cyan-400 animate-[pulse_0.7s_ease-in-out_infinite] h-1/2 rounded-full"></div>\n</div>`,
  },
  {
    id: "loader-dashed-ring",
    title: "Dashed Neon Ring",
    category: "Loaders & Animations",
    description:
      "Rotating dashed border container framing a glowing central nexus.",
    copiesCount: 175,
    component: <DashedRingLoader />,
    code: `<div className="relative flex items-center justify-center w-12 h-12">\n  <div className="absolute inset-0 border-2 border-dashed border-cyan-500/40 rounded-full animate-spin"></div>\n  <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>\n</div>`,
  },
  {
    id: "loader-dual-ping",
    title: "Multi-Layer Pulse Radar",
    category: "Loaders & Animations",
    description:
      "Concentric glowing rings radiating outward for high-tech status feeds.",
    copiesCount: 204,
    component: <DualPingLoader />,
    code: `<div className="relative flex items-center justify-center w-14 h-14">\n  <div className="absolute w-full h-full rounded-full bg-cyan-500/20 animate-ping"></div>\n  <div className="absolute w-3/4 h-3/4 rounded-full bg-indigo-500/30 animate-pulse"></div>\n  <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"></div>\n</div>`,
  },
  {
    id: "loader-gradient-spinner",
    title: "Cyber Gradient Spinner",
    category: "Loaders & Animations",
    description:
      "Sleek border ring transitioning smoothly between cyan and indigo hues.",
    copiesCount: 295,
    component: <CyberGradientSpinner />,
    code: `<div className="relative w-12 h-12">\n  <div className="absolute inset-0 rounded-full border-2 border-slate-800"></div>\n  <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-indigo-500 animate-spin shadow-[0_0_12px_rgba(34,211,238,0.3)]"></div>\n</div>`,
  },
  {
    id: "loader-tokenizing",
    title: "Tokenizing Process Indicator",
    category: "Loaders & Animations",
    description:
      "Monospace status pill with sequential pulsing block indicators.",
    copiesCount: 340,
    component: <TokenizingLoader />,
    code: `<div className="flex items-center gap-2 font-mono text-xs text-cyan-400 bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800 shadow-md">\n  <span>TOKENIZING</span>\n  <span className="flex gap-1">\n    <span className="w-1.5 h-3 bg-cyan-400 animate-pulse"></span>\n    <span className="w-1.5 h-3 bg-indigo-500 animate-pulse [animation-delay:0.2s]"></span>\n    <span className="w-1.5 h-3 bg-cyan-400 animate-pulse [animation-delay:0.4s]"></span>\n  </span>\n</div>`,
  },
  {
    id: "loader-geometric-square",
    title: "Nested Geometric Spinner",
    category: "Loaders & Animations",
    description:
      "Counter-rotating square borders framing a bright center coordinate.",
    copiesCount: 162,
    component: <GeometricSquareLoader />,
    code: `<div className="relative w-12 h-12 flex items-center justify-center">\n  <div className="absolute inset-0 border border-cyan-500/30 rounded-xl animate-spin"></div>\n  <div className="absolute inset-2 border border-indigo-500/40 rounded-lg animate-spin [animation-direction:reverse] [animation-duration:2s]"></div>\n  <div className="w-2 h-2 bg-cyan-400 rounded-sm shadow-[0_0_10px_#22d3ee]"></div>\n</div>`,
  },
  {
    id: "loader-grid-matrix",
    title: "Pulsing Grid Matrix",
    category: "Loaders & Animations",
    description: "2x2 pulsing dot matrix with staggered neon illumination.",
    copiesCount: 218,
    component: <GridMatrixLoader />,
    code: `<div className="grid grid-cols-2 gap-1.5 w-8 h-8">\n  <div className="bg-cyan-400 rounded-sm animate-pulse shadow-[0_0_8px_#22d3ee]"></div>\n  <div className="bg-indigo-500/50 rounded-sm animate-pulse [animation-delay:0.2s]"></div>\n  <div className="bg-indigo-500/50 rounded-sm animate-pulse [animation-delay:0.4s]"></div>\n  <div className="bg-cyan-400 rounded-sm animate-pulse [animation-delay:0.6s] shadow-[0_0_8px_#22d3ee]"></div>\n</div>`,
  },
  {
    id: "loader-neon-spinner",
    title: "Glowing Neon Ring Loader",
    category: "Loaders & Animations",
    description:
      "Smooth glowing circular spinner with vivid neon backdrop dispersion.",
    copiesCount: 410,
    component: <NeonSpinnerLoader />,
    code: `<div className="relative w-12 h-12">\n  <div className="w-full h-full rounded-full border-4 border-slate-800"></div>\n  <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>\n</div>`,
  },
];
