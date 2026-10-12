import React from "react";
import { motion } from "framer-motion";

import { HiOutlineCheckBadge, HiBookmark } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaTelegramPlane, FaEnvelope, FaDev } from "react-icons/fa";
import { FaReddit } from "react-icons/fa6";

import HeroImage1 from "/hero.jpg";
import HeroImage2 from "/hero.jpg";

export const teamData = [
  {
    id: 1,
    name: "Lakshan Sandeepa",
    role: "Founder & Lead Architect",
    avatar: HeroImage1,
    status: "Available for Custom Projects",
    bio: "Passionate about crafting high-performance web applications, clean code, and modern minimalist aesthetics. Building SyncXel to help developers code faster and businesses launch production-ready web platforms.",
    skills: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Frontend Architecture",
      "UI/UX Design",
    ],
    socials: {
      github: "https://github.com/lakshan-beast",
      linkedin: "https://www.linkedin.com/in/lakshan-sandeepa",
      portfolio: "https://lakshan-sandeepa-dev.vercel.app/",
      telegram: "https://t.me/lakshan_dev",
      mail: "mailto:lakshansandeepa0305@gmail.com",
      reddit: "https://www.reddit.com/user/lakshan_sandeepa35/",
      devto: "https://dev.to/lakshan_sandeepa35/",
    },
  },
  {
    id: 2,
    name: "Teran Chamuditha", // යාලුවාගේ නම දාන්න
    role: "Cybersecurity Engineer & Core Contributor",
    avatar: HeroImage2, // Cool security avatar එකක්
    status: "Auditing Codebases",
    bio: "Software engineer specializing in web application security, ethical hacking, and secure architecture integration.",
    skills: [
      "OWASP Top 10",
      "Penetration Testing",
      "Security Audits",
      "Secure Backend",
    ],
    socials: {
      github: "",
      linkedin: "",
      portfolio: "",
      telegram: "",
      mail: "",
      reddit: "",
      devto: "",
    },
  },
];

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
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            className="text-left space-y-3">
            <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
              <motion.span
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="font-mono text-xs text-slate-400 block">
                // founder_and_architect
              </motion.span>

              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center w-fit space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono shadow-xs">
                <HiBookmark className="w-3.5 h-3.5 text-slate-600" />
                <span>founder_module.config</span>
              </motion.div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-left sm:text-center pt-1 sm:pt-3">
              Meet the{" "}
              <span className="text-slate-900">Founder & Architect</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="text-sm sm:text-base text-slate-500 leading-tight max-w-3xl mx-auto font-baloo text-left sm:text-center">
              Building modern digital products with a strong focus on
              high-performance code, clean UI architecture, and seamless user
              experiences.
            </motion.p>
          </motion.div>

          {/* SOLO FOUNDER & TEAM CARDS */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {teamData.map((member, idx) => (
              <motion.div
                key={member.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative bg-white px-8 sm:px-7 py-6 rounded-3xl border border-slate-200/50 hover:border-slate-300/50 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  {/* Profile Image with Hover Animation */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="shrink-0 relative rounded-full">
                    <motion.img
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      src={member.avatar}
                      alt={`${member.name} - ${member.role} of SyncXel`}
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
                  <div className="space-y-3 text-center md:text-left flex-1 relative">
                    <div className="space-y-1">
                      <span className="absolute right-0 top-0 hidden md:block text-emerald-500 text-xs sm:text-sm px-3 py-0.5 border border-emerald-500 rounded-2xl animate-pulse">
                        {member.status}
                      </span>
                      <span className="md:hidden inline-block text-emerald-500 text-xs px-3 py-0.5 border border-emerald-500 rounded-2xl animate-pulse mb-2">
                        {member.status}
                      </span>

                      <span className="font-mono text-[10px] text-slate-400 block">
                        // lead_engineer_identity_{member.id}
                      </span>
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                        {member.name}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-slate-500 font-baloo text-xs font-medium border-b border-slate-200 pb-2">
                        {member.role}{" "}
                        <span className="text-slate-900 font-bold">
                          @SyncXel
                        </span>
                      </motion.p>
                    </div>

                    <motion.p
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-xs sm:text-sm text-slate-500 leading-tight font-baloo">
                      {member.bio}
                    </motion.p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1 justify-center md:justify-start">
                      {member.skills.map((tag, tIdx) => (
                        <motion.span
                          initial={{ opacity: 0.3, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                          key={tIdx}
                          className="px-4 py-1 rounded-full bg-slate-100/50 border border-slate-200 text-[11px] font-baloo text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-200 transition-colors duration-300">
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Social Links - Dynamic based on available properties */}
                    <div className="pt-3 flex items-center justify-center md:justify-start space-x-2 border-t border-t-slate-200 sm:border-none">
                      {[
                        member.socials?.github && {
                          href: member.socials.github,
                          icon: SiGithub,
                          title: "GitHub Profile",
                        },
                        member.socials?.linkedin && {
                          href: member.socials.linkedin,
                          icon: RxLinkedinLogo,
                          title: "Linkedin Profile",
                        },
                        member.socials?.portfolio && {
                          href: member.socials.portfolio,
                          icon: SlGlobe,
                          title: "Portfolio",
                        },
                        member.socials?.telegram && {
                          href: member.socials.telegram,
                          icon: FaTelegramPlane,
                          title: "Telegram Chat",
                        },
                        member.socials?.email && {
                          href: `mailto:${member.socials.email}`,
                          icon: FaEnvelope,
                          title: "Email Chat",
                        },
                        member.socials?.reddit && {
                          href: member.socials.reddit,
                          icon: FaReddit,
                          title: "Reddit Profile",
                        },
                        member.socials?.devto && {
                          href: member.socials.devto,
                          icon: FaDev,
                          title: "Dev.to Profile",
                        },
                      ]
                        .filter(Boolean)
                        .map((social, sIdx) => {
                          const Icon = social.icon;
                          return (
                            <motion.a
                              key={sIdx}
                              href={social.href}
                              target="_blank"
                              rel="noreferrer"
                              initial={{ opacity: 0.3, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              transition={{
                                delay: 0.2,
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
