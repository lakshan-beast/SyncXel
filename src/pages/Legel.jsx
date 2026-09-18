// import React, { useState } from "react";
// import {
//   HiOutlineShieldCheck,
//   HiOutlineDocumentText,
//   HiOutlineCreditCard,
//   HiOutlineArrowLeft,
// } from "react-icons/hi2";
// import { IoMdMail } from "react-icons/io";

// const Legal = () => {
//   const [activeTab, setActiveTab] = useState("privacy");

//   const tabList = [
//     { id: "privacy", label: "Privacy Policy", icon: HiOutlineShieldCheck },
//     { id: "terms", label: "Terms of Service", icon: HiOutlineDocumentText },
//     { id: "refund", label: "Refund Policy", icon: HiOutlineCreditCard },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
//       {/* Background Glow Effect */}
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

//       <div className="max-w-4xl mx-auto space-y-6 relative z-10">
//         {/* Back Button & Header Badge */}
//         <div className="flex items-center justify-between">
//           <a
//             href="/"
//             className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors bg-slate-900/80 px-3.5 py-2 rounded-xl border border-white/10 backdrop-blur-md">
//             <HiOutlineArrowLeft className="w-4 h-4" />
//             <span>Back to Home</span>
//           </a>

//           <span className="text-xs text-slate-500 font-mono">
//             Last Updated: Jan 2026
//           </span>
//         </div>

//         {/* Main Card Container */}
//         <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8">
//           {/* Header Title */}
//           <div>
//             <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
//               Legal & Compliance
//             </h1>
//             <p className="text-slate-400 text-xs sm:text-sm mt-1">
//               Understand our terms, privacy commitments, and refund rules.
//             </p>
//           </div>

//           {/* Navigation Tabs */}
//           <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
//             {tabList.map((tab) => {
//               const Icon = tab.icon;
//               const isActive = activeTab === tab.id;
//               return (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
//                     isActive
//                       ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-md shadow-cyan-500/5"
//                       : "text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent"
//                   }`}>
//                   <Icon className="w-4 h-4" />
//                   <span>{tab.label}</span>
//                 </button>
//               );
//             })}
//           </div>

//           {/* Content Section */}
//           <div className="text-sm leading-relaxed text-slate-300">
//             {/* PRIVACY POLICY */}
//             {activeTab === "privacy" && (
//               <div className="space-y-6 animate-fadeIn">
//                 <h2 className="text-2xl font-bold text-white">
//                   Privacy Policy
//                 </h2>
//                 <p>
//                   At SyncXel (accessible via syncxel.vercel.app), protecting our
//                   users' privacy is one of our top priorities.
//                 </p>

//                 <div className="space-y-4">
//                   <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5 space-y-1">
//                     <h3 className="font-semibold text-white">
//                       1. Information We Collect
//                     </h3>
//                     <p className="text-slate-400 text-xs sm:text-sm">
//                       We collect minimal personal information necessary to
//                       process orders and improve our UI products. This includes
//                       your email address when making purchases via our merchant
//                       system (Lemon Squeezy).
//                     </p>
//                   </div>

//                   <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5 space-y-1">
//                     <h3 className="font-semibold text-white">
//                       2. How We Use Information
//                     </h3>
//                     <p className="text-slate-400 text-xs sm:text-sm">
//                       Your information is strictly used for order fulfillment,
//                       digital asset delivery, sending invoice receipts, and
//                       providing customer support.
//                     </p>
//                   </div>

//                   <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5 space-y-1">
//                     <h3 className="font-semibold text-white">
//                       3. Data Protection
//                     </h3>
//                     <p className="text-slate-400 text-xs sm:text-sm">
//                       We do not sell, trade, or rent your personal data to third
//                       parties. All transaction processing is securely handled
//                       using industry-standard end-to-end encryption.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* TERMS OF SERVICE */}
//             {activeTab === "terms" && (
//               <div className="space-y-6 animate-fadeIn">
//                 <h2 className="text-2xl font-bold text-white">
//                   Terms of Service
//                 </h2>
//                 <p>
//                   By downloading or purchasing any React/Tailwind UI components
//                   or templates from SyncXel, you agree to the following terms
//                   and conditions.
//                 </p>

//                 <div className="space-y-4">
//                   <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5 space-y-1">
//                     <h3 className="font-semibold text-white">
//                       1. License & Usage
//                     </h3>
//                     <p className="text-slate-400 text-xs sm:text-sm">
//                       Upon purchasing a premium component or template, SyncXel
//                       grants you a non-exclusive, non-transferable license to
//                       use the code in both commercial and personal projects.
//                     </p>
//                   </div>

//                   <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5 space-y-1">
//                     <h3 className="font-semibold text-white">
//                       2. Restrictions
//                     </h3>
//                     <p className="text-slate-400 text-xs sm:text-sm">
//                       You may not redistribute, resell, sublicense, or share
//                       SyncXel source code files directly as standalone assets or
//                       UI kit collections.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* REFUND POLICY */}
//             {activeTab === "refund" && (
//               <div className="space-y-6 animate-fadeIn">
//                 <h2 className="text-2xl font-bold text-white">Refund Policy</h2>
//                 <p>
//                   Due to the nature of digital goods (instant source code
//                   downloads), all sales on SyncXel are final and non-refundable
//                   once the file is delivered.
//                 </p>

//                 <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-5 space-y-2">
//                   <h3 className="font-semibold text-cyan-400">
//                     Exceptions & Technical Support
//                   </h3>
//                   <p className="text-slate-300 text-xs sm:text-sm">
//                     If you experience technical issues or corrupted source code
//                     downloads, please reach out to us at{" "}
//                     <a
//                       href="mailto:syncxelofficial@gmail.com"
//                       className="text-cyan-400 underline font-mono">
//                       syncxelofficial@gmail.com
//                     </a>{" "}
//                     within 7 days of purchase. We will promptly assist or issue
//                     a fix/replacement.
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Support Footer */}
//           <div className="pt-6 border-t border-white/10 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
//             <span>Have legal questions or custom licensing inquiries?</span>
//             <a
//               href="mailto:syncxelofficial@gmail.com"
//               className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-mono font-medium">
//               <IoMdMail className="w-4 h-4" />
//               <span>syncxelofficial@gmail.com</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Legal;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineCreditCard,
  HiOutlineArrowLeft,
} from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";

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

const Legal = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  const tabList = [
    { id: "privacy", label: "Privacy Policy", icon: HiOutlineShieldCheck },
    { id: "terms", label: "Terms of Service", icon: HiOutlineDocumentText },
    { id: "refund", label: "Refund Policy", icon: HiOutlineCreditCard },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-500 py-12 px-4 pt-5 sm:px-6 lg:px-8 font-baloo relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Background Subtle Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-800/30 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto space-y-6 relative z-10 font-baloo"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {/* 1. TOP BACK BUTTON & HEADER BADGE */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-800 backdrop-blur-md shadow-xs">
            <HiOutlineArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>

          <span className="text-xs text-slate-500 font-mono">
            // last_updated: Jan 2026
          </span>
        </motion.div>

        {/* 2. MAIN CARD CONTAINER */}
        <motion.div
          variants={itemVariants}
          className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8 relative overflow-hidden">
          {/* Header Title & Badge */}
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono shadow-xs">
              <span>// legal_compliance_matrix</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Legal & Compliance
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm font-sans">
              Understand our terms, privacy commitments, and refund rules.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
            {tabList.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-white text-slate-950 border border-white shadow-md scale-105"
                      : "text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800/60"
                  }`}>
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content Section */}
          <div className="text-sm leading-relaxed text-slate-300 font-sans">
            {/* PRIVACY POLICY */}
            {activeTab === "privacy" && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-white font-mono">
                  // Privacy Policy
                </h2>
                <p className="text-slate-400">
                  At SyncXel (accessible via syncxel.vercel.app), protecting our
                  users' privacy is one of our top priorities.
                </p>

                <div className="space-y-4 font-mono">
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-1">
                    <h3 className="font-semibold text-white text-xs sm:text-sm">
                      1. Information We Collect
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-sans">
                      We collect minimal personal information necessary to
                      process orders and improve our UI products. This includes
                      your email address when making purchases via our merchant
                      system (Lemon Squeezy).
                    </p>
                  </div>

                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-1">
                    <h3 className="font-semibold text-white text-xs sm:text-sm">
                      2. How We Use Information
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-sans">
                      Your information is strictly used for order fulfillment,
                      digital asset delivery, sending invoice receipts, and
                      providing customer support.
                    </p>
                  </div>

                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-1">
                    <h3 className="font-semibold text-white text-xs sm:text-sm">
                      3. Data Protection
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-sans">
                      We do not sell, trade, or rent your personal data to third
                      parties. All transaction processing is securely handled
                      using industry-standard end-to-end encryption.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TERMS OF SERVICE */}
            {activeTab === "terms" && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-white font-mono">
                  // Terms of Service
                </h2>
                <p className="text-slate-400">
                  By downloading or purchasing any React/Tailwind UI components
                  or templates from SyncXel, you agree to the following terms
                  and conditions.
                </p>

                <div className="space-y-4 font-mono">
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-1">
                    <h3 className="font-semibold text-white text-xs sm:text-sm">
                      1. License & Usage
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-sans">
                      Upon purchasing a premium component or template, SyncXel
                      grants you a non-exclusive, non-transferable license to
                      use the code in both commercial and personal projects.
                    </p>
                  </div>

                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-1">
                    <h3 className="font-semibold text-white text-xs sm:text-sm">
                      2. Restrictions
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-sans">
                      You may not redistribute, resell, sublicense, or share
                      SyncXel source code files directly as standalone assets or
                      UI kit collections.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* REFUND POLICY */}
            {activeTab === "refund" && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-white font-mono">
                  // Refund Policy
                </h2>
                <p className="text-slate-400">
                  Due to the nature of digital goods (instant source code
                  downloads), all sales on SyncXel are final and non-refundable
                  once the file is delivered.
                </p>

                <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5 space-y-2 font-mono">
                  <h3 className="font-semibold text-white text-xs sm:text-sm">
                    Exceptions & Technical Support
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-sans">
                    If you experience technical issues or corrupted source code
                    downloads, please reach out to us at{" "}
                    <a
                      href="mailto:syncxelofficial@gmail.com"
                      className="text-white underline font-mono">
                      syncxelofficial@gmail.com
                    </a>{" "}
                    within 7 days of purchase. We will promptly assist or issue
                    a fix/replacement.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 3. SUPPORT FOOTER */}
          <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3 font-sans">
            <span>Have legal questions or custom licensing inquiries?</span>
            <a
              href="mailto:syncxelofficial@gmail.com"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-mono font-medium">
              <IoMdMail className="w-4 h-4 text-slate-400" />
              <span>syncxelofficial@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Legal;
