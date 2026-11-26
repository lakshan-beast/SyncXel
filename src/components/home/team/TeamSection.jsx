// import React from "react";
// import { motion } from "framer-motion";

// import { HiOutlineCheckBadge, HiBookmark } from "react-icons/hi2";
// import { SiGithub } from "react-icons/si";
// import { SlGlobe } from "react-icons/sl";
// import { RxLinkedinLogo } from "react-icons/rx";
// import { FaTelegramPlane, FaEnvelope, FaDev } from "react-icons/fa";
// import { FaReddit } from "react-icons/fa6";

// import HeroImage1 from "/hero.jpg";
// import HeroImage2 from "/hero.jpg";

// export const teamData = [
//   {
//     id: 1,
//     name: "Lakshan Sandeepa",
//     role: "Founder & Lead Architect",
//     avatar: HeroImage1,
//     status: "Available for Custom Projects",
//     bio: "Passionate about crafting high-performance web applications, clean code, and modern minimalist aesthetics. Building SyncXel to help developers code faster and businesses launch production-ready web platforms.",
//     skills: [
//       "React.js",
//       "TypeScript",
//       "Tailwind CSS",
//       "Framer Motion",
//       "Frontend Architecture",
//       "UI/UX Design",
//     ],
//     socials: {
//       github: "https://github.com/lakshan-beast",
//       linkedin: "https://www.linkedin.com/in/lakshan-sandeepa",
//       portfolio: "https://lakshan-sandeepa-dev.vercel.app/",
//       telegram: "https://t.me/lakshan_dev",
//       mail: "mailto:lakshansandeepa0305@gmail.com",
//       reddit: "https://www.reddit.com/user/lakshan_sandeepa35/",
//       devto: "https://dev.to/lakshan_sandeepa35/",
//     },
//   },
//   // {
//   //   id: 2,
//   //   name: "Teran Chamuditha",
//   //   role: "Cybersecurity Engineer & Backend Developer",
//   //   avatar: HeroImage2, // Cool security avatar
//   //   status: "Auditing Codebases",
//   //   bio: "Software engineer specializing in web application security, ethical hacking, and secure architecture integration.",
//   //   skills: [
//   //     "OWASP Top 10",
//   //     "Penetration Testing",
//   //     "Security Audits",
//   //     "Secure Backend",
//   //   ],
//   //   socials: {
//   //     github: "",
//   //     linkedin: "",
//   //     portfolio: "",
//   //     telegram: "",
//   //     mail: "",
//   //     reddit: "",
//   //     devto: "",
//   //   },
//   // },
// ];

// export default function TeamSection() {
//   return (
//     <section
//       id="team"
//       className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 text-slate-900 border-t-2 border-slate-200">
//       <div className="relative z-10 space-y-12">
//         {/* MEET THE FOUNDER SECTION */}
//         <div className="space-y-8">
//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               type: "spring",
//               stiffness: 400,
//               damping: 17,
//             }}
//             className="text-left space-y-3">
//             <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
//               <motion.span
//                 initial={{ opacity: 0, x: -15 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="font-mono text-xs text-slate-400 block">
//                 // founder_and_architect
//               </motion.span>

//               <motion.div
//                 initial={{ opacity: 0, x: 15 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="inline-flex items-center w-fit space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono shadow-xs">
//                 <HiBookmark className="w-3.5 h-3.5 text-slate-600" />
//                 <span>founder_module.config</span>
//               </motion.div>
//             </div>

//             <motion.h2
//               initial={{ opacity: 0, y: -10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-left sm:text-center pt-1 sm:pt-3">
//               Meet the{" "}
//               <span className="text-slate-900">Founder & Architect</span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: -10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 400,
//                 damping: 17,
//               }}
//               className="text-sm sm:text-base text-slate-500 leading-tight max-w-3xl mx-auto font-baloo text-left sm:text-center">
//               Building modern digital products with a strong focus on
//               high-performance code, clean UI architecture, and seamless user
//               experiences.
//             </motion.p>
//           </motion.div>

//           {/* SOLO FOUNDER & TEAM CARDS */}
//           <div className="space-y-6 max-w-4xl mx-auto">
//             {teamData.map((member, idx) => (
//               <motion.div
//                 key={member.id || idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -4, scale: 1.01 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 className="relative bg-white px-8 sm:px-7 py-6 rounded-3xl border border-slate-200/50 hover:border-slate-300/50 transition-all duration-300 shadow-sm hover:shadow-md">
//                 <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
//                   {/* Profile Image with Hover Animation */}
//                   <motion.div
//                     whileHover={{ scale: 1.03 }}
//                     transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                     className="shrink-0 relative rounded-full">
//                     <motion.img
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       transition={{ duration: 0.6 }}
//                       src={member.avatar}
//                       alt={`${member.name} - ${member.role} of SyncXel`}
//                       className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-slate-200 shadow-sm"
//                     />

//                     <div className="absolute bottom-1 right-1 bg-slate-900 p-2 rounded-full border-2 border-white shadow-sm">
//                       <HiOutlineCheckBadge
//                         className="w-5 h-5 text-white"
//                         title="Verified Creator"
//                       />
//                     </div>
//                   </motion.div>

//                   {/* Founder Bio & Details */}
//                   <div className="space-y-3 text-center md:text-left flex-1 relative">
//                     <div className="space-y-1">
//                       <span className="absolute right-0 top-0 hidden md:block text-emerald-500 text-xs sm:text-sm px-3 py-0.5 border border-emerald-500 rounded-2xl animate-pulse">
//                         {member.status}
//                       </span>
//                       <span className="md:hidden inline-block text-emerald-500 text-xs px-3 py-0.5 border border-emerald-500 rounded-2xl animate-pulse mb-2">
//                         {member.status}
//                       </span>

//                       <span className="font-mono text-[10px] text-slate-400 block">
//                         // lead_engineer_identity_{member.id}
//                       </span>
//                       <motion.h3
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
//                         {member.name}
//                       </motion.h3>
//                       <motion.p
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-slate-500 font-baloo text-xs font-medium border-b border-slate-200 pb-2">
//                         {member.role}{" "}
//                         <span className="text-slate-900 font-bold">
//                           @SyncXel
//                         </span>
//                       </motion.p>
//                     </div>

//                     <motion.p
//                       initial={{ opacity: 0, x: -15 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.6 }}
//                       className="text-xs sm:text-sm text-slate-500 leading-tight font-baloo">
//                       {member.bio}
//                     </motion.p>

//                     {/* Tech Tags */}
//                     <div className="flex flex-wrap gap-1.5 pt-1 justify-center md:justify-start">
//                       {member.skills.map((tag, tIdx) => (
//                         <motion.span
//                           initial={{ opacity: 0.3, x: -30 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           transition={{
//                             type: "spring",
//                             stiffness: 400,
//                             damping: 17,
//                           }}
//                           key={tIdx}
//                           className="px-4 py-1 rounded-full bg-slate-100/50 border border-slate-200 text-[11px] font-baloo text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-200 transition-colors duration-300">
//                           {tag}
//                         </motion.span>
//                       ))}
//                     </div>

//                     {/* Social Links - Dynamic based on available properties */}
//                     <div className="pt-3 flex items-center justify-center md:justify-start space-x-2 border-t border-t-slate-200 sm:border-none">
//                       {[
//                         member.socials?.github && {
//                           href: member.socials.github,
//                           icon: SiGithub,
//                           title: "GitHub Profile",
//                         },
//                         member.socials?.linkedin && {
//                           href: member.socials.linkedin,
//                           icon: RxLinkedinLogo,
//                           title: "Linkedin Profile",
//                         },
//                         member.socials?.portfolio && {
//                           href: member.socials.portfolio,
//                           icon: SlGlobe,
//                           title: "Portfolio",
//                         },
//                         member.socials?.telegram && {
//                           href: member.socials.telegram,
//                           icon: FaTelegramPlane,
//                           title: "Telegram Chat",
//                         },
//                         member.socials?.email && {
//                           href: `mailto:${member.socials.email}`,
//                           icon: FaEnvelope,
//                           title: "Email Chat",
//                         },
//                         member.socials?.reddit && {
//                           href: member.socials.reddit,
//                           icon: FaReddit,
//                           title: "Reddit Profile",
//                         },
//                         member.socials?.devto && {
//                           href: member.socials.devto,
//                           icon: FaDev,
//                           title: "Dev.to Profile",
//                         },
//                       ]
//                         .filter(Boolean)
//                         .map((social, sIdx) => {
//                           const Icon = social.icon;
//                           return (
//                             <motion.a
//                               key={sIdx}
//                               href={social.href}
//                               target="_blank"
//                               rel="noreferrer"

//                               whileHover={{ scale: 1.1, y: -2 }}
//                               whileTap={{ scale: 0.95 }}
//                               transition={{
//                                 delay: 0.2,
//                                 type: "spring",
//                                 stiffness: 400,
//                                 damping: 17,
//                               }}
//                               className="p-2.5 rounded-xl bg-slate-100/50 border border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-xs group"
//                               title={social.title}>
//                               <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
//                             </motion.a>
//                           );
//                         })}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion, useReducedMotion } from "framer-motion";
// import FounderProfile from "./FounderProfile";
// import TeamMemberCard from "./TeamMemberCard";

// export default function TeamSection() {
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <section
//       id="team-section"
//       className="relative isolate overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32 dark:bg-slate-950">
//       {/* Background atmosphere */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-400/10 blur-[120px] dark:bg-blue-500/10" />

//         <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-indigo-400/10 blur-[120px] dark:bg-indigo-500/10" />

//         <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px] dark:opacity-[0.07]" />
//       </div>

//       <div className="mx-auto max-w-7xl">
//         {/* Section heading */}
//         <motion.div
//           initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
//           className="mb-16">
//           <span className="text-xs font-bold tracking-[0.25em] text-blue-600 dark:text-blue-400">
//             THE PEOPLE BEHIND SYNCXEL
//           </span>

//           <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
//             Built with purpose.
//             <br />
//             <span className="text-slate-400 dark:text-slate-500">
//               Driven by ideas.
//             </span>
//           </h2>
//         </motion.div>

//         {/* Founder */}
//         <FounderProfile />

//         {/*
//         =====================================================
//         FUTURE TEAM MEMBERS
//         =====================================================

//         When SyncXel expands, enable this section and add
//         the real team member information.
//         */}
//         {/* <div className="mt-28">
//           <div className="mb-10">
//             <span className="text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400">
//               THE TEAM
//             </span>

//             <h3 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
//               Meet the people behind the work.
//             </h3>
//           </div>

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             <TeamMemberCard
//               name="Team Member One"
//               role="Developer"
//               image="/team/member-1.jpg"
//             />

//             <TeamMemberCard
//               name="Team Member Two"
//               role="Designer"
//               image="/team/member-2.jpg"
//             />

//             <TeamMemberCard
//               name="Team Member Three"
//               role="Developer"
//               image="/team/member-3.jpg"
//             />
//           </div>
//         </div> */}

//         {/* Team Members */}
//         {/* <div className="mt-28">
//           <div className="mb-10">
//             <span className="text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400">
//               THE TEAM
//             </span>

//             <h3 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
//               Meet the people behind the work.
//             </h3>

//             <p className="mt-3 max-w-xl text-sm leading-tight text-slate-600 dark:text-slate-400">
//               A growing team bringing different skills and ideas together to
//               build better digital experiences.
//             </p>
//           </div>

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
//             <TeamMemberCard
//               name="Team Member One"
//               role="Frontend Developer"
//               // image="/team/member-1.jpg"
//               image="/team/member.png"
//             />

//             <TeamMemberCard
//               name="Team Member Two"
//               role="UI/UX Designer"
//               // image="/team/member-2.jpg"
//               image="/team/member.png"
//             />

//             <TeamMemberCard
//               name="Team Member Three"
//               role="Developer"
//               image="/team/member.png"
//             />
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import FounderProfile from "./FounderProfile";

export default function TeamSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="team-section"
      className="relative isolate overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32 dark:bg-slate-950">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-400/10 blur-[120px] dark:bg-blue-500/10" />

        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-indigo-400/10 blur-[120px] dark:bg-indigo-500/10" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]` can be written as `bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]  dark:opacity-[0.07]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" />

              <span className="text-xs font-semibold tracking-[0.25em] text-blue-600 dark:text-blue-400">
                THE PEOPLE BEHIND SYNCXEL
              </span>
            </motion.div>

            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] dark:text-white">
              Built with purpose.{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Driven by ideas.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start gap-6 lg:items-end">
            <p className="max-w-md text-base leading-relaxed text-slate-600 lg:text-right dark:text-slate-400">
              Meet the people and ideas behind SyncXel. We focus on creating
              thoughtful digital experiences through creativity, technology, and
              continuous improvement.
            </p>
          </motion.div>
        </div>

        {/* Founder */}
        <div className="mt-16">
          <FounderProfile />
        </div>

        {/*
          =====================================================
          FUTURE TEAM MEMBERS
          =====================================================

          Enable this section when the SyncXel team expands.
          Replace the sample details with real team information.

          <div className="mt-28">
            <div className="mb-10">
              <span className="text-xs font-semibold tracking-[0.25em] text-blue-600 dark:text-blue-400">
                THE TEAM
              </span>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Meet the people behind the work.
              </h3>

              <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
                A growing team bringing different skills and ideas
                together to build better digital experiences.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <TeamMemberCard
                name="Team Member One"
                role="Frontend Developer"
                image="/team/member.png"
              />

              <TeamMemberCard
                name="Team Member Two"
                role="UI/UX Designer"
                image="/team/member.png"
              />

              <TeamMemberCard
                name="Team Member Three"
                role="Developer"
                image="/team/member.png"
              />
            </div>
          </div>
        */}
      </div>
    </section>
  );
}
