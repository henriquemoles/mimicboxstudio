'use client'
import { Mail, Instagram, ExternalLink, Palette, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { useLanguage } from '../../contexts/LanguageContext';



export function ContactSection() {
  const { t } = useLanguage();

  const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      description: t('contact.email.description'),
      icon: Mail,
      action: t('contact.email.action'),
      link: 'mailto:mimicboxstudio@gmail.com',
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      id: 'instagram',
      title: 'Instagram',
      description: t('contact.instagram.description'),
      icon: Instagram,
      action: t('contact.instagram.action'),
      link: 'https://instagram.com/mimicboxstudio',
      color: 'bg-gradient-to-r from-purple-600 to-pink-600',
      hoverColor: 'hover:from-purple-700 hover:to-pink-700'
    },
    {
      id: 'artstation',
      title: 'ArtStation',
      description: t('contact.artstation.description'),
      icon: Palette,
      action: t('contact.artstation.action'),
      link: 'https://artstation.com/mimicboxstudio',
      color: 'bg-gray-700',
      hoverColor: 'hover:bg-gray-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-mimicbox-gray-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-mimicbox-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-mimicbox-yellow/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-mimicbox-yellow/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-anton text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 uppercase tracking-wide">
            {t('contact.title')}
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('contact.subtitle')}
          </p>
          
          {/* Creative Visual Element */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-mimicbox-yellow"></div>
            <MessageCircle className="w-8 h-8 text-mimicbox-yellow" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-mimicbox-yellow"></div>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method) => {
            const IconComponent = method.icon;
            
            return (
              <Card 
                key={method.id}
                className="bg-card border-border hover-lift group cursor-pointer transition-all duration-500 hover:border-mimicbox-yellow/50"
              >
                <CardContent className="p-8 text-center">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-2xl ${method.color} ${method.hoverColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-mimicbox-yellow/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <h3 className="font-anton text-xl text-foreground mb-3 uppercase tracking-wide">
                    {method.title}
                  </h3>
                  <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                    {method.description}
                  </p>

                  {/* Action Button */}
                  <Button
                    asChild
                    className="bg-transparent border-2 border-mimicbox-yellow text-mimicbox-yellow hover:bg-mimicbox-yellow hover:text-mimicbox-black font-anton uppercase tracking-wider transition-all duration-300 group-hover:scale-105"
                  >
                    <a 
                      href={method.link}
                      target={method.id === 'email' ? '_self' : '_blank'}
                      rel={method.id === 'email' ? undefined : 'noopener noreferrer'}
                      className="flex items-center space-x-2"
                    >
                      <span>{method.action}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Creative Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-card via-card to-card border-mimicbox-yellow/30 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 229, 0, 0.3) 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}></div>
            
            <CardContent className="p-12 relative z-10">
              <h3 className="font-anton text-2xl sm:text-3xl text-foreground mb-4 uppercase tracking-wide">
                {t('contact.cta.title')}
              </h3>
              <p className="font-inter text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t('contact.cta.description')}
              </p>
              
              {/* Quick Contact Options */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-mimicbox-yellow text-mimicbox-black hover:bg-mimicbox-yellow/90 font-anton text-lg uppercase tracking-wider transition-all duration-300 hover:scale-105"
                >
                  <a href="mailto:mimicboxstudio@gmail.com" className="flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>{t('contact.cta.email')}</span>
                  </a>
                </Button>
                
                <span className="font-inter text-muted-foreground hidden sm:block">{t('contact.cta.or')}</span>
                
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-mimicbox-yellow text-mimicbox-yellow hover:bg-mimicbox-yellow hover:text-mimicbox-black font-anton text-lg uppercase tracking-wider transition-all duration-300 hover:scale-105"
                >
                  <a 
                    href="https://instagram.com/mimicboxstudio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>{t('contact.cta.instagram')}</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Response Time Info */}
        <div className="text-center mt-12">
          <p className="font-inter text-muted-foreground mb-2">
            {t('contact.response.text')}
          </p>
          <p className="font-anton text-mimicbox-yellow text-lg uppercase tracking-wide">
            {t('contact.response.time')}
          </p>
        </div>
      </div>
    </section>
  );
}