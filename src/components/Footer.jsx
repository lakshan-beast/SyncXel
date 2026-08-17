// import React from "react";
// import {
//   FaGithub,
//   FaTwitter,
//   FaLinkedinIn,
//   FaHeart,
//   FaRegCopyright,
// } from "react-icons/fa6";
// import { FaCoffee } from "react-icons/fa";
// import { HiOutlineSparkles, HiOutlineArrowUpRight } from "react-icons/hi2";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative bg-syncxel-dark pt-20 pb-10 sm:px-8 border-t border-syncxel-border/40 overflow-hidden">
//       {/* subtle background gradient glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-syncxel-blue/10 blur-[120px] pointer-events-none">
//         <div className="mx-auto max-w-7xl space-y-16">
//           {/* top big high contrast cta box */}
//           <div className="relative rounded-3xl bg-linear-to-b from-syncxel-card to-[#0e121a] border border-syncxel-border p-8 md:p12 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
//             {/* background radial glow */}
//             <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-syncxel-cyan/10 rounded-full blur-[80px] pointer-events-none ">
//               {/* left text  */}
//               <div className="space-y-3 max-w-7xl text-center md:text-left">
//                 <div className="inline-flex items-center space-x-2 py-1 rounded-full bg-syncxel-cyan/10 border border-syncxel-cyan/20 text-syncxel-cyan text-xs font-semibold">
//                   <HiOutlineSparkles className="w-4 h-4" />
//                   <span>Let's Build Something Great</span>
//                   <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
//                     Ready to elevate your digital experience?
//                   </h2>
//                   <p className="text-syncxel-text-muted text-sm md:text-base">
//                     Explore our production-ready UI components or hire us to
//                     build your custom web product with precision.
//                   </p>
//                 </div>

//                 {/* right action buttons */}
//                 <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
//                   {/* Start Project CTA */}
//                   <a
//                     href="#hire"
//                     className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-syncxel-dark font-bold text-sm transition-all shadow-lg flex items-center justify-center space-x-2 group">
//                     <span>Start a Project</span>
//                     <HiOutlineArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                   </a>

//                   {/* Buy Me a Coffee Button ☕ */}
//                   <a
//                     href="https://buymeacoffee.com"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="w-full sm:w-auto text-center px-5 py-3.5 rounded-xl bg-[#FFDD00] hover:bg-[#e6c700] text-black font-bold text-sm transition-all shadow-lg flex items-center justify-center space-x-2">
//                     <FaCoffee className="w-4 h-4 text-black" />
//                     <span>Buy Me a Coffee</span>
//                   </a>
//                 </div>
//               </div>

//               {/* 2. MIDDLE FOOTER LINKS GRID */}
//               <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pt-6 border-t border-syncxel-border/30">
//                 {/* Brand Column */}
//                 <div className="col-span-2 space-y-4">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-8 h-8 rounded-lg bg-syncxel-gradient p-0.5 flex items-center justify-center">
//                       <div className="w-full h-full bg-syncxel-dark rounded-md flex items-center justify-center">
//                         <span className="text-transparent bg-clip-text bg-syncxel-gradient font-black text-sm">
//                           SX
//                         </span>
//                       </div>
//                     </div>
//                     <span className="text-lg font-bold text-white tracking-tight">
//                       Sync
//                       <span className="text-transparent bg-clip-text bg-syncxel-gradient">
//                         Xel
//                       </span>
//                     </span>
//                   </div>
//                   <p className="text-xs text-syncxel-textMuted max-w-sm leading-relaxed">
//                     Crafting production-ready UI components, design systems, and
//                     custom web applications for developers and startups
//                     globally.
//                   </p>
//                   {/* Social Icons */}
//                   <div className="flex items-center space-x-3 pt-2">
//                     <a
//                       href="https://github.com"
//                       className="p-2.5 rounded-lg bg-syncxel-card hover:bg-syncxel-border text-syncxel-textMuted hover:text-white transition-colors">
//                       <FaGithub className="w-4 h-4" />
//                     </a>
//                     <a
//                       href="https://twitter.com"
//                       className="p-2.5 rounded-lg bg-syncxel-card hover:bg-syncxel-border text-syncxel-textMuted hover:text-white transition-colors">
//                       <FaTwitter className="w-4 h-4" />
//                     </a>
//                     <a
//                       href="https://linkedin.com"
//                       className="p-2.5 rounded-lg bg-syncxel-card hover:bg-syncxel-border text-syncxel-textMuted hover:text-white transition-colors">
//                       <FaLinkedinIn className="w-4 h-4" />
//                     </a>
//                   </div>
//                 </div>

//                 {/* Nav Links */}
//                 <div>
//                   <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
//                     Product
//                   </h4>
//                   <ul className="space-y-2.5 text-xs text-syncxel-textMuted">
//                     <li>
//                       <a
//                         href="#components"
//                         className="hover:text-white transition-colors">
//                         UI Components
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#templates"
//                         className="hover:text-white transition-colors">
//                         Templates
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#pricing"
//                         className="hover:text-white transition-colors">
//                         Pro Access
//                       </a>
//                     </li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
//                     Services
//                   </h4>
//                   <ul className="space-y-2.5 text-xs text-syncxel-textMuted">
//                     <li>
//                       <a
//                         href="#hire"
//                         className="hover:text-white transition-colors">
//                         Custom Web Design
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#hire"
//                         className="hover:text-white transition-colors">
//                         React & Tailwind
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#hire"
//                         className="hover:text-white transition-colors">
//                         Full Stack Apps
//                       </a>
//                     </li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
//                     Support
//                   </h4>
//                   <ul className="space-y-2.5 text-xs text-syncxel-textMuted">
//                     <li>
//                       <a
//                         href="#docs"
//                         className="hover:text-white transition-colors">
//                         Documentation
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#privacy"
//                         className="hover:text-white transition-colors">
//                         Privacy Policy
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#terms"
//                         className="hover:text-white transition-colors">
//                         Terms of Service
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               {/* 3. BOTTOM COPYRIGHT BAR */}
//               <div className="pt-8 border-t border-syncxel-border/30 flex flex-col md:flex-row items-center justify-between text-xs text-syncxel-textMuted gap-4">
//                 <p className="flex items-center gap-1.5">
//                   <span>Copyright</span>
//                   <FaRegCopyright className="w-3.5 h-3.5 inline" />
//                   <span>{currentYear}</span>
//                   <span className="font-semibold text-white">
//                     SyncXel Web Solutions.
//                   </span>
//                   <span>All rights reserved.</span>
//                 </p>

//                 {/* Sri Lanka Flag SVG Badge */}
//                 <div className="flex items-center space-x-1.5 bg-syncxel-card px-3.5 py-1.5 rounded-full border border-syncxel-border/50 text-zinc-300">
//                   <span>Handcrafted with</span>
//                   <FaHeart className="w-3.5 h-3.5 text-red-500 inline" />
//                   <span>in</span>
//                   <span className="inline-flex items-center gap-1.5 font-semibold text-white">
//                     <img
//                       src="https://flagcdn.com/24x18/lk.png"
//                       alt="Sri Lanka Flag"
//                       className="w-4 h-3 object-cover rounded-xs inline-block shadow-sm"
//                     />
//                     <span>Sri Lanka</span>
//                   </span>
//                 </div>

//         </div>

//       </div>
//     </footer>
//   );
// }

import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaHeart,
  FaRegCopyright,
} from "react-icons/fa6";
import { FaCoffee } from "react-icons/fa";
import { HiOutlineSparkles, HiOutlineArrowUpRight } from "react-icons/hi2";
// import { GoPlus } from "react-icons/go";
import { FaCaretRight } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-syncxel-dark pt-20 pb-10 px-4 sm:px-8 border-t border-syncxel-border/40 overflow-hidden">
      {/* Subtle Background Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-syncxel-blue/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* 1. TOP BIG HIGH CONTRAST CTA BOX */}
        <div className="relative rounded-3xl bg-linear-to-b from-syncxel-card to-[#0e121a] border border-syncxel-border p-8 md:p-12 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Background Radial Glow */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-syncxel-cyan/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Left Text Box */}
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-syncxel-cyan/10 border border-syncxel-cyan/20 text-syncxel-cyan text-xs font-semibold">
              <HiOutlineSparkles className="w-4 h-4" />
              <span>Let's Build Something Great</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to elevate your digital experience?
            </h2>

            <p className="text-syncxel-textMuted text-sm md:text-base">
              Explore our production-ready UI components or hire us to build
              your custom web product with precision.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto z-10">
            {/* Start Project CTA */}
            <a
              href="#hire"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-syncxel-dark font-bold text-sm transition-all shadow-lg flex items-center justify-center space-x-2 group">
              <span>Start a Project</span>
              <HiOutlineArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Buy Me a Coffee Button ☕ */}
            <a
              href="https://buymeacoffee.com/lakshansandeepa"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center px-5 py-3.5 rounded-xl bg-[#FFDD00] hover:bg-[#e6c700] text-black font-bold text-sm transition-all shadow-lg flex items-center justify-center space-x-2">
              <FaCoffee className="w-4 h-4 text-black" />
              <span>Buy Me a Coffee</span>
            </a>
          </div>
        </div>

        {/* 2. MIDDLE FOOTER LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pt-6 border-t border-syncxel-border/30">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-3">            
              <img
                src="/syncxel-logo-removebg.png"
                alt="SyncXel Logo"
                width={50}
                height={50}
              />
              <span className="text-2xl font-bold text-white tracking-tight font-exo">
                Sync
                <span className="text-transparent bg-clip-text bg-syncxel-gradient">
                  Xel
                </span>
              </span>
            </div>

            <p className="text-xs text-white/70 max-w-sm leading-relaxed">
              Crafting production-ready UI components, design systems, and
              custom web applications for developers and startups globally.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://github.com"
                className="p-2.5 rounded-lg bg-syncxel-card hover:bg-syncxel-border text-syncxel-textMuted hover:text-white transition-colors">
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                className="p-2.5 rounded-lg bg-syncxel-card hover:bg-syncxel-border text-syncxel-textMuted hover:text-white transition-colors">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-2.5 rounded-lg bg-syncxel-card hover:bg-syncxel-border text-syncxel-textMuted hover:text-white transition-colors">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Product
            </h4>
            <ul className="space-y-1 text-xs text-white/70 pl-1">
              <li>
                <a
                  href="#components"
                  className="hover:text-white transition-colors flex flex-row items-center gap-1.5 group">
                  <FaCaretRight className="group-hover:rotate-90" />
                  UI Components
                </a>
              </li>
              <li>
                <a
                  href="#templates"
                  className="hover:text-white transition-colors flex flex-row items-center gap-1.5 group">
                  <FaCaretRight className="group-hover:rotate-90" />
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors flex flex-row items-center gap-1.5 group">
                  <FaCaretRight className="group-hover:rotate-90" />
                  Pro Access
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-1 text-xs text-white/70 pl-1">
              <li>
                <a
                  href="#hire"
                  className="hover:text-white transition-colors flex flex-row items-center gap-1.5 group">
                  <FaCaretRight className="group-hover:rotate-90" />
                  Custom Web Design
                </a>
              </li>
              <li>
                <a
                  href="#hire"
                  className="hover:text-white transition-colors flex flex-row items-center gap-1.5 group">
                  <FaCaretRight className="group-hover:rotate-90" />
                  React & Tailwind
                </a>
              </li>
              <li>
                <a
                  href="#hire"
                  className="hover:text-white transition-colors flex flex-row items-center gap-1.5 group">
                  <FaCaretRight className="group-hover:rotate-90" />
                  Full Stack Apps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Support
            </h4>
            <ul className="space-y-1 text-xs text-white/70 pl-1">
              <li>
                <a
                  href="#docs"
                  className="hover:text-white transition-colors flex flex-row items-center gap-1.5 group">
                  <FaCaretRight className="group-hover:rotate-90" />
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:text-white transition-colors flex flex-row items-center gap-1.5 group">
                  <FaCaretRight className="group-hover:rotate-90" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="hover:text-white  transition-colors flex flex-row items-center gap-1.5 group">
                  <FaCaretRight className="group-hover:rotate-90" />
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. BOTTOM COPYRIGHT BAR */}
        <div className="pt-8 border-t border-syncxel-border/30 flex flex-col md:flex-row items-center justify-between text-xs text-syncxel-textMuted gap-4">
          <p className="flex items-center gap-1.5 text-white/60">
            <span>Copyright</span>
            <FaRegCopyright className="w-3.5 h-3.5 inline" />
            <span>{currentYear}</span>
            <span className="font-semibold text-white">
              SyncXel Web Solutions.
            </span>
            <span>All rights reserved.</span>
          </p>

          {/* Sri Lanka Flag SVG Badge */}
          <div className="flex items-center space-x-1.5 bg-syncxel-card px-3.5 py-1.5 rounded-full border border-syncxel-border/50 text-zinc-300">
            <span>Handcrafted with</span>
            <FaHeart className="w-3.5 h-3.5 text-white/50 inline" />
            <span>in</span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-white">
              <img
                src="https://flagcdn.com/24x18/lk.png"
                alt="Sri Lanka Flag"
                className="w-4 h-3 object-cover rounded-xs inline-block shadow-sm"
              />
              <span>Sri Lanka</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
