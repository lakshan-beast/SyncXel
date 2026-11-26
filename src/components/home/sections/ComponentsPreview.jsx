// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { HiOutlineArrowRight } from "react-icons/hi2";
// import { FaPaw } from "react-icons/fa";

// // Import your custom components
// import LaserBeamButton from "../../library/free/buttons/LaserBeamButton";
// import BrutalPopCheckbox from "../../library/free/checkboxes/BrutalPopCheckbox";
// import FacebookSkeletonLoader from "../../library/free/loaders/FacebookSkeletonLoader";

// export default function HomeComponentsTeaser() {
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

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       id="components-prev"
//       className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 scroll-mt-20 text-slate-900 border-t-2 border-slate-200">
//       <div className="relative z-10 space-y-12 max-w-6xl mx-auto">
//         {/* Title Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="space-y-3">
//           <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
//             <motion.span
//               initial={{ opacity: 0, x: -15 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="font-mono text-xs text-slate-400 block">
//               // ui_components_showcase
//             </motion.span>

//             <motion.div
//               initial={{ opacity: 0, x: 15 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="inline-flex items-center w-fit space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono shadow-xs">
//               <FaPaw className="w-3.5 h-3.5 text-slate-600" />
//               <span>ui_library.config</span>
//             </motion.div>
//           </div>

//           <motion.h2
//             initial={{ opacity: 0, y: -10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-left sm:text-center pt-1 sm:pt-3">
//             Explore UI Library
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               type: "spring",
//               stiffness: 400,
//               damping: 17,
//             }}
//             className="text-sm sm:text-base text-slate-500 leading-tight max-w-3xl text-left sm:text-center mx-auto font-baloo">
//             Clean, high-performance, and production-ready components built with
//             React & Tailwind CSS. Designed to accelerate your frontend workflow
//             with seamless scalability.
//           </motion.p>
//         </motion.div>

//         {/* Live Components Cards Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 px-3 sm:px-0">
//           {teaserItems.map((item, index) => (
//             <motion.div key={item.id} variants={itemVariants}>
//               <Link
//                 to="/components"
//                 className="group rounded-2xl bg-white border border-slate-200/50 hover:border-slate-300/50 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
//                 {/* Live Component Preview Box */}
//                 <div className="h-60 bg-slate-50/70 overflow-hidden relative flex items-center justify-center px-4 py-10 border-b border-slate-100">
//                   <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="w-full flex items-center justify-center scale-95 group-hover:scale-100 transition-transform duration-300 pointer-events-none">
//                     {item.component}
//                   </motion.div>
//                   <span

//                     className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs border border-slate-700/30 text-[10px] font-mono font-semibold text-white z-10 shadow-xs">
//                     {item.category.toLowerCase()}
//                   </span>
//                 </div>

//                 {/* Card Info Bar */}
//                 <div className="px-5 py-2 flex items-center justify-between bg-white">
//                   <div>
//                     <motion.span
//                       initial={{ opacity: 0, x: -15 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.6 }}
//                       className="font-mono text-[10px] text-slate-400 block mb-1">
//                       // component_0{index + 1}
//                     </motion.span>

//                     <motion.h3
//                       initial={{ opacity: 0, x: -10 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.6 }}
//                       className="text-slate-950 font-bold text-sm sm:text-base tracking-tight group-hover:text-slate-700 transition-colors">
//                       {item.title}
//                     </motion.h3>
//                   </div>

//                   <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 border border-slate-200">
//                     <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Explore All Components Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-center">
//           <Link to="/components" className="inline-block">
//             <motion.button
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               transition={{ type: "spring", stiffness: 400 }}
//               className="group inline-flex items-center space-x-3 px-6 py-3.5 bg-slate-900 border border-slate-900 text-white font-mono text-xs sm:text-sm font-bold rounded-xl hover:bg-slate-800 shadow-xs cursor-pointer transition-all">
//               <span className="text-xs tracking-tight">
//                 const components = () =&gt; explore_ui();
//               </span>
//               <HiOutlineArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1.5 transition-transform duration-300" />
//             </motion.button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineArrowRight,
  HiOutlineArrowUpRight,
  HiOutlineSquares2X2,
  HiOutlineSparkles,
} from "react-icons/hi2";

import ComponentsPreviewHeader from "./ComponentsPreviewHeader";

import LaserBeamButton from "../../../library/free/buttons/LaserBeamButton";
import BrutalPopCheckbox from "../../../library/free/checkboxes/BrutalPopCheckbox";
import FacebookSkeletonLoader from "../../../library/free/loaders/FacebookSkeletonLoader";

const categories = ["All", "Buttons", "Inputs", "Loaders"];

const components = [
  {
    id: 1,
    name: "Laser Beam Button",
    category: "Buttons",
    description:
      "A futuristic button with a glowing laser effect and interactive hover animation.",
    component: <LaserBeamButton />,
    featured: true,
    number: "01",
    tag: "Interactive",
  },
  {
    id: 2,
    name: "Brutal Pop Checkbox",
    category: "Inputs",
    description:
      "A bold checkbox interaction with a playful brutalist-inspired visual style.",
    component: <BrutalPopCheckbox />,
    featured: false,
    number: "02",
    tag: "Input",
  },
  {
    id: 4,
    name: "Facebook Skeleton Loader",
    category: "Loaders",
    description:
      "A smooth loading placeholder designed to improve perceived loading experience.",
    component: <FacebookSkeletonLoader />,
    featured: false,
    number: "03",
    tag: "Loading",
  },
];

function PreviewCard({ item, index, reduceMotion }) {
  const isFeatured = index === 0;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: reduceMotion ? 0 : index * 0.12,
      }}
      className={`group relative overflow-hidden rounded-[28px] border border-black/[0.07] bg-white transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/90 ${
        isFeatured ? "lg:col-span-7" : "lg:col-span-5"
      }`}>
      {/* Card top */}
      <div className="flex items-center justify-between border-b border-black/5 px-6 py-5 dark:border-white/[0.07] sm:px-7">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-slate-600 dark:text-slate-300">
            / {item.number}
          </span>

          <span className="h-1 w-1 rounded-full bg-blue-500" />

          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
            {item.category}
          </span>
        </div>

        <span className="rounded-full border border-black/[0.07] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/50 dark:border-white/5 dark:text-white/50">
          {item.tag}
        </span>
      </div>

      {/* Live preview area */}
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-[#f7f8fa] p-6 dark:bg-[#1b1d21] sm:p-8 ${
          isFeatured ? "min-h-67.5 lg:min-h-82.5" : "min-h-57.5"
        }`}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.45] dark:opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(#9ca3af 0.8px, transparent 0.8px)",
            backgroundSize: "19px 19px",
          }}
        />

        <div
          className={`relative z-10 flex w-full items-center justify-center ${
            item.id === 4 ? "max-w-97.5" : "max-w-full"
          }`}>
          {item.component}
        </div>

        <div className="pointer-events-none absolute bottom-4 right-5 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-slate-700 dark:text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Live Preview
        </div>
      </div>

      {/* Card bottom */}
      <div className="flex flex-col justify-between gap-5 p-6 sm:flex-row sm:items-end sm:p-7">
        <div className="max-w-97.5">
          <h3 className="text-lg font-semibold tracking-tight text-[#171717] dark:text-white sm:text-xl">
            {item.name}
          </h3>

          <p className="mt-2 text-sm leading-tight text-slate-700 dark:text-slate-300">
            {item.description}
          </p>
        </div>

        <Link
          to="/components"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#202020] transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
          Explore
          <HiOutlineArrowUpRight className="text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}

export default function HomeComponentsTeaser() {
  const [activeCategory, setActiveCategory] = useState("All");
  const reduceMotion = useReducedMotion();

  const filteredComponents = useMemo(() => {
    if (activeCategory === "All") return components;

    return components.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="components-prev"
      className="relative overflow-hidden bg-white px-5 py-24 text-[#171717] dark:bg-slate-950/80 dark:text-white sm:px-8 lg:px-12 lg:py-32">
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-105 w-105 rounded-full bg-blue-500/5 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        {/* <div className="mb-12 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 dark:border-white/5 dark:bg-white/[0.03]">
              <HiOutlineSparkles className="text-sm text-blue-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/60 dark:text-white/60">
                Explore the library
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Better building blocks.
              <br />
              <span className="text-slate-600 dark:text-slate-300">
                Better experiences.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-tight text-black/55 dark:text-white/45">
              Explore carefully crafted UI components, test their interactions,
              and find the right building blocks for your next project.
            </p>
          </div>

          <Link
            to="/components"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#171717] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 dark:bg-white dark:text-black dark:hover:bg-blue-500 dark:hover:text-white">
            View all components
            <HiOutlineArrowRight className="text-lg" />
          </Link>
        </div> */}

        <ComponentsPreviewHeader />

        {/* Category filters */}
        <div className="mb-8 mt-6 flex flex-wrap items-center gap-2">
          <div className="mr-2 flex items-center gap-2 text-xs font-medium text-blue-700 dark:text-slate-300">
            <HiOutlineSquares2X2 aria-hidden="true"  className="text-base" />
            Filter
          </div>

          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#171717] text-white dark:bg-white dark:text-black"
                    : "border border-black/10 text-black/70 hover:border-black/20 hover:text-black dark:border-white/20 dark:text-slate-300 dark:hover:border-white/40 dark:hover:text-white"
                }`}>
                {category}
              </button>
            );
          })}
        </div>

        {/* Component cards */}
        <motion.div layout className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {filteredComponents.map((item, index) => (
            <PreviewCard
              key={item.id}
              item={item}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-10 max-w-3xl mx-auto flex flex-col items-start justify-between gap-5 rounded-3xl border border-black/[0.07] bg-[#f8f9fb] p-7 dark:border-white/10 dark:bg-[#141414] sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="text-lg font-semibold tracking-tight">
              Looking for more components?
            </p>
            <p className="mt-1 text-sm leading-tight text-slate-700 dark:text-slate-300">
              Discover the complete collection in the SyncXel library.
            </p>
          </div>

          <Link
            to="/components"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all hover:gap-3 dark:text-blue-400">
            Explore the library
            <HiOutlineArrowRight aria-hidden="true"  />
          </Link>
        </div>
      </div>
    </section>
  );
}
