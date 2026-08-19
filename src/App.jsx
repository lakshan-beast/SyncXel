import React from "react";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import HeroSection from "./components/Hero";
import TeckStack from "./components/TeckStack";
import ServicesSection from "./components/Services";
import TeamSection from "./components/TeamSection";
import FaqSection from "./components/FAQ";
import FeaturesSection from "./components/Features";

export default function App() {
  return (
    <div className="min-h-screen bg-syncxel-dark text-white selection:bg-syncxel-cyan selection:text-syncxel-dark ">
      <Navbar />

      {/* Hero Section Placeholder */}
      <main className="pt-24">
        <HeroSection />
        <TeckStack />

        {/* Features / Benefits Grid */}
        <FeaturesSection />

        {/* Client Services & Hire Us */}
        <ServicesSection />
        {/* proof */}
        <TeamSection />
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}
