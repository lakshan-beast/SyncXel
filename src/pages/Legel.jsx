import React, { useState } from "react";

const Legal = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4 mb-8">
          <button
            onClick={() => setActiveTab("privacy")}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
              activeTab === "privacy"
                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}>
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab("terms")}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
              activeTab === "terms"
                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}>
            Terms of Service
          </button>
          <button
            onClick={() => setActiveTab("refund")}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
              activeTab === "refund"
                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}>
            Refund Policy
          </button>
        </div>

        {/* Content Section */}
        <div className="space-y-6 text-sm leading-relaxed text-slate-300">
          {/* PRIVACY POLICY */}
          {activeTab === "privacy" && (
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-white mb-4">
                Privacy Policy
              </h1>
              <p>
                At SyncXel (accessible via syncxel.vercel.app), protecting our
                users' privacy is one of our top priorities.
              </p>
              <h2 className="text-lg font-semibold text-white pt-2">
                1. Information We Collect
              </h2>
              <p>
                We collect minimal personal information necessary to process
                orders and improve our UI products. This includes your email
                address when making purchases via our payment processor (Lemon
                Squeezy).
              </p>
              <h2 className="text-lg font-semibold text-white pt-2">
                2. How We Use Information
              </h2>
              <p>
                Your information is strictly used for order fulfillment, digital
                asset delivery, sending invoice receipts, and providing customer
                support.
              </p>
              <h2 className="text-lg font-semibold text-white pt-2">
                3. Data Protection
              </h2>
              <p>
                We do not sell, trade, or rent your personal data to third
                parties. All transaction processing is securely handled by Lemon
                Squeezy using industry-standard encryption.
              </p>
            </div>
          )}

          {/* TERMS OF SERVICE */}
          {activeTab === "terms" && (
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-white mb-4">
                Terms of Service
              </h1>
              <p>
                By downloading or purchasing any React/Tailwind UI components or
                templates from SyncXel, you agree to the following terms and
                conditions.
              </p>
              <h2 className="text-lg font-semibold text-white pt-2">
                1. License & Usage
              </h2>
              <p>
                Upon purchasing a premium component or template, SyncXel grants
                you a non-exclusive, non-transferable license to use the code in
                commercial and personal projects.
              </p>
              <h2 className="text-lg font-semibold text-white pt-2">
                2. Restrictions
              </h2>
              <p>
                You may not redistribute, resell, sublicense, or share SyncXel
                source code files directly as standalone assets or UI kit
                collections.
              </p>
            </div>
          )}

          {/* REFUND POLICY */}
          {activeTab === "refund" && (
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-white mb-4">
                Refund Policy
              </h1>
              <p>
                Due to the nature of digital goods (instant source code
                downloads), all sales on SyncXel are final and non-refundable
                once the file is delivered.
              </p>
              <h2 className="text-lg font-semibold text-white pt-2">
                Exceptions & Support
              </h2>
              <p>
                If you experience technical issues or corrupted source code
                downloads, please contact us at{" "}
                <span className="text-cyan-400 font-mono">
                  syncxelofficial@gmail.com
                </span>{" "}
                within 7 days of purchase. We will promptly assist or issue a
                fix.
              </p>
            </div>
          )}
        </div>

        {/* Support Footer */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-500 text-center">
          Questions? Contact us at{" "}
          <a
            href="mailto:syncxelofficial@gmail.com"
            className="text-cyan-400 hover:underline font-mono">
            syncxelofficial@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Legal;
