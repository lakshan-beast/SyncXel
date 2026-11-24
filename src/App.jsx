// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/NavBar";
// import Footer from "./components/Footer";

// import HeroSection from "./components/Hero";
// import ComponentsPreview from "./components/ComponentsPreview";
// import DocsPreview from "./components/DocsPreview";
// import FeaturesSection from "./components/WhyChoose";
// import TeamSection from "./components/TeamSection";
// import ServicesSection from "./components/Services";
// import WorkflowSection from "./components/WorkflowSection";
// import ContactSection from "./components/ContactSection";
// import FaqSection from "./components/FAQSection";

// import AllComponents from "./pages/AllComponentspPage";
// import AllDocumentation from "./pages/AllDocumentationPage";
// import Legal from "./pages/LegelPage";

// import ScrollToTop from "./components/ScrollTop";

// export default function App() {
//   return (
//     <Router>
//       {/* 3. Main Content Wrapper */}
//       <div className="relative z-10 flex flex-col min-h-screen justify-between">
//         <Navbar />

//         {/* 🌟 Optimized Responsive Padding-Top */}
//         <main className="pt-5.5 sm:pt-30.5 md:pt-0 lg:pt-10.5 xl:pt-12 grow">
//           <Routes>
//             {/* 1. HOME PAGE ROUTE (/) */}
//             <Route
//               path="/"
//               element={
//                 <>
//                   <HeroSection />
//                   <ComponentsPreview />
//                   <DocsPreview />
//                   <FeaturesSection />
//                   <TeamSection />
//                   <ServicesSection />
//                   <WorkflowSection />
//                   <ContactSection />
//                   <FaqSection />
//                   <Footer />
//                 </>
//               }
//             />

//             {/* 2. ALL COMPONENTS PAGE ROUTE (/components) */}
//             <Route
//               path="/components"
//               element={
//                 <>
//                   <AllComponents />
//                 </>
//               }
//             />

//             {/* 3. DOCUMENTATION ROUTE (/docs) */}
//             <Route
//               path="/docs"
//               element={
//                 <>
//                   <AllDocumentation />
//                 </>
//               }
//             />

//             {/* 4. LEGAL ROUTE (/legal) */}
//             <Route
//               path="/legal"
//               element={
//                 <>
//                   <Legal />
//                 </>
//               }
//             />
//           </Routes>
//         </main>

//         <ScrollToTop />
//       </div>
//     </Router>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/NavBar";
import ScrollToTop from "./components/ScrollTop";

import Home from "./pages/HomePage";
// import AllComponents from "./pages/allcomponents";
// import AllDocumentation from "./pages/alldocs";
// import AllTemplates from "./pages/alltemplate";
// import AllUI from "./pages/allui";
import Legal from "./pages/LegelPage";
// import Projects from "./pages/projects";
// import Services from "./components/home/services/ServicesSection";

export default function App() {
  return (
    <Router>
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        <main className="grow pt-0">
        {/* <main className="grow pt-5.5 sm:pt-30.5 md:pt-0 lg:pt-10.5 xl:pt-12 bg-red-300"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/components" element={<AllComponents />} /> */}
            {/* <Route path="/docs" element={<AllDocumentation />} /> */}
            {/* <Route path="/templates" element={<AllTemplates />} /> */}
            {/* <Route path="/ui-packs" element={<AllUI />} /> */}
            <Route path="/legal" element={<Legal />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            {/* <Route path="/services" element={<Services />} /> */}
          </Routes>
        </main>

        <ScrollToTop />
      </div>
    </Router>
  );
}
