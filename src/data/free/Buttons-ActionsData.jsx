import BtnPrimary from "../../library/free/buttons/BtnPrimary";
import ArrowHoverButton from "../../library/free/buttons/arrowHoverButton";
import MonospaceLinkButton from "../../library/free/buttons/MonospaceLinkButton";
import NeonButton from "../../library/free/buttons/NeonButton";
import ToggleSwitch from "../../library/free/buttons/ToggleSwitch";
import GradientBorderButton from "../../library/free/buttons/GradientBorderButton";
import GradientFillButton from "../../library/free/buttons/GradientFillButton";

import MagneticButton from "../../library/free/buttons/MagneticButton";
import SpringElasticButton from "../../library/free/buttons/SpringElasticButton";
import LiquidMorphButton from "../../library/free/buttons/LiquidMorphButton";
import LaserBeamButton from "../../library/free/buttons/LaserBeamButton";
import GlitchButton from "../../library/free/buttons/GlitchButton";

import RadarScannerButton from "../../library/free/buttons/RadarScannerButton";
import SpotlightButton from "../../library/free/buttons/SpotlightButton";
import TerminalButton from "../../library/free/buttons/TerminalButton";
import SoundwaveButton from "../../library/free/buttons/SoundwaveButton";
import GlassBevelButton from "../../library/free/buttons/GlassBevelButton";

import HolographicShimmerButton from "../../library/free/buttons/HolographicShimmerButton";
import BioScanButton from "../../library/free/buttons/BioScanButton";
import QuantumFluxButton from "../../library/free/buttons/QuantumFluxButton";

import BrutalPrimaryButton from "../../library/free/buttons/BrutalPrimaryButton";
import BrutalActionPill from "../../library/free/buttons/BrutalActionPill";

// Updated buttonsData array for your state management
export const buttonsData = [
  {
    id: "brutal-primary-btn",
    title: "Neo-Brutalism Primary Button",
    category: "Buttons & Actions",
    description:
      "High-contrast brutalist button with hard black shadows, thick borders, and Framer Motion micro-interactions.",
    copiesCount: 340,
    component: <BrutalPrimaryButton />,
    code: `<motion.button className="px-5 py-2.5 bg-yellow-400 text-slate-950 font-black text-xs border-2 border-slate-950 rounded-lg shadow-[4px_4px_0px_0px_#020617]">CLICK_ME_NOW</motion.button>`,
  },
  {
    id: "brutal-action-pill",
    title: "Neo-Brutalism Action Pill",
    category: "Buttons & Actions",
    description:
      "Vibrant pink brutalist action element featuring distinct offset hard shadows and crisp typography.",
    copiesCount: 290,
    component: <BrutalActionPill />,
    code: `<motion.button className="px-5 py-2.5 bg-pink-500 text-white font-black text-xs border-2 border-slate-950 rounded-lg shadow-[4px_4px_0px_0px_#020617]">EXECUTE_ACTION</motion.button>`,
  },

  {
    id: "btn-holo-shimmer",
    title: "Holographic Shimmer Button",
    category: "Buttons & Actions",
    description:
      "Cyberpunk neon button featuring an animated holographic light refraction beam sweep.",
    copiesCount: 490,
    component: <HolographicShimmerButton />,
    code: `<motion.button whileHover={{ scale: 1.03 }} className="relative overflow-hidden px-5 py-2.5 bg-slate-950 border border-pink-500/40 text-pink-400 font-mono text-xs rounded-xl">HOLO_SHIMMER</motion.button>`,
  },
  {
    id: "btn-bio-scan",
    title: "Bio-Scan Pulse Button",
    category: "Buttons & Actions",
    description:
      "Interactive security-themed button with live scanning beam and radar pulse dot.",
    copiesCount: 360,
    component: <BioScanButton />,
    code: `<motion.button className="relative px-5 py-2.5 bg-slate-900 border border-emerald-500/40 text-emerald-400 font-mono text-xs rounded-xl">BIO_ACCESS</motion.button>`,
  },
  {
    id: "btn-quantum-flux",
    title: "Quantum Flux Slide Button",
    category: "Buttons & Actions",
    description:
      "High-end transition button where text morphs and slides smoothly on hover.",
    copiesCount: 580,
    component: <QuantumFluxButton />,
    code: `<motion.button whileHover={{ scale: 1.04 }} className="relative px-5 py-2.5 bg-slate-950 border border-violet-500/40 text-violet-300 font-mono text-xs rounded-xl overflow-hidden group">QUANTUM_FLUX</motion.button>`,
  },
  {
    id: "btn-radar-scanner",
    title: "Radar Scanner Action Button",
    category: "Buttons & Actions",
    description:
      "Cyberpunk action button equipped with a sweeping scanner light and animated indicator.",
    copiesCount: 390,
    component: <RadarScannerButton />,
    code: `<motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }} className="relative overflow-hidden px-5 py-2.5 bg-slate-950 border border-cyan-500/40 text-cyan-300 font-mono text-xs rounded-xl cursor-pointer group"><span className="relative z-10 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />SCAN_TARGET</span></motion.button>`,
  },
  {
    id: "btn-spotlight-follower",
    title: "Interactive Spotlight Follower Button",
    category: "Buttons & Actions",
    description:
      "Sleek button featuring a dynamic cursor-tracking light glow effect on hover.",
    copiesCount: 470,
    component: <SpotlightButton />,
    code: `<motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }} className="relative overflow-hidden px-5 py-2.5 bg-slate-900 border border-slate-800 text-slate-200 font-medium text-xs rounded-xl cursor-pointer group"><span className="relative z-10">Spotlight Glow</span></motion.button>`,
  },
  {
    id: "btn-terminal-prompt",
    title: "Terminal Command Prompt Button",
    category: "Buttons & Actions",
    description:
      "Developer-first action button styled like an active terminal command line.",
    copiesCount: 520,
    component: <TerminalButton />,
    code: `<motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }} className="px-4 py-2.5 bg-slate-950 border border-slate-800 text-cyan-400 font-mono text-xs rounded-xl flex items-center gap-2 cursor-pointer"><span className="text-slate-500">$</span><span>npm run deploy</span></motion.button>`,
  },
  {
    id: "btn-soundwave-sync",
    title: "Live Soundwave Active Button",
    category: "Buttons & Actions",
    description:
      "Interactive button featuring animated equalizer wave bars for audio or stream triggers.",
    copiesCount: 310,
    component: <SoundwaveButton />,
    code: `<motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }} className="px-5 py-2.5 bg-slate-950 border border-indigo-500/40 text-indigo-300 font-mono text-xs rounded-xl flex items-center gap-3 cursor-pointer"><span>AUDIO_SYNC</span></motion.button>`,
  },
  {
    id: "btn-glass-bevel",
    title: "Glassmorphic Reflection Bevel Button",
    category: "Buttons & Actions",
    description:
      "Modern glassmorphic button with an incoming light refraction sweep on hover.",
    copiesCount: 485,
    component: <GlassBevelButton />,
    code: `<motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }} className="relative overflow-hidden px-5 py-2.5 bg-slate-900/60 backdrop-blur-md border border-white/10 text-white font-semibold text-xs rounded-xl cursor-pointer">Secure Bevel</motion.button>`,
  },

  {
    id: "btn-magnetic",
    title: "Magnetic Cursor-Pull Button",
    category: "Buttons & Actions",
    description:
      "Futuristic button featuring spring-physics motion and cyber border glow.",
    copiesCount: 412,
    component: <MagneticButton />,
    code: `<motion.button whileHover={{ scale: 1.08, y: -2 }} whileTap={{ scale: 0.94 }} transition={{ type: "spring", stiffness: 350, damping: 15 }} className="px-5 py-2.5 bg-slate-900 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 font-mono text-xs rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.15)] cursor-pointer">[ Magnetic Pull ]</motion.button>`,
  },
  {
    id: "btn-spring-elastic",
    title: "Spring Elastic Push Button",
    category: "Buttons & Actions",
    description:
      "High-energy button with bouncy spring physics and micro-rotation feedback.",
    copiesCount: 289,
    component: <SpringElasticButton />,
    code: `<motion.button whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 500, damping: 10 }} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 cursor-pointer">Elastic Pop</motion.button>`,
  },
  {
    id: "btn-liquid-morph",
    title: "Liquid Morphing Fill Button",
    category: "Buttons & Actions",
    description:
      "Sleek button where a vibrant cyan liquid overlay rises smoothly on hover.",
    copiesCount: 534,
    component: <LiquidMorphButton />,
    code: `<motion.button whileHover="hover" whileTap={{ scale: 0.95 }} className="relative overflow-hidden px-5 py-2.5 bg-slate-950 border border-slate-800 text-slate-200 font-semibold text-xs rounded-xl cursor-pointer group"><span className="relative z-10 group-hover:text-slate-950 transition-colors">Liquid Fill</span><motion.span variants={{ hover: { y: "0%" } }} initial={{ y: "100%" }} transition={{ duration: 0.3 }} className="absolute inset-0 bg-cyan-400 z-0" /></motion.button>`,
  },
  {
    id: "btn-laser-beam",
    title: "Laser Border-Tracing Beam Button",
    category: "Buttons & Actions",
    description:
      "Cyberpunk action button wrapped with a continuous spinning laser beam border.",
    copiesCount: 610,
    component: <LaserBeamButton />,
    code: `<div className="relative p-[1px] rounded-xl overflow-hidden inline-block group"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} className="absolute inset-[-50%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_180deg,#22d3ee_360deg)]" /><button className="relative px-5 py-2 bg-slate-950 text-cyan-400 text-xs font-mono rounded-[11px]"> // Laser Beam</button></div>`,
  },
  {
    id: "btn-cyber-glitch",
    title: "Cyberpunk Glitch Effect Button",
    category: "Buttons & Actions",
    description:
      "Distorted matrix-style button featuring interactive skew and color-shift motion.",
    copiesCount: 450,
    component: <GlitchButton />,
    code: `<motion.button whileHover={{ skewX: [-5, 5, -2, 0], scale: 1.03 }} whileTap={{ scale: 0.95 }} className="px-5 py-2.5 bg-slate-900 border border-rose-500/40 text-rose-400 hover:text-cyan-400 font-mono text-xs font-bold rounded-xl shadow-[0_0_15px_rgba(244,63,94,0.2)] cursor-pointer">SYS_GLITCH()</motion.button>`,
  },

  // old
  {
    id: "btn-primary",
    title: "Interactive Primary Button",
    category: "Buttons & Actions",
    description:
      "Clean Tailwind & Framer Motion button with smooth spring scale and shadow glow.",
    copiesCount: 342,
    component: <BtnPrimary />,
    code: `<motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }} className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-xl shadow-lg shadow-cyan-500/20 cursor-pointer">Click Me</motion.button>`,
  },
  {
    id: "btn-arrow-hover",
    title: "Arrow Hover Button",
    category: "Buttons & Actions",
    description:
      "Modern button featuring a spring-physics sliding arrow icon on hover.",
    copiesCount: 210,
    component: <ArrowHoverButton />,
    code: `<motion.button whileHover="hover" whileTap={{ scale: 0.95 }} className="group px-5 py-2.5 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-200 text-sm rounded-xl inline-flex items-center gap-2 cursor-pointer">\n  <span>Explore More</span>\n  <motion.span variants={{ hover: { x: 5 } }} className="text-cyan-400">→</motion.span>\n</motion.button>`,
  },
  {
    id: "btn-mono-minimal",
    title: "Minimalist Monospace Link Button",
    category: "Buttons & Actions",
    description:
      "Understated action button with monospace typography and smooth hover highlight.",
    copiesCount: 380,
    component: <MonospaceLinkButton />,
    code: `<motion.button whileHover={{ scale: 1.05, color: "#22d3ee" }} whileTap={{ scale: 0.95 }} className="px-4 py-2 bg-transparent text-slate-400 font-mono text-xs tracking-wider uppercase cursor-pointer">[ View Logs ]</motion.button>`,
  },
  {
    id: "btn-neon-minimal",
    title: "Minimal Neon Glow Button",
    category: "Buttons & Actions",
    description:
      "Dark-themed button featuring dynamic neon luminosity and tap feedback.",
    copiesCount: 415,
    component: <NeonButton />,
    code: `<motion.button whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(34,211,238,0.4)" }} whileTap={{ scale: 0.95 }} className="px-5 py-2.5 bg-slate-950 border border-cyan-500/40 text-cyan-400 text-sm font-medium rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.15)] cursor-pointer">Neon Glow</motion.button>`,
  },
  {
    id: "toggle-switch-cyan",
    title: "Cyan Glow Toggle Switch",
    category: "Buttons & Actions",
    description:
      "Modern layout-animated toggle switch with glowing cyan neon thumb state.",
    copiesCount: 192,
    component: <ToggleSwitch />,
    code: `// Utilizes Framer Motion layout animation for fluid toggle behavior.`,
  },
  {
    id: "btn-gradient-border",
    title: "Gradient Border Button",
    category: "Buttons & Actions",
    description:
      "Interactive button wrapped in a glowing multi-color gradient border container.",
    copiesCount: 275,
    component: <GradientBorderButton />,
    code: `<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} className="p-0.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 inline-block cursor-pointer">\n  <button className="px-5 py-2 bg-slate-950 text-white text-xs font-semibold rounded-[10px]">Secure Access</button>\n</motion.div>`,
  },
  {
    id: "btn-gradient-fill",
    title: "Gradient Fill Deploy Button",
    category: "Buttons & Actions",
    description:
      "High-end action button featuring a radiant dual-color gradient fill and smooth depth.",
    copiesCount: 310,
    component: <GradientFillButton />,
    code: `<motion.button whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(34,211,238,0.3)" }} whileTap={{ scale: 0.95 }} className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs rounded-xl cursor-pointer">Deploy Pipeline</button>`,
  },
];
