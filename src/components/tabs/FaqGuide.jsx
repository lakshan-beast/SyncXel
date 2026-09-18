import React, { useState } from "react";
import { faqData } from "../../data/docs/faqData";
import { HiOutlineChevronDown, HiOutlineQuestionMarkCircle } from "react-icons/hi";

export default function FaqGuide() {
  const [openIndex, setOpenIndex] = useState(0); // Default first item open

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-5 font-baloo">
      
      {/* 1. MAIN HEADER CARD */}
      <div className="bg-white border border-slate-800/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-1">
        <span className="text-[10px] font-mono text-slate-500/60">
          // frequently_asked_questions
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {faqData.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          {faqData.subtitle}
        </p>
        <p className="text-xs text-slate-600 italic bg-slate-50 p-3.5 mt-5 rounded-2xl border border-slate-200/60 text-center">
          {faqData.description}
        </p>
      </div>

      {/* 2. FAQS ACCORDION LOOP */}
      <div className="space-y-1">
        {faqData.items.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.id || idx}
              className="bg-white border border-slate-800/10 rounded-2xl overflow-hidden shadow-xl transition-all duration-300">
              
              {/* Question Header */}
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between p-6 sm:p-5 text-left focus:outline-none">
                <div className="flex items-center space-x-3.5">
                  <HiOutlineQuestionMarkCircle className="w-5 h-5 text-slate-900 shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-slate-900 font-baloo">
                    {faq.question}
                  </span>
                </div>
                <HiOutlineChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 ${
                    isOpen ? "transform rotate-180 text-slate-900" : ""
                  }`}
                />
              </button>

              {/* Answer Content Body */}
              {isOpen && (
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-1.5 border-t border-slate-200/60 pt-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-tight mb-5">
                    {faq.answer}
                  </p>

                  {/* Explanation */}
                  {faq.explanation && (
                    <p className="text-[11px] text-slate-600 italic bg-white py-1.5 px-3.5 rounded-lg border-l-4 border-l-slate-700 border border-slate-300/50">
                      💡 <span className="font-medium text-slate-800 mr-2">Why ? </span>{" "}
                      {faq.explanation}
                    </p>
                  )}

                  {/* Pro Tip */}
                  {faq.proTip && (
                    <div className="text-[11px] bg-slate-50 text-slate-700 py-2.5 px-3.5 rounded-lg border border-slate-200 font-baloo">
                      🔥 <span className="font-bold text-slate-900">Pro Tip : </span>{" "}
                      {faq.proTip}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}