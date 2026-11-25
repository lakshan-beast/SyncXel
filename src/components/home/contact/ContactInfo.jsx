import React from "react";
import ContactHeader from "./ContactHeader";
import ContactMethods from "./ContactMethods";
import InquirySteps from "./InquirySteps";

export default function ContactInfo() {
  return (
    <div className="flex h-full flex-col justify-center">
      {/* <ContactHeader /> */}
      <ContactMethods />
      <InquirySteps />
    </div>
  );
}
