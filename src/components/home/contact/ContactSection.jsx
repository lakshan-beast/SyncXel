import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

import ContactHeader from "./ContactHeader";

export default function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact-section"
      className="relative isolate overflow-hidden bg-white px-5 py-24 dark:bg-slate-950/90 sm:px-8 lg:px-12 lg:py-32">
      {/* Background atmosphere
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-blue-400/[0.07] blur-[140px] dark:bg-blue-400/[0.09]" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-slate-400/[0.08] blur-[130px] dark:bg-slate-300/[0.04]" />

        <div
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.7]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.2) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div> */}

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-400/50 blur-[120px] dark:bg-blue-500/20" />

        <div className="absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-indigo-400/60 blur-[120px] dark:bg-indigo-500/20" />

        <div className="absolute inset-0 opacity-[0.095] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px] dark:opacity-[0.125]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section top label */}
        {/* <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-between gap-4">
          <span className="font-mono text-xs tracking-wide text-slate-500 dark:text-slate-400">
            // project_inquiry_and_contact
          </span>

          <span className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open for inquiries
          </span>
        </motion.div> */}

        <ContactHeader />

        {/* Main content */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
