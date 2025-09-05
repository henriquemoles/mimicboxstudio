'use client';

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Head from 'next/head';

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { projects } from '@/data/projects';

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();
const preloadImages = [
  "/assets/projects/nidalee/nida3.avif",
  "/assets/projects/hero-1.avif",
  "/assets/projects/hero-2.avif",
  ...projects.slice(0, 6).map(p => p.image),
];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "portfolio", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sectionId);
          break;
        }
      }

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
        const headerHeight = 64;
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
    router.push(`/project?projectId=${projectId}`);
  };

  return (
    <LanguageProvider>
      <Head>
        {preloadImages.map((src, index) => (
          <link
            key={index}
            rel="preload"
            as="image"
            href={src}
            fetchPriority="high"
          />
        ))}
      </Head>

      <div className="min-h-screen bg-background dark">
        <Header
          activeSection={activeSection}
          onSectionChange={handleScrollToSection}
        />

        <main>
          <div id="home">
            <HeroSection onScrollToPortfolio={handleScrollToPortfolio} />
          </div>

          <PortfolioSection onProjectSelect={handleProjectSelect} />

          <AboutSection />

          <ContactSection />
        </main>

        <Footer />

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
