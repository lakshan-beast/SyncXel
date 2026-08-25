// import {
//   HiOutlineUser,
//   HiOutlineSparkles,
//   HiOutlineCodeBracket,
//   HiOutlineCheckBadge,
//   HiOutlineChartBar,
// } from "react-icons/hi2";
// import { SiGithub } from "react-icons/si";
// import { SlGlobe } from "react-icons/sl";
// import { RxLinkedinLogo } from "react-icons/rx";

// import HeroIamge from "/hero.jpg";

// export default function TeamSection() {
//   const stats = [
//     { value: "10k+", label: "Code Snippets Delivered" },
//     { value: "100/100", label: "Lighthouse Performance" },
//     { value: "100%", label: "Production-Ready Standard" },
//     { value: "24/7", label: "Agile Client Delivery" },
//   ];

//   return (
//     <section className="py-20 px-4 sm:px-8 relative overflow-hidden">
//       {/* Background Neon Accent Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-syncxel-cyan/5 blur-[160px] pointer-events-none rounded-full" />

//       <div className="max-w-7xl mx-auto space-y-20 relative z-10">
//         {/* 1. STATS / METRICS BAR WITH HEADING */}
//         <div className="space-y-10">
//           {/* Stats Header */}
//           <div className="text-center space-y-3 max-w-2xl mx-auto">
//             <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-syncxel-cyan/10 border border-syncxel-cyan/20 text-syncxel-cyan text-xs font-semibold">
//               <HiOutlineChartBar className="w-4 h-4" />
//               <span>Proven Impact & Metrics</span>
//             </div>

//             <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
//               Driven by Numbers, Engineered for{" "}
//               <span className="text-transparent bg-clip-text bg-syncxel-gradient">
//                 Excellence
//               </span>
//             </h2>

//             <p className="text-syncxel-text-muted text-xs sm:text-sm leading-relaxed">
//               Real metrics that reflect our commitment to speed, code quality,
//               and reliability.
//             </p>
//           </div>

//           {/* 1. STATS / METRICS BAR */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
//             {stats.map((stat, idx) => (
//               <div
//                 key={idx}
//                 className="p-6 rounded-2xl bg-syncxel-card/50 border border-syncxel-border/60 text-center space-y-2 backdrop-blur-sm hover:border-syncxel-cyan/30 transition-all duration-300">
//                 <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-syncxel-gradient font-heading">
//                   {stat.value}
//                 </div>
//                 <div className="text-xs sm:text-sm text-syncxel-text-muted font-medium">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 2. MEET THE FOUNDER SECTION */}
//         <div className="max-w-4xl mx-auto space-y-10">
//           {/* Section Header */}
//           <div className="text-center space-y-4">
//             <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-syncxel-cyan/10 border border-syncxel-cyan/20 text-syncxel-cyan text-xs font-semibold">
//               <HiOutlineUser className="w-4 h-4" />
//               <span>Behind SyncXel</span>
//             </div>

//             <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight ">
//               Meet the
//               <span className="text-transparent bg-clip-text bg-syncxel-gradient ml-3">
//                 Founder & Architect
//               </span>
//             </h2>

//             <p className="text-syncxel-text-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
//               Building modern digital products with a strong focus on
//               high-performance code, clean UI architecture, and seamless user
//               experiences.
//             </p>
//           </div>

//           {/* SOLO FOUNDER CARD */}
//           <div className="relative p-8 sm:p-12 rounded-3xl bg-syncxel-card/70 border border-syncxel-border/80 shadow-2xl backdrop-blur-xl hover:border-syncxel-cyan/40 transition-all duration-300">
//             <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
//               <img
//                 src={HeroIamge}
//                 alt=""
//                 className="w-32 h-32 sm:w-40 sm:h-40 rounded-4xl"
//               />

//               {/* Founder Bio & Details */}
//               <div className="space-y-4 text-center md:text-left flex-1">
//                 <div className="space-y-1">
//                   <div className="inline-flex items-center space-x-2">
//                     <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
//                       Lead Web Engineer
//                     </h3>
//                     <HiOutlineCheckBadge
//                       className="w-6 h-6 text-syncxel-cyan"
//                       title="Verified Creator"
//                     />
//                   </div>
//                   <p className="text-syncxel-cyan font-semibold text-sm">
//                     Founder & Lead Web Engineer @ SyncXel
//                   </p>
//                 </div>

//                 <p className="text-syncxel-text-muted text-sm sm:text-base leading-relaxed font-body">
//                   Passionate about crafting high-performance web applications,
//                   clean code, and modern dark aesthetics. Building SyncXel to
//                   help developers code faster and businesses launch
//                   production-ready web platforms.
//                 </p>

//                 {/* Tech Highlights Tags */}
//                 <div className="flex flex-wrap gap-2 pt-1 justify-center md:justify-start">
//                   {[
//                     "React",
//                     // "Next.js",
//                     "Tailwind CSS",
//                     "Frontend Dev",
//                     "UI/UX Architecture",
//                   ].map((tag, tIdx) => (
//                     <span
//                       key={tIdx}
//                       className="px-3 py-1 rounded-lg bg-syncxel-dark/90 border border-syncxel-border text-xs font-medium text-syncxel-text-muted">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Social Links */}
//                 <div className="pt-1 flex items-center justify-center md:justify-start space-x-2">
//                   <a
//                     href="https://github.com/lakshan-beast"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="p-2.5 rounded-xl bg-syncxel-dark border border-syncxel-border text-syncxel-text-muted hover:text-white hover:border-syncxel-cyan/40 transition-all"
//                     title="GitHub Profile">
//                     <SiGithub className="w-5 h-5" />
//                   </a>
//                   <a
//                     href="https://www.linkedin.com/in/lakshan-sandeepa"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="p-2.5 rounded-xl bg-syncxel-dark border border-syncxel-border text-syncxel-text-muted hover:text-white hover:border-syncxel-cyan/40 transition-all"
//                     title="LinkedIn Profile">
//                     <RxLinkedinLogo className="w-5 h-5" />
//                   </a>
//                   <a
//                     href="https://lakshan-sandeepa-dev.vercel.app/"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="p-2.5 rounded-xl bg-syncxel-dark border border-syncxel-border text-syncxel-text-muted hover:text-white hover:border-syncxel-cyan/40 transition-all"
//                     title="Portfolio Profile">
//                     <SlGlobe className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import {
  HiOutlineUser,
  HiOutlineCheckBadge,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaTelegramPlane, FaEnvelope } from "react-icons/fa";

import HeroImage from "/hero.jpg"; // Fixed Typo in variable name

export default function TeamSection() {
  const stats = [
    { value: "10k+", label: "Code Snippets Delivered" },
    { value: "100/100", label: "Lighthouse Performance" },
    { value: "100%", label: "Production-Ready Standard" },
    { value: "24/7", label: "Agile Client Delivery" },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Background Neon Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* 1. STATS / METRICS BAR WITH HEADING */}
        <div className="space-y-10">
          {/* Stats Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
              <HiOutlineChartBar className="w-4 h-4" />
              <span>Proven Impact & Metrics</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Driven by Numbers, Engineered for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                Excellence
              </span>
            </h2>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Real metrics that reflect our commitment to speed, code quality,
              and reliability.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4  gap-2 md:gap-4 lg:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 text-center space-y-2 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. MEET THE FOUNDER SECTION */}
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
              <HiOutlineUser className="w-4 h-4" />
              <span>Behind SyncXel</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Meet the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                Founder & Architect
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Building modern digital products with a strong focus on
              high-performance code, clean UI architecture, and seamless user
              experiences.
            </p>
          </div>

          {/* SOLO FOUNDER CARD */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-slate-900/70 border-2 border-white/10 shadow-2xl backdrop-blur-xl hover:border-cyan-500/20 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
              {/* Profile Image with Object Cover */}
              <div className="shrink-0 relative border-4 border-syncxel-cyan/50 rounded-full hover:scale-105 transition-all duration-300">
                <img
                  src={HeroImage}
                  alt="Lakshan Sandeepa - Founder of SyncXel"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-2 border-white/10 shadow-xl"
                />
                <div className="absolute bottom-2 right-0 bg-slate-950 p-1.5 rounded-full border border-white/10">
                  <HiOutlineCheckBadge
                    className="w-6 h-6 text-cyan-400"
                    title="Verified Creator"
                  />
                </div>
              </div>

              {/* Founder Bio & Details */}
              <div className="space-y-2 text-center md:text-left flex-1">
                <div className="space-y-1">
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Lakshan Sandeepa
                    </h3>
                  </div>
                  <p className="text-cyan-400 font-medium text-sm">
                    Founder & Lead Web Engineer @ SyncXel
                  </p>
                </div>

                <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed">
                  Passionate about crafting high-performance web applications,
                  clean code, and modern dark aesthetics. Building SyncXel to
                  help developers code faster and businesses launch
                  production-ready web platforms.
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1 pt-1 justify-center md:justify-start">
                  {[
                    "React.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Frontend Architecture",
                    "UI/UX Design",
                  ].map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-slate-950 border border-white/10 text-xs font-medium text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-2 flex items-center justify-center md:justify-start space-x-1">
                  <a
                    href="https://github.com/lakshan-beast"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-950 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/50 transition-all"
                    title="GitHub Profile">
                    <SiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lakshan-sandeepa"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-950 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/50 transition-all"
                    title="LinkedIn Profile">
                    <RxLinkedinLogo className="w-5 h-5" />
                  </a>
                  <a
                    href="https://lakshan-sandeepa-dev.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-950 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/50 transition-all"
                    title="Portfolio Profile">
                    <SlGlobe className="w-5 h-5" />
                  </a>
                  <a
                    href="https://t.me/lakshan_dev"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all flex items-center justify-center cursor-pointer"
                    title="Telegram Chat">
                    <FaTelegramPlane className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:syncxelofficial@gmail.com:"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all flex items-center justify-center cursor-pointer"
                    title="Email Chat">
                    <FaEnvelope className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
