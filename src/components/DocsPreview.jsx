import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineTerminal,
  HiOutlineCode,
  HiOutlineCloudUpload,
  HiOutlineSparkles,
  HiOutlineArrowRight,
} from "react-icons/hi"; // Or standard react-icons

export default function DocsPreviewSection() {
  const features = [
    {
      icon: HiOutlineCode,
      title: "Backend Integrations",
      desc: "Instant copy-paste snippets for Formspree, EmailJS, Resend & Supabase auth.",
    },
    {
      icon: HiOutlineCloudUpload,
      title: "Vercel & SEO Guides",
      desc: "Fix SPA 404 errors, environment setup, and OpenGraph social meta tags.",
    },
    {
      icon: HiOutlineTerminal,
      title: "Git & Terminal Troubleshooting",
      desc: "Conventional commits cheat-sheet and immediate fixes for common Git push bugs.",
    },
    {
      icon: HiOutlineSparkles,
      title: "Custom Hooks & Motion",
      desc: "Reusable React custom hooks (useDebounce, useLocalStorage) and Tailwind animation effects.",
    },
  ];

  return (
    <section className="py-20 px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="bg-slate-900/40 border border-white/10 rounded-3xl p-4 sm:p-12 relative overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[11px] font-extrabold tracking-widest uppercase text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Free Developer Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
            Everything You Need To Build & Deploy Faster
          </h2>
          <p className="text-sm text-slate-400">
            Syncxel isn't just a component library. Access our curated knowledge
            hub to solve frontend challenges in seconds.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-10">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-950/60 p-5 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-500/20">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/docs"
            className="inline-flex items-center space-x-2 mt-1 px-6 py-3 bg-cyan-500 text-slate-950 font-bold text-sm rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
            <span>Explore Developer Documentation</span>
            <HiOutlineArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
