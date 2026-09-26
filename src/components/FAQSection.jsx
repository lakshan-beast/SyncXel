

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
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 text-slate-900 border-t-2 border-slate-200">
      <div className="relative z-10 space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left space-y-3">
          <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
            <span className="font-mono text-xs text-slate-400 block">
              // support_and_knowledge_base
            </span>

            <div className="inline-flex items-center w-fit space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono shadow-xs">
              <HiOutlineQuestionMarkCircle className="w-3.5 h-3.5 text-slate-600" />
              <span>faq_system.config</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-left sm:text-center pt-1 sm:pt-3">
            Frequently Asked <span className="text-slate-900">Questions</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-tight max-w-3xl font-baloo mx-auto text-left sm:text-center">
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
          className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white shadow-sm ${
                  isOpen
                    ? "border-slate-300 shadow-md"
                    : "border-slate-200/50 hover:border-slate-300/50"
                }`}>
                {/* Accordion Question Header */}
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-slate-400 block">
                      // query_0{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-950 tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? "bg-slate-900 border-slate-900 text-white"
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
                      <div className="px-6 pb-6 pt-0 text-slate-500 text-xs sm:text-sm leading-tight border-t border-slate-100 font-baloo">
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