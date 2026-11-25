// import React from "react";
// import { motion } from "framer-motion";
// import { IoMdMail } from "react-icons/io";

// export default function LegalFooter() {
//   return (
//     <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 font-baloo">
//       <motion.span
//         initial={{ opacity: 0.3, x: -30 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{
//           type: "spring",
//           stiffness: 400,
//           damping: 17,
//         }}
//       >
//         Have custom licensing inquiries or legal questions?
//       </motion.span>

//       <motion.a
//         initial={{ opacity: 0.3, x: 20 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         whileHover={{ scale: 1.1, y: -2 }}
//         whileTap={{ scale: 0.95 }}
//         transition={{
//           delay: 0.2,
//           type: "spring",
//           stiffness: 400,
//           damping: 17,
//         }}
//         href="mailto:syncxelofficial@gmail.com"
//         className="inline-flex items-center gap-1.5 text-slate-800 hover:text-slate-950 transition-colors font-baloo font-medium"
//       >
//         <IoMdMail className="w-4 h-4 text-slate-500" />
//         <span>syncxelofficial@gmail.com</span>
//       </motion.a>
//     </div>
//   );
// }

import React from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";

export default function LegalFooter() {
  return (
    <div className="mt-10 flex flex-col gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">
      <div>
        <p className="text-sm font-semibold text-slate-900 dark:text-white">
          Need clarification?
        </p>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Contact our team if you have questions about these policies.
        </p>
      </div>

      <a
        href="mailto:syncxelofficial@gmail.com"
        className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
        <HiOutlineEnvelope className="text-lg" />
        syncxelofficial@gmail.com
      </a>
    </div>
  );
}
