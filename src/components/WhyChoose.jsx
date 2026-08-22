// import React from "react";
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
//       icon: <HiOutlineBolt className="w-6 h-6 text-syncxel-cyan" />,
//       title: "Ultra-Fast Performance",
//       description:
//         "Zero heavy bloatware. Built with highly optimized Tailwind CSS and React for lightning-fast page loading.",
//     },
//     {
//       icon: <HiOutlinePaintBrush className="w-6 h-6 text-syncxel-cyan" />,
//       title: "Modern Dark Aesthetics",
//       description:
//         "Designed specifically for tech startups and modern developers with high-contrast glow and glassmorphism effects.",
//     },
//     {
//       icon: (
//         <HiOutlineDevicePhoneMobile className="w-6 h-6 text-syncxel-cyan" />
//       ),
//       title: "100% Fully Responsive",
//       description:
//         "Pixel-perfect responsiveness rigorously tested on mobile, tablet, and desktop viewports.",
//     },
//     {
//       icon: (
//         <HiOutlineCodeBracketSquare className="w-6 h-6 text-syncxel-cyan" />
//       ),
//       title: "Clean Production Code",
//       description:
//         "Modular, well-structured React code crafted for seamless copy-pasting and instant integration.",
//     },
//     {
//       icon: <HiOutlineShieldCheck className="w-6 h-6 text-syncxel-cyan" />,
//       title: "SEO & Accessiblity Ready",
//       description:
//         "Follows web accessibility (WCAG) standards and SEO best practices to ensure high search ranking.",
//     },
//     {
//       icon: <HiOutlineRocketLaunch className="w-6 h-6 text-syncxel-cyan" />,
//       title: "Agile Client Delivery",
//       description:
//         "Rapid turnaround times, transparent weekly progress demos, and dedicated post-launch engineering support.",
//     },
//   ];

//   return (
//     <section
//       id="features"
//       className="relative py-20 px-4 sm:px-8 overflow-hidden">
//       {/* background accent glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-syncxel-blue/5 blur-[160px] pointer-events-none rounded-full" />
//       <div className="max-w-7xl mx-auto space-y-16 relative z-10">
//         {/* Section Header */}
//         <div className="text-center space-y-4 max-w-3xl mx-auto">
//           <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-syncxel-cyan/10 border border-syncxel-cyan/20 text-syncxel-cyan text-xs font-semibold">
//             <HiOutlineSparkles className="w-4 h-4" />
//             <span>Why Choose SyncXel</span>
//           </div>

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
//             Engineered for{" "}
//             <span className="text-transparent bg-clip-text bg-syncxel-gradient">
//               Speed, Quality & Precision
//             </span>
//           </h2>

//           <p className="text-syncxel-textMuted text-sm sm:text-base leading-relaxed">
//             Whether you are using our pre-built component blocks or hiring us
//             for custom development, we maintain the highest engineering
//             standards.
//           </p>
//         </div>

//         {/* 6 Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//           {features.map((feature, idx) => (
//             <div
//               key={idx}
//               className="group relative py-3 px-8 rounded-3xl bg-syncxel-card/50 border-2 border-syncxel-border/60 hover:border-syncxel-cyan/40 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between">
//               <div className="space-y-4">
//                 {/* Icon Box */}
//                 <div className="w-12 h-12 rounded-xl bg-syncxel-dark border border-syncxel-border flex items-center justify-center group-hover:scale-110 group-hover:border-syncxel-cyan/30 transition-all duration-300">
//                   {feature.icon}
//                 </div>

//                 <h3 className="text-xl font-bold text-white font-heading">
//                   {feature.title}
//                 </h3>

//                 <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>

//               {/* Bottom Subtle Indicator line */}
//               <div className="mt-3 pt-4 pb-2 border-t border-syncxel-border/30 flex items-center justify-between text-xs text-white/85">
//                 <span className="group-hover:text-syncxel-cyan transition-colors">
//                   SyncXel Standard
//                 </span>
//                 <span className="w-2 h-2 rounded-full bg-syncxel-cyan/30 group-hover:bg-syncxel-cyan transition-colors" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import {
  HiOutlineBolt,
  HiOutlinePaintBrush,
  HiOutlineDevicePhoneMobile,
  HiOutlineCodeBracketSquare,
  HiOutlineShieldCheck,
  HiOutlineRocketLaunch,
  HiOutlineSparkles,
} from "react-icons/hi2";

export default function Features() {
  const features = [
    {
      icon: <HiOutlineBolt className="w-6 h-6 text-cyan-400" />,
      title: "Ultra-Fast Performance",
      description:
        "Zero heavy bloatware. Built with highly optimized Tailwind CSS and React for lightning-fast page loading.",
    },
    {
      icon: <HiOutlinePaintBrush className="w-6 h-6 text-cyan-400" />,
      title: "Modern Dark Aesthetics",
      description:
        "Designed specifically for tech startups and modern developers with high-contrast glow and glassmorphism effects.",
    },
    {
      icon: <HiOutlineDevicePhoneMobile className="w-6 h-6 text-cyan-400" />,
      title: "100% Fully Responsive",
      description:
        "Pixel-perfect responsiveness rigorously tested on mobile, tablet, and desktop viewports.",
    },
    {
      icon: <HiOutlineCodeBracketSquare className="w-6 h-6 text-cyan-400" />,
      title: "Clean Production Code",
      description:
        "Modular, well-structured React code crafted for seamless copy-pasting and instant integration.",
    },
    {
      icon: <HiOutlineShieldCheck className="w-6 h-6 text-cyan-400" />,
      title: "SEO & Accessibility Ready",
      description:
        "Follows web accessibility (WCAG) standards and SEO best practices to ensure high search ranking.",
    },
    {
      icon: <HiOutlineRocketLaunch className="w-6 h-6 text-cyan-400" />,
      title: "Agile Client Delivery",
      description:
        "Rapid turnaround times, transparent weekly progress demos, and dedicated post-launch engineering support.",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-20 px-4 sm:px-8 overflow-hidden scroll-mt-20">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <HiOutlineSparkles className="w-4 h-4" />
            <span>Why Choose SyncXel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
              Speed, Quality & Precision
            </span>
          </h2>

          <p className="text-slate-300/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Whether you are using our pre-built component blocks or hiring us
            for custom development, we maintain the highest engineering
            standards.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-7 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md flex flex-col justify-between">
              <div className="space-y-4">
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator Line */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="group-hover:text-cyan-400 transition-colors font-medium">
                  SyncXel Standard
                </span>
                <span className="w-2 h-2 rounded-full bg-cyan-500/30 group-hover:bg-cyan-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
