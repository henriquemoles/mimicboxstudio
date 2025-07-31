'use client'
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import heroImage1 from '../../assets/hero-1.jpg';
import heroImage2 from '../../assets/hero-2.png';
import heroImage3 from '../../assets/hero-3.jpg';

interface HeroSectionProps {
  onScrollToPortfolio: () => void;
}

export function HeroSection({ onScrollToPortfolio }: HeroSectionProps) {
  const { language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array de imagens para o carrossel
  const heroImages = [heroImage1, heroImage2, heroImage3];

  // Carrossel automático - troca a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Textos específicos por idioma
  const heroContent = {
    pt: {
      title: {
        line1: 'Criamos arte que',
        line2: 'transforma jogos'
      },
      subtitle: {
        line1: 'Especializados em',
        highlight1: 'ilustração digital, concept art',
        line2: 'e design de interfaces para a indústria de jogos.',
        line3: 'Criamos',
        highlight2: 'experiências visuais únicas',
        line4: 'que conectam jogadores aos mundos que imaginamos.'
      }
    },
    en: {
      title: {
        line1: 'We create art that',
        line2: 'transforms games'
      },
      subtitle: {
        line1: 'Specialized in',
        highlight1: 'digital illustration, concept art',
        line2: 'and interface design for the gaming industry.',
        line3: 'We create',
        highlight2: 'unique visual experiences',
        line4: 'that connect players to the worlds we imagine.'
      }
    }
  };

  const content = heroContent[language];

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={`Hero background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Additional gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>
        
        {/* Subtle animated elements - keeping some of the original background effects */}
        <div className="absolute inset-0">
          {/* Geometric shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-mimicbox-yellow/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-mimicbox-yellow/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-mimicbox-yellow/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 229, 0, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Main Content - Left Aligned */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
          <div className="max-w-4xl">
            {/* Main Heading - Simplified and Minimal */}
            <div className="mb-8">
              <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-white mb-6" style={{fontWeight: '300'}}>
                {content.title.line1}
                <br />
                <span className="text-mimicbox-yellow">
                  {content.title.line2}
                </span>
              </h1>
              
              {/* Subtitle with highlights */}
              <div className="font-inter text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl">
                <p className="mb-4">
                  {content.subtitle.line1}{' '}
                  <span className="bg-mimicbox-yellow text-mimicbox-black px-2 py-1 rounded font-medium">
                    {content.subtitle.highlight1}
                  </span>
                  {' '}{content.subtitle.line2}
                </p>
                <p>
                  {content.subtitle.line3}{' '}
                  <span className="bg-mimicbox-yellow text-mimicbox-black px-2 py-1 rounded font-medium">
                    {content.subtitle.highlight2}
                  </span>
                  {' '}{content.subtitle.line4}
                </p>
              </div>
              
              {/* Accent line */}
              <div className="w-24 h-1 bg-gradient-to-r from-mimicbox-yellow to-transparent mt-8"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Centered at bottom of section */}
      <div className="relative z-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex flex-col items-center animate-bounce cursor-pointer" onClick={onScrollToPortfolio}>
              <div className="w-6 h-10 border-2 border-mimicbox-yellow/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-mimicbox-yellow rounded-full mt-2 animate-pulse"></div>
              </div>
              <ArrowDown className="w-4 h-4 text-mimicbox-yellow/70 mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}