// import React from "react";
// import { motion } from "framer-motion";
// import {
//   HiOutlineSparkles,
//   HiOutlineCodeBracket,
//   HiOutlineArrowRight,
// } from "react-icons/hi2";

// import TechStack from "./TeckStack";

// // --- Framer Motion Variants ---
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delayChildren: 0.2,
//       staggerChildren: 0.15,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function Hero() {
//   return (
//     <section className="relative pt-26 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex flex-col justify-center bg-white text-slate-900">
//       {/* Main Content Container */}
//       <motion.div
//         className="max-w-7xl mx-auto space-y-6 sm:space-y-18 lg:space-y-28 relative z-10 w-full"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible">
//         {/* Content Block */}
//         <div className="space-y-6 max-w-7xl mx-auto">
//           {/* Section 1: Version Badge */}
//           <motion.div variants={itemVariants} className="text-left">
//             <span className="font-mono text-xs text-slate-700 block mb-2">
//               // project_status_and_updates
//             </span>
//             <motion.a
//               initial={{ opacity: 0, x: -10 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 400,
//                 damping: 17,
//               }}
//               href="#components"
//               className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 hover:border-slate-300 text-xs text-slate-700 transition-all shadow-xs group w-fit">
//               <span className="w-2 h-2 rounded-full bg-slate-900 animate-ping shrink-0" />
//               <span className="font-semibold text-slate-900">SyncXel V2.0</span>
//               <span className="text-slate-700 sm:hidden md:inline">
//                 • Free UI, Paid Templates & Dev Guides
//               </span>
//               <HiOutlineArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-slate-700" />
//             </motion.a>
//           </motion.div>

//           {/* Section 2: Main Headline */}
//           <motion.div variants={itemVariants} className="space-y-2 text-left">
//             <span className="font-mono text-xs text-slate-700 block">
//               // primary_headline
//             </span>
//             <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.1]">
//               Build Modern Web Apps <br className="hidden sm:inline" />
//               <span className="text-slate-700 block sm:inline mt-1 sm:mt-0">
//                 10x Faster
//               </span>
//             </h1>
//           </motion.div>

//           {/* Section 3: Description */}
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{
//               type: "spring",
//               stiffness: 400,
//               damping: 17,
//             }}
//             variants={itemVariants}
//             className="space-y-2 text-left max-w-3xl">
//             <span className="font-mono text-xs text-slate-700 block">
//               // project_description
//             </span>
//             <motion.p
//               initial={{ opacity: 0, x: -10 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 400,
//                 damping: 17,
//               }}
//               className="text-slate-700 text-sm sm:text-base md:text-lg leading-tight font-baloo">
//               Hand-crafted React & Tailwind components, ready-to-use templates,
//               step-by-step deployment guides, and custom web development
//               services—all in one place.
//             </motion.p>
//           </motion.div>

//           {/* Section 4: Call To Actions */}
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 text-left pt-2">
//             {/* Button 1: Explore Components */}
//             <motion.a
//               initial={{ opacity: 0, y: -10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               href="#components-prev"
//               whileHover={{ scale: 1.02, y: -2 }}
//               whileTap={{ scale: 0.98 }}
//               transition={{ type: "spring", stiffness: 400, damping: 15 }}
//               className="w-full sm:w-auto h-12 px-6 rounded-xl bg-slate-900 text-white font-medium text-xs sm:text-sm hover:bg-slate-800 transition-all flex items-center justify-between sm:justify-center sm:space-x-4 shadow-xs group cursor-pointer font-baloo">
//               <div className="flex items-center space-x-3">
//                 <HiOutlineSparkles className="w-4 h-4 text-slate-300 group-hover:-rotate-180 group-hover:scale-125 transition-transform shrink-0 duration-300" />
//                 <span className="hidden lg:inline text-slate-200 tracking-tight">
//                   return explore_components();
//                 </span>
//                 <span className="lg:hidden">Explore Components</span>
//               </div>
//               <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-700 shrink-0 sm:ml-2" />
//             </motion.a>

//             {/* Button 2: Hire Us */}
//             <motion.a
//               href="#services"
//               initial={{ opacity: 0, y: -10 }}
//               whileInView={{ opacity: 1, y: 0, delay: 0.4 }}
//               whileHover={{ scale: 1.02, y: -2 }}
//               whileTap={{ scale: 0.98 }}
//               transition={{ type: "spring", stiffness: 400, damping: 15 }}
//               className="w-full sm:w-auto h-12 px-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-900 font-medium text-xs sm:text-sm hover:bg-slate-50 transition-all flex items-center justify-between sm:justify-center sm:space-x-3 cursor-pointer group font-baloo shadow-xs">
//               <div className="flex items-center space-x-3">
//                 <HiOutlineCodeBracket className="w-4 h-4 text-slate-700 group-hover:scale-125 group-hover:-rotate-45 transition-transform shrink-0 duration-300" />
//                 <span className="hidden lg:inline tracking-tight">
//                   const services = () =&gt; custom_services();
//                 </span>
//                 <span className="lg:hidden">Hire Us for Custom Project</span>
//               </div>
//               <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-700 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity sm:ml-2" />
//             </motion.a>
//           </motion.div>
//         </div>

//         {/* TechStack Component Integration */}
//         <TechStack />
//       </motion.div>
//     </section>
//   );
// }

// import React from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import {
//   HiOutlineSparkles,
//   HiOutlineCodeBracket,
//   HiOutlineArrowRight,
// } from "react-icons/hi2";
// import TechStack from "./TechStack";

// export default function HeroSection() {
//   const shouldReduceMotion = useReducedMotion();

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: shouldReduceMotion ? 0 : 0.12,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//       y: shouldReduceMotion ? 0 : 22,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: shouldReduceMotion ? 0 : 0.65,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section
//       id="home"
//       className="relative isolate overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-900 transition-colors duration-500 dark:from-[#080808] dark:via-[#101010] dark:to-[#171717] dark:text-white">
//       {/* Background Decorations */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-slate-300/30 blur-[120px] dark:bg-white/[0.07]" />

//         <div className="absolute right-[-100px] top-40 h-[300px] w-[300px] rounded-full bg-blue-200/20 blur-[110px] dark:bg-slate-500/[0.08]" />

//         <div className="absolute bottom-0 left-[-100px] h-[300px] w-[300px] rounded-full bg-slate-300/20 blur-[110px] dark:bg-white/[0.04]" />
//       </div>

//       <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-5 pb-16 pt-32 sm:px-8 lg:px-10 lg:pt-36">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
//           {/* Version Badge */}
//           <motion.div variants={itemVariants}>
//             <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
//               <HiOutlineSparkles className="h-4 w-4 text-slate-700 dark:text-slate-300" />
//               <span>SyncXel V2.0</span>
//               <span className="h-1 w-1 rounded-full bg-slate-400" />
//               <span>Free UI, Premium Templates & Dev Guides</span>
//             </div>
//           </motion.div>

//           {/* Main Heading */}
//           <motion.h1
//             variants={itemVariants}
//             className="mt-8 text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
//             Build Modern
//             <span className="block bg-gradient-to-r from-slate-500 via-slate-800 to-slate-500 bg-clip-text text-transparent dark:from-slate-300 dark:via-white dark:to-slate-400">
//               Web Experiences
//             </span>
//             With Confidence.
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             variants={itemVariants}
//             className="mt-7 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base sm:leading-8 dark:text-slate-300">
//             Explore handcrafted React and Tailwind components, premium UI packs,
//             complete website templates, and practical development guides. Need a
//             website for your business? Let's build it together.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             variants={itemVariants}
//             className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
//             <a
//               href="#components-prev"
//               className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700 sm:w-auto dark:bg-white dark:text-black dark:hover:bg-slate-200">
//               <HiOutlineCodeBracket className="h-5 w-5" />
//               Explore Components
//               <HiOutlineArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </a>

//             <a
//               href="#services"
//               className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-7 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-500 hover:bg-white sm:w-auto dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-white/30 dark:hover:bg-white/[0.08]">
//               Let's Work Together
//               <HiOutlineArrowRight className="h-4 w-4" />
//             </a>
//           </motion.div>

//           {/* Supporting Text */}
//           <motion.div
//             variants={itemVariants}
//             className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-700 dark:text-slate-300">
//             <span className="flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//               Developer Resources
//             </span>

//             <span className="hidden h-1 w-1 rounded-full bg-slate-400 sm:block" />

//             <span>Custom Web Development</span>

//             <span className="hidden h-1 w-1 rounded-full bg-slate-400 sm:block" />

//             <span>Modern UI Solutions</span>
//           </motion.div>
//         </motion.div>

//         {/* Technology Stack */}
//         <motion.div
//           initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: shouldReduceMotion ? 0 : 0.7,
//             delay: shouldReduceMotion ? 0 : 0.5,
//           }}
//           className="mt-16">
//           <TechStack />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

{
  /* Background atmosphere */
}
{
  /* <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(148,163,184,0.18),transparent_2%)] dark:bg-[radial-gradient(ellipse_at_70%_20%,rgba(148,163,184,0.09),transparent_42%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(148,163,184,4)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,4)_1px,transparent_1px)] [background-size:56px_56px] dark:opacity-[0.12]" />
        <div className="absolute inset-x-0 bottom-6 h-96 bg-gradient-to-t from-[#fafafa] to-transparent dark:from-[#090909]" />
      </div> */
}

{
  /* Background atmosphere */
}
{
  /* <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft radial glow *
        <div
          className="absolute -top-40 right-[-10%] h-[500px] w-[600px] rounded-full
    bg-blue-400/[0.5] blur-[100px]
    dark:bg-blue-400/[0.42]"
        />

        {/* Secondary glow *
        <div
          className="absolute left-[-20%] top-[60%] h-[450px] w-[450px] rounded-full
    bg-slate-700 blur-[100px]
    dark:bg-slate-300/40"
        />

        {/* Grid pattern *
        <div
          className="absolute inset-0 opacity-[0.7] dark:opacity-[0.5]"
          style={{
            backgroundImage: `
        linear-gradient(to right, rgba(148,163,184,0.15) 1px, transparent 50px),
        linear-gradient(to bottom, rgba(148,163,184,0.15) 1px, transparent 50px)
      `,
            backgroundSize: "56px 56px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 100%)",
          }}
        />

        {/* Bottom fade *
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />
      </div> */
}

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiArrowDownRight,
  HiArrowRight,
  HiArrowUpRight,
  HiCheck,
  HiCodeBracket,
  HiCommandLine,
  HiCubeTransparent,
  HiSparkles,
} from "react-icons/hi2";
// import TechStack from "./TechStack";
import { FaLaptopCode } from "react-icons/fa6";
import { LuBriefcaseBusiness } from "react-icons/lu";

import BackgroundAtmosphere from "../../../components/common/BackgroundAtmoshere";

const technologies = ["React", "Tailwind CSS", "TypeScript"];

function PreviewVisual() {
  return (
    <div className="relative mx-auto w-full max-w-180">
      {/* Ambient glow */}
      <div className="absolute inset-8 rounded-full bg-slate-950/90 blur-[90px] dark:bg-slate-950/90" />

      {/* Floating top label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="absolute right-2 top-2 z-20 hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-3 py-3 text-[11px] font-medium text-slate-700 shadow-lg shadow-slate-900/5 backdrop-blur-xl sm:flex dark:border-white/10 dark:bg-[#171717]/90 dark:text-slate-300">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Crafted for the modern web
      </motion.div>

      {/* Main browser frame */}
      <motion.div
        initial={{ opacity: 0, y: 28, rotate: 1.5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 overflow-hidden rounded-[22px] border border-slate-200/90 bg-white shadow-[0_30px_100px_-35px_rgba(15,23,42,0.25)] dark:border-white/10 dark:bg-slate-950/90 dark:shadow-[0_30px_100px_-35px_rgba(0,0,0,0.8)]">
        {/* Browser top bar */}
        <div className="flex items-center justify-start border-b border-slate-200/80 px-4 py-3.5 dark:border-white/10">
          <div className="flex items-center gap-0.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B63]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F5BD4F]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#54C96B]" />
          </div>

          <div className="flex items-center gap-2 rounded-md bg-slate-100 px-3 py-1.5 ml-1.5 text-[10px] text-slate-700 dark:bg-white/5 dark:text-slate-300">
            <HiCubeTransparent className="h-3.5 w-3.5" />
            syncxel.dev / preview
          </div>

          <HiArrowUpRight className="h-4 w-4 text-slate-700 ml-2" />
        </div>

        {/* Preview content */}
        <div className="grid gap-0 sm:grid-cols-[0.92fr_1.2fr]">
          {/* Code panel */}
          <div className="border-b border-slate-200/80 p-5 sm:border-b-0 sm:border-r dark:border-white/10">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-700">
                // component.tsx
              </span>
              <HiCodeBracket className="h-4 w-4 text-slate-700" />
            </div>

            <div className="space-y-0.5 font-mono text-[11px] leading-relaxed sm:text-xs">
              <p className="text-violet-500 dark:text-violet-400">
                import{" "}
                <span className="text-slate-700">
                  {"{"} motion {"}"}
                </span>
              </p>
              <p className="pl-3 text-slate-700">
                from{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  "framer-motion"
                </span>
                ;
              </p>
              <p className="pt-3 text-blue-600 dark:text-blue-400">
                export default function
              </p>
              <p className="text-slate-800 dark:text-slate-200">
                Button<span className="text-slate-700">()</span> {"{"}
              </p>
              <p className="pl-3 text-slate-700 dark:text-slate-300">
                return (
              </p>
              <p className="pl-6 text-rose-500 dark:text-rose-400">
                <span className="text-slate-700">{"<"}</span>motion.button
              </p>
              <p className="pl-9 text-slate-400">
                whileHover
                <span className="text-amber-600 dark:text-amber-300">
                  ={"{{"} scale: 1.03 {"}}"}
                </span>
              </p>
              <p className="pl-9 text-slate-400">
                className=
                <span className="text-emerald-600 dark:text-emerald-400">
                  "..."
                </span>
              </p>
              <p className="pl-6 text-rose-500 dark:text-rose-400">
                <span className="text-slate-700">{"</"}</span>motion.button
                <span className="text-slate-700">{">"}</span>
              </p>
              <p className="pl-3 text-slate-700 dark:text-slate-300">);</p>
              <p className="text-slate-800 dark:text-slate-200">{"}"}</p>
            </div>

            <div className="mt-8 flex items-center gap-2 border-t border-slate-100 pt-4 dark:border-white/[0.07]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="font-mono text-[10px] text-slate-400">
                clean_code.jsx
              </span>
            </div>
          </div>

          {/* Live component preview */}
          <div className="flex min-h-72.5 flex-col justify-between bg-gradient-to-br from-slate-50 to-white p-5 dark:from-slate-950/90 dark:to-slate-700/30">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-700">
                Live component
              </span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[9px] font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                Preview
              </span>
            </div>

            <div className="my-7 rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-950/90">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Build something great.
                  </p>
                  <p className="mt-1 text-[10px] text-slate-700 leading-tight">
                    Thoughtful UI. Better experiences.
                  </p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-black">
                  <HiSparkles className="h-4 w-4" />
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center justify-between rounded-xl bg-slate-900 px-4 py-3 text-white dark:bg-white dark:text-black">
                <span className="text-xs font-semibold">
                  Explore components
                </span>
                <HiArrowRight className="h-4 w-4" />
              </motion.div>

              <div className="mt-4 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <HiCheck className="h-3 w-3" />
                </span>
                <span className="text-[10px] text-slate-700">
                  Responsive interface
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-700">
                UI / UX preview
              </span>
              <div className="flex gap-1">
                <span className="h-1.5 w-5 rounded-full bg-slate-900 dark:bg-white" />
                <span className="h-1.5 w-2 rounded-full bg-slate-200 dark:bg-white/20" />
                <span className="h-1.5 w-2 rounded-full bg-slate-200 dark:bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating bottom card */}
      <motion.div
        initial={{ opacity: 0, x: 18, y: 12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.25, duration: 0.35 }}
        className="absolute -bottom-7 -left-2 z-20 flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/95 p-3.5 shadow-xl shadow-slate-900/10 backdrop-blur-xl sm:-left-8 dark:border-white/10 dark:bg-slate-950/90 dark:shadow-black/30">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800 dark:bg-white/10 dark:text-white">
          <HiCommandLine className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-900 dark:text-white">
            From idea to interface
          </p>
          <p className="mt-0.5 text-[10px] text-slate-700">
            Design · Develop · Deliver
          </p>
        </div>
      </motion.div>

      {/* Decorative index */}
      <div className="absolute -bottom-10 right-2 hidden font-mono text-[10px] tracking-[0.2em] text-slate-700 sm:block">
        SX / 001
      </div>
    </div>
  );
}

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  // const reveal = {
  //   hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: shouldReduceMotion ? 0 : 0.7,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.35,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#fafafa] text-slate-950 transition-colors duration-500 dark:bg-slate-950/90 dark:text-white ">
      <BackgroundAtmosphere />

      <div className="mx-auto max-w-full px-5 pb-16 pt-32 sm:px-8 sm:pt-36 lg:px-50 lg:pb-20 lg:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          {/* Copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.04,
                },
              },
            }}
            className="relative z-10 max-w-2xl">
            <motion.div variants={reveal}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/75 px-3.5 py-2 shadow-sm shadow-slate-900/3 backdrop-blur-md dark:border-white/10 dark:bg-white/4">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-black">
                  <HiSparkles className="h-3 w-3 animate-pulse" />
                </span>
                <span className="text-[11px] font-semibold tracking-wide text-slate-700 dark:text-slate-300">
                  SYNCXEL{" "}
                  <span className="mx-1 text-slate-300 dark:text-slate-300">
                    /
                  </span>{" "}
                  DIGITAL EXPERIENCES
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
            </motion.div>

            <motion.p
              variants={reveal}
              className="mt-9 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
              // build beyond the ordinary
            </motion.p>

            <motion.h1
              variants={reveal}
              className="mt-4 max-w-180 text-[clamp(3.2rem,7vw,6.2rem)] font-semibold leading-[0.98] tracking-[-0.075em]">
              Build Better
              <span className="mt-2 block bg-gradient-to-r from-slate-500 via-slate-950 to-slate-500 bg-clip-text pb-2 text-transparent dark:from-slate-400 dark:via-white dark:to-slate-500">
                Digital Experiences.
              </span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-7 max-w-xl text-[15px] leading-tight text-slate-700 sm:text-base dark:text-slate-300">
              Discover premium React UI components, UI packs and website
              templates for developers — or partner with SyncXel to turn your
              business ideas into powerful digital experiences.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#components-prev"
                className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition duration-300 hover:-translate-y-1 hover:bg-slate-700 dark:bg-white dark:text-black dark:hover:bg-slate-200">
                Explore resources
                <HiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-slate-500 hover:bg-white dark:border-white/15 dark:bg-white/3 dark:text-slate-200 dark:hover:border-white/30 dark:hover:bg-white/[0.07]">
                Discuss a project
                <HiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200/80 pt-6 dark:border-white/10">
              <div>
                <span className="flex items-center gap-2">
                  <FaLaptopCode size={16} />
                  <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 border-l border-l-slate-500 pl-1">
                    For developers
                  </p>
                </span>
                <p className="mt-1 text-[11px] text-slate-700">
                  Components · UI Packs · Guides
                </p>
              </div>

              <span className="hidden h-8 w-px bg-slate-200 sm:block dark:bg-white/10" />

              <div>
                <span className="flex items-center gap-2">
                  <LuBriefcaseBusiness size={16} />
                  <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 border-l border-l-slate-500 pl-1">
                    For businesses
                  </p>
                </span>
                <p className="mt-1 text-[11px] text-slate-700">
                  Websites · Interfaces · Development
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <div className="relative px-1 pb-8 pt-2 sm:px-5 lg:px-0">
            <PreviewVisual />
          </div>
        </div>

        {/* Technology showcase */}
        {/* <div className="mt-24 border-t border-slate-200/80 pt-7 dark:border-white/10">
          <TechStack />
        </div> */}

        {/* Scroll hint */}
        <div className="group mt-12 hidden items-center justify-center gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-700 md:flex hover:scale-105 duration-400">
          <HiArrowDownRight className="h-3.5 w-3.5 group-hover:rotate-45 duration-400" />
          Explore what you can build
        </div>
      </div>
    </section>
  );
}
