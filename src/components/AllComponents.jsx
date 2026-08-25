// import React, { useState } from "react";
// import { componentsData } from "../data/componentsData";
// import {
//   HiOutlineCodeBracket,
//   HiOutlineEye,
//   HiOutlineClipboardDocumentCheck,
//   HiOutlineDocumentDuplicate,
// } from "react-icons/hi2";

// export default function AllComponents() {
//   const [activeTab, setActiveTab] = useState({});
//   const [copiedId, setCopiedId] = useState(null);

//   // preview / code toggle function
//   const toggleTab = (id, tab) => {
//     setActiveTab((prev) => ({ ...prev, [id]: tab }));
//   };

//   // copy function
//   const handleCopy = (id, codeText) => {
//     navigator.clipboard.writeText(codeText);
//     setCopied(id);
//     setTimeout(() => {
//       setCopied(null);
//     }, 2000);
//   };

//   return (
//     <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
//       {/* Section Title */}
//       <div className="text-center space-y-3">
//         <h2 className="text-3xl font-extrabold text-white font-heading">
//           Explore{" "}
//           <span className="text-transparent bg-clip-text bg-syncxel-gradient">
//             Components
//           </span>
//         </h2>
//         <p className="text-syncxel-textMuted text-sm">
//           Copy-paste ready React + Tailwind CSS components for your next
//           project.
//         </p>
//       </div>

//       {/* components grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {componentsData.map((item) => {
//           const currentTab = activeTab[item.id] || "preview";

//           return (
//             <div
//               key={item.id}
//               className="rounded-2xl bg-syncxel-card/60 border border-syncxel-border/80 overflow-hidden backdrop-blur-md flex flex-col justify-between">
//               {/* Card Header (Title & Controls) */}
//               <div className="p-4 border-b border-syncxel-border/50 flex items-center justify-between bg-syncxel-dark/40">
//                 <div>
//                   <h3 className="text-white font-bold text-base">
//                     {item.title}
//                   </h3>
//                   <p className="text-xs text-syncxel-textMuted">
//                     {item.description}
//                   </p>
//                 </div>

//                 {/* Preview / Code Toggle Buttons */}
//                 <div className="flex items-center space-x-1 bg-syncxel-dark p-1 rounded-lg border border-syncxel-border/60">
//                   <button
//                     onClick={() => toggleTab(item.id, "preview")}
//                     className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center space-x-1.5 transition-all ${
//                       currentTab === "preview"
//                         ? "bg-syncxel-cyan text-black"
//                         : "text-syncxel-textMuted hover:text-white"
//                     }`}>
//                     <HiOutlineEye className="w-3.5 h-3.5" />
//                     <span>Preview</span>
//                   </button>

//                   <button
//                     onClick={() => toggleTab(item.id, "code")}
//                     className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center space-x-1.5 transition-all ${
//                       currentTab === "code"
//                         ? "bg-syncxel-cyan text-black"
//                         : "text-syncxel-textMuted hover:text-white"
//                     }`}>
//                     <HiOutlineCodeBracket className="w-3.5 h-3.5" />
//                     <span>Code</span>
//                   </button>
//                 </div>
//               </div>

//               {/* Card Body (Live Component OR Code View) */}
//               <div className="p-8 min-h-55 flex items-center justify-center relative bg-black/20">
//                 {currentTab === "preview" ? (
//                   /* 1. Live Preview Area */
//                   <div className="flex items-center justify-center w-full">
//                     {item.component}
//                   </div>
//                 ) : (
//                   /* 2. Code Snippet Area */
//                   <div className="w-full h-full relative">
//                     <pre className="text-xs font-mono text-cyan-300 bg-syncxel-dark/90 p-4 rounded-xl overflow-x-auto max-h-55 border border-syncxel-border/40">
//                       <code>{item.code}</code>
//                     </pre>
//                   </div>
//                 )}
//               </div>

//               {/* Card Footer (Copy Code Action) */}
//               {/* <div className="p-3 border-t border-syncxel-border/50 bg-syncxel-dark/30 flex items-center justify-between text-xs">
//                 <span className="text-syncxel-textMuted font-mono">
//                   React + Tailwind
//                 </span>

//                 <button
//                   onClick={() => handleCopy(item.id, item.code)}
//                   className="px-3 py-1.5 rounded-lg bg-syncxel-cyan/10 border border-syncxel-cyan/30 text-syncxel-cyan hover:bg-syncxel-cyan hover:text-black font-semibold flex items-center space-x-1.5 transition-all">
//                   {copiedId === item.id ? (
//                     <>
//                       <HiOutlineClipboardDocumentCheck className="w-4 h-4" />
//                       <span>Copied!</span>
//                     </>
//                   ) : (
//                     <>
//                       <HiOutlineDocumentDuplicate className="w-4 h-4" />
//                       <span>Copy Code</span>
//                     </>
//                   )}
//                 </button>
//               </div> */}

//               {/* Card Footer (Dynamic Action: Free vs Paid) */}
//               <div className="p-3 border-t border-syncxel-border/50 bg-syncxel-dark/30 flex items-center justify-between text-xs">
//                 {item.isPaid ? (
//                   /* 🌟 1. PAID TEMPLATE FOOTER */
//                   <>
//                     <div className="flex items-center space-x-1.5">
//                       <span className="text-syncxel-cyan font-bold font-mono text-sm">
//                         {item.price || "$9"}
//                       </span>
//                     </div>

//                     <div className="flex items-center space-x-2">
//                       {/* Live Demo Link (If available) */}
//                       {item.demoUrl && (
//                         <a
//                           href={item.demoUrl}
//                           target="_blank"
//                           rel="noreferrer"
//                           className="px-2.5 py-1.5 rounded-lg border border-syncxel-border/80 text-syncxel-textMuted hover:text-white hover:border-syncxel-cyan transition-all flex items-center space-x-1">
//                           <span>Demo</span>
//                         </a>
//                       )}

//                       {/* Get Template Button (Direct Contact / WhatsApp) */}
//                       <a
//                         href={item.whatsappUrl || "#"}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="px-3 py-1.5 rounded-lg bg-syncxel-gradient text-black font-bold hover:opacity-90 transition-all shadow-md shadow-syncxel-cyan/20 flex items-center space-x-1">
//                         <span>Get Template</span>
//                       </a>
//                     </div>
//                   </>
//                 ) : (
//                   /* 🆓 2. FREE COMPONENT FOOTER (ඔයාගේ Orginal Code එක) */
//                   <>
//                     <span className="text-syncxel-textMuted font-mono">
//                       {item.techStack || "React + Tailwind"}
//                     </span>

//                     <button
//                       onClick={() => handleCopy(item.id, item.code)}
//                       className="px-3 py-1.5 rounded-lg bg-syncxel-cyan/10 border border-syncxel-cyan/30 text-syncxel-cyan hover:bg-syncxel-cyan hover:text-black font-semibold flex items-center space-x-1.5 transition-all">
//                       {copiedId === item.id ? (
//                         <>
//                           <HiOutlineClipboardDocumentCheck className="w-4 h-4" />
//                           <span>Copied!</span>
//                         </>
//                       ) : (
//                         <>
//                           <HiOutlineDocumentDuplicate className="w-4 h-4" />
//                           <span>Copy Code</span>
//                         </>
//                       )}
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { componentsData } from "../data/componentsData2";
import {
  HiOutlineSearch,
  HiOutlineCopy,
  HiOutlineCheck,
  HiOutlineEye,
} from "react-icons/hi";

export default function AllComponents() {
  const [componentsList, setComponentsList] = useState(componentsData);
  const [activeCategory, setActiveCategory] = useState("Animations");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCodeTabs, setActiveCodeTabs] = useState({}); // Stores 'jsx' or 'html' per card
  const [copiedId, setCopiedId] = useState(null);

  // Extract Unique Categories dynamically
  const categories = [
    "animations",
    ...new Set(componentsData.map((item) => item.category)),
  ];

  // Filter Logic
  const filteredComponents = componentsList.filter((item) => {
    const matchesCategory =
      activeCategory === "Animations" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Code Copy Handler + Increment Copy Count
  const handleCopy = (id, codeText) => {
    navigator.clipboard.writeText(codeText);
    setCopiedId(id);

    // Dynamic state update for copy count increment
    setComponentsList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, copies: item.copies + 1 } : item,
      ),
    );

    setTimeout(() => setCopiedId(null), 2000);
  };

  // Switch between JSX and HTML tab per component card
  const toggleTab = (id, tab) => {
    setActiveCodeTabs((prev) => ({ ...prev, [id]: tab }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Component <span className="text-cyan-400">Showroom</span>
        </h1>
        <p className="text-slate-400 text-sm">
          Production-ready, customizable UI components. Copy-paste React JSX or
          Pure HTML instantly.
        </p>
      </div>

      {/* Controls: Search & Categories */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <HiOutlineSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500 transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold capitalize whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Component Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredComponents.map((item) => {
          const LiveComponent = item.component;
          const currentTab = activeCodeTabs[item.id] || "jsx";
          const codeToCopy =
            currentTab === "jsx" ? item.code.jsx : item.code.html;

          return (
            <div
              key={item.id}
              className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between">
              {/* Card Header: Title & Stats */}
              <div className="p-4 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/60">
                <div>
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <span className="text-[10px] text-cyan-400 uppercase tracking-wider font-semibold">
                    {item.category}
                  </span>
                </div>

                {/* Views & Copies Badge */}
                <div className="flex items-center space-x-3 text-xs text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
                  <span className="flex items-center space-x-1" title="Views">
                    <HiOutlineEye className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[11px] font-medium">
                      {item.views}
                    </span>
                  </span>
                  <span className="text-slate-700">|</span>
                  <span className="flex items-center space-x-1" title="Copies">
                    <HiOutlineCopy className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[11px] font-medium text-white">
                      {item.copies}
                    </span>
                  </span>
                </div>
              </div>

              {/* Card Center: Live Component Preview */}
              <div className="p-8 min-h-[220px] flex items-center justify-center bg-slate-950/40 border-b border-slate-800/80 relative">
                <LiveComponent />
              </div>

              {/* Card Bottom: Code Tabs & Copy Action */}
              <div className="p-3 bg-slate-900/80 flex items-center justify-between">
                {/* JSX / HTML Tab Buttons */}
                <div className="flex bg-slate-950 rounded-lg p-1 border border-slate-800">
                  <button
                    onClick={() => toggleTab(item.id, "jsx")}
                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all ${
                      currentTab === "jsx"
                        ? "bg-cyan-500 text-slate-950"
                        : "text-slate-400 hover:text-white"
                    }`}>
                    React JSX
                  </button>
                  <button
                    onClick={() => toggleTab(item.id, "html")}
                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all ${
                      currentTab === "html"
                        ? "bg-cyan-500 text-slate-950"
                        : "text-slate-400 hover:text-white"
                    }`}>
                    HTML
                  </button>
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(item.id, codeToCopy)}
                  className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-all border border-slate-700">
                  {copiedId === item.id ? (
                    <>
                      <HiOutlineCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <HiOutlineCopy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
