// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import { HiEye, HiCode, HiX, HiChevronDown, HiChevronUp } from "react-icons/hi";

// import { TbCopyCheckFilled, TbCopyPlusFilled } from "react-icons/tb";

// import { MdOutlineTipsAndUpdates } from "react-icons/md";

// export default function FreeComponentsTab({
//   categories,
//   activeCategory,
//   setActiveCategory,
//   filteredFreeComponents,
//   cardTabs,
//   toggleCardTab,
//   copiedId,
//   handleCopy,
// }) {
//   const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
//   const [expandedCardId, setExpandedCardId] = useState(null);

//   const toggleShowcase = (id) => {
//     setExpandedCardId((currentId) => (currentId === id ? null : id));
//   };

//   return (
//     <div className="font-baloo">
//       {/* DESKTOP CATEGORY FILTERS */}
//       <div className="mb-8 hidden md:block">
//         <span className="mb-3 block font-mono text-xs text-slate-400 dark:text-slate-500">
//           // modular_taxonomy_category_filters
//         </span>

//         <div className="flex flex-wrap gap-2">
//           {categories.map((cat) => (
//             <motion.button
//               key={cat}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => {
//                 setActiveCategory(cat);
//                 setExpandedCardId(null);
//               }}
//               className={`rounded-xl border px-5 py-2.5 text-xs font-bold transition-all ${
//                 activeCategory === cat
//                   ? "border-slate-900 bg-slate-900 text-white shadow-sm dark:border-blue-500 dark:bg-blue-600"
//                   : "border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
//               }`}>
//               {cat}
//             </motion.button>
//           ))}
//         </div>
//       </div>

//       {/* MOBILE CATEGORY BUTTON */}
//       <div className="fixed bottom-4 left-4 z-40 md:hidden">
//         <motion.button
//           whileTap={{ scale: 0.95 }}
//           onClick={() => setIsMobileCategoryOpen(true)}
//           className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-xs font-bold text-white shadow-xl">
//           <span className="relative flex h-2.5 w-2.5">
//             <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
//             <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
//           </span>

//           <span className="text-slate-400">Category:</span>
//           <span className="max-w-32 truncate">{activeCategory}</span>
//           <HiChevronUp className="h-4 w-4" />
//         </motion.button>
//       </div>

//       {/* MOBILE CATEGORY BOTTOM SHEET */}
//       <AnimatePresence>
//         {isMobileCategoryOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/60 p-4 pb-6 backdrop-blur-sm md:hidden"
//             onClick={() => setIsMobileCategoryOpen(false)}>
//             <motion.div
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               onClick={(e) => e.stopPropagation()}
//               className="max-h-[70vh] w-full max-w-md space-y-4 overflow-y-auto rounded-3xl border border-slate-800 bg-slate-950 p-5 shadow-2xl">
//               <div className="flex items-center justify-between border-b border-slate-800 pb-3">
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-wider text-white">
//                     Select Category
//                   </p>
//                   <p className="mt-1 text-[10px] text-slate-500">
//                     Browse the component library
//                   </p>
//                 </div>

//                 <button
//                   onClick={() => setIsMobileCategoryOpen(false)}
//                   aria-label="Close categories"
//                   className="rounded-xl border border-slate-700 bg-slate-900 p-2 text-slate-300 hover:text-white">
//                   <HiX className="h-5 w-5" />
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 gap-2">
//                 {categories.map((cat) => (
//                   <button
//                     key={cat}
//                     onClick={() => {
//                       setActiveCategory(cat);
//                       setExpandedCardId(null);
//                       setIsMobileCategoryOpen(false);
//                     }}
//                     className={`w-full rounded-xl border px-4 py-3 text-left text-xs font-bold transition-all ${
//                       activeCategory === cat
//                         ? "border-blue-500 bg-blue-600 text-white"
//                         : "border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800"
//                     }`}>
//                     {cat}
//                   </button>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* COMPONENT REGISTRY LABEL */}
//       <div className="mb-5 flex items-center justify-between">
//         <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
//           // section_registry: freemium_modular_snippets
//         </span>

//         <span className="text-xs text-slate-400 dark:text-slate-500">
//           {filteredFreeComponents.length} Components
//         </span>
//       </div>

//       {/* COMPONENT CARDS GRID */}
//       <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2 lg:gap-y-7">
//         {filteredFreeComponents.map((item, index) => {
//           const currentTab = cardTabs[item.id] || "preview";
//           const isCopied = copiedId === item.id;
//           const isExpanded = expandedCardId === item.id;

//           return (
//             <motion.article
//               key={item.id}
//               layout
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.04 }}
//               className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
//               {/* CARD HEADER */}
//               <div className="space-y-3 p-5">
//                 <div className="flex items-start justify-between gap-3">
//                   <div className="min-w-0 space-y-2">
//                     <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
//                       {item.category}
//                     </span>

//                     <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
//                       {item.title}
//                     </h3>
//                   </div>

//                   <span className="shrink-0 rounded-full bg-slate-900 px-4 py-1 text-[10px] font-bold text-white dark:bg-blue-600">
//                     FREE
//                   </span>
//                 </div>

//                 <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
//                   {item.description}
//                 </p>

//                 {/* SHOWCASE TOGGLE */}
//                 <button
//                   type="button"
//                   aria-expanded={isExpanded}
//                   onClick={() => toggleShowcase(item.id)}
//                   className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-xs font-bold transition-all ${
//                     isExpanded
//                       ? "border-slate-900 bg-slate-900 text-white dark:border-blue-500 dark:bg-blue-600"
//                       : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
//                   }`}>
//                   <span className="flex items-center gap-2">
//                     <HiEye className="h-4 w-4" />
//                     {isExpanded ? "Close Showcase" : "View Showcase"}
//                   </span>

//                   {isExpanded ? (
//                     <HiChevronUp className="h-4 w-4" />
//                   ) : (
//                     <HiChevronDown className="h-4 w-4" />
//                   )}
//                 </button>
//               </div>

//               {/* EXPANDABLE SHOWCASE */}
//               <AnimatePresence initial={false}>
//                 {isExpanded && (
//                   <motion.div
//                     key="showcase"
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="overflow-hidden">
//                     <div className="border-t border-slate-200 dark:border-slate-800">
//                       {/* IDEAL USE CASES */}
//                       {item.useCases?.length > 0 && (
//                         <div className="mx-4 mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
//                           <div className="mb-3 flex items-center gap-2 border-b border-slate-200 pb-2 text-xs font-bold text-slate-800 dark:border-slate-700 dark:text-white">
//                             <MdOutlineTipsAndUpdates className="h-4 w-4 text-blue-500" />
//                             Ideal Use Cases
//                           </div>

//                           <ul className="space-y-2">
//                             {item.useCases.map((useCase, idx) => (
//                               <li
//                                 key={idx}
//                                 className="flex items-start gap-2 text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
//                                 <span className="font-bold text-blue-500">
//                                   ▸
//                                 </span>
//                                 <span>{useCase}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}

//                       {/* PREVIEW / CODE TABS */}
//                       <div className="mt-4 flex items-center justify-between border-y border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900">
//                         <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1 dark:border-slate-700 dark:bg-slate-800">
//                           <button
//                             type="button"
//                             onClick={() => toggleCardTab(item.id, "preview")}
//                             className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
//                               currentTab === "preview"
//                                 ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
//                                 : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
//                             }`}>
//                             <HiEye className="h-4 w-4" />
//                             Preview
//                           </button>

//                           <button
//                             type="button"
//                             onClick={() => {
//                               if (window.innerWidth < 768) return;
//                               toggleCardTab(item.id, "code");
//                             }}
//                             disabled={
//                               typeof window !== "undefined" &&
//                               window.innerWidth < 768
//                             }
//                             title="Code view available on desktop"
//                             className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
//                               currentTab === "code"
//                                 ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
//                                 : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
//                             } disabled:cursor-not-allowed disabled:opacity-40`}>
//                             <HiCode className="h-4 w-4" />
//                             Code
//                             <span className="text-[9px] md:hidden">
//                               (Desktop)
//                             </span>
//                           </button>
//                         </div>
//                       </div>

//                       {/* SHOWCASE CONTENT */}
//                       <div className="flex min-h-60 max-h-96 items-center justify-center overflow-auto border-b border-slate-200 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-950/50">
//                         <AnimatePresence mode="wait">
//                           {currentTab === "preview" ? (
//                             <motion.div
//                               key="preview"
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               exit={{ opacity: 0, y: -10 }}
//                               transition={{ duration: 0.2 }}
//                               className="relative z-10 flex w-full items-center justify-center">
//                               {item.component}
//                             </motion.div>
//                           ) : (
//                             <motion.pre
//                               key="code"
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               exit={{ opacity: 0, y: -10 }}
//                               transition={{ duration: 0.2 }}
//                               className="h-60 w-full overflow-auto rounded-xl border border-slate-800 bg-slate-950 p-4 text-left font-mono text-xs leading-relaxed text-slate-200 shadow-inner">
//                               <code>{item.code}</code>
//                             </motion.pre>
//                           )}
//                         </AnimatePresence>
//                       </div>

//                       {/* SHOWCASE FOOTER */}
//                       <div className="flex items-center justify-between gap-3 bg-white px-4 py-3 dark:bg-slate-900">
//                         <div className="flex items-center gap-2">
//                           <span className="h-2 w-2 rounded-full bg-emerald-500" />
//                           <span className="font-mono text-[10px] text-slate-400">
//                             // production_ready
//                           </span>
//                         </div>

//                         <button
//                           type="button"
//                           onClick={() => handleCopy(item.id, item.code)}
//                           className={`hidden items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all sm:flex ${
//                             isCopied
//                               ? "bg-emerald-600 text-white"
//                               : "bg-slate-900 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
//                           }`}>
//                           {isCopied ? (
//                             <>
//                               <TbCopyCheckFilled className="h-4 w-4" />
//                               <span>Copied Code</span>
//                             </>
//                           ) : (
//                             <>
//                               <TbCopyPlusFilled className="h-4 w-4" />
//                               <span>Copy Code</span>
//                             </>
//                           )}
//                         </button>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.article>
//           );
//         })}
//       </div>

//       {/* EMPTY STATE */}
//       {filteredFreeComponents.length === 0 && (
//         <div className="rounded-2xl border border-dashed border-slate-300 px-5 py-16 text-center dark:border-slate-700">
//           <HiCode className="mx-auto mb-3 h-8 w-8 text-slate-400" />
//           <h3 className="text-sm font-bold text-slate-800 dark:text-white">
//             No Components Found
//           </h3>
//           <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
//             Try selecting another category.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import { HiEye, HiCode, HiX, HiChevronDown, HiChevronUp } from "react-icons/hi";

// import { TbCopyCheckFilled, TbCopyPlusFilled } from "react-icons/tb";

// import { MdOutlineTipsAndUpdates } from "react-icons/md";

// export default function FreeComponentsTab({
//   categories,
//   activeCategory,
//   setActiveCategory,
//   filteredFreeComponents,
//   cardTabs,
//   toggleCardTab,
//   copiedId,
//   handleCopy,
// }) {
//   const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);

//   const [expandedIdeaId, setExpandedIdeaId] = useState(null);
//   const [expandedShowcaseId, setExpandedShowcaseId] = useState(null);

//   const toggleIdea = (id) => {
//     setExpandedIdeaId((currentId) => (currentId === id ? null : id));
//   };

//   const toggleShowcase = (id) => {
//     setExpandedShowcaseId((currentId) => (currentId === id ? null : id));
//   };

//   const handleCategorySelect = (category) => {
//     setActiveCategory(category);
//     setIsMobileCategoryOpen(false);
//   };

//   return (
//     <div className="w-full">
//       {/* Section Header */}
//       <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
//         <div>
//           <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
//             Explore the library
//           </p>

//           <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
//             Free Components
//           </h2>

//           <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
//             Explore reusable components, discover their use cases, and preview
//             or copy the code whenever you need it.
//           </p>
//         </div>

//         <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
//           {filteredFreeComponents.length} components on this page
//         </span>
//       </div>

//       {/* Desktop Category Navigation */}
//       <div className="mb-8 hidden flex-wrap gap-2 md:flex">
//         {categories.map((category) => (
//           <button
//             key={category}
//             type="button"
//             onClick={() => handleCategorySelect(category)}
//             className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
//               activeCategory === category
//                 ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
//                 : "border border-slate-200 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
//             }`}>
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Mobile Category Selector */}
//       <div className="mb-6 md:hidden">
//         <button
//           type="button"
//           onClick={() => setIsMobileCategoryOpen((prev) => !prev)}
//           className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-800 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-white">
//           <span>{activeCategory}</span>

//           <HiChevronDown
//             className={`text-lg transition-transform ${
//               isMobileCategoryOpen ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//         <AnimatePresence>
//           {isMobileCategoryOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -8, height: 0 }}
//               animate={{ opacity: 1, y: 0, height: "auto" }}
//               exit={{ opacity: 0, y: -8, height: 0 }}
//               transition={{ duration: 0.2 }}
//               className="mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-900">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   type="button"
//                   onClick={() => handleCategorySelect(category)}
//                   className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
//                     activeCategory === category
//                       ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
//                       : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
//                   }`}>
//                   {category}
//                 </button>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Components Grid */}
//       {filteredFreeComponents.length > 0 ? (
//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//           {filteredFreeComponents.map((item, index) => {
//             const isIdeaOpen = expandedIdeaId === item.id;
//             const isShowcaseOpen = expandedShowcaseId === item.id;

//             const activeTab = cardTabs[item.id] || "preview";

//             return (
//               <motion.article
//                 key={item.id}
//                 initial={{ opacity: 0, y: 18 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.35,
//                   delay: index * 0.04,
//                 }}
//                 className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
//                 {/* Card Content */}
//                 <div className="p-5 sm:p-6">
//                   <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
//                     <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
//                       {item.category}
//                     </span>

//                     <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
//                       FREE
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-bold text-slate-900 dark:text-white">
//                     {item.title}
//                   </h3>

//                   <p className="mt-2 text-sm leading-tight text-slate-600 dark:text-slate-400">
//                     {item.description}
//                   </p>

//                   {/* Independent Controls */}
//                   <div className="mt-6 flex flex-wrap gap-3">
//                     <button
//                       type="button"
//                       onClick={() => toggleIdea(item.id)}
//                       aria-expanded={isIdeaOpen}
//                       className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
//                         isIdeaOpen
//                           ? "bg-blue-600 text-white"
//                           : "border border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
//                       }`}>
//                       <MdOutlineTipsAndUpdates className="text-base" />
//                       {isIdeaOpen ? "Hide Details" : "Idea & Use Cases"}
//                       {isIdeaOpen ? <HiChevronUp /> : <HiChevronDown />}
//                     </button>

//                     <button
//                       type="button"
//                       onClick={() => toggleShowcase(item.id)}
//                       aria-expanded={isShowcaseOpen}
//                       className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
//                         isShowcaseOpen
//                           ? "bg-blue-600 text-white"
//                           : "border border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
//                       }`}>
//                       <HiEye className="text-base" />
//                       {isShowcaseOpen ? "Close Showcase" : "View Showcase"}
//                       {isShowcaseOpen ? <HiChevronUp /> : <HiChevronDown />}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Idea & Use Cases */}
//                 <AnimatePresence initial={false}>
//                   {isIdeaOpen && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="overflow-hidden">
//                       <div className="border-t border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/50 sm:p-6">
//                         <div className="flex items-center gap-2">
//                           <MdOutlineTipsAndUpdates className="text-lg text-blue-600 dark:text-blue-400" />

//                           <h4 className="font-bold text-slate-900 dark:text-white">
//                             Idea & Use Cases
//                           </h4>
//                         </div>

//                         {item.idea && (
//                           <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
//                             {item.idea}
//                           </p>
//                         )}

//                         {item.useCases?.length > 0 && (
//                           <ul className="mt-4 space-y-2">
//                             {item.useCases.map((useCase, caseIndex) => (
//                               <li
//                                 key={caseIndex}
//                                 className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
//                                 <span className="mt-1 text-blue-600 dark:text-blue-400">
//                                   •
//                                 </span>
//                                 <span>{useCase}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         )}

//                         {!item.idea && !item.useCases?.length && (
//                           <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
//                             More details coming soon.
//                           </p>
//                         )}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 {/* Independent Showcase */}
//                 <AnimatePresence initial={false}>
//                   {isShowcaseOpen && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="overflow-hidden">
//                       <div className="border-t border-slate-200 dark:border-slate-800">
//                         {/* Showcase Tabs */}
//                         <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3 dark:border-slate-800 dark:bg-slate-950/50 sm:px-6">
//                           <div className="flex items-center gap-2">
//                             <button
//                               type="button"
//                               onClick={() => toggleCardTab(item.id, "preview")}
//                               className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${
//                                 activeTab === "preview"
//                                   ? "bg-blue-600 text-white"
//                                   : "text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
//                               }`}>
//                               <HiEye />
//                               Preview
//                             </button>

//                             <button
//                               type="button"
//                               onClick={() => toggleCardTab(item.id, "code")}
//                               className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${
//                                 activeTab === "code"
//                                   ? "bg-blue-600 text-white"
//                                   : "text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
//                               }`}>
//                               <HiCode />
//                               Code
//                             </button>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => toggleShowcase(item.id)}
//                             aria-label="Close showcase"
//                             className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white">
//                             <HiX className="text-lg" />
//                           </button>
//                         </div>

//                         {/* Preview / Code Content */}
//                         <div className="p-5 sm:p-6">
//                           {activeTab === "preview" ? (
//                             <div className="flex min-h-[180px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
//                               {item.component}
//                             </div>
//                           ) : (
//                             <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
//                               <pre className="max-h-[420px] overflow-auto p-4 text-xs leading-6 text-slate-200 sm:text-sm">
//                                 <code>
//                                   {item.code || "// Code coming soon"}
//                                 </code>
//                               </pre>
//                             </div>
//                           )}

//                           {/* Copy Code */}
//                           {item.code && (
//                             <div className="mt-4 flex justify-end">
//                               <button
//                                 type="button"
//                                 onClick={() => handleCopy(item.id, item.code)}
//                                 className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
//                                   copiedId === item.id
//                                     ? "bg-emerald-600 text-white"
//                                     : "bg-blue-600 text-white hover:bg-blue-700"
//                                 }`}>
//                                 {copiedId === item.id ? (
//                                   <>
//                                     <TbCopyCheckFilled className="text-base" />
//                                     Copied!
//                                   </>
//                                 ) : (
//                                   <>
//                                     <TbCopyPlusFilled className="text-base" />
//                                     Copy Code
//                                   </>
//                                 )}
//                               </button>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.article>
//             );
//           })}
//         </div>
//       ) : (
//         <div className="rounded-3xl border border-dashed border-slate-300 px-6 py-16 text-center dark:border-slate-700">
//           <HiEye className="mx-auto mb-4 text-4xl text-slate-400" />

//           <h3 className="text-lg font-bold text-slate-800 dark:text-white">
//             No components found
//           </h3>

//           <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
//             There are currently no components in this category.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { HiEye, HiCode, HiChevronDown, HiChevronUp } from "react-icons/hi";

import { TbCopyCheckFilled, TbCopyPlusFilled } from "react-icons/tb";

import { MdOutlineTipsAndUpdates } from "react-icons/md";

export default function FreeComponentsTab({
  categories,
  activeCategory,
  setActiveCategory,
  filteredFreeComponents,
  cardTabs,
  toggleCardTab,
  copiedId,
  handleCopy,
  isLoading = false,
  loadError = false,
  onRetry,
}) {
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);

  const [expandedIdeaId, setExpandedIdeaId] = useState(null);

  const toggleIdea = (id) => {
    setExpandedIdeaId((currentId) => (currentId === id ? null : id));
  };

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setIsMobileCategoryOpen(false);
    setExpandedIdeaId(null);
  };

  return (
    <div className="w-full">
      {/* Section Heading */}
      <div className="mb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Explore the library
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Free Components
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          Explore reusable components, preview their functionality, and copy
          ready-to-use code for your projects.
        </p>
      </div>

      {/* Desktop Categories */}
      <div className="mb-8 hidden flex-wrap gap-2 md:flex">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategorySelect(category)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              activeCategory === category
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                : "border border-slate-200 bg-white text-slate-600 hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            }`}>
            {category}
          </button>
        ))}
      </div>

      {/* Mobile Categories */}
      <div className="relative mb-6 md:hidden">
        <button
          type="button"
          onClick={() => setIsMobileCategoryOpen((prev) => !prev)}
          className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-white">
          {activeCategory}

          <HiChevronDown
            className={`text-lg transition-transform ${
              isMobileCategoryOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {isMobileCategoryOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-900">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategorySelect(category)}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                    activeCategory === category
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                      : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}>
                  {category}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Component Cards */}
      {isLoading ? (
        <div className="flex min-h-[300px] flex-col items-center justify-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500/20 border-t-blue-600" />

          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Loading {activeCategory}...
          </p>
        </div>
      ) : loadError ? (
        <div className="rounded-3xl border border-dashed border-red-300 px-6 py-16 text-center dark:border-red-900">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Unable to load components
          </h3>

          <p className="mt-2 text-sm leading-tight text-slate-500 dark:text-slate-400">
            Something went wrong while loading this category.
          </p>

          <button
            type="button"
            onClick={onRetry}
            className="mt-5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
            Try Again
          </button>
        </div>
      ) : filteredFreeComponents.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filteredFreeComponents.map((item, index) => {
            const isIdeaOpen = expandedIdeaId === item.id;
            const activeTab = cardTabs[item.id] || "preview";

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                }}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                {/* Card Header */}
                <div className="p-5 sm:p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                      {item.category}
                    </span>

                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                      FREE
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>

                  {/* Idea & Use Cases Toggle Only */}
                  <button
                    type="button"
                    onClick={() => toggleIdea(item.id)}
                    aria-expanded={isIdeaOpen}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400">
                    <MdOutlineTipsAndUpdates className="text-base" />

                    {isIdeaOpen ? "Hide Details" : "Idea & Use Cases"}

                    {isIdeaOpen ? <HiChevronUp /> : <HiChevronDown />}
                  </button>
                </div>

                {/* Collapsible Idea & Use Cases */}
                <AnimatePresence initial={false}>
                  {isIdeaOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden">
                      <div className="border-t border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/50 sm:p-6">
                        <div className="flex items-center gap-2">
                          <MdOutlineTipsAndUpdates className="text-lg text-blue-600 dark:text-blue-400" />

                          <h4 className="font-bold text-slate-900 dark:text-white">
                            Idea & Use Cases
                          </h4>
                        </div>

                        {item.idea && (
                          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            {item.idea}
                          </p>
                        )}

                        {item.useCases?.length > 0 && (
                          <ul className="mt-4 space-y-2">
                            {item.useCases.map((useCase, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <span className="mt-1 text-blue-600 dark:text-blue-400">
                                  •
                                </span>
                                <span>{useCase}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {!item.idea && !item.useCases?.length && (
                          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                            No additional details available.
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Original Showcase – Always Available */}
                <div className="border-t border-slate-200 dark:border-slate-800">
                  {/* Preview / Code Tabs */}
                  <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3 dark:border-slate-800 dark:bg-slate-950/50 sm:px-6">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => toggleCardTab(item.id, "preview")}
                        className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                          activeTab === "preview"
                            ? "bg-blue-600 text-white"
                            : "text-slate-500 hover:text-blue-600 dark:text-slate-400"
                        }`}>
                        <HiEye />
                        Preview
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleCardTab(item.id, "code")}
                        className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition max-sm:hidden ${
                          activeTab === "code"
                            ? "bg-blue-600 text-white"
                            : "text-slate-500 hover:text-blue-600 dark:text-slate-400"
                        }`}>
                        <HiCode />
                        Code
                      </button>
                    </div>
                  </div>

                  {/* Showcase Content */}
                  <div className="p-5 sm:p-6">
                    {activeTab === "preview" ? (
                      <div className="flex min-h-[180px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                        {item.component}
                      </div>
                    ) : (
                      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 max-sm:hidden">
                        <pre className="max-h-[420px] overflow-auto p-4 text-xs leading-6 text-slate-200 sm:text-sm">
                          <code>{item.code}</code>
                        </pre>
                      </div>
                    )}

                    {/* Copy Code */}
                    <div className="mt-4 flex justify-end max-sm:hidden">
                      <button
                        type="button"
                        onClick={() => handleCopy(item.id, item.code)}
                        className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                          copiedId === item.id
                            ? "bg-emerald-600 text-white"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}>
                        {copiedId === item.id ? (
                          <>
                            <TbCopyCheckFilled className="text-base" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <TbCopyPlusFilled className="text-base" />
                            Copy Code
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 px-6 py-16 text-center dark:border-slate-700">
          <HiEye className="mx-auto mb-4 text-4xl text-slate-400" />

          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            No components found
          </h3>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            There are currently no components in this category.
          </p>
        </div>
      )}
    </div>
  );
}
