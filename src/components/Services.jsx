// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   HiOutlineCodeBracket,
//   HiOutlinePaintBrush,
//   HiOutlineRocketLaunch,
//   HiOutlineCheckCircle,
//   HiBookmark,
//   HiOutlinePaperAirplane,
// } from "react-icons/hi2";
// import { CiLinkedin } from "react-icons/ci";
// import {
//   FaLinkedin,
//   FaPen,
//   FaExternalLinkAlt,
// } from "react-icons/fa";

// export default function Services() {
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [selectedBudget, setSelectedBudget] = useState("<$500");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const form = e.target;
//     const formData = new FormData(form);

//     const apiKey = import.meta.env.VITE_W3FORMS_API_KEY;

//     formData.append("access_key", apiKey);
//     formData.append(
//       "subject",
//       `💼 New Project Inquiry from ${formData.get("name")}`,
//     );
//     formData.append("from_name", "SyncXel webs Inquiry Form");
//     formData.append("Estimated Budget", selectedBudget);

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (data.success) {
//         setSubmitted(true);
//       } else {
//         alert("Something went wrong. Please try again!");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Network error. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const services = [
//     {
//       icon: HiOutlineCodeBracket, // Component reference (Fixed)
//       title: "Custom Web Applications",
//       description:
//         "High-performance, scalable web apps built with React, Next.js, and Tailwind CSS tailored to your business needs.",
//       tags: ["React", "Next.js", "Tailwind CSS", "REST APIs"],
//     },
//     {
//       icon: HiOutlinePaintBrush, // Component reference (Fixed)
//       title: "Figma to Responsive Code",
//       description:
//         "Pixel-perfect conversion of your Figma or Adobe XD designs into clean, modular, and responsive production code.",
//       tags: ["Figma", "Pixel-Perfect", "Clean Code", "Responsive UI"],
//     },
//     // {
//     //   icon: HiOutlineCpuChip, // Component reference (Fixed)
//     //   title: "Firebase & API Integrations",
//     //   description:
//     //     "Client-side application engineering integrated with Firebase (Authentication & Database), EmailJS, and external REST APIs.",
//     //   tags: ["Firebase Auth", "Firestore DB", "EmailJS", "API Integration"],
//     // },
//     {
//       icon: HiOutlineRocketLaunch, // Component reference (Fixed)
//       title: "Landing Pages & Re-design",
//       description:
//         "Modern, high-converting landing pages optimized for maximum performance, SEO, and interactive user experiences.",
//       tags: ["High Conversion", "SEO Ready", "Fast Load", "Micro-interactions"],
//     },
//   ];

//   const steps = [
//     {
//       number: "01",
//       title: "Discovery & Strategy",
//       desc: "We discuss your project requirements, target audience, and key features in detail.",
//     },
//     {
//       number: "02",
//       title: "UI/UX & Architecture",
//       desc: "We plan the user flow, UI layouts, and frontend component architecture for scalability.",
//     },
//     {
//       number: "03",
//       title: "Frontend Engineering",
//       desc: "We write clean, modular React/Next.js code with regular progress updates and interactive demos.",
//     },
//     {
//       number: "04",
//       title: "Testing & Deployment",
//       desc: "Rigorous responsiveness testing, Lighthouse performance tuning, and seamless Vercel deployment.",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       id="hire"
//       className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-10 scroll-mt-0 text-slate-900">
//       <div className="relative z-10 p-2 sm:p-8 max-w-7xl mx-auto space-y-16">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-left space-y-3">
//           <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
//             <span className="font-mono text-xs text-slate-500/50 mb-0 block">
//               // client_services_and_engineering
//             </span>

//             <div className="inline-flex items-center w-fit space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono shadow-xs">
//               <HiBookmark className="w-3.5 h-3.5 text-slate-600" />
//               <span>hire_services.config</span>
//             </div>
//           </div>

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
//             Turn Your Web Ideas Into{" "}
//             <span className="text-slate-900">Production Reality</span>
//           </h2>

//           <p className="text-sm sm:text-base text-slate-500 leading-tight max-w-6xl font-baloo">
//             Need a custom web application or modern landing page? I partner with
//             founders, startups, and businesses to build high-converting web
//             solutions.
//           </p>
//         </motion.div>

//         {/* 1. Services Cards Grid */}
//         <div className="space-y-2">
//           <span className="font-mono text-xs text-slate-500/50 mb-2 block">
//             // core_services_modules
//           </span>
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 sm:grid-cols-3 gap-2">
//             {services.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   variants={itemVariants}
//                   whileHover={{ y: -4, scale: 1.01 }}
//                   whileTap={{ scale: 0.98 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                   className="group relative bg-white py-5 px-9 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between">
//                   <div>
//                     <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center mb-4 border border-slate-300 group-hover:bg-slate-800 group-hover:text-white transition-all duration-300">
//                       <Icon className="w-5 h-5" />
//                     </div>

//                     <span className="font-mono text-[10px] text-slate-400 block -mb-1">
//                       // service_0{index + 1}
//                     </span>

//                     <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2 tracking-tight">
//                       {item.title}
//                     </h3>

//                     <p className="text-xs sm:text-sm text-slate-600 leading-tight font-baloo">
//                       {item.description}
//                     </p>
//                   </div>

//                   <div className="flex flex-wrap gap-1.5 pt-4">
//                     {item.tags.map((tag, tIndx) => (
//                       <span
//                         key={tIndx}
//                         className="px-3 py-0.5 rounded-2xl bg-slate-100 border border-slate-200 text-[10px] font-baloo text-slate-700">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>

//         {/* 2. The 4-Step Process */}
//         <div className="space-y-4">
//           <span className="font-mono text-xs text-slate-500/50 mb-0 block">
//             // workflow_execution_steps
//           </span>
//           <div className="text-left space-y-0 mb-6">
//             <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
//               How We Work Together
//             </h3>
//             <p className="text-xs sm:text-sm text-slate-500 font-baloo leading-tight">
//               A transparent 4-step workflow from initial design to final
//               deployment.
//             </p>
//           </div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
//             {steps.map((step, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={itemVariants}
//                 whileHover={{ y: -4 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 className="relative px-9 py-5 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-all space-y-3 shadow-xs hover:shadow-md flex flex-col justify-between">
//                 <div>
//                   <span className="text-4xl font-extrabold bg-slate-800/90 text-slate-50 mb-2 px-1.5 py-0.5 rounded-md ">
//                     {step.number}
//                   </span>
//                   <span className="font-mono text-xs text-slate-400 block mb-0 mt-3">
//                     // step_{step.number}
//                   </span>
//                   <h4 className="text-base font-bold text-slate-950 mb-1">
//                     {step.title}
//                   </h4>
//                   <p className="text-xs text-slate-500 leading-tight font-baloo px-2 py-0 pt-3">
//                     {step.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* 3. Inquiry Section (2-Column Layout with React Icons, LinkedIn Actions & Direct Chat) */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-1 lg:px-1 py-10">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//             {/* --- LEFT COLUMN: Info, Testimonial, LinkedIn & Direct Chat --- */}
//             <div className="lg:col-span-7 space-y-5 text-left">
//               <span className="font-mono text-xs text-slate-500/60 mb-1 block">
//                 // project_inquiry_and_social_proof
//               </span>

//               <div className="space-y-5">
//                 {/* Availability Badge */}
//                 <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 font-baloo">
//                   <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
//                   <span>Available for Freelance Projects</span>
//                 </div>

//                 <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-baloo">
//                   Let's Build Something Awesome Together.
//                 </h3>

//                 <p className="text-sm text-slate-500 font-baloo leading-tight">
//                   Have a project in mind, a React component to build, or need
//                   help scaling your web app? Fill out the form or reach out
//                   directly. I usually respond within 24 hours.
//                 </p>
//               </div>

//               {/* Client Testimonial Card */}
//               <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 shadow-xs">
//                 <p className="text-xs text-slate-700 italic font-baloo">
//                   "Working with him was an absolute breeze. Delivered top-notch,
//                   clean React code right on schedule. Highly recommended!"
//                 </p>
//                 <div className="flex items-center justify-between text-xs font-semibold text-slate-900 font-baloo">
//                   <span>— Senior Product Manager</span>
//                   <span className="text-[10px] text-slate-500 font-mono">
//                     Verified Peer
//                   </span>
//                 </div>
//               </div>

//               {/* LinkedIn Separate Action Links Box */}
//               <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
//                 <div className="flex items-center space-x-2 text-xs font-bold text-slate-500 font-baloo">
//                   <FaLinkedin className="w-4 h-4 text-blue-600" />
//                   <span>Connect & Recommendations on LinkedIn</span>
//                 </div>
//                 <div className="flex flex-col lg:flex-row gap-1.5">
//                   {/* 1. Write a Recommendation Link */}
//                   <a
//                     href="https://www.linkedin.com/in/lakshan-sandeepa"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 py-2 px-3 rounded-md bg-slate-900 text-white text-xs font-semibold font-baloo hover:bg-slate-800 transition-all flex items-center justify-center space-x-4 text-center shadow-xs">
//                     <FaPen className="w-3 h-3 text-slate-300" />
//                     <span>Write Recommendation</span>
//                   </a>

//                   {/* 2. View Recommendations Link */}
//                   <a
//                     href="https://www.linkedin.com/in/lakshan-sandeepa"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 py-2 px-3 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-baloo font-semibold hover:bg-slate-200 transition-all flex items-center justify-center space-x-4 text-center">
//                     <FaExternalLinkAlt className="w-3 h-3 text-slate-600" />
//                     <span>View Recommendations</span>
//                   </a>
//                 </div>
//               </div>

//               <div className="text-xs text-slate-500 font-baloo flex items-center space-x-2">
//                 <span>Average response time:</span>
//                 <span className="font-bold text-slate-800">Under 4 hours</span>
//               </div>
//             </div>

//             {/* --- RIGHT COLUMN: Inquiry Form Box --- */}
//             <div className="lg:col-span-5">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="relative rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-md w-full">
//                 <div className="space-y-2">
//                   <div className="text-left space-y-1">
//                     <h4 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
//                       Send a Project Inquiry
//                     </h4>
//                     <p className="text-xs sm:text-sm text-slate-500 font-baloo">
//                       Share your requirements below to get started.
//                     </p>
//                   </div>

//                   {submitted ? (
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
//                       <HiOutlineCheckCircle className="w-12 h-12 text-slate-900 mx-auto" />
//                       <h4 className="text-xl font-bold text-slate-950">
//                         Message Received!
//                       </h4>
//                       <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto font-baloo leading-tight">
//                         Thank you for reaching out. I will review your project
//                         details and get back to you shortly.
//                       </p>
//                     </motion.div>
//                   ) : (
//                     <form onSubmit={handleSubmit} className="space-y-2">
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                         <div className="space-y-1.5 text-left">
//                           <label className="text-xs font-semibold text-slate-600 font-baloo">
//                             Your Name
//                           </label>
//                           <input
//                             type="text"
//                             name="name"
//                             required
//                             placeholder="John Doe"
//                             className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-400 font-baloo"
//                           />
//                         </div>
//                         <div className="space-y-1.5 text-left">
//                           <label className="text-xs font-semibold text-slate-600 font-baloo">
//                             Your Email
//                           </label>
//                           <input
//                             type="email"
//                             name="email"
//                             required
//                             placeholder="john@example.com"
//                             className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-400 font-baloo"
//                           />
//                         </div>
//                       </div>

//                       {/* Budget Selector */}
//                       <div className="space-y-2 text-left">
//                         <label className="text-xs font-semibold text-slate-600 font-baloo">
//                           Estimated Budget
//                         </label>
//                         <div className="grid grid-cols-1 gap-0.5">
//                           {[
//                             "< $500",
//                             "$500 - $1,000",
//                             "$1,000 - $3,000",
//                             "$3,000+",
//                           ].map((budget) => (
//                             <motion.button
//                               key={budget}
//                               type="button"
//                               whileHover={{ scale: 1.02 }}
//                               whileTap={{ scale: 0.98 }}
//                               onClick={() => setSelectedBudget(budget)}
//                               className={`py-2.5 px-3 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
//                                 selectedBudget === budget
//                                   ? "bg-slate-900 border-slate-900 text-white shadow-xs scale-105"
//                                   : "bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-950"
//                               }`}>
//                               {budget}
//                             </motion.button>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Project Details */}
//                       <div className="space-y-1.5 text-left">
//                         <label className="text-xs font-semibold text-slate-600 font-baloo">
//                           Project Overview
//                         </label>
//                         <textarea
//                           name="message"
//                           rows={4}
//                           required
//                           placeholder="Tell me about your project goals, required pages/features, and timeline..."
//                           className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 text-sm focus:outline-none focus:border-slate-900 transition-colors resize-none placeholder:text-slate-400 font-baloo"
//                         />
//                       </div>

//                       <motion.button
//                         type="submit"
//                         disabled={loading}
//                         whileHover={{ scale: 1.01 }}
//                         whileTap={{ scale: 0.98 }}
//                         className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm font-baloo hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-80 shadow-xs">
//                         <HiOutlinePaperAirplane className="w-4 h-4 text-slate-300" />
//                         <span>
//                           {loading
//                             ? "Sending Message..."
//                             : "Send Project Inquiry"}
//                         </span>
//                       </motion.button>
//                     </form>
//                   )}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineCodeBracket,
  HiOutlinePaintBrush,
  HiOutlineRocketLaunch,
  HiBookmark,
} from "react-icons/hi2";

export default function ServicesSection() {
  const services = [
    {
      icon: HiOutlineCodeBracket,
      title: "Custom Web Applications",
      description:
        "High-performance, scalable web apps built with React, Next.js, and Tailwind CSS tailored to your business needs.",
      tags: ["React", "Next.js", "Tailwind CSS", "REST APIs"],
    },
    {
      icon: HiOutlinePaintBrush,
      title: "Figma to Responsive Code",
      description:
        "Pixel-perfect conversion of your Figma or Adobe XD designs into clean, modular, and responsive production code.",
      tags: ["Figma", "Pixel-Perfect", "Clean Code", "Responsive UI"],
    },
    {
      icon: HiOutlineRocketLaunch,
      title: "Landing Pages & Re-design",
      description:
        "Modern, high-converting landing pages optimized for maximum performance, SEO, and interactive user experiences.",
      tags: ["High Conversion", "SEO Ready", "Fast Load", "Micro-interactions"],
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
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 text-slate-900 border-t-2 border-slate-200">
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
              // core_services_modules
            </span>
            <div className="inline-flex items-center w-fit space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono shadow-xs">
              <HiBookmark className="w-3.5 h-3.5 text-slate-600" />
              <span>services_module.config</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-left sm:text-center pt-1 sm:pt-3">
            Turn Your Web Ideas Into{" "}
            <span className="text-slate-900">Production Reality</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-tight max-w-3xl mx-auto font-baloo text-left sm:text-center">
            Need a custom web application or modern landing page? I partner with
            founders, startups, and businesses to build high-converting web
            solutions.
          </p>
        </motion.div>

        {/* Services Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-white px-8 sm:px-7 py-6 rounded-2xl border border-slate-200/50 hover:border-slate-300/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center mb-4 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="font-mono text-[10px] text-slate-400 block mb-2">
                    // service_0{index + 1}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 leading-tight font-baloo">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-100">
                  {item.tags.map((tag, tIndx) => (
                    <span
                      key={tIndx}
                      className="px-3 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-baloo text-slate-700 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
