// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
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
// import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
// import { IoIosGitBranch } from "react-icons/io";

// // Data Imports
// import { integrationsData } from "../data/docs/integrationsData";

// import QuickSetup from "../components/tabs/QuickSetup";
// import CssTricks from "../components/tabs/CssTricks";
// import GitGuide from "../components/tabs/GridGuide";
// import VercelGuide from "../components/tabs/VercelGuide";
// import SeoDnsGuide from "../components/tabs/SeoGuide";
// import CustomHooks from "../components/tabs/HooksGuide";
// import AnimationGuide from "../components/tabs/AnimationGuide";
// import AuthGuide from "../components/tabs/AuthGuide";
// import StateGuide from "../components/tabs/StateGuide";
// import FormsGuide from "../components/tabs/FormsGuide";
// import FaqGuide from "../components/tabs/FaqGuide";

// import KnowledgeHubHeader from "../components/KnowledgeHubHeader";

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

//   const activeIntegration = integrationsData?.[integrationSubTab] || {};

//   return (
//     <div className="min-h-screen bg-white/1 backdrop-blur-md md:rounded-2xl text-slate-100 py-4 mt-2 lg:mt-20 px-2 sm:px-1 lg:px-0 max-w-7xl w-full mx-auto">
//       <KnowledgeHubHeader />

//       {/* 3. LAYOUT: SIDEBAR + CONTENT AREA */}
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
//         {/* SIDEBAR NAVIGATION */}
//         <aside className="lg:col-span-1 space-y-1 lg:max-w-4xl">
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
//         <main className="lg:col-span-3 ">
//           {/* TAB 1: QUICK START */}
//           {activeTab === "quick-start" && <QuickSetup />}

//           {/* TAB 2: FORM INTEGRATIONS */}
//           {activeTab === "integrations" && <FormsGuide />}

//           {/* TAB 3: CSS & TAILWIND TRICKS */}
//           {activeTab === "css-tricks" && <CssTricks />}

//           {/* TAB 4: GIT & GITHUB */}
//           {activeTab === "git" && <GitGuide />}

//           {/* TAB 5: VERCEL & HOSTING */}
//           {activeTab === "vercel" && <VercelGuide />}

//           {/* TAB 6: SEO & DNS */}
//           {activeTab === "seo-dns" && <SeoDnsGuide />}

//           {/* TAB 7: CUSTOM HOOKS */}
//           {activeTab === "hooks" && <CustomHooks />}

//           {/* TAB 8: ANIMATIONS */}
//           {activeTab === "animations" && <AnimationGuide />}

//           {/* TAB 9: AUTH & SECURITY */}
//           {activeTab === "auth" && <AuthGuide />}

//           {/* TAB 10: STATE MANAGEMENT */}
//           {activeTab === "state" && <StateGuide />}

//           {/* TAB 11: FAQ & HELP */}
//           {activeTab === "faq" && <FaqGuide />}
//         </main>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineTerminal,
  HiOutlineCode,
  HiOutlineSparkles,
  HiOutlineCloudUpload,
  HiOutlineGlobeAlt,
  HiOutlineCube,
  HiOutlineFilm,
  HiOutlineLockClosed,
  HiOutlineDatabase,
} from "react-icons/hi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { IoIosGitBranch } from "react-icons/io";

// Data Imports
import { integrationsData } from "../data/docs/integrationsData";

import QuickSetup from "../components/tabs/QuickSetup";
import CssTricks from "../components/tabs/CssTricks";
import GitGuide from "../components/tabs/GridGuide";
import VercelGuide from "../components/tabs/VercelGuide";
import SeoDnsGuide from "../components/tabs/SeoGuide";
import CustomHooks from "../components/tabs/HooksGuide";
import AnimationGuide from "../components/tabs/AnimationGuide";
import AuthGuide from "../components/tabs/AuthGuide";
import StateGuide from "../components/tabs/StateGuide";
import FormsGuide from "../components/tabs/FormsGuide";
import FaqGuide from "../components/tabs/FaqGuide";

import KnowledgeHubHeader from "../components/KnowledgeHubHeader";

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

  const activeIntegration = integrationsData?.[integrationSubTab] || {};

  return (
    <div className="min-h-screen bg-white text-slate-900 py-0 mt-2 lg:mt-12 px-4 lg:px-5 mb-5 max-w-7xl w-full mx-auto font-mono relative overflow-x-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10">
        <KnowledgeHubHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* LAYOUT: SIDEBAR + CONTENT AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-0">
          {/* SIDEBAR NAVIGATION */}
          <aside className="lg:col-span-1 space-y-1 ">
            <div className="bg-white border border-slate-200 rounded-3xl p-3 flex lg:flex-col gap-1.5 shadow-xs scrollbar-thumb-slate-300 overflow-scroll">
              <span className="font-mono text-[10px] text-slate-500/50 hidden lg:block px-3 py-3">
                // documentation_nav
              </span>
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center space-x-3 px-4 py-2.5 rounded-md text-xs font-baloo transition-all whitespace-nowrap w-full text-left ${
                      isActive
                        ? "bg-slate-900 text-white shadow-sm font-bold"
                        : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                    }`}>
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* MAIN CONTENT CONTAINER */}
          <main className="lg:col-span-3 bg-white border-none border-slate-200 rounded-2xl shadow-xs">
            {/* TAB 1: QUICK START */}
            {activeTab === "quick-start" && <QuickSetup />}

            {/* TAB 2: FORM INTEGRATIONS */}
            {activeTab === "integrations" && <FormsGuide />}

            {/* TAB 3: CSS & TAILWIND TRICKS */}
            {activeTab === "css-tricks" && <CssTricks />}

            {/* TAB 4: GIT & GITHUB */}
            {activeTab === "git" && <GitGuide />}

            {/* TAB 5: VERCEL & HOSTING */}
            {activeTab === "vercel" && <VercelGuide />}

            {/* TAB 6: SEO & DNS */}
            {activeTab === "seo-dns" && <SeoDnsGuide />}

            {/* TAB 7: CUSTOM HOOKS */}
            {activeTab === "hooks" && <CustomHooks />}

            {/* TAB 8: ANIMATIONS */}
            {activeTab === "animations" && <AnimationGuide />}

            {/* TAB 9: AUTH & SECURITY */}
            {activeTab === "auth" && <AuthGuide />}

            {/* TAB 10: STATE MANAGEMENT */}
            {activeTab === "state" && <StateGuide />}

            {/* TAB 11: FAQ & HELP */}
            {activeTab === "faq" && <FaqGuide />}
          </main>
        </div>
      </div>
    </div>
  );
}
