import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineColorSwatch,
  HiOutlineCode,
  HiOutlineCube,
  HiCheck,
} from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";

const services = [
  {
    number: "01",
    title: "UI/UX & Interface Design",
    description:
      "Creating clear, consistent and user-friendly interfaces that bring structure and visual identity to your digital product.",
    icon: HiOutlineColorSwatch,
    features: [
      "Website layout and structure planning",
      "Visual design and styling",
      "Typography and color consistency",
      "Responsive interface planning",
      "User-friendly navigation",
    ],
    tag: "Design & Experience",
  },
  {
    number: "02",
    title: "Website Development",
    description:
      "Building modern, responsive websites with clean frontend implementation, smooth interactions and attention to detail.",
    icon: HiOutlineCode,
    features: [
      "Business and company websites",
      "Portfolio and personal websites",
      "Landing pages",
      "Responsive frontend development",
      "Interactive components and animations",
    ],
    tag: "Frontend Development",
  },
  {
    number: "03",
    title: "Custom Web Solutions",
    description:
      "Developing tailored web interfaces and experiences around specific business needs, workflows and project requirements.",
    icon: HiOutlineCube,
    features: [
      "Admin dashboard interfaces",
      "Booking and reservation interfaces",
      "Custom web application frontends",
      "Data presentation and UI components",
      "Third-party service integrations",
    ],
    tag: "Custom Projects",
  },
];

export default function CoreServices() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="core-services"
      className="px-5 sm:px-8 lg:px-12 py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-[11px] font-bold tracking-[0.18em] text-blue-300 uppercase">
            Our Core Services
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-300 mt-4">
            What we do,
            <span className="text-blue-700 dark:text-blue-800">
              {" "}
              How we help.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-tight mt-4">
            Every project has different needs. Explore our services to find the
            right approach for your next digital experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                }}
                className="group bg-white/80 dark:bg-slate-400 border-2 border-slate-300/40 dark:border-slate-700 rounded-tr-3xl rounded-bl-3xl p-6 sm:p-8 flex flex-col hover:border-blue-200 hover:shadow-md hover:shadow-slate-200/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-900 text-blue-300 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-mono text-slate-300">
                    / {service.number}
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-wider font-bold text-blue-600 mt-3">
                  {service.tag}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-700 leading-tight px-2 mt-3 min-h-8">
                  {service.description}
                </p>

                <div className="h-px bg-none dark:bg-slate-100/50 my-3" />

                <p className="text-xs font-bold text-slate-800 mb-4">
                  What's included
                </p>

                <ul className="space-y-1.5 flex-1 px-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-xs text-slate-700">
                      <HiCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#services-contact"
                  className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-100/50 flex items-center justify-between text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                  Discuss a Project
                  <HiArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
