import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineArrowRight,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

export default function FAQCTA() {
  return (
    <div className="mt-9 rounded-3xl border border-black/[0.07] bg-[#f7f8fa] p-6 dark:border-white/10 dark:bg-slate-950/90">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
        <HiOutlineChatBubbleLeftRight className="text-xl" />
      </div>

      <h3 className="text-base font-semibold text-[#171717] dark:text-white">
        Still have questions?
      </h3>

      <p className="mt-2 text-sm leading-tight text-black/50 dark:text-white/45">
        Can't find what you're looking for? Let's talk about it.
      </p>

      <Link
        to="/#contact-section"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all hover:gap-3 dark:text-blue-400">
        Get in touch
        <HiOutlineArrowRight />
      </Link>
    </div>
  );
}
