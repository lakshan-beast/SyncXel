import BtnPrimary from "../../library/free/buttons/BtnPrimary";
import ArrowHoverButton from "../../library/free/buttons/arrowHoverButton";
import MonospaceLinkButton from "../../library/free/buttons/MonospaceLinkButton";
import NeonButton from "../../library/free/buttons/NeonButton";
import ToggleSwitch from "../../library/free/buttons/ToggleSwitch";
import GradientBorderButton from "../../library/free/buttons/GradientBorderButton";
import GradientFillButton from "../../library/free/buttons/GradientFillButton";

export const buttonsData = [
  // 1
  {
    id: "btn-primary",
    title: "Interactive Primary Button",
    category: "Buttons",
    description:
      "Clean Tailwind button with smooth hover animation and shadow glow.",
    copiesCount: 342,
    component: <BtnPrimary />,
    code: `<button className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-xl transition-all shadow-lg shadow-cyan-500/20 active:scale-95 cursor-pointer">\n  Click Me\n</button>`,
  },

  // 2
  {
    id: "btn-arrow-hover",
    title: "Arrow Hover Button",
    category: "Buttons",
    description:
      "Modern button featuring a smooth sliding arrow icon on hover.",
    copiesCount: 210,
    component: <ArrowHoverButton />,
    code: `<button className="group px-5 py-2.5 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-200 text-sm rounded-xl inline-flex items-center gap-2 transition-all cursor-pointer">\n  <span>Explore More</span>\n  <span className="group-hover:translate-x-1 transition-transform text-cyan-400">→</span>\n</button>`,
  },

  // 3
  {
    id: "btn-mono-minimal",
    title: "Minimalist Monospace Link Button",
    category: "Buttons",
    description:
      "Understated bracketed action button utilizing clean monospace typography.",
    copiesCount: 380,
    component: <MonospaceLinkButton />,
    code: `<button className="px-4 py-2 bg-transparent text-slate-400 hover:text-cyan-400 font-mono text-xs tracking-wider uppercase transition-all cursor-pointer">\n  [ View Logs ]\n</button>`,
  },

  // 4
  {
    id: "btn-neon-minimal",
    title: "Minimal Neon Glow Button",
    category: "Buttons",
    description:
      "Dark-themed button with a subtle cyan neon border and hover luminescence.",
    copiesCount: 415,
    component: <NeonButton />,
    code: `<button className="px-5 py-2.5 bg-slate-950 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 text-sm font-medium rounded-xl transition-all shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] cursor-pointer">\n  Neon Glow\n</button>`,
  },
  {
    id: "toggle-switch-cyan",
    title: "Cyan Glow Toggle Switch",
    category: "Buttons",
    description:
      "Modern sleek toggle switch with cyan neon glow and smooth transition.",
    copiesCount: 192,
    component: <ToggleSwitch />,
    code: `<label className="relative inline-flex items-center cursor-pointer">\n  <input type="checkbox" defaultChecked className="sr-only peer" />\n  <div className="w-11 h-6 bg-slate-900 border border-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500/20 peer-checked:border-cyan-500 peer-checked:after:bg-cyan-400 peer-checked:after:shadow-[0_0_10px_#22d3ee]"></div>\n</label>`,
  },
  {
    id: "btn-gradient-border",
    title: "Gradient Border Button",
    category: "Buttons",
    description:
      "Interactive button wrapped in a stunning cyan-to-indigo gradient border.",
    copiesCount: 275,
    component: <GradientBorderButton />,
    code: `<div className="p-0.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 inline-block">\n  <button className="px-5 py-2 bg-slate-950 text-white text-xs font-semibold rounded-[10px] hover:bg-slate-900 transition-all cursor-pointer">Secure Access</button>\n</div>`,
  },
  {
    id: "btn-gradient-fill",
    title: "Gradient Fill Deploy Button",
    category: "Buttons",
    description:
      "Vibrant action button featuring a full cyan-to-indigo gradient and soft glow.",
    copiesCount: 310,
    component: <GradientFillButton />,
    code: `<button className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs rounded-xl shadow-[0_0_25px_rgba(34,211,238,0.2)] hover:opacity-90 transition-all cursor-pointer">Deploy Pipeline</button>`,
  },
];
