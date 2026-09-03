import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiArrowLeft,
  HiCheck,
  HiCode,
  HiEye,
  HiExternalLink,
  HiShoppingCart,
  HiSparkles,
  HiChatAlt2,
  HiBookOpen,
  HiCheckCircle,
  HiDuplicate,
} from "react-icons/hi";
// import { LuStamp } from "react-icons/lu";
import { TbFileDownloadFilled } from "react-icons/tb";

import { freeComponentsData } from "../data/free/freeIndex";
import { premiumKits } from "../data/premiumKitData";

export default function AllComponents() {
  // State for Main Tabs: "freemium" or "premium"
  const [mainTab, setMainTab] = useState("freemium");

  // State for Freemium Categories Sub-tabs
  const [activeCategory, setActiveCategory] = useState("Buttons & Actions");

  // State to track active sub-tab for individual free cards ("preview" or "code")
  const [cardTabs, setCardTabs] = useState({});

  // State to handle "Copied! ✨" feedback animation/text
  const [copiedId, setCopiedId] = useState(null);

  const toggleCardTab = (id, tab) => {
    setCardTabs((prev) => ({ ...prev, [id]: tab }));
  };

  const handleCopy = (id, codeText) => {
    navigator.clipboard.writeText(codeText);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  // Categories list for Freemium
  const categories = [
    "Buttons & Actions",
    "Cards & Containers",
    "Loaders & Animations",
    "Modals, Toasts & Notifications",
    "Inputs & Search Bars",
    "Badges & Status Indicators",
    "Navbars & Dropdowns",
    "Toggles & Switches",
    "Pricing & Subscriptions",
    "Accordions & Collapsibles",
    "Avatars & Profiles",
    "Tabs & Dynamic Panels",
    "Footers & Status Bars",
    "Forms & Authentication",
    "Checkboxes & Radios",
    "Success & Toasts",
    "Back to Top & FAB",
  ];

  //   Buttons & Actions
  // Loaders & Spinners
  // Modals & Popups
  // Cards & Containers
  // Badges & Tags
  // Inputs & Search Fields
  // Navbars & Headers
  // Forms & Authentication
  // Toggles & Switches
  // Pricing Tables
  // Accordions & FAQs
  // Avatars & Profiles
  // Tabs & Dynamic Panels
  // Footers & Sitemaps
  // Notifications, Toasts & Alerts

  // Filtered components based on selected category
  const filteredFreeComponents = freeComponentsData.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <div className="min-h-screen bg-white/1 backdrop-blur-md md:bg-transparent md:rounded-2xl text-slate-100 py-4 mt-0 lg:mt-0.5 lg:pt-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. TOP HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-8">
        <div className="flex items-center space-x-1">
          <a
            href="/"
            className="p-2.5 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-xl transition-all text-slate-300 hover:text-white flex items-center space-x-2 text-xs font-medium cursor-pointer ">
            <HiArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>
          <span className="text-xs text-slate-400 bg-slate-900/60 px-4 py-2 rounded-xl border border-slate-900">
            Last Updated :{" "}
            <strong className="text-cyan-400">September 2026</strong>
          </span>
        </div>

        {/* Friendly Free Usage Banner */}
        {/* <div className="bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-xl flex items-center space-x-2 text-xs text-cyan-300">
          <HiSparkles className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            All free components can be used anywhere in your personal & client
            projects freely!
          </span>
        </div> */}

        {/* Friendly Free Usage Banner */}
        <div className="bg-red-500/20 ng-blur-md border border-red-500/20 px-4 py-2 mt-2 rounded-xl flex items-center space-x-2 text-xs text-orange-300 text-center ">
          <HiSparkles className="w-4 h-4 text-orange-400 shrink-0" />
          <span>
            All free components can be used anywhere in your personal & client
            projects freely!
          </span>
        </div>
      </div>

      {/* Main Heading & Description */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight ">
          {/* SyncXel{" "} */}Developer
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500 block sm:inline mt-1 sm:mt-0 ml-5">
            Hub
          </span>
        </h1>
        <p className="text-sm text-slate-400 mt-2">
          Explore modular React & Tailwind components or unlock professional
          production-grade UI-Kit bundles.
        </p>
      </div>

      {/* 2. MAIN TABS SWITCHER (Freemium vs Premium UI-Kit) */}
      <div className="flex justify-items-start items-center mb-10">
        <div className="bg-slate-900 p-1.5 rounded-2xl border border-slate-800 flex space-x-2 shadow-xl">
          <button
            onClick={() => setMainTab("freemium")}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              mainTab === "freemium"
                ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                : "text-slate-400 hover:text-white"
            }`}>
            🧩 Freemium Components (Free)
          </button>
          <button
            onClick={() => setMainTab("premium")}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              mainTab === "premium"
                ? "bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20"
                : "text-slate-400 hover:text-white"
            }`}>
            🚀 Premium UI-Kit (Templates)
          </button>
        </div>
      </div>

      {/* 3. CONTENT AREA BASED ON MAIN TAB */}
      {mainTab === "freemium" ? (
        /* --- FREEMIUM TAB CONTENT WITH CATEGORIES --- */
        <div>
          {/* Categories Navigation Sub-tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  activeCategory === cat
                    ? "bg-slate-800 text-cyan-400 border-cyan-500/40 shadow-md"
                    : "bg-slate-900/40 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-900"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Component Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
            {filteredFreeComponents.map((item) => {
              const currentTab = cardTabs[item.id] || "preview";
              const isCopied = copiedId === item.id;

              return (
                // <div
                //   key={item.id}
                //   className="bg-white/15 backdrop-blur-lg  border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl">
                //   {/* Card Header */}
                //   <div className="px-4 py-6 border-b border-slate-800 bg-slate-900/60 flex items-start justify-between">
                //     <div>
                //       <h3 className="text-sm font-bold text-white mb-1">
                //         {item.title}
                //       </h3>
                //       <span className="text-[10px] text-cyan-400 uppercase tracking-wider bg-cyan-400/10 px-4 py-0.5 rounded-full border border-cyan-400/20">
                //         {item.category}
                //       </span>
                //       <p className="text-xs text-slate-400 mt-1.5 mb-0.5 border-t border-white/10 pt-1">
                //         {item.description}
                //       </p>
                //     </div>
                //     <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md border border-emerald-400/20">
                //       Free
                //     </span>
                //   </div>

                //   {/* Sub-Tabs (Preview vs Code) */}
                //   <div className="flex px-2 py-2 justify-between ">
                //     <div className="flex space-x-2">
                //       <button
                //         onClick={() => toggleCardTab(item.id, "preview")}
                //         className={`text-xs px-3 py-1 rounded-lg font-medium transition-all flex items-center space-x-1 cursor-pointer ${currentTab === "preview" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"}`}>
                //         <HiEye className="w-3.5 h-3.5" />
                //         <span>Preview</span>
                //       </button>
                //       <button
                //         onClick={() => toggleCardTab(item.id, "code")}
                //         className={`text-xs px-3 py-1 rounded-lg font-medium transition-all flex items-center space-x-1 cursor-pointer ${currentTab === "code" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"}`}>
                //         <HiCode className="w-3.5 h-3.5" />
                //         <span>Code</span>
                //       </button>
                //     </div>

                //     <span className="flex items-center gap-2 font-exo text-xs font-bold text-orange-600 bg-orange-400/10 px-4 py-1 rounded-full border border-orange-400/20  ">
                //       <TbFileDownloadFilled /> {item.copiesCount}
                //     </span>
                //   </div>

                //   {/* Body Content */}
                //   <div className="p-2 min-h-50 bg-slate-950/60 flex items-center justify-center">
                //     {currentTab === "preview" ? (
                //       <div className="text-center w-full flex items-center justify-center">
                //         {/* අර පරණ item.id කන්ඩිෂන් ඔක්කොම අයින් කරලා මේක විතරක් දාන්න */}
                //         {/* <div dangerouslySetInnerHTML={{ __html: item.code }} /> */}
                //         {item.component}
                //       </div>
                //     ) : (
                //       <pre className="w-full h-32 overflow-auto text-[11px] text-cyan-300 bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-left">
                //         <code>{item.code}</code>
                //       </pre>
                //     )}
                //   </div>

                //   {/* Footer Action with Dynamic "Copied! ✨" feedback */}
                //   <div className="py-2 px-3 bg-slate-900/80 flex items-center justify-between border-t border-slate-800">
                //     <span className="text-[10px] text-slate-400">
                //       Ready to copy
                //     </span>

                //     <button
                //       onClick={() => handleCopy(item.id, item.code)}
                //       className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center space-x-1 ${
                //         isCopied
                //           ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                //           : "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20"
                //       }`}>
                //       {isCopied ? (
                //         <>
                //           <HiCheck className="w-3.5 h-3.5" />
                //           <span>Copied!</span>
                //         </>
                //       ) : (
                //         <>
                //           <HiCheck className="w-3.5 h-3.5" />
                //           <span>Copy Code</span>
                //         </>
                //       )}
                //     </button>
                //   </div>
                // </div>

                // 2nd style
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-slate-600 via-slate-800 to-slate-950 shadow-[0_20px_50px_rgba(8,112,184,0.2)]">
                  {/* Inner Card Container */}
                  <div className="h-full w-full bg-[#0b0f19] rounded-[23px] flex flex-col justify-between overflow-hidden relative">
                    {/* Top Glowing Neon Line on Hover */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Card Header */}
                    <div className="p-5 pb-4 bg-gradient-to-b from-slate-900/90 to-transparent border-b border-slate-800/80">
                      <div className="flex items-start justify-between gap-3 mb-2.5">
                        <div className="space-y-1.5">
                          <span className="inline-block text-[10px] font-bold text-cyan-400 tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 shadow-sm">
                            {item.category}
                          </span>
                          <h3 className="text-base font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 shrink-0">
                          FREE
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Sub-Tabs & Counter Bar */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/50 border-b border-slate-800/70">
                      <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 shadow-inner">
                        <button
                          onClick={() => toggleCardTab(item.id, "preview")}
                          className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all flex items-center space-x-1.5 cursor-pointer ${
                            currentTab === "preview"
                              ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30"
                              : "text-slate-400 hover:text-white"
                          }`}>
                          <HiEye className="w-4 h-4" />
                          <span>Preview</span>
                        </button>
                        <button
                          onClick={() => toggleCardTab(item.id, "code")}
                          className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all flex items-center space-x-1.5 cursor-pointer ${
                            currentTab === "code"
                              ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30"
                              : "text-slate-400 hover:text-white"
                          }`}>
                          <HiCode className="w-4 h-4" />
                          <span>Code</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-bold text-orange-400 bg-orange-500/10 px-3 py-1.5 rounded-xl border border-orange-500/20">
                        <TbFileDownloadFilled className="w-4 h-4" />
                        <span>{item.copiesCount}</span>
                      </div>
                    </div>

                    {/* Body Content Box with Tech Grid Pattern */}
                    <div className="p-6 min-h-[220px] bg-[#07090e] flex items-center justify-center relative overflow-hidden">
                      {/* Background Grid Pattern */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

                      {currentTab === "preview" ? (
                        <div className="w-full flex items-center justify-center relative z-10">
                          {item.component}
                        </div>
                      ) : (
                        <pre className="w-full h-36 overflow-auto text-xs text-cyan-300 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-left relative z-10 shadow-2xl">
                          <code>{item.code}</code>
                        </pre>
                      )}
                    </div>

                    {/* Footer Action */}
                    <div className="p-4 bg-slate-900/90 flex items-center justify-between border-t border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-[11px] font-medium text-slate-300">
                          Production Ready
                        </span>
                      </div>

                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCopy(item.id, item.code)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-2 shadow-lg ${
                          isCopied
                            ? "bg-emerald-500 text-slate-950 shadow-emerald-500/30"
                            : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/30"
                        }`}>
                        {isCopied ? (
                          <>
                            <HiCheck className="w-4 h-4" />
                            <span>Copied! </span>
                          </>
                        ) : (
                          <>
                            <HiDuplicate className="w-4 h-4" />
                            <span>Copy Code</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ) : (
        /* --- PREMIUM UI-KIT TAB CONTENT --- */
        <div className="max-w-6xl mx-auto">
          {premiumKits.map((kit) => {
            const kitTelegramLink = `https://t.me/lakshan_dev?text=${encodeURIComponent(
              `Hi, I want to customize the "${kit.title}" UI-Kit for my project. Let's discuss!`,
            )}`;

            return (
              <div
                key={kit.id}
                className="bg-slate-900/60 border-2 border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl mb-1">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Kit Image Preview */}
                  <div className="relative h-64 lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800">
                    <img
                      src={kit.previewImg}
                      alt={kit.title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute top-4 left-4 space-x-1 flex">
                      <span className="text-xs font-bold text-amber-950 bg-amber-400 px-3 py-1 rounded-full shadow-lg">
                        Pro UI-Kit • {kit.price}
                      </span>

                      <span className="text-xs font-bold text-amber-950 bg-white/80 backdrop-blur-2xl px-3 py-1 rounded-full shadow-lg flex items-center">
                        {/* <LuStamp className="text--500 text-lg mr-2" />{" "} */}
                        {kit.sales}
                      </span>
                    </div>
                  </div>

                  {/* Kit Details & Actions */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {kit.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed mb-6">
                        {kit.description}
                      </p>

                      {/* Features checklist included in kit */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center space-x-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                          <span>
                            Navbar, Hero, Services, Contacts & Footer included
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                          <span>
                            Framer Motion smooth animations & dark mode enabled
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                          <span>
                            Instant .zip download via Lemon Squeezy with
                            README.md
                          </span>
                        </div>
                      </div>

                      {/* Documentation Note Box */}
                      <div className="bg-amber-500/10 border border-amber-500/20 p-3.5 rounded-2xl mb-6">
                        <div className="flex items-start space-x-2 text-xs text-amber-200">
                          <HiBookOpen className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-white block mb-0.5">
                              A-Z Documentation Included:
                            </strong>
                            <span>
                              Get complete setup guides for Firebase, Supabase,
                              EmailJS, Vercel & GitHub via our docs or inside
                              your `.zip` download. Visit{" "}
                              <a
                                href="/docs"
                                className="text-amber-400 underline font-semibold">
                                syncxel.com/docs
                              </a>
                              .
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Buy / Demo & Customize Actions */}
                    <div className="space-y-3 pt-4 border-t border-slate-800">
                      <div className="flex items-center space-x-3">
                        {kit.demoUrl && (
                          <a
                            href={kit.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer">
                            <HiExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        )}
                        <a
                          href={kit.checkoutUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 px-5 py-1 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-amber-400/20 cursor-pointer">
                          <HiShoppingCart className="w-4 h-4" />
                          <span>
                            Get UI-Kit{" "}
                            <span className="text-2xl">({kit.price})</span>
                          </span>
                        </a>
                      </div>

                      {/* Telegram Customize Upsell Button */}
                      <a
                        href={kitTelegramLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/60 text-slate-200 hover:text-white rounded-xl text-xs font-medium flex items-center justify-center space-x-2 transition-all cursor-pointer">
                        <HiChatAlt2 className="w-4 h-4 text-cyan-400" />
                        <span>Customize "{kit.title}" on Telegram 🚀</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
//
