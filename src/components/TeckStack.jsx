// import React from "react";
// import {
//   SiReact,
//   SiTailwindcss,
//   SiTypescript,
//   SiNextdotjs,
//   SiHtml5,
//   SiSass,
//   SiBootstrap,
//   SiNetlify,
//   SiGithub,
//   SiFirebase,
//   SiVite,
//   SiNodedotjs,
//   SiFigma,
//   SiVercel,
//   SiMongodb,
// } from "react-icons/si";
// import { FaCss3Alt } from "react-icons/fa6";

// export default function TeckStack() {
//   const technologies = [
//     { name: "React", icon: <SiReact className="w-7 h-7 text-[#61DAFB]" /> },
//     {
//       name: "Tailwind",
//       icon: <SiTailwindcss className="w-7 h-7 text-[#06B6D4]" />,
//     },
//     { name: "Next.js", icon: <SiNextdotjs className="w-7 h-7 text-white" /> },
//     {
//       name: "TypeScript",
//       icon: <SiTypescript className="w-7 h-7 text-[#3178C6]" />,
//     },
//     { name: "HTML5", icon: <SiHtml5 className="w-7 h-7 text-[#E34F26]" /> },
//     { name: "CSS3", icon: <FaCss3Alt className="w-7 h-7 text-[#1572B6]" /> },
//     { name: "Sass", icon: <SiSass className="w-7 h-7 text-[#CC6699]" /> },
//     {
//       name: "Bootstrap",
//       icon: <SiBootstrap className="w-7 h-7 text-[#7952B3]" />,
//     },
//     { name: "Netlify", icon: <SiNetlify className="w-7 h-7 text-[#00C7B7]" /> },
//     { name: "GitHub", icon: <SiGithub className="w-7 h-7 text-white" /> },
//     {
//       name: "Firebase",
//       icon: <SiFirebase className="w-7 h-7 text-[#FFCA28]" />,
//     },
//     {
//       name: "Node.js",
//       icon: <SiNodedotjs className="w-7 h-7 text-[#339933]" />,
//     },
//     { name: "MongoDB", icon: <SiMongodb className="w-7 h-7 text-[#47A248]" /> },
//     { name: "Vite", icon: <SiVite className="w-7 h-7 text-[#646CFF]" /> },
//     { name: "Figma", icon: <SiFigma className="w-7 h-7 text-[#F24E1E]" /> },
//     { name: "Vercel", icon: <SiVercel className="w-7 h-7 text-white" /> },
//   ];

//   const duplicatedTech = [...technologies, ...technologies, ...technologies];

//   return (
//     <section className="py-10 border-y border-syncxel-border/30 bg-[#080b12] overflow-hidden relative">
//       {/* Custom CSS Animation (Zero config in Tailwind) */}
//       <style>
//         {`
//           @keyframes marquee {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-33.33%); }
//           }
//           .animate-marquee {
//             display: flex;
//             width: max-content;
//             animation: marquee 25s linear infinite;
//           }
//           .animate-marquee:hover {
//             animation-play-state: paused;
//           }
//         `}
//       </style>

//       <div className="mx-auto max-w-7xl px-4 sm:px-8">
//         <p className="text-center text-xs sm:text-sm font-semibold text-white/60 tracking-[0.2rem] uppercase mb-8">
//           Powered by Industry-Leading Technologies
//         </p>

//         {/* gradient mask */}
//         <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
//           {/* animated track */}
//           <div className="animate-marquee items-center space-x-12 sm:space-x-20 pl-12 sm:pl-12">
//             {duplicatedTech.map((tech, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-center space-x-3 opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer hover:scale-110">
//                 {tech.icon}
//                 <span className="text-white font-bold font-heading text-lg sm:text-xl tracking-tight">
//                   {tech.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiHtml5,
  SiGithub,
  SiVite,
  SiFigma,
  SiVercel,
  SiFramer,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";

export default function TechStack() {
  const technologies = [
    {
      name: "React",
      icon: <SiReact className="w-6 h-6 sm:w-7 sm:h-7 text-[#61DAFB]" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-6 h-6 sm:w-7 sm:h-7 text-[#06B6D4]" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="w-6 h-6 sm:w-7 sm:h-7 text-white" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-6 h-6 sm:w-7 sm:h-7 text-[#3178C6]" />,
    },
    {
      name: "Framer Motion",
      icon: <SiFramer className="w-6 h-6 sm:w-7 sm:h-7 text-[#0055FF]" />,
    },
    {
      name: "HTML5",
      icon: <SiHtml5 className="w-6 h-6 sm:w-7 sm:h-7 text-[#E34F26]" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="w-6 h-6 sm:w-7 sm:h-7 text-[#1572B6]" />,
    },
    {
      name: "Vite",
      icon: <SiVite className="w-6 h-6 sm:w-7 sm:h-7 text-[#646CFF]" />,
    },
    {
      name: "Figma",
      icon: <SiFigma className="w-6 h-6 sm:w-7 sm:h-7 text-[#F24E1E]" />,
    },
    {
      name: "GitHub",
      icon: <SiGithub className="w-6 h-6 sm:w-7 sm:h-7 text-white" />,
    },
    {
      name: "Vercel",
      icon: <SiVercel className="w-6 h-6 sm:w-7 sm:h-7 text-white" />,
    },
  ];

  const duplicatedTech = [...technologies, ...technologies, ...technologies];

  return (
    <section className="py-10 border-y border-white/10 bg-[#080b12] overflow-hidden relative">
      {/* Animation Styles */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); } 
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
            will-change: transform;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 relative">
        <p className="text-center text-xs sm:text-sm font-semibold text-white/50 tracking-[0.2rem] uppercase mb-8">
          Built for Modern Web Technologies
        </p>

        {/* Marquee Container with Reliable Left/Right Gradient Overlays */}
        <div className="relative w-full overflow-hidden">
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#080b12] to-transparent z-10 pointer-events-none" />

          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#080b12] to-transparent z-10 pointer-events-none" />

          {/* Animated Track */}
          <div className="animate-marquee items-center space-x-12 sm:space-x-16">
            {duplicatedTech.map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer hover:scale-105">
                {tech.icon}
                <span className="text-white font-bold text-base sm:text-lg tracking-tight whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
