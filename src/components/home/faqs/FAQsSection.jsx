// import React, { useState } from "react";
// import { motion, useReducedMotion } from "framer-motion";

// import FAQHeader from "./FAQsHeader";
// import FAQCategoryTabs from "./FAQsCategoryTabs";
// import FAQAccordion from "./FAQsAccordion";
// import FAQCTA from "./FAQsCTA";

// import { faqCategories, faqData } from "../../../data/faqsData";

// export default function FAQSection() {
//   const [activeCategory, setActiveCategory] = useState("general");
//   const reduceMotion = useReducedMotion();

//   const currentQuestions = faqData[activeCategory] || [];

//   return (
//     <section
//       id="faq"
//       className="relative overflow-hidden bg-white px-5 py-24 dark:bg-slate-950/90 sm:px-8 lg:px-12 lg:py-32">
//       {/* Background decoration */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-500/[0.045] blur-[110px]"
//       />

//       <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
//         {/* Left content */}
//         <div className="lg:col-span-5">
//           <FAQHeader />
//           <FAQCTA />
//         </div>

//         {/* Right FAQ content */}
//         <motion.div
//           initial={reduceMotion ? false : { opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.15 }}
//           transition={{ duration: 0.6 }}
//           className="lg:col-span-7">
//           <FAQCategoryTabs
//             categories={faqCategories}
//             activeCategory={activeCategory}
//             onCategoryChange={setActiveCategory}
//           />

//           <div className="mb-5 flex items-center justify-between">
//             <p className="text-xs font-medium uppercase tracking-[0.12em] text-black/40 dark:text-white/40">
//               {
//                 faqCategories.find((category) => category.id === activeCategory)
//                   ?.label
//               }
//             </p>

//             <span className="font-mono text-xs text-black/35 dark:text-white/35">
//               {String(currentQuestions.length).padStart(2, "0")} Questions
//             </span>
//           </div>

//           <FAQAccordion category={activeCategory} items={currentQuestions} />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import { motion, useReducedMotion } from "framer-motion";

// import FAQHeader from "./FAQsHeader";
// import FAQCategoryTabs from "./FAQsCategoryTabs";
// import FAQAccordion from "./FAQsAccordion";
// import FAQCTA from "./FAQsCTA";

// import { faqCategories, faqData } from "../../../data/faqsData";

// export default function FAQSection() {
//   const [activeCategory, setActiveCategory] = useState("general");
//   const reduceMotion = useReducedMotion();

//   const currentQuestions = faqData[activeCategory] || [];

//   const activeCategoryLabel = faqCategories.find(
//     (category) => category.id === activeCategory,
//   )?.label;

//   return (
//     <section
//       id="faq"
//       className="relative isolate overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32 dark:bg-slate-950">
//       {/* Background atmosphere */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-blue-400/50 blur-[120px] dark:bg-blue-500/20" />

//         <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-indigo-400/50 blur-[120px] dark:bg-indigo-500/30" />

//         <div className="absolute inset-0 opacity-[0.65] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]` can be written as `bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] dark:opacity-[0.95]" />
//       </div>
//       {/* <div className="absolute inset-0 opacity-[0.065] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px] dark:opacity-[0.095]" /> */}

//       {/* Background atmosphere */}
//       {/* <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-400/50 blur-[120px] dark:bg-blue-500/20" />

//         <div className="absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-indigo-400/60 blur-[120px] dark:bg-indigo-500/20" />

//         <div className="absolute inset-0 opacity-[0.095] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px] dark:opacity-[0.125]" />
//       </div> */}

//       <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
//         {/* Left content */}
//         <div className="lg:col-span-5">
//           <FAQHeader />
//           <FAQCTA />
//         </div>

//         {/* Right FAQ content */}
//         <motion.div
//           initial={reduceMotion ? false : { opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.15 }}
//           transition={{ duration: reduceMotion ? 0 : 0.6 }}
//           className="min-w-0 lg:col-span-7">
//           <FAQCategoryTabs
//             categories={faqCategories}
//             activeCategory={activeCategory}
//             onCategoryChange={setActiveCategory}
//           />

//           <div className="mb-5 mt-7 flex items-center justify-between gap-4">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
//               {activeCategoryLabel}
//             </p>

//             <span className="shrink-0 text-xs text-slate-400 dark:text-slate-500">
//               {" "}
//               ({String(currentQuestions.length).padStart(2, "0")}) Questions
//             </span>
//           </div>

//           <FAQAccordion category={activeCategory} items={currentQuestions} />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import FAQHeader from "./FAQsHeader";
import FAQCategoryTabs from "./FAQsCategoryTabs";
import FAQAccordion from "./FAQsAccordion";
import FAQCTA from "./FAQsCTA";

import { faqCategories, faqData } from "../../../data/faqsData";

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("general");
  const reduceMotion = useReducedMotion();

  const currentQuestions = faqData[activeCategory] || [];

  const activeCategoryLabel = faqCategories.find(
    (category) => category.id === activeCategory,
  )?.label;

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-[#080f1e] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      {/* Background atmosphere */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-emerald-400/[0.06] blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-teal-400/[0.05] blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] [background-size:48px_48px]" />
      </div> */}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Left content */}
        <div className="lg:col-span-5">
          <FAQHeader />
          <FAQCTA />
        </div>

        {/* Right FAQ content */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="min-w-0 lg:col-span-7">
          <FAQCategoryTabs
            categories={faqCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="mb-5 mt-7 flex items-center justify-between gap-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
              {activeCategoryLabel}
            </p>

            <span className="shrink-0 font-mono text-[10px] text-slate-500">
              ({String(currentQuestions.length).padStart(2, "0")}) QUESTIONS
            </span>
          </div>

          <FAQAccordion category={activeCategory} items={currentQuestions} />
        </motion.div>
      </div>
    </section>
  );
}
