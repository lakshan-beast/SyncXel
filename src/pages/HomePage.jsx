import React from "react";

import HeroSection from "../components/home/hero/Hero";
import ComponentsPreview from "../components/home/sections/ComponentsPreview";
import DocsPreview from "../components/home/docs-preview/DocsPreviewSection";
import FeaturesSection from "../components/home/features/FeaturesSection";
import TeamSection from "../components/home/team/TeamSection";
import ServicesSection from "../components/home/services/ServicesSection";
import WorkflowSection from "../components/home/workflow/WorkflowSection";
import ContactSection from "../components/home/contact/ContactSection";
import FaqSection from "../components/home/faqs/FAQsSection";
import Footer from "../components/layout/footer/Footer";

import TechStack from "../components/home/hero/TechStack";

import SEO from "../components/common/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="SyncXel - Premium UI Components & Website Templates"
        description="Explore modern UI components, premium UI packs and website templates designed to help developers build beautiful websites faster."
        path="/"
      />

      <HeroSection />
      <TechStack />
      <ComponentsPreview />
      <DocsPreview />
      <FeaturesSection />
      <TeamSection />
      <ServicesSection />
      <WorkflowSection />
      <ContactSection />
      <FaqSection />
      <Footer />
    </>
  );
}
