// import React, { useState } from "react";

// const Legal = () => {
//   const [activeTab, setActiveTab] = useState("privacy");

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 font-sans">
//       <div className="max-w-4xl mx-auto bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
//         {/* Navigation Tabs */}
//         <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4 mb-8">
//           <button
//             onClick={() => setActiveTab("privacy")}
//             className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
//               activeTab === "privacy"
//                 ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
//                 : "text-slate-400 hover:text-white hover:bg-slate-800/50"
//             }`}>
//             Privacy Policy
//           </button>
//           <button
//             onClick={() => setActiveTab("terms")}
//             className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
//               activeTab === "terms"
//                 ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
//                 : "text-slate-400 hover:text-white hover:bg-slate-800/50"
//             }`}>
//             Terms of Service
//           </button>
//           <button
//             onClick={() => setActiveTab("refund")}
//             className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
//               activeTab === "refund"
//                 ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
//                 : "text-slate-400 hover:text-white hover:bg-slate-800/50"
//             }`}>
//             Refund Policy
//           </button>
//         </div>

//         {/* Content Section */}
//         <div className="space-y-6 text-sm leading-relaxed text-slate-300">
//           {/* PRIVACY POLICY */}
//           {activeTab === "privacy" && (
//             <div className="space-y-4">
//               <h1 className="text-2xl font-bold text-white mb-4">
//                 Privacy Policy
//               </h1>
//               <p>
//                 At SyncXel (accessible via syncxel.vercel.app), protecting our
//                 users' privacy is one of our top priorities.
//               </p>
//               <h2 className="text-lg font-semibold text-white pt-2">
//                 1. Information We Collect
//               </h2>
//               <p>
//                 We collect minimal personal information necessary to process
//                 orders and improve our UI products. This includes your email
//                 address when making purchases via our payment processor (Lemon
//                 Squeezy).
//               </p>
//               <h2 className="text-lg font-semibold text-white pt-2">
//                 2. How We Use Information
//               </h2>
//               <p>
//                 Your information is strictly used for order fulfillment, digital
//                 asset delivery, sending invoice receipts, and providing customer
//                 support.
//               </p>
//               <h2 className="text-lg font-semibold text-white pt-2">
//                 3. Data Protection
//               </h2>
//               <p>
//                 We do not sell, trade, or rent your personal data to third
//                 parties. All transaction processing is securely handled by Lemon
//                 Squeezy using industry-standard encryption.
//               </p>
//             </div>
//           )}

//           {/* TERMS OF SERVICE */}
//           {activeTab === "terms" && (
//             <div className="space-y-4">
//               <h1 className="text-2xl font-bold text-white mb-4">
//                 Terms of Service
//               </h1>
//               <p>
//                 By downloading or purchasing any React/Tailwind UI components or
//                 templates from SyncXel, you agree to the following terms and
//                 conditions.
//               </p>
//               <h2 className="text-lg font-semibold text-white pt-2">
//                 1. License & Usage
//               </h2>
//               <p>
//                 Upon purchasing a premium component or template, SyncXel grants
//                 you a non-exclusive, non-transferable license to use the code in
//                 commercial and personal projects.
//               </p>
//               <h2 className="text-lg font-semibold text-white pt-2">
//                 2. Restrictions
//               </h2>
//               <p>
//                 You may not redistribute, resell, sublicense, or share SyncXel
//                 source code files directly as standalone assets or UI kit
//                 collections.
//               </p>
//             </div>
//           )}

//           {/* REFUND POLICY */}
//           {activeTab === "refund" && (
//             <div className="space-y-4">
//               <h1 className="text-2xl font-bold text-white mb-4">
//                 Refund Policy
//               </h1>
//               <p>
//                 Due to the nature of digital goods (instant source code
//                 downloads), all sales on SyncXel are final and non-refundable
//                 once the file is delivered.
//               </p>
//               <h2 className="text-lg font-semibold text-white pt-2">
//                 Exceptions & Support
//               </h2>
//               <p>
//                 If you experience technical issues or corrupted source code
//                 downloads, please contact us at{" "}
//                 <span className="text-cyan-400 font-mono">
//                   syncxelofficial@gmail.com
//                 </span>{" "}
//                 within 7 days of purchase. We will promptly assist or issue a
//                 fix.
//               </p>
//             </div>
//           )}
//         </div>

//         {/* Support Footer */}
//         <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-500 text-center">
//           Questions? Contact us at{" "}
//           <a
//             href="mailto:syncxelofficial@gmail.com"
//             className="text-cyan-400 hover:underline font-mono">
//             syncxelofficial@gmail.com
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Legal;

import React, { useState } from "react";
import {
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineCreditCard,
  HiOutlineArrowLeft,
} from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";

const Legal = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  const tabList = [
    { id: "privacy", label: "Privacy Policy", icon: HiOutlineShieldCheck },
    { id: "terms", label: "Terms of Service", icon: HiOutlineDocumentText },
    { id: "refund", label: "Refund Policy", icon: HiOutlineCreditCard },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        {/* Back Button & Header Badge */}
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors bg-slate-900/80 px-3.5 py-2 rounded-xl border border-white/10 backdrop-blur-md">
            <HiOutlineArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>

          <span className="text-xs text-slate-500 font-mono">
            Last Updated: Jan 2026
          </span>
        </div>

        {/* Main Card Container */}
        <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8">
          {/* Header Title */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Legal & Compliance
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Understand our terms, privacy commitments, and refund rules.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
            {tabList.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-md shadow-cyan-500/5"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent"
                  }`}>
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content Section */}
          <div className="text-sm leading-relaxed text-slate-300">
            {/* PRIVACY POLICY */}
            {activeTab === "privacy" && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-white">
                  Privacy Policy
                </h2>
                <p>
                  At SyncXel (accessible via syncxel.vercel.app), protecting our
                  users' privacy is one of our top priorities.
                </p>

                <div className="space-y-4">
                  <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5 space-y-1">
                    <h3 className="font-semibold text-white">
                      1. Information We Collect
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      We collect minimal personal information necessary to
                      process orders and improve our UI products. This includes
                      your email address when making purchases via our merchant
                      system (Lemon Squeezy).
                    </p>
                  </div>

                  <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5 space-y-1">
                    <h3 className="font-semibold text-white">
                      2. How We Use Information
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      Your information is strictly used for order fulfillment,
                      digital asset delivery, sending invoice receipts, and
                      providing customer support.
                    </p>
                  </div>

                  <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5 space-y-1">
                    <h3 className="font-semibold text-white">
                      3. Data Protection
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
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
                <h2 className="text-2xl font-bold text-white">
                  Terms of Service
                </h2>
                <p>
                  By downloading or purchasing any React/Tailwind UI components
                  or templates from SyncXel, you agree to the following terms
                  and conditions.
                </p>

                <div className="space-y-4">
                  <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5 space-y-1">
                    <h3 className="font-semibold text-white">
                      1. License & Usage
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      Upon purchasing a premium component or template, SyncXel
                      grants you a non-exclusive, non-transferable license to
                      use the code in both commercial and personal projects.
                    </p>
                  </div>

                  <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5 space-y-1">
                    <h3 className="font-semibold text-white">
                      2. Restrictions
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
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
                <h2 className="text-2xl font-bold text-white">Refund Policy</h2>
                <p>
                  Due to the nature of digital goods (instant source code
                  downloads), all sales on SyncXel are final and non-refundable
                  once the file is delivered.
                </p>

                <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-cyan-400">
                    Exceptions & Technical Support
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    If you experience technical issues or corrupted source code
                    downloads, please reach out to us at{" "}
                    <a
                      href="mailto:syncxelofficial@gmail.com"
                      className="text-cyan-400 underline font-mono">
                      syncxelofficial@gmail.com
                    </a>{" "}
                    within 7 days of purchase. We will promptly assist or issue
                    a fix/replacement.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Support Footer */}
          <div className="pt-6 border-t border-white/10 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>Have legal questions or custom licensing inquiries?</span>
            <a
              href="mailto:syncxelofficial@gmail.com"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-mono font-medium">
              <IoMdMail className="w-4 h-4" />
              <span>syncxelofficial@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
