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
    title: "Neo-Brutalism Enterprise Profile Card",
    category: "Cards & Containers",
    description:
      "High-contrast neo-brutalist profile tile featuring thick borders, hard offset shadow styling, dynamic hover depth, badge icons, and standard professional user details.",
    copiesCount: 310,

    // Hyper-realistic use cases
    useCases: [
      "Team Management & Workspace Dashboards: Positioned in enterprise user administration panels for displaying admin profiles, team leads, or security officers.",
      "Developer Portals & Community Directories: Used in creator profile grids, mentor cards, and contributor showcases.",
    ],

    component: <BrutalProfileCard />,

    code: `import { motion } from "framer-motion";\nimport { FiExternalLink, FiShield } from "react-icons/fi";\n\nexport default function BrutalProfileCard() {\n  return (\n    <motion.div\n      whileHover={{ x: -3, y: -3, boxShadow: "7px 7px 0px 0px #020617" }}\n      transition={{ type: "spring", stiffness: 400, damping: 20 }}\n      className="w-80 p-5 bg-yellow-300 border-2 border-slate-950 rounded-2xl shadow-[4px_4px_0px_0px_#020617] font-baloo space-y-4 select-none cursor-pointer"\n    >\n      <div className="flex items-center justify-between">\n        <div className="flex items-center gap-3">\n          <div className="w-11 h-11 bg-pink-500 border-2 border-slate-950 rounded-xl shadow-[2px_2px_0px_0px_#020617] flex items-center justify-center font-black text-white text-sm">\n            SJ\n          </div>\n          <div>\n            <h4 className="text-xs font-black text-slate-950 tracking-wide">Sarah Jenkins</h4>\n            <p className="text-[11px] text-slate-900 font-bold">Principal Enterprise Architect</p>\n          </div>\n        </div>\n        <div className="w-7 h-7 bg-white border-2 border-slate-950 rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_#020617]">\n          <FiShield className="w-3.5 h-3.5 text-slate-950" />\n        </div>\n      </div>\n      <p className="text-[11px] text-slate-900 font-semibold leading-relaxed bg-yellow-200/60 p-2.5 rounded-xl border border-slate-950">\n        Leading core infrastructure security pipelines and multi-region deployment nodes.\n      </p>\n      <button className="w-full py-2.5 bg-slate-950 text-yellow-300 font-bold text-xs rounded-xl border-2 border-slate-950 shadow-[2px_2px_0px_0px_#f43f5e] hover:bg-slate-900 flex items-center justify-center gap-2 transition-colors cursor-pointer">\n        <span>View Full Profile</span>\n        <FiExternalLink className="w-3.5 h-3.5" />\n      </button>\n    </motion.div>\n  );\n}`,
  },

  {
    id: "card-brutal-stat",
    title: "Neo-Brutalism Revenue Metric Card",
    category: "Cards & Containers",
    description:
      "Vibrant cyan brutalist metric display featuring bold typography, currency icon accents, dynamic growth badges, hard offset shadows, and high-impact analytics styling.",
    copiesCount: 295,

    // Hyper-realistic use cases
    useCases: [
      "SaaS Financial Dashboards: Positioned in executive metric grids for tracking 'Monthly Recurring Revenue' (MRR) and subscription growth.",
      "Indie Hacker & Startup Analytics Portals: Used for highlighting key performance indicators (KPIs) with high-contrast neo-brutalist aesthetic.",
    ],

    component: <BrutalStatCard />,

    code: `import { motion } from "framer-motion";\nimport { FiTrendingUp, FiDollarSign } from "react-icons/fi";\n\nexport default function BrutalStatCard() {\n  return (\n    <motion.div\n      whileHover={{ x: -3, y: -3, boxShadow: "7px 7px 0px 0px #020617" }}\n      transition={{ type: "spring", stiffness: 400, damping: 20 }}\n      className="w-80 p-5 bg-cyan-400 border-2 border-slate-950 rounded-2xl shadow-[4px_4px_0px_0px_#020617] font-baloo space-y-3 select-none cursor-pointer"\n    >\n      <div className="flex items-center justify-between">\n        <span className="text-xs font-black uppercase tracking-wider text-slate-950">\n          Monthly Recurring Revenue\n        </span>\n        <div className="w-8 h-8 bg-slate-950 rounded-xl flex items-center justify-center text-cyan-400 shadow-[2px_2px_0px_0px_#020617]">\n          <FiDollarSign className="w-4 h-4" />\n        </div>\n      </div>\n      <div className="text-2xl font-black text-slate-950 tracking-tight">\n        $84,200.00\n      </div>\n      <div className="flex items-center justify-between pt-1">\n        <span className="text-[11px] text-slate-900 font-bold">\n          vs. previous 30-day cycle\n        </span>\n        <div className="px-2.5 py-0.5 bg-emerald-300 border border-slate-950 rounded-lg text-[10px] font-black text-slate-950 flex items-center gap-1 shadow-[1px_1px_0px_0px_#020617]">\n          <FiTrendingUp className="w-3 h-3" />\n          <span>+24.5%</span>\n        </div>\n      </div>\n    </motion.div>\n  );\n}`,
  },

  {
    id: "card-glass-profile",
    title: "Glassmorphism Enterprise Profile Card",
    category: "Cards & Containers",
    description:
      "Frosted glass aesthetic card featuring high-end backdrop blur, ambient cyan lighting, verified status badges, smooth scale animations, and professional user details.",
    copiesCount: 340,

    // Hyper-realistic use cases
    useCases: [
      "SaaS Team & Directory Dashboards: Positioned in enterprise employee lists or cloud management workspace portals.",
      "Developer Community & Mentor Hubs: Used for showcasing senior engineers, contributors, and technical leaders with immersive glassmorphism styling.",
    ],

    component: <GlassProfileCard />,

    code: `import { motion } from "framer-motion";\nimport { FiMail, FiCheckCircle } from "react-icons/fi";\n\nexport default function GlassProfileCard() {\n  return (\n    <motion.div\n      whileHover={{ scale: 1.02, y: -2 }}\n      transition={{ type: "spring", stiffness: 400, damping: 25 }}\n      className="w-80 p-5 bg-white/5 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] font-baloo space-y-4 select-none cursor-pointer group"\n    >\n      <div className="flex items-start justify-between">\n        <div className="flex items-start gap-3">\n          <div className="relative">\n            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-indigo-500/30 border border-cyan-400/40 flex items-center justify-center text-cyan-200 font-bold text-sm shadow-[0_0_15px_rgba(34,211,238,0.2)]">\n              ER\n            </div>\n            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-950 rounded-full shadow-[0_0_8px_#10b981]" />\n          </div>\n          <div>\n            <h4 className="text-xs font-bold text-white tracking-wide">Elena Rostova</h4>\n            <p className="text-[11px] text-cyan-300/80 font-medium">Senior Cloud Architect</p>\n          </div>\n        </div>\n        <div className="px-2.5 py-1 bg-white/10 border border-white/10 rounded-lg text-[10px] text-white/70 font-semibold flex items-center gap-1">\n          <FiCheckCircle className="w-3 h-3 text-cyan-400" />\n          <span>Verified</span>\n        </div>\n      </div>\n      <p className="text-[11px] text-slate-300/90 font-normal leading-relaxed bg-white/5 p-3 rounded-xl border border-white/10">\n        Specializing in multi-region Kubernetes deployments, serverless microservices, and enterprise zero-trust security.\n      </p>\n      <button className="w-full py-2.5 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/30 text-cyan-200 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(34,211,238,0.15)] cursor-pointer">\n        <FiMail className="w-3.5 h-3.5" />\n        <span>Send Direct Message</span>\n      </button>\n    </motion.div>\n  );\n}`,
  },

  {
    id: "card-glass-stats",
    title: "Glassmorphism System Load Progress Card",
    category: "Cards & Containers",
    description:
      "Translucent system load and resource tracker featuring rich dark glass styling, animated progress bars, live status indicators, and modern SaaS control panel metrics.",
    copiesCount: 280,

    // Hyper-realistic use cases
    useCases: [
      "Cloud Infrastructure & DevOps Control Panels: Positioned in server monitoring grids for tracking real-time CPU clusters and resource utilization.",
      "SaaS Performance Analytics Dashboards: Used for displaying memory load, bandwidth usage, and node performance stats with glassmorphism depth.",
    ],

    component: <GlassStatsCard />,

    code: `import { motion } from "framer-motion";\nimport { FiCpu, FiActivity } from "react-icons/fi";\n\nexport default function GlassStatsCard() {\n  return (\n    <motion.div\n      whileHover={{ scale: 1.02, y: -2 }}\n      transition={{ type: "spring", stiffness: 400, damping: 25 }}\n      className="w-80 p-5 bg-slate-900/90 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] font-baloo space-y-4 select-none cursor-pointer group"\n    >\n      <div className="flex items-center justify-between">\n        <div className="flex items-center gap-3">\n          <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)]">\n            <FiCpu className="w-4 h-4" />\n          </div>\n          <div>\n            <span className="text-xs font-bold text-white tracking-wide block">CPU Node Cluster</span>\n            <span className="text-[10px] text-cyan-300 font-medium">US-East Primary Pool</span>\n          </div>\n        </div>\n        <div className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-[10px] font-bold text-emerald-300 flex items-center gap-1 shadow-[0_0_10px_rgba(16,185,129,0.15)]">\n          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />\n          <span>Optimal</span>\n        </div>\n      </div>\n      <div className="space-y-2 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">\n        <div className="flex justify-between items-center text-xs">\n          <span className="text-slate-300 font-medium flex items-center gap-1.5">\n            <FiActivity className="w-3.5 h-3.5 text-cyan-400" />\n            <span>System Utilization</span>\n          </span>\n          <span className="text-cyan-400 font-bold">42.8%</span>\n        </div>\n        <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden p-0.5 border border-slate-700/50">\n          <motion.div\n            initial={{ width: 0 }}\n            animate={{ width: "42.8%" }}\n            transition={{ duration: 1, ease: "easeOut" }}\n            className="bg-gradient-to-r from-cyan-500 to-cyan-300 h-full rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"\n          />\n        </div>\n      </div>\n      <div className="flex justify-between text-[10px] text-slate-400 font-medium px-1">\n        <span>Allocated: 16.4 GB</span>\n        <span>Max Capacity: 38.0 GB</span>\n      </div>\n    </motion.div>\n  );\n}`,
  },

  {
    id: "card-bento-metric",
    title: "Bento Clean Performance Metric Card",
    category: "Cards & Containers",
    description:
      "Ultra-clean minimalist Bento grid block optimized for high-end analytics, featuring subtle cyan accents, smooth scaling animations, and professional performance tracking details.",
    copiesCount: 410,

    // Hyper-realistic use cases
    useCases: [
      "SaaS Infrastructure & Cloud Portals: Positioned in executive metric overviews for highlighting server uptime, network reliability, and edge computing health.",
      "API Gateway Dashboards: Used for tracking system-wide request success rates and low-latency routing metrics with Bento minimalist aesthetic.",
    ],

    component: <BentoMetricCard />,

    code: `import { motion } from "framer-motion";\nimport { FiZap } from "react-icons/fi";\n\nexport default function BentoMetricCard() {\n  return (\n    <motion.div\n      whileHover={{ scale: 1.02, y: -2 }}\n      transition={{ type: "spring", stiffness: 400, damping: 25 }}\n      className="w-80 p-5 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl shadow-xl font-baloo space-y-3 select-none cursor-pointer group"\n    >\n      <div className="flex items-center justify-between">\n        <span className="text-[11px] text-cyan-400 uppercase tracking-widest font-bold">\n          Uptime Performance\n        </span>\n        <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.1)]">\n          <FiZap className="w-4 h-4" />\n        </div>\n      </div>\n      <div className="text-3xl font-extrabold text-white tracking-tight">\n        99.98%\n      </div>\n      <p className="text-[11px] text-slate-400 font-medium leading-relaxed">\n        System latency optimized via global edge computing routing nodes and CDN clusters.\n      </p>\n    </motion.div>\n  );\n}`,
  },

  {
    id: "card-bento-feature",
    title: "Bento Global Feature Card",
    category: "Cards & Containers",
    description:
      "Minimalist feature container featuring subtle borders, crisp emerald iconography, smooth hover scaling animations, and professional SaaS landing page layout.",
    copiesCount: 365,

    // Hyper-realistic use cases
    useCases: [
      "SaaS Landing Pages & Marketing Grids: Positioned in core product feature sections for highlighting edge computing and deployment capabilities.",
      "Developer Portals & Documentation Hubs: Used for showcasing platform capabilities and cloud infrastructure benefits.",
    ],

    component: <BentoFeatureCard />,

    code: `import { motion } from "framer-motion";\nimport { FiZap } from "react-icons/fi";\n\nexport default function BentoFeatureCard() {\n  return (\n    <motion.div\n      whileHover={{ scale: 1.02, y: -2 }}\n      transition={{ type: "spring", stiffness: 400, damping: 25 }}\n      className="w-80 p-5 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl shadow-xl font-baloo space-y-3 select-none cursor-pointer group"\n    >\n      <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.2)]">\n        <FiZap className="w-4 h-4" />\n      </div>\n      <div className="space-y-1">\n        <h4 className="text-xs font-bold text-white tracking-wide">Instant Global Deployment</h4>\n        <p className="text-[11px] text-slate-400 font-medium leading-relaxed">\n          Push code changes instantly to multi-region edge servers worldwide with zero downtime pipelines.\n        </p>\n      </div>\n      <div className="pt-1 flex items-center text-[10px] text-emerald-400 font-semibold gap-1 group-hover:translate-x-1 transition-transform">\n        <span>Explore pipeline specs &rarr;</span>\n      </div>\n    </motion.div>\n  );\n}`,
  },

  {
    id: "card-clay-primary",
    title: "Claymorphic Spatial Asset Card",
    category: "Cards & Containers",
    description:
      "Matte volumetric 3D card layout featuring dual-shadow depth rendering, tactile surface lighting, smooth hover animations, and professional design workspace options.",
    copiesCount: 275,

    // Hyper-realistic use cases
    useCases: [
      "3D Creative Studios & WebGL Platforms: Positioned in design asset management grids for configuring volumetric shaders and rendering pipelines.",
      "Design System Component Libraries: Used for showcasing soft-UI elements, tactile containers, and modern layout blocks.",
    ],

    component: <ClayCardPrimary />,

    code: `import { motion } from "framer-motion";\nimport { FiLayers, FiArrowRight } from "react-icons/fi";\n\nexport default function ClayCardPrimary() {\n  return (\n    <motion.div\n      whileHover={{ scale: 1.02, y: -2 }}\n      transition={{ type: "spring", stiffness: 400, damping: 25 }}\n      className="w-80 p-5 bg-slate-900 rounded-3xl shadow-[8px_8px_20px_#020617,-8px_-8px_20px_#1e293b] font-baloo space-y-4 border border-slate-800/80 select-none cursor-pointer group"\n    >\n      <div className="flex items-center justify-between">\n        <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shadow-inner">\n          <FiLayers className="w-5 h-5" />\n        </div>\n        <div className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-300">\n          WebGL 3D\n        </div>\n      </div>\n      <div className="space-y-1.5">\n        <h4 className="text-xs font-bold text-white tracking-wide">Spatial Asset Pipeline</h4>\n        <p className="text-[11px] text-slate-400 font-medium leading-relaxed">\n          Matte textured volumetric surface optimized for high-end 3D rendering and creative design layers.\n        </p>\n      </div>\n      <div className="pt-1 flex items-center justify-between text-[11px] text-indigo-400 font-bold">\n        <span className="group-hover:translate-x-1 transition-transform">Configure shaders</span>\n        <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />\n      </div>\n    </motion.div>\n  );\n}`,
  },

  {
    id: "card-clay-action",
    title: "Claymorphic Cloud Sync Control Card",
    category: "Cards & Containers",
    description:
      "Soft rounded tactile interface card featuring dual-shadow depth rendering, live sync status indicators, smooth button integration, and professional cloud database management options.",
    copiesCount: 250,

    // Hyper-realistic use cases
    useCases: [
      "Cloud Infrastructure Control Panels: Positioned in database management tools for triggering replica synchronizations and tracking worker node status.",
      "SaaS Settings Dashboards: Used for managing data backups, cache flushing, and state replication pipelines with soft claymorphic depth.",
    ],

    component: <ClayActionCard />,

    code: `import { motion } from "framer-motion";\nimport { FiCloud, FiRefreshCw } from "react-icons/fi";\n\nexport default function ClayActionCard() {\n  return (\n    <motion.div\n      whileHover={{ scale: 1.02, y: -2 }}\n      transition={{ type: "spring", stiffness: 400, damping: 25 }}\n      className="w-80 p-5 bg-slate-900 rounded-3xl shadow-[8px_8px_20px_#020617,-8px_-8px_20px_#1e293b] font-baloo space-y-4 border border-slate-800/80 select-none cursor-pointer group"\n    >\n      <div className="flex items-center justify-between">\n        <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shadow-inner">\n          <FiCloud className="w-5 h-5" />\n        </div>\n        <div className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 flex items-center gap-1.5">\n          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />\n          <span>Synced</span>\n        </div>\n      </div>\n      <div className="space-y-1.5">\n        <h4 className="text-xs font-bold text-white tracking-wide">Cloud Database Replica</h4>\n        <p className="text-[11px] text-slate-400 font-medium leading-relaxed">\n          All multi-region worker nodes and local caches are synchronized with master core database.\n        </p>\n      </div>\n      <button className="w-full py-2.5 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 font-bold text-xs rounded-2xl shadow-inner border border-indigo-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer">\n        <FiRefreshCw className="w-3.5 h-3.5" />\n        <span>Force Sync Now</span>\n      </button>\n    </motion.div>\n  );\n}`,
  },

  {
    id: "card-retro-terminal",
    title: "Retro 90s Terminal Output Card",
    category: "Cards & Containers",
    description:
      "Vaporwave green-screen terminal box featuring monospaced log output aesthetics, glowing neon borders, animated prompt cursors, and real-time developer shell styling.",
    copiesCount: 330,

    // Hyper-realistic use cases
    useCases: [
      "DevOps & CI/CD Pipeline Monitors: Positioned in deployment logs and server shell control panels for tracking live build statuses and kernel states.",
      "Developer Tooling & CLI Portals: Used for showcasing interactive command-line interfaces, system diagnostics, and retro-themed terminal logs.",
    ],

    component: <RetroTerminalCard />,

    code: `import { motion } from "framer-motion";\nimport { FiTerminal } from "react-icons/fi";\n\nexport default function RetroTerminalCard() {\n  return (\n    <motion.div\n      whileHover={{ scale: 1.02, y: -2 }}\n      transition={{ type: "spring", stiffness: 400, damping: 25 }}\n      className="w-80 p-4 bg-black border-2 border-green-500 rounded-xl font-mono space-y-3 shadow-[0_0_20px_rgba(34,197,94,0.3)] select-none cursor-pointer group"\n    >\n      <div className="flex justify-between items-center text-[10px] text-green-400 border-b border-green-900/80 pb-2">\n        <div className="flex items-center gap-1.5 font-bold">\n          <FiTerminal className="w-3.5 h-3.5 text-green-500 animate-pulse" />\n          <span>SYS_SHELL://v2.4</span>\n        </div>\n        <span className="px-1.5 py-0.5 bg-green-950 border border-green-700 rounded text-[9px] text-green-300">\n          [ACTIVE]\n        </span>\n      </div>\n      <div className="space-y-1 text-[11px] text-green-400/90 font-mono">\n        <p className="text-green-500 font-bold">&gt; Initializing kernel modules...</p>\n        <p className="text-green-400/80">&gt; Loading environment variables...</p>\n        <p className="text-green-300 font-semibold animate-pulse">&gt; Ready for user commands_</p>\n      </div>\n      <div className="flex justify-between items-center text-[9px] text-green-600 pt-1 border-t border-green-950">\n        <span>PID: 4096</span>\n        <span>UTF-8</span>\n      </div>\n    </motion.div>\n  );\n}`,
  },

  {
    id: "card-retro-log",
    title: "Retro Amber Warning Log Card",
    category: "Cards & Containers",
    description:
      "Amber phosphor terminal warning message container featuring high-contrast framing, glowing neon borders, animated alert indicators, and real-time backend log diagnostics.",
    copiesCount: 290,

    // Hyper-realistic use cases
    useCases: [
      "Backend Monitoring & Alert Dashboards: Positioned in server log streams for highlighting high memory thresholds and garbage collection events.",
      "DevOps Incident Management Panels: Used for tracking system anomalies, threshold warnings, and critical backend performance notifications.",
    ],

    component: <RetroLogCard />,

    code: `import { motion } from "framer-motion";\nimport { FiAlertTriangle } from "react-icons/fi";\n\nexport default function RetroLogCard() {\n  return (\n    <motion.div\n      whileHover={{ scale: 1.02, y: -2 }}\n      transition={{ type: "spring", stiffness: 400, damping: 25 }}\n      className="w-80 p-4 bg-black border-2 border-amber-500 rounded-xl font-mono space-y-3 shadow-[0_0_20px_rgba(245,158,11,0.3)] select-none cursor-pointer group"\n    >\n      <div className="flex items-center justify-between border-b border-amber-900/80 pb-2">\n        <div className="flex items-center gap-1.5 text-amber-500 font-bold text-xs">\n          <FiAlertTriangle className="w-4 h-4 animate-pulse text-amber-400" />\n          <span>WARN: MEM_THRESHOLD_90</span>\n        </div>\n        <span className="px-1.5 py-0.5 bg-amber-950/80 border border-amber-700/60 rounded text-[9px] text-amber-300 font-bold">\n          [CRITICAL]\n        </span>\n      </div>\n      <div className="space-y-1.5 text-[11px] text-amber-400/90 font-mono">\n        <p className="text-amber-300 font-bold">&gt; Garbage collection routine triggered automatically at core level.</p>\n        <p className="text-amber-500/70 text-[10px]">&gt; Heap allocation: 88.4 GB / 96.0 GB</p>\n      </div>\n      <div className="flex justify-between items-center text-[9px] text-amber-600 pt-1 border-t border-amber-950">\n        <span>NODE_ID: #US-EAST-04</span>\n        <span>CODE: 0x8F4C</span>\n      </div>\n    </motion.div>\n  );\n}`,
  },

  {
    id: "card-holographic",
    title: "Holographic Quantum AI Core Card",
    category: "Cards & Containers",
    description:
      "Futuristic dark-glass card featuring dynamic neon border glow, holographic ambient lighting, live ping indicators, throughput metrics, and smooth spring lift animations.",
    copiesCount: 420,

    // Hyper-realistic use cases
    useCases: [
      "AI & LLM Infrastructure Dashboards: Positioned in neural cluster control panels for monitoring real-time model inference throughput and latency.",
      "Quantum & Cloud Computing Portals: Used for tracking distributed edge computing units and high-frequency data streaming pipelines.",
    ],

    component: <HolographicCard />,

    code: `import { motion } from "framer-motion";\nimport { FiCpu, FiActivity } from "react-icons/fi";\n\nexport default function HolographicCard() {\n  return (\n    <motion.div\n      whileHover={{ scale: 1.02, y: -4 }}\n      transition={{ type: "spring", stiffness: 300, damping: 20 }}\n      className="relative w-80 p-5 bg-slate-950/90 backdrop-blur-2xl border border-cyan-500/40 hover:border-cyan-400 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.15)] group overflow-hidden cursor-pointer select-none"\n    >\n      <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-400/30 transition-all pointer-events-none" />\n      <div className="relative z-10 space-y-3 font-baloo">\n        <div className="flex justify-between items-center text-[11px] text-cyan-400 font-bold">\n          <span className="flex items-center gap-1.5">\n            <FiCpu className="w-3.5 h-3.5 text-cyan-400" />\n            <span>NODE_CLUSTER_01</span>\n          </span>\n          <span className="flex items-center gap-1.5 px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-[9px] text-cyan-300">\n            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />\n            ACTIVE\n          </span>\n        </div>\n        <div className="space-y-1">\n          <h3 className="text-white text-xs font-extrabold tracking-wide">Quantum AI Inference Core</h3>\n          <p className="text-[11px] text-slate-400 font-medium leading-relaxed">\n            High-frequency LLM token streaming pipeline optimized for distributed neural node clusters.\n          </p>\n        </div>\n        <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-300 font-semibold">\n          <span className="flex items-center gap-1 text-cyan-300">\n            <FiActivity className="w-3 h-3" />\n            <span>Throughput: 4.2k tok/s</span>\n          </span>\n          <span className="text-emerald-400 font-bold">Latency: 12ms</span>\n        </div>\n      </div>\n    </motion.div>\n  );\n}`,
  },

  {
    id: "card-cyber-metric",
    title: "Cyber Metric Analytics Card",
    category: "Cards & Containers",
    description:
      "Dashboard statistics card featuring animated progress indicators, neon glow effects, real-time bandwidth utilization tracking, and high-performance throughput metrics.",
    copiesCount: 310,

    // Hyper-realistic use cases
    useCases: [
      "Enterprise Cloud Dashboards: Positioned in network bandwidth overviews for tracking real-time server throughput and peak data transmission rates.",
      "DevOps Infrastructure Portals: Used for monitoring cluster resource consumption, data pipeline loads, and hardware utilization limits.",
    ],

    component: <CyberMetricCard />,

    code: `import { motion } from "framer-motion";\nimport { FiActivity } from "react-icons/fi";\n\nexport default function CyberMetricCard() {\n  return (\n    <motion.div\n      whileHover={{ scale: 1.02, y: -2 }}\n      transition={{ type: "spring", stiffness: 300, damping: 20 }}\n      className="relative w-80 p-5 bg-slate-950 border border-indigo-500/40 hover:border-indigo-400 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.15)] font-baloo select-none cursor-pointer group"\n    >\n      <div className="flex justify-between items-center mb-3">\n        <span className="text-[11px] text-indigo-400 uppercase tracking-widest font-bold flex items-center gap-1.5">\n          <FiActivity className="w-3.5 h-3.5" />\n          <span>Network Throughput</span>\n        </span>\n        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/30 font-bold">\n          +24.8% peak\n        </span>\n      </div>\n      <div className="text-3xl font-extrabold text-white mb-2 tracking-tight">\n        98.4 <span className="text-[11px] text-slate-400 font-medium">GB/s</span>\n      </div>\n      <div className="space-y-1.5">\n        <div className="flex justify-between text-[10px] text-slate-400 font-semibold">\n          <span>Bandwidth Utilization</span>\n          <span className="text-indigo-400">75% Capacity</span>\n        </div>\n        <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">\n          <motion.div\n            initial={{ width: 0 }}\n            animate={{ width: "75%" }}\n            transition={{ duration: 1, ease: "easeOut" }}\n            className="h-full bg-linear-to-r from-indigo-500 to-cyan-400 shadow-[0_0_12px_#6366f1]"\n          />\n        </div>\n      </div>\n    </motion.div>\n  );\n}`,
  },
];
