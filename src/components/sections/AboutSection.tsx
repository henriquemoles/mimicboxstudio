import { Users } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { useLanguage } from '../../contexts/LanguageContext';
import pedroImage from '../../assets/team/pedro.png';
import hygorImage from '../../assets/team/hygor.jpg';
import trinorLogo from '../../assets/clients/cliente trinorentertainment.png';
import sid8Logo from '../../assets/clients/cliente SID-8.png';
import boostedRealityLogo from '../../assets/clients/cliente Booosted REALITY.png';
import direwolfLogo from '../../assets/clients/Cliente DireWolf.png';
import clientWhiteLogo from '../../assets/clients/cliente lone coconut.png';
import clientPartnerLogo from '../../assets/clients/Cliente Ghost Galaxy.webp';

const clients = [
  { name: 'Trinor Entertainment', logo: trinorLogo, className: '' },
  { name: 'SID-8', logo: sid8Logo, className: 'invert' },
  { name: 'Boosted Reality', logo: boostedRealityLogo, className: '' },
  { name: 'Direwolf', logo: direwolfLogo, className: '' },
  { name: 'Lone Coconut', logo: clientWhiteLogo, className: '' },
  { name: 'Ghost Galaxy', logo: clientPartnerLogo, className: '' }
];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-anton text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 uppercase tracking-wide">
            {t('about.title')}
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Studio Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="font-anton text-2xl text-foreground mb-6 uppercase tracking-wide">
              {t('about.history.title')}
            </h3>
            <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
              {t('about.history.p1')}
            </p>
            <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
              {t('about.history.p2')}
            </p>
            <div className="flex items-center space-x-4">
              <Users className="w-8 h-8 text-mimicbox-yellow" />
              <span className="text-foreground font-anton uppercase tracking-wide">{t('about.partnership')}</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-card p-8 rounded-lg shadow-lg hover-lift border border-border">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4 border-mimicbox-yellow">
                    <img 
                      src={pedroImage.src} 
                      alt="Pedro" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-anton text-foreground mb-2 uppercase tracking-wide">Pedro</h4>
                  <p className="font-inter text-sm text-muted-foreground">{t('about.pedro')}</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4 border-mimicbox-yellow">
                    <img 
                      src={hygorImage.src} 
                      alt="Hygor" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-anton text-foreground mb-2 uppercase tracking-wide">Hygor</h4>
                  <p className="font-inter text-sm text-muted-foreground">{t('about.hygor')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-anton text-2xl sm:text-3xl text-foreground mb-4 uppercase tracking-wide">
              {t('about.clients.title')}
            </h3>
            <p className="font-inter text-muted-foreground">
              {t('about.clients.subtitle')}
            </p>
          </div>

          {/* Clients Grid - With Cards for Better Visibility */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <Card 
                key={index}
                className="bg-card border border-border hover-lift transition-all duration-300 hover:border-mimicbox-yellow/30"
              >
                <CardContent className="p-6 flex items-center justify-center">
                  <img
                    src={client.logo.src}
                    alt={client.name}
                    className={`h-12 w-auto object-contain max-w-full filter brightness-90 hover:brightness-100 transition-all duration-300 ${client.className}`}
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="font-anton text-3xl sm:text-4xl text-mimicbox-yellow mb-2">50+</div>
              <p className="font-inter text-muted-foreground">{t('about.stats.projects')}</p>
            </div>
            <div className="text-center">
              <div className="font-anton text-3xl sm:text-4xl text-mimicbox-yellow mb-2">6+</div>
              <p className="font-inter text-muted-foreground">{t('about.stats.clients')}</p>
            </div>
            <div className="text-center">
              <div className="font-anton text-3xl sm:text-4xl text-mimicbox-yellow mb-2">3+</div>
              <p className="font-inter text-muted-foreground">{t('about.stats.experience')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}