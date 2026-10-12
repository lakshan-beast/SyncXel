import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiBookOpen,
  HiExternalLink,
  HiShoppingCart,
  HiChatAlt2,
} from "react-icons/hi";

export default function TemplateComponentsTab({
  categories = [],
  activeCategory = "All",
  setActiveCategory = () => {},
  componentsData = [],
}) {
  return (
    <div className="max-w-7xl mx-auto space-y-8 font-mono">
      <span className="font-mono text-slate-500/50 mb-1 block text-xs">
        // design_system_ui_packs_registry
      </span>
      {/* 1. Category Filter Pills (Footers/Authentication හෝ Full Template Suite) */}
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 justify-start">
          {categories.map((cat) => (
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-md text-xs font-baloo font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-slate-800 text-white border-slate-600 shadow-md"
                  : "bg-slate-200/40 text-slate-600 border-slate-300/50 hover:text-white hover:bg-slate-700/30"
              }`}>
              {cat}
            </motion.button>
          ))}
        </div>
      )}

      <span className="font-mono text-slate-500/50 mb-3 block text-xs">
        // section_registry: enterprise_full_stack_kits
      </span>

      {/* 2. Items List / Cards Grid */}
      {componentsData.length === 0 ? (
        <div className="text-center py-16 bg-slate-900 border border-slate-800 rounded-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-slate-400 font-sans text-xs">
            No items found in this category.
          </motion.p>
        </div>
      ) : (
        <div className="space-y-6">
          {componentsData.map((item) => {
            const itemTelegramLink = `https://t.me/lakshan_dev?text=${encodeURIComponent(
              `Hi, I want to customize the "${item.title}" for my project. Let's discuss!`,
            )}`;

            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:border-slate-300 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Item Image Preview (Light Theme) */}
                  <div className="relative h-64 lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50 flex items-center justify-center p-6">
                    {item.previewImg ? (
                      <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src={item.previewImg}
                        alt={item.title}
                        className="w-full h-full object-contain rounded-xl shadow-xs"
                      />
                    ) : (
                      <div className="text-xs text-slate-400 font-mono">
                        // no_preview_available
                      </div>
                    )}

                    {/* Floating Badges on Image */}
                    <div className="absolute top-4 left-4 space-x-1 flex items-center">
                      <motion.span
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-xs font-baloo font-bold text-white bg-slate-900 px-5.5 py-1.5 rounded-full shadow-sm">
                        Pro <span className="ml-2">•</span>{" "}
                        <span className="text-base ml-2">{item.price}</span>
                      </motion.span>
                      {item.sales && (
                        <motion.span
                          initial={{ opacity: 0, x: -25 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="text-xs font-baloo font-medium text-slate-700 bg-white/90 backdrop-blur-md border border-slate-200 px-5 py-1.5 rounded-full shadow-sm">
                          {item.sales}
                        </motion.span>
                      )}
                    </div>
                  </div>

                  {/* Item Details & Actions */}
                  <div className="px-4 lg:px-8 py-2 flex flex-col justify-between">
                    <div>
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-1">
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          className="text-[10px] font-baloo px-4 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                          {item.category}
                        </motion.span>
                      </div>

                      <motion.h3
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl font-black text-slate-900 tracking-tight font-mono mb-2">
                        {item.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
                        className="text-xs sm:text-sm text-slate-500 leading-tight mb-3 font-baloo">
                        {item.description}
                      </motion.p>

                      {/* Features checklist */}
                      <div className="space-y-1 px-3 mb-3 font-baloo">
                        <motion.div
                          initial={{ opacity: 0.3, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                          className="flex items-center space-x-2.5 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0 animate-pulse"></span>
                          <span className="text-slate-500/70">
                            Production-ready responsive layout & clean code
                          </span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0.3, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.2,
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                          className="flex items-center space-x-2.5 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0"></span>
                          <span className="text-slate-500/70">
                            Tailwind CSS & Framer Motion integrated
                          </span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0.3, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.4,
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                          className="flex items-center space-x-2.5 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0"></span>
                          <span className="text-slate-500/70">
                            Instant delivery via Lemon Squeezy with setup guide
                          </span>
                        </motion.div>
                      </div>

                      {/* Documentation Note Box (Light Theme Terminal Box) */}
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl mb-6 shadow-xs">
                        <div className="flex items-start space-x-2.5 text-xs text-slate-700">
                          <HiBookOpen className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-slate-700 block mb-0.5 font-mono">
                              a_z_documentation_included:
                            </strong>
                            <span className="font-baloo text-slate-600">
                              Complete setup guides for Firebase, Vercel &
                              GitHub. Visit{" "}
                              <Link
                                to="/docs"
                                className="text-slate-900 underline font-bold">
                                syncxel.com/docs
                              </Link>
                              .
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions & Price */}
                    <div className="space-y-2 pt-4 border-t border-slate-200">
                      {/* LKR Price conversion helper tag display */}
                      <div className="flex items-center justify-between text-xs font-baloo text-slate-600 px-1">
                        <span>Estimated Local Rate:</span>
                        <motion.span
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          className="font-bold text-slate-900 text-base md:text-3xl">
                          {item.price} /{" "}
                          <span className="font-baloo text-slate-500 text-base md:text-xl">
                            rs.
                            {Math.round(
                              (parseFloat(item.price.replace(/[^0-9.]/g, "")) ||
                                0) * 305,
                            ).toLocaleString()}
                          </span>
                        </motion.span>
                      </div>

                      <div className="flex items-center space-x-3">
                        {item.demoUrl && (
                          <motion.a
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            href={item.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-baloo font-medium flex items-center space-x-1.5 transition-all cursor-pointer border border-slate-200 shadow-xs">
                            <HiExternalLink className="w-5 h-5" />
                            <span>Live Demo</span>
                          </motion.a>
                        )}
                        {item.checkoutUrl && (
                          <motion.a
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            href={item.checkoutUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-exo font-bold flex items-center justify-center space-x-2 transition-all shadow-sm cursor-pointer">
                            <HiShoppingCart className="w-4 h-4" />
                            <span className="py-0">
                              Get Pack{" "}
                              <span className="text-2xl ml-3">
                                {item.price}
                              </span>
                            </span>
                          </motion.a>
                        )}
                      </div>

                      {/* Telegram Customize Upsell */}
                      <motion.a
                        initial={{ opacity: 0.3, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        href={item.itemTelegramLink || itemTelegramLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 rounded-xl text-xs font-baloo font-medium flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-xs">
                        <HiChatAlt2 className="w-6 h-7 text-slate-900" />
                        <span>Customize "{item.title}" on Telegram</span>
                      </motion.a>
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
