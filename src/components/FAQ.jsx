// import React, { useState } from "react";
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
//         "SyncXel is a dual-purpose web platform offering production-ready React & Tailwind CSS UI components for developers, along with high-performance custom web development services for startups and businesses.",
//     },
//     {
//       question: "Are the UI components free to use in commercial projects?",
//       answer:
//         "Yes, absolutely! All open-source UI blocks and components provided by SyncXel are free to use in both personal and commercial client projects.",
//     },
//     {
//       question: "How do I hire SyncXel for a custom web application?",
//       answer:
//         "You can fill out the inquiry form in our Services section below or reach out via email. We will arrange a consultation call within 24 hours to review your requirements.",
//     },
//     {
//       question: "What tech stack do you use for client engineering?",
//       answer:
//         "We build with modern industry standards including React, Next.js, Tailwind CSS, TypeScript, Node.js, and deploy via Vercel or Netlify for maximum speed and security.",
//     },
//     {
//       question: "How fast can you deliver a custom client project?",
//       answer:
//         "Delivery times depend on project scope. High-converting landing pages take around 1 week, while full-stack web applications take 2 to 4 weeks with weekly progress demos.",
//     },
//     {
//       question: "Do you offer post-launch maintenance and support?",
//       answer:
//         "Yes, we provide dedicated engineering support, performance optimization, WCAG accessibility checks, and continuous feature updates after deployment.",
//     },
//   ];

//   const toggleFaq = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section id="faq" className="py-20 px-4 sm:px-8 relative overflow-hidden">
//       {/* Background Accent Glow */}
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-syncxel-cyan/5 blur-[150px] pointer-events-none rounded-full" />

//       <div className="max-w-4xl mx-auto space-y-12 relative z-10">
//         {/* Section Header */}
//         <div className="text-center space-y-4">
//           <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-syncxel-cyan/10 border border-syncxel-cyan/20 text-syncxel-cyan text-xs font-semibold">
//             <HiOutlineQuestionMarkCircle className="w-4 h-4" />
//             <span>Got Questions?</span>
//           </div>

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
//             Frequently Asked{" "}
//             <span className="text-transparent bg-clip-text bg-syncxel-gradient">
//               Questions
//             </span>
//           </h2>

//           <p className="text-syncxel-textMuted text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
//             Everything you need to know about SyncXel components and custom
//             engineering services.
//           </p>
//         </div>

//         {/* FAQ Accordion List */}
//         <div className="space-y-1.5">
//           {faqs.map((faq, idx) => {
//             const isOpen = openIndex === idx;

//             return (
//               <div
//                 key={idx}
//                 className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
//                   isOpen
//                     ? "bg-syncxel-card/90 border-syncxel-cyan/40 shadow-xl shadow-syncxel-cyan/5"
//                     : "bg-syncxel-card/40 border-syncxel-border/60 hover:border-syncxel-border"
//                 }`}>
//                 {/* Accordion Question Header */}
//                 <button
//                   onClick={() => toggleFaq(idx)}
//                   className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none">
//                   <span className="text-base sm:text-lg font-bold text-white font-heading">
//                     {faq.question}
//                   </span>
//                   <div
//                     className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
//                       isOpen
//                         ? "bg-syncxel-cyan/20 border-syncxel-cyan/50 text-syncxel-cyan rotate-180"
//                         : "bg-syncxel-dark border-syncxel-border text-syncxel-textMuted"
//                     }`}>
//                     <HiOutlineChevronDown className="w-4 h-4" />
//                   </div>
//                 </button>

//                 {/* Accordion Answer Content */}
//                 {isOpen && (
//                   <div className="px-6 pb-6 pt-0 text-white/60 text-sm sm:text-base leading-relaxed border-t border-syncxel-border/30 mt-1">
//                     <p className="pt-4">{faq.answer}</p>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
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

  return (
    <section
      id="faq"
      className="py-24 px-4 sm:px-8 relative overflow-hidden scroll-mt-20">
      {/* Background Accent Glows */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-indigo-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <HiOutlineQuestionMarkCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
              Questions
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-4 md:leading-relaxed max-w-xl mx-auto">
            Everything you need to know about SyncXel UI components and custom
            frontend engineering services.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-1 md:space-y-2 lg:space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border-3 md:border-2 transition-all duration-300 overflow-hidden backdrop-blur-md ${
                  isOpen
                    ? "bg-slate-900/80 border-cyan-500/20 shadow-xl shadow-cyan-500/5"
                    : "bg-slate-900/40 border-white/10 hover:border-white/20"
                }`}>
                {/* Accordion Question Header */}
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}>
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-400 rotate-180"
                        : "bg-slate-950 border-white/10 text-slate-400"
                    }`}>
                    <HiOutlineChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Answer Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/10 mt-1">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
