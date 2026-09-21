
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
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

  return (
    <div className="min-h-screen bg-white text-slate-600 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-mono mt-16">
      <motion.div
        className="max-w-5xl mx-auto space-y-3 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {/* =========================================
            1. TOP HEADER & BACK BUTTON
           ========================================= */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden">
          <div className="space-y-3 relative z-10 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-white border border-slate-200 text-slate-400 text-xs font-mono shadow-xs w-fit">
              <span>// legal_compliance_repository_v2.5</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-sans">
              Legal &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-900 block sm:inline mt-1 sm:mt-0">
                Compliance Hub
              </span>
            </h1>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
              Review our terms of use, licensing policies, and privacy
              commitments designed to ensure complete transparency for all
              developers and clients.
            </p>

            <div className="text-xs text-slate-500 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 flex items-center gap-2 shadow-xs w-fit">
              <MdOutlineTipsAndUpdates className="w-5 h-5 text-slate-900 animate-bounce" />
              <span>
                Last Updated :{" "}
                <strong className="text-slate-900">September 2026</strong>
              </span>
            </div>

            <a
              href="/"
              className="py-2.5 px-5 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-xl transition-all text-slate-300 hover:text-white flex items-center gap-2 text-xs font-medium cursor-pointer w-fit shadow-xs">
              <HiArrowLeft className="w-4 h-4" />
              <span>bac_to_hpme()</span>
            </a>
          </div>
        </motion.div>

        {/* =========================================
            2. NAVIGATION TABS
           ========================================= */}
        {tabList && tabList.length > 0 && (
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2">
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
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 font-mono">
                  // Privacy Policy
                </h2>
                <p className="text-slate-600">
                  At SyncXel (hosted via Vercel and accessible at
                  syncxel.vercel.app), we deeply respect your privacy and are
                  committed to protecting your personal data.
                </p>

                <div className="space-y-4 font-mono">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                    <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
                      1. Information Collection & Merchant of Record
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-sans">
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
                    <p className="text-slate-600 text-xs sm:text-sm font-sans">
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
                    <p className="text-slate-600 text-xs sm:text-sm font-sans">
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
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 font-mono">
                  // Terms of Service & Licensing
                </h2>
                <p className="text-slate-600">
                  By accessing, downloading, or purchasing any React, Tailwind
                  CSS components, or UI templates from SyncXel, you agree to
                  comply with the following professional terms and conditions.
                </p>

                <div className="space-y-4 font-mono">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                    <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
                      1. Free Resources License
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-sans">
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
                    <p className="text-slate-600 text-xs sm:text-sm font-sans">
                      Purchasing a premium product grants you a non-exclusive
                      license to implement the code into web applications.
                      However,{" "}
                      <strong>
                        redistributing, reselling, or sublicensing
                      </strong>
                      the source code files directly as standalone UI components
                      or template collections is strictly prohibited.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                    <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
                      3. Limitation of Liability
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-sans">
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
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 font-mono">
                  // Refund Policy
                </h2>
                <p className="text-slate-600">
                  Because SyncXel specializes in digital source code assets that
                  offer instant downloads, all sales are generally final and
                  non-refundable once the files have been accessed or
                  downloaded.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2 font-mono">
                  <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
                    Exceptions & Developer Assistance
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-sm font-sans">
                    If you encounter corrupted archive files, critical asset
                    delivery failures, or billing discrepancies, please contact
                    our support team at{" "}
                    <a
                      href="mailto:syncxelofficial@gmail.com"
                      className="text-slate-950 underline font-mono font-semibold">
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
          <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 font-sans">
            <span>Have custom licensing inquiries or legal questions?</span>
            <a
              href="mailto:syncxelofficial@gmail.com"
              className="inline-flex items-center gap-1.5 text-slate-800 hover:text-slate-950 transition-colors font-mono font-medium">
              <IoMdMail className="w-4 h-4 text-slate-500" />
              <span>syncxelofficial@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
