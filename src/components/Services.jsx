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

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {/* section header */}
        <div className="text-center space-y-1 max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-syncxel-cyan/10 border border-syncxel-cyan/20 text-syncxel-cyan text-xs font-semibold">
            <HiOutlineChatBubbleLeftRight className="w-4 h-4" />
            <span>Client Services & Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-exo tracking-tight">
            Turn your web ideas into{" "}
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3">
          {services.map((item, index) => (
            <div
              className="group relative p-6 rounded-2xl bg-syncxel-card/60 border border-syncxel-border/60 hover:border-syncxel-cyan/40 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
              key={index}>
              <div className="space-y-4">
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

              <div className="flex flex-wrap gap-2 pt-6">
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
      </div>
    </section>
  );
}
