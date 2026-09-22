
import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineCheckBadge,
  HiBookmark,
} from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaTelegramPlane, FaEnvelope } from "react-icons/fa";

import HeroImage from "/hero.jpg";

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 text-slate-900 border-t-2 border-slate-200"> 
      
      <div className="relative z-10 space-y-12">
        {/* MEET THE FOUNDER SECTION */}
        <div className="space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-3">
            
            <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
              <span className="font-mono text-xs text-slate-400 block">
                // founder_and_architect
              </span>

              <div className="inline-flex items-center w-fit space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono shadow-xs">
                <HiBookmark className="w-3.5 h-3.5 text-slate-600" />
                <span>founder_module.config</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-left sm:text-center pt-1 sm:pt-3">
              Meet the{" "}
              <span className="text-slate-900">Founder & Architect</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-500 leading-tight max-w-3xl mx-auto font-baloo text-left sm:text-center">
              Building modern digital products with a strong focus on
              high-performance code, clean UI architecture, and seamless user
              experiences.
            </p>
          </motion.div>

          {/* SOLO FOUNDER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative bg-white px-8 sm:px-7 py-6 rounded-3xl border border-slate-200/50 hover:border-slate-300/50 transition-all duration-300 shadow-sm hover:shadow-md max-w-4xl mx-auto">
            
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Profile Image with Hover Animation */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="shrink-0 relative rounded-full">
                
                <img
                  src={HeroImage}
                  alt="Lakshan Sandeepa - Founder of SyncXel"
                  className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-slate-200 shadow-sm"
                />
                
                <div className="absolute bottom-1 right-1 bg-slate-900 p-2 rounded-full border-2 border-white shadow-sm">
                  <HiOutlineCheckBadge
                    className="w-5 h-5 text-white"
                    title="Verified Creator"
                  />
                </div>
              </motion.div>

              {/* Founder Bio & Details */}
              <div className="space-y-3 text-center md:text-left flex-1">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-slate-400 block">
                    // lead_engineer_identity
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                    Lakshan Sandeepa
                  </h3>
                  <p className="text-slate-500 font-baloo text-xs font-medium border-b border-slate-200 pb-2">
                    Founder & Lead Web Engineer{" "}
                    <span className="text-slate-900 font-bold">
                      @SyncXel
                    </span>
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 leading-tight font-baloo">
                  Passionate about crafting high-performance web applications,
                  clean code, and modern minimalist aesthetics. Building SyncXel
                  to help developers code faster and businesses launch
                  production-ready web platforms.
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1 justify-center md:justify-start">
                  {[
                    "React.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Frontend Architecture",
                    "UI/UX Design",
                  ].map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-4 py-1 rounded-full bg-slate-100/50 border border-slate-200 text-[11px] font-baloo text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-200 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                
                <div className="pt-3 flex items-center justify-center md:justify-start space-x-2 border-t border-t-slate-200 sm:border-none">                
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
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        className="p-2.5 rounded-xl bg-slate-100/50 border border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-xs group"
                        title={social.title}>
                        <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
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