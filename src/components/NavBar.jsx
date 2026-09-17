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
    // <motion.header
    //   initial={{ y: -50, opacity: 0 }}
    //   animate={{ y: 0, opacity: 1 }}
    //   transition={{ duration: 0.6, ease: "easeOut" }}
    //   className="fixed top-0 left-0 right-0 px-4 sm:px-8 pt-4 lg:pt-5 z-50 ">
    //   {/* Nav Container - No overflow-hidden on main nav so dropdowns work perfectly */}
    //   <nav className="max-w-7xl mx-auto bg-slate-700/50 backdrop-blur-xl border-2 border-slate-700/20 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.9)] shadow-cyan-500/20 transition-all duration-300 relative">
    //     {/* Dynamic Announcement Ticker at Top (Safe overflow wrapper for rounded top) */}
    //     <div className="hidden lg:block overflow-hidden rounded-t-2xl">
    //       <div className=" border-b border-cyan-500/20 py-1.5 px-4 text-center text-[11px] text-cyan-300 font-medium flex items-center justify-center gap-2 bg-transparent">
    //         <span className="bg-cyan-400 text-slate-950 font-bold px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider animate-pulse">
    //           NEW
    //         </span>
    //         <span className="truncate">
    //           Glassmorphic UI Components v1 Dropped — Explore the Matrix
    //         </span>
    //       </div>
    //     </div>

    //     <div className="px-5 sm:px-6 py-5 flex items-center justify-between">
    //       {/* Logo Section */}
    //       <Link
    //         to="/"
    //         className="flex items-center space-x-3 cursor-pointer group">
    //         <div className="relative w-10 h-10 flex items-center justify-center">
    //           <motion.div
    //             animate={{ rotate: 360 }}
    //             transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
    //             className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-cyan-400 p-[1.5px] shadow-[0_0_12px_rgba(34,211,238,0.4)]">
    //             <div className="w-full h-full bg-[#0B0D13] rounded-full" />
    //           </motion.div>

    //           <motion.img
    //             whileHover={{ scale: 1.1 }}
    //             src="/syncxel-logo-removebg.png"
    //             alt="SyncXel Logo"
    //             width={24}
    //             height={24}
    //             className="object-contain relative z-10 rounded-full"
    //           />
    //         </div>

    //         <div className="flex flex-col">
    //           <span className="text-3xl font-black tracking-tighter text-white font-baloo uppercase group-hover:text-cyan-200 transition-colors">
    //             Sync
    //             <span className="text-transparent tracking-wide bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 ml-1">
    //               Xel
    //             </span>
    //           </span>
    //           <span className="text-[8px] font-baloo tracking-widest text-cyan-400/80 -mt-1 uppercase">
    //             UI MATRIX v2.0
    //           </span>
    //         </div>

    //         <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] font-extrabold text-cyan-400 bg-cyan-500/15 border border-cyan-500/30 rounded-full tracking-wider uppercase shadow-[0_0_8px_rgba(34,211,238,0.2)] animate-pulse">
    //           Beta
    //         </span>
    //       </Link>

    //       {/* Desktop Navigation Links */}
    //       <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-medium text-slate-200">
    //         {/* Components Dropdown with Live Preview */}
    //         <div className="relative group cursor-pointer py-1">
    //           <Link
    //             to="/components"
    //             className="hover:text-cyan-400 flex items-center space-x-1 transition-colors">
    //             <span>Components</span>
    //             <IoIosArrowDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
    //           </Link>

    //           <div className="absolute top-full left-0 mt-3 w-72 bg-[#161B26]/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl p-3 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
    //             <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2 px-1">
    //               Live Preview Matrix
    //             </div>
    //             <div className="bg-slate-950/80 border border-white/10 rounded-xl p-3 mb-2.5">
    //               <div className="flex items-center justify-between mb-1.5">
    //                 <span className="text-xs font-semibold text-white">
    //                   Laser Button v2
    //                 </span>
    //                 <span className="text-[9px] text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
    //                   Hot
    //                 </span>
    //               </div>
    //               <div className="h-8 rounded bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-cyan-500/20 flex items-center justify-center text-[10px] text-cyan-300 font-mono animate-pulse">
    //                 &lt;Button /&gt;
    //               </div>
    //             </div>
    //             <Link
    //               to="/components"
    //               className="block px-2 py-1.5 text-center text-xs text-slate-300 hover:text-cyan-400 font-medium transition-colors">
    //               Browse all components &rarr;
    //             </Link>
    //           </div>
    //         </div>

    //         <Link to="/docs" className="hover:text-cyan-400 transition-colors">
    //           Documentation
    //         </Link>
    //         <a
    //           href="#features"
    //           onClick={(e) => handleNavClick(e, "features")}
    //           className="hover:text-cyan-400 transition-colors">
    //           Features
    //         </a>

    //         {/* Solutions Dropdown */}
    //         <div className="relative group cursor-pointer py-1">
    //           <span className="hover:text-cyan-400 flex items-center space-x-1 transition-colors">
    //             <span>Solutions</span>
    //             <IoIosArrowDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
    //           </span>

    //           <div className="absolute top-full left-0 mt-3 w-56 bg-[#161B26]/95 backdrop-blur-2xl border border-cyan-500/30 rounded-xl p-2 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
    //             <Link
    //               to="/components"
    //               className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
    //               <div className="text-white font-medium text-xs">
    //                 Free UI Library
    //               </div>
    //               <div className="text-[10px] text-slate-400">
    //                 Copy-paste buttons & loaders
    //               </div>
    //             </Link>
    //             <a
    //               href="#hire"
    //               onClick={(e) => handleNavClick(e, "hire")}
    //               className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors mt-0.5">
    //               <div className="text-white font-medium text-xs">
    //                 Custom Engineering
    //               </div>
    //               <div className="text-[10px] text-slate-400">
    //                 Hire us for custom web apps
    //               </div>
    //             </a>
    //           </div>
    //         </div>

    //         <a
    //           href="#faq"
    //           onClick={(e) => handleNavClick(e, "faq")}
    //           className="hover:text-cyan-400 transition-colors">
    //           FAQ
    //         </a>
    //       </div>

    //       {/* Desktop CTA Buttons (Liquid Fill for Hire Us & Laser Beam for Get Started) */}
    //       <div className="hidden md:flex items-center space-x-1">
    //         {/* Liquid Fill Button for Hire Us */}
    //         <a href="#hire" onClick={(e) => handleNavClick(e, "hire")}>
    //           <motion.button
    //             whileHover="hover"
    //             whileTap={{ scale: 0.95 }}
    //             className="relative overflow-hidden px-4 py-2 border border-slate-800 text-slate-200 font-semibold text-xs rounded-xl cursor-pointer group bg-transparent border-none">
    //             <span className="relative z-10 group-hover:text-slate-950 transition-colors">
    //               Hire Us
    //             </span>
    //             <motion.span
    //               variants={{ hover: { y: "0%" } }}
    //               initial={{ y: "100%" }}
    //               transition={{ duration: 0.3 }}
    //               className="absolute inset-0 bg-cyan-400 z-0"
    //             />
    //           </motion.button>
    //         </a>

    //         {/* Laser Beam Button for Get Started */}
    //         <Link to="/components">
    //           <div className="relative p-[1px] rounded-xl overflow-hidden inline-block group cursor-pointer">
    //             <motion.div
    //               animate={{ rotate: 360 }}
    //               transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
    //               className="absolute inset-[-50%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_180deg,#22d3ee_360deg)]"
    //             />
    //             <button className="relative px-4 py-2 bg-slate-950 text-cyan-400 text-xs font-mono rounded-[11px] cursor-pointer">
    //               Get Started
    //             </button>
    //           </div>
    //         </Link>
    //       </div>

    //       {/* Mobile Menu Toggle Button */}
    //       <div className="md:hidden flex items-center">
    //         <button
    //           type="button"
    //           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    //           className="text-white hover:text-white/70 p-1 focus:outline-none"
    //           aria-label="Toggle Menu">
    //           {mobileMenuOpen ? (
    //             <IoClose className="w-9 h-9" />
    //           ) : (
    //             <FaBarsStaggered className="w-7 h-7" />
    //           )}
    //         </button>
    //       </div>
    //     </div>

    //     {/* Mobile Menu Dropdown */}
    //     <AnimatePresence>
    //       {mobileMenuOpen && (
    //         <motion.div
    //           initial={{ opacity: 0, height: 0, y: -10 }}
    //           animate={{ opacity: 1, height: "auto", y: 0 }}
    //           exit={{ opacity: 0, height: 0, y: -10 }}
    //           transition={{ duration: 0.3, ease: "easeInOut" }}
    //           className="mt-2 pt-4 px-4 pb-4 border-t border-cyan-500/25 flex flex-col space-y-3 md:hidden text-center overflow-hidden">
    //           <Link
    //             to="/components"
    //             onClick={closeMenu}
    //             className="text-slate-200 hover:text-cyan-400 py-1.5 rounded-lg hover:bg-white/5 font-medium text-sm">
    //             UI Components
    //           </Link>
    //           <Link
    //             to="/docs"
    //             onClick={closeMenu}
    //             className="text-slate-200 hover:text-cyan-400 transition-colors hover:bg-white/5 rounded-lg py-1.5 text-sm">
    //             Documentation
    //           </Link>
    //           <a
    //             href="#features"
    //             onClick={(e) => {
    //               handleNavClick(e, "features");
    //               closeMenu();
    //             }}
    //             className="text-slate-200 hover:text-cyan-400 transition-colors py-1.5 text-sm">
    //             Features
    //           </a>
    //           <a
    //             href="#faq"
    //             onClick={(e) => {
    //               handleNavClick(e, "faq");
    //               closeMenu();
    //             }}
    //             className="text-slate-200 hover:text-cyan-400 transition-colors py-1.5 text-sm">
    //             FAQ
    //           </a>

    //           <div className="pt-3 pb-2 flex flex-col gap-2.5 text-center items-center">
    //             <a
    //               href="#hire"
    //               onClick={(e) => {
    //                 handleNavClick(e, "hire");
    //                 closeMenu();
    //               }}
    //               className="w-full max-w-xs">
    //               <motion.button
    //                 whileHover="hover"
    //                 whileTap={{ scale: 0.95 }}
    //                 className="relative overflow-hidden w-full py-2.5 bg-white/10 border-none border-slate-800 text-slate-200 font-semibold text-xs rounded-xl cursor-pointer group">
    //                 <span className="relative z-10 group-hover:text-slate-950 transition-colors">
    //                   Hire Us
    //                 </span>
    //                 <motion.span
    //                   variants={{ hover: { y: "0%" } }}
    //                   initial={{ y: "100%" }}
    //                   transition={{ duration: 0.3 }}
    //                   className="absolute inset-0 bg-cyan-400 z-0"
    //                 />
    //               </motion.button>
    //             </a>

    //             <Link
    //               to="/components"
    //               onClick={closeMenu}
    //               className="w-full max-w-xs">
    //               <div className="relative p-[1px] rounded-xl overflow-hidden inline-block w-full group cursor-pointer">
    //                 <motion.div
    //                   animate={{ rotate: 360 }}
    //                   transition={{
    //                     repeat: Infinity,
    //                     duration: 3,
    //                     ease: "linear",
    //                   }}
    //                   className="absolute inset-[-50%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_180deg,#22d3ee_360deg)]"
    //                 />
    //                 <button className="relative w-full py-2.5 bg-slate-950 text-cyan-400 text-xs font-mono rounded-[11px] cursor-pointer">
    //                   Get Started
    //                 </button>
    //               </div>
    //             </Link>
    //           </div>
    //         </motion.div>
    //       )}
    //     </AnimatePresence>
    //   </nav>
    // </motion.header>

    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 px-4 sm:px-8 pt-4 lg:pt-5 z-50">
      {/* Nav Container - Clean White & Black DevSync Style */}
      <nav className="w-full mx-auto bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl shadow-sm transition-all duration-300 relative text-slate-900">
        {/* Dynamic Announcement Ticker at Top */}
        <div className="hidden lg:block overflow-hidden rounded-t-2xl bg-slate-50 border-b border-slate-200">
          <div className="py-1.5 px-4 text-center text-[11px] text-slate-600 font-mono flex items-center justify-center gap-2">
            <span className="bg-slate-900 text-cyan-400 font-bold px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider">
              // NEW
            </span>
            <span className="truncate text-slate-700">
              Glassmorphic UI Components v2 Dropped — Explore the Matrix
            </span>
          </div>
        </div>

        <div className="px-5 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-300">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/syncxel-logo-removebg.png"
                alt="SyncXel Logo"
                width={20}
                height={20}
                className="object-contain relative z-10 rounded-full"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-slate-950 font-mono uppercase">
                Sync<span className="text-cyan-600">Xel</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-slate-400 -mt-1 uppercase">
                // ui_matrix_v2.0
              </span>
            </div>

            <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] font-mono font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 rounded tracking-wider uppercase">
              beta
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-mono text-slate-700">
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
                  className="block px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="text-slate-900 font-bold text-xs">
                    Free UI Library
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Copy-paste components
                  </div>
                </Link>
                <a
                  href="#hire"
                  onClick={(e) => handleNavClick(e, "hire")}
                  className="block px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors mt-0.5">
                  <div className="text-slate-900 font-bold text-xs">
                    Custom Engineering
                  </div>
                  <div className="text-[10px] text-slate-500">
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
          <div className="hidden md:flex items-center space-x-2 font-mono">
            <a href="#hire" onClick={(e) => handleNavClick(e, "hire")}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white border border-slate-300 text-slate-800 font-semibold text-xs rounded-lg hover:bg-slate-50 transition-all cursor-pointer">
                const hire = () =&gt; us();
              </motion.button>
            </a>

            <Link to="/components">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-slate-900 text-white font-semibold text-xs rounded-lg hover:bg-slate-800 transition-all cursor-pointer shadow-sm">
                get_started()
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-900 hover:text-slate-600 p-1 focus:outline-none"
              aria-label="Toggle Menu">
              {mobileMenuOpen ? (
                <IoClose className="w-7 h-7" />
              ) : (
                <FaBarsStaggered className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mt-2 pt-3 px-4 pb-4 border-t border-slate-200 flex flex-col space-y-2 md:hidden text-center overflow-hidden font-mono text-xs">
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

              <div className="pt-2 pb-2 flex flex-col gap-2 items-center">
                <a
                  href="#hire"
                  onClick={(e) => {
                    handleNavClick(e, "hire");
                    closeMenu();
                  }}
                  className="w-full max-w-xs">
                  <button className="w-full py-2.5 bg-white border border-slate-300 text-slate-800 font-semibold rounded-lg">
                    hire_us()
                  </button>
                </a>

                <Link
                  to="/components"
                  onClick={closeMenu}
                  className="w-full max-w-xs">
                  <button className="w-full py-2.5 bg-slate-900 text-white font-semibold rounded-lg shadow-sm">
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
