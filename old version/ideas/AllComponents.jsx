
import React, { useState } from "react";
import { componentsData } from "../data/componentsData2";
import {
  HiOutlineSearch,
  HiOutlineCopy,
  HiOutlineCheck,
  HiOutlineEye,
} from "react-icons/hi";

export default function AllComponents() {
  const [componentsList, setComponentsList] = useState(componentsData);
  const [activeCategory, setActiveCategory] = useState("Animations");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCodeTabs, setActiveCodeTabs] = useState({}); // Stores 'jsx' or 'html' per card
  const [copiedId, setCopiedId] = useState(null);

  // Extract Unique Categories dynamically
  const categories = [
    "animations",
    ...new Set(componentsData.map((item) => item.category)),
  ];

  // Filter Logic
  const filteredComponents = componentsList.filter((item) => {
    const matchesCategory =
      activeCategory === "Animations" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Code Copy Handler + Increment Copy Count
  const handleCopy = (id, codeText) => {
    navigator.clipboard.writeText(codeText);
    setCopiedId(id);

    // Dynamic state update for copy count increment
    setComponentsList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, copies: item.copies + 1 } : item,
      ),
    );

    setTimeout(() => setCopiedId(null), 2000);
  };

  // Switch between JSX and HTML tab per component card
  const toggleTab = (id, tab) => {
    setActiveCodeTabs((prev) => ({ ...prev, [id]: tab }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Component <span className="text-cyan-400">Showroom</span>
        </h1>
        <p className="text-slate-400 text-sm">
          Production-ready, customizable UI components. Copy-paste React JSX or
          Pure HTML instantly.
        </p>
      </div>

      {/* Controls: Search & Categories */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <HiOutlineSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500 transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold capitalize whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Component Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredComponents.map((item) => {
          const LiveComponent = item.component;
          const currentTab = activeCodeTabs[item.id] || "jsx";
          const codeToCopy =
            currentTab === "jsx" ? item.code.jsx : item.code.html;

          return (
            <div
              key={item.id}
              className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between">
              {/* Card Header: Title & Stats */}
              <div className="p-4 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/60">
                <div>
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <span className="text-[10px] text-cyan-400 uppercase tracking-wider font-semibold">
                    {item.category}
                  </span>
                </div>

                {/* Views & Copies Badge */}
                <div className="flex items-center space-x-3 text-xs text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
                  <span className="flex items-center space-x-1" title="Views">
                    <HiOutlineEye className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[11px] font-medium">
                      {item.views}
                    </span>
                  </span>
                  <span className="text-slate-700">|</span>
                  <span className="flex items-center space-x-1" title="Copies">
                    <HiOutlineCopy className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[11px] font-medium text-white">
                      {item.copies}
                    </span>
                  </span>
                </div>
              </div>

              {/* Card Center: Live Component Preview */}
              <div className="p-8 min-h-[220px] flex items-center justify-center bg-slate-950/40 border-b border-slate-800/80 relative">
                <LiveComponent />
              </div>

              {/* Card Bottom: Code Tabs & Copy Action */}
              <div className="p-3 bg-slate-900/80 flex items-center justify-between">
                {/* JSX / HTML Tab Buttons */}
                <div className="flex bg-slate-950 rounded-lg p-1 border border-slate-800">
                  <button
                    onClick={() => toggleTab(item.id, "jsx")}
                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all ${
                      currentTab === "jsx"
                        ? "bg-cyan-500 text-slate-950"
                        : "text-slate-400 hover:text-white"
                    }`}>
                    React JSX
                  </button>
                  <button
                    onClick={() => toggleTab(item.id, "html")}
                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all ${
                      currentTab === "html"
                        ? "bg-cyan-500 text-slate-950"
                        : "text-slate-400 hover:text-white"
                    }`}>
                    HTML
                  </button>
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(item.id, codeToCopy)}
                  className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-all border border-slate-700">
                  {copiedId === item.id ? (
                    <>
                      <HiOutlineCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <HiOutlineCopy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
