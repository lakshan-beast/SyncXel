import React from "react";
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
  componentsData = [], // 👈 මෙතනින් UI Packs හෝ Full Templates ඩේටා ඩිනමික් විදිහට ලෝඩ් වෙයි
}) {
  return (
    <div className="max-w-6xl mx-auto space-y-8 font-mono">
      {/* 1. Category Filter Pills (Footers/Authentication හෝ Full Template Suite මාරු කරන්න) */}
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 justify-start pt-2">
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

      <span className="font-mono text-slate-500/50 mb-3 block text-xs">
        // section_registry: enterprise_full_stack_kits
      </span>

      {/* 2. Items List / Cards Grid */}
      {componentsData.length === 0 ? (
        <div className="text-center py-16 bg-slate-900 border border-slate-800 rounded-3xl">
          <p className="text-slate-400 font-sans text-xs">
            No items found in this category.
          </p>
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
                      <img
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
                      <span className="text-xs font-baloo font-bold text-white bg-slate-900 px-5.5 py-1.5 rounded-full shadow-sm">
                        Pro • <span className="text-base">{item.price}</span>
                      </span>
                      {item.sales && (
                        <span className="text-xs font-baloo font-medium text-slate-700 bg-white/90 backdrop-blur-md border border-slate-200 px-5 py-1.5 rounded-full shadow-sm">
                          {item.sales}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Item Details & Actions */}
                  <div className="px-8 py-2 flex flex-col justify-between">
                    <div>
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-baloo px-4 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-slate-900 tracking-tight font-mono mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-500 leading-tight mb-3 font-baloo">
                        {item.description}
                      </p>

                      {/* Features checklist */}
                      <div className="space-y-1 px-3 mb-3 font-baloo">
                        <div className="flex items-center space-x-2.5 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0 animate-pulse"></span>
                          <span className="text-slate-500/70">
                            Production-ready responsive layout & clean code
                          </span>
                        </div>
                        <div className="flex items-center space-x-2.5 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0"></span>
                          <span className="text-slate-500/70">Tailwind CSS & Framer Motion integrated</span>
                        </div>
                        <div className="flex items-center space-x-2.5 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0"></span>
                          <span className="text-slate-500/70">
                            Instant delivery via Lemon Squeezy with setup guide
                          </span>
                        </div>
                      </div>

                      {/* Documentation Note Box (Light Theme Terminal Box) */}
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl mb-6 shadow-xs">
                        <div className="flex items-start space-x-2.5 text-xs text-slate-700">
                          <HiBookOpen className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-slate-900 block mb-0.5 font-mono">
                              // a_z_documentation_included:
                            </strong>
                            <span className="font-sans text-slate-600">
                              Complete setup guides for Firebase, Vercel &
                              GitHub. Visit{" "}
                              <a
                                href="/docs"
                                className="text-slate-900 underline font-bold">
                                syncxel.com/docs
                              </a>
                              .
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions & Price */}
                    <div className="space-y-4 pt-4 border-t border-slate-200">
                      {/* LKR Price conversion helper tag display */}
                      <div className="flex items-center justify-between text-xs font-mono text-slate-600 px-1">
                        <span>Estimated Local Rate:</span>
                        <span className="font-bold text-slate-900">
                          {item.price} /{" "}
                          <span className="font-baloo text-slate-500">rs.</span>{" "}
                          {Math.round(
                            (parseFloat(item.price.replace(/[^0-9.]/g, "")) ||
                              0) * 305,
                          ).toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center space-x-3">
                        {item.demoUrl && (
                          <a
                            href={item.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-mono font-medium flex items-center space-x-1.5 transition-all cursor-pointer border border-slate-200 shadow-xs">
                            <HiExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        )}
                        {item.checkoutUrl && (
                          <a
                            href={item.checkoutUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-mono font-bold flex items-center justify-center space-x-2 transition-all shadow-sm cursor-pointer">
                            <HiShoppingCart className="w-4 h-4" />
                            <span>Get Pack ({item.price})</span>
                          </a>
                        )}
                      </div>

                      {/* Telegram Customize Upsell */}
                      <a
                        href={item.itemTelegramLink || itemTelegramLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 rounded-xl text-xs font-mono font-medium flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-xs">
                        <HiChatAlt2 className="w-4 h-4 text-slate-900" />
                        <span>Customize "{item.title}" on Telegram 🚀</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
            // return (
            //   <div
            //     key={item.id}
            //     className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            //     <div className="grid grid-cols-1 lg:grid-cols-2">
            //       {/* Item Image Preview */}
            //       <div className="relative h-64 lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-950 flex items-center justify-center p-4">
            //         {item.previewImg ? (
            //           <img
            //             src={item.previewImg}
            //             alt={item.title}
            //             className="w-full h-full object-contain"
            //           />
            //         ) : (
            //           <div className="text-xs text-slate-600 font-sans">
            //             No Preview Available
            //           </div>
            //         )}

            //         <div className="absolute top-4 left-4 space-x-2 flex">
            //           <span className="text-xs font-bold text-slate-950 bg-white px-3 py-1 rounded-full shadow-md">
            //             Pro • {item.price}
            //           </span>
            //           {item.sales && (
            //             <span className="text-xs font-bold text-white bg-slate-900/90 border border-slate-800 px-3 py-1 rounded-full shadow-md">
            //               {item.sales}
            //             </span>
            //           )}
            //         </div>
            //       </div>

            //       {/* Item Details & Actions */}
            //       <div className="p-8 flex flex-col justify-between">
            //         <div>
            //           <div className="flex items-center justify-between mb-2">
            //             <span className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 font-semibold">
            //               {item.category}
            //             </span>
            //           </div>

            //           <h3 className="text-xl font-bold text-white mb-2">
            //             {item.title}
            //           </h3>

            //           <p className="text-xs text-slate-400 leading-relaxed mb-6 font-sans">
            //             {item.description}
            //           </p>

            //           {/* Features checklist */}
            //           <div className="space-y-2 mb-6 font-sans">
            //             <div className="flex items-center space-x-2 text-xs text-slate-300">
            //               <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            //               <span>
            //                 Production-ready responsive layout & clean code
            //               </span>
            //             </div>
            //             <div className="flex items-center space-x-2 text-xs text-slate-300">
            //               <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            //               <span>Tailwind CSS & Framer Motion integrated</span>
            //             </div>
            //             <div className="flex items-center space-x-2 text-xs text-slate-300">
            //               <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            //               <span>
            //                 Instant delivery via Lemon Squeezy with setup guide
            //               </span>
            //             </div>
            //           </div>

            //           {/* Documentation Note Box */}
            //           <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-2xl mb-6">
            //             <div className="flex items-start space-x-2 text-xs text-slate-300">
            //               <HiBookOpen className="w-4 h-4 text-white shrink-0 mt-0.5" />
            //               <div>
            //                 <strong className="text-white block mb-0.5">
            //                   A-Z Documentation Included:
            //                 </strong>
            //                 <span className="font-sans">
            //                   Complete setup guides for Firebase, Vercel &
            //                   GitHub. Visit{" "}
            //                   <a
            //                     href="/docs"
            //                     className="text-white underline font-semibold">
            //                     syncxel.com/docs
            //                   </a>
            //                   .
            //                 </span>
            //               </div>
            //             </div>
            //           </div>
            //         </div>

            //         {/* Actions */}
            //         <div className="space-y-3 pt-4 border-t border-slate-800">
            //           <div className="flex items-center space-x-3">
            //             {item.demoUrl && (
            //               <a
            //                 href={item.demoUrl}
            //                 target="_blank"
            //                 rel="noreferrer"
            //                 className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer border border-slate-700">
            //                 <HiExternalLink className="w-4 h-4" />
            //                 <span>Live Demo</span>
            //               </a>
            //             )}
            //             {item.checkoutUrl && (
            //               <a
            //                 href={item.checkoutUrl}
            //                 target="_blank"
            //                 rel="noreferrer"
            //                 className="flex-1 px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-950 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer">
            //                 <HiShoppingCart className="w-4 h-4" />
            //                 <span>Get Pack ({item.price})</span>
            //               </a>
            //             )}
            //           </div>

            //           {/* Telegram Customize Upsell */}
            //           <a
            //             href={item.itemTelegramLink || itemTelegramLink}
            //             target="_blank"
            //             rel="noreferrer"
            //             className="w-full py-2.5 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-200 hover:text-white rounded-xl text-xs font-medium flex items-center justify-center space-x-2 transition-all cursor-pointer">
            //             <HiChatAlt2 className="w-4 h-4 text-white" />
            //             <span>Customize "{item.title}" on Telegram 🚀</span>
            //           </a>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // );
          })}
        </div>
      )}
    </div>
  );
}
