import React from "react";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import ServicesSection from "./components/Services";

export default function App() {
  return (
    <div className="min-h-screen bg-syncxel-dark text-white selection:bg-syncxel-cyan selection:text-syncxel-dark">
      <Navbar />

      {/* Hero Section Placeholder */}
      <main className="pt-24">
        <ServicesSection />
      </main>

      <Footer />
    </div>
  );
}
