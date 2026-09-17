import React from "react";
import { motion } from "framer-motion";
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
    <section className="py-16 border-y border-white/15 overflow-hidden relative border-none">
      {/* Animation Styles for Marquee */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); } 
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
            will-change: transform;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 relative">
        {/* Section Title with Framer Motion Entrance */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-semibold text-white/80 tracking-[0.15rem] uppercase mb-8 hidden lg:block">
          Built for Modern Web Technologies
        </motion.p>

        {/* Marquee Container with Gradient Overlays */}
        <div className="relative w-full overflow-hidden pt-5">
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-r from-[#080b12] to-transparent z-10 pointer-events-none" />

          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-l from-[#080b12] to-transparent z-10 pointer-events-none" />

          {/* Animated Track */}
          <div className="animate-marquee items-center space-x-12 sm:space-x-16">
            {duplicatedTech.map((tech, idx) => (
              <motion.div
                key={`${tech.name}-${idx}`}
                whileHover={{ scale: 1.08, y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center space-x-3 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 cursor-pointer">
                {tech.icon}
                <span className="text-white font-bold text-base sm:text-lg tracking-tight whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
