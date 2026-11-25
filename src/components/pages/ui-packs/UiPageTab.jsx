import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HiShoppingBag } from "react-icons/hi";

const getLKPrice = (priceStr) => {
  const numericValue =
    parseFloat(String(priceStr).replace(/[^0-9.]/g, "")) || 0;

  const exchangeRate = 305;

  return Math.round(numericValue * exchangeRate).toLocaleString();
};

const getStatusStyle = (status) => {
  const normalizedStatus = status?.toLowerCase() || "";

  if (normalizedStatus.includes("creating")) {
    return "bg-amber-50 text-amber-700 border-amber-200";
  }

  if (normalizedStatus.includes("developing")) {
    return "bg-blue-50 text-blue-700 border-blue-200";
  }

  if (normalizedStatus.includes("updating")) {
    return "bg-violet-50 text-violet-700 border-violet-200";
  }

  return "bg-slate-100 text-slate-600 border-slate-200";
};

export default function UiPacksTab({
  componentsData = [],
  categories = [],
  activeCategory = "All",
  setActiveCategory = () => {},
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="max-w-7xl mx-auto">
      {/* Category Filter */}
      {categories.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-200 pb-5">
          {categories.map((category) => (
            <motion.button
              key={category}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}>
              {category}
            </motion.button>
          ))}
        </div>
      )}

      {/* Registry Label */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <span className="font-mono text-[11px] text-slate-400">
          // production_grade_ui_packs
        </span>

        <span className="text-xs text-slate-400">
          {componentsData.length}{" "}
          {componentsData.length === 1 ? "pack" : "packs"} available
        </span>
      </div>

      {/* Empty State */}
      {componentsData.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 border border-slate-200 rounded-2xl">
          <p className="text-slate-500 text-sm">
            No UI Packs found in this category.
          </p>
        </div>
      ) : (
        /* UI Packs Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {componentsData.map((pack, index) => (
            <motion.article
              key={pack.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : (index % 2) * 0.08,
              }}
              className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
              {/* Pack Information */}
              <div>
                <div className="flex flex-wrap justify-between items-center gap-3">
                  <span className="text-[10px] font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200">
                    {pack.category}
                  </span>

                  {pack.sales && (
                    <span className="text-[10px] font-semibold text-blue-600">
                      {pack.sales}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-4">
                  {pack.title}
                </h3>

                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  {pack.description}
                </p>

                {pack.status && (
                  <span
                    className={`inline-flex items-center mt-5 px-3 py-1 rounded-full border text-[10px] font-semibold ${getStatusStyle(
                      pack.status,
                    )}`}>
                    {pack.status}
                  </span>
                )}
              </div>

              {/* Price and Actions */}
              <div className="mt-7 pt-5 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
                  {/* Price */}
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Pack Price
                    </p>

                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        {pack.price}
                      </span>

                      <span className="text-sm font-medium text-slate-400">
                        ≈ Rs. {getLKPrice(pack.price)}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {pack.demoUrl && (
                      <a
                        href={pack.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none text-center px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 transition-all duration-200">
                        Live Preview
                      </a>
                    )}

                    {pack.checkoutUrl && (
                      <a
                        href={pack.checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all duration-200">
                        <HiShoppingBag className="w-4 h-4" />
                        Buy Pack
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  );
}
