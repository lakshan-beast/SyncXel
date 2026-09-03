import GlassLoginForm from "../../library/free/inputs/GlassLoginForm";
import GlassLoginForm1 from "../../library/free/inputs/f1";
import GlassLoginForm2 from "../../library/free/inputs/f2";

import CyberLoginPreview from "../../library/free/forms/CyberLoginPreview";
import CyberSignupPreview from "../../library/free/forms/CyberSignupPreview";

export const formsData = [
  {
    id: "loader-spinner-form",
    title: "Glowing Spinner Loader",
    category: "Forms & Authentication", // 👈 category එක 'Loaders' විය යුතුයි
    description:
      "A smooth glowing spinner loader built with Tailwind CSS animation.",
    copiesCount: 154,
    component: <GlassLoginForm />, // 👈 Preview එකට පෙන්වීමට සැබෑ React Component එක
    code: `<div className="relative w-12 h-12">
  <div className="w-full h-full rounded-full border-4 border-slate-800"></div>
  <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
</div>`, // 👈 Code tab එකේ පෙන්වීමට JSX string එක
  },

  {
    id: "loader-spinner-form1",
    title: "Glowing Spinner Loader",
    category: "Forms & Authentication", // 👈 category එක 'Loaders' විය යුතුයි
    description:
      "A smooth glowing spinner loader built with Tailwind CSS animation.",
    copiesCount: 154,
    component: <GlassLoginForm1 />, // 👈 Preview එකට පෙන්වීමට සැබෑ React Component එක
    code: `<div className="relative w-12 h-12">
  <div className="w-full h-full rounded-full border-4 border-slate-800"></div>
  <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
</div>`, // 👈 Code tab එකේ පෙන්වීමට JSX string එක
  },

  {
    id: "loader-spinner-form2",
    title: "Glowing Spinner Loader",
    category: "Forms", // 👈 category එක 'Loaders' විය යුතුයි
    description:
      "A smooth glowing spinner loader built with Tailwind CSS animation.",
    copiesCount: 154,
    component: <GlassLoginForm2 />, // 👈 Preview එකට පෙන්වීමට සැබෑ React Component එක
    code: `<div className="relative w-12 h-12">
  <div className="w-full h-full rounded-full border-4 border-slate-800"></div>
  <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
</div>`, // 👈 Code tab එකේ පෙන්වීමට JSX string එක
  },

  {
    id: "form-cyber-login",
    title: "Cyber Login Form Module",
    category: "Forms",
    description:
      "Compact cyberpunk authentication card designed with smooth focus states and font-baloo typography.",
    copiesCount: 380,
    component: <CyberLoginPreview />,
    code: `<div className="w-72 p-4 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo"><div className="text-cyan-400 font-bold text-sm mb-3">SYS_LOGIN</div></div>`,
  },
  {
    id: "form-cyber-signup",
    title: "Node Registration Form",
    category: "Forms",
    description:
      "Futuristic registration module featuring indigo neon accents and optimized card preview height.",
    copiesCount: 310,
    component: <CyberSignupPreview />,
    code: `<div className="w-72 p-4 bg-slate-950 border border-indigo-500/40 rounded-xl font-baloo"><div className="text-indigo-400 font-bold text-sm mb-3">REGISTER_NODE</div></div>`,
  },
];
