
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineCodeBracket,
  HiOutlinePaintBrush,
  HiOutlineCpuChip,
  HiOutlineRocketLaunch,
  HiOutlineCheckCircle,
  HiOutlineChatBubbleLeftRight,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";

export default function Services() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("<$500");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    const apiKey = import.meta.env.W3FORMS_API_KEY;

    formData.append("access_key", apiKey);
    formData.append(
      "subject",
      `💼 New Project Inquiry from ${formData.get("name")}`,
    );
    formData.append("from_name", "SyncXel webs Inquiry Form");
    formData.append("Estimated Budget", selectedBudget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const services = [
    {
      icon: <HiOutlineCodeBracket className="w-7 h-7 text-cyan-400" />,
      title: "Custom Web Applications",
      description:
        "High-performance, scalable web apps built with React, Next.js, and Tailwind CSS tailored to your business needs.",
      tags: ["React", "Next.js", "Tailwind CSS", "REST APIs"],
    },
    {
      icon: <HiOutlinePaintBrush className="w-7 h-7 text-cyan-400" />,
      title: "Figma to Responsive Code",
      description:
        "Pixel-perfect conversion of your Figma or Adobe XD designs into clean, modular, and responsive production code.",
      tags: ["Figma", "Pixel-Perfect", "Clean Code", "Responsive UI"],
    },
    {
      icon: <HiOutlineCpuChip className="w-7 h-7 text-cyan-400" />,
      title: "Firebase & API Integrations",
      description:
        "Client-side application engineering integrated with Firebase (Authentication & Database), EmailJS, and external REST APIs.",
      tags: ["Firebase Auth", "Firestore DB", "EmailJS", "API Integration"],
    },
    {
      icon: <HiOutlineRocketLaunch className="w-7 h-7 text-cyan-400" />,
      title: "Landing Pages & Re-design",
      description:
        "Modern, high-converting landing pages optimized for maximum performance, SEO, and interactive user experiences.",
      tags: ["High Conversion", "SEO Ready", "Fast Load", "Micro-interactions"],
    },
  ];

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
      transition: { staggerChildren: 0.15 },
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
      id="hire"
      className="relative py-24 px-4 sm:px-8 overflow-hidden scroll-mt-20">
      {/* Background Accent Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <HiOutlineChatBubbleLeftRight className="w-4 h-4" />
            <span>Client Services & Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Turn Your Web Ideas Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
              Production Reality
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-4 md:leading-tight max-w-2xl mx-auto">
            Need a custom web application or modern landing page? I partner with
            founders, startups, and businesses to build high-converting web
            solutions.
          </p>
        </motion.div>

        {/* 1. Services Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {services.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative px-6 py-8 rounded-4xl bg-slate-900/90 border-3 md:border-2 border-white/5 hover:border-cyan-500/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 backdrop-blur-md flex flex-col justify-between w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-8px)]">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-tight">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 pt-3">
                {item.tags.map((tag, tIndx) => (
                  <span
                    key={tIndx}
                    className="px-3 py-1 rounded-3xl bg-slate-950 border border-white/20 text-[11px] font-medium text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 2. The 4-Step Process */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-exo font-semibold text-white tracking-tight">
              How We Work Together
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto leading-4 md:leading-relaxed">
              A transparent 4-step workflow from initial design to final
              deployment.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative py-6 px-10 rounded-3xl bg-slate-800/50 border-3 md:border-2 border-white/5 hover:border-cyan-500/10 transition-all space-y-3 backdrop-blur-sm hover:shadow-xl ">
                <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                  {step.number}
                </span>
                <h4 className="text-lg font-bold text-white border-t border-white/10 pt-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-tight">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 3. Inquiry Form Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-linear-to-b from-slate-900 to-slate-950 border-3 md:border-2 border-white/10 p-6 sm:p-10 shadow-2xl max-w-2xl w-full mx-auto backdrop-blur-xl">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Have A Project In Mind?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Fill out the form below to share your requirements. I usually
                respond within 24 hours.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-3">
                <HiOutlineCheckCircle className="w-12 h-12 text-cyan-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">
                  Message Received!
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                  Thank you for reaching out. I will review your project details
                  and get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600"
                    />
                  </div>
                </div>

                {/* Budget Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Estimated Budget
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      "<$500",
                      "$500 - $1,000",
                      "$1,000 - $3,000",
                      "$3,000+",
                    ].map((budget) => (
                      <motion.button
                        key={budget}
                        type="button"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setSelectedBudget(budget)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                          selectedBudget === budget
                            ? "bg-cyan-500/10 border-cyan-400 text-cyan-400"
                            : "bg-slate-950 border-white/10 text-slate-400 hover:text-white"
                        }`}>
                        {budget}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Project Overview
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your project goals, required pages/features, and timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none placeholder:text-slate-600"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-extrabold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50">
                  <HiOutlinePaperAirplane className="w-4 h-4" />
                  <span>
                    {loading ? "Sending Message..." : "Send Project Inquiry"}
                  </span>
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
