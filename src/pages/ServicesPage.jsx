import React from "react";
import SEO from "../components/common/SEO";

import ServicesHeader from "../components/pages/services/ServicesHeader";
import CoreServices from "../components/pages/services/CoreServices";
import WhatWeBuild from "../components/pages/services/WhatWeBuild";
import ServicesProcess from "../components/pages/services/ServicesProcess";
import ServicesTechStack from "../components/pages/services/ServicesTechStack";
import WhySyncXel from "../components/pages/services/WhySyncXel";
import ServicesFAQ from "../components/pages/services/ServicesFAQ";
import ServicesCTA from "../components/pages/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Web Design & Development Services | SyncXel"
        description="Explore SyncXel web design and development services, including modern website interfaces, responsive layouts and custom frontend solutions."
        path="/services"
      />
      ;
      <main className="min-h-screen overflow-hidden">
        <ServicesHeader />
        <CoreServices />
        <WhatWeBuild />
        <ServicesProcess />
        <ServicesTechStack />
        <WhySyncXel />
        <ServicesFAQ />
        <ServicesCTA />
      </main>
    </>
  );
}
