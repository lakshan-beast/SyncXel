import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import HeroSection from "./components/Hero";
import TrustBar from "./components/TrustBar";
import TeckStack from "./components/TeckStack";
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
import SocialProof from "./components/SocailProof";

export default function App() {
  return (
    <Router>
      {/* Container එක relative සහ overflow-hidden තියෙන්න ඕන */}
      <div className="relative min-h-screen bg-syncxel-dark text-white selection:bg-syncxel-cyan selection:text-syncxel-dark flex flex-col justify-between overflow-x-hidden">
        {/* 🌟 FIXED BACKGROUND */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* 1. Grid Pattern */}
          <div className=" inset-0 opacity-20 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [bg-size:24px_24px] animate-pulse" />

          {/* 2. Glow Orbs */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-125 sm:w-175 h-100 bg-cyan-500/20 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute top-[40%] right-[-10%] w-75 sm:w-125 h-125 bg-blue-600/15 blur-[160px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-87.5 sm:w-125 h-100 bg-cyan-600/15 blur-[160px] rounded-full" />
        </div>

        {/* 3. Main Content Wrapper */}
        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <Navbar />

          <main className="pt-24 grow">
            <Routes>
              {/* 1. HOME PAGE ROUTE (/) */}
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <TeckStack />
                    <TrustBar />
                    <Components />
                    <DocsPreviewSection />
                    <SocialProof />
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
                    {/* <Footer /> */}
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
      </div>
    </Router>
  );
}
