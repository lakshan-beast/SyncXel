// // import React, { useState } from "react";
// // import {
// //   HiOutlineCodeBracket,
// //   HiOutlinePaintBrush,
// //   HiOutlineCpuChip,
// //   HiOutlineRocketLaunch,
// //   HiOutlineCheckCircle,
// //   HiOutlineChatBubbleLeftRight,
// //   HiOutlinePaperAirplane,
// // } from "react-icons/hi2";

// // export default function Services() {
// //   const [selcetedBudget, setSelectedBudget] = useState("$500 - $1000");
// //   const [submitted, setSubmitted] = useState(false);

// //   const services = [
// //     {
// //       icon: <HiOutlineCodeBracket className="w-7 h-7 text-syncxel-cyan" />,
// //       title: "Custom Web Applications",
// //       description:
// //         "High-performance, scalable web apps built with React, Next.js, and Tailwind CSS tailored to your business needs.",
// //       tags: ["React", "Next.js", "Tailwind", "REST APIs"],
// //     },
// //     {
// //       icon: <HiOutlinePaintBrush className="w-7 h-7 text-syncxel-cyan" />,
// //       title: "Figma to Responsive Code",
// //       description:
// //         "Pixel-perfect conversion of your Figma / Adobe XD designs into clean, modular, and responsive production code.",
// //       tags: ["Figma", "Pixel-Perfect", "Clean Code", "Animations"],
// //     },
// //     {
// //       icon: <HiOutlineCpuChip className="w-7 h-7 text-syncxel-cyan" />,
// //       title: "Full-Stack SaaS Development",
// //       description:
// //         "End-to-end MVP and SaaS product engineering including Authentication, Database architecture, and Payment gateways.",
// //       tags: ["Node.js", "Supabase", "Stripe", "Auth"],
// //     },
// //     {
// //       icon: <HiOutlineRocketLaunch className="w-7 h-7 text-syncxel-cyan" />,
// //       title: "Landing Pages & Re-design",
// //       description:
// //         "Modern, high-converting landing pages built with micro-animations to turn visitors into paying customers.",
// //       tags: ["High Conversion", "SEO Optimized", "Fast Load"],
// //     },
// //   ];

// //   const steps = [
// //     {
// //       number: "01",
// //       title: "Discovery & Strategy",
// //       desc: "We discuss your project requirements, target audience, and business goals in detail.",
// //     },
// //     {
// //       number: "02",
// //       title: "Design & Architecture",
// //       desc: "We plan the UX workflow, UI layouts, and tech stack to ensure smooth scalability.",
// //     },
// //     {
// //       number: "03",
// //       title: "Agile Development",
// //       desc: "We write clean, modular code with regular progress updates and interactive demos.",
// //     },
// //     {
// //       number: "04",
// //       title: "Testing & Launch",
// //       desc: "Rigorous performance optimization, cross-browser testing, and deployment to production.",
// //     },
// //   ];

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setSubmitted(true);
// //     setTimeout(() => setSubmitted(false), 5000);
// //   };

// //   return (
// //     <section id="hire" className="relative py-24 px-4 sm:px-8 overflow-hidden">
// //       {/* backgroun glow */}
// //       <div className="absolute top-1/2 left-0 -translate-1/2 w-96 h-96 bg-syncxel-cyan/5 blur-[140px] pointer-events-none">
// //         <div className="absolute bottom-0 right-0 w-96 h-96 bg-syncxel-blue/5 blur-[140px] pointer-events-none">
// //           <div className="max-w-7xl mx-auto space-y-24">
// //             {/* section header */}
// //             <div className="text-center space-y-4 max-w-3xl mx-auto">
// //               <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-syncxel-cyan/10 border border-syncxel-cyan/20 text-syncxel-cyan text-xs font-semibold">
// //                 <HiOutlineChatBubbleLeftRight className="w-4 h-4" />
// //                 <span>Client Services & Engineering</span>
// //               </div>

// //               <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-exo tracking-tight">
// //                 Turn your web ideas into
// //                 <span className="text-transparent bg-clip-text bg-syncxel-gradient">
// //                   Production Reality
// //                 </span>
// //               </h2>

// //               <p className="text-syncxel-text-muted text-sm sm:text-base leading-relaxed">
// //                 Need a custom web app or landing page? We partner with founders,
// //                 startups, and businesses to engineer custom digital solutions.
// //               </p>
// //             </div>

// //             {/* services card */}
// //             <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
// //               {services.map((item, index) => (
// //                 <div
// //                   className="group relative p-6 rounded-2xl bg-syncxel-card/60 border border-syncxel-border/60 hover:border-syncxel-cyan/40 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
// //                   key={index}>
// //                   <div className="space-y-4">
// //                     <div className="w-12 h-12 rounded-xl bg-syncxel-dark border border-syncxel-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
// //                       {item.icon}
// //                     </div>
// //                     <h3 className="text-xl font-bold text-white font-heading">
// //                       {item.title}
// //                     </h3>
// //                     <p className="text-syncxel-text-muted text-sm leading-relaxed">
// //                       {item.description}
// //                     </p>
// //                   </div>

// //                   <div className="flex flex-wrap gap-2 pt-6">
// //                     {item.tags.map((tag, tIndx) => (
// //                       <span
// //                         key={tIndx}
// //                         className="px-2.5 py-1 rounded-md bg-syncxel-dark/80 border border-syncxel-border/50 text-xs font-medium text-syncxel-text-muted">
// //                         {tag}
// //                       </span>
// //                     ))}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import React, { useState } from "react";
// import {
//   HiOutlineCodeBracket,
//   HiOutlinePaintBrush,
//   HiOutlineCpuChip,
//   HiOutlineRocketLaunch,
//   HiOutlineCheckCircle,
//   HiOutlineChatBubbleLeftRight,
//   HiOutlinePaperAirplane,
// } from "react-icons/hi2";

// export default function Services() {
//   const [selectedBudget, setSelectedBudget] = useState("$500 - $1000");
//   const [submitted, setSubmitted] = useState(false);

//   const services = [
//     {
//       icon: <HiOutlineCodeBracket className="w-7 h-7 text-syncxel-cyan" />,
//       title: "Custom Web Applications",
//       description:
//         "High-performance, scalable web apps built with React, Next.js, and Tailwind CSS tailored to your business needs.",
//       tags: ["React", "Next.js", "Tailwind", "REST APIs"],
//     },
//     {
//       icon: <HiOutlinePaintBrush className="w-7 h-7 text-syncxel-cyan" />,
//       title: "Figma to Responsive Code",
//       description:
//         "Pixel-perfect conversion of your Figma / Adobe XD designs into clean, modular, and responsive production code.",
//       tags: ["Figma", "Pixel-Perfect", "Clean Code", "Animations"],
//     },
//     {
//       icon: <HiOutlineCpuChip className="w-7 h-7 text-syncxel-cyan" />,
//       title: "Full-Stack SaaS Development",
//       description:
//         "End-to-end MVP and SaaS product engineering including Authentication, Database architecture, and Payment gateways.",
//       tags: ["Node.js", "Supabase", "Stripe", "Auth"],
//     },
//     {
//       icon: <HiOutlineRocketLaunch className="w-7 h-7 text-syncxel-cyan" />,
//       title: "Landing Pages & Re-design",
//       description:
//         "Modern, high-converting landing pages built with micro-animations to turn visitors into paying customers.",
//       tags: ["High Conversion", "SEO Optimized", "Fast Load"],
//     },
//   ];

//   const steps = [
//     {
//       number: "01",
//       title: "Discovery & Strategy",
//       desc: "We discuss your project requirements, target audience, and business goals in detail.",
//     },
//     {
//       number: "02",
//       title: "Design & Architecture",
//       desc: "We plan the UX workflow, UI layouts, and tech stack to ensure smooth scalability.",
//     },
//     {
//       number: "03",
//       title: "Agile Development",
//       desc: "We write clean, modular code with regular progress updates and interactive demos.",
//     },
//     {
//       number: "04",
//       title: "Testing & Launch",
//       desc: "Rigorous performance optimization, cross-browser testing, and deployment to production.",
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 5000);
//   };

//   return (
//     <section id="hire" className="relative py-24 px-4 sm:px-8 overflow-hidden">
//       {/* background glow */}
//       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-syncxel-cyan/5 blur-[140px] pointer-events-none" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-syncxel-blue/5 blur-[140px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto space-y-14 relative z-10">
//         {/* section header */}
//         <div className="text-center space-y-1 max-w-3xl mx-auto mb-8">
//           <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-syncxel-cyan/10 border border-syncxel-cyan/20 text-syncxel-cyan text-xs font-semibold">
//             <HiOutlineChatBubbleLeftRight className="w-4 h-4" />
//             <span>Client Services & Engineering</span>
//           </div>

//           <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-exo tracking-tight">
//             Turn Your Web Ideas Into{" "}
//             <span className="text-transparent bg-clip-text bg-syncxel-gradient">
//               Production Reality
//             </span>
//           </h2>

//           <p className="text-syncxel-text-muted text-sm sm:text-base leading-relaxed">
//             Need a custom web app or landing page? We partner with founders,
//             startups, and businesses to engineer custom digital solutions.
//           </p>
//         </div>

//         {/* services grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
//           {services.map((item, index) => (
//             <div
//               className="group relative p-6 rounded-3xl bg-syncxel-card/60 border-2 border-syncxel-border/60 hover:border-syncxel-cyan/40 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
//               key={index}>
//               <div className="space-y-2">
//                 <div className="w-12 h-12 rounded-xl bg-syncxel-dark border border-syncxel-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-white font-heading">
//                   {item.title}
//                 </h3>
//                 <p className="text-syncxel-text-muted text-sm leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-2 pt-4">
//                 {item.tags.map((tag, tIndx) => (
//                   <span
//                     key={tIndx}
//                     className="px-2.5 py-1 rounded-md bg-syncxel-dark/80 border border-syncxel-border/50 text-xs font-medium text-syncxel-text-muted">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* 2. the 4-step process */}
//         <div className="space-y-2">
//           <div className="text-center space-y-1">
//             <h3 className="text-2xl sm:text-3xlfont-bold text-white font-heading">
//               How To Work Together
//             </h3>
//             <p className="text-syncxel-text-muted text-sm">
//               A transparent 4-step workflow from initial idea to deployment.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
//             {steps.map((step, idx) => (
//               <div
//                 key={idx}
//                 className="relative p-6 rounded-2xl bg-syncxel-card/70 border border-syncxel-border/40 hover:border-syncxel-border transition-colors space-y-3">
//                 <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-syncxel-gradient font-exo">
//                   {step.number}
//                 </span>
//                 <h4 className="text-lg font-bold text-white font-exo border-t border-syncxel-border pt-1">
//                   {step.title}
//                 </h4>
//                 <p className="text-xs text-white/60 leading-relaxed">
//                   {step.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 3. contact form / inquary box */}
//         <div className="relative rounded-3xl bg-linear-to-b from-syncxel-card to-[#0b121c] border border-syncxel-border p-8 md:px-8 py-10 shadow-xl max-w-2xl w-full mx-auto">
//           <div className="mx-auto max-w-2xl w-full space-y-8">
//             <div className="text-center space-y-3">
//               <h3 className="text-2xl sm:text-3xl font-bold text-white font-stretch-extra-condensed">
//                 Have A Project In Mind?
//               </h3>
//               <p className="text sm text-syncxel-text-muted">
//                 Fill out the form below or drop us an email. We usually respond
//                 within 24 hours.
//               </p>
//             </div>

//             {submitted ? (
//               <div className="p-6 rounded-2xl bg-syncxel-cyan/10 border border-syncxel-cyan/30 text-center space-y-3">
//                 <HiOutlineCheckCircle className="w-10 h-10 text-syncxel-cyan mx-auto" />
//                 <h4 className="text-lg font-bold text-white">
//                   Message Received!
//                 </h4>
//                 <p className="text-xs text-syncxel-textMuted">
//                   Thank you for reaching out. We will review your project
//                   details and get back to you shortly.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-3">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   <div className="space-y-1">
//                     <label className="text-xs font-semibold text-white">
//                       Your Name
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       placeholder="John Doe"
//                       className="w-full px-4 py-3 rounded-xl bg-syncxel-dark border border-syncxel-border text-white text-sm focus:outline-none focus:border-syncxel-cyan transition-colors"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-xs font-semibold text-white">
//                       Your Email
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       placeholder="john@example.com"
//                       className="w-full px-4 py-3 rounded-xl bg-syncxel-dark border border-syncxel-border text-white text-sm focus:outline-none focus:border-syncxel-cyan transition-colors"
//                     />
//                   </div>
//                 </div>

//                 {/* Budget Selector */}
//                 <div className="space-y-2">
//                   <label className="text-xs font-semibold text-white">
//                     Estimated Budget
//                   </label>
//                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//                     {[
//                       "<$500",
//                       "$500 - $1,000",
//                       "$1,000 - $3,000",
//                       "$3,000+",
//                     ].map((budget) => (
//                       <button
//                         key={budget}
//                         type="button"
//                         onClick={() => setSelectedBudget(budget)}
//                         className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
//                           selectedBudget === budget
//                             ? "bg-syncxel-cyan/10 border-syncxel-cyan text-syncxel-cyan"
//                             : "bg-syncxel-dark border-syncxel-border text-syncxel-textMuted hover:text-white"
//                         }`}>
//                         {budget}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Project Details */}
//                 <div className="space-y-2">
//                   <label className="text-xs font-semibold text-white">
//                     Project Overview
//                   </label>
//                   <textarea
//                     rows={4}
//                     required
//                     placeholder="Tell us about your project goals, features needed, and timeline..."
//                     className="w-full px-4 py-3 rounded-xl bg-syncxel-dark border border-syncxel-border text-white text-sm focus:outline-none focus:border-syncxel-cyan transition-colors resize-none"></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full py-3.5 rounded-xl bg-syncxel-gradient text-syncxel-dark font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 shadow-lg shadow-syncxel-cyan/20 cursor-pointer">
//                   <HiOutlinePaperAirplane className="w-4 h-4" />
//                   <span>Send Project Inquiry</span>
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
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
  // const [selectedBudget, setSelectedBudget] = useState("$500 - $1000");
  // const [submitted, setSubmitted] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("<$500");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   const formData = new FormData(e.target);

  //   // 🔑 .env File එකෙන් Key එක ගන්න විදිහ:
  //   // Vite පාවිච්චි කරයි නම්:
  //   const apiKey = import.meta.env.W3FORMS_API_KEY;
  //   // (CRA පාවිච්චි කරයි නම් උඩ පේළිය වෙනුවට මේක දාන්න: const apiKey = process.env.REACT_APP_WEB3FORMS_KEY;)

  //   formData.append("access_key", apiKey);
  //   formData.append("budget", selectedBudget);

  //   try {
  //     const response = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       setSubmitted(true);
  //     } else {
  //       alert("Submission failed. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     alert("Network error. Please try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Updated Services specifically for Frontend Engineering + Firebase/EmailJS

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    // .env එකෙන් API Key එක ගන්නවා
    const apiKey = import.meta.env.W3FORMS_API_KEY;

    formData.append("access_key", apiKey);

    // ✉️ Email එක Professional විදිහට එන්න මේ Extra Fields එකතු කරන්න:
    formData.append(
      "subject",
      `💼 New Project Inquiry from ${formData.get("name")}`,
    );
    formData.append("from_name", "SyncXel webs Inquiry Form");
    formData.append("Estimated Budget", selectedBudget); // Budget එක Email එකේ Table එකක් විදිහට පෙන්නනවා

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSubmitted(true);
  //   setTimeout(() => setSubmitted(false), 5000);
  // };

  return (
    <section
      id="hire"
      className="relative py-24 px-4 sm:px-8 overflow-hidden scroll-mt-20">
      {/* Background Accent Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
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

          <p className="text-slate-400 text-sm sm:text-base leading-4 md:leading-relaxed max-w-2xl mx-auto">
            Need a custom web application or modern landing page? I partner with
            founders, startups, and businesses to build high-converting web
            solutions.
          </p>
        </div>

        {/* 1. Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 ">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-4xl bg-slate-900/60 border-3 md:border-2 border-white/10 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 pt-6">
                {item.tags.map((tag, tIndx) => (
                  <span
                    key={tIndx}
                    className="px-3 py-1 rounded-3xl bg-slate-950 border border-white/20 text-[11px] font-medium text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2. The 4-Step Process */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl  font-exo text-white tracking-tight">
              How We Work Together
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto leading-4 md:leading-relaxed">
              A transparent 4-step workflow from initial design to final
              deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative py-6 px-10 rounded-4xl bg-slate-900/40 border-3 md:border-2 border-white/10 hover:border-cyan-500/30 transition-all space-y-3 backdrop-blur-sm hover:shadow-xl">
                <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                  {step.number}
                </span>
                <h4 className="text-lg font-bold text-white border-t border-white/10 pt-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Inquiry Form Box */}
        {/* <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 p-6 sm:p-10 shadow-2xl max-w-2xl w-full mx-auto backdrop-blur-xl">
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
              <div className="p-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-3">
                <HiOutlineCheckCircle className="w-12 h-12 text-cyan-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">
                  Message Received!
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                  Thank you for reaching out. I will review your project details
                  and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
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
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600"
                    />
                  </div>
                </div>

                {/* Budget Selector 
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
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setSelectedBudget(budget)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                          selectedBudget === budget
                            ? "bg-cyan-500/10 border-cyan-400 text-cyan-400"
                            : "bg-slate-950 border-white/10 text-slate-400 hover:text-white"
                        }`}>
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details 
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Project Overview
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project goals, required pages/features, and timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none placeholder:text-slate-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-extrabold text-sm hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 cursor-pointer">
                  <HiOutlinePaperAirplane className="w-4 h-4" />
                  <span>Send Project Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div> */}

        <div className="relative rounded-3xl bg-linear-to-b from-slate-900 to-slate-950 border-3 md:border-2 border-white/10 p-6 sm:p-10 shadow-2xl max-w-2xl w-full mx-auto backdrop-blur-xl">
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
              <div className="p-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-3">
                <HiOutlineCheckCircle className="w-12 h-12 text-cyan-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">
                  Message Received!
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                  Thank you for reaching out. I will review your project details
                  and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name" // 👈 Added name attribute
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
                      name="email" // 👈 Added name attribute
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
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setSelectedBudget(budget)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                          selectedBudget === budget
                            ? "bg-cyan-500/10 border-cyan-400 text-cyan-400"
                            : "bg-slate-950 border-white/10 text-slate-400 hover:text-white"
                        }`}>
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Project Overview
                  </label>
                  <textarea
                    name="message" // 👈 Added name attribute
                    rows={4}
                    required
                    placeholder="Tell me about your project goals, required pages/features, and timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none placeholder:text-slate-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-extrabold text-sm hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50">
                  <HiOutlinePaperAirplane className="w-4 h-4" />
                  <span>
                    {loading ? "Sending Message..." : "Send Project Inquiry"}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
