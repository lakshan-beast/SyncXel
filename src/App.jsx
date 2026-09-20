import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import HeroSection from "./components/Hero";
import ServicesSection from "./components/Services";
import TeamSection from "./components/TeamSection";
import FaqSection from "./components/FAQ";
import FeaturesSection from "./components/WhyChoose";
import Components from "./components/Components";

import AllComponents from "./pages/AllComponentsNew";
import Legal from "./pages/Legel";
import Documentation from "./pages/Documentation";

import ScrollToTop from "./components/ScrollTop";

import DocsPreviewSection from "./components/DocsPreview";

export default function App() {
  return (
    <Router>
      {/* 3. Main Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <Navbar />

        <main className="pt-16 md:pt-20 lg:pt-24 grow">
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
