// import React from "react";
// import { Link } from "react-router-dom";
// import { HiOutlineArrowRight } from "react-icons/hi2";
// import { motion } from "framer-motion";

// // Import your 4 custom components
// import LaserBeamButton from "../library/free/buttons/LaserBeamButton";
// import BrutalPopCheckbox from "../library/free/checkboxes/BrutalPopCheckbox";
// import CyberAgentRing from "../library/free/avatars/CyberAvatarPreview";
// import FacebookSkeletonLoader from "../library/free/loaders/FacebookSkeletonLoader";

// export default function HomeComponentsTeaser() {
//   // Array containing the live components and metadata
//   const teaserItems = [
//     {
//       id: 1,
//       title: "Laser Beam Button",
//       category: "Buttons",
//       component: <LaserBeamButton />,
//     },
//     {
//       id: 2,
//       title: "Brutal Pop Checkbox",
//       category: "Checkboxes",
//       component: <BrutalPopCheckbox />,
//     },
//     {
//       id: 3,
//       title: "Cyber Agent Ring Card",
//       category: "Avatars",
//       component: <CyberAgentRing />,
//     },
//     {
//       id: 4,
//       title: "Facebook Skeleton Loader",
//       category: "Loaders",
//       component: <FacebookSkeletonLoader />,
//     },
//   ];

//   return (
//     <section
//       id="components"
//       className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-10 scroll-mt-20">
//       {/* Title Header with Motion */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="text-center space-y-2 ">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
//           Explore{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
//             UI Library
//           </span>
//         </h2>
//         <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
//           Clean, production-ready components built with React & Tailwind CSS.
//         </p>
//       </motion.div>

//       {/* 4 Live Components Cards Grid with Staggered Motion */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 px-5">
//         {teaserItems.map((item, index) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}>
//             <Link
//               to="/components"
//               className="group rounded-2xl bg-slate-500/50 border-2 border-slate-500/1 overflow-hidden backdrop-blur-md hover:border-cyan-500/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
//               {/* Live Component Preview Box (Replaces Static Image) */}
//               <div className="h-52 bg-slate-950/80 overflow-hidden relative flex items-center justify-center px-3 py-8 border-b border-white/5">
//                 <div className="w-full flex items-center justify-center scale-95 group-hover:scale-100 transition-transform duration-300 pointer-events-none">
//                   {item.component}
//                 </div>
//                 <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 border border-white/10 text-[10px] font-semibold text-cyan-400 backdrop-blur-sm z-10">
//                   {item.category}
//                 </span>
//               </div>

//               {/* Card Info Bar */}
//               <div className="p-4 flex items-center justify-between bg-slate-900/40">
//                 <h3 className="text-white font-bold text-sm group-hover:text-cyan-400 transition-colors line-clamp-1">
//                   {item.title}
//                 </h3>
//                 <HiOutlineArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>

//       {/* Explore All Components Button with Motion */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className="text-center pt-2">
//         <Link
//           to="/components"
//           className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-extrabold text-sm hover:shadow-lg hover:shadow-cyan-500/25 hover:gap-3 transition-all duration-300">
//           <span>Explore All Components</span>
//           <HiOutlineArrowRight className="w-4 h-4" />
//         </Link>
//       </motion.div>
//     </section>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";

// Import your 4 custom components
import LaserBeamButton from "../library/free/buttons/LaserBeamButton";
import BrutalPopCheckbox from "../library/free/checkboxes/BrutalPopCheckbox";
import CyberAgentRing from "../library/free/avatars/CyberAvatarPreview";
import FacebookSkeletonLoader from "../library/free/loaders/FacebookSkeletonLoader";

export default function HomeComponentsTeaser() {
  // Array containing the live components and metadata
  const teaserItems = [
    {
      id: 1,
      title: "Laser Beam Button",
      category: "Buttons",
      component: <LaserBeamButton />,
    },
    {
      id: 2,
      title: "Brutal Pop Checkbox",
      category: "Checkboxes",
      component: <BrutalPopCheckbox />,
    },
    // {
    //   id: 3,
    //   title: "Cyber Agent Ring Card",
    //   category: "Avatars",
    //   component: <CyberAgentRing />,
    // },
    {
      id: 4,
      title: "Facebook Skeleton Loader",
      category: "Loaders",
      component: <FacebookSkeletonLoader />,
    },
  ];

  return (
    <section
      id="components"
      className="py-20 px-4 sm:px-8 max-w-5xl mx-auto space-y-10 scroll-mt-0 text-slate-900">
      {/* Title Header with Motion (Left Aligned DevSync Style) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-left space-y-2 max-w-5xl mx-auto">
        <span className="font-mono text-xs text-slate-500/50 mb-0 block">
          // ui_components_showcase
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
          Explore UI Library
        </h2>
        <p className="text-slate-500 text-sm sm:text-base max-w-xl">
          Clean, production-ready components built with React & Tailwind CSS.
        </p>
      </motion.div>

      {/* 4 Live Components Cards Grid with Staggered Motion */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-6xl mx-auto px-0">
        {teaserItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}>
            <Link
              to="/components"
              className="group rounded-xl bg-slate-300/60 border-2 border-slate-100 hover:border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full mx-5 md:mx-0">
              {/* Live Component Preview Box */}
              <div className="h-56 bg-slate-50/70 overflow-hidden relative flex items-center justify-center px-3 py-10 border-b border-slate-200">
                <div className="w-full flex items-center justify-center scale-95 group-hover:scale-100 transition-transform duration-300 pointer-events-none">
                  {item.component}
                </div>
                <span className="absolute top-1 left-1 px-4 py-0.5 rounded-4xl bg-slate-900/60 border border-slate-700/20 text-[10px] font-mono font-semibold text-white z-10">
                  {item.category.toLowerCase()}
                </span>
              </div>

              {/* Card Info Bar */}
              <div className="p-4 flex items-center justify-between bg-white">
                <h3 className="text-slate-900/50 font-mono font-bold text-xs group-hover:text-slate-600 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <HiOutlineArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Explore All Components Button with Motion & Glitch Style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center pt-0">
        <Link to="/components">
          <motion.button
            whileHover={{ skewX: [-5, 5, -2, 0], scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-slate-900/20 border-2 border-black-900/10 text-black-400 hover:text-cyan-400 font-mono text-xs font-bold rounded-xl shadow-[0_0_15px_rgba(244,63,94,0.05)] cursor-pointer inline-flex items-center space-x-2 transition-colors">
            <span>SYS_GLITCH()</span>
            <span className="text-slate-400">→</span>
            <span className="text-white">Explore All Components</span>
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
