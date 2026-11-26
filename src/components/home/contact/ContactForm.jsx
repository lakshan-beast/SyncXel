
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlinePaperAirplane,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";

import FormField from "./FormField";
import { projectTypes } from "../../../data/contactData";

const initialForm = {
  name: "",
  email: "",
  projectType: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");
  const reduceMotion = useReducedMotion();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const accessKey = import.meta.env.VITE_W3FORMS_API_KEY;

    if (!accessKey) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const payload = new FormData();

      payload.append("access_key", accessKey);
      payload.append("name", formData.name.trim());
      payload.append("email", formData.email.trim());
      payload.append("subject", `New SyncXel Inquiry - ${formData.projectType}`);
      payload.append("project_type", formData.projectType);
      payload.append("message", formData.message.trim());
      payload.append("from_name", "SyncXel Website");

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: payload,
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed.");
      }

      setStatus("success");
      setFormData(initialForm);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.06)] dark:border-white/[0.09] dark:bg-slate-950/90 dark:shadow-[0_25px_90px_rgba(0,0,0,0.25)] sm:p-8 lg:p-9"
    >
      <div className="mb-8">
        <span className="text-xs text-blue-600 dark:text-blue-400">
          contact_module.config
        </span>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
          Tell us about your project.
        </h3>

        <p className="mt-0 text-sm leading-tight text-slate-500 dark:text-slate-400">
          Share a few details and we'll get back to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <FormField
            label="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            autoComplete="name"
            required
          />

          <FormField
            label="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>

        <FormField
          label="What are you looking for?"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          placeholder="Select a project type"
          options={projectTypes}
          required
        />

        <div>
          <label
            htmlFor="message"
            className="text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Project details
            <span className="ml-1 text-blue-500">*</span>
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            minLength={10}
            placeholder="Tell us about your idea, goals, or requirements..."
            className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/[0.1] dark:bg-[#111a27] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400"
          />
        </div>

        {status === "success" && (
          <div
            role="status"
            className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.07] p-4 text-sm text-emerald-700 dark:text-emerald-400"
          >
            <HiOutlineCheckCircle className="mt-0.5 shrink-0 text-lg" />
            <p className="leading-tight">
              Your inquiry has been submitted successfully.
              Thank you for reaching out!
            </p>
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/[0.07] p-4 text-sm text-red-700 dark:text-red-400"
          >
            <HiOutlineExclamationCircle className="mt-0.5 shrink-0 text-lg" />
            <p className="leading-tight">
              We couldn't submit your inquiry. Please check your
              connection and try again. If the issue continues,
              contact us by email.
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="group flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white"
        >
          {loading ? "Sending inquiry..." : "Send project inquiry"}

          {!loading && (
            <HiOutlinePaperAirplane className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          )}
        </button>

        <p className="text-center text-xs leading-tight text-slate-400 dark:text-slate-500">
          Your information will only be used to respond to your inquiry.
        </p>
      </form>
    </motion.div>
  );
}
