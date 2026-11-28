// import React from "react";
// import { motion, useReducedMotion } from "framer-motion";

// import ContactInfo from "./ContactInfo";
// import ContactForm from "./ContactForm";

// import ContactHeader from "./ContactHeader";

// export default function ContactSection() {
//   const reduceMotion = useReducedMotion();

//   return (
//     <section
//       id="contact-section"
//       className="relative isolate overflow-hidden  px-5 py-24 bg-slate-50 dark:bg-slate-900/80 sm:px-8 lg:px-12 lg:py-32">
//       {/* Background atmosphere */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -right-40 -top-10 h-80 w-80 rounded-full bg-blue-400/50 blur-[120px] dark:bg-blue-500/20" />

//         <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-indigo-400/60 blur-[120px] dark:bg-indigo-500/20" />
//       </div>

//       <div className="relative mx-auto max-w-7xl">
//         <ContactHeader />

//         {/* Main content */}
//         <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
//           <div className="lg:col-span-5">
//             <ContactInfo />
//           </div>

//           <div className="lg:col-span-7">
//             <ContactForm />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";

export default function ContactSection() {
  return (
    <section
      id="contact-section"
      className="relative isolate overflow-hidden bg-[#080f1e] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-20 h-80 w-80 rounded-full bg-emerald-400/[0.07] blur-[120px]" />
        <div className="absolute -bottom-20 -left-40 h-80 w-80 rounded-full bg-teal-400/[0.06] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <ContactHeader />

        <div className="mt-10 grid grid-cols-1 items-start gap-7 lg:grid-cols-12 lg:gap-9">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
