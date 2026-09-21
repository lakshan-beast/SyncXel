// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   HiOutlineChevronDown,
//   HiOutlineQuestionMarkCircle,
// } from "react-icons/hi2";

// export default function FaqSection() {
//   const [openIndex, setOpenIndex] = useState(0);

//   const faqs = [
//     {
//       question: "What is SyncXel?",
//       answer:
//         "SyncXel is a developer-centric web platform providing production-ready React & Tailwind CSS UI components alongside high-performance frontend engineering services for startups and businesses.",
//     },
//     {
//       question: "Are the UI components free to use in commercial projects?",
//       answer:
//         "Yes, absolutely! All open-source UI blocks and components provided by SyncXel are free to use in both personal and commercial client projects.",
//     },
//     {
//       question: "How do I hire you for a custom web application?",
//       answer:
//         "You can fill out the inquiry form in our Services section or reach out via email. I will respond within 24 hours to schedule a consultation to discuss your project scope.",
//     },
//     {
//       question: "What tech stack do you use for web development?",
//       answer:
//         "I specialize in modern frontend stack: React, Next.js, Tailwind CSS, JavaScript/TypeScript, client-side Firebase (Auth & Firestore), EmailJS, and REST API integrations, deployed via Vercel.",
//     },
//     {
//       question: "How fast can you deliver a custom client project?",
//       answer:
//         "Delivery timelines depend on scope. A high-converting landing page typically takes around 1 week, while full web applications take 2 to 3 weeks with weekly progress demos.",
//     },
//     {
//       question: "Do you offer post-launch maintenance and support?",
//       answer:
//         "Yes, post-launch support includes performance tuning, Lighthouse score optimization, mobile responsiveness tweaks, and continuous feature additions upon request.",
//     },
//   ];

//   const toggleFaq = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       id="faq"
//       className="py-24 px-4 sm:px-8 relative overflow-hidden scroll-mt-20">
//       {/* Background Accent Glows */}
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />
//       <div className="absolute top-1/4 left-10 w-80 h-80 bg-indigo-500/10 blur-[140px] pointer-events-none rounded-full" />

//       <div className="max-w-4xl mx-auto space-y-12 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center space-y-2">
//           <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
//             <HiOutlineQuestionMarkCircle className="w-4 h-4" />
//             <span>Got Questions?</span>
//           </div>

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
//             Frequently Asked{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
//               Questions
//             </span>
//           </h2>

//           <p className="text-slate-400 text-sm sm:text-base leading-tight max-w-xl mx-auto">
//             Everything you need to know about SyncXel UI components and custom
//             frontend engineering services.
//           </p>
//         </motion.div>

//         {/* FAQ Accordion List */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="space-y-2">
//           {faqs.map((faq, idx) => {
//             const isOpen = openIndex === idx;

//             return (
//               <motion.div
//                 key={idx}
//                 variants={itemVariants}
//                 className={`px-3 py-0 rounded-4xl lg:rounded-2xl border-3 md:border-2 transition-all duration-300 overflow-hidden backdrop-blur-md ${
//                   isOpen
//                     ? "bg-slate-900/90 border-cyan-500/15 shadow-xl shadow-cyan-500/5"
//                     : "bg-slate-900/40 border-white/8 hover:border-white/12"
//                 }`}>
//                 {/* Accordion Question Header */}
//                 <button
//                   type="button"
//                   onClick={() => toggleFaq(idx)}
//                   className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
//                   aria-expanded={isOpen}>
//                   <span className="text-base sm:text-lg font-semibold text-white/80 hover:text-white tracking-tight">
//                     {faq.question}
//                   </span>
//                   <div
//                     className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
//                       isOpen
//                         ? "bg-cyan-500/10 border-cyan-500/50 text-cyan-300 rotate-540 scale-120"
//                         : "bg-slate-950 border-white/10 text-slate-400"
//                     }`}>
//                     <HiOutlineChevronDown className="w-4 h-4" />
//                   </div>
//                 </button>

//                 {/* Accordion Answer Content with Smooth Framer Motion */}
//                 <AnimatePresence>
//                   {isOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3, ease: "easeInOut" }}>
//                       <div className="px-8 pb-3 pt-0 text-slate-400 text-sm sm:text-base leading-tight border-t border-white/10 mt-0">
//                         <p className="pt-4">{faq.answer}</p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineChevronDown,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is SyncXel?",
      answer:
        "SyncXel is a developer-centric web platform providing production-ready React & Tailwind CSS UI components alongside high-performance frontend engineering services for startups and businesses.",
    },
    {
      question: "Are the UI components free to use in commercial projects?",
      answer:
        "Yes, absolutely! All open-source UI blocks and components provided by SyncXel are free to use in both personal and commercial client projects.",
    },
    {
      question: "How do I hire you for a custom web application?",
      answer:
        "You can fill out the inquiry form in our Services section or reach out via email. I will respond within 24 hours to schedule a consultation to discuss your project scope.",
    },
    {
      question: "What tech stack do you use for web development?",
      answer:
        "I specialize in modern frontend stack: React, Next.js, Tailwind CSS, JavaScript/TypeScript, client-side Firebase (Auth & Firestore), EmailJS, and REST API integrations, deployed via Vercel.",
    },
    {
      question: "How fast can you deliver a custom client project?",
      answer:
        "Delivery timelines depend on scope. A high-converting landing page typically takes around 1 week, while full web applications take 2 to 3 weeks with weekly progress demos.",
    },
    {
      question: "Do you offer post-launch maintenance and support?",
      answer:
        "Yes, post-launch support includes performance tuning, Lighthouse score optimization, mobile responsiveness tweaks, and continuous feature additions upon request.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="faq"
      className="py-10 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-0  lg:scroll-mt-1">
      {/* Subtle Grid Background */}
      {/* <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px]" /> */}

      <div className="relative z-10 p-2 sm:p-8 max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-left space-y-1">
          <div className="flex flex-col gap-1 lg:flex-row lg:justify-between mb-3 lg:mb-0">
            <span className="font-mono text-xs text-slate-500/50 mb-0 block">
              // support_and_knowledge_base
            </span>

            <div className="inline-flex items-center w-fit space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono shadow-xs">
              <HiOutlineQuestionMarkCircle className="w-3.5 h-3.5 text-slate-600" />
              <span>faq_system.config</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Frequently Asked <span className="text-slate-900">Questions</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-tight max-w-4xl font-baloo">
            Everything you need to know about SyncXel UI components and custom
            frontend engineering services.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3 lg:space-y-1">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`rounded-xl border-2 transition-all duration-100 overflow-hidden bg-white shadow-xs ${
                  isOpen
                    ? "border-slate-200/70 shadow-lg"
                    : "border-slate-200/20 hover:border-slate-200/50"
                }`}>
                {/* Accordion Question Header */}
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-3 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}>
                  <div className="space-y-0">
                    <span className="font-mono text-[10px] text-slate-500/50 block">
                      // query_0{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold font-exo text-slate-600 tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? "bg-slate-700 border-slate-800 text-white"
                        : "bg-slate-100 border-slate-200 text-slate-700"
                    }`}>
                    <HiOutlineChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Accordion Answer Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}>
                      <div className="px-8 py-1 pb-3 pt-0 text-slate-500 text-xs sm:text-md leading-tight border-t border-slate-100 mt-0 font-baloo">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
