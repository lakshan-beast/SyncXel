// import React from "react";
// import { Link } from "react-router-dom";
// import { HiOutlineArrowRight } from "react-icons/hi2";
// import { componentsData } from "../data/componentsData";

// export default function HomeComponentsTeaser() {
//   // Home page එකේ පෙන්නන්න ප්‍රධාන Cards 4 විතරක් ගමු
//   const teaserItems = componentsData.slice(0, 4);

//   return (
//     <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-10">

//       {/* Title */}
//       <div className="text-center space-y-2">
//         <h2 className="text-3xl font-extrabold text-white font-heading">
//           Explore <span className="text-transparent bg-clip-text bg-syncxel-gradient">UI Library</span>
//         </h2>
//         <p className="text-syncxel-textMuted text-sm">
//           Clean, production-ready components built with React & Tailwind CSS.
//         </p>
//       </div>

//       {/* 4 Clean Visual Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
//         {teaserItems.map((item) => (
//           <Link
//             key={item.id}
//             to="/components"
//             className="group rounded-2xl bg-syncxel-card/60 border border-syncxel-border/80 overflow-hidden backdrop-blur-md hover:border-syncxel-cyan/60 transition-all duration-300 flex flex-col"
//           >
//             {/* Card Image Preview */}
//             <div className="h-40 bg-black/40 overflow-hidden relative flex items-center justify-center p-2">
//               <img
//                 src={item.image || "/preview-placeholder.png"}
//                 alt={item.title}
//                 className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
//               />
//               <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 border border-white/10 text-[10px] font-semibold text-syncxel-cyan backdrop-blur-sm">
//                 {item.category}
//               </span>
//             </div>

//             {/* Card Info */}
//             <div className="p-4 flex items-center justify-between">
//               <h3 className="text-white font-bold text-sm group-hover:text-syncxel-cyan transition-colors">
//                 {item.title}
//               </h3>
//               <HiOutlineArrowRight className="w-4 h-4 text-syncxel-textMuted group-hover:text-syncxel-cyan group-hover:translate-x-1 transition-all" />
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* Explore All Components Button */}
//       <div className="text-center pt-1">
//         <Link
//           to="/components"
//           className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-syncxel-gradient text-black font-extrabold text-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-all duration-300"
//         >
//           <span>Explore All Components</span>
//           <HiOutlineArrowRight className="w-4 h-4" />
//         </Link>
//       </div>

//     </section>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { componentsData } from "../data/componentData2";

export default function HomeComponentsTeaser() {
  // Array Safety check + Get first 4 components
  const teaserItems = (componentsData || []).slice(0, 4);

  return (
    <section
      id="components"
      className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-10 scroll-mt-20">
      {/* Title Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Explore{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500">
            UI Library
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
          Clean, production-ready components built with React & Tailwind CSS.
        </p>
      </div>

      {/* 4 Visual Components Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-2 md:gap-4 lg:gap-6">
        {teaserItems.map((item) => (
          <Link
            key={item.id}
            to="/components"
            className="group rounded-2xl bg-slate-900/60 border border-white/10 overflow-hidden backdrop-blur-md hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            {/* Card Image Preview Box */}
            <div className="h-44 bg-slate-950/80 overflow-hidden relative flex items-center justify-center p-2 border-b border-white/5">
              <img
                src={item.image || "/preview-placeholder.png"}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 border border-white/10 text-[10px] font-semibold text-cyan-400 backdrop-blur-sm">
                {item.category}
              </span>
            </div>

            {/* Card Info Bar */}
            <div className="p-4 flex items-center justify-between">
              <h3 className="text-white font-bold text-sm group-hover:text-cyan-400 transition-colors line-clamp-1">
                {item.title}
              </h3>
              <HiOutlineArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
            </div>
          </Link>
        ))}
      </div>

      {/* Explore All Components Button */}
      <div className="text-center pt-0">
        <Link
          to="/components"
          className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-linear-to-r from-cyan-400 to-indigo-500 text-slate-950 font-extrabold text-sm hover:shadow-lg hover:shadow-cyan-500/25 hover:gap-2 transition-all duration-300">
          <span>Explore All Components</span>
          <HiOutlineArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
