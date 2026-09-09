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

// import FooterLinks from "./FooterNavLinks";

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
    <footer className="relative bg-slate-950 pt-0 md:pt-20 pb-10 px-4 sm:px-8 border-t border-white/10 overflow-hidden rounded-t-4xl">
      <motion.div
        className="max-w-7xl mx-auto space-y-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}>
        {/* 1. TOP BIG HIGH CONTRAST CTA BOX WITH ANIMATED BORDER */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-4xl p-0.5 overflow-hidden group max-w-6xl mx-auto my-10">
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
            <div className="flex flex-col sm:flex-row md:flex-col items-center gap-1 md:gap-2 w-full md:w-auto z-10">
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
                className="w-full sm:w-auto md:w-full text-center px-5 py-3.5 rounded-xl bg-[#FFDD00] hover:bg-[#ffe536] text-black font-extrabold text-sm transition-all shadow-[0_0_20px_rgba(255,221,0,0.2)] hover:shadow-[0_0_25px_rgba(255,221,0,0.45)] hover:scale-[1.02] flex items-center justify-center space-x-2.5 active:scale-95 hover:border-2 border-amber-600">
                <FaCoffee className="w-4 h-4 text-black" />
                <span>Buy Me a Coffee</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Brand Column */}
        <div className="col-span-2 space-y-4">
          <Link
            to="/"
            className="flex items-center space-x-3 cursor-pointer group">
            {/* Animated Rotating Border Logo Container */}
            <div className="relative w-11 h-11 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-cyan-400 p-[2px] shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                <div className="w-full h-full bg-slate-950 rounded-full" />
              </motion.div>

              {/* Actual Logo Image */}
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
              <span className="text-[7px] font-baloo tracking-widest text-cyan-400/80 -mt-1 uppercase">
                UI MATRIX v2.0
              </span>
            </div>

            <span className="px-2.5 py-0.5 text-[10px] font-extrabold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full tracking-wider uppercase shadow-[0_0_10px_rgba(34,211,238,0.2)] animate-pulse">
              Beta
            </span>
          </Link>

          <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
            Crafting production-ready UI components, design systems, and custom
            web applications for developers and startups globally.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 pt-2">
            <a
              href="https://github.com/lakshan-beast"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all hover:rounded-2xl shadow-md"
              title="GitHub Profile">
              <SiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/lakshan-sandeepa"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all hover:rounded-2xl shadow-md"
              title="LinkedIn Profile">
              <RxLinkedinLogo className="w-5 h-5" />
            </a>
            <a
              href="https://lakshan-sandeepa-dev.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all hover:rounded-2xl shadow-md"
              title="Portfolio Profile">
              <SlGlobe className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/lakshan_dev"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all flex items-center justify-center cursor-pointer hover:rounded-2xl shadow-md"
              title="Telegram Chat">
              <FaTelegramPlane className="w-5 h-5" />
            </a>
            <a
              href="mailto:syncxelofficial@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all flex items-center justify-center cursor-pointer hover:rounded-2xl shadow-md"
              title="Email Chat">
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* 2. MIDDLE FOOTER LINKS GRID */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-20 md:pt-16 border-t border-white/10 ">
          {/* Nav Links */}
          {/* <div></div>
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
          </div> */}

          {/* 1. Products / Library */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Products / Library
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 flex flex-col">
              <li>
                <Link
                  to="/components"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
                  UI Components
                </Link>
              </li>
              <li>
                <a
                  href="/#templates"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
                  Templates & Themes
                </a>
              </li>
              <li>
                <a
                  href="/#pricing"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
                  Pro Access / Pricing
                </a>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. Services / Hire */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services / Hire
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 flex flex-col">
              <li>
                <a
                  href="/#services"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
                  Custom Web Design
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
                  Our Workflow
                </a>
              </li>
              <li>
                <a
                  href="/#hire"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
                  Project Inquiry / Hire Us
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Developers / Docs */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Developers / Docs
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 flex flex-col">
              <li>
                <Link
                  to="/docs"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
                  API / Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Company & Legal */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 flex flex-col">
              <li>
                <Link
                  to="/legal"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/legal"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
                  <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
                  FAQ / Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* <FooterLinks /> */}
        </motion.div>

        {/* 3. BOTTOM COPYRIGHT BAR */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
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
        </motion.div>
      </motion.div>

      <div
        data-aos="zoom-in"
        className="col-span-full w-full text-center font-baloo font-[950] text-[13vw] leading-none mt-5  pointer-events-none relative -bottom-9 lg:-bottom-15 z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-clip-text text-transparent opacity-40 bg-[length:200%_200%] max-[600px]:text-[17vw] max-[600px]:mt-[3rem] max-[600px]:mb-[12px] animate-[pureCssClouds_15s_ease_infinite_alternate] uppercase tracking-tighter"
        style={{
          backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.5) 0%, transparent 40%),
              radial-gradient(circle at 50% 30%, rgba(34, 211, 238, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 80% 60%, rgba(99, 102, 241, 0.6) 0%, transparent 45%),
              linear-gradient(to right, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.05))
            `,
        }}>
        Sync
        <span className="[-webkit-text-fill-color:initial] text-cyan-400/80 [text-shadow:0_0_30px_rgba(34,211,238,0.6)] transition-all duration-500 ml-6 lg:ml-12 tracking-wide">
          Xel
        </span>
        .
      </div>

      {/* Keyframe animation definition (Add this to your global CSS file or a style tag) */}
      <style>{`
          @keyframes pureCssClouds {
            0% {
              background-position: 0% 50%;
              filter: hue-rotate(0deg);
            }
            50% {
              background-position: 100% 100%;
              filter: hue-rotate(15deg);
            }
            100% {
              background-position: 50% 0%;
              filter: hue-rotate(-15deg);
            }
          }
        `}</style>
    </footer>
  );
}
