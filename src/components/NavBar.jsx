// import React, { useState } from "react";
// import { IoSparklesOutline, IoClose } from "react-icons/io5";
// import { IoIosArrowDown } from "react-icons/io";
// import { FaBarsStaggered } from "react-icons/fa6";

// export default function NavBar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 px-4 sm:px-8 pt-4 z-50">
//       <nav className="max-w-7xl mx-auto bg-white/8 backdrop-blur-md border-2 border-white/15 rounded-2xl px-6 py-3 shadow-2xl transition-all duration-300">
//         <div className="flex items-center justify-between">
//           {/* brand name and logo */}
//           <div className="flex items-center space-x-2 cursor-pointer">
//             <img
//               src="/syncxel-logo-removebg.png"
//               alt="SyncXel Logo"
//               width={35}
//               height={35}
//             />
//             <span className="text-2xl font-bold font-heading tracking-tight text-white">
//               Sync
//               <span className="text-transparent bg-clip-text bg-syncxel-gradient ">
//                 Xel
//               </span>
//             </span>
//           </div>

//           {/* navigation links (desktop) */}
//           <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/80">
//             {/* multi-link dropdown:features */}
//             <div className="relative group cursor-pointer py-1">
//               <span className="hover:text-white flex items-center space-x-1 transition-colors">
//                 <span>Features</span>
//                 <IoIosArrowDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
//               </span>
//               {/* Dropdown Menu */}
//               <div className="absolute top-full left-0 mt-3 w-64 bg-syncxel-card border border-syncxel-border rounded-xl p-3 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                 <a
//                   href="#components"
//                   className="block px-3 py-2 rounded-lg hover:bg-syncxel-dark transition-colors">
//                   <div className="text-white font-medium">UI Components</div>
//                   <div className="text-xs text-white/60">
//                     Ready-to-use Navbars, Heroes & Cards
//                   </div>
//                 </a>
//                 <a
//                   href="#templates"
//                   className="block px-3 py-2 rounded-lg hover:bg-syncxel-dark transition-colors">
//                   <div className="text-white font-medium">Full Templates</div>
//                   <div className="text-xs text-white/60">
//                     Complete SaaS & Agency Landing Pages
//                   </div>
//                 </a>
//                 <a
//                   href="#animations"
//                   className="block px-3 py-2 rounded-lg hover:bg-syncxel-dark transition-colors">
//                   <div className="text-white font-medium">Micro-Animations</div>
//                   <div className="text-xs text-white/60">
//                     Smooth CSS & JS interactive effects
//                   </div>
//                 </a>
//               </div>
//             </div>

//             {/* Multi-link Dropdown: Solutions */}
//             <div className="relative group cursor-pointer py-1">
//               <span className="hover:text-white flex items-center space-x-1 transition-colors">
//                 <span>Solutions</span>
//                 <IoIosArrowDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
//               </span>

//               <div className="absolute top-full left-0 mt-3 w-60 bg-syncxel-card border border-syncxel-border rounded-xl p-3 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                 <a
//                   href="#components"
//                   className="block px-3 py-2 rounded-lg hover:bg-syncxel-dark transition-colors">
//                   <div className="text-white font-medium">For Developers</div>
//                   <div className="text-xs text-white/60">
//                     Copy-paste production ready code
//                   </div>
//                 </a>
//                 <a
//                   href="#hire"
//                   className="block px-3 py-2 rounded-lg hover:bg-syncxel-dark transition-colors">
//                   <div className="text-white font-medium">
//                     For Clients & Startups
//                   </div>
//                   <div className="text-xs text-white/60">
//                     Hire us for custom web engineering
//                   </div>
//                 </a>
//               </div>
//             </div>

//             <a href="#pricing" className="hover:text-white transition-colors">
//               Pricing
//             </a>

//             {/* Resources Dropdown */}
//             <div className="relative group cursor-pointer py-1">
//               <span className="hover:text-white flex items-center space-x-1 transition-colors">
//                 <span>Resources</span>
//                 <IoIosArrowDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
//               </span>

//               <div className="absolute top-full left-0 mt-3 w-52 bg-syncxel-card border border-syncxel-border rounded-xl p-2 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                 <a
//                   href="#setup"
//                   className="block px-3 py-2 rounded-lg hover:bg-syncxel-dark text-white text-sm">
//                   Quick Setup Guide
//                 </a>
//                 <a
//                   href="#how-it-works"
//                   className="block px-3 py-2 rounded-lg hover:bg-syncxel-dark text-white text-sm">
//                   How We Work
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* cta button */}
//           <div className="hidden md:flex items-center space-x-4">
//             {/* custom projects link */}
//             <a
//               href="#hire"
//               className="text-sm font-medium text-white hover:text-syncxel-cyan transition-colors px-3 py-2">
//               Hire Us
//             </a>

//             {/* go to primary button  */}
//             {/* <a
//               href="#pro"
//               className="flex items-center gap-1.5 space-x-1.5 text-sm font-semibold hover:opacity-90 transition-opacity px-4 py-2 rounded-xl shadow-lg shadow-syncxel-cyan/20  bg-amber-400 text-syncxel-dark/60
//             ">
//               <IoSparklesOutline className="w-4 h-4 fill-syncxel-dark" />
//               <span>Go Pro</span>
//             </a> */}
//           </div>

//           {/* mobile menu-toggle */}
//           <div className="md:hidden flex items-center">
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="hover:text-syncxel-text-muted text-white">
//               {mobileMenuOpen ? (
//                 <IoClose className="w-6 h-6" />
//               ) : (
//                 <FaBarsStaggered className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* mobile menu (open state) */}
//         {mobileMenuOpen && (
//           <div className="mt-4 pt-4 border-t border-syncxel-border/10 flex flex-col space-y-3 md:hidden">
//             <div className="relative group cursor-pointer py-1 z-40">
//               <span className="hover:text-white flex items-center space-x-1 transition-colors">
//                 <span>Features</span>
//                 <IoIosArrowDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
//               </span>
//               {/* Dropdown Menu */}
//               <div className="absolute top-full left-0 mt-3 w-64 bg-syncxel-card border border-syncxel-border rounded-xl p-3 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                 <a
//                   href="#components"
//                   className="block px-3 py-2 rounded-lg hover:bg-syncxel-dark transition-colors">
//                   <div className="text-white font-medium">UI Components</div>
//                   <div className="text-xs text-white/60">
//                     Ready-to-use Navbars, Heroes & Cards
//                   </div>
//                 </a>
//                 <a
//                   href="#templates"
//                   className="block px-3 py-2 rounded-lg hover:bg-syncxel-dark transition-colors">
//                   <div className="text-white font-medium">Full Templates</div>
//                   <div className="text-xs text-white/60">
//                     Complete SaaS & Agency Landing Pages
//                   </div>
//                 </a>
//                 <a
//                   href="#animations"
//                   className="block px-3 py-2 rounded-lg hover:bg-syncxel-dark transition-colors">
//                   <div className="text-white font-medium">Micro-Animations</div>
//                   <div className="text-xs text-white/60">
//                     Smooth CSS & JS interactive effects
//                   </div>
//                 </a>
//               </div>
//             </div>

//             {/* Multi-link Dropdown: Solutions */}
//             <div className="relative group cursor-pointer py-1 z-50">
//               <span className="hover:text-white flex items-center space-x-1 transition-colors">
//                 <span>Solutions</span>
//                 <IoIosArrowDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
//               </span>

//               <div className="absolute top-full left-0 mt-3 w-60 bg-syncxel-card border border-syncxel-border rounded-xl p-3 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                 <a
//                   href="#devs"
//                   className="block px-3 py-2 rounded-lg hover:bg-syncxel-dark transition-colors">
//                   <div className="text-white font-medium">For Developers</div>
//                   <div className="text-xs text-white/60">
//                     Copy-paste production ready code
//                   </div>
//                 </a>
//                 <a
//                   href="#clients"
//                   className="block px-3 py-2 rounded-lg hover:bg-syncxel-dark transition-colors">
//                   <div className="text-white font-medium">
//                     For Clients & Startups
//                   </div>
//                   <div className="text-xs text-white/60">
//                     Hire us for custom web engineering
//                   </div>
//                 </a>
//               </div>
//             </div>

//             <a href="#pricing" className="hover:text-white transition-colors">
//               Pricing
//             </a>

//             <div className="relative group cursor-pointer py-1 z-50">
//               <span className="hover:text-white flex items-center space-x-1 transition-colors">
//                 <span>Resources</span>
//                 <IoIosArrowDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
//               </span>

//               <div className="absolute top-full left-0 mt-3 w-52 bg-syncxel-card border border-syncxel-border rounded-xl p-2 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                 <a
//                   href="#docs"
//                   className="block px-3 py-2 rounded-lg hover:bg-syncxel-dark text-white text-sm">
//                   Documentation
//                 </a>
//                 <a
//                   href="#colors"
//                   className="block px-3 py-2 rounded-lg hover:bg-syncxel-dark text-white text-sm">
//                   Color Palettes
//                 </a>
//               </div>
//             </div>

//             <div className="pt-2 flex flex-col gap-2">
//               <a
//                 href="#hire"
//                 className="text-center text-sm font-medium text-white bg-syncxel-card py-2.5 rounded-xl border border-syncxel-border">
//                 Hire Us
//               </a>

//               {/* <a
//                 href="#pro"
//                 className="text-center text-sm font-semibold text-syncxel-dark bg-syncxel-gradient py-2.5 rounded-xl flex flex-row items-center justify-center gap-2.5">
//                 <IoSparklesOutline className="w-4 h-4 fill-syncxel-dark" />
//                 Go Pro
//               </a> */}
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to close mobile menu on link click
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 px-3 sm:px-8 pt-4 z-50">
      <nav className="max-w-7xl mx-auto bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 sm:px-6 py-3 shadow-2xl transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center space-x-2 cursor-pointer">
            <img
              src="/syncxel-logo-removebg.png"
              alt="SyncXel Logo"
              width={35}
              height={35}
              className="object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Sync
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                Xel
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium text-white/80">
            {/* Direct Link: Components */}
            <a
              href="#components"
              className="hover:text-white transition-colors">
              Components
            </a>

            {/* Direct Link: Templates */}
            <a href="#templates" className="hover:text-white transition-colors">
              Templates
            </a>

            {/* Dropdown: Solutions / Services */}
            <div className="relative group cursor-pointer py-1">
              <span className="hover:text-white flex items-center space-x-1 transition-colors">
                <span>Solutions</span>
                <IoIosArrowDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </span>

              {/* Desktop Only Dropdown Menu */}
              <div className="absolute top-full left-0 mt-3 w-60 bg-slate-900/95 backdrop-blur-lg border border-white/10 rounded-xl p-3 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a
                  href="#components"
                  className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="text-white font-medium">Free UI Library</div>
                  <div className="text-xs text-white/60">
                    Copy-paste buttons, inputs & loaders
                  </div>
                </a>
                <a
                  href="#hire"
                  className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="text-white font-medium">
                    Custom Engineering
                  </div>
                  <div className="text-xs text-white/60">
                    Hire us for custom web apps
                  </div>
                </a>
              </div>
            </div>

            {/* Direct Link: Services */}
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#hire"
              className="text-sm font-medium text-white hover:text-cyan-400 transition-colors px-3 py-2">
              Hire Us
            </a>
            <a
              href="#components"
              className="text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors px-4 py-2 rounded-xl shadow-lg shadow-cyan-500/20">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-white/80 p-1 focus:outline-none"
              aria-label="Toggle Menu">
              {mobileMenuOpen ? (
                <IoClose className="w-6 h-6" />
              ) : (
                <FaBarsStaggered className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown (Clean, Non-nested Structure) */}
        {mobileMenuOpen && (
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col space-y-3 md:hidden">
            <a
              href="#components"
              onClick={closeMenu}
              className="text-white/90 hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/5 font-medium">
              UI Components
            </a>
            <a
              href="#templates"
              onClick={closeMenu}
              className="text-white/90 hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/5 font-medium">
              Templates
            </a>
            <a
              href="#services"
              onClick={closeMenu}
              className="text-white/90 hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/5 font-medium">
              Services
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#hire"
                onClick={closeMenu}
                className="text-center text-sm font-medium text-white bg-white/10 py-2.5 rounded-xl border border-white/10 active:bg-white/20">
                Hire Us
              </a>
              <a
                href="#components"
                onClick={closeMenu}
                className="text-center text-sm font-semibold text-slate-950 bg-cyan-400 active:bg-cyan-500 py-2.5 rounded-xl">
                Explore Components
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
