// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   HiOutlineShieldCheck,
//   HiOutlineDocumentText,
//   HiOutlineCreditCard,
// } from "react-icons/hi2";

// import LegalHeader from "../components/layout/legel/LegelHeader";
// import LegalTabs from "../components/layout/legel/LegelTabs";
// import LegalContent from "../components/layout/legel/LegelContent";
// import LegalFooter from "../components/layout/legel/LegelFooter";

// const defaultTabList = [
//   { id: "privacy", label: "Privacy Policy", icon: HiOutlineShieldCheck },
//   { id: "terms", label: "Terms of Service", icon: HiOutlineDocumentText },
//   { id: "refund", label: "Refund Policy", icon: HiOutlineCreditCard },
// ];

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

// export default function LegalPage({ tabList = defaultTabList }) {
//   const [activeTab, setActiveTab] = useState("privacy");
//   const [isMobileTabOpen, setIsMobileTabOpen] = useState(false);

//   const activeTabObj =
//     tabList.find((tab) => tab.id === activeTab) || tabList[0];

//   return (
//     <div className="min-h-screen text-white bg-slate-950 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-20 lg:mt-12">
//       <motion.div
//         className="max-w-7xl mx-auto space-y-3 relative z-10"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible">
//         <LegalHeader itemVariants={itemVariants} />

//         <LegalTabs
//           tabList={tabList}
//           activeTab={activeTab}
//           setActiveTab={setActiveTab}
//           activeTabObj={activeTabObj}
//           isMobileTabOpen={isMobileTabOpen}
//           setIsMobileTabOpen={setIsMobileTabOpen}
//           itemVariants={itemVariants}
//         />

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           variants={itemVariants}
//           className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 relative overflow-hidden text-slate-700">
//           <LegalContent activeTab={activeTab} />
//           <LegalFooter />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

import React, { useState } from "react";
import SEO from "../components/common/SEO";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// import LegalHeader from "./components/LegalHeader";
// import LegalNavigation from "./components/LegalNavigation";
// import LegalFooter from "./components/LegalFooter";

import LegalHeader from "../components/layout/legel/LegelHeader";
import LegalFooter from "../components/layout/legel/LegelFooter";
import LegalNavigation from "../components/layout/legel/LegalNavigation";

import PrivacyPolicy from "../components/layout/legel/sections/PrivacyPolicy";
import TermsOfService from "../components/layout/legel/sections/TermsOfServices";
import RefundPolicy from "../components/layout/legel/sections/RefundPolicy";

const legalSections = {
  privacy: PrivacyPolicy,
  terms: TermsOfService,
  refunds: RefundPolicy,
};

export default function LegalPage() {
  const [activeSection, setActiveSection] = useState("privacy");
  const shouldReduceMotion = useReducedMotion();

  const ActivePolicy = legalSections[activeSection];

  return (
    <>
      <SEO
        title="Legal Information & Policies | SyncXel"
        description="Read SyncXel's terms of service, privacy policy, product policies and other important legal information."
        path="/legal"
      />
      
      <main className="relative overflow-hidden bg-white py-20 dark:bg-slate-950 mt-10">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-20 -left-40 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <LegalHeader />

          <div className="mt-14">
            <LegalNavigation
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />
          </div>

          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}>
                <ActivePolicy />
              </motion.div>
            </AnimatePresence>
          </div>

          <LegalFooter />
        </div>
      </main>
    </>
  );
}
