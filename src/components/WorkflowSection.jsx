import React from "react";
import { motion } from "framer-motion";
import { HiBookmark } from "react-icons/hi2";

export default function WorkflowSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      desc: "We discuss your project requirements, target audience, and key features in detail.",
    },
    {
      number: "02",
      title: "UI/UX & Architecture",
      desc: "We plan the user flow, UI layouts, and frontend component architecture for scalability.",
    },
    {
      number: "03",
      title: "Frontend Engineering",
      desc: "We write clean, modular React/Next.js code with regular progress updates and interactive demos.",
    },
    {
      number: "04",
      title: "Testing & Deployment",
      desc: "Rigorous responsiveness testing, Lighthouse performance tuning, and seamless Vercel deployment.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="workflow"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 text-slate-900">
      <div className="relative z-10 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left space-y-3">
          <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
            <span className="font-mono text-xs text-slate-400 block">
              // workflow_execution_steps
            </span>
            <div className="inline-flex items-center w-fit space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono shadow-xs">
              <HiBookmark className="w-3.5 h-3.5 text-slate-600" />
              <span>workflow_module.config</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-left sm:text-center pt-1 sm:pt-3">
            How We <span className="text-slate-900">Work Together</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-tight max-w-3xl mx-auto font-baloo text-left sm:text-center">
            A transparent 4-step workflow from initial design to final
            deployment ensuring maximum quality and precision.
          </p>
        </motion.div>

        {/* Workflow Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white px-8 sm:px-7 py-6 rounded-2xl border border-slate-200/50 hover:border-slate-300/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold bg-slate-900 text-white px-2.5 py-1 rounded-xl shadow-xs">
                    {step.number}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">
                    // step_{step.number}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 leading-tight font-baloo">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}