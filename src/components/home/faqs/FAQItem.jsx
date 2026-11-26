import React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HiOutlinePlus } from "react-icons/hi2";

export default function FAQItem({ item, isOpen, onToggle }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="border-b border-black/10 dark:border-white/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-question-${item.id}`}
        className="group flex w-full items-center justify-between gap-5 py-6 text-left">
        <span
          className={`text-sm font-semibold leading-6 transition-colors duration-300 sm:text-base ${
            isOpen
              ? "text-blue-600 dark:text-blue-400"
              : "text-[#202020] group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
          }`}>
          {item.question}
        </span>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "rotate-45 border-blue-500 bg-blue-500 text-white"
              : "border-black/5 text-black/50 group-hover:border-blue-500 group-hover:text-blue-500 dark:border-white/10 dark:text-white/50"
          }`}>
          <HiOutlinePlus className="text-base" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            role="region"
            aria-labelledby={`faq-question-${item.id}`}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
            className="overflow-hidden">
            <p className="max-w-2xl pb-6 pr-10 text-sm leading-tight text-black/55 dark:text-white/45">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
