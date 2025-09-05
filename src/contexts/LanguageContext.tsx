'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt' ;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.title': 'Criamos arte que transforma jogos',
    'hero.subtitle': 'Especializados em ilustração digital, concept art e design de interfaces para a indústria de jogos.',
    'hero.cta': 'Ver Portfolio',
    
    // Portfolio Section
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Explore nossos projetos mais recentes e descubra como transformamos ideias em experiências visuais memoráveis.',
    'portfolio.filter.all': 'Todos',
    'portfolio.filter.gameArt': 'Game Art',
    'portfolio.filter.illustration': 'Ilustração',
    'portfolio.filter.environment': 'Ambiente',
    'portfolio.filter.concept': 'Concept Art',
    'portfolio.viewProject': 'Ver Projeto',
    'portfolio.cta.text': 'Interessado em trabalhar conosco?',
    'portfolio.cta.button': 'Fale Conosco',
    
    // About Section
    'about.title': 'Sobre Nós',
    'about.subtitle': 'Conheça a história por trás do Mimicbox Studio e nossa paixão por criar arte que conecta jogadores aos mundos digitais.',
    'about.history.title': 'Nossa História',
    'about.history.p1': 'Fundado em 2024, o Mimicbox Studio nasceu de uma paixão compartilhada por games e arte digital. Nossa jornada começou quando Pedro e Hygor se conheceram na faculdade em 2018 e descobriram uma sinergia criativa única.',
    'about.history.p2': 'Desde então, colaboramos em diversos projetos academicos na área do design gráfico e posteriormente na área de arte para jogos. Nos especializamos em criar experiências visuais que não apenas impressionam, mas também contam histórias. Trabalhamos com desenvolvedores independentes e estúdios consolidados, sempre com foco em qualidade e inovação.',
    'about.partnership': 'Parceria Criativa',
    'about.pedro': 'Concept Artist & Ilustrador',
    'about.hygor': 'Concept Artist & Ilustrador',
    'about.clients.title': 'Nossos Clientes',
    'about.clients.subtitle': 'Temos o privilégio de trabalhar com empresas incríveis ao redor do mundo.',
    'about.stats.projects': 'Projetos Concluídos',
    'about.stats.clients': 'Clientes Satisfeitos',
    'about.stats.experience': 'Anos de Experiência',
    
    // Contact Section
    'contact.title': 'Vamos Trabalhar Juntos',
    'contact.subtitle': 'Pronto para dar vida às suas ideias? Escolha a melhor forma de entrar em contato e vamos discutir seu próximo projeto.',
    
    // Contact Methods
    'contact.email.description': 'Para discussões detalhadas sobre projetos, orçamentos e propostas comerciais.',
    'contact.email.action': 'Enviar Email',
    'contact.instagram.description': 'Acompanhe nosso processo criativo e trabalhos em andamento.',
    'contact.instagram.action': 'Seguir no Instagram',
    'contact.artstation.description': 'Explore nosso portfólio completo e projetos finalizados.',
    'contact.artstation.action': 'Ver ArtStation',
    
    // Contact CTA
    'contact.cta.title': 'Pronto para começar seu projeto?',
    'contact.cta.description': 'Entre em contato conosco hoje mesmo e vamos transformar sua visão em realidade através da arte digital.',
    'contact.cta.email': 'Enviar Email',
    'contact.cta.or': 'ou',
    'contact.cta.instagram': 'Instagram',
    
    // Response Time
    'contact.response.text': 'Tempo de resposta médio:',
    'contact.response.time': '24-48 horas',
    
    // Project Detail
    'project.back': 'Voltar',
    'project.details': 'Detalhes do Projeto',
    'project.description': 'Descrição',
    'project.detailedDescription': 'Sobre o Projeto',
    'project.technologies': 'Tecnologias',
    'project.team': 'Equipe',
    'project.client': 'Cliente',
    'project.year': 'Ano',
    'project.duration': 'Duração',
    'project.challenge': 'Desafio',
    'project.solution': 'Solução',
    'project.overview': 'Visão Geral',
    'project.process': 'Processo',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.portfolio': 'Portfolio',
    'footer.about': 'Sobre',
    'footer.contact': 'Contato',  
    // Form Messages
    'form.success': 'Mensagem enviada com sucesso!',
    'form.error': 'Erro ao enviar mensagem. Tente novamente.',
    'form.required': 'Este campo é obrigatório.',
    'form.email.invalid': 'Por favor, insira um email válido.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'We create art that transforms games',
    'hero.subtitle': 'Specialized in digital illustration, concept art and interface design for the gaming industry.',
    'hero.cta': 'View Portfolio',
    
    // Portfolio Section
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Explore our latest projects and discover how we transform ideas into memorable visual experiences.',
    'portfolio.filter.all': 'All',
    'portfolio.filter.gameArt': 'Game Art',
    'portfolio.filter.illustration': 'Illustration',
    'portfolio.filter.environment': 'Environment',
    'portfolio.filter.concept': 'Concept Art',
    'portfolio.viewProject': 'View Project',
    'portfolio.cta.text': 'Interested in working with us?',
    'portfolio.cta.button': 'Get In Touch',
    
    // About Section
    'about.title': 'About Us',
    'about.subtitle': 'Learn the story behind Mimicbox Studio and our passion for creating art that connects players to digital worlds.',
    'about.history.title': 'Our Story',
    'about.history.p1': 'Founded in 2024, Mimicbox Studio was born from a shared passion for games and digital art. Our journey began when Pedro and Hygor met in college in 2018 and discovered a unique creative synergy.',
    'about.history.p2': 'Since then, we have collaborated on several academic projects in the field of graphic design and later transitioned into game art. We specialize in creating visual experiences that not only impress but also tell stories. We work with both independent developers and established studios, always with a focus on quality and innovation.',
    'about.partnership': 'Creative Partnership',
    'about.pedro': 'Concept Artist & Illustrator',
    'about.hygor': 'Art Director & UI/UX Designer',
    'about.clients.title': 'Our Clients',
    'about.clients.subtitle': 'We have the privilege of working with amazing companies around the world.',
    'about.stats.projects': 'Completed Projects',
    'about.stats.clients': 'Satisfied Clients',
    'about.stats.experience': 'Years of Experience',
    
    // Contact Section
    'contact.title': 'Let\'s Work Together',
    'contact.subtitle': 'Ready to bring your ideas to life? Choose the best way to get in touch and let\'s discuss your next project.',
    
    // Contact Methods
    'contact.email.description': 'For detailed project discussions, budgets and commercial proposals.',
    'contact.email.action': 'Send Email',
    'contact.instagram.description': 'Follow our creative process and work in progress.',
    'contact.instagram.action': 'Follow on Instagram',
    'contact.artstation.description': 'Explore our complete portfolio and finished projects.',
    'contact.artstation.action': 'View ArtStation',
    
    // Contact CTA
    'contact.cta.title': 'Ready to start your project?',
    'contact.cta.description': 'Contact us today and let\'s transform your vision into reality through digital art.',
    'contact.cta.email': 'Send Email',
    'contact.cta.or': 'or',
    'contact.cta.instagram': 'Instagram',
    
    // Response Time
    'contact.response.text': 'Average response time:',
    'contact.response.time': '24-48 hours',
    
    // Project Detail
    'project.back': 'Back',
    'project.details': 'Project Details',
    'project.description': 'Description',
    'project.detailedDescription': 'About the Project',
    'project.technologies': 'Technologies',
    'project.team': 'Team',
    'project.client': 'Client',
    'project.year': 'Year',
    'project.duration': 'Duration',
    'project.challenge': 'Challenge',
    'project.solution': 'Solution',
    'project.overview': 'Overview',
    'project.process': 'Process',
    
    // Footer
    'footer.description': 'Mimicbox Studio is a digital art studio specializing in game art, illustration, and concept design. We create immersive visual experiences that connect players to the worlds we imagine.',
    'footer.made.with': 'Made with',
    'footer.made.and': 'and',
    'footer.made.by': 'by Mimicbox Studio',
    'footer.rights': 'All rights reserved.',
    'footer.portfolio': 'Portfolio',
    'footer.about': 'About',
    'footer.contact': 'Contact',
    'footer.service': 'Services',
    'footer.service1': 'Game Art',
    'footer.service2': 'Illustration',
    'footer.service3': 'Environment',
    'footer.service4': 'Concept Art',
    'footer.service5': '3D Art',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Form Messages
    'form.success': 'Message sent successfully!',
    'form.error': 'Error sending message. Please try again.',
    'form.required': 'This field is required.',
    'form.email.invalid': 'Please enter a valid email.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}