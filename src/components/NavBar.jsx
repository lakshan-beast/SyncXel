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
      className="fixed top-0 left-0 right-0 px-3 sm:px-8 lg:px-0 pt-3 lg:pt-0 z-50 ">
      {/* Nav Container - Clean White & Black DevSync Style */}
      <nav className="w-full max-w-7xl lg:max-w-full mx-auto bg-white/90 backdrop-blur-sm border-2 border-slate-300/80 lg:border-none rounded-3xl md:rounded-b-4xl md:rounded-t-none shadow-md transition-all duration-300 relative text-slate-900 px-3 py-2 lg:px-30 lg:pt-2">
        {/* logo */}
        <div className="px-4 sm:px-6 py-4 lg:py-5 flex items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-4 cursor-pointer group">
            {/* <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-100">
              {/* 🔥 Super Smooth & Glowing Rotating Ring *
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                className="absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,#22d3ee,#ffffff,#3b82f6,#22d3ee)] p-[2px] shadow-[0_0_20px_rgba(34,211,238,0.7)]">
                <div className="w-full h-full bg-slate-950 rounded-full" />
              </motion.div>

              <motion.img
                // whileHover={{ scale: 1.05 }}
                src="/syncxel-logo-removebg.png"
                alt="SyncXel Logo"
                width={28}
                height={28}
                className="object-contain relative z-10 rounded-full"
              />
            </div> */}

            <div className="flex flex-col">
              {/* Option 2 Connected Pill Style */}
              <div className="flex items-center">
                <span className="text-2xl md:text-3xl font-black font-baloo uppercase bg-transparent text-slate-950 p-0 rounded-l-md shadow-inner leading-0">
                  Sync
                </span>
                <motion.span
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-2xl md:text-3xl font-black font-baloo uppercase bg-slate-950 text-white px-2 py-0.5  ml-0.5 rounded-md border border-l-0 border-white/20 shadow-md leading-none">
                  Xel
                </motion.span>
              </div>

              <span className="text-[10px] font-baloo tracking-widest text-slate-400 -mt-0.5 uppercase">
                UI MATRIX V2.0
              </span>
            </div>

            <span className="inline-block px-3 py-0.5 ml-1 text-[9px] font-extrabold font-baloo text-slate-400 bg-slate-500/15 border border-slate-500/30 rounded-full tracking-wider uppercase shadow-[0_0_8px_rgba(34,211,238,0.2)] animate-pulse">
              Beta
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-6 text-xs lg:text-lg font-baloo text-slate-600/80">
            {/* Components Dropdown */}
            <div className="relative group cursor-pointer py-1">
              <Link
                to="/components"
                className="hover:text-cyan-600 flex items-center space-x-1 transition-colors">
                <span>components()</span>
                <IoIosArrowDown className="w-3 h-3 transition-transform group-hover:rotate-180 text-slate-400" />
              </Link>

              <div className="absolute top-full left-0 mt-3 w-72 bg-white backdrop-blur-2xl border border-slate-200 rounded-xl p-3 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                  // live_preview_matrix
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-slate-900">
                      Laser Button v2
                    </span>
                    <span className="text-[9px] font-mono text-cyan-700 bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-200">
                      hot
                    </span>
                  </div>
                  <div className="h-7 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] text-slate-600 font-mono">
                    &lt;Button /&gt;
                  </div>
                </div>
                <Link
                  to="/components"
                  className="block px-2 py-1 text-center text-xs text-slate-600 hover:text-cyan-600 font-mono transition-colors">
                  browse_all_components &rarr;
                </Link>
              </div>
            </div>

            <Link to="/docs" className="hover:text-cyan-600 transition-colors">
              docs()
            </Link>

            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="hover:text-cyan-600 transition-colors">
              features()
            </a>

            {/* Solutions Dropdown */}
            <div className="relative group cursor-pointer py-1">
              <span className="hover:text-cyan-600 flex items-center space-x-1 transition-colors">
                <span>solutions()</span>
                <IoIosArrowDown className="w-3 h-3 transition-transform group-hover:rotate-180 text-slate-400" />
              </span>

              <div className="absolute top-full left-0 mt-3 w-56 bg-white backdrop-blur-2xl border border-slate-200 rounded-xl p-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 font-mono">
                <Link
                  to="/components"
                  className="block font-baloo px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="text-slate-900 font-bold text-xs ">
                    Free UI Library
                  </div>
                  <div className="text-[10px] text-slate-400 px-2">
                    Copy-paste components
                  </div>
                </Link>
                <a
                  href="#hire"
                  onClick={(e) => handleNavClick(e, "hire")}
                  className="block font-baloo px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors mt-0.5">
                  <div className="text-slate-900 font-bold text-xs">
                    Custom Engineering
                  </div>
                  <div className="text-[10px] text-slate-400 px-2">
                    Hire us for web apps
                  </div>
                </a>
              </div>
            </div>

            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, "faq")}
              className="hover:text-cyan-600 transition-colors">
              faq()
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 font-baloo">
            <a href="#hire" onClick={(e) => handleNavClick(e, "hire")}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white border border-slate-300 text-slate-800 font-semibold text-xs lg:text-base rounded-lg hover:bg-slate-50 transition-all cursor-pointer">
                const hire = () =&gt; us();
              </motion.button>
            </a>

            <Link to="/components">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-slate-900 text-white font-semibold text-xs rounded-full hover:bg-slate-800 transition-all cursor-pointer shadow-sm hover:scale-105">
                get_started()
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-900/70 hover:text-slate-600 p-1 focus:outline-none"
              aria-label="Toggle Menu">
              {mobileMenuOpen ? (
                <IoClose className="w-7 h-7" />
              ) : (
                <FaBarsStaggered className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 80 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, x: -130 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="mt-2 pt-3 px-4 pb-4 border-none flex flex-col space-y-3 lg:hidden text-center overflow-hidden font-baloo">
              <Link
                to="/components"
                onClick={closeMenu}
                className="text-slate-700 hover:text-cyan-600 py-2 rounded-lg hover:bg-slate-50 font-medium">
                components()
              </Link>
              <Link
                to="/docs"
                onClick={closeMenu}
                className="text-slate-700 hover:text-cyan-600 py-2 rounded-lg hover:bg-slate-50">
                docs()
              </Link>
              <a
                href="#features"
                onClick={(e) => {
                  handleNavClick(e, "features");
                  closeMenu();
                }}
                className="text-slate-700 hover:text-cyan-600 py-2 rounded-lg hover:bg-slate-50">
                features()
              </a>
              <a
                href="#faq"
                onClick={(e) => {
                  handleNavClick(e, "faq");
                  closeMenu();
                }}
                className="text-slate-700 hover:text-cyan-600 py-2 rounded-lg hover:bg-slate-50">
                faq()
              </a>

              <div className="pt-2 pb-2 flex flex-col gap-1 items-center">
                <a
                  href="#hire"
                  onClick={(e) => {
                    handleNavClick(e, "hire");
                    closeMenu();
                  }}
                  className="w-full max-w-xs">
                  <button className="w-full py-2.5 bg-white border border-slate-300 text-slate-800 font-semibold rounded-lg hover:scale-105 transition-all duration-300">
                    hire_us()
                  </button>
                </a>

                <Link
                  to="/components"
                  onClick={closeMenu}
                  className="w-full max-w-xs">
                  <button className="w-full py-2.5 bg-slate-900 text-white font-semibold rounded-full shadow-sm  hover:scale-105 transition-all duration-300">
                    get_started()
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

// import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { IoClose } from "react-icons/io5";
// import { IoIosArrowDown } from "react-icons/io";
// import { FaBarsStaggered } from "react-icons/fa6";
// import { motion, AnimatePresence } from "framer-motion";

// export default function NavBar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const closeMenu = () => setMobileMenuOpen(false);

//   const location = useLocation();
//   const navigate = useNavigate();

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
//     <motion.header
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="fixed top-0 left-0 right-0 px-3 sm:px-6 lg:px-8 pt-3 z-50">
//       {/* Nav Container */}
//       <nav className="w-full max-w-7xl mx-auto bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl shadow-xs transition-all duration-300 relative text-slate-900">
//         <div className="px-4 sm:px-6 py-3.5 flex items-center justify-between">
//           {/* Logo Section */}
//           <Link
//             to="/"
//             className="flex items-center space-x-3 cursor-pointer group">
//             <div className="flex flex-col">
//               <div className="flex items-center">
//                 <span className="text-2xl md:text-3xl font-black font-baloo uppercase text-slate-950 leading-none">
//                   Sync
//                 </span>
//                 <span className="text-2xl md:text-3xl font-black font-baloo uppercase bg-slate-950 text-white px-2 ml-1 rounded-md border border-white/20 shadow-xs leading-none">
//                   Xel
//                 </span>
//               </div>
//               <span className="text-[10px] font-baloo tracking-widest text-slate-400 uppercase mt-0.5">
//                 UI MATRIX V2.0
//               </span>
//             </div>

//             <span className="inline-block px-2.5 py-0.5 ml-1 text-[9px] font-extrabold font-baloo text-slate-500 bg-slate-100 border border-slate-200 rounded-full tracking-wider uppercase">
//               Beta
//             </span>
//           </Link>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex items-center space-x-6 text-sm font-baloo text-slate-600">
//             {/* Components Dropdown */}
//             <div className="relative group cursor-pointer py-1">
//               <Link
//                 to="/components"
//                 className="hover:text-cyan-600 flex items-center space-x-1 transition-colors">
//                 <span>components()</span>
//                 <IoIosArrowDown className="w-3 h-3 transition-transform group-hover:rotate-180 text-slate-400" />
//               </Link>

//               <div className="absolute top-full left-0 mt-2 w-72 bg-white backdrop-blur-2xl border border-slate-200 rounded-xl p-3 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                 <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
//                   // live_preview_matrix
//                 </div>
//                 <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-2">
//                   <div className="flex items-center justify-between mb-1">
//                     <span className="text-xs font-mono font-bold text-slate-900">
//                       Laser Button v2
//                     </span>
//                     <span className="text-[9px] font-mono text-cyan-700 bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-200">
//                       hot
//                     </span>
//                   </div>
//                   <div className="h-7 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] text-slate-600 font-mono">
//                     &lt;Button /&gt;
//                   </div>
//                 </div>
//                 <Link
//                   to="/components"
//                   className="block px-2 py-1 text-center text-xs text-slate-600 hover:text-cyan-600 font-mono transition-colors">
//                   browse_all_components &rarr;
//                 </Link>
//               </div>
//             </div>

//             <Link to="/docs" className="hover:text-cyan-600 transition-colors">
//               docs()
//             </Link>

//             <a
//               href="#features"
//               onClick={(e) => handleNavClick(e, "features")}
//               className="hover:text-cyan-600 transition-colors">
//               features()
//             </a>

//             {/* Solutions Dropdown */}
//             <div className="relative group cursor-pointer py-1">
//               <span className="hover:text-cyan-600 flex items-center space-x-1 transition-colors">
//                 <span>solutions()</span>
//                 <IoIosArrowDown className="w-3 h-3 transition-transform group-hover:rotate-180 text-slate-400" />
//               </span>

//               <div className="absolute top-full left-0 mt-2 w-56 bg-white backdrop-blur-2xl border border-slate-200 rounded-xl p-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 font-mono">
//                 <Link
//                   to="/components"
//                   className="block font-baloo px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors">
//                   <div className="text-slate-900 font-bold text-xs">
//                     Free UI Library
//                   </div>
//                   <div className="text-[10px] text-slate-400">
//                     Copy-paste components
//                   </div>
//                 </Link>
//                 <a
//                   href="#hire"
//                   onClick={(e) => handleNavClick(e, "hire")}
//                   className="block font-baloo px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors mt-0.5">
//                   <div className="text-slate-900 font-bold text-xs">
//                     Custom Engineering
//                   </div>
//                   <div className="text-[10px] text-slate-400">
//                     Hire us for web apps
//                   </div>
//                 </a>
//               </div>
//             </div>

//             <a
//               href="#faq"
//               onClick={(e) => handleNavClick(e, "faq")}
//               className="hover:text-cyan-600 transition-colors">
//               faq()
//             </a>
//           </div>

//           {/* Desktop CTA Buttons */}
//           <div className="hidden md:flex items-center space-x-3 font-baloo">
//             <a href="#hire" onClick={(e) => handleNavClick(e, "hire")}>
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-4 py-2 bg-white border border-slate-200 text-slate-800 font-medium text-xs rounded-lg hover:bg-slate-50 transition-all cursor-pointer">
//                 const hire = () =&gt; us();
//               </motion.button>
//             </a>

//             <Link to="/components">
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-4 py-2 bg-slate-900 text-white font-medium text-xs rounded-lg hover:bg-slate-800 transition-all cursor-pointer shadow-xs">
//                 get_started()
//               </motion.button>
//             </Link>
//           </div>

//           {/* Mobile Menu Toggle Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="text-slate-900 hover:text-slate-600 p-1.5 focus:outline-none"
//               aria-label="Toggle Menu">
//               {mobileMenuOpen ? (
//                 <IoClose className="w-6 h-6" />
//               ) : (
//                 <FaBarsStaggered className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               className="pt-2 px-4 pb-4 border-t border-slate-100 flex flex-col space-y-2 md:hidden text-center overflow-hidden font-baloo">
//               <Link
//                 to="/components"
//                 onClick={closeMenu}
//                 className="text-slate-700 hover:text-cyan-600 py-2 rounded-lg hover:bg-slate-50 font-medium text-sm">
//                 components()
//               </Link>
//               <Link
//                 to="/docs"
//                 onClick={closeMenu}
//                 className="text-slate-700 hover:text-cyan-600 py-2 rounded-lg hover:bg-slate-50 text-sm">
//                 docs()
//               </Link>
//               <a
//                 href="#features"
//                 onClick={(e) => {
//                   handleNavClick(e, "features");
//                   closeMenu();
//                 }}
//                 className="text-slate-700 hover:text-cyan-600 py-2 rounded-lg hover:bg-slate-50 text-sm">
//                 features()
//               </a>
//               <a
//                 href="#faq"
//                 onClick={(e) => {
//                   handleNavClick(e, "faq");
//                   closeMenu();
//                 }}
//                 className="text-slate-700 hover:text-cyan-600 py-2 rounded-lg hover:bg-slate-50 text-sm">
//                 faq()
//               </a>

//               <div className="pt-2 pb-1 flex flex-col gap-2 items-center">
//                 <a
//                   href="#hire"
//                   onClick={(e) => {
//                     handleNavClick(e, "hire");
//                     closeMenu();
//                   }}
//                   className="w-full">
//                   <button className="w-full py-2.5 bg-white border border-slate-200 text-slate-800 font-medium text-xs rounded-lg hover:bg-slate-50 transition-all">
//                     hire_us()
//                   </button>
//                 </a>

//                 <Link to="/components" onClick={closeMenu} className="w-full">
//                   <button className="w-full py-2.5 bg-slate-900 text-white font-medium text-xs rounded-lg shadow-xs hover:bg-slate-800 transition-all">
//                     get_started()
//                   </button>
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </motion.header>
//   );
// }
