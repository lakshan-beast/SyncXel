import React from "react";
import { motion } from "framer-motion";
import DesignStylesShowcase from "./DesignsStylesShowcase";
import { HiShoppingBag } from "react-icons/hi";

const getLKPrice = (priceStr) => {
  const numericValue = parseFloat(priceStr.replace(/[^0-9.]/g, "")) || 0;
  const exchangeRate = 305;
  return Math.round(numericValue * exchangeRate).toLocaleString();
};

export default function UiPacksTab({
  title = "SyncXel UI Packs & Kits",
  componentsData = [],
  categories = [],
  activeCategory = "All",
  setActiveCategory = () => {},
}) {
  return (
    <div className="max-w-7xl mx-auto">
      {/* <DesignStylesShowcase /> */}
      <span className="font-mono text-slate-500/50 mb-1 block text-xs mt-5">
        // design_system_ui_packs_registry
      </span>
      {/* Categories Filter */}
      {categories.length > 1 && (
        <div className="flex flex-wrap justify-start items-start gap-2 mb-8 border-b-2 border-slate-200 pb-5">
          {categories.map((cat) => (
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-md text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-slate-800 text-white border-slate-600 shadow-md"
                  : "bg-slate-200/40 text-slate-600 border-slate-300/50 hover:text-white hover:bg-slate-700/30"
              }`}>
              {cat}
            </motion.button>
          ))}
        </div>
      )}

      <span className="font-mono text-slate-500/50 mb-1 block text-xs">
        // section_registry: production_grade_ui_packs
      </span>

      {componentsData.length === 0 ? (
        <div className="text-center py-16 bg-slate-900 border border-slate-800 rounded-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-slate-400 text-sm">
            No items found in this category.
          </motion.p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
          {componentsData.map((pack) => (
            <div
              key={pack.id}
              className="bg-white border border-slate-100 rounded-2xl px-9 py-8 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              {/* Top Content */}
              <div>
                {/* Category Badge */}
                <div className="flex justify-between items-center">
                  <motion.span
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[10px] font-baloo font-semibold px-5 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200 inline-block">
                    {pack.category}
                  </motion.span>

                  <span className="relative top-0 right-0">{pack.status}</span>
                </div>

                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-xl font-bold text-slate-900 tracking-tight font-mono mt-2">
                  {pack.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="text-slate-500/80 text-xs sm:text-sm mt-1 leading-tight font-baloo">
                  {pack.description}
                </motion.p>
              </div>

              {/* Footer / Price & Actions */}
              <div className="mt-3 pt-3 border-t-2 border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-1">
                <motion.span
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="text-3xl sm:text-4xl font-bold text-slate-900 font-mono tracking-tight flex items-end">
                  {pack.price}/{" "}
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-slate-400 text-2xl font-medium font-baloo">
                    rs. {getLKPrice(pack.price)}
                  </motion.span>
                </motion.span>

                <div className="flex items-center gap-2 ">
                  {pack.demoUrl && (
                    <a
                      href={pack.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-baloo font-medium rounded-xl border border-slate-200 transition shadow-xs">
                      Live Preview
                    </a>
                  )}
                  {pack.checkoutUrl && (
                    <a
                      href={pack.checkoutUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-baloo font-bold rounded-xl transition shadow-xs flex gap-2 items-center">
                      <HiShoppingBag className="w-3.5 h-3.5" />
                      Buy Pack
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
