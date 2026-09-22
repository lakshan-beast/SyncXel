// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FaHeart,
//   FaRegCopyright,
//   FaCaretRight,
//   FaCoffee,
//   FaTelegramPlane,
//   FaEnvelope,
// } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";
// import { SiGithub } from "react-icons/si";
// import { SlGlobe } from "react-icons/sl";
// import { RxLinkedinLogo } from "react-icons/rx";
// import { HiOutlineSparkles, HiOutlineArrowUpRight } from "react-icons/hi2";

// // --- Framer Motion Variants ---
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative bg-slate-950 pt-0 md:pt-2 pb-5 px-2 sm:px-8 border-t border-white/20 overflow-hidden rounded-t-3xl w-full">
//       <motion.div
//         className="max-w-7xl w-full mx-auto space-y-3 relative z-10"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}>
//         {/* 1. TOP BIG HIGH CONTRAST CTA BOX WITH ANIMATED BORDER */}
//         <motion.div
//           variants={itemVariants}
//           className="relative rounded-4xl p-0.5 overflow-hidden group max-w-6xl lg:max-w-5xl mx-auto my-10">
//           {/* 🌟 DUWANA BORDER EFFECT (Animated Rotating Monochrome Gradient) */}
//           <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#ffffff_0%,#475569_50%,#ffffff_100%)] opacity-20 animate-[spin_6s_linear_infinite] group-hover:opacity-75 transition-opacity" />

//           {/* 🌟 INNER CONTENT BOX */}
//           <div className="relative rounded-[calc(1.5rem-1px)] bg-slate-950/50 backdrop-blur-xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 z-10">
//             {/* Radial Background Glow (White/Slate) */}
//             <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
//             <div className="absolute -left-20 -top-20 w-60 h-60 bg-slate-500/10 rounded-full blur-[90px] pointer-events-none" />

//             {/* Left Text Box */}
//             <div className="space-y-1 max-w-xl text-center md:text-left z-10">
//               <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold shadow-[0_0_15px_rgba(255,255,255,0.15)]">
//                 <HiOutlineSparkles className="w-5 h-5 animate-pulse text-white" />
//                 <span>Let's Build Something Great</span>
//               </div>

//               <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
//                 Ready to elevate your{" "}
//                 <span className="bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent">
//                   digital experience?
//                 </span>
//               </h2>

//               <p className="text-slate-400 text-sm md:text-base leading-tight">
//                 Explore our production-ready UI components or hire us to build
//                 your custom web product with precision.
//               </p>
//             </div>

//             {/* Right Action Buttons */}
//             <div className="flex flex-col sm:flex-row md:flex-col items-center gap-1 md:gap-2 w-full md:w-auto z-10">
//               {/* Start Project Button */}
//               <a
//                 href="#hire"
//                 className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-extrabold text-sm transition-all shadow-lg hover:shadow-white/20 hover:scale-[1.02] flex items-center justify-center space-x-2 group/btn active:scale-95">
//                 <span>Start a Project</span>
//                 <HiOutlineArrowUpRight className="w-5 h-5 ml-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
//               </a>

//               {/* Buy Me A Coffee Button */}
//               <a
//                 href="https://buymeacoffee.com/lakshansandeepa"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="w-full sm:w-auto md:w-full text-center px-5 py-3.5 rounded-xl bg-[#FFDD00] hover:bg-slate-800 text-amber-600 border border-white/20 font-extrabold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-[1.02] flex items-center justify-center space-x-2.5 active:scale-95">
//                 <FaCoffee className="w-5 h-5 text-amber-600" />
//                 <span>Buy Me a Coffee</span>
//               </a>
//             </div>
//           </div>
//         </motion.div>

//         {/* Brand Column */}
//         <div className="col-span-2 space-y-2 mt-26">
//           <Link
//             to="/"
//             className="flex items-center space-x-3 cursor-pointer group">
//             {/* Animated Rotating Border Logo Container */}
//             <div className="relative w-11 h-11 flex items-center justify-center">
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 8,
//                   ease: "linear",
//                 }}
//                 className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-slate-500 to-white p-[2px] shadow-[0_0_15px_rgba(255,255,255,0.3)]">
//                 <div className="w-full h-full bg-slate-950 rounded-full" />
//               </motion.div>

//               {/* Actual Logo Image */}
//               <motion.img
//                 whileHover={{ scale: 1.1 }}
//                 src="/syncxel-logo-removebg.png"
//                 alt="SyncXel Logo"
//                 width={28}
//                 height={28}
//                 className="object-contain relative z-10 rounded-full"
//               />
//             </div>

//             {/* Brand Name with Glow Effect */}
//             <div className="flex flex-col">
//               {/* Option 2 Connected Pill Style */}
//               <div className="flex items-center">
//                 <span className="text-2xl md:text-3xl font-black font-baloo uppercase bg-white text-slate-950 p-0 rounded-l-md shadow-inner leading-0">
//                   Sync
//                 </span>
//                 <span className="text-2xl md:text-3xl font-black font-baloo uppercase bg-slate-950 text-white px-2 ml-0.5 rounded-md border-none shadow-none leading-none">
//                   Xel
//                 </span>
//               </div>

//               <span className="text-[10px] font-baloo tracking-widest text-slate-400 -mt-0.5 uppercase">
//                 UI MATRIX V2.0
//               </span>
//             </div>

//             <span className="px-2.5 py-0.5 text-[10px] font-extrabold text-white bg-white/10 border border-white/20 rounded-full tracking-wider uppercase shadow-[0_0_10px_rgba(255,255,255,0.15)] animate-pulse">
//               Beta
//             </span>
//           </Link>

//           <p className="text-md text-slate-400 max-w-3xl leading-tight">
//             Crafting production-ready UI components, design systems, and custom
//             web applications for developers and startups globally.
//           </p>

//           {/* Social Icons */}
//           <div className="flex items-center space-x-2 pt-4">
//             <a
//               href="https://github.com/lakshan-beast"
//               target="_blank"
//               rel="noreferrer"
//               className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all hover:rounded-2xl shadow-md"
//               title="GitHub Profile">
//               <SiGithub className="w-5 h-5" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/lakshan-sandeepa"
//               target="_blank"
//               rel="noreferrer"
//               className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all hover:rounded-2xl shadow-md"
//               title="LinkedIn Profile">
//               <RxLinkedinLogo className="w-5 h-5" />
//             </a>
//             <a
//               href="https://lakshan-sandeepa-dev.vercel.app/"
//               target="_blank"
//               rel="noreferrer"
//               className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all hover:rounded-2xl shadow-md"
//               title="Portfolio Profile">
//               <SlGlobe className="w-5 h-5" />
//             </a>
//             <a
//               href="https://t.me/lakshan_dev"
//               target="_blank"
//               rel="noreferrer"
//               className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all flex items-center justify-center cursor-pointer hover:rounded-2xl shadow-md"
//               title="Telegram Chat">
//               <FaTelegramPlane className="w-5 h-5" />
//             </a>
//             <a
//               href="mailto:syncxelofficial@gmail.com"
//               target="_blank"
//               rel="noreferrer"
//               className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all flex items-center justify-center cursor-pointer hover:rounded-2xl shadow-md"
//               title="Email Chat">
//               <FaEnvelope className="w-5 h-5" />
//             </a>
//           </div>
//         </div>

//         {/* 2. MIDDLE FOOTER LINKS GRID (Original Structure Preserved) */}
//         <motion.div
//           variants={itemVariants}
//           className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-10 md:pt-8 px-4 border-t border-white/10">
//           {/* 1. Products / Library */}
//           <div className="flex flex-col space-y-2">
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white">
//               Products / Library
//             </h4>
//             <ul className="space-y-0.5 text-sm text-slate-400 flex flex-col">
//               <li>
//                 <Link
//                   to="/components"
//                   className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                   <FaCaretRight className="text-slate-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                   UI Components
//                 </Link>
//               </li>
//               <li>
//                 <a
//                   href="/#templates"
//                   className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                   <FaCaretRight className="text-slate-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                   Templates & Themes
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/#pricing"
//                   className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                   <FaCaretRight className="text-slate-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                   Pro Access / Pricing
//                 </a>
//               </li>
//               <li>
//                 <Link
//                   to="/docs"
//                   className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                   <FaCaretRight className="text-slate-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                   Changelog
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* 2. Services / Hire */}
//           <div className="flex flex-col space-y-3">
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white">
//               Services / Hire
//             </h4>
//             <ul className="space-y-0.5 text-xs text-slate-400 flex flex-col">
//               <li>
//                 <a
//                   href="/#services"
//                   className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                   <FaCaretRight className="text-slate-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                   Custom Web Design
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/#how-it-works"
//                   className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                   <FaCaretRight className="text-slate-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                   Our Workflow
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/#hire"
//                   className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                   <FaCaretRight className="text-slate-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                   Project Inquiry / Hire Us
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* 3. Developers / Docs */}
//           <div className="flex flex-col space-y-3">
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white">
//               Developers / Docs
//             </h4>
//             <ul className="space-y-0.5 text-xs text-slate-400 flex flex-col">
//               <li>
//                 <Link
//                   to="/docs"
//                   className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                   <FaCaretRight className="text-slate-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                   Documentation
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/docs"
//                   className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                   <FaCaretRight className="text-slate-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                   Getting Started
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/docs"
//                   className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                   <FaCaretRight className="text-slate-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                   API / Guides
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* 4. Company & Legal */}
//           <div className="flex flex-col space-y-3">
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white">
//               Company & Legal
//             </h4>
//             <ul className="space-y-0.5 text-xs text-slate-400 flex flex-col">
//               <li>
//                 <Link
//                   to="/legal"
//                   className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                   <FaCaretRight className="text-slate-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/legal"
//                   className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                   <FaCaretRight className="text-slate-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                   Terms of Service
//                 </Link>
//               </li>
//               <li>
//                 <a
//                   href="/#faq"
//                   className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                   <FaCaretRight className="text-slate-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                   FAQ / Help Center
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </motion.div>

//         {/* 3. BOTTOM COPYRIGHT BAR */}
//         <motion.div
//           variants={itemVariants}
//           className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
//           <p className="flex items-center flex-wrap justify-center gap-1 text-center">
//             <span>Copyright</span>
//             <FaRegCopyright className="w-3 h-3 inline mx-0.5" />
//             <span>{currentYear}</span>
//             <span className="font-semibold text-white">
//               SyncXel Web Solutions.
//             </span>
//             <span>All rights reserved.</span>
//           </p>

//           <div className="flex items-center gap-4">
//             <Link
//               to="/legal"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-white transition-colors">
//               Privacy & Terms
//             </Link>
//             <span className="text-slate-600">•</span>
//             <a
//               href="mailto:syncxelofficial@gmail.com"
//               className="hover:text-white flex items-center gap-1.5 transition-colors">
//               <IoMdMail className="w-3.5 h-3.5" />
//               <span>syncxelofficial@gmail.com</span>
//             </a>
//           </div>

//           {/* Sri Lanka Flag Badge */}
//           <div className="flex items-center space-x-1.5 bg-slate-900 px-3.5 py-1.5 rounded-full border border-white/10 text-slate-300">
//             <span>Handcrafted with</span>
//             <FaHeart className="w-3 h-3 text-white/50 inline" />
//             <span>in</span>
//             <span className="inline-flex items-center gap-1.5 font-semibold text-white">
//               <img
//                 src="https://flagcdn.com/24x18/lk.png"
//                 alt="Sri Lanka Flag"
//                 className="w-4 h-3 object-cover rounded-xs shadow-sm"
//               />
//               <span>Sri Lanka</span>
//             </span>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Giant Typography at Bottom (Converted to B&W) */}
//       <div
//         data-aos="zoom-in"
//         className="col-span-full w-full text-center font-baloo font-[950] text-[15vw] leading-none mt-5 pointer-events-none relative -bottom-9 lg:-bottom-15 z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-clip-text text-transparent opacity-100 bg-[length:200%_200%] max-[600px]:text-[17vw] max-[600px]:mt-[3rem] max-[600px]:mb-[12px] animate-[pureCssClouds_15s_ease_infinite_alternate] uppercase tracking-tighter"
//         style={{
//           backgroundImage: `
//               radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.9) 0%, transparent 40%),
//               radial-gradient(circle at 50% 30%, rgba(148, 163, 184, 0.6) 0%, transparent 50%),
//               radial-gradient(circle at 80% 60%, rgba(255, 255, 255, 0.4) 0%, transparent 45%),
//               linear-gradient(to right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))
//             `,
//         }}>
//         Sync
//         <span className="[-webkit-text-fill-color:initial] text-white/100 [text-shadow:0_0_30px_rgba(255,255,255,0.4)] transition-all duration-500 ml-8 lg:ml-16 tracking-wide">
//           Xel.
//         </span>

//       </div>

//       <style>{`
//           @keyframes pureCssClouds {
//             0% {
//               background-position: 0% 50%;
//               filter: grayscale(100%);
//             }
//             50% {
//               background-position: 100% 100%;
//               filter: grayscale(100%);
//             }
//             100% {
//               background-position: 50% 0%;
//               filter: grayscale(100%);
//             }
//           }
//         `}</style>
//     </footer>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaRegCopyright,
  FaCaretRight,
  FaCoffee,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiGithub } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import { RxLinkedinLogo } from "react-icons/rx";
import { HiOutlineSparkles, HiOutlineArrowUpRight } from "react-icons/hi2";

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 pt-12 pb-6 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden rounded-t-3xl w-full text-slate-100">
      <motion.div
        className="max-w-7xl w-full mx-auto space-y-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}>
        {/* 1. TOP CTA BOX */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-3xl p-0.5 overflow-hidden group max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#ffffff_0%,#475569_50%,#ffffff_100%)] opacity-20 animate-[spin_6s_linear_infinite] group-hover:opacity-75 transition-opacity" />

          <div className="relative rounded-[calc(1.5rem-1px)] bg-slate-950/80 backdrop-blur-xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 z-10">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-60 h-60 bg-slate-500/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="space-y-3 max-w-xl text-center md:text-left z-10">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold shadow-xs">
                <HiOutlineSparkles className="w-5 h-5 animate-pulse text-white" />
                <span>Let's Build Something Great</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to elevate your{" "}
                <span className="bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent">
                  digital experience?
                </span>
              </h2>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-baloo">
                Explore our production-ready UI components or hire us to build
                your custom web product with precision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col items-center gap-3 w-full md:w-auto z-10 font-baloo">
              <a
                href="#hire"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-sm transition-all shadow-md hover:scale-[1.02] flex items-center justify-center space-x-2 group/btn active:scale-95">
                <span>Start a Project</span>
                <HiOutlineArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>

              <a
                href="https://buymeacoffee.com/lakshansandeepa"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto md:w-full text-center px-5 py-3.5 rounded-xl bg-[#FFDD00] hover:bg-amber-400 text-amber-950 font-bold text-sm transition-all shadow-md hover:scale-[1.02] flex items-center justify-center space-x-2 active:scale-95">
                <FaCoffee className="w-5 h-5 text-amber-950" />
                <span>Buy Me a Coffee</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* 2. MAIN FOOTER GRID (Brand Info + Link Columns) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-6">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-3 cursor-pointer group w-fit">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-2xl md:text-3xl font-black font-baloo uppercase text-white leading-none">
                    Sync
                  </span>
                  <span className="text-2xl md:text-3xl font-black font-baloo uppercase bg-white text-slate-950 px-2 ml-1 rounded-md border border-white/20 shadow-xs leading-none">
                    Xel
                  </span>
                </div>
                <span className="text-[10px] font-baloo tracking-widest text-slate-400 uppercase mt-0.5">
                  UI MATRIX V2.0
                </span>
              </div>

              <span className="px-2.5 py-0.5 text-[9px] font-extrabold text-white bg-white/10 border border-white/20 rounded-full tracking-wider uppercase">
                Beta
              </span>
            </Link>

            <p className="text-base text-slate-400 max-w-lg leading-tight font-baloo">
              Crafting production-ready UI components, design systems, and
              custom web applications for developers and startups globally.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-2 pt-2">
              <a
                href="https://github.com/lakshan-beast"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all shadow-xs"
                title="GitHub Profile">
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/lakshan-sandeepa"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all shadow-xs"
                title="LinkedIn Profile">
                <RxLinkedinLogo className="w-5 h-5" />
              </a>
              <a
                href="https://lakshan-sandeepa-dev.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all shadow-xs"
                title="Portfolio Profile">
                <SlGlobe className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/lakshan_dev"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all shadow-xs"
                title="Telegram Chat">
                <FaTelegramPlane className="w-5 h-5" />
              </a>
              <a
                href="mailto:syncxelofficial@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all shadow-xs"
                title="Email">
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div>
          {/* Links Columns Grid */}
          {/* <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 font-baloo">
            {/* 1. Products *
            <div className="flex flex-col space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                // products
              </h4>
              <ul className="space-y-2 text-xs text-slate-400 flex flex-col">
                <li>
                  <Link
                    to="/components"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    UI Components
                  </Link>
                </li>
                <li>
                  <a
                    href="/#templates"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Templates
                  </a>
                </li>
                <li>
                  <a
                    href="/#pricing"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* 2. Services *
            <div className="flex flex-col space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                // services
              </h4>
              <ul className="space-y-2 text-xs text-slate-400 flex flex-col">
                <li>
                  <a
                    href="/#services"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Web Design
                  </a>
                </li>
                <li>
                  <a
                    href="/#how-it-works"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Workflow
                  </a>
                </li>
                <li>
                  <a
                    href="/#hire"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Hire Us
                  </a>
                </li>
              </ul>
            </div>

            {/* 3. Developers 
            <div className="flex flex-col space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                // docs
              </h4>
              <ul className="space-y-2 text-xs text-slate-400 flex flex-col">
                <li>
                  <Link
                    to="/docs"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/docs"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    to="/docs"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4. Legal 
            <div className="flex flex-col space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                // legal
              </h4>
              <ul className="space-y-2 text-xs text-slate-400 flex flex-col">
                <li>
                  <Link
                    to="/legal"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legal"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a
                    href="/#faq"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* Links Columns Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-4 gap-6 font-baloo px-6">
            {/* 1. Ecosystem / Products */}
            <div className="flex flex-col space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                // ecosystem
              </h4>
              <ul className="space-y-1 pl-3 text-xs text-slate-400 flex flex-col">
                <li>
                  <Link
                    to="/components"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    UI Matrix Core
                  </Link>
                </li>
                <li>
                  <a
                    href="/components"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Design Tokens
                  </a>
                </li>
                <li>
                  <a
                    href="/#templates"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Pro Templates
                  </a>
                </li>
                <li>
                  <a
                    href="/#pricing"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Matrix Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* 2. Tech Stack & Resources (External Links) */}
            <div className="flex flex-col space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                // tech_stack
              </h4>
              <ul className="space-y-1 pl-3 text-xs text-slate-400 flex flex-col">
                <li>
                  <a
                    href="https://react.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    React.js Docs
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Tailwind CSS
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.framer.com/motion/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Framer Motion
                  </a>
                </li>
                <li>
                  <a
                    href="https://vite.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Vite Engine
                  </a>
                </li>
              </ul>
            </div>

            {/* 3. Agency & Services */}
            <div className="flex flex-col space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                // agency
              </h4>
              <ul className="space-y-1 pl-3 text-xs text-slate-400 flex flex-col">
                <li>
                  <a
                    href="/#services"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Custom Web Apps
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    UI / UX Audit
                  </a>
                </li>
                <li>
                  <a
                    href="/#how-it-works"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Our Workflow
                  </a>
                </li>
                <li>
                  <a
                    href="/#hire"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Hire Engineers
                  </a>
                </li>
              </ul>
            </div>

            {/* 4. Governance & Legal */}
            <div className="flex flex-col space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                // governance
              </h4>
              <ul className="space-y-1 pl-3 text-xs text-slate-400 flex flex-col">
                <li>
                  <Link
                    to="/docs"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legal"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Privacy & Terms
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/lakshan-beast"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Open Source Hub
                  </a>
                </li>
                <li>
                  <a
                    href="/#faq"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    FAQ / Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 3. BOTTOM COPYRIGHT BAR */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4 font-baloo">
          <p className="flex items-center flex-wrap justify-center gap-1 text-center">
            <span>Copyright</span>
            <FaRegCopyright className="w-3 h-3 inline mx-0.5" />
            <span>{currentYear}</span>
            <span className="font-semibold text-white">
              SyncXel Web Solutions.
            </span>
            <span>All rights reserved.</span>
          </p>

          <div className="flex items-center gap-4">
            <Link to="/legal" className="hover:text-white transition-colors">
              Privacy & Terms
            </Link>
            <span className="text-slate-600">•</span>
            <a
              href="mailto:syncxelofficial@gmail.com"
              className="hover:text-white flex items-center gap-1.5 transition-colors">
              <IoMdMail className="w-3.5 h-3.5" />
              <span>syncxelofficial@gmail.com</span>
            </a>
          </div>

          {/* Sri Lanka Flag Badge */}
          <div className="flex items-center space-x-1.5 bg-slate-900 px-3.5 py-1.5 rounded-full border border-white/10 text-slate-300">
            <span>Handcrafted with</span>
            <FaHeart className="w-3 h-3 text-slate-400 inline" />
            <span>in</span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-white">
              <img
                src="https://flagcdn.com/24x18/lk.png"
                alt="Sri Lanka Flag"
                className="w-4 h-3 object-cover rounded-xs shadow-xs"
              />
              <span>Sri Lanka</span>
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Giant Typography at Bottom
      {/* Giant Typography at Bottom (Clean name with top-to-bottom fade) */}
      <div
        className="w-full text-center font-baloo font-[950] text-[15vw] leading-none mt-5 pointer-events-none relative -bottom-4 lg:-bottom-8 z-10 uppercase tracking-tighter select-none"
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.01) 80%)
    `,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
        Sync
        <span className="ml-4 lg:ml-12 tracking-wide">Xel.</span>
      </div>
    </footer>
  );
}
