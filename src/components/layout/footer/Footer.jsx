import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiArrowUpRight,
  HiArrowUp,
  HiEnvelope,
  HiMapPin,
} from "react-icons/hi2";
import {
  FaGithub,
  FaWhatsapp,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiVite,
  SiVercel,
} from "react-icons/si";

const platformLinks = [
  { label: "Free Components", href: "/components" },
  { label: "UI Packs", href: "/#components-prev" },
  { label: "Full Templates", href: "/#components-prev" },
  { label: "Documentation", href: "/docs" },
];

const serviceLinks = [
  { label: "Business Websites", href: "/#services" },
  { label: "Landing Pages", href: "/#services" },
  { label: "Portfolio Websites", href: "/#services" },
  { label: "Custom Development", href: "/#contact-section" },
];

const exploreLinks = [
  { label: "About SyncXel", href: "/#team" },
  { label: "Our Projects", href: "/#team" },
  { label: "How We Work", href: "/#how-it-works" },
  { label: "Frequently Asked Questions", href: "/#faq" },
];

const technologies = [
  {
    name: "React",
    category: "UI Library",
    icon: FaReact,
    url: "https://react.dev/",
  },
  {
    name: "Next.js",
    category: "Framework",
    icon: SiNextdotjs,
    url: "https://nextjs.org/",
  },
  {
    name: "JavaScript",
    category: "Programming",
    icon: FaJs,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    category: "Programming",
    icon: SiTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: SiTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    name: "HTML5",
    category: "Markup",
    icon: FaHtml5,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    category: "Styling",
    icon: FaCss3Alt,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Motion",
    category: "Animation",
    icon: SiFramer,
    url: "https://motion.dev/",
  },
  {
    name: "Vite",
    category: "Build Tool",
    icon: SiVite,
    url: "https://vite.dev/",
  },
  {
    name: "Figma",
    category: "Design",
    icon: FaFigma,
    url: "https://www.figma.com/",
  },
  {
    name: "GitHub",
    category: "Version Control",
    icon: FaGithub,
    url: "https://github.com/",
  },
  {
    name: "Vercel",
    category: "Deployment",
    icon: SiVercel,
    url: "https://vercel.com/",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/lakshan-beast/SyncXel",
    icon: FaGithub,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/94707046840",
    icon: FaWhatsapp,
  },
  {
    label: "Email",
    href: "mailto:syncxelofficial@gmail.com",
    icon: HiEnvelope,
  },
];

function FooterLink({ href, children }) {
  const className =
    "group inline-flex w-fit items-center gap-1.5 text-[13px] text-slate-500 transition-colors duration-200 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white";

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
        {href.startsWith("http") && (
          <HiArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
        )}
      </a>
    );
  }

  if (href.startsWith("/#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-900 dark:text-white">
        {title}
      </h3>

      <ul className="flex flex-col gap-1.2 pl-1">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink href={link.href}>{link.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechnologyCard({ technology }) {
  const Icon = technology.icon;

  return (
    <a
      href={technology.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl border-l-2 border-l-slate-200/80 bg-white/70 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/5"
      aria-label={`Visit official ${technology.name} website`}>
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-all duration-300 group-hover:bg-slate-600 group-hover:text-white dark:bg-white/[0.07] dark:text-slate-300 dark:group-hover:bg-white dark:group-hover:text-black">
        <Icon aria-hidden="true" focusable="false" className="h-4.75 w-4.75" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-semibold text-slate-800 dark:text-slate-200">
          {technology.name}
        </p>
        <p className="-mt-1 text-[10px] text-slate-400">
          {technology.category}
        </p>
      </div>

      <HiArrowUpRight className="h-3.5 w-3.5 shrink-0 text-slate-400 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
    </a>
  );
}

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.55, ease: "easeOut" },
      };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t-2 border-slate-200/60 rounded-2xl bg-[#f1f1f1] text-slate-900 transition-colors duration-500 dark:border-white/10 dark:bg-slate-950/90 dark:text-white">
      {/* Background atmosphere */}
      {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-60 top-0 h-[450px] w-[450px] rounded-full bg-slate-300/10 blur-[100px] dark:bg-white/[0.15]" />
        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-200/20 blur-[130px] dark:bg-blue-500/[0.25]" />
      </div> */}

      <div className="relative mx-auto max-w-full px-5 sm:px-8 lg:px-10">
        {/* CTA Section */}
        <motion.div
          {...reveal}
          className="relative overflow-hidden border-b border-slate-200/80 py-16 sm:py-18 dark:border-white/20 max-w-5xl mx-auto">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-2 border-slate-300/50 dark:border-white/5" />
          <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border-3 border-slate-300/50 dark:border-white/5" />

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400/70">
                // let's build something meaningful
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                Have an idea?
                <span className="mt-1 block bg-gradient-to-r from-slate-500 via-slate-950 to-slate-500 bg-clip-text text-transparent dark:from-slate-600 dark:via-white dark:to-slate-900">
                  Let's make it real.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-tight text-slate-500 dark:text-slate-400">
                From developer resources to custom digital experiences, let's
                turn your next idea into something worth building.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row lg:shrink-0">
              <a
                href="/#contact-section"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-300">
                Start a Project
                <HiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <Link
                to="/components"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white/60 px-6 py-4 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/20 dark:hover:bg-white/5">
                Explore Resources
                <HiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Navigation */}
        <motion.div
          {...reveal}
          className="grid gap-14 py-16 lg:grid-cols-[1.25fr_2fr] max-w-7xl mx-auto">
          {/* Brand */}
          <div className="">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/logo.webp"
                alt="SyncXel"
                className="h-11 w-12 rounded-full p-0.5  object-cover border border-slate-600"
              />

              <div>
                <span className="block text-2xl font-bold tracking-tight">
                  SyncXel
                </span>
                <span className="mt-0 block font-mono text-[9px] tracking-[0.2em] text-slate-400">
                  DIGITAL EXPERIENCES
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-tight text-slate-500 dark:text-slate-400">
              Building thoughtful digital experiences, useful developer
              resources, and modern web solutions.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-3 py-2.5 text-[11px] font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-white/25 dark:hover:text-white">
                    <Icon  aria-hidden="true" focusable="false" className="h-3.5 w-3.5" />
                    {social.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
              <HiMapPin className="h-4 w-4" />
              Sri Lanka
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3">
            <FooterColumn title="Platform" links={platformLinks} />
            <FooterColumn title="Services" links={serviceLinks} />
            <FooterColumn title="Explore" links={exploreLinks} />
          </div>
        </motion.div>

        {/* Technology Resources */}
        <motion.div
          {...reveal}
          className="border-y border-slate-200/80 py-12 dark:border-white/20 max-w-7xl mx-auto
          ">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400/70">
                // technology_stack_and_resources
              </p>

              <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                Tech Stack & Resources
              </h2>

              <p className="mt-2 text-xs leading-6 text-slate-500 dark:text-slate-400">
                Technologies and tools behind modern digital experiences.
              </p>
            </div>

            <span className="text-[10px] text-slate-400">
              External links · Official websites
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {technologies.map((technology) => (
              <TechnologyCard key={technology.name} technology={technology} />
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 border-t border-slate-200/90 py-8 dark:border-white/20 sm:flex-row items-center sm:items-center sm:justify-between max-w-7xl mx-auto">
          <p className="text-[11px] text-slate-400 text-center sm:text-left">
            Copyright © {new Date().getFullYear()}{" "}
            <span className="text-slate-500 dark:text-white/80">
              {" "}
              SyncXel Web Solutions
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              to="/legal"
              className="text-[11px] text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-white">
              Privacy & Terms
            </Link>

            <a
              href="mailto:syncxelofficial@gmail.com"
              className="text-[11px] text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-white">
              Contact Us
            </a>
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 text-[11px] font-medium text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white">
            Back to top
            <HiArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Brand Statement */}
        <div className="relative overflow-hidden py-4 sm:py-5 pt-6 mb-12 sm:mb-0">
          <p className="pointer-events-none select-none text-center text-[clamp(4rem,13vw,24rem)] font-bold leading-none tracking-[-0.01em] text-slate-200/80 dark:text-white/5 text-shadow-lg dark:shadow-none bg-gradient-to-b from-slate-50 via-slate-500 to-slate-50 bg-clip-text dark:from-slate-950 dark:via-white/50 dark:to-slate-950">
            SYNCXEL .
          </p>

          <p className="mt-1 text-center font-mono text-[9px] uppercase tracking-[0.28em] text-slate-400">
            Built with creativity. Powered by technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
