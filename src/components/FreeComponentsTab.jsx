import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiEye, HiCode, HiFilter, HiX } from "react-icons/hi";
import { TbCopyCheckFilled, TbCopyPlusFilled } from "react-icons/tb";
import { GiBoatFishing } from "react-icons/gi";

import { freeComponentsData } from "../data/free/freeIndex";

export default function FreeComponentsTab({
  categories,
  activeCategory,
  setActiveCategory,
  filteredFreeComponents,
  cardTabs,
  toggleCardTab,
  copiedId,
  handleCopy,
}) {
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);

  return (
    <div className="font-mono">
      {/* --- DESKTOP CATEGORIES PILLS --- */}
      <div className="hidden md:flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              activeCategory === cat
                ? "bg-slate-800 text-white border-slate-600 shadow-md"
                : "bg-slate-900/40 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-900"
            }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* --- MOBILE CATEGORY SELECTOR BUTTON --- */}
      <div className="md:hidden mb-6">
        <button
          onClick={() => setIsMobileCategoryOpen(true)}
          className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-slate-200 flex items-center justify-between shadow-md">
          <span className="flex items-center space-x-2">
            <HiFilter className="w-4 h-4 text-slate-400" />
            <span>
              Category: <strong className="text-white">{activeCategory}</strong>
            </span>
          </span>
          <span className="text-[10px] bg-slate-800 px-2.5 py-1 rounded-md text-slate-300">
            Change ▾
          </span>
        </button>
      </div>

      {/* --- MOBILE BOTTOM SHEET / DRAWER FOR CATEGORIES --- */}
      <AnimatePresence>
        {isMobileCategoryOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/80 backdrop-blur-sm md:hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-h-[75vh] bg-slate-950 border-t border-slate-800 rounded-t-3xl p-6 overflow-y-auto space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  // select_category
                </h3>
                <button
                  onClick={() => setIsMobileCategoryOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800">
                  <HiX className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-2 pt-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setIsMobileCategoryOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all border ${
                      activeCategory === cat
                        ? "bg-white text-slate-950 border-white shadow-md"
                        : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"
                    }`}>
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- COMPONENT CARDS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {filteredFreeComponents.map((item) => {
          const currentTab = cardTabs[item.id] || "preview";
          const isCopied = copiedId === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="relative group rounded-3xl p-[1px] bg-slate-800 shadow-xl">
              <div className="h-full w-full bg-slate-950 rounded-[23px] flex flex-col justify-between overflow-hidden relative">
                {/* Card Header */}
                <div className="p-5 pb-4 bg-slate-900/80 border-b border-slate-800">
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="space-y-1">
                      <span className="inline-block text-[10px] font-bold text-slate-300 tracking-wider uppercase bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                        {item.category}
                      </span>
                      <h3 className="text-base font-bold text-white tracking-wide">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-black text-white bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700 shrink-0">
                      FREE
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Sub-Tabs & Counter Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/50 border-b border-slate-800">
                  <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
                    <button
                      onClick={() => toggleCardTab(item.id, "preview")}
                      className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all flex items-center space-x-1.5 cursor-pointer ${
                        currentTab === "preview"
                          ? "bg-white text-slate-950 font-bold shadow-xs"
                          : "text-slate-400 hover:text-white"
                      }`}>
                      <HiEye className="w-4 h-4" />
                      <span>Preview</span>
                    </button>
                    <button
                      onClick={() => toggleCardTab(item.id, "code")}
                      className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all flex items-center space-x-1.5 cursor-pointer ${
                        currentTab === "code"
                          ? "bg-white text-slate-950 font-bold shadow-xs"
                          : "text-slate-400 hover:text-white"
                      }`}>
                      <HiCode className="w-4 h-4" />
                      <span>Code</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                    <GiBoatFishing className="w-4 h-4 text-slate-400" />
                    <span>{item.copiesCount}</span>
                  </div>
                </div>

                {/* Body Content Box */}
                <div className="p-6 min-h-[220px] bg-slate-950/60 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

                  {currentTab === "preview" ? (
                    <div className="w-full flex items-center justify-center relative z-10">
                      {item.component}
                    </div>
                  ) : (
                    <pre className="w-full h-36 overflow-auto text-xs text-slate-200 bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-left relative z-10 shadow-inner">
                      <code>{item.code}</code>
                    </pre>
                  )}
                </div>

                {/* Footer Action */}
                <div className="p-4 bg-slate-900 flex items-center justify-between border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-[11px] font-medium text-slate-300">
                      Production Ready
                    </span>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCopy(item.id, item.code)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-2 shadow-md ${
                      isCopied
                        ? "bg-white text-slate-950"
                        : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                    }`}>
                    {isCopied ? (
                      <>
                        <TbCopyCheckFilled className="w-4 h-4" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <TbCopyPlusFilled className="w-4 h-4" />
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
  );
}
