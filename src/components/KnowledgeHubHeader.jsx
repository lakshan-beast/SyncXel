// import React from "react";
// import { HiOutlineSearch, HiSparkles, HiX } from "react-icons/hi";

// export default function KnowledgeHubHeader({
//   searchQuery,
//   setSearchQuery,
//   quickStartData,
// }) {
//   return (
//     <div className="space-y-6 mb-8">
//       {/* 1. TOP LICENSE BANNER */}
//       {/* <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-slate-900 to-emerald-500/10 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-cyan-950/30">
//         <div className="flex space-x-3 items-center">
//           <div className="p-2.5 bg-cyan-500/20 rounded-xl text-cyan-400 border border-cyan-500/30 shrink-0">
//             <HiSparkles className="w-5 h-5" />
//           </div>
//           <div>
//             <span className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
//               {quickStartData?.licenseBanner?.badge || "100% FREE LICENSE"}
//             </span>
//             <p className="text-sm font-semibold text-slate-200 mt-1">
//               {quickStartData?.licenseBanner?.text ||
//                 "Free for Personal & Commercial Client Projects."}
//             </p>
//           </div>
//         </div>
//         <span className="text-xs text-slate-400 bg-slate-900/80 px-3.5 py-1.5 rounded-lg border border-white/5 whitespace-nowrap">
//           MIT Style • Free Forever 🚀
//         </span>
//       </div> */}

//       {/* 2. HEADER & LIVE SEARCH BAR */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-900/40 border border-white/5 p-6 rounded-2xl backdrop-blur-md">
//         {/* Title & Subtitle */}
//         <div className="space-y-1">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
//             Developer
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 pl-3">
//               Knowledge Hub
//             </span>
//           </h2>
//           <p className="text-slate-400 text-xs sm:text-sm">
//             Complete collection of UI components, integrations, security
//             patterns, and deployment guides.
//           </p>
//         </div>

//         {/* Active Live Search Input */}
//         <div className="relative w-full md:w-80 shrink-0">
//           <HiOutlineSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search docs, snippets, hooks..."
//             className="w-full pl-10 pr-9 py-2.5 bg-slate-950/90 text-sm text-slate-200 placeholder-slate-500 rounded-xl border border-white/10 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all shadow-inner"
//           />
//           {/* Clear Search Button */}
//           {searchQuery && (
//             <button
//               onClick={() => setSearchQuery("")}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
//               title="Clear search">
//               <HiX className="w-4 h-4" />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { HiOutlineSearch, HiSparkles, HiX, HiArrowLeft } from "react-icons/hi";

export default function KnowledgeHubHeader({
  searchQuery = "",
  setSearchQuery = () => {},
  quickStartData,
}) {
  return (
    <div className="space-y-2 mb-6 font-mono">
      {/* HEADER & LIVE SEARCH BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white border-none border-slate-200 rounded-2xl shadow-none relative overflow-hidden">
        {/* Title & Expanded Rich Description */}
        <div className="space-y-2 relative z-10 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-5 py-1 rounded-full bg-white border border-slate-200 text-slate-500/30 text-xs font-mono shadow-xs">
            <span>// system_knowledge_repository_v2.0</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Developer{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-200 to-slate-700 block sm:inline mt-1 sm:mt-0">
              Knowledge Hub
            </span>
          </h2>

          <p className="text-slate-500/80 text-xs sm:text-sm leading-thight font-baloo">
            A comprehensive engineering repository featuring production-ready UI
            components, secure authentication patterns, state management
            architectures, robust form integrations, custom hooks, and
            streamlined Vercel deployment guides designed to accelerate your
            full-stack development workflow with precision.
          </p>

          <a
            href="/"
            className="py-2.5 px-5 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-xl transition-all text-slate-300 hover:text-white flex items-center gap-2 space-x-2 text-xs font-medium cursor-pointer w-fit group group-hover:gap-3">
            <HiArrowLeft className="w-4 h-4" />
            <span>back_to_home()</span>
          </a>
        </div>

        {/* Active Live Search Input */}
        <div className="relative w-full md:w-80 shrink-0 z-10">
          <HiOutlineSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search docs, snippets, hooks..."
            className="w-full pl-10 pr-9 py-2.5 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 rounded-xl border border-slate-200 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all shadow-inner font-baloo"
          />
          {/* Clear Search Button */}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 transition-colors"
              title="Clear search">
              <HiX className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
