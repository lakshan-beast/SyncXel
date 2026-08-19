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
//   const [selcetedBudget, setSelectedBudget] = useState("$500 - $1000");
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
//       {/* backgroun glow */}
//       <div className="absolute top-1/2 left-0 -translate-1/2 w-96 h-96 bg-syncxel-cyan/5 blur-[140px] pointer-events-none">
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-syncxel-blue/5 blur-[140px] pointer-events-none">
//           <div className="max-w-7xl mx-auto space-y-24">
//             {/* section header */}
//             <div className="text-center space-y-4 max-w-3xl mx-auto">
//               <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-syncxel-cyan/10 border border-syncxel-cyan/20 text-syncxel-cyan text-xs font-semibold">
//                 <HiOutlineChatBubbleLeftRight className="w-4 h-4" />
//                 <span>Client Services & Engineering</span>
//               </div>

//               <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-exo tracking-tight">
//                 Turn your web ideas into
//                 <span className="text-transparent bg-clip-text bg-syncxel-gradient">
//                   Production Reality
//                 </span>
//               </h2>

//               <p className="text-syncxel-text-muted text-sm sm:text-base leading-relaxed">
//                 Need a custom web app or landing page? We partner with founders,
//                 startups, and businesses to engineer custom digital solutions.
//               </p>
//             </div>

//             {/* services card */}
//             <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
//               {services.map((item, index) => (
//                 <div
//                   className="group relative p-6 rounded-2xl bg-syncxel-card/60 border border-syncxel-border/60 hover:border-syncxel-cyan/40 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
//                   key={index}>
//                   <div className="space-y-4">
//                     <div className="w-12 h-12 rounded-xl bg-syncxel-dark border border-syncxel-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                       {item.icon}
//                     </div>
//                     <h3 className="text-xl font-bold text-white font-heading">
//                       {item.title}
//                     </h3>
//                     <p className="text-syncxel-text-muted text-sm leading-relaxed">
//                       {item.description}
//                     </p>
//                   </div>

//                   <div className="flex flex-wrap gap-2 pt-6">
//                     {item.tags.map((tag, tIndx) => (
//                       <span
//                         key={tIndx}
//                         className="px-2.5 py-1 rounded-md bg-syncxel-dark/80 border border-syncxel-border/50 text-xs font-medium text-syncxel-text-muted">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
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
  const [selectedBudget, setSelectedBudget] = useState("$500 - $1000");
  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      icon: <HiOutlineCodeBracket className="w-7 h-7 text-syncxel-cyan" />,
      title: "Custom Web Applications",
      description:
        "High-performance, scalable web apps built with React, Next.js, and Tailwind CSS tailored to your business needs.",
      tags: ["React", "Next.js", "Tailwind", "REST APIs"],
    },
    {
      icon: <HiOutlinePaintBrush className="w-7 h-7 text-syncxel-cyan" />,
      title: "Figma to Responsive Code",
      description:
        "Pixel-perfect conversion of your Figma / Adobe XD designs into clean, modular, and responsive production code.",
      tags: ["Figma", "Pixel-Perfect", "Clean Code", "Animations"],
    },
    {
      icon: <HiOutlineCpuChip className="w-7 h-7 text-syncxel-cyan" />,
      title: "Full-Stack SaaS Development",
      description:
        "End-to-end MVP and SaaS product engineering including Authentication, Database architecture, and Payment gateways.",
      tags: ["Node.js", "Supabase", "Stripe", "Auth"],
    },
    {
      icon: <HiOutlineRocketLaunch className="w-7 h-7 text-syncxel-cyan" />,
      title: "Landing Pages & Re-design",
      description:
        "Modern, high-converting landing pages built with micro-animations to turn visitors into paying customers.",
      tags: ["High Conversion", "SEO Optimized", "Fast Load"],
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      desc: "We discuss your project requirements, target audience, and business goals in detail.",
    },
    {
      number: "02",
      title: "Design & Architecture",
      desc: "We plan the UX workflow, UI layouts, and tech stack to ensure smooth scalability.",
    },
    {
      number: "03",
      title: "Agile Development",
      desc: "We write clean, modular code with regular progress updates and interactive demos.",
    },
    {
      number: "04",
      title: "Testing & Launch",
      desc: "Rigorous performance optimization, cross-browser testing, and deployment to production.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="hire" className="relative py-24 px-4 sm:px-8 overflow-hidden">
      {/* background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-syncxel-cyan/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-syncxel-blue/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        {/* section header */}
        <div className="text-center space-y-1 max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-syncxel-cyan/10 border border-syncxel-cyan/20 text-syncxel-cyan text-xs font-semibold">
            <HiOutlineChatBubbleLeftRight className="w-4 h-4" />
            <span>Client Services & Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-exo tracking-tight">
            Turn Your Web Ideas Into{" "}
            <span className="text-transparent bg-clip-text bg-syncxel-gradient">
              Production Reality
            </span>
          </h2>

          <p className="text-syncxel-text-muted text-sm sm:text-base leading-relaxed">
            Need a custom web app or landing page? We partner with founders,
            startups, and businesses to engineer custom digital solutions.
          </p>
        </div>

        {/* services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
          {services.map((item, index) => (
            <div
              className="group relative p-6 rounded-3xl bg-syncxel-card/60 border-2 border-syncxel-border/60 hover:border-syncxel-cyan/40 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
              key={index}>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-syncxel-dark border border-syncxel-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white font-heading">
                  {item.title}
                </h3>
                <p className="text-syncxel-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {item.tags.map((tag, tIndx) => (
                  <span
                    key={tIndx}
                    className="px-2.5 py-1 rounded-md bg-syncxel-dark/80 border border-syncxel-border/50 text-xs font-medium text-syncxel-text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2. the 4-step process */}
        <div className="space-y-2">
          <div className="text-center space-y-1">
            <h3 className="text-2xl sm:text-3xlfont-bold text-white font-heading">
              How To Work Together
            </h3>
            <p className="text-syncxel-text-muted text-sm">
              A transparent 4-step workflow from initial idea to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-syncxel-card/70 border border-syncxel-border/40 hover:border-syncxel-border transition-colors space-y-3">
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-syncxel-gradient font-exo">
                  {step.number}
                </span>
                <h4 className="text-lg font-bold text-white font-exo border-t border-syncxel-border pt-1">
                  {step.title}
                </h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. contact form / inquary box */}
        <div className="relative rounded-3xl bg-linear-to-b from-syncxel-card to-[#0b121c] border border-syncxel-border p-8 md:px-8 py-10 shadow-xl max-w-2xl w-full mx-auto">
          <div className="mx-auto max-w-2xl w-full space-y-8">
            <div className="text-center space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-stretch-extra-condensed">
                Have A Project In Mind?
              </h3>
              <p className="text sm text-syncxel-text-muted">
                Fill out the form below or drop us an email. We usually respond
                within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-syncxel-cyan/10 border border-syncxel-cyan/30 text-center space-y-3">
                <HiOutlineCheckCircle className="w-10 h-10 text-syncxel-cyan mx-auto" />
                <h4 className="text-lg font-bold text-white">
                  Message Received!
                </h4>
                <p className="text-xs text-syncxel-textMuted">
                  Thank you for reaching out. We will review your project
                  details and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-white">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-syncxel-dark border border-syncxel-border text-white text-sm focus:outline-none focus:border-syncxel-cyan transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-white">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-syncxel-dark border border-syncxel-border text-white text-sm focus:outline-none focus:border-syncxel-cyan transition-colors"
                    />
                  </div>
                </div>

                {/* Budget Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-white">
                    Estimated Budget
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
                            ? "bg-syncxel-cyan/10 border-syncxel-cyan text-syncxel-cyan"
                            : "bg-syncxel-dark border-syncxel-border text-syncxel-textMuted hover:text-white"
                        }`}>
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-white">
                    Project Overview
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project goals, features needed, and timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-syncxel-dark border border-syncxel-border text-white text-sm focus:outline-none focus:border-syncxel-cyan transition-colors resize-none"></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-syncxel-gradient text-syncxel-dark font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 shadow-lg shadow-syncxel-cyan/20 cursor-pointer">
                  <HiOutlinePaperAirplane className="w-4 h-4" />
                  <span>Send Project Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
