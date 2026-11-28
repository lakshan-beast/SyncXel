import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HiArrowRight, HiOutlineMail, HiOutlineChatAlt2 } from "react-icons/hi";

export default function ServicesCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services-contact"
      className="px-5 sm:px-8 lg:px-12 pb-16 py-4 bg-slate-50 dark:bg-slate-900">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
        <div className="absolute -right-20 -top-32 w-96 h-96 rounded-full bg-emerald-600/20 blur-[100px] pointer-events-none" />

        <div className="absolute -left-20 -bottom-40 w-80 h-80 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl">
          <span className="text-[11px] font-bold tracking-[0.18em] text-emerald-300 uppercase">
            Let's Build Something
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-300 mt-4">
            Have an idea?
            <span className="block text-emerald-400 mt-1">
              Let's bring it to life.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-tight mt-4">
            Tell us about your project, your goals and what you have in mind.
            Let's explore how SyncXel can help you move forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a
              href="mailto:syncxelofficial@gmail.com?subject=New%20Project%20Inquiry"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-xl transition-all">
              <HiOutlineMail className="w-5 h-5" />
              Start a Project
              <HiArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://t.me/lakshan_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold rounded-xl transition-all">
              <HiOutlineChatAlt2 className="w-5 h-5" />
              Let's Talk
            </a>
          </div>

          <p className="text-[11px] text-slate-500 mt-6">
            Have a question before starting? We're happy to discuss your idea.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
