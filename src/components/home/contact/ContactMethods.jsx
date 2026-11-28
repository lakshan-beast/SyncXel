// import React from "react";
// import {
//   HiOutlineEnvelope,
//   HiOutlineChatBubbleLeftRight,
//   HiOutlineCodeBracket,
//   HiOutlineArrowUpRight,
// } from "react-icons/hi2";

// import { contactDetails } from "../../../data/contactData";

// const icons = {
//   email: HiOutlineEnvelope,
//   whatsapp: HiOutlineChatBubbleLeftRight,
//   github: HiOutlineCodeBracket,
// };

// export default function ContactMethods() {
//   return (
//     <div className="space-y-2">
//       {contactDetails.map((contact) => {
//         const Icon = icons[contact.id];

//         return (
//           <a
//             key={contact.id}
//             href={contact.href}
//             target={contact.id === "email" ? undefined : "_blank"}
//             rel={contact.id === "email" ? undefined : "noreferrer"}
//             className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/20 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/5">
//             <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-blue-500/10 group-hover:text-blue-600 dark:bg-white/5 dark:text-slate-300 dark:group-hover:text-blue-400">
//               <Icon className="text-2xl" />
//             </span>

//             <span className="min-w-0 flex-1">
//               <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
//                 {contact.label}
//               </span>

//               <span className="mt-0 block truncate text-sm font-semibold text-slate-900 dark:text-white">
//                 {contact.value}
//               </span>

//               <span className="mt-1 block text-xs text-slate-500 dark:text-slate-500">
//                 {contact.description}
//               </span>
//             </span>

//             <HiOutlineArrowUpRight className="shrink-0 text-lg text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500" />
//           </a>
//         );
//       })}
//     </div>
//   );
// }

import React from "react";
import {
  HiOutlineEnvelope,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCodeBracket,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";

import { contactDetails } from "../../../data/contactData";

const icons = {
  email: HiOutlineEnvelope,
  whatsapp: HiOutlineChatBubbleLeftRight,
  github: HiOutlineCodeBracket,
};

export default function ContactMethods() {
  return (
    <div className="space-y-3">
      {contactDetails.map((contact) => {
        const Icon = icons[contact.id];

        if (!Icon) return null;

        const isEmail = contact.id === "email";

        return (
          <a
            key={contact.id}
            href={contact.href}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-[#101a2c] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/25 hover:bg-[#142238]">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/[0.05] bg-white/[0.04] text-slate-300 transition-all duration-300 group-hover:border-emerald-400/10 group-hover:bg-emerald-400/10 group-hover:text-emerald-400">
              <Icon className="text-xl" />
            </span>

            <span className="min-w-0 flex-1">
              <span className="block text-xs font-medium text-slate-500">
                {contact.label}
              </span>

              <span className="mt-1 block truncate text-sm font-semibold text-slate-200">
                {contact.value}
              </span>

              <span className="mt-1 block text-xs text-slate-500">
                {contact.description}
              </span>
            </span>

            <HiOutlineArrowUpRight className="shrink-0 text-lg text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400" />
          </a>
        );
      })}
    </div>
  );
}
