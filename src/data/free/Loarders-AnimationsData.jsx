import CyanRingLoader from "../../library/free/loaders/CyanRingLoader";
import PristineLightButton from "../../library/free/buttons/PristineLightButton";
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
import AnalyticsCardSkeleton from "../../library/free/loaders/AnalyticsCardSkeleton";

export const loadersData = [
  {
    id: "loader-bouncing-dots",
    title: "Solar Flare Bouncing Dots Loader",
    category: "Loaders & Animations",
    description:
      "High-energy bouncing dots loader featuring multi-color solar flare gradients, clean transparent container styling with subtle borders, and a responsive layout for modern dashboards.",
    copiesCount: 185,

    // Hyper-realistic use cases
    useCases: [
      "AI Chat & Response Streaming: Positioned seamlessly inside clean chat interfaces while waiting for real-time text generation.",
      "Fintech & Dashboard Status Bars: Used as a professional, non-intrusive inline loading indicator during background API requests.",
    ],

    component: <BouncingDotsLoader />,

    code: `import { motion } from "framer-motion";\n\nexport default function BouncingDotsLoader() {\n  const colors = [\n    "bg-amber-400 shadow-[0_0_10px_#fbbf24]",\n    "bg-orange-500 shadow-[0_0_10px_#f97316]",\n    "bg-rose-500 shadow-[0_0_10px_#f43f5e]"\n  ];\n\n  return (\n    <div className="w-full max-w-sm mx-auto py-5 px-5 rounded-2xl bg-transparent flex items-center justify-between font-baloo select-none shadow-md border border-slate-200">\n      <div className="flex items-center gap-2.5">\n        <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />\n        <span className="text-base font-semibold text-slate-400 tracking-wide capitalize">\n          Synthesizing AI Response...\n        </span>\n      </div>\n      <div className="flex space-x-2.5 items-center">\n        {[0, 0.2, 0.4].map((delay, i) => (\n          <motion.div\n            key={i}\n            animate={{ y: [0, -6, 0], scale: [1, 1.15, 1] }}\n            transition={{\n              repeat: Infinity,\n              duration: 0.6,\n              delay,\n              ease: "easeInOut",\n            }}\n            className={\`w-3 h-3 rounded-full \${colors[i]}\`}\n          />\n        ))}\n      </div>\n    </div>\n  );\n}`,
  },

  // {
  //   id: "btn-pristine-light",
  //   title: "Pristine Pastel Corporate Light CTA Button",
  //   category: "Buttons & Actions",
  //   description:
  //     "Clean, professional light-mode action button featuring soft pastel gradient backdrops, crisp slate typography, delicate drop shadows, and an interactive icon container.",
  //   copiesCount: 390,

  //   // Hyper-realistic use cases
  //   useCases: [
  //     "B2B SaaS Enterprise Portals: Positioned on clean light-mode marketing headers for 'Schedule Enterprise Demo' or 'Request Access' triggers.",
  //     "Corporate Financial Platforms: Used in professional executive dashboards, billing settings, and invoice approval flows.",
  //   ],

  //   component: <PristineLightButton />,

  //   code: `import { motion } from "framer-motion";\nimport { FiArrowRight } from "react-icons/fi";\n\nexport default function PristineLightButton({ text = "Schedule Enterprise Demo", onClick }) {\n  return (\n    <motion.button\n      whileHover={{ scale: 1.03, y: -2, boxShadow: "0 20px 35px -10px rgba(99, 102, 241, 0.25)" }}\n      whileTap={{ scale: 0.96 }}\n      transition={{ type: "spring", stiffness: 400, damping: 17 }}\n      onClick={onClick}\n      className="px-7 py-3.5 bg-gradient-to-r from-white via-slate-50 to-indigo-50/50 border border-slate-200/80 hover:border-indigo-300 text-slate-800 font-baloo text-xs font-bold rounded-2xl shadow-[0_10px_25px_rgba(100,116,139,0.1)] cursor-pointer select-none flex items-center gap-3 group transition-colors"\n    >\n      <span className="tracking-wide group-hover:text-indigo-600 transition-colors">\n        {text}\n      </span>\n      <div className="w-6 h-6 rounded-full bg-indigo-50 group-hover:bg-indigo-600 flex items-center justify-center transition-colors">\n        <FiArrowRight className="w-3.5 h-3.5 text-indigo-600 group-hover:text-white transition-colors" />\n      </div>\n    </motion.button>\n  );\n}`,
  // },

  {
    id: "loader-emerald-text",
    title: "Emerald Spinner with Text",
    category: "Loaders & Animations",
    description:
      "Sleek horizontal loading card featuring a rotating emerald spinner, clean enterprise status typography, live security badge, and modern light-theme container styling.",
    copiesCount: 188,

    // Hyper-realistic use cases
    useCases: [
      "SaaS Light Mode Dashboards: Positioned inside top or inline notification bars during active database synchronization and record encryption.",
      "Fintech Security Verification: Used as a clean, horizontal status indicator while establishing secure SSL tunnels for transaction processing.",
    ],

    component: <EmeraldTextLoader />,

    code: `import { motion } from "framer-motion";\n\nexport default function EmeraldTextLoader() {\n  return (\n    <div className="w-full max-w-sm mx-auto py-3.5 px-5 rounded-2xl bg-slate-100 border border-slate-200 shadow-md flex items-center gap-4 font-baloo select-none">\n      <motion.div\n        animate={{ rotate: 360 }}\n        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}\n        className="w-7 h-7 border-2 border-transparent border-t-[4px] border-t-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)] shrink-0"\n      />\n      <div className="flex flex-col flex-1">\n        <div className="flex items-center justify-between">\n          <span className="text-xs font-bold text-slate-800 tracking-wide">\n            Synchronizing Database\n          </span>\n          <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">\n            Live\n          </span>\n        </div>\n        <p className="text-[11px] text-slate-500 font-medium mt-0.5">\n          Secure SSL tunnel established...\n        </p>\n      </div>\n    </div>\n  );\n}`,
  },

  {
    id: "loader-ping-radar",
    title: "Cyan Radar Ping Loader",
    category: "Loaders & Animations",
    description:
      "Pulsing expanding radar ring motion with a glowing core dot, designed as a minimalist standalone indicator for real-time status tracking.",
    copiesCount: 210,

    // Hyper-realistic use cases
    useCases: [
      "DevOps & Network Monitoring Tables: Positioned inside table rows or server node lists to indicate active, real-time connectivity status.",
      "Geo-Distributed Cloud Portals: Used as live radar ping markers on infrastructure topology maps to show active cluster regions.",
    ],

    component: <PingRadarLoader />,

    code: `import { motion } from "framer-motion";\n\nexport default function PingRadarLoader() {\n  return (\n    <div className="relative flex items-center justify-center w-12 h-12 select-none">\n      <motion.div\n        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}\n        transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}\n        className="absolute w-full h-full rounded-full border border-cyan-500/60 shadow-[0_0_10px_rgba(34,211,238,0.3)]"\n      />\n      <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />\n    </div>\n  );\n}`,
  },

  {
    id: "loader-dual-ring",
    title: "Counter-Rotating Dual Ring",
    category: "Loaders & Animations",
    description:
      "Advanced dual-axis counter-rotating motion rings with cyan and indigo gradients, designed as a clean standalone indicator for high-tech interfaces.",
    copiesCount: 312,

    // Hyper-realistic use cases
    useCases: [
      "Fintech Crypto Exchanges: Positioned as an inline status loader inside active transaction matching tables and order books.",
      "Cloud SaaS Infrastructure: Used inside cluster performance monitoring widgets to indicate background data synchronization.",
    ],

    component: <DualRingLoader />,

    code: `import { motion } from "framer-motion";\n\nexport default function DualRingLoader() {\n  return (\n    <div className="relative w-16 h-16 flex items-center justify-center select-none">\n      <motion.div\n        animate={{ rotate: 360 }}\n        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}\n        className="absolute inset-0 border-3 border-cyan-500/20 border-t-cyan-400 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.9)]"\n      />\n      <motion.div\n        animate={{ rotate: -360 }}\n        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}\n        className="absolute inset-2 border-3 border-indigo-500/20 border-b-indigo-500 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.9)]"\n      />\n    </div>\n  );\n}`,
  },

  {
    id: "loader-fb-skeleton",
    title: "Facebook-Style Shimmer Skeleton",
    category: "Loaders & Animations",
    description:
      "Horizontal sweeping shimmer card loader powered by Framer Motion placeholders and responsive container layout.",
    copiesCount: 489,

    useCases: [
      "Social & Activity Feeds: Positioned inside dynamic feed areas while fetching user posts and notification details.",
      "SaaS Profile Cards: Used as a placeholder state for team member lists and user accounts during initial data loading.",
    ],

    component: <FacebookSkeletonLoader />,

    code: `import { motion } from "framer-motion";\n\nexport default function FacebookSkeletonLoader() {\n  return (\n    <div className="w-full max-w-sm mx-auto p-4 rounded-2xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-xl space-y-3 overflow-hidden relative shadow-lg select-none">\n      <motion.div\n        animate={{ x: ["-100%", "100%"] }}\n        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}\n        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none"\n      />\n      <div className="flex items-center space-x-3">\n        <div className="rounded-full bg-slate-800 h-10 w-10 shrink-0" />\n        <div className="space-y-2 flex-1">\n          <div className="h-3 bg-slate-800 rounded-md w-3/4" />\n          <div className="h-2 bg-slate-800/60 rounded-md w-1/2" />\n        </div>\n      </div>\n      <div className="h-16 bg-slate-800/50 rounded-xl" />\n    </div>\n  );\n}`,
  },

  {
    id: "loader-analytics-skeleton",
    title: "Analytics Metric Card Skeleton",
    category: "Loaders & Animations",
    description:
      "SaaS dashboard metric and chart placeholder featuring cyan sweeping shimmer and structured card placeholders.",
    copiesCount: 412,

    useCases: [
      "Fintech Revenue Dashboards: Positioned inside financial metric cards while calculating live transactional volumes.",
      "Cloud Infrastructure Panels: Used as loading states for server resource usage and traffic analytics widgets.",
    ],

    component: <AnalyticsCardSkeleton />,

    code: `import { motion } from "framer-motion";\n\nexport default function AnalyticsCardSkeleton() {\n  return (\n    <div className="w-full max-w-sm mx-auto p-4 rounded-2xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-xl space-y-4 overflow-hidden relative shadow-lg select-none">\n      <motion.div\n        animate={{ x: ["-100%", "100%"] }}\n        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}\n        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none"\n      />\n      <div className="flex items-center justify-between">\n        <div className="h-3 bg-slate-800 rounded-md w-1/3" />\n        <div className="h-5 bg-slate-800/60 rounded-md w-12" />\n      </div>\n      <div className="space-y-2">\n        <div className="h-7 bg-slate-800 rounded-md w-1/2" />\n        <div className="h-2 bg-slate-800/60 rounded-md w-2/3" />\n      </div>\n      <div className="flex items-end gap-2 pt-2 h-12">\n        <div className="w-1/4 h-full bg-slate-800/50 rounded-t-lg" />\n        <div className="w-1/4 h-3/4 bg-slate-800/50 rounded-t-lg" />\n        <div className="w-1/4 h-5/6 bg-slate-800/50 rounded-t-lg" />\n        <div className="w-1/4 h-full bg-slate-800/50 rounded-t-lg" />\n      </div>\n    </div>\n  );\n}`,
  },

  {
    id: "loader-sound-wave",
    title: "Audio Equalizer Wave",
    category: "Loaders & Animations",
    description:
      "Compact square widget container featuring rhythmic pulsing vertical bars, transparent background styling, and clean light-theme typography for audio search states.",
    copiesCount: 230,

    // Hyper-realistic use cases
    useCases: [
      "Music & Podcast Streaming Platforms: Used inside square grid cards or modal widgets while querying audio databases on light-mode interfaces.",
      "Voice AI Assistants: Positioned as an active listening indicator in square UI panels during speech recognition.",
    ],

    component: <SoundWaveLoader />,

    code: `import { motion } from "framer-motion";\n\nexport default function SoundWaveLoader() {\n  return (\n    <div className="w-48 h-48 mx-auto p-5 rounded-3xl bg-transparent border border-slate-100 flex flex-col justify-between items-center text-center font-baloo select-none shadow-md">\n      <div className="space-y-1">\n        <h4 className="text-xs font-bold text-cyan-600 leading-tight tracking-wide">\n          Searching Audio Streams\n        </h4>\n      </div>\n      <div className="flex items-end justify-center gap-1.5 h-10 my-auto">\n        {[0.6, 0.8, 0.5, 0.7, 0.65].map((dur, i) => (\n          <motion.div\n            key={i}\n            animate={{ height: ["20%", "100%", "20%"] }}\n            transition={{\n              repeat: Infinity,\n              duration: dur,\n              ease: "easeInOut",\n            }}\n            className={\`w-2 rounded-full \${i === 2 ? "bg-indigo-500 shadow-[0_0_8px_#6366f1]" : "bg-cyan-400 shadow-[0_0_8px_#22d3ee]"}\`}\n          />\n        ))}\n      </div>\n    </div>\n  );\n}`,
  },

  {
    id: "loader-dashed-ring",
    title: "Dashed Neon Ring",
    category: "Loaders & Animations",
    description:
      "Rotating dashed border container framing a glowing central nexus, designed as a clean standalone minimalist indicator.",
    copiesCount: 175,

    // Hyper-realistic use cases
    useCases: [
      "Fintech Status Indicators: Positioned inside transaction processing rows to show active secure states.",
      "Cloud SaaS Infrastructure: Used as a minimalist cluster status indicator widget.",
    ],

    component: <DashedRingLoader />,

    code: `import { motion } from "framer-motion";\n\nexport default function DashedRingLoader() {\n  return (\n    <div className="relative flex items-center justify-center w-12 h-12 select-none">\n      <motion.div\n        animate={{ rotate: 360 }}\n        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}\n        className="absolute inset-0 border-2 border-dashed border-cyan-500/40 rounded-full"\n      />\n      <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />\n    </div>\n  );\n}`,
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
