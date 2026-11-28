// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   HiOutlineArrowRight,
//   HiOutlineChatBubbleLeftRight,
// } from "react-icons/hi2";

// export default function FAQCTA() {
//   return (
//     <div className="mt-9 rounded-3xl border border-black/[0.07] bg-[#f7f8fa] p-6 dark:border-white/10 dark:bg-slate-950/90">
//       <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
//         <HiOutlineChatBubbleLeftRight className="text-xl" />
//       </div>

//       <h3 className="text-lg font-semibold text-[#171717] dark:text-white">
//         Still have questions?
//       </h3>

//       <p className="mt-0 pr-3 text-sm leading-tight text-black/50 dark:text-white/60">
//         Can't find what you're looking for? Let's talk about it.
//       </p>

//       <Link
//         to="/#contact-section"
//         className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all hover:gap-3 dark:text-blue-400">
//         Get in touch
//         <HiOutlineArrowRight />
//       </Link>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineArrowRight,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

export default function FAQCTA() {
  return (
    <div className="mt-9 rounded-2xl border border-white/[0.08] bg-[#101a2c] p-6 sm:p-7">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/10 bg-emerald-400/[0.08] text-emerald-400">
        <HiOutlineChatBubbleLeftRight className="text-xl" />
      </div>

      <h3 className="text-lg font-bold text-white">Still have questions?</h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
        Can't find what you're looking for? Let's talk about it.
      </p>

      <Link
        to="/#contact-section"
        className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-all duration-300 hover:gap-3">
        Get in touch
        <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
