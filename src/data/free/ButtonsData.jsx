import BtnPrimary from "../../library/free/buttons/BtnPrimary";
import ArrowHoverButton from "../../library/free/buttons/arrowHoverButton";
// import RippleButton from "../../library/free/buttons/RippleButton";
// import GlassButton from "../../library/free/buttons/GlassButton";
import MonospaceLinkButton from "../../library/free/buttons/MonospaceLinkButton";
import NeonButton from "../../library/free/buttons/NeonButton";

export const buttonsData = [
  // 1
  {
    id: "btn-primary",
    title: "Interactive Primary Button",
    category: "Buttons",
    description:
      "Clean Tailwind button with smooth hover animation and copy support.",
    copiesCount: 342,
    component: <BtnPrimary />, // 👈 Preview එකට පෙන්වීමට සැබෑ React Component එක
    code: `<button className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 cursor-pointer">\n  Click Me \n</button>`, // 👈 Code tab එකට පෙන්වීමට string එක
  },

  // 2
  {
    id: "btn-primarys",
    title: "Interactive Primary Button",
    category: "Buttons",
    description:
      "Clean Tailwind button with smooth hover animation and copy support.",
    copiesCount: 342,
    component: <ArrowHoverButton />, // 👈 Preview එකට පෙන්වීමට සැබෑ React Component එක
    code: `<button className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 cursor-pointer">\n  Click Me \n</button>`, // 👈 Code tab එකට පෙන්වීමට string එක
  },

  // 3
//   {
//     id: "btn-primarys",
//     title: "Interactive Primary Button",
//     category: "Buttons",
//     description:
//       "Clean Tailwind button with smooth hover animation and copy support.",
//     copiesCount: 342,
//     // component: <RippleButton />, // 👈 Preview එකට පෙන්වීමට සැබෑ React Component එක
//     code: `<button className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 cursor-pointer">\n  Click Me \n</button>`, // 👈 Code tab එකට පෙන්වීමට string එක
//   },

  // 4
//   {
//     id: "btn-primarys",
//     title: "Interactive Primary Button",
//     category: "Buttons",
//     description:
//       "Clean Tailwind button with smooth hover animation and copy support.",
//     copiesCount: 342,
//     // component: <GlassButton />, // 👈 Preview එකට පෙන්වීමට සැබෑ React Component එක
//     code: `<button className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 cursor-pointer">\n  Click Me \n</button>`, // 👈 Code tab එකට පෙන්වීමට string එක
//   },

  // btn-mono-minimal
  {
    id: "btn-mono-minimal",
    title: "Minimalist Monospace Link Button",
    category: "Buttons",
    description:
      "Understated bracketed action button utilizing clean monospace typography.",
    copiesCount: 380,
    component: <MonospaceLinkButton />,
    code: `<button className="px-4 py-2 bg-transparent text-slate-400 hover:text-cyan-400 font-mono text-xs tracking-wider uppercase transition-all">[ View Logs ]</button>`,
  },

  // btn-neon-minimal
  {
    id: "btn-neon-minimal",
    title: "Minimalist Monospace Link Button",
    category: "Buttons",
    description:
      "Understated bracketed action button utilizing clean monospace typography.",
    copiesCount: 380,
    component: <NeonButton />,
    code: `<button className="px-4 py-2 bg-transparent text-slate-400 hover:text-cyan-400 font-mono text-xs tracking-wider uppercase transition-all">[ View Logs ]</button>`,
  },
];
