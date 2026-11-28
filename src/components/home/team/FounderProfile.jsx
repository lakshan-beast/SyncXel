// import { motion, useReducedMotion } from "framer-motion";
// import { HiOutlineArrowUpRight, HiOutlineEnvelope } from "react-icons/hi2";

// export default function FounderProfile() {
//   // socials: {
//   //   github: "https://github.com/lakshan-beast",
//   //   linkedin: "https://www.linkedin.com/in/lakshan-sandeepa",
//   //   portfolio: "https://lakshan-sandeepa-dev.vercel.app/",
//   //   telegram: "https://t.me/lakshan_dev",
//   //   mail: "syncxelofficial@gmail.com",
//   // },

//   const socialLinks = [
//     {
//       key: "github",
//       icon: SiGithub,
//       label: "GitHub",
//       href: member.socials?.github,
//     },
//     {
//       key: "linkedin",
//       icon: RxLinkedinLogo,
//       label: "LinkedIn",
//       href: member.socials?.linkedin,
//     },
//     {
//       key: "portfolio",
//       icon: SlGlobe,
//       label: "Portfolio",
//       href: member.socials?.portfolio,
//     },
//     {
//       key: "telegram",
//       icon: FaTelegramPlane,
//       label: "Telegram",
//       href: member.socials?.telegram,
//     },
//     {
//       key: "mail",
//       icon: FaEnvelope,
//       label: "Email",
//       href: member.socials?.mail ? `mailto:${member.socials.mail}` : null,
//     },
//   ].filter((social) => social.href);

//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
//       {/* Founder portrait */}
//       <motion.div
//         initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
//         className="relative mx-auto w-full max-w-105">
//         <div className="absolute -inset-3 rounded-[2rem] border border-slate-200/80 dark:border-slate-700/60" />

//         <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-slate-100 dark:bg-slate-900">
//           <img
//             src="/hero.jpg"
//             alt="Lakshan Sandeepa - Founder of SyncXel"
//             className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
//             loading="lazy"
//           />

//           <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/50 to-transparent" />

//           <div className="absolute bottom-5 left-5">
//             <span className="rounded-full border border-white/20 bg-slate-950/50 px-4 py-2 text-xs font-medium tracking-wider text-white backdrop-blur-md">
//               FOUNDER @ SYNCXEL
//             </span>
//           </div>
//         </div>

//         {/* Decorative accent */}
//         <div className="absolute -right-5 -top-5 -z-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
//       </motion.div>

//       {/* Founder information */}
//       <motion.div
//         initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{
//           duration: shouldReduceMotion ? 0 : 0.7,
//           delay: shouldReduceMotion ? 0 : 0.1,
//         }}
//         className="flex flex-col items-start">
//         <span className="text-xs font-bold tracking-[0.25em] text-blue-600 dark:text-blue-400">
//           MEET THE FOUNDER
//         </span>

//         <h3 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-slate-900 sm:text-7xl xl:text-8xl dark:text-white">
//           Founder<span className="text-blue-500">.</span>
//         </h3>

//         <div className="mt-7">
//           <h4 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
//             Lakshan Sandeepa
//           </h4>

//           <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
//             Founder & Lead Developer
//           </p>
//         </div>

//         <p className="mt-7 max-w-xl text-sm leading-tight text-slate-600 sm:text-base dark:text-slate-400">
//           Building SyncXel around a simple idea — making quality digital
//           experiences and development resources more accessible. Focused on
//           frontend development, thoughtful UI design, and creating practical
//           digital products for developers and businesses.
//         </p>

//         {/* Expertise */}
//         <div className="mt-7 flex flex-wrap gap-2">
//           {["Frontend Development", "UI Engineering", "Digital Products"].map(
//             (item) => (
//               <span
//                 key={item}
//                 className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
//                 {item}
//               </span>
//             ),
//           )}
//         </div>

//         {/* Social links */}
//         <div className="mt-9 flex flex-wrap items-center gap-3">
//           <a
//             href="https://github.com/lakshan-beast"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white">
//             GitHub
//             <HiOutlineArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//           </a>

//           <a
//             href="mailto:lakshansandeepa0305@gmail.com"
//             className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400">
//             <HiOutlineEnvelope className="h-4 w-4" />
//             Get in touch
//           </a>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

import { motion, useReducedMotion } from "framer-motion";
import { HiOutlineArrowUpRight, HiOutlineEnvelope } from "react-icons/hi2";
import {
  FaGithub,
  FaLinkedinIn,
  FaGlobe,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const founderSocials = [
  {
    label: "GitHub",
    icon: FaGithub,
    href: "https://github.com/lakshan-beast",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/lakshan-sandeepa",
  },
  {
    label: "Portfolio",
    icon: FaGlobe,
    href: "https://lakshan-sandeepa-dev.vercel.app/",
  },
  {
    label: "Telegram",
    icon: FaTelegramPlane,
    href: "https://t.me/lakshan_dev",
  },
  {
    label: "Whatsapp",
    icon: FaWhatsapp,
    href: "https://wa.me/94707046840",
  },
];

export default function FounderProfile() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      {/* Founder portrait */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
        className="relative mx-auto w-full max-w-105">
        <div className="absolute -inset-3 rounded-4xl border border-slate-200/80 dark:border-slate-700/60" />

        <div className="relative aspect-square overflow-hidden rounded-[1.6rem] bg-slate-100 dark:bg-slate-900">
          <img
            src="/hero.jpg"
            alt="Lakshan Sandeepa - Founder of SyncXel"
            className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03] sm:grayscale-50 hover:grayscale-0 "
            loading="lazy"
          />

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/50 to-transparent" />

          <div className="absolute bottom-5 left-5">
            <span className="rounded-full border border-white/20 bg-slate-950/50 px-4 py-2 text-xs font-medium tracking-wider text-white backdrop-blur-md">
              FOUNDER @ SYNCXEL
            </span>
          </div>
        </div>

        {/* Decorative accent */}
        <div className="absolute -right-5 -top-5 -z-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
      </motion.div>

      {/* Founder information */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.7,
          delay: shouldReduceMotion ? 0 : 0.1,
        }}
        className="flex flex-col items-start">
        <span className="text-xs font-bold tracking-[0.25em] text-blue-600 dark:text-blue-400">
          MEET THE FOUNDER
        </span>

        <h3 className="mt-3 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-slate-900 sm:text-7xl xl:text-8xl dark:text-white">
          Founder<span className="text-blue-500">.</span>
        </h3>

        <div className="mt-3">
          <h4 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Lakshan Sandeepa
          </h4>

          <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
            Founder & Lead Developer
          </p>
        </div>

        <p className="mt-3 max-w-xl text-sm leading-tight text-slate-600 sm:text-base dark:text-slate-400">
          Building SyncXel around a simple idea — making quality digital
          experiences and development resources more accessible. Focused on
          frontend development, thoughtful UI design, and creating practical
          digital products for developers and businesses.
        </p>

        {/* Expertise */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["Frontend Development", "UI Engineering", "Digital Products"].map(
            (item) => (
              <span
                key={item}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                {item}
              </span>
            ),
          )}
        </div>

        {/* Social links */}
        <div className="mt-4 pt-4 border-t-2 border-t-slate-300/10 flex flex-wrap items-center gap-3">
          {founderSocials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${social.label} profile`}
                title={social.label}
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700/50 dark:bg-slate-950 dark:text-slate-300/50 dark:hover:border-blue-500/50 dark:hover:bg-blue-500/10 dark:hover:text-blue-400">
                <Icon className="h-4.5 w-4.5" />
              </a>
            );
          })}

          <a
            href="mailto:syncxelofficial@gmail.com"
            className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white mt-3 sm:mt-0">
            <HiOutlineEnvelope className="h-4 w-4" />
            Get in touch
            <HiOutlineArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
