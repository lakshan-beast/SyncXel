import React from "react";
import DesignStylesShowcase from "./DesignsStylesShowcase";
import { HiShoppingBag } from "react-icons/hi";

const getLKPrice = (priceStr) => {
  const numericValue = parseFloat(priceStr.replace(/[^0-9.]/g, "")) || 0;
  const exchangeRate = 305;
  return Math.round(numericValue * exchangeRate).toLocaleString();
};

export default function UiPacksTab({
  title = "Syncxel UI Packs & Kits",
  componentsData = [],
  categories = [],
  activeCategory = "All",
  setActiveCategory = () => {},
}) {
  return (
    <div className="max-w-7xl mx-auto">
      <DesignStylesShowcase />
      <span className="font-mono text-slate-500/50 mb-1 block text-xs mt-5">
        // design_system_ui_packs_registry
      </span>
      {/* Categories Filter */}
      {categories.length > 1 && (
        <div className="flex flex-wrap justify-start items-start gap-2 mb-8 border-b-2 border-slate-200 pb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-white text-slate-950 shadow-md"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              }`}>
              {cat}
            </button>
          ))}
        </div>
      )}

      <span className="font-mono text-slate-500/50 mb-1 block text-xs">
        // section_registry: production_grade_ui_packs
      </span>

      {/* ඩේටා නැත්නම් පෙන්වන මැසේජ් එක */}
      {componentsData.length === 0 ? (
        <div className="text-center py-16 bg-slate-900 border border-slate-800 rounded-2xl">
          <p className="text-slate-400 text-sm">
            No items found in this category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {componentsData.map((pack) => (
            <div
              key={pack.id}
              className="bg-white border border-slate-100 rounded-2xl px-6 py-8 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              {/* Top Content */}
              <div>
                {/* Category Badge */}
                <span className="text-[10px] font-baloo font-semibold px-5 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200 inline-block">
                  {pack.category}
                </span>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight font-mono mt-2">
                  {pack.title}
                </h3>

                <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-tight font-baloo">
                  {pack.description}
                </p>
              </div>

              {/* Footer / Price & Actions */}
              <div className="mt-3 pt-3 border-t-2 border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-1">
                <span className="text-3xl sm:text-4xl font-bold text-slate-900 font-mono tracking-tight flex items-end">
                  {pack.price}/{" "}
                  <span className="text-slate-400 text-2xl font-medium font-baloo">
                    rs. {getLKPrice(pack.price)}
                  </span>
                </span>

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
