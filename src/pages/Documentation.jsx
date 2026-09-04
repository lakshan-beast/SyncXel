// import React, { useState } from "react";
// import {
//   HiOutlineSearch,
//   HiOutlineClipboardCopy,
//   HiOutlineCheck,
//   HiOutlineTerminal,
//   HiOutlineCode,
//   HiOutlineSparkles,
//   // HiOutlineGitBranch,
//   HiOutlineCloudUpload,
//   HiOutlineGlobeAlt,
//   HiOutlineCube,
//   HiOutlineFilm,
//   HiOutlineLockClosed,
//   HiOutlineDatabase,
//   HiOutlineSparkles as HiSparklesIcon,
// } from "react-icons/hi";

// import { IoIosGitBranch } from "react-icons/io";
// {
//   /* <IoIosGitBranch /> */
// }

// // Data Imports
// import { quickStartData } from "../data/docs/quickStartData";
// import { integrationsData } from "../data/docs/integrationsData";
// import { cssTricksData } from "../data/docs/cssTricksData";
// import { gitData } from "../data/docs/gitData";
// import { vercelData } from "../data/docs/vercelData";
// import { seoAndDnsData } from "../data/docs/seoAndDnsData";
// import { customHooksData } from "../data/docs/customHooksData";
// import { animationData } from "../data/docs/animationData";
// import { authData } from "../data/docs/authData";
// import { stateData } from "../data/docs/stateData";

// export default function Documentation() {
//   const [activeTab, setActiveTab] = useState("quick-start");
//   const [integrationSubTab, setIntegrationSubTab] = useState("formspree");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [copiedCode, setCopiedCode] = useState(null);

//   const handleCopy = (code, key) => {
//     navigator.clipboard.writeText(code);
//     setCopiedCode(key);
//     setTimeout(() => setCopiedCode(null), 2000);
//   };

//   const categories = [
//     { id: "quick-start", label: "Quick Start", icon: HiOutlineTerminal },
//     { id: "integrations", label: "Form Integrations", icon: HiOutlineCode },
//     { id: "css-tricks", label: "CSS & Tailwind", icon: HiOutlineSparkles },
//     { id: "git", label: "Git & GitHub", icon: IoIosGitBranch },
//     { id: "vercel", label: "Vercel & Hosting", icon: HiOutlineCloudUpload },
//     { id: "seo-dns", label: "SEO & DNS Setup", icon: HiOutlineGlobeAlt },
//     { id: "hooks", label: "Custom Hooks", icon: HiOutlineCube },
//     { id: "animations", label: "Animations", icon: HiOutlineFilm },
//     { id: "auth", label: "Auth & Security", icon: HiOutlineLockClosed },
//     { id: "state", label: "State Management", icon: HiOutlineDatabase },
//   ];

//   const activeIntegration = integrationsData?.[integrationSubTab] || {};

//   return (
//     <div className="min-h-screen bg-white/1 backdrop-blur-md  md:rounded-2xl text-slate-100 py-4 mt-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

//       {/* 1. TOP LICENSE BANNER */}
//       <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-slate-900 to-emerald-500/10 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-cyan-950/30">
//         <div className="flex space-x-3 items-start">
//           <div className="p-2 bg-cyan-500/20 rounded-xl text-cyan-400 border border-cyan-500/30">
//             <HiSparklesIcon className="w-5 h-5" />
//           </div>
//           <div>
//             <span className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
//               {quickStartData?.licenseBanner?.badge || "100% FREE LICENSE"}
//             </span>
//             <p className="text-sm font-semibold text-slate-200 mt-0.5">
//               {quickStartData?.licenseBanner?.text ||
//                 "Free for Personal & Commercial Use."}
//             </p>
//           </div>
//         </div>
//         <span className="text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-white/5 whitespace-nowrap">
//           MIT Style • Free Forever
//         </span>
//       </div>

//       {/* 2. HEADER & SEARCH BAR */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
//         <div className="px-5 text-center">
//           <h1 className="text-3xl font-black text-white tracking-tight">
//             Developer Knowledge Hub
//           </h1>
//           <p className="text-slate-400 text-sm mt-1">
//             Complete collection of UI components, integrations, code snippets,
//             and deployment guides.
//           </p>
//         </div>

//         {/* Live Search Input */}
//         <div className="relative w-full md:w-80">
//           <HiOutlineSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search docs, errors, code..."
//             className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 text-sm text-slate-200 placeholder-slate-500 rounded-xl border border-white/10 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
//           />
//         </div>
//       </div>

//       {/* 3. LAYOUT: SIDEBAR + CONTENT AREA */}
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//         {/* SIDEBAR NAVIGATION */}
//         <aside className="lg:col-span-1 space-y-1">
//           <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-3 flex lg:flex-col overflow-x-auto gap-1">
//             {categories.map((cat) => {
//               const Icon = cat.icon;
//               const isActive = activeTab === cat.id;
//               return (
//                 <button
//                   key={cat.id}
//                   onClick={() => setActiveTab(cat.id)}
//                   className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap w-full text-left ${
//                     isActive
//                       ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
//                       : "text-slate-400 hover:text-white hover:bg-slate-800/50"
//                   }`}>
//                   <Icon className="w-4 h-4 shrink-0" />
//                   <span>{cat.label}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </aside>

//         {/* MAIN CONTENT CONTAINER */}
//         <main className="lg:col-span-3">
//           {/* TAB 1: QUICK START */}
//           {activeTab === "quick-start" && (
//             <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-6">
//               <h2 className="text-xl font-bold text-white">
//                 {quickStartData?.title}
//               </h2>
//               <p className="text-xs text-slate-400">
//                 {quickStartData?.description}
//               </p>

//               <div className="space-y-6">
//                 {quickStartData?.steps?.map((step) => (
//                   <div key={step.step} className="flex items-start space-x-4">
//                     <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 font-extrabold text-sm border border-cyan-500/20 shrink-0">
//                       {step.step}
//                     </span>
//                     <div className="flex-1">
//                       <h3 className="text-sm font-bold text-white">
//                         {step.title}
//                       </h3>
//                       <p className="text-xs text-slate-400 mt-1">
//                         {step.description}
//                       </p>
//                       {step.command && (
//                         <div className="mt-3 relative bg-slate-950 p-3 rounded-xl border border-white/10 font-mono text-xs text-cyan-300 flex items-center justify-between">
//                           <span>{step.command}</span>
//                           <button
//                             onClick={() =>
//                               handleCopy(step.command, `qs-${step.step}`)
//                             }
//                             className="text-slate-400 hover:text-white">
//                             {copiedCode === `qs-${step.step}` ? (
//                               <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
//                             ) : (
//                               <HiOutlineClipboardCopy className="w-4 h-4" />
//                             )}
//                           </button>
//                         </div>
//                       )}
//                       {step.code && (
//                         <div className="mt-3 relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
//                           <button
//                             onClick={() =>
//                               handleCopy(step.code, `qs-${step.step}`)
//                             }
//                             className="absolute right-3 top-3 text-slate-400 hover:text-white">
//                             {copiedCode === `qs-${step.step}` ? (
//                               <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
//                             ) : (
//                               <HiOutlineClipboardCopy className="w-4 h-4" />
//                             )}
//                           </button>
//                           <pre>{step.code}</pre>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* TAB 2: FORM INTEGRATIONS */}
//           {activeTab === "integrations" && (
//             <div>
//               <div className="flex space-x-2 mb-4 bg-slate-900 p-1.5 rounded-xl border border-white/10 inline-flex overflow-x-auto">
//                 {Object.keys(integrationsData || {}).map((key) => (
//                   <button
//                     key={key}
//                     onClick={() => setIntegrationSubTab(key)}
//                     className={`px-4 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
//                       integrationSubTab === key
//                         ? "bg-cyan-500 text-slate-950 shadow-md"
//                         : "text-slate-400 hover:text-white"
//                     }`}>
//                     {integrationsData[key].name}
//                   </button>
//                 ))}
//               </div>

//               <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
//                 <h2 className="text-lg font-bold text-white">
//                   {activeIntegration?.title}
//                 </h2>
//                 <p className="text-xs text-slate-400">
//                   {activeIntegration?.description}
//                 </p>
//                 <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-200 overflow-x-auto">
//                   <div className="flex justify-between items-center pb-2 mb-2 border-b border-white/5 text-[10px] text-slate-500">
//                     <span>Integration Code Snippet</span>
//                     <button
//                       onClick={() =>
//                         handleCopy(
//                           activeIntegration?.code,
//                           `integ-${integrationSubTab}`,
//                         )
//                       }
//                       className="flex items-center space-x-1 text-cyan-400">
//                       {copiedCode === `integ-${integrationSubTab}` ? (
//                         <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
//                       ) : (
//                         <HiOutlineClipboardCopy className="w-4 h-4" />
//                       )}
//                     </button>
//                   </div>
//                   <pre>{activeIntegration?.code}</pre>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* TAB 3: CSS & TAILWIND TRICKS */}
//           {activeTab === "css-tricks" && (
//             <div className="space-y-4">
//               {cssTricksData?.map((trick) => (
//                 <div
//                   key={trick.id}
//                   className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
//                   <h3 className="text-base font-bold text-white mb-1">
//                     {trick.title}
//                   </h3>
//                   <p className="text-xs text-slate-400 mb-4">
//                     {trick.description}
//                   </p>
//                   {trick.methods?.map((m, i) => (
//                     <div
//                       key={i}
//                       className="mt-3 relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300">
//                       <button
//                         onClick={() =>
//                           handleCopy(m.code, `css-${trick.id}-${i}`)
//                         }
//                         className="absolute right-3 top-3 text-slate-400 hover:text-white">
//                         {copiedCode === `css-${trick.id}-${i}` ? (
//                           <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
//                         ) : (
//                           <HiOutlineClipboardCopy className="w-4 h-4" />
//                         )}
//                       </button>
//                       <pre>{m.code}</pre>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* TAB 4: GIT & GITHUB */}
//           {activeTab === "git" && (
//             <div className="space-y-6">
//               <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
//                 <h2 className="text-lg font-bold text-white mb-2">
//                   {gitData?.title || "Git & GitHub Guide"}
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                   {gitData?.commits?.map((item, idx) => (
//                     <div
//                       key={idx}
//                       className="bg-slate-950 p-4 rounded-xl border border-white/10">
//                       <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
//                         {item.type}
//                       </span>
//                       <p className="text-xs text-slate-300 mt-2 font-semibold">
//                         {item.desc}
//                       </p>
//                       <p className="text-[11px] font-mono text-slate-500 mt-1">
//                         {item.example}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* TAB 5: VERCEL & HOSTING */}
//           {activeTab === "vercel" && (
//             <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
//               <h2 className="text-lg font-bold text-white">
//                 {vercelData?.title || "Vercel Deployment Guides"}
//               </h2>
//               {vercelData?.guides?.map((g, idx) => (
//                 <div key={idx} className="space-y-2">
//                   <h3 className="text-sm font-bold text-cyan-400">{g.title}</h3>
//                   <p className="text-xs text-slate-400">{g.description}</p>
//                   {g.code && (
//                     <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300">
//                       <pre>{g.code}</pre>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* TAB 6: SEO & DNS */}
//           {activeTab === "seo-dns" && (
//             <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
//               <h2 className="text-lg font-bold text-white">
//                 {seoAndDnsData?.title || "SEO & Custom Domain Setup"}
//               </h2>
//               <div className="space-y-4">
//                 {seoAndDnsData?.items?.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="p-4 bg-slate-950 rounded-xl border border-white/10">
//                     <h3 className="text-sm font-bold text-white mb-1">
//                       {item.title}
//                     </h3>
//                     <p className="text-xs text-slate-400 mb-3">{item.desc}</p>
//                     {item.code && (
//                       <div className="bg-slate-900 p-3 rounded-lg font-mono text-xs text-cyan-300 overflow-x-auto">
//                         <pre>{item.code}</pre>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* TAB 7: CUSTOM HOOKS */}
//           {activeTab === "hooks" && (
//             <div className="space-y-4">
//               {customHooksData?.map((hook) => (
//                 <div
//                   key={hook.name}
//                   className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
//                   <h3 className="text-base font-bold text-cyan-400 font-mono">
//                     {hook.name}
//                   </h3>
//                   <p className="text-xs text-slate-400 my-2">
//                     {hook.description}
//                   </p>
//                   <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
//                     <button
//                       onClick={() => handleCopy(hook.code, hook.name)}
//                       className="absolute right-3 top-3 text-slate-400 hover:text-white">
//                       {copiedCode === hook.name ? (
//                         <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
//                       ) : (
//                         <HiOutlineClipboardCopy className="w-4 h-4" />
//                       )}
//                     </button>
//                     <pre>{hook.code}</pre>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* TAB 8: ANIMATIONS */}
//           {activeTab === "animations" && (
//             <div className="space-y-4">
//               {animationData?.map((anim, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
//                   <h3 className="text-sm font-bold text-white mb-1">
//                     {anim.title}
//                   </h3>
//                   <p className="text-xs text-slate-400 mb-3">{anim.desc}</p>
//                   <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
//                     <pre>{anim.code}</pre>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* TAB 9: AUTH & SECURITY */}
//           {activeTab === "auth" && (
//             <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
//               <h2 className="text-lg font-bold text-white">
//                 {authData?.title || "Authentication & Protected Routes"}
//               </h2>
//               {authData?.snippets?.map((s, idx) => (
//                 <div key={idx} className="space-y-2">
//                   <h3 className="text-sm font-bold text-cyan-400">{s.title}</h3>
//                   <p className="text-xs text-slate-400">{s.desc}</p>
//                   <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
//                     <pre>{s.code}</pre>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* TAB 10: STATE MANAGEMENT */}
//           {activeTab === "state" && (
//             <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
//               <h2 className="text-lg font-bold text-white">
//                 {stateData?.title || "State Management Patterns"}
//               </h2>
//               {stateData?.examples?.map((ex, idx) => (
//                 <div key={idx} className="space-y-2">
//                   <h3 className="text-sm font-bold text-cyan-400">
//                     {ex.title}
//                   </h3>
//                   <p className="text-xs text-slate-400">{ex.desc}</p>
//                   <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
//                     <pre>{ex.code}</pre>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   HiOutlineSearch,
//   HiOutlineClipboardCopy,
//   HiOutlineCheck,
//   HiOutlineTerminal,
//   HiOutlineCode,
//   HiOutlineSparkles,
//   HiOutlineCloudUpload,
//   HiOutlineGlobeAlt,
//   HiOutlineCube,
//   HiOutlineFilm,
//   HiOutlineLockClosed,
//   HiOutlineDatabase,
//   HiOutlineSparkles as HiSparklesIcon,
// } from "react-icons/hi";
// import {
//   HiOutlineQuestionMarkCircle,
//   HiOutlineChevronDown,
// } from "react-icons/hi2";
// import { IoIosGitBranch } from "react-icons/io";

// // Data Imports
// import { quickStartData } from "../data/docs/quickStartData";
// import { integrationsData } from "../data/docs/integrationsData";
// import { cssTricksData } from "../data/docs/cssTricksData";
// import { gitData } from "../data/docs/gitData";
// import { vercelData } from "../data/docs/vercelData";
// import { seoAndDnsData } from "../data/docs/seoAndDnsData";
// import { customHooksData } from "../data/docs/customHooksData";
// import { animationData } from "../data/docs/animationData";
// import { authData } from "../data/docs/authData";
// import { stateData } from "../data/docs/stateData";

// export default function Documentation() {
//   const [activeTab, setActiveTab] = useState("quick-start");
//   const [integrationSubTab, setIntegrationSubTab] = useState("formspree");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [copiedCode, setCopiedCode] = useState(null);
//   const [openFaqIndex, setOpenFaqIndex] = useState(0);

//   const handleCopy = (code, key) => {
//     navigator.clipboard.writeText(code);
//     setCopiedCode(key);
//     setTimeout(() => setCopiedCode(null), 2000);
//   };

//   const categories = [
//     { id: "quick-start", label: "Quick Start", icon: HiOutlineTerminal },
//     { id: "integrations", label: "Form Integrations", icon: HiOutlineCode },
//     { id: "css-tricks", label: "CSS & Tailwind", icon: HiOutlineSparkles },
//     { id: "git", label: "Git & GitHub", icon: IoIosGitBranch },
//     { id: "vercel", label: "Vercel & Hosting", icon: HiOutlineCloudUpload },
//     { id: "seo-dns", label: "SEO & DNS Setup", icon: HiOutlineGlobeAlt },
//     { id: "hooks", label: "Custom Hooks", icon: HiOutlineCube },
//     { id: "animations", label: "Animations", icon: HiOutlineFilm },
//     { id: "auth", label: "Auth & Security", icon: HiOutlineLockClosed },
//     { id: "state", label: "State Management", icon: HiOutlineDatabase },
//     { id: "faq", label: "FAQ & Help", icon: HiOutlineQuestionMarkCircle },
//   ];

//   const faqs = [
//     {
//       question: "What is SyncXel?",
//       answer:
//         "SyncXel is a developer-centric web platform providing production-ready React & Tailwind CSS UI components alongside high-performance frontend engineering services for startups and businesses.",
//     },
//     {
//       question: "Are the UI components free to use in commercial projects?",
//       answer:
//         "Yes, absolutely! All open-source UI blocks and components provided by SyncXel are free to use in both personal and commercial client projects.",
//     },
//     {
//       question: "How do I hire you for a custom web application?",
//       answer:
//         "You can fill out the inquiry form in our Services section or reach out via email. I will respond within 24 hours to schedule a consultation to discuss your project scope.",
//     },
//     {
//       question: "What tech stack do you use for web development?",
//       answer:
//         "I specialize in modern frontend stack: React, Next.js, Tailwind CSS, JavaScript/TypeScript, client-side Firebase (Auth & Firestore), EmailJS, and REST API integrations, deployed via Vercel.",
//     },
//     {
//       question: "How fast can you deliver a custom client project?",
//       answer:
//         "Delivery timelines depend on scope. A high-converting landing page typically takes around 1 week, while full web applications take 2 to 3 weeks with weekly progress demos.",
//     },
//     {
//       question: "Do you offer post-launch maintenance and support?",
//       answer:
//         "Yes, post-launch support includes performance tuning, Lighthouse score optimization, mobile responsiveness tweaks, and continuous feature additions upon request.",
//     },
//   ];

//   const activeIntegration = integrationsData?.[integrationSubTab] || {};

//   return (
//     <div className="min-h-screen bg-white/1 backdrop-blur-md md:rounded-2xl text-slate-100 py-4 mt-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       {/* 1. TOP LICENSE BANNER */}
//       <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-slate-900 to-emerald-500/10 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-cyan-950/30">
//         <div className="flex space-x-3 items-start">
//           <div className="p-2 bg-cyan-500/20 rounded-xl text-cyan-400 border border-cyan-500/30">
//             <HiSparklesIcon className="w-5 h-5" />
//           </div>
//           <div>
//             <span className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
//               {quickStartData?.licenseBanner?.badge || "100% FREE LICENSE"}
//             </span>
//             <p className="text-sm font-semibold text-slate-200 mt-0.5">
//               {quickStartData?.licenseBanner?.text ||
//                 "Free for Personal & Commercial Use."}
//             </p>
//           </div>
//         </div>
//         <span className="text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-white/5 whitespace-nowrap">
//           MIT Style • Free Forever
//         </span>
//       </div>

//       {/* 2. HEADER & SEARCH BAR */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
//         <div className="px-5 text-center md:text-left">
//           <h1 className="text-3xl font-black text-white tracking-tight">
//             Developer Knowledge Hub
//           </h1>
//           <p className="text-slate-400 text-sm mt-1">
//             Complete collection of UI components, integrations, code snippets,
//             and deployment guides.
//           </p>
//         </div>

//         {/* Live Search Input */}
//         <div className="relative w-full md:w-80">
//           <HiOutlineSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search docs, errors, code..."
//             className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 text-sm text-slate-200 placeholder-slate-500 rounded-xl border border-white/10 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
//           />
//         </div>
//       </div>

//       {/* 3. LAYOUT: SIDEBAR + CONTENT AREA */}
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//         {/* SIDEBAR NAVIGATION */}
//         <aside className="lg:col-span-1 space-y-1">
//           <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-3 flex lg:flex-col overflow-x-auto gap-1">
//             {categories.map((cat) => {
//               const Icon = cat.icon;
//               const isActive = activeTab === cat.id;
//               return (
//                 <button
//                   key={cat.id}
//                   onClick={() => setActiveTab(cat.id)}
//                   className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap w-full text-left ${
//                     isActive
//                       ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
//                       : "text-slate-400 hover:text-white hover:bg-slate-800/50"
//                   }`}>
//                   <Icon className="w-4 h-4 shrink-0" />
//                   <span>{cat.label}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </aside>

//         {/* MAIN CONTENT CONTAINER */}
//         <main className="lg:col-span-3">
//           {/* TAB 1: QUICK START */}
//           {activeTab === "quick-start" && (
//             <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-6">
//               <h2 className="text-xl font-bold text-white">
//                 {quickStartData?.title}
//               </h2>
//               <p className="text-xs text-slate-400">
//                 {quickStartData?.description}
//               </p>

//               <div className="space-y-6">
//                 {quickStartData?.steps?.map((step) => (
//                   <div key={step.step} className="flex items-start space-x-4">
//                     <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 font-extrabold text-sm border border-cyan-500/20 shrink-0">
//                       {step.step}
//                     </span>
//                     <div className="flex-1">
//                       <h3 className="text-sm font-bold text-white">
//                         {step.title}
//                       </h3>
//                       <p className="text-xs text-slate-400 mt-1">
//                         {step.description}
//                       </p>
//                       {step.command && (
//                         <div className="mt-3 relative bg-slate-950 p-3 rounded-xl border border-white/10 font-mono text-xs text-cyan-300 flex items-center justify-between">
//                           <span>{step.command}</span>
//                           <button
//                             onClick={() =>
//                               handleCopy(step.command, `qs-${step.step}`)
//                             }
//                             className="text-slate-400 hover:text-white">
//                             {copiedCode === `qs-${step.step}` ? (
//                               <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
//                             ) : (
//                               <HiOutlineClipboardCopy className="w-4 h-4" />
//                             )}
//                           </button>
//                         </div>
//                       )}
//                       {step.code && (
//                         <div className="mt-3 relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
//                           <button
//                             onClick={() =>
//                               handleCopy(step.code, `qs-${step.step}`)
//                             }
//                             className="absolute right-3 top-3 text-slate-400 hover:text-white">
//                             {copiedCode === `qs-${step.step}` ? (
//                               <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
//                             ) : (
//                               <HiOutlineClipboardCopy className="w-4 h-4" />
//                             )}
//                           </button>
//                           <pre>{step.code}</pre>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* TAB 2: FORM INTEGRATIONS */}
//           {activeTab === "integrations" && (
//             <div>
//               <div className="flex space-x-2 mb-4 bg-slate-900 p-1.5 rounded-xl border border-white/10 inline-flex overflow-x-auto">
//                 {Object.keys(integrationsData || {}).map((key) => (
//                   <button
//                     key={key}
//                     onClick={() => setIntegrationSubTab(key)}
//                     className={`px-4 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
//                       integrationSubTab === key
//                         ? "bg-cyan-500 text-slate-950 shadow-md"
//                         : "text-slate-400 hover:text-white"
//                     }`}>
//                     {integrationsData[key].name}
//                   </button>
//                 ))}
//               </div>

//               <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
//                 <h2 className="text-lg font-bold text-white">
//                   {activeIntegration?.title}
//                 </h2>
//                 <p className="text-xs text-slate-400">
//                   {activeIntegration?.description}
//                 </p>
//                 <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-200 overflow-x-auto">
//                   <div className="flex justify-between items-center pb-2 mb-2 border-b border-white/5 text-[10px] text-slate-500">
//                     <span>Integration Code Snippet</span>
//                     <button
//                       onClick={() =>
//                         handleCopy(
//                           activeIntegration?.code,
//                           `integ-${integrationSubTab}`,
//                         )
//                       }
//                       className="flex items-center space-x-1 text-cyan-400">
//                       {copiedCode === `integ-${integrationSubTab}` ? (
//                         <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
//                       ) : (
//                         <HiOutlineClipboardCopy className="w-4 h-4" />
//                       )}
//                     </button>
//                   </div>
//                   <pre>{activeIntegration?.code}</pre>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* TAB 3: CSS & TAILWIND TRICKS */}
//           {activeTab === "css-tricks" && (
//             <div className="space-y-4">
//               {cssTricksData?.map((trick) => (
//                 <div
//                   key={trick.id}
//                   className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
//                   <h3 className="text-base font-bold text-white mb-1">
//                     {trick.title}
//                   </h3>
//                   <p className="text-xs text-slate-400 mb-4">
//                     {trick.description}
//                   </p>
//                   {trick.methods?.map((m, i) => (
//                     <div
//                       key={i}
//                       className="mt-3 relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300">
//                       <button
//                         onClick={() =>
//                           handleCopy(m.code, `css-${trick.id}-${i}`)
//                         }
//                         className="absolute right-3 top-3 text-slate-400 hover:text-white">
//                         {copiedCode === `css-${trick.id}-${i}` ? (
//                           <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
//                         ) : (
//                           <HiOutlineClipboardCopy className="w-4 h-4" />
//                         )}
//                       </button>
//                       <pre>{m.code}</pre>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* TAB 4: GIT & GITHUB */}
//           {activeTab === "git" && (
//             <div className="space-y-6">
//               <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
//                 <h2 className="text-lg font-bold text-white mb-2">
//                   {gitData?.title || "Git & GitHub Guide"}
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                   {gitData?.commits?.map((item, idx) => (
//                     <div
//                       key={idx}
//                       className="bg-slate-950 p-4 rounded-xl border border-white/10">
//                       <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
//                         {item.type}
//                       </span>
//                       <p className="text-xs text-slate-300 mt-2 font-semibold">
//                         {item.desc}
//                       </p>
//                       <p className="text-[11px] font-mono text-slate-500 mt-1">
//                         {item.example}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* TAB 5: VERCEL & HOSTING */}
//           {activeTab === "vercel" && (
//             <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
//               <h2 className="text-lg font-bold text-white">
//                 {vercelData?.title || "Vercel Deployment Guides"}
//               </h2>
//               {vercelData?.guides?.map((g, idx) => (
//                 <div key={idx} className="space-y-2">
//                   <h3 className="text-sm font-bold text-cyan-400">{g.title}</h3>
//                   <p className="text-xs text-slate-400">{g.description}</p>
//                   {g.code && (
//                     <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300">
//                       <pre>{g.code}</pre>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* TAB 6: SEO & DNS */}
//           {activeTab === "seo-dns" && (
//             <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
//               <h2 className="text-lg font-bold text-white">
//                 {seoAndDnsData?.title || "SEO & Custom Domain Setup"}
//               </h2>
//               <div className="space-y-4">
//                 {seoAndDnsData?.items?.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="p-4 bg-slate-950 rounded-xl border border-white/10">
//                     <h3 className="text-sm font-bold text-white mb-1">
//                       {item.title}
//                     </h3>
//                     <p className="text-xs text-slate-400 mb-3">{item.desc}</p>
//                     {item.code && (
//                       <div className="bg-slate-900 p-3 rounded-lg font-mono text-xs text-cyan-300 overflow-x-auto">
//                         <pre>{item.code}</pre>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* TAB 7: CUSTOM HOOKS */}
//           {activeTab === "hooks" && (
//             <div className="space-y-4">
//               {customHooksData?.map((hook) => (
//                 <div
//                   key={hook.name}
//                   className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
//                   <h3 className="text-base font-bold text-cyan-400 font-mono">
//                     {hook.name}
//                   </h3>
//                   <p className="text-xs text-slate-400 my-2">
//                     {hook.description}
//                   </p>
//                   <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
//                     <button
//                       onClick={() => handleCopy(hook.code, hook.name)}
//                       className="absolute right-3 top-3 text-slate-400 hover:text-white">
//                       {copiedCode === hook.name ? (
//                         <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
//                       ) : (
//                         <HiOutlineClipboardCopy className="w-4 h-4" />
//                       )}
//                     </button>
//                     <pre>{hook.code}</pre>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* TAB 8: ANIMATIONS */}
//           {activeTab === "animations" && (
//             <div className="space-y-4">
//               {animationData?.map((anim, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
//                   <h3 className="text-sm font-bold text-white mb-1">
//                     {anim.title}
//                   </h3>
//                   <p className="text-xs text-slate-400 mb-3">{anim.desc}</p>
//                   <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
//                     <pre>{anim.code}</pre>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* TAB 9: AUTH & SECURITY */}
//           {activeTab === "auth" && (
//             <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
//               <h2 className="text-lg font-bold text-white">
//                 {authData?.title || "Authentication & Protected Routes"}
//               </h2>
//               {authData?.snippets?.map((s, idx) => (
//                 <div key={idx} className="space-y-2">
//                   <h3 className="text-sm font-bold text-cyan-400">{s.title}</h3>
//                   <p className="text-xs text-slate-400">{s.desc}</p>
//                   <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
//                     <pre>{s.code}</pre>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* TAB 10: STATE MANAGEMENT */}
//           {activeTab === "state" && (
//             <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
//               <h2 className="text-lg font-bold text-white">
//                 {stateData?.title || "State Management Patterns"}
//               </h2>
//               {stateData?.examples?.map((ex, idx) => (
//                 <div key={idx} className="space-y-2">
//                   <h3 className="text-sm font-bold text-cyan-400">
//                     {ex.title}
//                   </h3>
//                   <p className="text-xs text-slate-400">{ex.desc}</p>
//                   <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
//                     <pre>{ex.code}</pre>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* TAB 11: FAQ & HELP */}
//           {activeTab === "faq" && (
//             <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-6">
//               <div>
//                 <h2 className="text-xl font-bold text-white tracking-tight">
//                   Frequently Asked Questions
//                 </h2>
//                 <p className="text-xs sm:text-sm text-slate-400 mt-1">
//                   Everything you need to know about SyncXel UI components and
//                   custom frontend engineering services.
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 {faqs.map((faq, idx) => {
//                   const isOpen = openFaqIndex === idx;
//                   return (
//                     <div
//                       key={idx}
//                       className={`rounded-xl border transition-all duration-300 overflow-hidden backdrop-blur-md ${
//                         isOpen
//                           ? "bg-slate-900/80 border-cyan-500/30 shadow-lg shadow-cyan-500/5"
//                           : "bg-slate-900/40 border-white/10 hover:border-white/20"
//                       }`}>
//                       <button
//                         type="button"
//                         onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
//                         className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
//                         aria-expanded={isOpen}>
//                         <span className="text-sm sm:text-base font-bold text-white tracking-tight">
//                           {faq.question}
//                         </span>
//                         <div
//                           className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
//                             isOpen
//                               ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-400 rotate-180"
//                               : "bg-slate-950 border-white/10 text-slate-400"
//                           }`}>
//                           <HiOutlineChevronDown className="w-4 h-4" />
//                         </div>
//                       </button>

//                       <AnimatePresence>
//                         {isOpen && (
//                           <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: "auto" }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.3, ease: "easeInOut" }}>
//                             <div className="px-4 sm:px-5 pb-5 pt-0 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/10 mt-1">
//                               <p className="pt-3">{faq.answer}</p>
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineSearch,
  HiOutlineClipboardCopy,
  HiOutlineCheck,
  HiOutlineTerminal,
  HiOutlineCode,
  HiOutlineSparkles,
  HiOutlineCloudUpload,
  HiOutlineGlobeAlt,
  HiOutlineCube,
  HiOutlineFilm,
  HiOutlineLockClosed,
  HiOutlineDatabase,
  HiOutlineSparkles as HiSparklesIcon,
} from "react-icons/hi";
import {
  HiOutlineQuestionMarkCircle,
  HiOutlineChevronDown,
} from "react-icons/hi2";
import { IoIosGitBranch } from "react-icons/io";

// Data Imports
import { quickStartData } from "../data/docs/quickStartData";
import { integrationsData } from "../data/docs/integrationsData";
import { cssTricksData } from "../data/docs/cssTricksData";
import { gitData } from "../data/docs/gitData";
import { vercelData } from "../data/docs/vercelData";
import { seoAndDnsData } from "../data/docs/seoAndDnsData";
import { customHooksData } from "../data/docs/customHooksData";
import { animationData } from "../data/docs/animationData";
import { authData } from "../data/docs/authData";
import { stateData } from "../data/docs/stateData";

export default function Documentation() {
  const [activeTab, setActiveTab] = useState("quick-start");
  const [integrationSubTab, setIntegrationSubTab] = useState("formspree");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedCode, setCopiedCode] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handleCopy = (code, key) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(key);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const categories = [
    { id: "quick-start", label: "Quick Start", icon: HiOutlineTerminal },
    { id: "integrations", label: "Form Integrations", icon: HiOutlineCode },
    { id: "css-tricks", label: "CSS & Tailwind", icon: HiOutlineSparkles },
    { id: "git", label: "Git & GitHub", icon: IoIosGitBranch },
    { id: "vercel", label: "Vercel & Hosting", icon: HiOutlineCloudUpload },
    { id: "seo-dns", label: "SEO & DNS Setup", icon: HiOutlineGlobeAlt },
    { id: "hooks", label: "Custom Hooks", icon: HiOutlineCube },
    { id: "animations", label: "Animations", icon: HiOutlineFilm },
    { id: "auth", label: "Auth & Security", icon: HiOutlineLockClosed },
    { id: "state", label: "State Management", icon: HiOutlineDatabase },
    { id: "faq", label: "FAQ & Help", icon: HiOutlineQuestionMarkCircle },
  ];

  const faqs = [
    {
      question: "What is SyncXel?",
      answer:
        "SyncXel is a developer-centric web platform providing production-ready React & Tailwind CSS UI components alongside high-performance frontend engineering services for startups and businesses.",
    },
    {
      question: "Are the UI components free to use in commercial projects?",
      answer:
        "Yes, absolutely! All open-source UI blocks and components provided by SyncXel are free to use in both personal and commercial client projects.",
    },
    {
      question: "How do I hire you for a custom web application?",
      answer:
        "You can fill out the inquiry form in our Services section or reach out via email. I will respond within 24 hours to schedule a consultation to discuss your project scope.",
    },
    {
      question: "What tech stack do you use for web development?",
      answer:
        "I specialize in modern frontend stack: React, Next.js, Tailwind CSS, JavaScript/TypeScript, client-side Firebase (Auth & Firestore), EmailJS, and REST API integrations, deployed via Vercel.",
    },
    {
      question: "How fast can you deliver a custom client project?",
      answer:
        "Delivery timelines depend on scope. A high-converting landing page typically takes around 1 week, while full web applications take 2 to 3 weeks with weekly progress demos.",
    },
    {
      question: "Do you offer post-launch maintenance and support?",
      answer:
        "Yes, post-launch support includes performance tuning, Lighthouse score optimization, mobile responsiveness tweaks, and continuous feature additions upon request.",
    },
  ];

  const activeIntegration = integrationsData?.[integrationSubTab] || {};

  return (
    <div className="min-h-screen bg-white/1 backdrop-blur-md md:rounded-2xl text-slate-100 py-4 mt-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. TOP LICENSE BANNER */}
      <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-slate-900 to-emerald-500/10 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-cyan-950/30">
        <div className="flex space-x-3 items-start">
          <div className="p-2 bg-cyan-500/20 rounded-xl text-cyan-400 border border-cyan-500/30">
            <HiSparklesIcon className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              {quickStartData?.licenseBanner?.badge || "100% FREE LICENSE"}
            </span>
            <p className="text-sm font-semibold text-slate-200 mt-0.5">
              {quickStartData?.licenseBanner?.text ||
                "Free for Personal & Commercial Use."}
            </p>
          </div>
        </div>
        <span className="text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-white/5 whitespace-nowrap">
          MIT Style • Free Forever
        </span>
      </div>

      {/* 2. HEADER & SEARCH BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div className="px-5 text-center md:text-left">
          <h1 className="text-3xl font-black text-white tracking-tight">
            Developer Knowledge Hub
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Complete collection of UI components, integrations, code snippets,
            and deployment guides.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-80">
          <HiOutlineSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search docs, errors, code..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 text-sm text-slate-200 placeholder-slate-500 rounded-xl border border-white/10 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
          />
        </div>
      </div>

      {/* 3. LAYOUT: SIDEBAR + CONTENT AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* SIDEBAR NAVIGATION */}
        <aside className="lg:col-span-1 space-y-1">
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-3 flex lg:flex-col overflow-x-auto gap-1">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap w-full text-left ${
                    isActive
                      ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`}>
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* MAIN CONTENT CONTAINER */}
        <main className="lg:col-span-3">
          {/* TAB 1: QUICK START */}
          {activeTab === "quick-start" && (
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-6">
              <h2 className="text-xl font-bold text-white">
                {quickStartData?.title}
              </h2>
              <p className="text-xs text-slate-400">
                {quickStartData?.description}
              </p>

              <div className="space-y-6">
                {quickStartData?.steps?.map((step) => (
                  <div key={step.step} className="flex items-start space-x-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 font-extrabold text-sm border border-cyan-500/20 shrink-0">
                      {step.step}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {step.description}
                      </p>
                      {step.command && (
                        <div className="mt-3 relative bg-slate-950 p-3 rounded-xl border border-white/10 font-mono text-xs text-cyan-300 flex items-center justify-between">
                          <span>{step.command}</span>
                          <button
                            onClick={() =>
                              handleCopy(step.command, `qs-${step.step}`)
                            }
                            className="text-slate-400 hover:text-white">
                            {copiedCode === `qs-${step.step}` ? (
                              <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <HiOutlineClipboardCopy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      )}
                      {step.code && (
                        <div className="mt-3 relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
                          <button
                            onClick={() =>
                              handleCopy(step.code, `qs-${step.step}`)
                            }
                            className="absolute right-3 top-3 text-slate-400 hover:text-white">
                            {copiedCode === `qs-${step.step}` ? (
                              <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <HiOutlineClipboardCopy className="w-4 h-4" />
                            )}
                          </button>
                          <pre>{step.code}</pre>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: FORM INTEGRATIONS */}
          {activeTab === "integrations" && (
            <div>
              <div className="flex space-x-2 mb-4 bg-slate-900 p-1.5 rounded-xl border border-white/10 inline-flex overflow-x-auto">
                {Object.keys(integrationsData || {}).map((key) => (
                  <button
                    key={key}
                    onClick={() => setIntegrationSubTab(key)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                      integrationSubTab === key
                        ? "bg-cyan-500 text-slate-950 shadow-md"
                        : "text-slate-400 hover:text-white"
                    }`}>
                    {integrationsData[key].name}
                  </button>
                ))}
              </div>

              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
                <h2 className="text-lg font-bold text-white">
                  {activeIntegration?.title}
                </h2>
                <p className="text-xs text-slate-400">
                  {activeIntegration?.description}
                </p>
                <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-200 overflow-x-auto">
                  <div className="flex justify-between items-center pb-2 mb-2 border-b border-white/5 text-[10px] text-slate-500">
                    <span>Integration Code Snippet</span>
                    <button
                      onClick={() =>
                        handleCopy(
                          activeIntegration?.code,
                          `integ-${integrationSubTab}`,
                        )
                      }
                      className="flex items-center space-x-1 text-cyan-400">
                      {copiedCode === `integ-${integrationSubTab}` ? (
                        <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <HiOutlineClipboardCopy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <pre>{activeIntegration?.code}</pre>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CSS & TAILWIND TRICKS */}
          {activeTab === "css-tricks" && (
            <div className="space-y-4">
              {cssTricksData?.map((trick) => (
                <div
                  key={trick.id}
                  className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-base font-bold text-white mb-1">
                    {trick.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    {trick.description}
                  </p>
                  {trick.methods?.map((m, i) => (
                    <div
                      key={i}
                      className="mt-3 relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300">
                      <button
                        onClick={() =>
                          handleCopy(m.code, `css-${trick.id}-${i}`)
                        }
                        className="absolute right-3 top-3 text-slate-400 hover:text-white">
                        {copiedCode === `css-${trick.id}-${i}` ? (
                          <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <HiOutlineClipboardCopy className="w-4 h-4" />
                        )}
                      </button>
                      <pre>{m.code}</pre>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: GIT & GITHUB */}
          {activeTab === "git" && (
            <div className="space-y-6">
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-white mb-2">
                  {gitData?.title || "Git & GitHub Guide"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {gitData?.commits?.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-950 p-4 rounded-xl border border-white/10">
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                        {item.type}
                      </span>
                      <p className="text-xs text-slate-300 mt-2 font-semibold">
                        {item.desc}
                      </p>
                      <p className="text-[11px] font-mono text-slate-500 mt-1">
                        {item.example}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: VERCEL & HOSTING */}
          {activeTab === "vercel" && (
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
              <h2 className="text-lg font-bold text-white">
                {vercelData?.title || "Vercel Deployment Guides"}
              </h2>
              {vercelData?.guides?.map((g, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm font-bold text-cyan-400">{g.title}</h3>
                  <p className="text-xs text-slate-400">{g.description}</p>
                  {g.code && (
                    <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300">
                      <pre>{g.code}</pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* TAB 6: SEO & DNS */}
          {activeTab === "seo-dns" && (
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
              <h2 className="text-lg font-bold text-white">
                {seoAndDnsData?.title || "SEO & Custom Domain Setup"}
              </h2>
              <div className="space-y-4">
                {seoAndDnsData?.items?.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-950 rounded-xl border border-white/10">
                    <h3 className="text-sm font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mb-3">{item.desc}</p>
                    {item.code && (
                      <div className="bg-slate-900 p-3 rounded-lg font-mono text-xs text-cyan-300 overflow-x-auto">
                        <pre>{item.code}</pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: CUSTOM HOOKS */}
          {activeTab === "hooks" && (
            <div className="space-y-4">
              {customHooksData?.map((hook) => (
                <div
                  key={hook.name}
                  className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-base font-bold text-cyan-400 font-mono">
                    {hook.name}
                  </h3>
                  <p className="text-xs text-slate-400 my-2">
                    {hook.description}
                  </p>
                  <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
                    <button
                      onClick={() => handleCopy(hook.code, hook.name)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-white">
                      {copiedCode === hook.name ? (
                        <HiOutlineCheck className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <HiOutlineClipboardCopy className="w-4 h-4" />
                      )}
                    </button>
                    <pre>{hook.code}</pre>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 8: ANIMATIONS */}
          {activeTab === "animations" && (
            <div className="space-y-4">
              {animationData?.map((anim, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-white mb-1">
                    {anim.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-3">{anim.desc}</p>
                  <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
                    <pre>{anim.code}</pre>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 9: AUTH & SECURITY */}
          {activeTab === "auth" && (
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
              <h2 className="text-lg font-bold text-white">
                {authData?.title || "Authentication & Protected Routes"}
              </h2>
              {authData?.snippets?.map((s, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm font-bold text-cyan-400">{s.title}</h3>
                  <p className="text-xs text-slate-400">{s.desc}</p>
                  <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
                    <pre>{s.code}</pre>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 10: STATE MANAGEMENT */}
          {activeTab === "state" && (
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
              <h2 className="text-lg font-bold text-white">
                {stateData?.title || "State Management Patterns"}
              </h2>
              {stateData?.examples?.map((ex, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm font-bold text-cyan-400">
                    {ex.title}
                  </h3>
                  <p className="text-xs text-slate-400">{ex.desc}</p>
                  <div className="relative bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
                    <pre>{ex.code}</pre>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 11: FAQ & HELP */}
          {activeTab === "faq" && (
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Everything you need to know about SyncXel UI components and
                  custom frontend engineering services.
                </p>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`rounded-xl border transition-all duration-300 overflow-hidden backdrop-blur-md ${
                        isOpen
                          ? "bg-slate-900/80 border-cyan-500/30 shadow-lg shadow-cyan-500/5"
                          : "bg-slate-900/40 border-white/10 hover:border-white/20"
                      }`}>
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                        aria-expanded={isOpen}>
                        <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                          {faq.question}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                            isOpen
                              ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-400 rotate-180"
                              : "bg-slate-950 border-white/10 text-slate-400"
                          }`}>
                          <HiOutlineChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}>
                            <div className="px-4 sm:px-5 pb-5 pt-0 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/10 mt-1">
                              <p className="pt-3">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
