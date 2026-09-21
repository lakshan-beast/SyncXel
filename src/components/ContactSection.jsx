import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineCheckCircle,
  HiOutlinePaperAirplane,
  HiBookmark,
} from "react-icons/hi2";
import { FaLinkedin, FaPen, FaExternalLinkAlt } from "react-icons/fa";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("< $500");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    const apiKey = import.meta.env.VITE_W3FORMS_API_KEY;

    formData.append("access_key", apiKey);
    formData.append(
      "subject",
      `💼 New Project Inquiry from ${formData.get("name")}`
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

  return (
    <section
      id="contact"
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
              // project_inquiry_and_social_proof
            </span>
            <div className="inline-flex items-center w-fit space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono shadow-xs">
              <HiBookmark className="w-3.5 h-3.5 text-slate-600" />
              <span>contact_module.config</span>
            </div>
          </div>

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 font-baloo">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Freelance Projects</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-left sm:text-center pt-1 sm:pt-3">
            Let's Build Something <span className="text-slate-900">Awesome Together</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-tight max-w-3xl mx-auto font-baloo text-left sm:text-center">
            Have a project in mind, a React component to build, or need help
            scaling your web app? Fill out the form or reach out directly.
          </p>
        </motion.div>

        {/* Grid Layout for Left info & Right form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* --- LEFT COLUMN: Testimonial, LinkedIn Actions --- */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Client Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-white border border-slate-200/50 shadow-sm space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 italic font-baloo leading-relaxed">
                "Working with him was an absolute breeze. Delivered top-notch,
                clean React code right on schedule. Highly recommended!"
              </p>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-900 font-baloo pt-2 border-t border-slate-100">
                <span>— Senior Product Manager</span>
                <span className="text-[10px] text-slate-400 font-mono">
                  Verified Peer
                </span>
              </div>
            </motion.div>

            {/* LinkedIn Actions Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-white border border-slate-200/50 shadow-sm space-y-4">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-700 font-baloo">
                <FaLinkedin className="w-4 h-4 text-blue-600" />
                <span>Connect & Recommendations on LinkedIn</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="https://www.linkedin.com/in/lakshan-sandeepa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 text-white text-xs font-semibold font-baloo hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 text-center shadow-xs">
                  <FaPen className="w-3 h-3 text-slate-300" />
                  <span>Write Recommendation</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/lakshan-sandeepa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-baloo font-semibold hover:bg-slate-200 transition-all flex items-center justify-center space-x-2 text-center">
                  <FaExternalLinkAlt className="w-3 h-3 text-slate-600" />
                  <span>View Recommendations</span>
                </a>
              </div>
            </motion.div>

            <div className="text-xs text-slate-500 font-baloo flex items-center space-x-2 px-1">
              <span>Average response time:</span>
              <span className="font-bold text-slate-800">Under 4 hours</span>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Inquiry Form Box --- */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl bg-white border border-slate-200/50 p-6 sm:p-8 shadow-md w-full">
              <div className="space-y-4">
                <div className="text-left space-y-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                    Send a Project Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-baloo">
                    Share your requirements below to get started.
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-3">
                    <HiOutlineCheckCircle className="w-12 h-12 text-slate-900 mx-auto" />
                    <h4 className="text-xl font-bold text-slate-950">
                      Message Received!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-baloo leading-tight">
                      Thank you for reaching out. I will review your project
                      details and get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1 text-left">
                        <label className="text-xs font-semibold text-slate-600 font-baloo">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="John Doe"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-400 font-baloo"
                        />
                      </div>
                      <div className="space-y-1 text-left">
                        <label className="text-xs font-semibold text-slate-600 font-baloo">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="john@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-400 font-baloo"
                        />
                      </div>
                    </div>

                    {/* Budget Selector */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-semibold text-slate-600 font-baloo">
                        Estimated Budget
                      </label>
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          "< $500",
                          "$500 - $1,000",
                          "$1,000 - $3,000",
                          "$3,000+",
                        ].map((budget) => (
                          <motion.button
                            key={budget}
                            type="button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedBudget(budget)}
                            className={`py-2 px-2 rounded-xl text-[11px] font-semibold border transition-all cursor-pointer text-center ${
                              selectedBudget === budget
                                ? "bg-slate-900 border-slate-900 text-white shadow-xs"
                                : "bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-950"
                            }`}>
                            {budget}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-1 text-left">
                      <label className="text-xs font-semibold text-slate-600 font-baloo">
                        Project Overview
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        required
                        placeholder="Tell me about your project goals, required pages/features..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 text-xs sm:text-sm focus:outline-none focus:border-slate-900 transition-colors resize-none placeholder:text-slate-400 font-baloo"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm font-baloo hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-80 shadow-xs">
                      <HiOutlinePaperAirplane className="w-4 h-4 text-slate-300" />
                      <span>
                        {loading
                          ? "Sending Message..."
                          : "Send Project Inquiry"}
                      </span>
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}