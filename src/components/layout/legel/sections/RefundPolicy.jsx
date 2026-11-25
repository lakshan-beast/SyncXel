// import React from "react";
// import { motion } from "framer-motion";

// export default function RefundPolicy() {
//   return (
//     <div className="space-y-2">
//       <h2 className="text-2xl font-bold text-slate-900 font-mono">
//         Refund Policy
//       </h2>

//       <p className="text-slate-600 font-baloo leading-tight">
//         SyncXel offers digital products such as UI Packs and Full Templates.
//         Because these products may be delivered through digital downloads,
//         refund requests are reviewed based on the circumstances of each case.
//       </p>

//       <div className="space-y-2 font-mono">
//         <motion.div
//           initial={{ opacity: 0.3, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{
//             type: "spring",
//             stiffness: 400,
//             damping: 17,
//           }}
//           className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
//           <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
//             1. Digital Product Purchases
//           </h3>

//           <p className="text-slate-700 text-xs sm:text-sm font-baloo leading-tight">
//             Refund eligibility may be limited once a digital product has been
//             successfully delivered or downloaded. However, each request will be
//             considered according to the issue and applicable consumer rights.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0.3, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{
//             delay: 0.1,
//             type: "spring",
//             stiffness: 400,
//             damping: 17,
//           }}
//           className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
//           <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
//             2. Eligible Issues
//           </h3>

//           <p className="text-slate-700 text-xs sm:text-sm font-baloo leading-tight">
//             You may contact us if you experience a corrupted archive, a missing
//             or incorrect product file, a critical delivery failure, or a
//             duplicate or incorrect charge. We will review the issue and
//             determine an appropriate solution, which may include a corrected
//             file, replacement, or refund where applicable.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0.3, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{
//             delay: 0.2,
//             type: "spring",
//             stiffness: 400,
//             damping: 17,
//           }}
//           className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
//           <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
//             3. How to Request Assistance
//           </h3>

//           <p className="text-slate-700 text-xs sm:text-sm font-baloo leading-tight">
//             Contact our support team with your order details and a description
//             of the issue. Where possible, contact us within 7 days of the
//             purchase so we can investigate and assist you.
//           </p>

//           <a
//             href="mailto:syncxelofficial@gmail.com"
//             className="inline-flex text-slate-950 underline font-baloo font-semibold text-xs sm:text-sm">
//             syncxelofficial@gmail.com
//           </a>
//         </motion.div>
//       </div>

//       <p className="text-slate-500 text-xs font-baloo pt-2 leading-tight">
//         Nothing in this policy is intended to limit any consumer rights that
//         cannot legally be excluded.
//       </p>
//     </div>
//   );
// }

import React from "react";
import PolicySection, { PolicyItem } from "./PolicySection";

export default function RefundPolicy() {
  return (
    <PolicySection
      number="03 / REFUNDS"
      title="Refund Policy"
      description="Our approach to refund requests, digital product delivery issues, and purchase-related problems.">
      <PolicyItem title="Digital Products">
        <p>
          SyncXel offers digital products such as UI Packs and Full Templates.
          Because digital products can be delivered and accessed electronically,
          refund requests are reviewed individually based on the circumstances
          of each purchase.
        </p>
      </PolicyItem>

      <PolicyItem title="When You Can Contact Us">
        <p>You can contact us if you experience any of the following:</p>

        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>A purchased product is missing or was not delivered.</li>
          <li>A downloaded archive is corrupted or cannot be extracted.</li>
          <li>
            The delivered files are materially different from the product
            description.
          </li>
          <li>You were charged more than once for the same purchase.</li>
          <li>A billing or payment-related discrepancy occurred.</li>
        </ul>
      </PolicyItem>

      <PolicyItem title="How to Request a Refund">
        <p>
          Send an email to our support address with your purchase details and a
          clear explanation of the issue.
        </p>

        <p className="mt-3">
          Where possible, include relevant screenshots or other information that
          helps us investigate the request.
        </p>
      </PolicyItem>

      <PolicyItem title="Review Process">
        <p>
          We review each request and may first offer a replacement file,
          corrected download, or another reasonable solution when appropriate.
        </p>
        <p className="mt-3">
          If a refund is approved, the available refund method and processing
          time may depend on the payment provider used for that transaction.
        </p>
      </PolicyItem>

      <PolicyItem title="Consumer Rights">
        <p>
          This policy does not limit any consumer rights or legal protections
          that cannot be excluded under applicable law.
        </p>
      </PolicyItem>
    </PolicySection>
  );
}
