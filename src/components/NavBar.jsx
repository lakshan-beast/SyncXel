// import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { IoClose } from "react-icons/io5";
// import { IoIosArrowDown } from "react-icons/io";
// import { FaBarsStaggered } from "react-icons/fa6";
// import { motion } from "framer-motion";

// export default function NavBar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Function to close mobile menu on link click
//   const closeMenu = () => setMobileMenuOpen(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   // 🎯 Dynamic Nav Handler Function
//   const handleNavClick = (e, targetId) => {
//     e.preventDefault();

//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         const element = document.getElementById(targetId);
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 100);
//     } else {
//       const element = document.getElementById(targetId);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 px-4 sm:px-8 pt-4 lg:pt-5 z-50">
//       <nav className="max-w-7xl mx-auto bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 sm:px-6 py-5 shadow-2xl transition-all duration-300 lg:bg-transparent lg:border-none">
//         <div className="flex items-center justify-between">
//           <Link
//             to="/"
//             className="flex items-center space-x-3 cursor-pointer group">
//             {/* Animated Rotating Border Logo Container */}
//             <div className="relative w-11 h-11 flex items-center justify-center">
//               {/* Karakena (Spinning) Neon Gradient Ring */}
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
//                 className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-cyan-400 p-[2px] shadow-[0_0_15px_rgba(34,211,238,0.4)]">
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
//               <span className="text-3xl font-black tracking-tighter text-white font-baloo uppercase group-hover:text-cyan-200 transition-colors drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
//                 Sync
//                 <span className="text-transparent tracking-wide bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 ml-1.5">
//                   Xel
//                 </span>
//               </span>
//               <span className="text-[9px] font-baloo tracking-widest text-cyan-400/80 -mt-1 uppercase">
//                 UI MATRIX v2.0
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium text-white/80">
//             {/* Direct Link: Components */}
//             <Link
//               to="/components"
//               className="hover:text-white transition-colors">
//               Components
//             </Link>
//             <Link to="/docs" className="hover:text-white transition-colors">
//               Documentation
//             </Link>

//             {/* 3. Features Section */}
//             <a
//               href="#features"
//               onClick={(e) => handleNavClick(e, "features")}
//               className="hover:text-cyan-400 transition-colors">
//               Why Syncxel
//             </a>

//             {/* 4. FAQ Section */}
//             <a
//               href="#faq"
//               onClick={(e) => handleNavClick(e, "faq")}
//               className="hover:text-cyan-400 transition-colors">
//               FAQ
//             </a>

//             {/* Dropdown: Solutions / Services */}
//             <div className="relative group cursor-pointer py-1">
//               <span className="hover:text-white flex items-center space-x-1 transition-colors">
//                 <span>Solutions</span>
//                 <IoIosArrowDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
//               </span>

//               {/* Desktop Only Dropdown Menu */}
//               <div className="absolute top-full left-0 mt-3 w-60 bg-slate-900/95 backdrop-blur-lg border border-white/10 rounded-xl p-3 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                 <Link
//                   to="/components"
//                   className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
//                   <div className="text-white font-medium">Free UI Library</div>
//                   <div className="text-xs text-white/60">
//                     Copy-paste buttons, inputs & loaders
//                   </div>
//                 </Link>
//                 <a
//                   href="#hire"
//                   onClick={(e) => handleNavClick(e, "hire")}
//                   className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
//                   <div className="text-white font-medium">
//                     Custom Engineering
//                   </div>
//                   <div className="text-xs text-white/60">
//                     Hire us for custom web apps
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Desktop CTA Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <a
//               href="#hire"
//               onClick={(e) => handleNavClick(e, "hire")}
//               className="text-sm font-medium text-white hover:text-cyan-400 transition-colors px-3 py-2">
//               Hire Us
//             </a>
//             <Link
//               to="/components"
//               className="text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors px-4 py-2 rounded-xl shadow-lg shadow-cyan-500/20">
//               Get Started
//             </Link>

//             {/* <motion.link
//               to="/components"
//               whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
//               whileTap={{ scale: 0.9 }}
//               transition={{ type: "spring", stiffness: 500, damping: 10 }}
//               className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 cursor-pointer">
//               Get Started
//             </motion.link> */}
//           </div>

//           {/* Mobile Menu Toggle Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="text-white hover:text-white/80 p-1 focus:outline-none"
//               aria-label="Toggle Menu">
//               {mobileMenuOpen ? (
//                 <IoClose className="w-8 h-8" />
//               ) : (
//                 <FaBarsStaggered className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown (Clean, Non-nested Structure) */}
//         {mobileMenuOpen && (
//           <div className="mt-4 pt-4 border-t border-white/10 flex flex-col space-y-3 md:hidden text-center">
//             <Link
//               to="/components"
//               onClick={closeMenu}
//               className="text-white/90 hover:text-white py-1.5 rounded-lg hover:bg-white/5 font-medium">
//               UI Components
//             </Link>
//             <Link
//               to="/docs"
//               className="hover:text-white transition-colors hover:bg-white/5 rounded-lg">
//               Documentation
//             </Link>
//             <a
//               href="#features"
//               onClick={(e) => handleNavClick(e, "features")}
//               className="hover:text-cyan-400 transition-colors">
//               Why Syncxel
//             </a>

//             <a
//               href="#faq"
//               onClick={(e) => handleNavClick(e, "faq")}
//               className="hover:text-cyan-400 transition-colors">
//               FAQ
//             </a>

//             <div className="pt-8 flex flex-col gap-2 text-center">
//               <a
//                 href="#hire"
//                 onClick={(e) => handleNavClick(e, "hire")}
//                 className="text-sm font-medium text-white hover:text-cyan-400 transition-colors px-3 py-2">
//                 Hire Us
//               </a>
//               <Link
//                 to="/components"
//                 className="text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors px-4 py-2 rounded-xl shadow-lg shadow-cyan-500/20">
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 px-4 sm:px-8 pt-4 lg:pt-5 z-50">
      <nav className="max-w-7xl mx-auto bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 sm:px-6 py-5 shadow-2xl transition-all duration-300 lg:bg-transparent lg:border-none">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-3 cursor-pointer group">
            {/* Animated Rotating Border Logo Container */}
            <div className="relative w-11 h-11 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-cyan-400 p-[2px] shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                <div className="w-full h-full bg-slate-950 rounded-full" />
              </motion.div>

              <motion.img
                whileHover={{ scale: 1.1 }}
                src="/syncxel-logo-removebg.png"
                alt="SyncXel Logo"
                width={28}
                height={28}
                className="object-contain relative z-10 rounded-full"
              />
            </div>

            {/* Brand Name with Glow Effect */}
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter text-white font-baloo uppercase group-hover:text-cyan-200 transition-colors drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
                Sync
                <span className="text-transparent tracking-wide bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 ml-1.5">
                  Xel
                </span>
              </span>
              <span className="text-[9px] font-baloo tracking-widest text-cyan-400/80 -mt-1 uppercase">
                UI MATRIX v2.0
              </span>
            </div>

            <span className="px-2.5 py-0.5 text-[10px] font-extrabold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full tracking-wider uppercase shadow-[0_0_10px_rgba(34,211,238,0.2)] animate-pulse">
              Beta
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium text-white/80">
            <Link
              to="/components"
              className="hover:text-white transition-colors">
              Components
            </Link>
            <Link to="/docs" className="hover:text-white transition-colors">
              Documentation
            </Link>
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="hover:text-cyan-400 transition-colors">
              Why Syncxel
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, "faq")}
              className="hover:text-cyan-400 transition-colors">
              FAQ
            </a>

            {/* Dropdown: Solutions / Services */}
            <div className="relative group cursor-pointer py-1">
              <span className="hover:text-white flex items-center space-x-1 transition-colors">
                <span>Solutions</span>
                <IoIosArrowDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </span>

              <div className="absolute top-full left-0 mt-3 w-60 bg-slate-900/95 backdrop-blur-lg border border-white/10 rounded-xl p-3 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/components"
                  className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="text-white font-medium">Free UI Library</div>
                  <div className="text-xs text-white/60">
                    Copy-paste buttons, inputs & loaders
                  </div>
                </Link>
                <a
                  href="#hire"
                  onClick={(e) => handleNavClick(e, "hire")}
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
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#hire"
              onClick={(e) => handleNavClick(e, "hire")}
              className="text-sm font-medium text-white hover:text-cyan-400 transition-colors px-3 py-2">
              Hire Us
            </a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <Link
                to="/components"
                className="inline-block text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors px-4 py-2 rounded-xl shadow-lg shadow-cyan-500/20">
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-white/80 p-1 focus:outline-none"
              aria-label="Toggle Menu">
              {mobileMenuOpen ? (
                <IoClose className="w-8 h-8" />
              ) : (
                <FaBarsStaggered className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown with Smooth Animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mt-4 pt-4 border-t border-white/10 flex flex-col space-y-3 md:hidden text-center overflow-hidden">
              <Link
                to="/components"
                onClick={closeMenu}
                className="text-white/90 hover:text-white py-1.5 rounded-lg hover:bg-white/5 font-medium">
                UI Components
              </Link>
              <Link
                to="/docs"
                onClick={closeMenu}
                className="text-white/90 hover:text-white transition-colors hover:bg-white/5 rounded-lg py-1.5">
                Documentation
              </Link>
              <a
                href="#features"
                onClick={(e) => {
                  handleNavClick(e, "features");
                  closeMenu();
                }}
                className="text-white/90 hover:text-cyan-400 transition-colors py-1.5">
                Why Syncxel
              </a>
              <a
                href="#faq"
                onClick={(e) => {
                  handleNavClick(e, "faq");
                  closeMenu();
                }}
                className="text-white/90 hover:text-cyan-400 transition-colors py-1.5">
                FAQ
              </a>

              <div className="pt-4 pb-2 flex flex-col gap-2 text-center">
                <a
                  href="#hire"
                  onClick={(e) => {
                    handleNavClick(e, "hire");
                    closeMenu();
                  }}
                  className="text-sm font-medium text-white hover:text-cyan-400 transition-colors px-3 py-2">
                  Hire Us
                </a>
                <Link
                  to="/components"
                  onClick={closeMenu}
                  className="text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors px-4 py-2 rounded-xl shadow-lg shadow-cyan-500/20">
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
