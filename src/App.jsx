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

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useEffect } from "react";

// import Navbar from "./components/layout/navbar/NavBar";
// import ScrollToTop from "./components/common/ScrollTop";

// import Home from "./pages/HomePage";
// import AllComponents from "./pages/ComponentsPage";
// import AllDocumentation from "./pages/DocsPage";
// import AllTemplates from "./pages/AllTemplatesPage";
// import AllUI from "./pages/AllUIPage";
// import Legal from "./pages/LegalPage";
// import Services from "./pages/ServicesPage";

// import ProjectsPage from "./pages/ProjectsPage";
// import CaseStudyPage from "./components/pages/projects/CaseStudyPage";

// export default function App() {
//   useEffect(() => {
//     if (!location.hash) return;

//     const sectionId = location.hash.substring(1);

//     const frame = requestAnimationFrame(() => {
//       document.getElementById(sectionId)?.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     });

//     return () => cancelAnimationFrame(frame);
//   }, [location.pathname, location.hash]);

//   return (
//     <Router>
//       <div className="relative z-10 flex min-h-screen flex-col">
//         <Navbar />

//         <main className="grow pt-0">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/components" element={<AllComponents />} />
//             <Route path="/docs" element={<AllDocumentation />} />
//             <Route path="/templates" element={<AllTemplates />} />
//             <Route path="/ui-packs" element={<AllUI />} />
//             <Route path="/legal" element={<Legal />} />
//             <Route path="/services" element={<Services />} />

//             <Route path="/projects" element={<ProjectsPage />} />
//             <Route path="/projects/:projectId" element={<CaseStudyPage />} />
//           </Routes>
//         </main>

//         <ScrollToTop />
//       </div>
//     </Router>
//   );
// }

import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/layout/navbar/NavBar";
import ScrollToTop from "./components/common/ScrollTop";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/HomePage"));
const AllComponents = lazy(() => import("./pages/ComponentsPage"));
const AllDocumentation = lazy(() => import("./pages/DocsPage"));
const AllTemplates = lazy(() => import("./pages/AllTemplatesPage"));
const AllUI = lazy(() => import("./pages/AllUIPage"));
const Legal = lazy(() => import("./pages/LegalPage"));
const Services = lazy(() => import("./pages/ServicesPage"));

const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const CaseStudyPage = lazy(
  () => import("./components/pages/projects/CaseStudyPage"),
);

import GeometricSquareLoader from "./components/common/GeometricSquareLoader";

function AppLayout() {
  const location = useLocation();

  // Handle URL hash scrolling
  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.substring(1);

    const frame = requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      <Navbar />

      <main className="grow pt-0">
        <Suspense
          fallback={
            <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-white dark:bg-slate-950">
              <GeometricSquareLoader />
            </div>
          }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<AllComponents />} />
            <Route path="/docs" element={<AllDocumentation />} />
            <Route path="/templates" element={<AllTemplates />} />
            <Route path="/ui-packs" element={<AllUI />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/services" element={<Services />} />

            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<CaseStudyPage />} />
          </Routes>
        </Suspense>
      </main>

      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
