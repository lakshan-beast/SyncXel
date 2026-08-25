// import { FaHeart, FaRegCopyright } from "react-icons/fa6";
// import { IoMdMail } from "react-icons/io";
// import { SiGithub } from "react-icons/si";
// import { SlGlobe } from "react-icons/sl";
// import { RxLinkedinLogo } from "react-icons/rx";

// import { FaCoffee } from "react-icons/fa";
// import { HiOutlineSparkles, HiOutlineArrowUpRight } from "react-icons/hi2";
// // import { GoPlus } from "react-icons/go";
// import { FaCaretRight } from "react-icons/fa6";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative bg-syncxel-dark pt-20 pb-10 px-4 sm:px-8 border-t border-syncxel-border/40 overflow-hidden">
//       {/* Subtle Background Gradient Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-syncxel-blue/10 blur-[120px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto space-y-16">
//         {/* 1. TOP BIG HIGH CONTRAST CTA BOX */}
//         <div className="relative rounded-3xl bg-linear-to-b from-syncxel-card to-[#0e121a] border border-syncxel-border p-8 md:p-12 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
//           {/* Background Radial Glow */}
//           <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-syncxel-cyan/10 rounded-full blur-[80px] pointer-events-none" />

//           {/* Left Text Box */}
//           <div className="space-y-3 max-w-xl text-center md:text-left">
//             <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-syncxel-cyan/10 border border-syncxel-cyan/20 text-syncxel-cyan text-xs font-semibold">
//               <HiOutlineSparkles className="w-4 h-4" />
//               <span>Let's Build Something Great</span>
//             </div>

//             <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
//               Ready to elevate your digital experience?
//             </h2>

//             <p className="text-syncxel-textMuted text-sm md:text-base">
//               Explore our production-ready UI components or hire us to build
//               your custom web product with precision.
//             </p>
//           </div>

//           {/* Right Action Buttons */}
//           <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto z-10">
//             {/* Start Project CTA */}
//             <a
//               href="#hire"
//               className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-syncxel-dark font-bold text-sm transition-all shadow-lg flex items-center justify-center space-x-2 group">
//               <span>Start a Project</span>
//               <HiOutlineArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </a>

//             {/* Buy Me a Coffee Button ☕ */}
//             <a
//               href="https://buymeacoffee.com/lakshansandeepa"
//               target="_blank"
//               rel="noreferrer"
//               className="w-full sm:w-auto text-center px-5 py-3.5 rounded-xl bg-[#FFDD00] hover:bg-[#e6c700] text-black font-bold text-sm transition-all shadow-lg flex items-center justify-center space-x-2">
//               <FaCoffee className="w-4 h-4 text-black" />
//               <span>Buy Me a Coffee</span>
//             </a>
//           </div>
//         </div>

//         {/* 2. MIDDLE FOOTER LINKS GRID */}
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pt-6 border-t border-syncxel-border/30">
//           {/* Brand Column */}
//           <div className="col-span-2 space-y-4">
//             <div className="flex items-center space-x-3">
//               <img
//                 src="/syncxel-logo-removebg.png"
//                 alt="SyncXel Logo"
//                 width={35}
//                 height={35}
//               />
//               <span className="text-2xl font-bold text-white tracking-tight font-exo">
//                 Sync
//                 <span className="text-transparent bg-clip-text bg-syncxel-gradient">
//                   Xel
//                 </span>
//               </span>
//             </div>

//             <p className="text-xs text-white/70 max-w-sm leading-relaxed">
//               Crafting production-ready UI components, design systems, and
//               custom web applications for developers and startups globally.
//             </p>

//             {/* Social Icons */}
//             <div className="flex items-center space-x-3 pt-2">
//               <a
//                 href="https://github.com/lakshan-beast"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="p-2.5 rounded-xl bg-syncxel-dark border border-syncxel-border text-syncxel-text-muted hover:text-white hover:border-syncxel-cyan/40 transition-all"
//                 title="GitHub Profile">
//                 <SiGithub className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/lakshan-sandeepa"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="p-2.5 rounded-xl bg-syncxel-dark border border-syncxel-border text-syncxel-text-muted hover:text-white hover:border-syncxel-cyan/40 transition-all"
//                 title="LinkedIn Profile">
//                 <RxLinkedinLogo className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://lakshan-sandeepa-dev.vercel.app/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="p-2.5 rounded-xl bg-syncxel-dark border border-syncxel-border text-syncxel-text-muted hover:text-white hover:border-syncxel-cyan/40 transition-all"
//                 title="Portfolio Profile">
//                 <SlGlobe className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Nav Links */}
//           <div>
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
//               Library
//             </h4>
//             <ul className="space-y-1 text-xs text-white/70 pl-1">
//               <li>
//                 <a
//                   href="#components"
//                   className="hover:text-white transition-colors flex flex-row items-center gap-1.5 group">
//                   <FaCaretRight className="group-hover:rotate-90" />
//                   UI Components
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#templates"
//                   className="hover:text-white transition-colors flex flex-row items-center gap-1.5 group">
//                   <FaCaretRight className="group-hover:rotate-90" />
//                   Templates
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#pricing"
//                   className="hover:text-white transition-colors flex flex-row items-center gap-1.5 group">
//                   <FaCaretRight className="group-hover:rotate-90" />
//                   Pro Access
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
//               Services
//             </h4>
//             <ul className="space-y-1 text-xs text-white/70 pl-1">
//               <li>
//                 <a
//                   href="#hire"
//                   className="hover:text-white transition-colors flex flex-row items-center gap-1.5 group">
//                   <FaCaretRight className="group-hover:rotate-90" />
//                   Custom Web Design
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#how-it-works"
//                   className="hover:text-white transition-colors flex flex-row items-center gap-1.5 group">
//                   <FaCaretRight className="group-hover:rotate-90" />
//                  Workflow
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#hire"
//                   className="hover:text-white transition-colors flex flex-row items-center gap-1.5 group">
//                   <FaCaretRight className="group-hover:rotate-90" />
//                   Project Inquiry
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
//               Support
//             </h4>
//             <ul className="space-y-1 text-xs text-white/70 pl-1">
//               <li>
//                 <a
//                   href="#docs"
//                   className="hover:text-white transition-colors flex flex-row items-center gap-1.5 group">
//                   <FaCaretRight className="group-hover:rotate-90" />
//                   Documentation
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/legel"
//                   className="hover:text-white transition-colors flex flex-row items-center gap-1.5 group">
//                   <FaCaretRight className="group-hover:rotate-90" />
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#terms"
//                   className="hover:text-white  transition-colors flex flex-row items-center gap-1.5 group">
//                   <FaCaretRight className="group-hover:rotate-90" />
//                   Terms of Service
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* 3. BOTTOM COPYRIGHT BAR */}
//         <div className="pt-8 border-t border-syncxel-border/30 flex flex-col md:flex-row items-center justify-between text-xs text-white/80 gap-4 space-y-5 md:items-center">
//           <p className="flex items-center flex-wrap justify-center gap-1 text-white/60 text-wrap text-center mb-0">
//             <span>Copyright</span>
//             <FaRegCopyright className="w-3.5 h-3.5 inline" />
//             <span>{currentYear}</span>
//             <span className="font-semibold text-white text-wrap">
//               SyncXel Web Solutions.
//             </span>
//             <span>All rights reserved.</span>
//           </p>

//           <div className="flex flex-col md:flex-row items-center gap-1 md:gap-5 space-y-1 md:space-y-0 mb-0 ">
//             <a
//               href="/legal"
//               target="_blank"
//               className="hover:text-cyan-400 transition-colors mb-0 pt-2">
//               Privacy & Terms
//             </a>
//             <a
//               target="_blank"
//               href="mailto:syncxelofficial@gmail.com"
//               className="hover:text-cyan-400 font-baloo flex flex-row items-center gap-2 border-t pt-2 md:border-none">
//               <IoMdMail /> syncxelofficial@gmail.com
//             </a>
//           </div>

//           {/* Sri Lanka Flag SVG Badge */}
//           <div className="flex items-center space-x-1.5 bg-syncxel-card px-3.5 py-1.5 rounded-full border border-syncxel-border/50 text-zinc-300">
//             <span>Handcrafted with</span>
//             <FaHeart className="w-3.5 h-3.5 text-white/50 inline" />
//             <span>in</span>
//             <span className="inline-flex items-center gap-1.5 font-semibold text-white">
//               <img
//                 src="https://flagcdn.com/24x18/lk.png"
//                 alt="Sri Lanka Flag"
//                 className="w-4 h-3 object-cover rounded-xs inline-block shadow-sm"
//               />
//               <span>Sri Lanka</span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegCopyright, FaCaretRight } from "react-icons/fa6";
import { FaCoffee } from "react-icons/fa";
import { FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiGithub } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import { RxLinkedinLogo } from "react-icons/rx";
import { HiOutlineSparkles, HiOutlineArrowUpRight } from "react-icons/hi2";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 pt-0 md:pt-20  pb-10 px-4 sm:px-8 border-t border-white/10 overflow-hidden rounded-t-4xl">
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* 1. TOP BIG HIGH CONTRAST CTA BOX */}
        {/* <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Background Radial Glow *
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Left Text Box *
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
              <HiOutlineSparkles className="w-4 h-4" />
              <span>Let's Build Something Great</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to elevate your digital experience?
            </h2>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Explore our production-ready UI components or hire us to build
              your custom web product with precision.
            </p>
          </div>

          {/* Right Action Buttons *
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto z-10">
            <a
              href="#hire"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-sm transition-all shadow-lg flex items-center justify-center space-x-2 group">
              <span>Start a Project</span>
              <HiOutlineArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="https://buymeacoffee.com/lakshansandeepa"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center px-5 py-3.5 rounded-xl bg-[#FFDD00] hover:bg-[#e6c700] text-black font-bold text-sm transition-all shadow-lg flex items-center justify-center space-x-2">
              <FaCoffee className="w-4 h-4 text-black" />
              <span>Buy Me a Coffee</span>
            </a>
          </div>
        </div> */}

        {/* 1. TOP BIG HIGH CONTRAST CTA BOX WITH ANIMATED BORDER */}
        <div className="relative rounded-3xl p-1px overflow-hidden group max-w-6xl mx-auto my-10">
          {/* 🌟 1. DUWANA BORDER EFFECT (Animated Rotating Gradient) */}
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#06b6d4_0%,#6366f1_50%,#06b6d4_100%)] opacity-70 animate-[spin_6s_linear_infinite] group-hover:opacity-100 transition-opacity" />

          {/* 🌟 2. INNER CONTENT BOX (Dark Background over Border) */}
          <div className="relative rounded-[calc(1.5rem-1px)] bg-slate-950/90 backdrop-blur-xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 z-10">
            {/* Radial Background Glow */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-[90px] pointer-events-none" />

            {/* Left Text Box */}
            <div className="space-y-4 max-w-xl text-center md:text-left z-10">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <HiOutlineSparkles className="w-4 h-4 animate-pulse" />
                <span>Let's Build Something Great</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to elevate your{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  digital experience?
                </span>
              </h2>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Explore our production-ready UI components or hire us to build
                your custom web product with precision.
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-1 md:gap-4 w-full md:w-auto z-10">
              {/* Start Project Button */}
              <a
                href="#hire"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-sm transition-all shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] flex items-center justify-center space-x-2 group/btn active:scale-95">
                <span>Start a Project</span>
                <HiOutlineArrowUpRight className="w-4 h-4 ml-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>

              {/* Buy Me A Coffee Button */}
              <a
                href="https://buymeacoffee.com/lakshansandeepa"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center px-5 py-3.5 rounded-xl bg-[#FFDD00] hover:bg-[#ffe536] text-black font-extrabold text-sm transition-all shadow-[0_0_20px_rgba(255,221,0,0.2)] hover:shadow-[0_0_25px_rgba(255,221,0,0.45)] hover:scale-[1.02] flex items-center justify-center space-x-2.5 active:scale-95 hover:border-2 border-amber-600">
                <FaCoffee className="w-4 h-4 text-black" />
                <span>Buy Me a Coffee</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. MIDDLE FOOTER LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12  pt-20 md:pt-6 border-t border-white/10">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/syncxel-logo-removebg.png"
                alt="SyncXel Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-3xl font-bold text-white tracking-tight font-exo">
                Sync
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                  Xel
                </span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Crafting production-ready UI components, design systems, and
              custom web applications for developers and startups globally.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://github.com/lakshan-beast"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border-3 border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all hover:rounded-2xl shadow-md"
                title="GitHub Profile">
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/lakshan-sandeepa"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border-3 border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all hover:rounded-2xl shadow-md"
                title="LinkedIn Profile">
                <RxLinkedinLogo className="w-5 h-5" />
              </a>
              <a
                href="https://lakshan-sandeepa-dev.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border-3 border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all hover:rounded-2xl shadow-md"
                title="Portfolio Profile">
                <SlGlobe className="w-5 h-5" />
              </a>
              
              <a
                href="https://t.me/lakshan_dev"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border-3 border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all flex items-center justify-center cursor-pointer hover:rounded-2xl shadow-md"
                title="Telegram Chat">
                <FaTelegramPlane className="w-5 h-5" />
              </a>
              <a
                href="mailto:syncxelofficial@gmail.com:"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border-3 border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all flex items-center justify-center cursor-pointer hover:rounded-2xl shadow-md"
                title="Email Chat">
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Library
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="#components"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5" />
                  UI Components
                </a>
              </li>
              <li>
                <a
                  href="#templates"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5" />
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5" />
                  Pro Access
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="#hire"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5" />
                  Custom Web Design
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5" />
                  Workflow
                </a>
              </li>
              <li>
                <a
                  href="#hire"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5" />
                  Project Inquiry
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link
                  to="/docs"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5" />
                  Documentation
                </Link>
              </li>
              <li>
                <a
                  href="/legal"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5" />
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. BOTTOM COPYRIGHT BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
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
            <a
              href="/legal"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors">
              Privacy & Terms
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="mailto:syncxelofficial@gmail.com"
              className="hover:text-cyan-400 flex items-center gap-1.5 transition-colors">
              <IoMdMail className="w-3.5 h-3.5" />
              <span>syncxelofficial@gmail.com</span>
            </a>
          </div>

          {/* Sri Lanka Flag Badge */}
          <div className="flex items-center space-x-1.5 bg-slate-900 px-3.5 py-1.5 rounded-full border border-white/10 text-slate-300">
            <span>Handcrafted with</span>
            <FaHeart className="w-3 h-3 text-white/50 inline" />
            <span>in</span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-white">
              <img
                src="https://flagcdn.com/24x18/lk.png"
                alt="Sri Lanka Flag"
                className="w-4 h-3 object-cover rounded-xs shadow-sm"
              />
              <span>Sri Lanka</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
