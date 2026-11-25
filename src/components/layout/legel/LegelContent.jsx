import React from "react";

import PrivacyPolicy from "./sections/PrivacyPolicy";
import TermsOfService from "./sections/TermsOfServices";
import RefundPolicy from "./sections/RefundPolicy";

export default function LegalContent({ activeTab }) {
  const content = {
    privacy: <PrivacyPolicy />,
    terms: <TermsOfService />,
    refund: <RefundPolicy />,
  };

  return (
    <div className="text-sm leading-relaxed text-slate-600 font-sans">
      {content[activeTab] || <PrivacyPolicy />}
    </div>
  );
}
