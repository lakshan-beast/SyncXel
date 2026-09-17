
import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineUser,
  HiOutlineCheckBadge,
} from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaTelegramPlane, FaEnvelope } from "react-icons/fa";

import HeroImage from "/hero.jpg";

export default function TeamSection() {
  const stats = [
    { value: "10k+", label: "Code Snippets Delivered" },
    { value: "100/100", label: "Lighthouse Performance" },
    { value: "100%", label: "Production-Ready Standard" },
    { value: "24/7", label: "Agile Client Delivery" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
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
    <section className="py-24 px-4 sm:px-8 relative overflow-hidden">
      {/* Background Neon Accent Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-indigo-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        

        {/* 2. MEET THE FOUNDER SECTION */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold shadow-sm">
              <HiOutlineUser className="w-4 h-4" />
              <span>Behind SyncXel</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Meet the{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500">
                Founder & Architect
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-tight max-w-xl mx-auto">
              Building modern digital products with a strong focus on
              high-performance code, clean UI architecture, and seamless user
              experiences.
            </p>
          </motion.div>

          {/* SOLO FOUNDER CARD with Motion Entry */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative p-8 sm:py-8 sm:px-9 rounded-4xl bg-slate-800/50 border-2 border-white/10 shadow-2xl backdrop-blur-2xl hover:border-cyan-500/10 transition-all duration-300 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 lg:gap-6  ">
              {/* Profile Image with Hover Animation */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="shrink-0 relative rounded-full">
                <img
                  src={HeroImage}
                  alt="Lakshan Sandeepa - Founder of SyncXel"
                  className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-5 border-cyan-500/50 shadow-xl shadow-cyan-500/10"
                />
                <div className="absolute -bottom-1 right-2 bg-slate-950 p-1.5 rounded-full border border-white/20 shadow-md">
                  <HiOutlineCheckBadge
                    className="w-7 h-7 text-cyan-400"
                    title="Verified Creator"
                  />
                </div>
              </motion.div>

              {/* Founder Bio & Details */}
              <div className="space-y-2 text-center md:text-left flex-1">
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Lakshan Sandeepa
                  </h3>
                  <p className="text-cyan-400 font-medium text-sm border-b border-white/10 pb-3">
                    Founder & Lead Web Engineer @ SyncXel
                  </p>
                </div>

                <p className="text-slate-400/90 text-sm sm:text-base leading-tight">
                  Passionate about crafting high-performance web applications,
                  clean code, and modern dark aesthetics. Building SyncXel to
                  help developers code faster and businesses launch
                  production-ready web platforms.
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1 pt-1 justify-center md:justify-start">
                  {[
                    "React.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Frontend Architecture",
                    "UI/UX Design",
                  ].map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-4 py-1 rounded-xl bg-slate-950 border border-white/15 text-xs font-medium text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Social Links with Hover Effects */}
                <div className="pt-2 flex items-center justify-center md:justify-start space-x-1">
                  {[
                    {
                      href: "https://github.com/lakshan-beast",
                      icon: SiGithub,
                      title: "GitHub Profile",
                    },
                    {
                      href: "https://www.linkedin.com/in/lakshan-sandeepa",
                      icon: RxLinkedinLogo,
                      title: "Linkedin Profile",
                    },
                    {
                      href: "https://lakshan-sandeepa-dev.vercel.app/",
                      icon: SlGlobe,
                      title: "Portfolio",
                    },
                    {
                      href: "https://t.me/lakshan_dev",
                      icon: FaTelegramPlane,
                      title: "Telegram Chat",
                    },
                    {
                      href: "mailto:syncxelofficial@gmail.com",
                      icon: FaEnvelope,
                      title: "Email Chat",
                    },
                  ].map((social, sIdx) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={sIdx}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        className="p-3 rounded-xl bg-slate-950 border-2 border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shadow-md gruop "
                        title={social.title}>
                        <Icon className="w-5 h-5 group-hover:scale-110" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
