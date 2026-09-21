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
      className="fixed top-0 left-0 right-0 px-3 sm:px-8 pt-3 lg:pt-0 z-50 ">
      {/* Nav Container - Clean White & Black DevSync Style */}
      <nav className="w-full max-w-7xl lg:max-w-full mx-auto bg-white/90 backdrop-blur-sm border border-slate-200/80 lg:border-none rounded-3xl md:rounded-2xl shadow-none transition-all duration-300 relative text-slate-900">
      {/* logo */}
        <div className="px-4 sm:px-6 py-4 lg:py-5 flex items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-2 cursor-pointer group">
            <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 border border-slate-100">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-900 via-cyan-500 to-cyan-400 p-0.5 shadow-[0_0_12px_rgba(34,211,238,0.9)]">
                <div className="w-full h-full bg-[#000000] rounded-full" />
              </motion.div>

              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/syncxel-logo-removebg.png"
                alt="SyncXel Logo"
                width={30}
                height={30}
                className="object-contain relative z-10 rounded-full"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter text-slate-800/80 font-baloo uppercase group-hover:text-slate-400 transition-colors">
                Sync
                <span className="text-transparent tracking-wide bg-clip-text ml-2 bg-linear-to-r from-slate-200 to-slate-700 ">
                  Xel
                </span>
              </span>
              <span className="text-[10px] font-baloo tracking-widest text-slate-700/50 -mt-1 uppercase">
                UI MATRIX V2.0
              </span>
            </div>

            <span className="inline-block px-3 py-0.5 ml-1 text-[9px] font-extrabold font-baloo text-cyan-400 bg-cyan-500/15 border border-cyan-500/30 rounded-full tracking-wider uppercase shadow-[0_0_8px_rgba(34,211,238,0.2)] animate-pulse">
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
                  <button className="w-full py-2.5 bg-slate-900 text-white font-semibold rounded-lg shadow-sm  hover:scale-105 transition-all duration-300">
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
