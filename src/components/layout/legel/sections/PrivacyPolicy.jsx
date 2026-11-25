// import React from "react";
// import { motion } from "framer-motion";

// const sectionVariants = {
//   initial: { opacity: 0.3, x: -30 },
//   whileInView: { opacity: 1, x: 0 },
//   transition: {
//     type: "spring",
//     stiffness: 400,
//     damping: 17,
//   },
// };

// function PolicyCard({ title, children, delay = 0 }) {
//   return (
//     <motion.div
//       {...sectionVariants}
//       transition={{
//         ...sectionVariants.transition,
//         delay,
//       }}
//       className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
//       <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
//         {title}
//       </h3>

//       <p className="text-slate-600 text-xs sm:text-sm font-baloo leading-tight">
//         {children}
//       </p>
//     </motion.div>
//   );
// }

// export default function PrivacyPolicy() {
//   return (
//     <div className="space-y-2">
//       <h2 className="text-2xl font-bold text-slate-900 font-mono">
//         Privacy Policy
//       </h2>

//       <p className="text-slate-600 font-baloo">
//         At SyncXel, accessible at syncxel.vercel.app, we respect your privacy
//         and aim to handle any personal information shared with us responsibly.
//         This policy explains how information may be handled when you use our
//         website and services.
//       </p>

//       <div className="space-y-2 font-mono">
//         <PolicyCard title="1. Information You Provide">
//           When you contact us by email or through our communication channels,
//           you may voluntarily share information such as your name, email
//           address, and message details. We use this information to respond to
//           your inquiries and provide requested support.
//         </PolicyCard>

//         <PolicyCard title="2. Website Usage & Analytics" delay={0.1}>
//           Our hosting provider may process basic technical information required
//           to deliver and maintain the website. Any optional analytics or
//           tracking technologies will be disclosed here if and when they are
//           introduced.
//         </PolicyCard>

//         <PolicyCard title="3. Data Security" delay={0.2}>
//           We take reasonable steps to protect information shared with us.
//           However, no website or method of electronic transmission can be
//           guaranteed to be completely secure.
//         </PolicyCard>

//         <PolicyCard title="4. Information Sharing" delay={0.3}>
//           We do not sell personal information. Information may be shared only
//           where necessary to operate the website, respond to your requests, or
//           comply with applicable legal obligations.
//         </PolicyCard>

//         <PolicyCard title="5. Contact & Privacy Requests" delay={0.4}>
//           If you have questions about this policy or want to request a review of
//           information you have shared with us, contact
//           syncxelofficial@gmail.com.
//         </PolicyCard>

//         {/*
//           ==========================================================
//           FUTURE PAYMENT PROCESSING SECTION
//           ==========================================================

//           Enable this section only after a payment provider has been
//           selected, connected, and verified.

//           Before publishing:
//           1. Add the confirmed payment provider's legal name.
//           2. Explain what billing information the provider handles.
//           3. Explain what transaction information SyncXel can access.
//           4. Link to the provider's privacy policy.
//           5. Confirm the actual checkout and data-sharing process.

//           Example structure (do not enable until verified):

//           <PolicyCard title="6. Payment Processing" delay={0.5}>
//             Payments for eligible digital products are processed by
//             [CONFIRMED PAYMENT PROVIDER]. The provider handles payment
//             information according to its own privacy policy. SyncXel
//             receives only the transaction details required to manage
//             purchases and provide product access.
//           </PolicyCard>
//         */}
//       </div>
//     </div>
//   );
// }

import React from "react";
import PolicySection, { PolicyItem } from "./PolicySection";

export default function PrivacyPolicy() {
  return (
    <PolicySection
      number="01 / PRIVACY"
      title="Privacy Policy"
      description="This policy explains what information may be handled when you visit or communicate with SyncXel.">
      <PolicyItem title="Information We Receive">
        <p>
          SyncXel may receive information that you voluntarily provide when
          contacting us, requesting support, or communicating about our products
          and services.
        </p>
        <p className="mt-3">
          This may include your name, email address, and the details you choose
          to share with us.
        </p>
      </PolicyItem>

      <PolicyItem title="Website Information">
        <p>
          When you visit our website, technical information may be processed by
          our hosting provider to deliver and maintain the website. This may
          include basic connection and server information.
        </p>
      </PolicyItem>

      <PolicyItem title="How We Use Information">
        <ul className="list-disc space-y-2 pl-5">
          <li>To respond to messages and support requests.</li>
          <li>To provide information about our products and services.</li>
          <li>To troubleshoot website or product-related issues.</li>
          <li>To maintain and improve the website experience.</li>
        </ul>
      </PolicyItem>

      <PolicyItem title="Information Sharing">
        <p>
          We do not sell personal information. Information may be shared with
          service providers only when reasonably necessary to operate the
          website or provide a requested service.
        </p>
      </PolicyItem>

      <PolicyItem title="Data Security">
        <p>
          We take reasonable steps to protect information handled through our
          website and communication channels. However, no online service or
          method of transmission can be guaranteed to be completely secure.
        </p>
      </PolicyItem>

      <PolicyItem title="External Links">
        <p>
          Our website may contain links to third-party websites or services.
          Their privacy practices are controlled by their own policies, so we
          recommend reviewing those policies before sharing personal
          information.
        </p>
      </PolicyItem>

      <PolicyItem title="Policy Updates">
        <p>
          This Privacy Policy may be updated as SyncXel develops new features or
          services. Any revised version will be published on this page.
        </p>
      </PolicyItem>

      {/* FUTURE PAYMENT PROCESSING SECTION

        Add this section after selecting and connecting the payment provider.

        Update the policy with:
        - Actual payment provider name.
        - Information collected by that provider.
        - Information shared with SyncXel.
        - Relevant provider privacy policy link.

        Do not publish this section until the payment integration is active.

      <PolicyItem title="Payment Information">
        <p>
          Payments are processed through [PAYMENT PROVIDER].
          SyncXel does not directly store full payment card details.
          Please refer to the provider's privacy policy for more
          information about payment data processing.
        </p>
      </PolicyItem>
      */}
    </PolicySection>
  );
}
