// import React from "react";
// import { motion } from "framer-motion";

// function PolicyCard({ title, children, delay = 0 }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0.3, x: -30 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{
//         delay,
//         type: "spring",
//         stiffness: 400,
//         damping: 17,
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

// export default function TermsOfService() {
//   return (
//     <div className="space-y-2">
//       <h2 className="text-2xl font-bold text-slate-900 font-mono">
//         Terms of Service & Licensing
//       </h2>

//       <p className="text-slate-600 font-baloo leading-tight">
//         By accessing, downloading, or purchasing digital resources from SyncXel,
//         you agree to follow these terms. Please review them before using our
//         components, UI Packs, or Full Templates.
//       </p>

//       <div className="space-y-2 font-mono">
//         <PolicyCard title="1. Free Resources License">
//           Resources marked as Free may be used in personal and commercial
//           projects without charge. Attribution is appreciated but not mandatory.
//           You may modify these resources as needed for your own projects.
//         </PolicyCard>

//         <PolicyCard title="2. Premium UI Packs & Full Templates" delay={0.1}>
//           Purchasing a premium UI Pack or Full Template grants you a
//           non-exclusive license to use and modify the included materials in your
//           own personal, business, or client projects, subject to the applicable
//           product license.
//         </PolicyCard>

//         <PolicyCard title="3. Redistribution & Resale" delay={0.2}>
//           You may not redistribute, resell, sublicense, or share purchased
//           source files as standalone components, UI Packs, or templates. You may
//           not present SyncXel materials as your own original product for resale.
//         </PolicyCard>

//         <PolicyCard title="4. Customization & Support" delay={0.3}>
//           Any customization, installation assistance, or additional support is
//           provided only where it is included in the product description or
//           separately agreed with SyncXel.
//         </PolicyCard>

//         <PolicyCard title="5. Updates" delay={0.4}>
//           Product updates may be provided while the relevant product remains
//           actively maintained and available. The exact update and support scope
//           may vary by product.
//         </PolicyCard>

//         <PolicyCard title="6. Intellectual Property" delay={0.5}>
//           SyncXel retains ownership of its original branding, product
//           presentation, and source materials, except for third-party resources
//           that remain subject to their respective licenses.
//         </PolicyCard>

//         <PolicyCard title="7. Limitation of Liability" delay={0.6}>
//           Digital resources are provided for development use. We do not
//           guarantee that every resource will work without modification in every
//           project, environment, or third-party software setup. You are
//           responsible for testing and reviewing materials before using them in
//           production.
//         </PolicyCard>
//       </div>
//     </div>
//   );
// }

import React from "react";
import PolicySection, { PolicyItem } from "./PolicySection";

export default function TermsOfService() {
  return (
    <PolicySection
      number="02 / TERMS"
      title="Terms of Service"
      description="These terms apply when accessing SyncXel, using free resources, or purchasing digital products.">
      <PolicyItem title="Using SyncXel">
        <p>
          By accessing or using SyncXel, you agree to follow these terms and use
          the website and its resources responsibly. If you do not agree with
          these terms, please discontinue using the relevant services.
        </p>
      </PolicyItem>

      <PolicyItem title="Free Resources">
        <p>
          Free resources are provided for learning, development, and project
          use. Unless a specific resource states otherwise, you may use them in
          personal and commercial projects.
        </p>
        <p className="mt-3">
          You must not redistribute or sell the original resource files as
          standalone products.
        </p>
      </PolicyItem>

      <PolicyItem title="Paid Products">
        <p>
          SyncXel may offer paid UI Packs and Full Templates. Each product is
          supplied with its applicable product description and usage conditions.
        </p>
        <p className="mt-3">
          Purchasing a product grants you permission to use its included
          resources in your own projects. It does not transfer ownership or
          copyright of the original source files.
        </p>
      </PolicyItem>

      <PolicyItem title="Restrictions">
        <p>You must not:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            Resell, redistribute, or sublicense source files as standalone
            products.
          </li>
          <li>
            Claim ownership or authorship of the original SyncXel resources.
          </li>
          <li>
            Share paid downloads publicly or provide unauthorized access to
            purchased files.
          </li>
          <li>Use the website or its resources for unlawful activities.</li>
        </ul>
      </PolicyItem>

      <PolicyItem title="Product Updates & Support">
        <p>
          Product updates and support availability may vary depending on the
          product purchased. Any included support or update conditions will be
          described with the relevant product.
        </p>
      </PolicyItem>

      <PolicyItem title="Intellectual Property">
        <p>
          SyncXel branding, original designs, documentation, and product
          materials remain the property of their respective owners. Purchasing a
          digital product does not transfer intellectual property ownership.
        </p>
      </PolicyItem>

      <PolicyItem title="Changes to Products & Terms">
        <p>
          We may update, modify, or discontinue website features, resources, or
          products. These terms may also be revised when necessary. Updated
          terms will be published on this page.
        </p>
      </PolicyItem>

      <PolicyItem title="Limitation of Liability">
        <p>
          SyncXel resources are provided on an as-available basis. We make
          reasonable efforts to provide usable products, but cannot guarantee
          that every resource will work in every environment or with every
          third-party tool.
        </p>
        <p className="mt-3">
          Nothing in these terms excludes rights or protections that cannot
          legally be excluded under applicable law.
        </p>
      </PolicyItem>
    </PolicySection>
  );
}
