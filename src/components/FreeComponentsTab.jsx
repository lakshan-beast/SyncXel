import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiEye, HiCode, HiFilter, HiX } from "react-icons/hi";
import { TbCopyCheckFilled, TbCopyPlusFilled } from "react-icons/tb";

import { MdOutlineFileDownloadDone } from "react-icons/md";


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
      <div className="hidden md:flex flex-wrap gap-2 mb-12 justify-start">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5.5 py-2 rounded-md text-xs font-baloo font-bold transition-all cursor-pointer border ${
              activeCategory === cat
                ? "bg-slate-800 text-white border-slate-600 shadow-md"
                : "bg-slate-200/40 text-slate-600 border-slate-300/50 hover:text-white hover:bg-slate-700/30"
            }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* --- MOBILE CATEGORY SELECTOR BUTTON --- */}
      <div className="md:hidden mb-6">
        <button
          onClick={() => setIsMobileCategoryOpen(true)}
          className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-ms font-bold font-baloo text-slate-200 flex items-center justify-between shadow-md">
          <span className="flex items-center space-x-2">
            {/* <HiFilter className="w-4 h-4 text-slate-400" /> */}
            <span>
              Category :{" "}
              <strong className="text-white">{activeCategory}</strong>
            </span>
          </span>
          <span className="text-[10px] bg-slate-700/50 px-5.5 py-1 rounded-md text-slate-300">
            Change ▾
          </span>
        </button>
      </div>

      {/* --- MOBILE BOTTOM SHEET / DRAWER FOR CATEGORIES --- */}
      <AnimatePresence>
        {isMobileCategoryOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-500/80 backdrop-blur-sm md:hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-h-[75vh] bg-slate-950 border-t border-slate-800 rounded-t-3xl p-6 overflow-y-auto space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                  // select_category
                </h3>
                <button
                  onClick={() => setIsMobileCategoryOpen(false)}
                  className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-700 border border-slate-800">
                  <HiX className="w-5 h-5" />
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
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold font-baloo transition-all border ${
                      activeCategory === cat
                        ? "bg-slate-300 text-slate-950 border-slate-200 shadow-md"
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

      <span className="font-mono text-slate-500/50 mb-1 block text-xs">
        // section_registry: freemium_modular_snippets
      </span>

      {/* --- COMPONENT CARDS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-3 lg:gap-x-7 lg:gap-y-10">
        {filteredFreeComponents.map((item) => {
          const currentTab = cardTabs[item.id] || "preview";
          const isCopied = copiedId === item.id;

          return (
            // <motion.div
            //   key={item.id}
            //   initial={{ opacity: 0, y: 20 }}
            //   animate={{ opacity: 1, y: 0 }}
            //   whileHover={{ y: -3, transition: { duration: 0.2 } }}
            //   className="relative group rounded-3xl p-[1px] bg-slate-300 shadow-xl border-none">
            //   <div className="h-full w-full bg-slate-200 border-none rounded-[23px] flex flex-col justify-between overflow-hidden relative">
            //     {/* Card Header */}
            //     <div className="px-5 py-3 pb-4 bg-white border-none shadow-none">
            //       <div className="flex items-start justify-between gap-3 mb-2.5">
            //         <div className="space-y-1">
            //           <span className="inline-block text-[10px] font-bold text-slate-300 tracking-wider uppercase bg-slate-800 px-3 py-1 rounded-full border border-slate-700 mb-3">
            //             {item.category}
            //           </span>
            //           <h3 className="text-base font-bold text-slate-700 tracking-wide">
            //             {item.title}
            //           </h3>
            //         </div>
            //         <span className="text-[10px] font-baloo text-white bg-slate-800 px-3.5 py-0.5 rounded-full border border-slate-700 shrink-0">
            //           FREE
            //         </span>
            //       </div>
            //       <p className="text-xs text-slate-500 leading-tight font-baloo">
            //         {item.description}
            //       </p>
            //     </div>

            //     {/* Sub-Tabs & Counter Bar */}
            //     <div className="flex items-center justify-between px-2 py-0 bg-white border-none border-slate-800">
            //       <div className="flex items-center bg-slate-300 p-1 rounded-xl border-none border-slate-800">
            //         <button
            //           onClick={() => toggleCardTab(item.id, "preview")}
            //           className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all flex items-center space-x-1.5 cursor-pointer ${
            //             currentTab === "preview"
            //               ? "bg-white text-slate-950 font-bold shadow-xs"
            //               : "text-slate-400 hover:text-white"
            //           }`}>
            //           <HiEye className="w-4 h-4" />
            //           <span>Preview</span>
            //         </button>
            //         <button
            //           onClick={() => toggleCardTab(item.id, "code")}
            //           className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all flex items-center space-x-1.5 cursor-pointer ${
            //             currentTab === "code"
            //               ? "bg-white text-slate-950 font-bold shadow-xs"
            //               : "text-slate-400 hover:text-white"
            //           }`}>
            //           <HiCode className="w-4 h-4" />
            //           <span>Code</span>
            //         </button>
            //       </div>

            //       <div className="flex items-center gap-2 text-xs font-bold text-slate-300 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
            //         <GiBoatFishing className="w-4 h-4 text-slate-400" />
            //         <span>{item.copiesCount}</span>
            //       </div>
            //     </div>

            //     {/* Body Content Box */}
            //     <div className="px-2 py-2 min-h-55 bg-slate-50/70 flex items-center justify-center relative overflow-hidden">
            //       {/* <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" /> */}

            //       {currentTab === "preview" ? (
            //         <div className="w-full flex items-center justify-center relative z-10">
            //           {item.component}
            //         </div>
            //       ) : (
            //         <pre className="w-full h-36 overflow-auto text-xs text-slate-200 bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-left relative z-10 shadow-inner scrollbar-thumb-slate-600 flex justify-start items-center">
            //           <code>{item.code}</code>
            //         </pre>
            //       )}
            //     </div>

            //     {/* Footer Action */}
            //     <div className="px-5 py-2 bg-white flex items-center justify-between border-t border-slate-200">
            //       <div className="flex items-center gap-2">
            //         <span className="w-2 h-2 rounded-full bg-white" />
            //         <span className="text-[10px] text-slate-500 font-semibold font-baloo">
            //           Production Ready
            //         </span>
            //       </div>

            //       <motion.button
            //         whileTap={{ scale: 0.95 }}
            //         onClick={() => handleCopy(item.id, item.code)}
            //         className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-2 shadow-md ${
            //           isCopied
            //             ? "bg-white text-slate-950"
            //             : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
            //         }`}>
            //         {isCopied ? (
            //           <>
            //             <TbCopyCheckFilled className="w-4 h-4" />
            //             <span>Copied!</span>
            //           </>
            //         ) : (
            //           <>
            //             <TbCopyPlusFilled className="w-4 h-4" />
            //             <span>Copy Code</span>
            //           </>
            //         )}
            //       </motion.button>
            //     </div>
            //   </div>
            // </motion.div>

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="relative group rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
              {/* Card Header */}
              <div className="px-5 py-4 pb-1 bg-white border-none">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div className="space-y-1">
                    {/* Category Pill */}
                    <span className="inline-block text-[10px] font-baloo font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight font-baloo pt-1">
                      {item.title}
                    </h3>
                  </div>
                  {/* FREE Badge */}
                  <span className="text-[10px] font-baloo font-bold text-white bg-slate-900 px-4.5 py-1 rounded-full shadow-xs shrink-0">
                    FREE
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-tight font-baloo pt-1">
                  {item.description}
                </p>
              </div>

              {/* Sub-Tabs & Counter Bar */}
              <div className="flex items-center justify-between px-2 py-2 bg-white border-b-2 border-slate-200">
                <div className="flex items-center bg-slate-300/50 p-0 rounded-md border border-slate-100">
                  <button
                    onClick={() => toggleCardTab(item.id, "preview")}
                    className={`text-xs px-4 py-1.5 rounded-lg font-baloo font-medium transition-all flex items-center space-x-1.5 cursor-pointer ${
                      currentTab === "preview"
                        ? "bg-white text-slate-950 font-bold shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}>
                    <HiEye className="w-4 h-4" />
                    <span>Preview</span>
                  </button>
                  <button
                    onClick={() => toggleCardTab(item.id, "code")}
                    className={`text-xs px-3.5 py-1.5 rounded-lg font-baloo font-medium transition-all flex items-center space-x-1.5 cursor-pointer ${
                      currentTab === "code"
                        ? "bg-white text-slate-950 font-bold shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}>
                    <HiCode className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                </div>

                {/* Copies Count Badge */}
                <div className="flex items-center gap-2.5 text-xs font-baloo font-bold text-slate-700 bg-white pr-5 py-0.5 rounded-none border-none border-slate-200 shadow-xs">
                  

                  <MdOutlineFileDownloadDone className="w-6 h-5 text-slate-900 animate-pulse" />
                  <span>{item.copiesCount}</span>
                </div>
              </div>

              {/* Body Content Box */}
              <div className="p-3 min-h-35 max-h-55 bg-slate-50/50 flex items-center justify-center relative overflow-hidden border-b border-slate-200">
                {currentTab === "preview" ? (
                  <div className="w-full flex items-center justify-center relative z-10">
                    {item.component}
                  </div>
                ) : (
                  <pre className="w-full h-36 overflow-auto text-xs text-slate-200 bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-left relative z-10 shadow-inner scrollbar-thumb-slate-600 flex justify-start items-center">
                    <code>{item.code}</code>
                  </pre>
                )}
              </div>

              {/* Footer Action */}
              <div className="px-4 py-2 bg-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-slate-600 font-mono font-medium">
                    // production_ready
                  </span>
                  <span className="w-2 h-2 rounded-full bg-slate-900 animate-ping" />
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCopy(item.id, item.code)}
                  className={`px-4 py-2 rounded-md text-xs font-baloo font-bold transition-all cursor-pointer flex items-center space-x-2 shadow-sm ${
                    isCopied
                      ? "bg-emerald-600/60 text-white"
                      : "bg-slate-800/50 hover:bg-slate-800 text-white"
                  }`}>
                  {isCopied ? (
                    <>
                      <TbCopyCheckFilled className="w-4 h-4" />
                      <span>copied_success()</span>
                    </>
                  ) : (
                    <>
                      <TbCopyPlusFilled className="w-4 h-4" />
                      <span>copy_code()</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
