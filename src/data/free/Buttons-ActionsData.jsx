import BtnPrimary from "../../library/free/buttons/BtnPrimary";
import ArrowHoverButton from "../../library/free/buttons/arrowHoverButton";
import MonospaceLinkButton from "../../library/free/buttons/MonospaceLinkButton";
import NeonButton from "../../library/free/buttons/NeonButton";
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

import BrutalPrimaryButton from "../../../old version/library/BrutalPrimaryButton";

import AuroraGlassButton from "../../library/free/buttons/AuroraGlassButton";

// Updated buttonsData array for your state management
export const buttonsData = [
  // Neo-Brutalism Primary Button
  {
    id: "brutal-primary-btn",
    title: "Neo-Brutalism Primary Button",
    category: "Buttons & Actions",
    description:
      "High-contrast brutalist button with hard black shadows, thick borders, and Framer Motion micro-interactions.",
    copiesCount: 340,
    useCases: [
      "SaaS Landing Pages (For 'Claim Free Trial' or 'Get Started' CTA)",
      "Creator Economy / Gumroad (For digital product 'Buy Now' buttons)",
    ],
    component: <BrutalPrimaryButton />,

    code: `import { motion } from "framer-motion";\n\nexport default function BrutalPrimaryButton() {\n  return (\n    <motion.button\n      whileHover={{ x: -2, y: -2 }}\n      whileTap={{ x: 2, y: 2 }}\n      className="px-8 py-2.5 bg-yellow-400 text-slate-950 font-black font-baloo text-xs border-2 border-slate-950 rounded-lg shadow-[4px_4px_0px_0px_#020617] cursor-pointer"\n    >\n      CLick Me Now\n    </motion.button>\n  );\n}`,
  },

  // holographic Shimmer Button
  {
    id: "btn-holo-shimmer",
    title: "Holographic Shimmer Button",
    category: "Buttons & Actions",
    description:
      "Cyberpunk neon button featuring an animated holographic light refraction beam sweep, gradient text, and smooth Framer Motion micro-interactions.",
    copiesCount: 490,

    // Real-world Use Cases
    useCases: [
      "Sci-Fi, Web3, & Crypto Landing Pages (For wallet connections, marketplace actions, or token minting buttons)",
      "AI SaaS Platforms & Creative Portfolios (For high-tech UI components that need a futuristic, eye-catching glow)",
    ],

    component: <HolographicShimmerButton />,

    code: `import { motion } from "framer-motion";

export default function HolographicShimmerButton({
  text = "Holo Shimmer",
  onClick,
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(236,72,153,0.5" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative overflow-hidden px-6 py-2 bg-white border-4 border-pink-500/40 rounded-xl cursor-pointer group shadow-[0_0_15px_rgba(236,72,153,0.15)] select-none">
      {/* holographic gradient text */}
      <span className="relative z-10 font-baloo font-bold text-lg bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        {text}
      </span>

      {/* shimmer light sweep effect */}
      <motion.div
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400 to-transparent pointer-events-none"
      />
    </motion.button>
  );
}
`,
  },

  {
    id: "btn-bio-scan",
    title: "Bio-Scan Pulse Button",
    category: "Buttons & Actions",
    description:
      "Interactive security-themed button with live scanning beam, pulsing radar dot, and smooth Framer Motion micro-interactions.",
    copiesCount: 360,

    // Hyper-realistic use cases
    useCases: [
      "Online Banking & Fintech Apps: On the 'Confirm High-Value Transfer' or 'Biometric 2FA Login' popup screen.",
      "Password Managers & Cyber Security Dashboards: For the 'Unlock Secure Vault' or 'Decrypt Database' action button.",
    ],

    component: <BioScanButton />,

    code: `import { motion } from "framer-motion";\nimport { useState } from "react";\n\nexport default function BioScanButton() {\n  const [scanning, setScanning] = useState(false);\n\n  return (\n    <motion.button\n      onHoverStart={() => setScanning(true)}\n      onHoverEnd={() => setScanning(false)}\n      whileTap={{ scale: 0.95 }}\n      className="relative px-8 py-3 bg-slate-900 border border-emerald-500/40 text-emerald-400 font-baloo text-xs rounded-xl overflow-hidden cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.15)]"\n    >\n      <span className="relative z-10 flex items-center gap-3">\n        <span className={\`w-2.5 h-2.5 rounded-full \${scanning ? "bg-emerald-400 animate-ping" : "bg-emerald-600"}\`} />\n        BIO ACCESS\n      </span>\n      {scanning && (\n        <motion.div\n          className="absolute bottom-0 left-0 h-0.5 bg-emerald-400 shadow-[0_0_8px_#34d399]"\n          initial={{ width: "0%" }}\n          animate={{ width: "100%" }}\n          transition={{ duration: 0.8, repeat: Infinity }}\n        />\n      )}\n    </motion.button>\n  );\n}`,
  },

  {
    id: "aurora-glass-btn",
    title: "Aurora Glassmorphic Liquid Button",
    category: "Buttons & Actions",
    description:
      "Vibrant multi-color gradient button featuring glassmorphism, liquid light sweep, and glowing shadows that breaks away from boring dark themes.",
    copiesCount: 520,

    // Hyper-realistic use cases
    useCases: [
      "AI SaaS Platforms & Creative Startup Apps: Positioned on the main Hero section for high-conversion CTAs like 'Launch AI Studio' or 'Upgrade to Pro'.",
      "Modern Portfolio & Agency Websites: On vibrant light or dark backgrounds to immediately catch the user's attention for 'Start Project' actions.",
    ],

    component: <AuroraGlassButton />,

    code: `import { motion } from "framer-motion";\nimport { FiSparkles } from "react-icons/fi";\n\nexport default function AuroraGlassButton({ text = "Launch AI Studio", onClick }) {\n  return (\n    <motion.button\n      whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(219,39,119,0.4)" }}\n      whileTap={{ scale: 0.95 }}\n      onClick={onClick}\n      className="relative px-9 py-3.5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 text-white font-baloo text-sm font-bold rounded-2xl shadow-[0_10px_25px_rgba(219,39,119,0.3)] cursor-pointer overflow-hidden group select-none border border-white/25 backdrop-blur-xl"\n    >\n      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />\n      <span className="relative z-10 flex items-center gap-2.5 drop-shadow-md">\n        <FiSparkles className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform duration-300" />\n        {text}\n      </span>\n    </motion.button>\n  );\n}`,
  },

  {
    id: "quantum-flux-slide-btn",
    title: "Cyber Teal Social Slide Button",
    category: "Buttons & Actions",
    description:
      "Futuristic interactive button featuring a striking cyan-to-emerald gradient theme, smooth sliding text, and distinct social media link reveals on hover.",
    copiesCount: 410,

    // Hyper-realistic use cases
    useCases: [
      "Tech Startup & Software Agency Landing Pages: In the header or footer section for instant tech support or direct client inquiries via WhatsApp.",
      "Cybersecurity & IT Consultation Portals: Positioned on the main service banner to let enterprise clients initiate direct communication.",
    ],

    component: <QuantumFluxButton />,

    code: `import { motion } from "framer-motion";\nimport { FaFacebook, FaWhatsapp, FaPhone } from "react-icons/fa6";\n\nexport default function QuantumFluxButton() {\n  return (\n    <motion.div\n      whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(20, 184, 166, 0.4)" }}\n      whileTap={{ scale: 0.95 }}\n      className="relative px-10 py-3.5 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 text-white font-baloo text-xs rounded-2xl overflow-hidden cursor-pointer shadow-[0_10px_25px_rgba(20,184,166,0.3)] group h-14 flex items-center justify-center select-none border border-teal-200/40"\n    >\n      <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-y-10 font-bold tracking-widest text-sm drop-shadow-md">\n        Connect Now\n      </span>\n      <div className="absolute inset-0 flex items-center justify-center translate-y-10 group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-r from-cyan-700 via-teal-700 to-emerald-700">\n        <ul className="flex flex-row gap-6 items-center text-white">\n          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors duration-200"><FaFacebook className="w-5 h-5 drop-shadow-md" /></a></li>\n          <li><a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-200"><FaWhatsapp className="w-5 h-5 drop-shadow-md" /></a></li>\n          <li><a href="tel:+94000000000" className="hover:text-rose-300 transition-colors duration-200"><FaPhone className="w-5 h-5 drop-shadow-md" /></a></li>\n        </ul>\n      </div>\n    </motion.div>\n  );\n}`,
  },

  {
    id: "btn-radar-scanner",
    title: "Deep Ocean Threat Radar Button",
    category: "Buttons & Actions",
    description:
      "High-tech security and analytics button featuring an active radar sweep animation, dual-color amber threat indicator, and deep ocean gradient styling.",
    copiesCount: 380,

    // Real-world use cases
    useCases: [
      "Cybersecurity & Cloud Threat Dashboards: On the 'Scan Vulnerabilities' or 'Analyze Network Threats' action banners.",
      "AI Data Analytics & Server Monitoring Tools: Positioned in live telemetry control panels for triggering instant server health diagnostics.",
    ],

    component: <RadarScannerButton />,

    code: `import { motion } from "framer-motion";\n\nexport default function RadarScannerButton({ text = "Analyze Network Threats", onClick }) {\n  return (\n    <motion.button\n      whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(6, 182, 212, 0.4)" }}\n      whileTap={{ scale: 0.95 }}\n      onClick={onClick}\n      className="relative overflow-hidden px-8 py-3.5 bg-gradient-to-r from-blue-950 via-cyan-950 to-slate-900 border-2 border-cyan-400/50 text-cyan-200 font-baloo text-xs font-bold rounded-2xl shadow-[0_10px_25px_rgba(6,182,212,0.2)] cursor-pointer group select-none"\n    >\n      <motion.div\n        animate={{ x: ["-100%", "100%"] }}\n        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}\n        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none"\n      />\n      <span className="relative z-10 flex items-center gap-3 tracking-wider">\n        <span className="relative flex h-3 w-3">\n          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />\n          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500 shadow-[0_0_10px_#f59e0b]" />\n        </span>\n        {text}\n      </span>\n    </motion.button>\n  );\n}`,
  },

  {
    id: "btn-spotlight-follower",
    title: "Warm Amber Spotlight Tracker Button",
    category: "Buttons & Actions",
    description:
      "Luxurious cursor-tracking amber spotlight button featuring a warm obsidian gradient, smooth mouse position reactive glow, and elite styling.",
    copiesCount: 470,

    // Hyper-realistic use cases
    useCases: [
      "Luxury E-Commerce & High-End Brand Portfolios: Positioned on the main product landing page for 'Explore Elite Tiers' or 'VIP Collection' CTAs.",
      "Exclusive Membership & SaaS Pricing Dashboards: On premium subscription tiers for 'Upgrade to Executive' or 'Unlock Pro Vault' action buttons.",
    ],

    component: <SpotlightButton />,

    code: `import { motion } from "framer-motion";\nimport { useState } from "react";\nimport { FiCompass } from "react-icons/fi";\n\nexport default function SpotlightButton({ text = "Explore Elite Tiers", onClick }) {\n  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });\n\n  const handleMouseMove = (e) => {\n    const rect = e.currentTarget.getBoundingClientRect();\n    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });\n  };\n\n  return (\n    <motion.button\n      whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(245, 158, 11, 0.25)" }}\n      whileTap={{ scale: 0.95 }}\n      onMouseMove={handleMouseMove}\n      onClick={onClick}\n      className="relative overflow-hidden px-8 py-3.5 bg-gradient-to-r from-stone-950 via-neutral-900 to-stone-950 border-2 border-amber-500/40 text-amber-200 font-baloo text-sm font-bold rounded-2xl cursor-pointer group select-none shadow-[0_10px_20px_rgba(0,0,0,0.5)]"\n    >\n      <span className="relative z-10 flex items-center gap-2.5 tracking-wide drop-shadow-md">\n        <FiCompass className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />\n        {text}\n      </span>\n      <div \n        className="absolute pointer-events-none w-32 h-32 bg-amber-400/20 rounded-full blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"\n        style={{ top: mousePos.y - 64, left: mousePos.x - 64 }}\n      />\n    </motion.button>\n  );\n}`,
  },

  {
    id: "btn-terminal-prompt",
    title: "Matrix Terminal Command Prompt Button",
    category: "Buttons & Actions",
    description:
      "Developer-first action button styled like an active terminal command line featuring a blinking cursor, monospaced font, and matrix emerald neon glow.",
    copiesCount: 520,

    // Hyper-realistic use cases
    useCases: [
      "Developer Tools & CLI Dashboards: In the deployment or build configuration panel for action triggers like 'npm run deploy' or 'git push origin main'.",
      "DevOps & Cloud Infrastructure Portals: Positioned on automated script execution sections or container management control panels.",
    ],

    component: <TerminalButton />,

    code: `import { motion } from "framer-motion";\n\nexport default function TerminalButton({ command = "npm run deploy", onClick }) {\n  return (\n    <motion.button\n      whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(16, 185, 129, 0.3)" }}\n      whileTap={{ scale: 0.95 }}\n      onClick={onClick}\n      className="px-5 py-3 bg-[#0d1117] border-2 border-emerald-500/40 text-emerald-400 font-mono text-xs rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.4)] flex items-center gap-2.5 cursor-pointer select-none group"\n    >\n      <span className="text-emerald-600 font-bold select-none">$</span>\n      <span className="font-semibold tracking-wide group-hover:text-emerald-300 transition-colors">\n        {command}\n      </span>\n      <motion.span \n        animate={{ opacity: [1, 0, 1] }}\n        transition={{ repeat: Infinity, duration: 0.8, ease: "steps(1)" }}\n        className="w-2 h-3.5 bg-emerald-400 shadow-[0_0_8px_#34d399]"\n      />\n    </motion.button>\n  );\n}`,
  },

  {
    id: "btn-soundwave-sync",
    title: "Electric Indigo Live Soundwave Button",
    category: "Buttons & Actions",
    description:
      "Interactive audio-themed button featuring animated multi-color equalizer wave bars, electric indigo gradient background, and glowing neon micro-interactions.",
    copiesCount: 310,

    // Hyper-realistic use cases
    useCases: [
      "Podcast & Live Streaming Platforms (Twitch/YouTube Live): On stream control overlays for audio stream synchronization or voice activation triggers.",
      "AI Voice Generator & Text-to-Speech SaaS Apps: Positioned on the main voice preview or audio synthesis action panel.",
    ],

    component: <SoundwaveButton />,

    code: `import { motion } from "framer-motion";\n\nexport default function SoundwaveButton({ text = "AUDIO SYNC", onClick }) {\n  return (\n    <motion.button\n      whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(129, 140, 248, 0.35)" }}\n      whileTap={{ scale: 0.95 }}\n      onClick={onClick}\n      className="px-6 py-3.5 bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 border-2 border-indigo-500/50 text-indigo-200 font-baloo text-xs font-bold rounded-2xl shadow-[0_10px_25px_rgba(99,102,241,0.25)] flex items-center gap-4 cursor-pointer select-none group"\n    >\n      <span className="tracking-widest group-hover:text-white transition-colors">\n        {text}\n      </span>\n      <div className="flex items-end gap-1 h-4">\n        {[0.4, 0.9, 0.3, 1.0, 0.6].map((h, i) => (\n          <motion.span\n            key={i}\n            animate={{ height: ["20%", \`\${h * 100}%\`, "20%"] }}\n            transition={{ repeat: Infinity, duration: 0.5 + i * 0.1, ease: "easeInOut" }}\n            className="w-1 bg-gradient-to-t from-indigo-500 to-fuchsia-400 rounded-full shadow-[0_0_8px_#818cf8]"\n          />\n        ))}\n      </div>\n    </motion.button>\n  );\n}`,
  },

  {
    id: "btn-glass-bevel",
    title: "Sapphire Crystal Glassmorphic Bevel Button",
    category: "Buttons & Actions",
    description:
      "Ultra-modern glassmorphic button featuring a multi-layered crystal gradient, high-end backdrop blur, secure shield icon, and an incoming vertical light refraction sweep.",
    copiesCount: 485,

    // Hyper-realistic use cases
    useCases: [
      "Fintech & Crypto SaaS Platforms: Positioned on secure wallet connection screens or vault decryption panels for 'Secure Vault Access' actions.",
      "Enterprise Cloud Security Dashboards: Used in encryption settings or user permission approval modals for high-security verification.",
    ],

    component: <GlassBevelButton />,

    code: `import { motion } from "framer-motion";\nimport { FiShield } from "react-icons/fi";\n\nexport default function GlassBevelButton({ text = "Secure Vault Access", onClick }) {\n  return (\n    <motion.button\n      whileHover={{ scale: 1.04, y: -2, boxShadow: "0 15px 35px rgba(99, 102, 241, 0.35)" }}\n      whileTap={{ scale: 0.95 }}\n      onClick={onClick}\n      className="relative overflow-hidden px-8 py-3.5 bg-gradient-to-br from-indigo-950/70 via-slate-900/80 to-purple-950/70 backdrop-blur-2xl border-2 border-indigo-400/30 hover:border-indigo-400/70 text-indigo-100 font-baloo text-xs font-bold rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer group select-none flex items-center gap-2.5"\n    >\n      <FiShield className="w-4 h-4 text-indigo-400 group-hover:text-white transition-colors" />\n      <span className="relative z-10 tracking-wider group-hover:text-white transition-colors">\n        {text}\n      </span>\n      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-700 pointer-events-none" />\n    </motion.button>\n  );\n}`,
  },

  {
    id: "btn-magnetic",
    title: "Solar Flare Magnetic Spring Button",
    category: "Buttons & Actions",
    description:
      "High-energy futuristic button featuring advanced spring-physics motion, solar flare gradient styling, and glowing neon borders.",
    copiesCount: 412,

    // Hyper-realistic use cases
    useCases: [
      "Web3 & DeFi Staking Platforms: Positioned on the main transaction screen for 'Initialize Stake' or 'Claim Yield' action buttons.",
      "Sci-Fi Gaming & Metaverse Interfaces: Used in digital game launcher portals for 'Initialize Core Drive' or 'Enter Simulation' triggers.",
    ],

    component: <MagneticButton />,

    code: `import { motion } from "framer-motion";\nimport { FiZap } from "react-icons/fi";\n\nexport default function MagneticButton({ text = "Initialize Core Drive", onClick }) {\n  return (\n    <motion.button\n      whileHover={{ scale: 1.08, y: -2, boxShadow: "0 0 35px rgba(249, 115, 22, 0.5)" }}\n      whileTap={{ scale: 0.94 }}\n      transition={{ type: "spring", stiffness: 350, damping: 15 }}\n      onClick={onClick}\n      className="relative px-7 py-3.5 bg-gradient-to-r from-orange-950 via-rose-950 to-amber-950 border-2 border-orange-500/60 text-orange-200 font-baloo text-xs font-bold rounded-2xl shadow-[0_10px_25px_rgba(249,115,22,0.25)] cursor-pointer select-none flex items-center gap-2.5 group"\n    >\n      <FiZap className="w-4 h-4 text-orange-400 group-hover:scale-125 transition-transform" />\n      <span className="tracking-widest group-hover:text-white transition-colors">\n        [ {text} ]\n      </span>\n    </motion.button>\n  );\n}`,
  },

  {
    id: "btn-spring-elastic",
    title: "Neon Fuchsia Elastic Pop Button",
    category: "Buttons & Actions",
    description:
      "High-energy bouncy elastic button featuring spring physics, micro-rotation feedback, and a vibrant fuchsia-rose gradient tailored for reward triggers.",
    copiesCount: 289,

    // Hyper-realistic use cases
    useCases: [
      "Gamified Web3 & Rewards Platforms: Positioned on 'Claim Mystery Box' or 'Spin & Win' interactive promotional screens.",
      "SaaS Onboarding & Promo Banners: Used for high-engagement conversion triggers like 'Claim 50% Bonus' or 'Redeem Free Trial'.",
    ],

    component: <SpringElasticButton />,

    code: `import { motion } from "framer-motion";\nimport { FiGift } from "react-icons/fi";\n\nexport default function SpringElasticButton({ text = "Claim Mystery Box", onClick }) {\n  return (\n    <motion.button\n      whileHover={{ scale: 1.1, rotate: [-1.5, 1.5, -1.5, 0] }}\n      whileTap={{ scale: 0.9 }}\n      transition={{ type: "spring", stiffness: 500, damping: 10 }}\n      onClick={onClick}\n      className="relative px-8 py-3.5 bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 text-white font-baloo text-xs font-bold rounded-2xl shadow-[0_12px_30px_rgba(236,72,153,0.45)] cursor-pointer select-none flex items-center gap-2.5 group"\n    >\n      <FiGift className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />\n      <span className="tracking-widest drop-shadow-md">\n        {text}\n      </span>\n    </motion.button>\n  );\n}`,
  },

  {
    id: "btn-liquid-morph",
    title: "Neon Emerald Liquid Morph Fill Button",
    category: "Buttons & Actions",
    description:
      "Sleek interactive button featuring a smooth bottom-to-top rising fluid fill animation, neon emerald styling, and contrast color shifts on hover.",
    copiesCount: 534,

    // Hyper-realistic use cases
    useCases: [
      "Eco-Tech & Clean Energy SaaS Platforms: Positioned on clean energy monitoring dashboards for 'Activate Fluid Flow' or 'Deploy System' actions.",
      "Bio-Tech & Liquid Processing Portals: Used in industrial telemetry control screens for fluid level or flow activation triggers.",
    ],

    component: <LiquidMorphButton />,

    code: `import { motion } from "framer-motion";\nimport { FiDroplet } from "react-icons/fi";\n\nexport default function LiquidMorphButton({ text = "Activate Fluid Flow", onClick }) {\n  return (\n    <motion.button\n      whileHover="hover"\n      whileTap={{ scale: 0.95 }}\n      onClick={onClick}\n      className="relative overflow-hidden px-8 py-3.5 bg-[#08120d] border-2 border-emerald-500/50 text-emerald-300 font-baloo text-xs font-bold rounded-2xl cursor-pointer group select-none shadow-[0_10px_25px_rgba(16,185,129,0.2)]"\n    >\n      <span className="relative z-10 flex items-center gap-2.5 group-hover:text-slate-950 transition-colors duration-300">\n        <FiDroplet className="w-4 h-4 text-emerald-400 group-hover:text-slate-950 transition-colors duration-300" />\n        {text}\n      </span>\n      <motion.span\n        variants={{ hover: { y: "0%" } }}\n        initial={{ y: "100%" }}\n        transition={{ duration: 0.35, ease: "easeInOut" }}\n        className="absolute inset-0 bg-emerald-400 z-0 pointer-events-none"\n      />\n    </motion.button>\n  );\n}`,
  },

  {
    id: "btn-laser-beam",
    title: "Neon Crimson Laser Border-Tracing Button",
    category: "Buttons & Actions",
    description:
      "High-voltage cyberpunk action button wrapped with a continuous spinning laser beam conic-gradient border and ultra-dark obsidian core.",
    copiesCount: 610,

    // Hyper-realistic use cases
    useCases: [
      "Cybersecurity & Threat Mitigation Consoles: Positioned on emergency response triggers like 'Override System Security' or 'Initiate Lockdown'.",
      "Sci-Fi & Gaming Interface Dashboards: Used for critical action prompts, emergency overrides, or high-alert system triggers.",
    ],

    component: <LaserBeamButton />,

    code: `import { motion } from "framer-motion";\nimport { FiZap } from "react-icons/fi";\n\nexport default function LaserBeamButton({ text = "Override System Security", onClick }) {\n  return (\n    <div onClick={onClick} className="relative p-[2px] rounded-2xl overflow-hidden inline-block group cursor-pointer select-none">\n      <motion.div\n        animate={{ rotate: 360 }}\n        transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}\n        className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_200deg,#ef4444_360deg)]"\n      />\n      <button className="relative px-8 py-3.5 bg-[#0a0203] text-red-400 group-hover:text-red-300 font-baloo text-xs font-bold rounded-[14px] transition-colors cursor-pointer flex items-center gap-2.5 shadow-[inset_0_0_15px_rgba(239,68,68,0.15)] w-full h-full">\n        <FiZap className="w-4 h-4 text-red-500 group-hover:scale-125 transition-transform" />\n        <span className="tracking-widest">{text}</span>\n      </button>\n    </div>\n  );\n}`,
  },

  {
    id: "btn-cyber-glitch",
    title: "Neon Cyberpunk Glitch Matrix Button",
    category: "Buttons & Actions",
    description:
      "High-impact cyberpunk action button featuring distorted skew micro-interactions, dual-color neon shifting, and terminal CPU indicators.",
    copiesCount: 450,

    // Hyper-realistic use cases
    useCases: [
      "Cybersecurity & Threat Simulation Portals: Positioned on network penetration testing screens for 'SYS_GLITCH()' or 'Run Diagnostic' action triggers.",
      "Web3 & Futuristic NFT Minting Platforms: Used in high-tech minting launchpads or digital game testing interfaces.",
    ],

    component: <GlitchButton />,

    code: `import { motion } from "framer-motion";\nimport { FiCpu } from "react-icons/fi";\n\nexport default function GlitchButton({ text = "SYS_GLITCH()", onClick }) {\n  return (\n    <motion.button\n      whileHover={{ skewX: [-6, 6, -3, 0], scale: 1.05, boxShadow: "0 0 30px rgba(244, 63, 94, 0.4)" }}\n      whileTap={{ scale: 0.95 }}\n      onClick={onClick}\n      className="relative px-8 py-3.5 bg-gradient-to-r from-zinc-950 via-purple-950 to-zinc-950 border-2 border-rose-500/50 hover:border-cyan-400/80 text-rose-400 hover:text-cyan-300 font-mono text-xs font-bold rounded-2xl shadow-[0_10px_25px_rgba(244,63,94,0.25)] cursor-pointer select-none flex items-center gap-2.5 transition-colors group"\n    >\n      <FiCpu className="w-4 h-4 text-rose-500 group-hover:text-cyan-400 transition-colors animate-pulse" />\n      <span className="tracking-widest">{text}</span>\n    </motion.button>\n  );\n}`,
  },

  // old
  {
    id: "btn-primary",
    title: "Prism Cyan Electric Primary CTA Button",
    category: "Buttons & Actions",
    description:
      "High-conversion primary action button featuring a vibrant electric cyan gradient, spring-physics motion, subtle arrow slide feedback, and deep neon glow.",
    copiesCount: 342,

    // Hyper-realistic use cases
    useCases: [
      "SaaS Landing Pages & Marketing Portals: Positioned as the main conversion trigger for 'Launch Dashboard', 'Get Started Free', or 'Explore Features' actions.",
      "SaaS Onboarding & Account Setup: Used for primary submission buttons in registration forms and multi-step configuration wizards.",
    ],

    component: <BtnPrimary />,

    code: `import { motion } from "framer-motion";\nimport { FiArrowRight } from "react-icons/fi";\n\nexport default function BtnPrimary({ text = "Launch Dashboard", onClick }) {\n  return (\n    <motion.button\n      whileHover={{ scale: 1.04, y: -1, boxShadow: "0 15px 35px rgba(6, 182, 212, 0.45)" }}\n      whileTap={{ scale: 0.95 }}\n      transition={{ type: "spring", stiffness: 400, damping: 17 }}\n      onClick={onClick}\n      className="px-8 py-3.5 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-baloo text-xs font-extrabold rounded-2xl shadow-[0_10px_25px_rgba(6,182,212,0.3)] cursor-pointer select-none flex items-center gap-2.5 group transition-all"\n    >\n      <span className="tracking-wide">{text}</span>\n      <FiArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1.5 transition-transform" />\n    </motion.button>\n  );\n}`,
  },

  {
    id: "btn-arrow-hover",
    title: "Sunset Violet Sliding Arrow Button",
    category: "Buttons & Actions",
    description:
      "Sleek interactive button featuring spring-physics sliding arrow icon, sunset violet gradient, and warm amber hover highlights.",
    copiesCount: 210,

    // Hyper-realistic use cases
    useCases: [
      "Content Blogs & News Portals: Positioned at the bottom of article cards or preview blocks for 'Explore Articles' actions.",
      "SaaS Feature Showcases: Used in navigation links and card footers for 'Discover Modules' or 'Learn More' prompts.",
    ],

    component: <ArrowHoverButton />,

    code: `import { motion } from "framer-motion";\nimport { FiArrowRight } from "react-icons/fi";\n\nexport default function ArrowHoverButton({ text = "Explore Articles", onClick }) {\n  return (\n    <motion.button\n      whileHover="hover"\n      whileTap={{ scale: 0.95 }}\n      onClick={onClick}\n      className="group px-8 py-3.5 bg-gradient-to-r from-violet-950 via-purple-950 to-stone-950 border-2 border-amber-500/40 hover:border-amber-400 text-amber-100 font-baloo text-xs font-bold rounded-2xl inline-flex items-center gap-3 cursor-pointer select-none shadow-[0_10px_25px_rgba(245,158,11,0.2)] transition-colors"\n    >\n      <span className="tracking-wide group-hover:text-amber-300 transition-colors">\n        {text}\n      </span>\n      <motion.span\n        variants={{ hover: { x: 6 } }}\n        transition={{ type: "spring", stiffness: 350, damping: 15 }}\n        className="text-amber-400 flex items-center"\n      >\n        <FiArrowRight className="w-4 h-4" />\n      </motion.span>\n    </motion.button>\n  );\n}`,
  },

  {
    id: "btn-mono-minimal",
    title: "Neon Mint Minimalist Monospace Link Button",
    category: "Buttons & Actions",
    description:
      "Understated developer-first action button featuring crisp monospace typography, subtle terminal icon, and neon mint hover glow highlights.",
    copiesCount: 380,

    // Hyper-realistic use cases
    useCases: [
      "Cloud Server Dashboards & Logs Viewers: Positioned in telemetry panels or compiler outputs for 'view_system_logs.sh' or build detail links.",
      "Developer Documentation Portals: Used for inline command line options, API reference links, and clean secondary text actions.",
    ],

    component: <MonospaceLinkButton />,

    code: `import { motion } from "framer-motion";\nimport { FiTerminal } from "react-icons/fi";\n\nexport default function MonospaceLinkButton({ text = "view_system_logs.sh", onClick }) {\n  return (\n    <motion.button \n      whileHover={{ scale: 1.05 }}\n      whileTap={{ scale: 0.95 }}\n      onClick={onClick}\n      className="relative px-5 py-2.5 bg-transparent text-zinc-400 font-mono text-xs tracking-widest uppercase cursor-pointer transition-colors group inline-flex items-center gap-2 select-none"\n    >\n      <FiTerminal className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />\n      <span className="group-hover:text-emerald-300 transition-colors">\n        [ {text} ]\n      </span>\n      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-400/0 group-hover:bg-emerald-400/80 transition-all rounded-full shadow-[0_0_8px_#34d399]" />\n    </motion.button>\n  );\n}`,
  },

  {
    id: "btn-neon-minimal",
    title: "Electric Violet Neon Glow Button",
    category: "Buttons & Actions",
    description:
      "Dark-themed interactive button featuring dynamic neon violet luminosity, deep zinc-fuchsia gradients, and high-intensity shadow feedback on hover.",
    copiesCount: 415,

    // Hyper-realistic use cases
    useCases: [
      "Synthwave & Creative Portfolio Sites: Positioned on main interactive showcases for 'Activate Neon Matrix' or 'Explore Gallery' actions.",
      "Digital Art & NFT Marketplace Platforms: Used on creator action cards for live digital asset preview triggers.",
    ],

    component: <NeonButton />,

    code: `import { motion } from "framer-motion";\nimport { FiActivity } from "react-icons/fi";\n\nexport default function NeonButton({ text = "Activate Neon Matrix", onClick }) {\n  return (\n    <motion.button \n      whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(217, 70, 239, 0.5)" }}\n      whileTap={{ scale: 0.95 }}\n      onClick={onClick}\n      className="px-8 py-3.5 bg-gradient-to-r from-purple-950 via-zinc-950 to-fuchsia-950 border-2 border-fuchsia-500/50 hover:border-fuchsia-400 text-fuchsia-300 hover:text-white font-baloo text-xs font-bold rounded-2xl shadow-[0_10px_25px_rgba(217,70,239,0.25)] cursor-pointer select-none flex items-center gap-2.5 transition-all group"\n    >\n      <FiActivity className="w-4 h-4 text-fuchsia-400 group-hover:scale-110 transition-transform" />\n      <span className="tracking-widest">{text}</span>\n    </motion.button>\n  );\n}`,
  },

  {
    id: "btn-gradient-border",
    title: "Cosmic Aurora Gradient Border Button",
    category: "Buttons & Actions",
    description:
      "High-end interactive button wrapped in a vibrant multi-color cosmic aurora gradient border container with deep obsidian core and smooth spring hover feedback.",
    copiesCount: 275,

    // Hyper-realistic use cases
    useCases: [
      "Fintech & Crypto Authentication Portals: Positioned on secure login or wallet decryption screens for 'Secure System Access' actions.",
      "Enterprise Cloud Security Dashboards: Used in encryption key generation panels and multi-factor authentication triggers.",
    ],

    component: <GradientBorderButton />,

    code: `import { motion } from "framer-motion";\nimport { FiKey } from "react-icons/fi";\n\nexport default function GradientBorderButton({ text = "Secure System Access", onClick }) {\n  return (\n    <motion.div\n      whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(16, 185, 129, 0.35)" }}\n      whileTap={{ scale: 0.95 }}\n      onClick={onClick}\n      className="p-[2px] rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-500 to-indigo-500 inline-block cursor-pointer select-none shadow-[0_10px_25px_rgba(0,0,0,0.4)] group"\n    >\n      <button className="px-8 py-3.5 bg-[#0a0f1d] text-emerald-300 group-hover:text-white font-baloo text-xs font-bold rounded-[14px] transition-colors w-full h-full cursor-pointer flex items-center gap-2.5">\n        <FiKey className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />\n        <span className="tracking-widest">{text}</span>\n      </button>\n    </motion.div>\n  );\n}`,
  },

  {
    id: "btn-gradient-fill",
    title: "Solar Sunset Gradient Deploy Button",
    category: "Buttons & Actions",
    description:
      "High-end action button featuring a radiant dual-color solar sunset gradient fill, smooth depth, rocket micro-interaction, and intense neon shadow glow.",
    copiesCount: 310,

    // Hyper-realistic use cases
    useCases: [
      "Cloud DevOps & CI/CD Dashboards: Positioned on build execution panels for 'Deploy Production Pipeline' or 'Release Version' action triggers.",
      "SaaS Project Management & Hosting Platforms: Used in deployment configuration wizards for fast master-branch releases.",
    ],

    component: <GradientFillButton />,

    code: `import { motion } from "framer-motion";\nimport { PiRocket } from "react-icons/pi";\n\nexport default function GradientFillButton({ text = "Deploy Production Pipeline", onClick }) {\n  return (\n    <motion.button\n      whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(244, 63, 94, 0.45)" }}\n      whileTap={{ scale: 0.95 }}\n      onClick={onClick}\n      className="px-8 py-3.5 bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-baloo text-xs font-extrabold rounded-2xl shadow-[0_10px_25px_rgba(244,63,94,0.3)] cursor-pointer select-none flex items-center gap-2.5 transition-all group"\n    >\n      <PiRocket className="w-4 h-4 text-amber-200 group-hover:-translate-y-1 transition-transform" />\n      <span className="tracking-wide">{text}</span>\n    </motion.button>\n  );\n}`,
  },
];
