
import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  HiPlus,
  HiMinus,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";

const faqItems = [
  {
    question: "What types of websites can you develop?",
    answer:
      "We can work on business websites, landing pages, personal portfolios, admin dashboard interfaces, booking interfaces and other custom frontend projects.",
  },
  {
    question: "Can I request a custom design for my project?",
    answer:
      "Yes. We can discuss your brand, preferred visual direction, required sections and functionality before deciding on the right design approach.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Responsive implementation is considered throughout development. We aim to make the interface usable across mobile, tablet and desktop screen sizes.",
  },
  {
    question: "Can you build a website using React?",
    answer:
      "Yes. React is one of the frontend technologies used for building reusable components and interactive website experiences.",
  },
  {
    question: "Can you add backend functionality?",
    answer:
      "Backend requirements depend on the project. We can discuss the required functionality and arrange backend development support where needed.",
  },
  {
    question: "How do I get started with a project?",
    answer:
      "Contact us with a short description of your idea, goals and requirements. We can discuss the scope and suitable next steps.",
  },
];

export default function ServicesFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
        <div>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-blue-600 uppercase">
            <HiOutlineQuestionMarkCircle className="w-4 h-4" />
            Frequently Asked Questions
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-4">
            Got questions?
            <span className="block text-slate-400 mt-1">
              We've got answers.
            </span>
          </h2>

          <p className="text-sm text-slate-500 leading-relaxed mt-5 max-w-sm">
            Here are some common questions about our services and
            the project development process.
          </p>

          <a
            href="mailto:syncxelofficial@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 mt-7"
          >
            Ask us something else
          </a>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={item.question}
                className={`border rounded-xl overflow-hidden transition-colors ${
                  isOpen
                    ? "border-blue-200 bg-blue-50/30"
                    : "border-slate-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6"
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    {item.question}
                  </span>

                  <span className="w-8 h-8 shrink-0 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                    {isOpen ? (
                      <HiMinus className="w-4 h-4" />
                    ) : (
                      <HiPlus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? false
                          : { height: 0, opacity: 0 }
                      }
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
