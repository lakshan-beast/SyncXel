// import React from "react";
// import { motion } from "framer-motion";
// import {
//   HiOutlineBolt,
//   HiOutlinePaintBrush,
//   HiOutlineDevicePhoneMobile,
//   HiOutlineCodeBracketSquare,
//   HiOutlineShieldCheck,
//   HiOutlineRocketLaunch,
//   HiOutlineSparkles,
// } from "react-icons/hi2";

// export default function Features() {
//   const features = [
//     {
//       icon: (
//         <HiOutlineBolt className="w-6 h-6 text-cyan-400 group-hover:text-slate-950 transition-colors duration-300" />
//       ),
//       title: "Ultra-Fast Performance",
//       description:
//         "Zero heavy bloatware. Built with highly optimized Tailwind CSS and React for lightning-fast page loading.",
//     },
//     {
//       icon: (
//         <HiOutlinePaintBrush className="w-6 h-6 text-cyan-400 group-hover:text-slate-950 transition-colors duration-300" />
//       ),
//       title: "Modern Dark Aesthetics",
//       description:
//         "Designed specifically for tech startups and modern developers with high-contrast glow and glassmorphism effects.",
//     },
//     {
//       icon: (
//         <HiOutlineDevicePhoneMobile className="w-6 h-6 text-cyan-400 group-hover:text-slate-950 transition-colors duration-300" />
//       ),
//       title: "100% Fully Responsive",
//       description:
//         "Pixel-perfect responsiveness rigorously tested on mobile, tablet, and desktop viewports.",
//     },
//     {
//       icon: (
//         <HiOutlineCodeBracketSquare className="w-6 h-6 text-cyan-400 group-hover:text-slate-950 transition-colors duration-300" />
//       ),
//       title: "Clean Production Code",
//       description:
//         "Modular, well-structured React code crafted for seamless copy-pasting and instant integration.",
//     },
//     {
//       icon: (
//         <HiOutlineShieldCheck className="w-6 h-6 text-cyan-400 group-hover:text-slate-950 transition-colors duration-300" />
//       ),
//       title: "SEO & Accessibility Ready",
//       description:
//         "Follows web accessibility (WCAG) standards and SEO best practices to ensure high search ranking.",
//     },
//     {
//       icon: (
//         <HiOutlineRocketLaunch className="w-6 h-6 text-cyan-400 group-hover:text-slate-950 transition-colors duration-300" />
//       ),
//       title: "Agile Client Delivery",
//       description:
//         "Rapid turnaround times, transparent weekly progress demos, and dedicated post-launch engineering support.",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.12,
//       },
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
//       id="features"
//       className="relative py-24 px-4 sm:px-8 overflow-hidden scroll-mt-20">
//       {/* Background Accent Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[160px] pointer-events-none rounded-full" />

//       <div className="max-w-7xl mx-auto space-y-16 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center space-y-4 max-w-3xl mx-auto">
//           <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold shadow-sm">
//             <HiOutlineSparkles className="w-4 h-4" />
//             <span>Why Choose SyncXel</span>
//           </div>

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
//             Engineered for{" "}
//             <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500">
//               Speed, Quality & Precision
//             </span>
//           </h2>

//           <p className="text-slate-300/80 text-sm sm:text-base leading-tight max-w-2xl mx-auto">
//             Whether you are using our pre-built component blocks or hiring us
//             for custom development, we maintain the highest engineering
//             standards.
//           </p>
//         </motion.div>

//         {/* 6 Features Grid with Framer Motion Stagger */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 ">
//           {features.map((feature, idx) => (
//             <motion.div
//               key={idx}
//               variants={itemVariants}
//               whileHover={{ y: -6, scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               className="group relative py-5 px-10 rounded-3xl bg-slate-800/50 border-2 border-white/10 hover:border-cyan-500/5 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between">
//               <div className="space-y-2">
//                 {/* Icon Box with Hover Fill Effect */}
//                 <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300 shadow-md">
//                   {feature.icon}
//                 </div>

//                 <h3 className="text-xl font-bold text-white tracking-tight">
//                   {feature.title}
//                 </h3>

//                 <p className="text-slate-400 text-xs sm:text-sm leading-tight">
//                   {feature.description}
//                 </p>
//               </div>

//               {/* Bottom Subtle Indicator Line */}
//               <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
//                 <span className="group-hover:text-cyan-400 transition-colors font-medium">
//                   SyncXel Standard
//                 </span>
//                 <span className="w-2 h-2 rounded-full bg-cyan-500/30 group-hover:bg-cyan-400/60 transition-colors" />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineBolt,
  HiOutlinePaintBrush,
  HiOutlineDevicePhoneMobile,
  HiOutlineCodeBracketSquare,
  HiOutlineShieldCheck,
  HiOutlineRocketLaunch,
  HiBookmark,
} from "react-icons/hi2";

export default function Features() {
  const features = [
    {
      icon: HiOutlineBolt, // Component reference (Fixed)
      title: "Ultra-Fast Performance",
      description:
        "Zero heavy bloatware. Built with highly optimized Tailwind CSS and React for lightning-fast page loading.",
    },
    {
      icon: HiOutlinePaintBrush, // Component reference (Fixed)
      title: "Modern Minimalist Aesthetics",
      description:
        "Designed specifically for tech startups and modern developers with high-contrast slate and clean layout structures.",
    },
    {
      icon: HiOutlineDevicePhoneMobile, // Component reference (Fixed)
      title: "100% Fully Responsive",
      description:
        "Pixel-perfect responsiveness rigorously tested on mobile, tablet, and desktop viewports.",
    },
    {
      icon: HiOutlineCodeBracketSquare, // Component reference (Fixed)
      title: "Clean Production Code",
      description:
        "Modular, well-structured React code crafted for seamless copy-pasting and instant integration.",
    },
    {
      icon: HiOutlineShieldCheck, // Component reference (Fixed)
      title: "SEO & Accessibility Ready",
      description:
        "Follows web accessibility (WCAG) standards and SEO best practices to ensure high search ranking.",
    },
    {
      icon: HiOutlineRocketLaunch, // Component reference (Fixed)
      title: "Agile Client Delivery",
      description:
        "Rapid turnaround times, transparent weekly progress demos, and dedicated post-launch engineering support.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
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
      id="features"
      className="py-16 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto relative overflow-hidden bg-white text-slate-900 font-mono scroll-mt-20">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 p-2 sm:p-8 max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left space-y-3">
          <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
            <span className="font-mono text-xs text-slate-500/50 mb-0 block">
              // core_engineering_standards
            </span>

            <div className="inline-flex items-center w-fit space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono shadow-xs">
              <HiBookmark className="w-3.5 h-3.5 text-slate-600" />
              <span>features_module.config</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Engineered for{" "}
            <span className="text-slate-900">Speed, Quality & Precision</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-tight max-w-6xl font-baloo">
            Whether you are using our pre-built component blocks or hiring us
            for custom development, we maintain the highest engineering
            standards.
          </p>
        </motion.div>

        {/* 6 Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-white px-9 py-5 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center mb-0 border border-slate-300 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="font-mono text-[10px] text-slate-500/50 block mb-2">
                    // feature_0{idx + 1}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2 tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 leading-tight font-baloo">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-baloo text-slate-500 font-bold">
                  <span className="group-hover:text-slate-600 transition-colors">
                    SyncXel Standard
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 animate-ping group-hover:bg-slate-900 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
