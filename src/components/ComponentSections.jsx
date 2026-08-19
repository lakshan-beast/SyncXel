import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { componentsData } from "../data/componentsData";
import {
  HiOutlineSparkles,
  HiOutlineEye,
  HiOutlineCodeBracket,
  HiOutlineDocumentDuplicate,
  HiOutlineClipboardDocumentCheck,
  HiOutlineArrowRight,
  HiOutlineArrowLeft,
} from "react-icons/hi2";

export default function AllComponents() {
  // Categories List
  const categories = [
    "All",
    "Buttons",
    "Cards",
    "Inputs",
    "Navbars",
    "Templates",
  ];

  // States
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeTab, setActiveTab] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  // preview / code toggle function
  const toggleTab = (id, tab) => {
    setActiveTab((prev) => ({ ...prev, [id]: tab }));
  };

  // copy function
  const handleCopy = (id, codeText) => {
    navigator.clipboard.writeText(codeText);
    setCopied(id);
    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  // filtered components list
  const filteredItems =
    selectedCategory === "All"
      ? componentsData
      : componentsData.filter((item) => item.category === selectedCategory);

  const navigate = useNavigate();

  return (
    <section className="py-2 px-4 sm:px-8 max-w-7xl mx-auto space-y-12 relative">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-125 h-75 bg-syncxel-cyan/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="mb-2 border-b-2 border-syncxel-border">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center space-x-1 px-4 py-2 rounded-xl bg-syncxel-card/80 border border-syncxel-border/80 text-syncxel-textMuted hover:text-white hover:border-syncxel-cyan/50 text-xs font-semibold transition-all duration-300">
          <HiOutlineArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* 1. SECTION HEADER */}
      <div className="text-center space-y-4 relative z-10 max-w-2xl mx-auto pt-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-syncxel-cyan/10 border border-syncxel-cyan/20 text-syncxel-cyan text-xs font-semibold">
          <HiOutlineSparkles className="w-4 h-4" />
          <span>Copy-Paste UI Library</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
          Production-Ready Components,{" "}
          <span className="text-transparent bg-clip-text bg-syncxel-gradient">
            Built for Speed
          </span>
        </h2>

        <p className="text-syncxel-textMuted text-sm sm:text-base leading-relaxed">
          Copy-paste high-performance React & HTML snippets directly into your
          projects. Zero setup required.
        </p>
      </div>

      {/* 2. CATEGORY FILTER TABS */}
      <div className="flex flex-wrap items-center justify-center gap-2 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-syncxel-cyan text-black shadow-lg shadow-syncxel-cyan/20 scale-105"
                : "bg-syncxel-card/70 text-syncxel-textMuted hover:text-white hover:bg-syncxel-card border border-syncxel-border/50"
            }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* components grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {componentsData.map((item) => {
          const currentTab = activeTab[item.id] || "preview";

          return (
            <div
              key={item.id}
              className="rounded-2xl bg-syncxel-card/60 border-2 border-syncxel-border/90 overflow-hidden backdrop-blur-md flex flex-col justify-between">
              {/* Card Header (Title & Controls) */}
              <div className="p-4 border-b border-syncxel-border/50 flex items-center justify-between bg-syncxel-dark/40 md:flex-col md:justify-start md:items-start md:gap-2">
                <div>
                  <h3 className="text-white font-bold text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60">
                    {item.description}
                  </p>
                </div>

                {/* Preview / Code Toggle Buttons */}
                <div className="flex items-center space-x-1 bg-syncxel-dark p-1 rounded-lg border border-syncxel-border/60 gap-1.5">
                  <button
                    onClick={() => toggleTab(item.id, "preview")}
                    className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                      currentTab === "preview"
                        ? "bg-syncxel-cyan text-black"
                        : "text-syncxel-textMuted hover:text-white"
                    }`}>
                    <HiOutlineEye className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>

                  <button
                    onClick={() => toggleTab(item.id, "code")}
                    className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                      currentTab === "code"
                        ? "bg-syncxel-cyan text-black"
                        : "text-syncxel-textMuted hover:text-white"
                    }`}>
                    <HiOutlineCodeBracket className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </button>
                </div>
              </div>

              {/* Card Body (Live Component OR Code View) */}
              <div className="p-2 min-h-55 flex items-center justify-center relative bg-black/20">
                {currentTab === "preview" ? (
                  /* 1. Live Preview Area */
                  <div className="flex items-center justify-center w-full">
                    {item.component}
                  </div>
                ) : (
                  /* 2. Code Snippet Area */
                  <div className="w-full h-full relative">
                    <pre className="text-xs font-mono text-cyan-300 bg-syncxel-dark/90 p-4 rounded-xl overflow-x-auto max-h-55 border border-syncxel-border/40">
                      <code>{item.code}</code>
                    </pre>
                  </div>
                )}
              </div>

              {/* Card Footer (Copy Code Action) */}
              {/* <div className="p-3 border-t border-syncxel-border/50 bg-syncxel-dark/30 flex items-center justify-between text-xs">
                <span className="text-syncxel-textMuted font-mono">
                  React + Tailwind
                </span>

                <button
                  onClick={() => handleCopy(item.id, item.code)}
                  className="px-3 py-1.5 rounded-lg bg-syncxel-cyan/10 border border-syncxel-cyan/30 text-syncxel-cyan hover:bg-syncxel-cyan hover:text-black font-semibold flex items-center space-x-1.5 transition-all">
                  {copiedId === item.id ? (
                    <>
                      <HiOutlineClipboardDocumentCheck className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <HiOutlineDocumentDuplicate className="w-4 h-4" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div> */}

              {/* Card Footer (Dynamic Action: Free vs Paid) */}
              <div className="p-3 border-t border-syncxel-border/50 bg-syncxel-dark/30 flex items-center justify-between text-xs">
                {item.isPaid ? (
                  /* 🌟 1. PAID TEMPLATE FOOTER */
                  <>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-syncxel-cyan font-bold font-mono text-sm">
                        {item.price || "$9"}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      {/* Live Demo Link (If available) */}
                      {item.demoUrl && (
                        <a
                          href={item.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1.5 rounded-lg border border-syncxel-border/80 text-syncxel-textMuted hover:text-white hover:border-syncxel-cyan transition-all flex items-center space-x-1">
                          <span>Demo</span>
                        </a>
                      )}

                      {/* Get Template Button (Direct Contact / WhatsApp) */}
                      <a
                        href={item.whatsappUrl || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-syncxel-gradient text-black font-bold hover:opacity-90 transition-all shadow-md shadow-syncxel-cyan/20 flex items-center space-x-1">
                        <span>Get Template</span>
                      </a>
                    </div>
                  </>
                ) : (
                  /* 🆓 2. FREE COMPONENT FOOTER (ඔයාගේ Orginal Code එක) */
                  <>
                    <span className="text-syncxel-textMuted font-mono">
                      {item.techStack || "React + Tailwind"}
                    </span>

                    <button
                      onClick={() => handleCopy(item.id, item.code)}
                      className="px-3 py-1.5 rounded-lg bg-syncxel-cyan/10 border border-syncxel-cyan/30 text-syncxel-cyan hover:bg-syncxel-cyan hover:text-black font-semibold flex items-center space-x-1.5 transition-all">
                      {copiedId === item.id ? (
                        <>
                          <HiOutlineClipboardDocumentCheck className="w-4 h-4" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <HiOutlineDocumentDuplicate className="w-4 h-4" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. EXPLORE ALL CTA */}
      {/* <div className="text-center pt-6 relative z-10">
        <a
          href="/components"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-syncxel-card border border-syncxel-border text-white hover:border-syncxel-cyan hover:text-syncxel-cyan font-semibold text-sm transition-all duration-300 shadow-lg">
          <span>Explore All Components & Templates</span>
          <HiOutlineArrowRight className="w-4 h-4" />
        </a>
      </div> */}
    </section>
  );
}
