'use client'

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "portfolio",
        "about",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sectionId);
          break;
        }
      }

      // Special case for home section
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 64; // Header height
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handleScrollToPortfolio = () => {
    handleScrollToSection("portfolio");
  };

  const handleProjectSelect = (projectId: string) => {
    router.push(`/${projectId}`);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background dark">
        {/* Header */}
        <Header
          activeSection={activeSection}
          onSectionChange={handleScrollToSection}
        />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <div id="home">
            <HeroSection onScrollToPortfolio={handleScrollToPortfolio} />
          </div>

          {/* Portfolio Section */}
          <PortfolioSection onProjectSelect={handleProjectSelect} />

          {/* About Section */}
          <AboutSection />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1A1A1A",
              color: "#FFE500",
              border: "1px solid #FFE500",
            },
          }}
        />
      </div>
    </LanguageProvider>
  );
}
