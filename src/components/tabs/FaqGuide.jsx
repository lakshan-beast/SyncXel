import { useState } from "react";
import React from "react";
import { faqData } from "../../data/docs/faqData";
import { HiOutlineChevronDown, HiOutlineQuestionMarkCircle } from "react-icons/hi";

export default function FaqGuide() {
  const [openIndex, setOpenIndex] = useState(0); // Default first item open

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-8">
      {/* Main Header Card */}
      <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-3">
        <h2 className="text-xl font-bold text-white">{faqData.title}</h2>
        <p className="text-xs text-slate-400">{faqData.subtitle}</p>
        <p className="text-xs text-slate-400 italic">{faqData.description}</p>
      </div>

      {/* FAQs Accordion Loop */}
      <div className="space-y-4">
        {faqData.items.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.id || idx}
              className="bg-slate-900/60 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
              {/* Question Header */}
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                <div className="flex items-center space-x-3">
                  <HiOutlineQuestionMarkCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="text-sm font-bold text-white">{faq.question}</span>
                </div>
                <HiOutlineChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    isOpen ? "transform rotate-180 text-cyan-400" : ""
                  }`}
                />
              </button>

              {/* Answer Content Body */}
              {isOpen && (
                <div className="px-6 pb-6 pt-0 space-y-4 border-t border-white/5 pt-4">
                  <p className="text-xs text-slate-300 leading-relaxed">{faq.answer}</p>

                  {/* Explanation */}
                  {faq.explanation && (
                    <p className="text-[11px] text-slate-400 italic bg-slate-950/30 p-2.5 rounded-lg border-l-2 border-cyan-500/50">
                      💡 <span className="font-medium text-slate-300">Why?</span> {faq.explanation}
                    </p>
                  )}

                  {/* Pro Tip */}
                  {faq.proTip && (
                    <div className="text-[11px] text-amber-300/90 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                      🔥 <span className="font-bold">Pro Tip:</span> {faq.proTip}
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