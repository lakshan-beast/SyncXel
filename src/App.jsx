import React from "react";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import ServicesSection from "./components/Services";
import FeaturesSection from "./components/Features";

export default function App() {
  return (
    <div className="min-h-screen bg-syncxel-dark text-white selection:bg-syncxel-cyan selection:text-syncxel-dark ">
      <Navbar />

      {/* Hero Section Placeholder */}
      <main className="pt-24">
        {/* Features / Benefits Grid */}
        <FeaturesSection />

        {/* Client Services & Hire Us */}
        <ServicesSection />
      </main>

      <Footer />
    </div>
  );
}
