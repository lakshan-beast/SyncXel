// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { HiOutlineArrowRight } from "react-icons/hi2";
// import { FaPaw } from "react-icons/fa";

// // Import your 4 custom components
// import LaserBeamButton from "../library/free/buttons/LaserBeamButton";
// import BrutalPopCheckbox from "../library/free/checkboxes/BrutalPopCheckbox";
// import FacebookSkeletonLoader from "../library/free/loaders/FacebookSkeletonLoader";

// export default function HomeComponentsTeaser() {
//   // Array containing the live components and metadata
//   const teaserItems = [
//     {
//       id: 1,
//       title: "Laser Beam Button",
//       category: "Buttons",
//       component: <LaserBeamButton />,
//       description:
//         "Cyberpunk action button wrapped with a continuous spinning laser beam border.",
//     },
//     {
//       id: 2,
//       title: "Brutal Pop Checkbox",
//       category: "Checkboxes",
//       component: <BrutalPopCheckbox />,
//       description:
//         "High-contrast geometric brutalist checkbox with sharp directional drop-shadows.",
//     },
//     {
//       id: 4,
//       title: "Facebook Skeleton Loader",
//       category: "Loaders",
//       component: <FacebookSkeletonLoader />,
//       description:
//         "Horizontal sweeping shimmer card loader powered by Framer Motion placeholders.",
//     },
//   ];

//   return (
//     <section
//       id="components"
//       className="py-10 px-4 sm:px-8 max-w-7xl mx-auto space-y-10 scroll-mt-2 text-slate-900 ">
//       {/* Title Header with Motion (Left Aligned DevSync Style) */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="text-left space-y-2 max-w-6xl mx-auto">
//         <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
//           <span className="font-mono text-xs text-slate-500/50 mb-0 block">
//             // ui_components_showcase
//           </span>

//           <div className="inline-flex items-center w-fit space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono shadow-xs">
//             <FaPaw className="w-3.5 h-3.5 text-slate-600" />
//             <span>ui_library.config</span>
//           </div>
//         </div>

//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
//           Explore UI Library
//         </h2>
//         <p className="text-sm sm:text-base text-slate-500 leading-tight max-w-6xl">
//           Clean, high-performance, and production-ready components built with
//           React & Tailwind CSS. Designed to accelerate your frontend workflow
//           with seamless scalability.
//         </p>
//       </motion.div>

//       {/* 4 Live Components Cards Grid with Staggered Motion */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 max-w-6xl mx-auto px-0">
//         {teaserItems.map((item, index) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}>
//             <Link
//               to="/components"
//               className="group rounded-xl bg-slate-300/60 border-2 border-slate-100 hover:border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full mx-5 md:mx-0">
//               {/* Live Component Preview Box */}
//               <div className="h-60 bg-slate-50/70 overflow-hidden relative flex items-center justify-center px-3 py-10 border-b border-slate-200">
//                 <div className="w-full flex items-center justify-center scale-95 group-hover:scale-100 transition-transform duration-300 pointer-events-none">
//                   {item.component}
//                 </div>
//                 <span className="absolute top-1 left-1 px-4 py-0.5 rounded-4xl bg-slate-900/60 border border-slate-700/20 text-[10px] font-mono font-semibold text-white z-10">
//                   {item.category.toLowerCase()}
//                 </span>
//               </div>

//               {/* Card Info Bar */}
//               <div className="p-4 flex items-center justify-between bg-white">
//                 <div>
//                   <h3 className="text-slate-900/50 font-mono font-bold text-xs group-hover:text-slate-600 transition-colors line-clamp-1">
//                     {item.title}
//                   </h3>
//                   {/* <p className="text-slate-500 leading-tight mt-2 px-2">{item.description}</p> */}
//                 </div>
//                 <HiOutlineArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>

//       {/* Explore All Components Button with Motion & Glitch Style */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className="text-center pt-0">
//         <Link to="/components">
//           <motion.button
//             whileHover={{ skewX: [-5, 5, -2, 0], scale: 1.03 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 bg-slate-900/20 border-2 border-black-900/10 text-black-400 hover:text-cyan-400 font-mono text-xs font-bold rounded-xl shadow-[0_0_15px_rgba(244,63,94,0.05)] cursor-pointer inline-flex items-center space-x-2 transition-colors">
//             {/* <span>SYS_GLITCH()</span>
//             <span className="text-slate-400">→</span>
//             <span className="text-white">Explore All Components</span> */}

//             <span className="hidden lg:inline text-xs tracking-tight">
//               const components = () =&gt; explore_ui();
//             </span>
//             {/* Mobile view: Clean text */}
//             <span className="lg:hidden text-xs">explore_ui()</span>
//             <HiOutlineArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1.5 transition-transform duration-300" />
//           </motion.button>
//         </Link>
//       </motion.div>
//     </section>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { FaPaw } from "react-icons/fa";

// Import your custom components
import LaserBeamButton from "../library/free/buttons/LaserBeamButton";
import BrutalPopCheckbox from "../library/free/checkboxes/BrutalPopCheckbox";
import FacebookSkeletonLoader from "../library/free/loaders/FacebookSkeletonLoader";

export default function HomeComponentsTeaser() {
  const teaserItems = [
    {
      id: 1,
      title: "Laser Beam Button",
      category: "Buttons",
      component: <LaserBeamButton />,
      description:
        "Cyberpunk action button wrapped with a continuous spinning laser beam border.",
    },
    {
      id: 2,
      title: "Brutal Pop Checkbox",
      category: "Checkboxes",
      component: <BrutalPopCheckbox />,
      description:
        "High-contrast geometric brutalist checkbox with sharp directional drop-shadows.",
    },
    {
      id: 4,
      title: "Facebook Skeleton Loader",
      category: "Loaders",
      component: <FacebookSkeletonLoader />,
      description:
        "Horizontal sweeping shimmer card loader powered by Framer Motion placeholders.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="components"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 scroll-mt-20 text-slate-900">
      <div className="relative z-10 space-y-12 max-w-6xl mx-auto">
        {/* Title Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3">
          <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
            <span className="font-mono text-xs text-slate-400 block">
              // ui_components_showcase
            </span>

            <div className="inline-flex items-center w-fit space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono shadow-xs">
              <FaPaw className="w-3.5 h-3.5 text-slate-600" />
              <span>ui_library.config</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-left sm:text-center pt-1 sm:pt-3">
            Explore UI Library
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-tight max-w-3xl text-left sm:text-center mx-auto font-baloo">
            Clean, high-performance, and production-ready components built with
            React & Tailwind CSS. Designed to accelerate your frontend workflow
            with seamless scalability.
          </p>
        </motion.div>

        {/* Live Components Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 px-3 sm:px-0">
          {teaserItems.map((item, index) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Link
                to="/components"
                className="group rounded-2xl bg-white border border-slate-200/50 hover:border-slate-300/50 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
                {/* Live Component Preview Box */}
                <div className="h-60 bg-slate-50/70 overflow-hidden relative flex items-center justify-center px-4 py-10 border-b border-slate-100">
                  <div className="w-full flex items-center justify-center scale-95 group-hover:scale-100 transition-transform duration-300 pointer-events-none">
                    {item.component}
                  </div>
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs border border-slate-700/30 text-[10px] font-mono font-semibold text-white z-10 shadow-xs">
                    {item.category.toLowerCase()}
                  </span>
                </div>

                {/* Card Info Bar */}
                <div className="px-5 py-2 flex items-center justify-between bg-white">
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 block mb-1">
                      // component_0{index + 1}
                    </span>
                    <h3 className="text-slate-950 font-bold text-sm sm:text-base tracking-tight group-hover:text-slate-700 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 border border-slate-200">
                    <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore All Components Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center">
          <Link to="/components" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="group inline-flex items-center space-x-3 px-6 py-3.5 bg-slate-900 border border-slate-900 text-white font-mono text-xs sm:text-sm font-bold rounded-xl hover:bg-slate-800 shadow-xs cursor-pointer transition-all">
              <span className="hidden lg:inline text-xs tracking-tight">
                const components = () =&gt; explore_ui();
              </span>
              <span className="lg:hidden text-xs">explore_ui()</span>
              <HiOutlineArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
