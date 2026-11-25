import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

export default function LegalTabs({
  tabList,
  activeTab,
  setActiveTab,
  activeTabObj,
  isMobileTabOpen,
  setIsMobileTabOpen,
  itemVariants,
}) {
  const ActiveIcon = activeTabObj?.icon;

  return (
    <>
      {/* DESKTOP TABS */}
      {tabList && tabList.length > 0 && (
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          className="hidden md:flex flex-wrap gap-2">
          <div className="bg-white border-none border-slate-100 rounded-3xl p-3 flex lg:flex-row gap-2 scrollbar-thumb-slate-300 overflow-x-auto">
            {tabList.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-slate-950 text-white border border-slate-950 shadow-md scale-105"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200/60 bg-white"
                  }`}>
                  {Icon && <Icon className="w-4 h-4 shrink-0" />}
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* MOBILE FLOATING SELECTOR */}
      <div className="fixed bottom-4 left-4 z-40 md:hidden">
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileTabOpen(true)}
          className="px-5 py-5 bg-slate-950/95 backdrop-blur-md border border-slate-700 rounded-4xl text-xs font-bold font-baloo text-slate-200 flex items-center space-x-3 shadow-2xl cursor-pointer">
          <span className="w-3 h-3 mr-3 rounded-full bg-emerald-400 animate-ping" />

          <span className="flex items-center space-x-3">
            <span className="text-slate-400">Section : </span>

            <strong className="text-white max-w-32 truncate flex items-center gap-1.5">
              {ActiveIcon && (
                <ActiveIcon className="w-3.5 h-3.5 text-slate-400" />
              )}
              {activeTabObj?.label}
            </strong>
          </span>
        </motion.button>
      </div>

      {/* MOBILE BOTTOM SHEET */}
      <AnimatePresence>
        {isMobileTabOpen && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-slate-500/80 backdrop-blur-sm md:hidden p-4 pb-6"
            onClick={() => setIsMobileTabOpen(false)}>
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-md max-h-[70vh] bg-slate-950 border border-slate-800 rounded-3xl p-5 overflow-y-auto space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                  select legal section
                </h3>

                <button
                  onClick={() => setIsMobileTabOpen(false)}
                  className="p-2 text-slate-300 hover:text-white rounded-xl bg-slate-800 border border-slate-700 cursor-pointer"
                  aria-label="Close legal section selector">
                  <HiX className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-2 pt-1">
                {tabList.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsMobileTabOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-2xl text-xs font-bold font-baloo transition-all border flex items-center gap-3 cursor-pointer ${
                        isActive
                          ? "bg-slate-300 text-slate-950 border-slate-200 shadow-md"
                          : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"
                      }`}>
                      {Icon && <Icon className="w-4 h-4" />}
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
