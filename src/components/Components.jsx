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

// import React from "react";
// import { Link } from "react-router-dom";
// import { HiOutlineArrowRight } from "react-icons/hi2";
// import { componentsData } from "../data/componentData2";

// export default function HomeComponentsTeaser() {
//   // Array Safety check + Get first 4 components
//   const teaserItems = (componentsData || []).slice(0, 4);

//   return (
//     <section
//       id="components"
//       className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-10 scroll-mt-20">
//       {/* Title Header */}
//       <div className="text-center space-y-2">
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
//           Explore{" "}
//           <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500">
//             UI Library
//           </span>
//         </h2>
//         <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
//           Clean, production-ready components built with React & Tailwind CSS.
//         </p>
//       </div>

//       {/* 4 Visual Components Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-2 md:gap-4 lg:gap-6">
//         {teaserItems.map((item) => (
//           <Link
//             key={item.id}
//             to="/components"
//             className="group rounded-2xl bg-slate-900/60 border border-white/10 overflow-hidden backdrop-blur-md hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
//             {/* Card Image Preview Box */}
//             <div className="h-44 bg-slate-950/80 overflow-hidden relative flex items-center justify-center p-2 border-b border-white/5">
//               <img
//                 src={item.image || "/preview-placeholder.png"}
//                 alt={item.title}
//                 className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
//               />
//               <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 border border-white/10 text-[10px] font-semibold text-cyan-400 backdrop-blur-sm">
//                 {item.category}
//               </span>
//             </div>

//             {/* Card Info Bar */}
//             <div className="p-4 flex items-center justify-between">
//               <h3 className="text-white font-bold text-sm group-hover:text-cyan-400 transition-colors line-clamp-1">
//                 {item.title}
//               </h3>
//               <HiOutlineArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* Explore All Components Button */}
//       <div className="text-center pt-0">
//         <Link
//           to="/components"
//           className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-linear-to-r from-cyan-400 to-indigo-500 text-slate-950 font-extrabold text-sm hover:shadow-lg hover:shadow-cyan-500/25 hover:gap-2 transition-all duration-300">
//           <span>Explore All Components</span>
//           <HiOutlineArrowRight className="w-4 h-4" />
//         </Link>
//       </div>
//     </section>
//   );
// }

// import React, { useState } from "react";

// // Oyage components 4 me thanata import karanna (Path eka hariyata danna)
// import LiveComp1 from "../library/free/buttons/BioScanButton";
// import LiveComp2 from "../library/free/checkboxes/BentoClusterCheckbox";
// import LiveComp3 from "../library/free/avatars/BentoProfileCard";
// import LiveComp4 from "../library/free/loaders/TokenizingLoader";

// export default function LiveComponentShowcase() {
//   const [activeComponent, setActiveComponent] = useState(0);

//   // Components array eka
//   const componentsList = [
//     { id: 1, title: "Component One", component: <LiveComp1 /> },
//     { id: 2, title: "Component Two", component: <LiveComp2 /> },
//     { id: 3, title: "Component Three", component: <LiveComp3 /> },
//     { id: 4, title: "Component Four", component: <LiveComp4 /> },
//   ];

//   return (
//     <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-6">
//       {/* Tab Buttons (Click karama e component eka live pennanna) */}
//       <div className="flex flex-wrap gap-2">
//         {componentsList.map((item, index) => (
//           <button
//             key={item.id}
//             onClick={() => setActiveComponent(index)}
//             className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
//               activeComponent === index
//                 ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
//                 : "bg-slate-800 text-slate-400 hover:text-white"
//             }`}>
//             {item.title}
//           </button>
//         ))}
//       </div>

//       {/* Live Component Render wena thana (Image eka wenuwata meka wada karai) */}
//       <div className="p-4 bg-slate-950 border border-white/10 rounded-xl min-h-[300px] flex items-center justify-center">
//         <div className="w-full">
//           {componentsList[activeComponent].component}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";

// Import your 4 custom components
import BioScanButton from "../library/free/buttons/BioScanButton";
import BentoClusterCheckbox from "../library/free/checkboxes/BentoClusterCheckbox";
import BentoProfileCard from "../library/free/avatars/BentoProfileCard";
import TokenizingLoader from "../library/free/loaders/TokenizingLoader";

export default function HomeComponentsTeaser() {
  // Array containing the live components and metadata
  const teaserItems = [
    {
      id: 1,
      title: "BioScan Button",
      category: "Buttons",
      component: <BioScanButton />,
    },
    {
      id: 2,
      title: "Bento Cluster Checkbox",
      category: "Checkboxes",
      component: <BentoClusterCheckbox />,
    },
    {
      id: 3,
      title: "Bento Profile Card",
      category: "Avatars",
      component: <BentoProfileCard />,
    },
    {
      id: 4,
      title: "Tokenizing Loader",
      category: "Loaders",
      component: <TokenizingLoader />,
    },
  ];

  return (
    <section
      id="components"
      className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-10 scroll-mt-20">
      
      {/* Title Header with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Explore{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
            UI Library
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
          Clean, production-ready components built with React & Tailwind CSS.
        </p>
      </motion.div>

      {/* 4 Live Components Cards Grid with Staggered Motion */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {teaserItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}>
            <Link
              to="/components"
              className="group rounded-2xl bg-slate-900/60 border border-white/10 overflow-hidden backdrop-blur-md hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
              
              {/* Live Component Preview Box (Replaces Static Image) */}
              <div className="h-48 bg-slate-950/80 overflow-hidden relative flex items-center justify-center p-4 border-b border-white/5">
                <div className="w-full flex items-center justify-center scale-95 group-hover:scale-100 transition-transform duration-300 pointer-events-none">
                  {item.component}
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 border border-white/10 text-[10px] font-semibold text-cyan-400 backdrop-blur-sm z-10">
                  {item.category}
                </span>
              </div>

              {/* Card Info Bar */}
              <div className="p-4 flex items-center justify-between bg-slate-900/40">
                <h3 className="text-white font-bold text-sm group-hover:text-cyan-400 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <HiOutlineArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Explore All Components Button with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center pt-2">
        <Link
          to="/components"
          className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-extrabold text-sm hover:shadow-lg hover:shadow-cyan-500/25 hover:gap-3 transition-all duration-300">
          <span>Explore All Components</span>
          <HiOutlineArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

    </section>
  );
}