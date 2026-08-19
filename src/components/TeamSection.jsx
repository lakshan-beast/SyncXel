import React from "react";
import {
  HiOutlineUser,
  HiOutlineSparkles,
  HiOutlineCodeBracket,
  HiOutlineCheckBadge,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { SiGithub, SiX } from "react-icons/si";
import { RxLinkedinLogo } from "react-icons/rx";

import HeroIamge from "/hero.jpg";

export default function TeamSection() {
  const stats = [
    { value: "10k+", label: "Code Snippets Delivered" },
    { value: "100/100", label: "Lighthouse Performance" },
    { value: "100%", label: "Production-Ready Standard" },
    { value: "24/7", label: "Agile Client Delivery" },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Background Neon Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-syncxel-cyan/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* 1. STATS / METRICS BAR WITH HEADING */}
        <div className="space-y-10">
          {/* Stats Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-syncxel-cyan/10 border border-syncxel-cyan/20 text-syncxel-cyan text-xs font-semibold">
              <HiOutlineChartBar className="w-4 h-4" />
              <span>Proven Impact & Metrics</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
              Driven by Numbers, Engineered for{" "}
              <span className="text-transparent bg-clip-text bg-syncxel-gradient">
                Excellence
              </span>
            </h2>

            <p className="text-syncxel-textMuted text-xs sm:text-sm leading-relaxed">
              Real metrics that reflect our commitment to speed, code quality,
              and reliability.
            </p>
          </div>
          {/* 1. STATS / METRICS BAR */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-syncxel-card/50 border border-syncxel-border/60 text-center space-y-2 backdrop-blur-sm hover:border-syncxel-cyan/30 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-syncxel-gradient font-heading">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-syncxel-textMuted font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. MEET THE FOUNDER SECTION */}
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-syncxel-cyan/10 border border-syncxel-cyan/20 text-syncxel-cyan text-xs font-semibold">
              <HiOutlineUser className="w-4 h-4" />
              <span>Behind SyncXel</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
              Meet the
              <span className="text-transparent bg-clip-text bg-syncxel-gradient">
                Founder & Architect
              </span>
            </h2>

            <p className="text-syncxel-textMuted text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Building modern digital products with a strong focus on
              high-performance code, clean UI architecture, and seamless user
              experiences.
            </p>
          </div>

          {/* SOLO FOUNDER CARD */}
          <div className="relative p-8 sm:p-12 rounded-3xl bg-syncxel-card/70 border border-syncxel-border/80 shadow-2xl backdrop-blur-xl hover:border-syncxel-cyan/40 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <img
                src={HeroIamge}
                alt=""
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl "
              />

              {/* Founder Bio & Details */}
              <div className="space-y-4 text-center md:text-left flex-1">
                <div className="space-y-1">
                  <div className="inline-flex items-center space-x-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                      Lead Web Engineer
                    </h3>
                    <HiOutlineCheckBadge
                      className="w-6 h-6 text-syncxel-cyan"
                      title="Verified Creator"
                    />
                  </div>
                  <p className="text-syncxel-cyan font-semibold text-sm">
                    Founder & Lead Web Engineer @ SyncXel
                  </p>
                </div>

                <p className="text-syncxel-textMuted text-sm sm:text-base leading-relaxed font-body">
                  Passionate about crafting high-performance web applications,
                  clean code, and modern dark aesthetics. Building SyncXel to
                  help developers code faster and businesses launch
                  production-ready web platforms.
                </p>

                {/* Tech Highlights Tags */}
                <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
                  {[
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "Full-Stack Dev",
                    "UI/UX Architecture",
                  ].map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-syncxel-dark/90 border border-syncxel-border text-xs font-medium text-syncxel-textMuted">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-4 flex items-center justify-center md:justify-start space-x-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-syncxel-dark border border-syncxel-border text-syncxel-textMuted hover:text-white hover:border-syncxel-cyan/40 transition-all"
                    title="GitHub Profile">
                    <SiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-syncxel-dark border border-syncxel-border text-syncxel-textMuted hover:text-white hover:border-syncxel-cyan/40 transition-all"
                    title="LinkedIn Profile">
                    <RxLinkedinLogo className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-syncxel-dark border border-syncxel-border text-syncxel-textMuted hover:text-white hover:border-syncxel-cyan/40 transition-all"
                    title="X Profile">
                    <SiX className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
