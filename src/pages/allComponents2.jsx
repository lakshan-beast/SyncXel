// import React, { useState } from "react";
// import { componentsData } from "../data/componentsData"; // 👈 Dynamic Data Array එක

// export default function AllComponents() {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [activeTab, setActiveTab] = useState("jsx"); // "jsx" or "html"

//   // Category filter එක (e.g. 'buttons', 'cards')
//   const filteredComponents = componentsData.filter(
//     (item) => selectedCategory === "all" || item.category === selectedCategory,
//   );

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12">
//       <h1 className="text-3xl font-extrabold text-white mb-8">UI Components</h1>

//       {/* Component Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredComponents.map((item) => {
//           // 👈 Component එක Dynamic React Element එකක් විදිහට ගන්නවා
//           const LiveComponent = item.component;

//           return (
//             <div
//               key={item.id}
//               className="bg-slate-900 border border-white/10 rounded-2xl p-6">
//               {/* 1. Component Live Preview Area */}
//               <div className="bg-slate-950 rounded-xl p-8 flex items-center justify-center min-h-[160px] border border-white/5">
//                 <LiveComponent />{" "}
//                 {/* 👈 මෙතනදී RippleButton එක Screen එකේ පෙන්නනවා! */}
//               </div>

//               {/* 2. Info & Copy Actions */}
//               <div className="mt-4 flex items-center justify-between">
//                 <h3 className="text-lg font-bold text-white">{item.title}</h3>

//                 {/* HTML / JSX Tab Toggles */}
//                 <div className="flex bg-slate-950 p-1 rounded-lg border border-white/10 text-xs">
//                   <button
//                     onClick={() => setActiveTab("jsx")}
//                     className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
//                       activeTab === "jsx"
//                         ? "bg-cyan-500 text-black"
//                         : "text-slate-400"
//                     }`}>
//                     React
//                   </button>
//                   <button
//                     onClick={() => setActiveTab("html")}
//                     className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
//                       activeTab === "html"
//                         ? "bg-cyan-500 text-black"
//                         : "text-slate-400"
//                     }`}>
//                     HTML
//                   </button>
//                 </div>
//               </div>

//               {/* 3. Copy Code Button */}
//               <button
//                 onClick={() => {
//                   const codeToCopy = item.code[activeTab];
//                   navigator.clipboard.writeText(codeToCopy);
//                   alert(
//                     `${item.title} (${activeTab.toUpperCase()}) code copied!`,
//                   );
//                 }}
//                 className="mt-4 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl border border-white/10 transition-colors">
//                 Copy {activeTab.toUpperCase()} Code
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { componentsData } from "../data/componentData2";
// import {
//   HiOutlineSearch,
//   HiOutlineCheck,
//   HiOutlineClipboardCopy,
// } from "react-icons/hi";

// // 🌟 Component Card එක වෙනම Sub-component එකක් කළාම Active Tab එක Each Card එකට විතරක් Isolated වෙනවා!
// function ComponentCard({ item }) {
//   const [activeTab, setActiveTab] = useState("jsx"); // "jsx" or "html"
//   const [copied, setCopied] = useState(false);

//   const LiveComponent = item.component;

//   const handleCopy = () => {
//     const codeToCopy = item.code ? item.code[activeTab] : "";
//     if (codeToCopy) {
//       navigator.clipboard.writeText(codeToCopy);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000); // 2 Seconds වලින් Copied state එක අයින් වෙනවා
//     }
//   };

//   return (
//     <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl flex flex-col justify-between hover:border-cyan-500/30 transition-all group">
//       <div>
//         {/* 1. Component Live Preview Area */}
//         <div className="bg-slate-950/80 rounded-xl p-8 flex items-center justify-center min-h-[180px] border border-white/5 relative overflow-hidden">
//           {/* Subtle Grid Background in Preview */}
//           <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

//           {/* Live Component Render */}
//           <div className="z-10">
//             {LiveComponent ? (
//               <LiveComponent />
//             ) : (
//               <span className="text-slate-500 text-xs">
//                 Preview Unavailable
//               </span>
//             )}
//           </div>
//         </div>

//         {/* 2. Info & Code Tab Toggle */}
//         <div className="mt-4 flex items-center justify-between gap-2">
//           <div>
//             <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
//               {item.title}
//             </h3>
//             <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
//               {item.category}
//             </span>
//           </div>

//           {/* HTML / JSX Tab Buttons */}
//           <div className="flex bg-slate-950 p-1 rounded-xl border border-white/10 text-xs shrink-0">
//             <button
//               onClick={() => setActiveTab("jsx")}
//               className={`px-3 py-1 rounded-lg font-bold text-[11px] transition-all ${
//                 activeTab === "jsx"
//                   ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
//                   : "text-slate-400 hover:text-white"
//               }`}>
//               React
//             </button>
//             <button
//               onClick={() => setActiveTab("html")}
//               className={`px-3 py-1 rounded-lg font-bold text-[11px] transition-all ${
//                 activeTab === "html"
//                   ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
//                   : "text-slate-400 hover:text-white"
//               }`}>
//               HTML
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* 3. Action Button (Copy Code) */}
//       <button
//         onClick={handleCopy}
//         className={`mt-5 w-full py-2.5 rounded-xl text-xs font-extrabold flex items-center justify-center space-x-2 transition-all active:scale-95 ${
//           copied
//             ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-400"
//             : "bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-white border border-white/10"
//         }`}>
//         {copied ? (
//           <>
//             <HiOutlineCheck className="w-4 h-4" />
//             <span>Copied {activeTab.toUpperCase()} Code!</span>
//           </>
//         ) : (
//           <>
//             <HiOutlineClipboardCopy className="w-4 h-4" />
//             <span>Copy {activeTab.toUpperCase()} Code</span>
//           </>
//         )}
//       </button>
//     </div>
//   );
// }

// // 🌟 MAIN PAGE COMPONENT
// export default function AllComponents() {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");

//   // Auto-detect Categories list from data
//   const categories = [
//     "all",
//     ...new Set(componentsData.map((item) => item.category)),
//   ];

//   // Search & Filter Logic
//   const filteredComponents = componentsData.filter((item) => {
//     const matchesCategory =
//       selectedCategory === "all" || item.category === selectedCategory;
//     const matchesSearch = item.title
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
//       {/* Page Header */}
//       <div className="space-y-3 text-center max-w-2xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
//           Explore <span className="text-cyan-400">Syncxel</span> Components
//         </h1>
//         <p className="text-sm text-slate-400">
//           Copy-paste production-ready React and HTML components built with
//           Tailwind CSS.
//         </p>
//       </div>

//       {/* Controls: Search & Category Filter Bar */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/50 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
//         {/* Search Bar */}
//         <div className="relative w-full md:w-72">
//           <HiOutlineSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
//           <input
//             type="text"
//             placeholder="Search components..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
//           />
//         </div>

//         {/* Category Pills */}
//         <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize whitespace-nowrap transition-all ${
//                 selectedCategory === cat
//                   ? "bg-cyan-500 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/20"
//                   : "bg-slate-950 text-slate-400 hover:text-white border border-white/5"
//               }`}>
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Grid Display */}
//       {filteredComponents.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredComponents.map((item) => (
//             <ComponentCard key={item.id} item={item} />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-white/5">
//           <p className="text-slate-400 text-sm">
//             No components found matching your criteria.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { componentsData } from "../data/componentData2";
// import {
//   //   HiOutlineSearch,
//   HiOutlineCheck,
//   HiOutlineClipboardCopy,
// } from "react-icons/hi";
// import { MdOutlineMaximize } from "react-icons/md";

// export default function ComponentCard({ item }) {
//   const [activeTab, setActiveTab] = useState("jsx");
//   const [copied, setCopied] = useState(false);
//   const [isFullscreen, setIsFullscreen] = useState(false); // 🌟 Fullscreen Modal Toggle

//   const LiveComponent = item.component;

//   // Header, Footer, Hero, Navigation sections සදහා විශේෂ Layout handling
//   const isLargeSection = ["footers", "heroes", "navbars", "sections"].includes(
//     item.category.toLowerCase(),
//   );

//   const handleCopy = () => {
//     const codeToCopy = item.code ? item.code[activeTab] : "";
//     if (codeToCopy) {
//       navigator.clipboard.writeText(codeToCopy);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     }
//   };

//   return (
//     <>
//       <div
//         className={`bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl flex flex-col justify-between hover:border-cyan-500/30 transition-all group ${
//           isLargeSection
//             ? "col-span-1 md:col-span-2 lg:col-span-3"
//             : "col-span-1"
//         }`}>
//         <div>
//           {/* Header Area */}
//           <div className="flex items-center justify-between mb-3">
//             <div>
//               <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
//                 {item.title}
//               </h3>
//               <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
//                 {item.category}
//               </span>
//             </div>

//             {/* Large Section එකක් නම් Expand / Fullscreen Button එකක් පෙන්නනවා */}
//             {isLargeSection && (
//               <button
//                 onClick={() => setIsFullscreen(true)}
//                 className="flex items-center space-x-1 text-xs text-slate-400 hover:text-white bg-slate-800 p-2 rounded-lg border border-white/10 transition-colors"
//                 title="Expand Full Preview">
//                 <MdOutlineMaximize className="w-4 h-4" />
//                 <span className="hidden sm:inline">Full Preview</span>
//               </button>
//             )}
//           </div>

//           {/* 1. Live Preview Area */}
//           <div
//             className={`bg-slate-950/90 rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center ${
//               isLargeSection
//                 ? "h-[350px] overflow-y-auto p-2" // Large sections වලට scrollable/larger height එකක්
//                 : "min-h-[180px] p-8" // Small components වලට standard height එකක්
//             }`}>
//             <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

//             <div className={`z-10 ${isLargeSection ? "w-full h-full" : ""}`}>
//               {LiveComponent ? (
//                 <LiveComponent />
//               ) : (
//                 <span className="text-slate-500 text-xs">
//                   Preview Unavailable
//                 </span>
//               )}
//             </div>
//           </div>

//           {/* 2. Code Tab Toggle */}
//           <div className="mt-4 flex items-center justify-end">
//             <div className="flex bg-slate-950 p-1 rounded-xl border border-white/10 text-xs shrink-0">
//               <button
//                 onClick={() => setActiveTab("jsx")}
//                 className={`px-3 py-1 rounded-lg font-bold text-[11px] transition-all ${
//                   activeTab === "jsx"
//                     ? "bg-cyan-500 text-slate-950 shadow-md"
//                     : "text-slate-400 hover:text-white"
//                 }`}>
//                 React
//               </button>
//               <button
//                 onClick={() => setActiveTab("html")}
//                 className={`px-3 py-1 rounded-lg font-bold text-[11px] transition-all ${
//                   activeTab === "html"
//                     ? "bg-cyan-500 text-slate-950 shadow-md"
//                     : "text-slate-400 hover:text-white"
//                 }`}>
//                 HTML
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* 3. Copy Code Button */}
//         <button
//           onClick={handleCopy}
//           className={`mt-4 w-full py-2.5 rounded-xl text-xs font-extrabold flex items-center justify-center space-x-2 transition-all active:scale-95 ${
//             copied
//               ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-400"
//               : "bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-white border border-white/10"
//           }`}>
//           {copied ? (
//             <>
//               <HiOutlineCheck className="w-4 h-4" />
//               <span>Copied {activeTab.toUpperCase()} Code!</span>
//             </>
//           ) : (
//             <>
//               <HiOutlineClipboardCopy className="w-4 h-4" />
//               <span>Copy {activeTab.toUpperCase()} Code</span>
//             </>
//           )}
//         </button>
//       </div>

//       {/* 🌟 FULLSCREEN MODAL FOR FOOTERS/HEROES */}
//       {isFullscreen && (
//         <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-2xl flex flex-col p-4 sm:p-8">
//           <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
//             <h2 className="text-xl font-bold text-white">
//               {item.title} (Full Preview)
//             </h2>
//             <button
//               onClick={() => setIsFullscreen(false)}
//               className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-white/10">
//               Close Preview ✕
//             </button>
//           </div>
//           <div className="flex-1 overflow-y-auto bg-slate-900 rounded-2xl border border-white/10 p-4">
//             {LiveComponent && <LiveComponent />}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useState } from "react";
import { componentsData } from "../data/componentData2"; // 👈 Data source
import ComponentCard from "../components/componentCard"; // 👈 මෙතනට ComponentCard එක import කරන්න

export default function AllComponents2() {
  const [selectedCategory, setSelectedCategory] = useState("animations");

  const categories = [
    "animations",
    ...new Set(componentsData.map((item) => item.category)),
  ];

  const filteredComponents = componentsData.filter(
    (item) => selectedCategory === "animations" || item.category === selectedCategory,
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-extrabold text-white mb-8">
        All Components
      </h1>

      {/* Category Buttons */}
      <div className="flex gap-2 overflow-x-auto mb-8 pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
              selectedCategory === cat
                ? "bg-cyan-500 text-slate-950"
                : "bg-slate-900 text-slate-400 hover:text-white border border-white/10"
            }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComponents.map((item) => (
          <ComponentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
