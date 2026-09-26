import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import HeroSection from "./components/Hero";
import Components from "./components/ComponentsPreview";
import DocsPreviewSection from "./components/DocsPreview";
import FeaturesSection from "./components/WhyChoose";
import TeamSection from "./components/TeamSection";
import ServicesSection from "./components/Services";
import WorkflowSection from "./components/WorkflowSection";
import ContactSection from "./components/ContactSection";
import FaqSection from "./components/FAQSection";

import AllComponents from "./pages/AllComponentsNew";
import Documentation from "./pages/Documentation";
import Legal from "./pages/Legel";

import ScrollToTop from "./components/ScrollTop";

export default function App() {
  return (
    <Router>
      {/* 3. Main Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <Navbar />

        {/* 🌟 Optimized Responsive Padding-Top */}
        <main className="pt-5.5 sm:pt-30.5 md:pt-0 lg:pt-10.5 xl:pt-12 grow">
          <Routes>
            {/* 1. HOME PAGE ROUTE (/) */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <Components />
                  <DocsPreviewSection />
                  <FeaturesSection />
                  <TeamSection />
                  <ServicesSection />
                  <WorkflowSection />
                  <ContactSection />
                  <FaqSection />
                  <Footer />
                </>
              }
            />

            {/* 2. ALL COMPONENTS PAGE ROUTE (/components) */}
            <Route
              path="/components"
              element={
                <>
                  <AllComponents />
                </>
              }
            />

            {/* 3. DOCUMENTATION ROUTE (/docs) */}
            <Route
              path="/docs"
              element={
                <>
                  <Documentation />
                </>
              }
            />

            {/* 4. LEGAL ROUTE (/legal) */}
            <Route
              path="/legal"
              element={
                <>
                  <Legal />
                </>
              }
            />
          </Routes>
        </main>

        <ScrollToTop />
      </div>
    </Router>
  );
}
