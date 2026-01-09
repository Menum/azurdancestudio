import { lazy, Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

// Lazy load below-the-fold components to reduce initial JS bundle
const About = lazy(() => import("@/components/About").then(m => ({ default: m.About })));
const Gallery = lazy(() => import("@/components/Gallery").then(m => ({ default: m.Gallery })));
const FAQ = lazy(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp").then(m => ({ default: m.FloatingWhatsApp })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Gallery />
        <FAQ />
        <Contact />
        <Footer />
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
};

export default Index;
