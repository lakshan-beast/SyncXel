import GlassLoginForm from "../../library/free/inputs/GlassLoginForm";
import GlassLoginForm1 from "../../library/free/inputs/f1";
import GlassLoginForm2 from "../../library/free/inputs/f2";

import CyberLoginPreview from "../../library/free/forms/CyberLoginPreview";
import CyberSignupPreview from "../../library/free/forms/CyberSignupPreview";

import CyberLoginForm from "../../library/free/forms/CyberLoginForm";
import BrutalSignupForm from "../../library/free/forms/BrutalSignupForm";
// import GlassLoginForm from "../../library/free/forms/GlassLoginForm";
import BentoWizardForm from "../../library/free/forms/BentoWizardForm";
import ClayLoginForm from "../../library/free/forms/ClayLoginForm";
import RetroTerminalForm from "../../library/free/forms/RetroTerminalForm";

import CyberPaymentForm from "../../library/free/forms/CyberPaymentForm";
import BrutalNewsletterForm from "../../library/free/forms/BrutalNewsletterForm";
import GlassResetForm from "../../library/free/forms/GlassResetForm";
import BentoInviteForm from "../../library/free/forms/BentoInviteForm";
import ClayFeedbackForm from "../../library/free/forms/ClayFeedbackForm";
import RetroTerminalExecForm from "../../library/free/forms/RetroTerminalExecForm";

export const formsData = [
  {
    id: "form-cyber-payment",
    title: "Cyberpunk Crypto Checkout",
    category: "Forms & Authentication",
    description:
      "Glowing neon cyberpunk transaction checkout node with live validation state.",
    copiesCount: 310,
    component: <CyberPaymentForm />,
    code: `<div className="w-80 p-5 bg-slate-950 border border-cyan-500/50 rounded-2xl shadow-[0_0_25px_rgba(34,211,238,0.2)] font-baloo space-y-4"><h3 className="text-xs font-bold text-cyan-300">CYBER_CHECKOUT</h3><input type="text" placeholder="WALLET_ADDRESS" className="w-full px-3 py-2 bg-slate-900 border border-cyan-500/30 rounded-xl text-xs text-slate-200" /></div>`,
  },
  {
    id: "form-brutal-newsletter",
    title: "Neo-Brutalism Newsletter Form",
    category: "Forms & Authentication",
    description:
      "High-impact geometric brutalist email subscription box with hard drop-shadows.",
    copiesCount: 285,
    component: <BrutalNewsletterForm />,
    code: `<div className="w-80 p-5 bg-pink-400 border-2 border-slate-950 rounded-2xl shadow-[6px_6px_0px_0px_#020617] font-baloo space-y-4"><h3 className="text-xs font-black uppercase">DROPBOX_ALERTS</h3></div>`,
  },
  {
    id: "form-glass-reset",
    title: "Glassmorphism Password Reset",
    category: "Forms & Authentication",
    description:
      "Frosted translucent glass recovery card built with deep backdrop blur.",
    copiesCount: 340,
    component: <GlassResetForm />,
    code: `<div className="w-80 p-5 bg-white/10 backdrop-blur-2xl border border-white/25 rounded-3xl shadow-2xl text-white font-baloo"><h3 className="text-xs font-bold text-cyan-300">ENCLAVE_RECOVERY</h3></div>`,
  },
  {
    id: "form-bento-invite",
    title: "Bento Grid Team Invite",
    category: "Forms & Authentication",
    description:
      "Clean minimalist team member invitation panel with role dropdown selection.",
    copiesCount: 320,
    component: <BentoInviteForm />,
    code: `<div className="w-80 p-5 bg-slate-900 border border-slate-800 rounded-2xl font-baloo text-white"><h3 className="text-xs font-bold">Team Member Access</h3></div>`,
  },
  {
    id: "form-clay-feedback",
    title: "Claymorphism Feedback Form",
    category: "Forms & Authentication",
    description:
      "Soft volumetric matte 3D container with interactive text review input.",
    copiesCount: 250,
    component: <ClayFeedbackForm />,
    code: `<div className="w-80 p-5 bg-slate-900 rounded-3xl shadow-[10px_10px_20px_#020617,-10px_-10px_20px_#1e293b] border border-slate-800 text-white font-baloo"><h3>Tactile Feedback</h3></div>`,
  },
  {
    id: "form-retro-exec",
    title: "Retro 90s Terminal Command Exec",
    category: "Forms & Authentication",
    description:
      "Green phosphor monospaced terminal environment command execution box.",
    copiesCount: 290,
    component: <RetroTerminalExecForm />,
    code: `<div className="w-80 p-4 bg-black border-2 border-green-500 rounded font-mono text-green-400"><span>C:\\SYS\\EXEC_CMD.EXE</span></div>`,
  },
  {
    id: "form-cyber-login",
    title: "Cyberpunk Secure Login Card",
    category: "Forms & Authentication",
    description:
      "Glowing cyberpunk authentication node with interactive login state validation.",
    copiesCount: 340,
    component: <CyberLoginForm />,
    code: `<div className="w-80 p-5 bg-slate-950 border border-cyan-500/40 rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.15)] font-baloo space-y-4"><h3 className="text-xs font-bold text-cyan-400">SECURE_AUTH_NODE</h3><form className="space-y-3"><input type="text" placeholder="USER_ID" className="w-full px-3 py-2 bg-slate-900 border border-cyan-500/30 rounded-xl text-xs text-slate-200" /><button className="w-full py-2 bg-cyan-500 text-slate-950 font-bold text-xs rounded-xl">INITIALIZE</button></form></div>`,
  },
  {
    id: "form-brutal-signup",
    title: "Neo-Brutalism Signup Form",
    category: "Forms & Authentication",
    description:
      "High-contrast geometric brutalist registration container with hard drop-shadows.",
    copiesCount: 295,
    component: <BrutalSignupForm />,
    code: `<div className="w-80 p-5 bg-yellow-300 border-2 border-slate-950 rounded-2xl shadow-[5px_5px_0px_0px_#020617] font-baloo space-y-4"><h3 className="text-xs font-black uppercase">BRUTAL_REGISTRATION</h3><input type="text" placeholder="CODENAME" className="w-full px-3 py-2 bg-white border-2 border-slate-950 rounded-lg text-xs font-bold" /></div>`,
  },
  {
    id: "form-glass-login",
    title: "Glassmorphism Enclave Login",
    category: "Forms & Authentication",
    description:
      "Frosted translucent glass overlay container built with deep backdrop blur.",
    copiesCount: 380,
    component: <GlassLoginForm />,
    code: `<div className="w-80 p-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl text-white font-baloo"><h3 className="text-xs font-bold text-cyan-300">ENCLAVE_LOGIN</h3></div>`,
  },
  {
    id: "form-bento-wizard",
    title: "Bento Multi-Step Wizard",
    category: "Forms & Authentication",
    description:
      "Minimalist multi-step configuration panel layout for smooth onboarding flows.",
    copiesCount: 310,
    component: <BentoWizardForm />,
    code: `<div className="w-80 p-5 bg-slate-900 border border-slate-800 rounded-2xl font-baloo text-white"><div className="flex justify-between text-xs text-slate-400 border-b border-slate-800 pb-2"><span>Setup Wizard</span><span>Step 1 of 2</span></div></div>`,
  },
  {
    id: "form-clay-login",
    title: "Claymorphism Volumetric Login",
    category: "Forms & Authentication",
    description: "Soft tactile 3D matte surface lighting form component.",
    copiesCount: 260,
    component: <ClayLoginForm />,
    code: `<div className="w-80 p-5 bg-slate-900 rounded-3xl shadow-[10px_10px_20px_#020617,-10px_-10px_20px_#1e293b] border border-slate-800 text-white font-baloo"><h3>Volumetric Access</h3></div>`,
  },
  {
    id: "form-retro-terminal",
    title: "Retro 90s Terminal Auth",
    category: "Forms & Authentication",
    description: "Green phosphor monospaced authentication console screen.",
    copiesCount: 285,
    component: <RetroTerminalForm />,
    code: `<div className="w-80 p-4 bg-black border-2 border-green-500 rounded font-mono text-green-400"><div className="text-xs border-b border-green-900 pb-2">C:\\SYS\\AUTH.EXE</div></div>`,
  },
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
