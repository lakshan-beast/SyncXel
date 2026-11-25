import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import {
  HiBookOpen,
  HiExternalLink,
  HiShoppingCart,
  HiChatAlt2,
} from "react-icons/hi";

const getLKPrice = (priceStr) => {
  const numericValue =
    parseFloat(String(priceStr).replace(/[^0-9.]/g, "")) || 0;

  const exchangeRate = 305;

  return Math.round(numericValue * exchangeRate).toLocaleString();
};

export default function TemplateComponentsTab({
  categories = [],
  activeCategory = "All",
  setActiveCategory = () => {},
  componentsData = [],
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Category Filter */}
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 justify-start border-b border-slate-200 pb-5">
          {categories.map((category) => (
            <motion.button
              key={category}
              initial={shouldReduceMotion ? false : { scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                activeCategory === category
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-slate-100/70 text-slate-600 border-slate-200 hover:bg-slate-200 hover:text-slate-900"
              }`}>
              {category}
            </motion.button>
          ))}
        </div>
      )}

      {/* Registry Label */}
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] text-slate-400">
          // enterprise_full_stack_templates
        </span>

        <span className="text-xs text-slate-400">
          {componentsData.length}{" "}
          {componentsData.length === 1 ? "template" : "templates"} available
        </span>
      </div>

      {/* Templates List */}
      {componentsData.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 border border-slate-200 rounded-3xl">
          <p className="text-slate-500 text-sm">
            More Templates Coming Soon...
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {componentsData.map((item, index) => {
            const itemTelegramLink = `https://t.me/lakshan_dev?text=${encodeURIComponent(
              `Hi, I want to customize the "${item.title}" for my project. Let's discuss!`,
            )}`;

            return (
              <motion.article
                key={item.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Template Image Preview */}
                  <div className="relative min-h-64 lg:min-h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50 flex items-center justify-center p-6 sm:p-8">
                    {item.previewImg ? (
                      <motion.img
                        initial={shouldReduceMotion ? false : { opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        src={item.previewImg}
                        alt={`${item.title} preview`}
                        loading="lazy"
                        className="w-full h-full max-h-[520px] object-contain rounded-xl shadow-sm"
                      />
                    ) : (
                      <div className="text-xs text-slate-400 font-mono">
                        // no_preview_available
                      </div>
                    )}

                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-white bg-slate-900 px-4 py-2 rounded-full shadow-sm">
                        Pro <span className="mx-1.5">•</span>
                        <span className="text-sm">{item.price}</span>
                      </span>

                      {item.sales && (
                        <span className="text-xs font-semibold text-slate-700 bg-white/95 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-full shadow-sm">
                          {item.sales}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Template Details */}
                  <div className="p-5 sm:p-7 lg:p-8 flex flex-col justify-between">
                    <div>
                      {/* Category */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] px-4 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                          {item.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 px-1 mb-5">
                        <div className="flex items-start gap-3 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 mt-1 rounded-full bg-slate-900 shrink-0" />
                          <span>
                            Production-ready responsive layout & clean code
                          </span>
                        </div>

                        <div className="flex items-start gap-3 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 mt-1 rounded-full bg-slate-900 shrink-0" />
                          <span>Tailwind CSS & Framer Motion integrated</span>
                        </div>

                        <div className="flex items-start gap-3 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 mt-1 rounded-full bg-slate-900 shrink-0" />
                          <span>
                            Instant delivery via Lemon Squeezy with setup guide
                          </span>
                        </div>
                      </div>

                      {/* Documentation Note */}
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl mb-6">
                        <div className="flex items-start gap-3 text-xs text-slate-700">
                          <HiBookOpen className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />

                          <div>
                            <strong className="text-slate-800 block mb-1 font-mono">
                              documentation_included:
                            </strong>

                            <span className="text-slate-600 leading-relaxed">
                              Complete setup guides for Firebase, Vercel &
                              GitHub. Visit{" "}
                              <Link
                                to="/docs"
                                className="text-slate-900 underline font-bold">
                                SyncXel Docs
                              </Link>
                              .
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Price & Actions */}
                    <div className="space-y-3 pt-5 border-t border-slate-200">
                      {/* Price */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
                        <span className="text-xs text-slate-500">
                          Estimated Local Rate
                        </span>

                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl sm:text-3xl font-bold text-slate-900">
                            {item.price}
                          </span>

                          <span className="text-sm sm:text-base font-medium text-slate-500">
                            / Rs. {getLKPrice(item.price)}
                          </span>
                        </div>
                      </div>

                      {/* Demo & Purchase */}
                      <div className="flex flex-col sm:flex-row items-stretch gap-3">
                        {item.demoUrl && (
                          <motion.a
                            whileTap={
                              shouldReduceMotion ? undefined : { scale: 0.97 }
                            }
                            href={item.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all border border-slate-200">
                            <HiExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </motion.a>
                        )}

                        {item.checkoutUrl && (
                          <motion.a
                            whileTap={
                              shouldReduceMotion ? undefined : { scale: 0.97 }
                            }
                            href={item.checkoutUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm">
                            <HiShoppingCart className="w-4 h-4" />
                            <span>Get Template</span>
                            <span className="text-base ml-1">{item.price}</span>
                          </motion.a>
                        )}
                      </div>

                      {/* Telegram Customization */}
                      <motion.a
                        whileTap={
                          shouldReduceMotion ? undefined : { scale: 0.98 }
                        }
                        href={item.itemTelegramLink || itemTelegramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all">
                        <HiChatAlt2 className="w-5 h-5 text-slate-900" />
                        <span>Customize "{item.title}" on Telegram</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      )}
    </div>
  );
}
