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
    <div className="min-h-screen bg-white text-slate-900 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-20 lg:mt-12">
      <div className="relative z-10">
        <KnowledgeHubHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* LAYOUT: SIDEBAR + CONTENT AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-0">
          {/* SIDEBAR NAVIGATION */}
          <aside className="lg:col-span-1 space-y-1">
            <div className="bg-white border border-slate-200 rounded-3xl p-3 flex lg:flex-col gap-1.5 shadow-xs scrollbar-thumb-slate-300 overflow-x-auto">
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
            {activeTab === "quick-start" && <QuickSetup />}
            {activeTab === "integrations" && <FormsGuide />}
            {activeTab === "css-tricks" && <CssTricks />}
            {activeTab === "git" && <GitGuide />}
            {activeTab === "vercel" && <VercelGuide />}
            {activeTab === "seo-dns" && <SeoDnsGuide />}
            {activeTab === "hooks" && <CustomHooks />}
            {activeTab === "animations" && <AnimationGuide />}
            {activeTab === "auth" && <AuthGuide />}
            {activeTab === "state" && <StateGuide />}
            {activeTab === "faq" && <FaqGuide />}
          </main>
        </div>
      </div>
    </div>
  );
}
