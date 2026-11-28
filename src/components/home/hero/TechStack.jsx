// import React from "react";
// import { motion } from "framer-motion";
// import {
//   SiReact,
//   SiTailwindcss,
//   SiTypescript,
//   SiNextdotjs,
//   SiHtml5,
//   SiGithub,
//   SiVite,
//   SiFigma,
//   SiVercel,
//   SiFramer,
// } from "react-icons/si";
// import { FaCss3Alt } from "react-icons/fa6";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delayChildren: 0.2,
//       staggerChildren: 0.15,
//     },
//   },
// };

// export default function TechStack() {
//   const technologies = [
//     {
//       name: "React",
//       icon: <SiReact className="w-6 h-6 sm:w-7 sm:h-7 text-[#61DAFB]" />,
//     },
//     {
//       name: "Tailwind CSS",
//       icon: <SiTailwindcss className="w-6 h-6 sm:w-7 sm:h-7 text-[#06B6D4]" />,
//     },
//     {
//       name: "Next.js",
//       icon: <SiNextdotjs className="w-6 h-6 sm:w-7 sm:h-7 text-black" />,
//     },
//     {
//       name: "TypeScript",
//       icon: <SiTypescript className="w-6 h-6 sm:w-7 sm:h-7 text-[#3178C6]" />,
//     },
//     {
//       name: "Framer Motion",
//       icon: <SiFramer className="w-6 h-6 sm:w-7 sm:h-7 text-[#0055FF]" />,
//     },
//     {
//       name: "HTML5",
//       icon: <SiHtml5 className="w-6 h-6 sm:w-7 sm:h-7 text-[#E34F26]" />,
//     },
//     {
//       name: "CSS3",
//       icon: <FaCss3Alt className="w-6 h-6 sm:w-7 sm:h-7 text-[#1572B6]" />,
//     },
//     {
//       name: "Vite",
//       icon: <SiVite className="w-6 h-6 sm:w-7 sm:h-7 text-[#646CFF]" />,
//     },
//     {
//       name: "Figma",
//       icon: <SiFigma className="w-6 h-6 sm:w-7 sm:h-7 text-[#F24E1E]" />,
//     },
//     {
//       name: "GitHub",
//       icon: <SiGithub className="w-6 h-6 sm:w-7 sm:h-7 text-black" />,
//     },
//     {
//       name: "Vercel",
//       icon: (
//         <SiVercel
//           className="w-6 h-6 sm:w-7 sm:h-7 text-black
//       "
//         />
//       ),
//     },
//   ];
//   const duplicatedTech = [...technologies, ...technologies, ...technologies];

//   return (
//     <section className="pt-6 lg:pt-12 overflow-hidden relative border-none">
//       {/* Animation Styles for Marquee */}
//       <style>
//         {`
//           @keyframes marquee {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-33.33%); }
//           }
//           .animate-marquee {
//             display: flex;
//             width: max-content;
//             animation: marquee 35s linear infinite;
//             will-change: transform;
//           }
//           .animate-marquee:hover {
//             animation-play-state: paused;
//           }
//         `}
//       </style>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="mx-auto max-w-full px-0 sm:px-0 relative">
//         {/* Left-aligned Code Comment & Section Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-left mb-2">
//           <span className="font-mono text-xs text-slate-500/50 block mb-0">
//             // core_technologies_&_stack
//           </span>
//           <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
//             Built for Modern Web Standards
//           </h3>
//         </motion.div>

//         {/* Marquee Container with White Gradient Overlays */}
//         <div className="relative w-full overflow-hidden py-5 bg-white border-none border-slate-200/80 rounded-xl">
//           {/* Left Gradient Fade */}
//           <div className="absolute left-0 top-0 bottom-0 w-18 sm:w-28 bg-linear-to-r from-slate-50 to-transparent z-10 pointer-events-none" />

//           {/* Right Gradient Fade */}
//           <div className="absolute right-0 top-0 bottom-0 w-18 sm:w-28 bg-linear-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

//           {/* Animated Track */}
//           <motion.div className="animate-marquee items-center space-x-12 sm:space-x-16 px-4 py-2">
//             {duplicatedTech.map((tech, idx) => (
//               <motion.div
//                 key={`${tech.name}-${idx}`}
//                 // initial={{ opacity: 0.3, y: 20 }}
//                 // whileInView={{ opacity: 1, y: 0 }}
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 transition={{
//                   delay: 0.2,
//                   type: "spring",
//                   stiffness: 300,
//                   damping: 20,
//                 }}
//                 className="flex items-center space-x-3 opacity-75 hover:opacity-100 grayscale hover:grayscale-0 cursor-pointer font-baloo hover:scale-105 transition-all duration-300">
//                 {tech.icon}
//                 <span className="text-slate-800 font-semibold text-sm sm:text-lg tracking-tight whitespace-nowrap">
//                   {tech.name}
//                 </span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiFramer,
  SiFigma,
  SiGithub,
  SiVercel,
  SiHtml5,
  // SiCss3,
  SiJavascript,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";

const technologies = [
  {
    name: "React",
    category: "UI Library",
    icon: SiReact,
  },
  {
    name: "Next.js",
    category: "Framework",
    icon: SiNextdotjs,
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: SiTypescript,
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: SiTailwindcss,
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: SiJavascript,
  },
  {
    name: "Framer Motion",
    category: "Animation",
    icon: SiFramer,
  },
  {
    name: "Vite",
    category: "Build Tool",
    icon: SiVite,
  },
  {
    name: "Figma",
    category: "Design",
    icon: SiFigma,
  },
  {
    name: "GitHub",
    category: "Version Control",
    icon: SiGithub,
  },
  {
    name: "Vercel",
    category: "Deployment",
    icon: SiVercel,
  },
  {
    name: "HTML5",
    category: "Markup",
    icon: SiHtml5,
  },
  {
    name: "CSS3",
    category: "Styling",
    icon: FaCss3Alt,
  },
];

function TechnologyCard({ technology }) {
  const Icon = technology.icon;

  return (
    <div className="group flex min-w-50 items-center gap-3 rounded-xl border border-slate-200/80 bg-white/75 px-3.5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/10 dark:hover:bg-white/5 dark:hover:shadow-black/20">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white dark:bg-white/[0.07] dark:text-slate-300 dark:group-hover:bg-white dark:group-hover:text-black">
        <Icon aria-hidden="true" focusable="false" className="h-5 w-5" />
      </div>

      <div className="min-w-0">
        <p className="truncate text-xs font-semibold text-slate-800 dark:text-slate-200">
          {technology.name}
        </p>
        <p className="mt-0 text-[10px] text-slate-400">{technology.category}</p>
      </div>
    </div>
  );
}

export default function TechStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Technology ecosystem"
      className="bg-white dark:bg-slate-950 pb-6">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between max-w-7xl px-5 sm:px-0 lg:mx-auto">
        <div>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-blue-600 uppercase">
            <span className="h-px w-8 bg-blue-300" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
              technology ecosystem{" "}
            </span>
          </span>
          <h2 className="mt-2 text-lg font-semibold tracking-wide text-slate-800 dark:text-slate-200">
            Built with modern technologies
          </h2>
        </div>

        <p className="text-[11px] text-slate-400">
          Tools behind the experience
        </p>
      </div>

      {shouldReduceMotion ? (
        <div className="flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <TechnologyCard key={technology.name} technology={technology} />
          ))}
        </div>
      ) : (
        <div className="group relative overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#fafafa] to-transparent dark:from-slate-950/90" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#fafafa] to-transparent dark:from-slate-950/90" />

          <motion.div
            className="flex w-max gap-3 py-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 42,
              ease: "linear",
              repeat: Infinity,
            }}>
            {[...technologies, ...technologies].map((technology, index) => (
              <TechnologyCard
                key={`${technology.name}-${index}`}
                technology={technology}
              />
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
