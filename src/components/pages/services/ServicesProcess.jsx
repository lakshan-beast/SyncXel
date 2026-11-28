
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineChatAlt2,
  HiOutlineClipboardList,
  HiOutlineColorSwatch,
  HiOutlineCode,
  HiOutlineCheckCircle,
} from "react-icons/hi";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We discuss your idea, goals, target audience and the requirements of your project.",
    icon: HiOutlineChatAlt2,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We organize the project structure, identify the required features and define the development direction.",
    icon: HiOutlineClipboardList,
  },
  {
    number: "03",
    title: "Design",
    description:
      "We shape the visual direction, layouts and interface elements around your brand and user needs.",
    icon: HiOutlineColorSwatch,
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We build the frontend, implement interactions and make the experience responsive across devices.",
    icon: HiOutlineCode,
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "We review the completed work, make agreed adjustments and prepare the project for handover.",
    icon: HiOutlineCheckCircle,
  },
];

export default function ServicesProcess() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-5 sm:px-8 lg:px-12 py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-[11px] font-bold tracking-[0.18em] text-blue-300 uppercase">
            How We Work
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-300 mt-4">
            A clear process.
            <span className="text-blue-700 dark:text-blue-800 block"> A better outcome.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-tight mt-4">
            Every successful project starts with a clear understanding.
            Our process keeps the work organized from the first
            conversation to the final delivery.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-1 bg-slate-300 dark:bg-slate-700" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={
                    shouldReduceMotion ? false : { opacity: 0, y: 20 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                  }}
                  className="relative group bg-white dark:bg-slate-800 border-2 border-slate-300/30 dark:border-slate-700 rounded-md p-6 sm:p-8 flex flex-col hover:border-blue-200/30 hover:shadow-sm hover:shadow-slate-200/50 transition-all duration-300"
                >
                  <div className="relative z-10 w-14 h-14 rounded-2xl  shadow-sm flex items-center justify-center bg-blue-900 text-blue-300 ">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] uppercase tracking-wider font-bold text-blue-600 mt-3">
                    STEP {step.number}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-200 mt-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-tight mt-3">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
