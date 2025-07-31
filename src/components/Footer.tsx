import { Heart, Code } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logoImage from '../assets/logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' }
  ];

  const services = [
    t('footer.service1'),
    t('footer.service2'),
    t('footer.service3'),
    t('footer.service4'),
    t('footer.service5'),
    t('footer.service6')
  ];

  return (
    <footer className="bg-mimicbox-black text-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                  src={logoImage.src} 
                alt="Mimicbox Studio" 
                className="h-10 w-auto mb-4"
              />
              <p className="text-mimicbox-gray max-w-md">
                {t('footer.description')}
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-mimicbox-gray">
              <span>{t('footer.made.with')}</span>
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              <span>{t('footer.made.and')}</span>
              <Code className="w-4 h-4 text-mimicbox-yellow" />
              <span>{t('footer.made.by')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-orbitron text-lg text-white mb-6">{t('footer.links')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-mimicbox-gray hover:text-mimicbox-yellow transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-orbitron text-lg text-white mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-mimicbox-gray">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-mimicbox-gray/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-mimicbox-gray">
              © {currentYear} Mimicbox Studio. {t('footer.copyright')}
            </div>
            
            <div className="flex space-x-6 text-sm text-mimicbox-gray">
              <a 
                href="#" 
                className="hover:text-mimicbox-yellow transition-colors duration-300"
              >
                {t('footer.privacy')}
              </a>
              <a 
                href="#" 
                className="hover:text-mimicbox-yellow transition-colors duration-300"
              >
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}