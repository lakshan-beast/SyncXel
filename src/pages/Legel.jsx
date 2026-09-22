// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { HiArrowLeft } from "react-icons/hi";
// import { IoMdMail } from "react-icons/io";
// import { MdOutlineTipsAndUpdates } from "react-icons/md";
// import {
//   HiOutlineShieldCheck,
//   HiOutlineDocumentText,
//   HiOutlineCreditCard,
// } from "react-icons/hi2";

// // --- Framer Motion Animation Variants ---
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
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// // Default tab list
// const defaultTabList = [
//   { id: "privacy", label: "Privacy Policy", icon: HiOutlineShieldCheck },
//   { id: "terms", label: "Terms of Service", icon: HiOutlineDocumentText },
//   { id: "refund", label: "Refund Policy", icon: HiOutlineCreditCard },
// ];

// export default function LegalPage({ tabList = defaultTabList }) {
//   const [activeTab, setActiveTab] = useState("privacy");

//   return (
//     <div className="min-h-screen bg-white text-slate-600 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-mono mt-16">
//       <motion.div
//         className="max-w-5xl mx-auto space-y-3 relative z-10"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible">
//         {/* =========================================
//             1. TOP HEADER & BACK BUTTON
//            ========================================= */}
//         <motion.div
//           variants={itemVariants}
//           className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden">
//           <div className="space-y-3 relative z-10 max-w-2xl">
//             <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-white border border-slate-200 text-slate-400 text-xs font-mono shadow-xs w-fit">
//               <span>// legal_compliance_repository_v2.5</span>
//             </div>

//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-sans">
//               Legal &{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-900 block sm:inline mt-1 sm:mt-0">
//                 Compliance Hub
//               </span>
//             </h1>

//             <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
//               Review our terms of use, licensing policies, and privacy
//               commitments designed to ensure complete transparency for all
//               developers and clients.
//             </p>

//             <div className="text-xs text-slate-500 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 flex items-center gap-2 shadow-xs w-fit">
//               <MdOutlineTipsAndUpdates className="w-5 h-5 text-slate-900 animate-bounce" />
//               <span>
//                 Last Updated :{" "}
//                 <strong className="text-slate-900">September 2026</strong>
//               </span>
//             </div>

//             <a
//               href="/"
//               className="py-2.5 px-5 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-xl transition-all text-slate-300 hover:text-white flex items-center gap-2 text-xs font-medium cursor-pointer w-fit shadow-xs">
//               <HiArrowLeft className="w-4 h-4" />
//               <span>bac_to_hpme()</span>
//             </a>
//           </div>
//         </motion.div>

//         {/* =========================================
//             2. NAVIGATION TABS
//            ========================================= */}
//         {tabList && tabList.length > 0 && (
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-wrap gap-2">
//             {tabList.map((tab) => {
//               const Icon = tab.icon;
//               const isActive = activeTab === tab.id;
//               return (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
//                     isActive
//                       ? "bg-slate-950 text-white border border-slate-950 shadow-md scale-105"
//                       : "text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200/60 bg-white"
//                   }`}>
//                   {Icon && <Icon className="w-4 h-4" />}
//                   <span>{tab.label}</span>
//                 </button>
//               );
//             })}
//           </motion.div>
//         )}

//         {/* =========================================
//             3. MAIN CONTENT CONTAINER (White Card)
//            ========================================= */}
//         <motion.div
//           variants={itemVariants}
//           className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 relative overflow-hidden text-slate-700">
//           <div className="text-sm leading-relaxed text-slate-600 font-sans">
//             {/* ================= PRIVACY POLICY ================= */}
//             {activeTab === "privacy" && (
//               <div className="space-y-6">
//                 <h2 className="text-2xl font-bold text-slate-900 font-mono">
//                   // Privacy Policy
//                 </h2>
//                 <p className="text-slate-600">
//                   At SyncXel (hosted via Vercel and accessible at
//                   syncxel.vercel.app), we deeply respect your privacy and are
//                   committed to protecting your personal data.
//                 </p>

//                 <div className="space-y-4 font-mono">
//                   <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
//                     <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
//                       1. Information Collection & Merchant of Record
//                     </h3>
//                     <p className="text-slate-600 text-xs sm:text-sm font-sans">
//                       All online transactions and financial processing are
//                       securely managed by our Merchant of Record,{" "}
//                       <strong>Lemon Squeezy</strong>. We only collect essential
//                       billing and contact details (such as your email address)
//                       required for digital asset fulfillment and invoice
//                       generation.
//                     </p>
//                   </div>

//                   <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
//                     <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
//                       2. Cookies and Analytics
//                     </h3>
//                     <p className="text-slate-600 text-xs sm:text-sm font-sans">
//                       We may utilize standard web analytics to monitor traffic
//                       performance and user experience optimization. No sensitive
//                       personal tracking information is sold or shared with
//                       external third-party advertisers.
//                     </p>
//                   </div>

//                   <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
//                     <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
//                       3. Data Security
//                     </h3>
//                     <p className="text-slate-600 text-xs sm:text-sm font-sans">
//                       We implement enterprise-grade encryption protocols and
//                       secure database practices to ensure your interactions and
//                       download histories remain strictly confidential.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* ================= TERMS OF SERVICE ================= */}
//             {activeTab === "terms" && (
//               <div className="space-y-6">
//                 <h2 className="text-2xl font-bold text-slate-900 font-mono">
//                   // Terms of Service & Licensing
//                 </h2>
//                 <p className="text-slate-600">
//                   By accessing, downloading, or purchasing any React, Tailwind
//                   CSS components, or UI templates from SyncXel, you agree to
//                   comply with the following professional terms and conditions.
//                 </p>

//                 <div className="space-y-4 font-mono">
//                   <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
//                     <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
//                       1. Free Resources License
//                     </h3>
//                     <p className="text-slate-600 text-xs sm:text-sm font-sans">
//                       All components, snippets, and templates marked as{" "}
//                       <strong>Free</strong> on SyncXel can be used completely
//                       free of charge in both{" "}
//                       <strong>personal and commercial projects</strong>.
//                       Attribution is appreciated but not strictly mandatory.
//                     </p>
//                   </div>

//                   <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
//                     <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
//                       2. Premium / Paid Assets License
//                     </h3>
//                     <p className="text-slate-600 text-xs sm:text-sm font-sans">
//                       Purchasing a premium product grants you a non-exclusive
//                       license to implement the code into web applications.
//                       However,{" "}
//                       <strong>
//                         redistributing, reselling, or sublicensing
//                       </strong>
//                       the source code files directly as standalone UI components
//                       or template collections is strictly prohibited.
//                     </p>
//                   </div>

//                   <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
//                     <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
//                       3. Limitation of Liability
//                     </h3>
//                     <p className="text-slate-600 text-xs sm:text-sm font-sans">
//                       SyncXel products and open-source snippets are provided on
//                       an <strong>"as-is"</strong> basis without warranties of
//                       any kind. We shall not be held liable for any direct,
//                       indirect, or incidental system bugs, crashes, or
//                       compilation issues arising from code integration.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* ================= REFUND POLICY ================= */}
//             {activeTab === "refund" && (
//               <div className="space-y-6">
//                 <h2 className="text-2xl font-bold text-slate-900 font-mono">
//                   // Refund Policy
//                 </h2>
//                 <p className="text-slate-600">
//                   Because SyncXel specializes in digital source code assets that
//                   offer instant downloads, all sales are generally final and
//                   non-refundable once the files have been accessed or
//                   downloaded.
//                 </p>

//                 <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2 font-mono">
//                   <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
//                     Exceptions & Developer Assistance
//                   </h3>
//                   <p className="text-slate-700 text-xs sm:text-sm font-sans">
//                     If you encounter corrupted archive files, critical asset
//                     delivery failures, or billing discrepancies, please contact
//                     our support team at{" "}
//                     <a
//                       href="mailto:syncxelofficial@gmail.com"
//                       className="text-slate-950 underline font-mono font-semibold">
//                       syncxelofficial@gmail.com
//                     </a>{" "}
//                     within <strong>7 days of purchase</strong>. We will review
//                     your case and provide a functional fix or replacement.
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* =========================================
//               4. SUPPORT FOOTER
//              ========================================= */}
//           <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 font-sans">
//             <span>Have custom licensing inquiries or legal questions?</span>
//             <a
//               href="mailto:syncxelofficial@gmail.com"
//               className="inline-flex items-center gap-1.5 text-slate-800 hover:text-slate-950 transition-colors font-mono font-medium">
//               <IoMdMail className="w-4 h-4 text-slate-500" />
//               <span>syncxelofficial@gmail.com</span>
//             </a>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLeft, HiX } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import {
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineCreditCard,
} from "react-icons/hi2";

// --- Framer Motion Animation Variants ---
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Default tab list
const defaultTabList = [
  { id: "privacy", label: "Privacy Policy", icon: HiOutlineShieldCheck },
  { id: "terms", label: "Terms of Service", icon: HiOutlineDocumentText },
  { id: "refund", label: "Refund Policy", icon: HiOutlineCreditCard },
];

export default function LegalPage({ tabList = defaultTabList }) {
  const [activeTab, setActiveTab] = useState("privacy");
  const [isMobileTabOpen, setIsMobileTabOpen] = useState(false);

  // Find active tab object for mobile button view
  const activeTabObj = tabList.find((t) => t.id === activeTab) || tabList[0];
  const ActiveIcon = activeTabObj.icon;

  return (
    <div className="min-h-screen bg-white text-slate-900 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-20 lg:mt-12">
      <motion.div
        className="max-w-7xl mx-auto space-y-3 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {/* =========================================
            1. TOP HEADER & BACK BUTTON
           ========================================= */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white border-none border-slate-50  rounded-2xl shadow-none relative overflow-hidden">
          <div className="space-y-2 relative z-10 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-5 py-1 rounded-full bg-white border border-slate-200/50 text-slate-500/50 text-xs font-mono shadow-xs">
              <span>// legal_compliance_repository_v2.0</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Legal &{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-200 to-slate-700 block sm:inline mt-1 sm:mt-0">
                Compliance Hub
              </span>
            </h1>

            <p className="text-slate-500 text-xs sm:text-sm leading-tight font-baloo">
              Review our terms of use, licensing policies, and privacy
              commitments designed to ensure complete transparency for all
              developers and clients.
            </p>

            <div className="text-xs text-slate-500 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 flex items-center gap-2 shadow-xs font-baloo">
              <MdOutlineTipsAndUpdates className="w-5 h-5 text-slate-900 animate-pulse" />
              <span>
                Last Updated :{" "}
                <strong className="text-slate-900">September 2026</strong>
              </span>
            </div>

            <a
              href="/"
              className="py-2.5 px-5 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-xl transition-all text-slate-200 hover:text-white flex items-center gap-2 space-x-2 text-xs font-baloo font-medium cursor-pointer w-fit shadow-xs hover:gap-3">
              <HiArrowLeft className="w-4 h-4" />
              <span>back_to_home()</span>
            </a>
          </div>
        </motion.div>

        {/* =========================================
            2. NAVIGATION TABS (DESKTOP & MOBILE RESPONSIVE)
           ========================================= */}
        {/* {tabList && tabList.length > 0 && (
          <>
            {/* --- DESKTOP TABS PILLS --- *
            <motion.div
              variants={itemVariants}
              className="hidden md:flex flex-wrap gap-2">
              {tabList.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-slate-950 text-white border border-slate-950 shadow-md scale-105"
                        : "text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200/60 bg-white"
                    }`}>
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </motion.div>

            {/* --- MOBILE TAB SELECTOR BUTTON --- 
            <motion.div variants={itemVariants} className="md:hidden">
              <button
                onClick={() => setIsMobileTabOpen(true)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold font-baloo text-slate-200 flex items-center justify-between shadow-md cursor-pointer">
                <span className="flex items-center space-x-2">
                  {ActiveIcon && <ActiveIcon className="w-4 h-4 text-slate-400" />}
                  <span>
                    Section :{" "}
                    <strong className="text-white">{activeTabObj.label}</strong>
                  </span>
                </span>
                <span className="text-[10px] bg-slate-700/50 px-3.5 py-1 rounded-md text-slate-300">
                  Change ▾
                </span>
              </button>
            </motion.div>

            {/* --- MOBILE BOTTOM SHEET / DRAWER FOR TABS --- *
            <AnimatePresence>
              {isMobileTabOpen && (
                <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-500/80 backdrop-blur-sm md:hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="w-full max-h-[75vh] bg-slate-950 border-t border-slate-800 rounded-t-3xl p-6 overflow-y-auto space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                        // select_legal_section
                      </h3>
                      <button
                        onClick={() => setIsMobileTabOpen(false)}
                        className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800 border border-slate-700 cursor-pointer">
                        <HiX className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-2 pt-2">
                      {tabList.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => {
                              setActiveTab(tab.id);
                              setIsMobileTabOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all border flex items-center gap-3 cursor-pointer ${
                              isActive
                                ? "bg-slate-300 text-slate-950 border-slate-200 shadow-md"
                                : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"
                            }`}>
                            {Icon && <Icon className="w-4 h-4" />}
                            <span>{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </>
        )} */}

        {/* =========================================
            2. NAVIGATION TABS (DESKTOP & MOBILE RESPONSIVE)
           ========================================= */}
        {tabList && tabList.length > 0 && (
          <>
            {/* --- DESKTOP TABS PILLS --- */}
            <motion.div
              variants={itemVariants}
              className="hidden md:flex flex-wrap gap-2">
              <div className="bg-white border-none border-slate-100 rounded-3xl p-3 flex lg:flex-row gap-2 scrollbar-thumb-slate-300 overflow-x-auto">
                {tabList.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-slate-950 text-white border border-slate-950 shadow-md scale-105"
                          : "text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200/60 bg-white"
                      }`}>
                      {Icon && <Icon className="w-4 h-4 shrink-0" />}
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* --- MOBILE FLOATING TAB SELECTOR BUTTON (Fixed at Bottom-Left) --- */}
            <div className="fixed bottom-4 left-4 z-40 md:hidden">
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileTabOpen(true)}
                className="px-5 py-5 bg-slate-950/95 backdrop-blur-md border border-slate-700 rounded-4xl text-xs font-bold font-baloo text-slate-200 flex items-center space-x-3 shadow-2xl cursor-pointer">
                <span className="w-3 h-3 mr-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="flex items-center space-x-3">
                  <span className="text-slate-400">Section : </span>
                  <strong className="text-white max-w-32 truncate flex items-center gap-1.5">
                    {ActiveIcon && (
                      <ActiveIcon className="w-3.5 h-3.5 text-slate-400" />
                    )}
                    {activeTabObj.label}
                  </strong>
                </span>
                {/* <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-lg text-slate-300 ml-1 border border-slate-700">
                  Change ▾
                </span> */}
              </motion.button>
            </div>

            {/* --- MOBILE TELEGRAM-STYLE FLOATING BOTTOM SHEET FOR TABS --- */}
            <AnimatePresence>
              {isMobileTabOpen && (
                <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-500/80 backdrop-blur-sm md:hidden p-4 pb-6">
                  <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="w-full max-w-md max-h-[70vh] bg-slate-950 border border-slate-800 rounded-3xl p-5 overflow-y-auto space-y-4 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                        select legal section
                      </h3>
                      <button
                        onClick={() => setIsMobileTabOpen(false)}
                        className="p-2 text-slate-300 hover:text-white rounded-xl bg-slate-800 border border-slate-700 cursor-pointer">
                        <HiX className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-2 pt-1">
                      {tabList.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => {
                              setActiveTab(tab.id);
                              setIsMobileTabOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 rounded-2xl text-xs font-bold font-baloo transition-all border flex items-center gap-3 cursor-pointer ${
                              isActive
                                ? "bg-slate-300 text-slate-950 border-slate-200 shadow-md"
                                : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"
                            }`}>
                            {Icon && <Icon className="w-4 h-4" />}
                            <span>{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* =========================================
            3. MAIN CONTENT CONTAINER (White Card)
           ========================================= */}
        <motion.div
          variants={itemVariants}
          className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 relative overflow-hidden text-slate-700">
          <div className="text-sm leading-relaxed text-slate-600 font-sans">
            {/* ================= PRIVACY POLICY ================= */}
            {activeTab === "privacy" && (
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-slate-900 font-mono">
                 Privacy Policy
                </h2>
                <p className="text-slate-600 font-baloo">
                  At SyncXel (hosted via Vercel and accessible at
                  syncxel.vercel.app), we deeply respect your privacy and are
                  committed to protecting your personal data.
                </p>

                <div className="space-y-2 font-mono">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                    <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
                      1. Information Collection & Merchant of Record
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-baloo leading-tight">
                      All online transactions and financial processing are
                      securely managed by our Merchant of Record,{" "}
                      <strong>Lemon Squeezy</strong>. We only collect essential
                      billing and contact details (such as your email address)
                      required for digital asset fulfillment and invoice
                      generation.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                    <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
                      2. Cookies and Analytics
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-baloo leading-tight">
                      We may utilize standard web analytics to monitor traffic
                      performance and user experience optimization. No sensitive
                      personal tracking information is sold or shared with
                      external third-party advertisers.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                    <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
                      3. Data Security
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-baloo leading-tight">
                      We implement enterprise-grade encryption protocols and
                      secure database practices to ensure your interactions and
                      download histories remain strictly confidential.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ================= TERMS OF SERVICE ================= */}
            {activeTab === "terms" && (
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-slate-900 font-mono">
                  Terms of Service & Licensing
                </h2>
                <p className="text-slate-600 font-baloo leading-tight">
                  By accessing, downloading, or purchasing any React, Tailwind
                  CSS components, or UI templates from SyncXel, you agree to
                  comply with the following professional terms and conditions.
                </p>

                <div className="space-y-2 font-mono">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                    <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
                      1. Free Resources License
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-baloo leading-tight">
                      All components, snippets, and templates marked as{" "}
                      <strong>Free</strong> on SyncXel can be used completely
                      free of charge in both{" "}
                      <strong>personal and commercial projects</strong>.
                      Attribution is appreciated but not strictly mandatory.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                    <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
                      2. Premium / Paid Assets License
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-baloo leading-tight">
                      Purchasing a premium product grants you a non-exclusive
                      license to implement the code into web applications.
                      However,{" "}
                      <strong>
                        redistributing, reselling, or sublicensing
                      </strong>{" "}
                      the source code files directly as standalone UI components
                      or template collections is strictly prohibited.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                    <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
                      3. Limitation of Liability
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-baloo leading-tight">
                      SyncXel products and open-source snippets are provided on
                      an <strong>"as-is"</strong> basis without warranties of
                      any kind. We shall not be held liable for any direct,
                      indirect, or incidental system bugs, crashes, or
                      compilation issues arising from code integration.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ================= REFUND POLICY ================= */}
            {activeTab === "refund" && (
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-slate-900 font-mono">
                  Refund Policy
                </h2>
                <p className="text-slate-600 font-baloo leading-tight">
                  Because SyncXel specializes in digital source code assets that
                  offer instant downloads, all sales are generally final and
                  non-refundable once the files have been accessed or
                  downloaded.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2 font-mono">
                  <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
                    Exceptions & Developer Assistance
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-sm font-baloo leading-tight">
                    If you encounter corrupted archive files, critical asset
                    delivery failures, or billing discrepancies, please contact
                    our support team at{" "}
                    <a
                      href="mailto:syncxelofficial@gmail.com"
                      className="text-slate-950 underline font-baloo font-semibold">
                      syncxelofficial@gmail.com
                    </a>{" "}
                    within <strong>7 days of purchase</strong>. We will review
                    your case and provide a functional fix or replacement.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* =========================================
              4. SUPPORT FOOTER
             ========================================= */}
          <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 font-baloo">
            <span>Have custom licensing inquiries or legal questions?</span>
            <a
              href="mailto:syncxelofficial@gmail.com"
              className="inline-flex items-center gap-1.5 text-slate-800 hover:text-slate-950 transition-colors font-baloo font-medium">
              <IoMdMail className="w-4 h-4 text-slate-500" />
              <span>syncxelofficial@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
