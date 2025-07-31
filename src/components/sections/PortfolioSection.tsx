'use client'
import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ExternalLink, Filter } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useLanguage } from '../../contexts/LanguageContext';
import { projects } from '../../data/projects';

type FilterType = 'all' | 'gameArt' | 'illustration' | 'environment' | 'concept';

interface PortfolioSectionProps {
  onProjectSelect: (projectId: string) => void;
}

export function PortfolioSection({ onProjectSelect }: PortfolioSectionProps) {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filters: { id: FilterType; label: string }[] = [
    { id: 'all', label: t('portfolio.filter.all') },
    { id: 'gameArt', label: t('portfolio.filter.gameArt') },
    { id: 'illustration', label: t('portfolio.filter.illustration') },
    { id: 'environment', label: t('portfolio.filter.environment') },
    { id: 'concept', label: t('portfolio.filter.concept') }
  ];

const filteredProjects =
  activeFilter === 'all'
    ? projects
    : projects.filter(project =>
        Array.isArray(project.category)
          ? project.category.includes(activeFilter)
          : project.category === activeFilter
      );

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-anton text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 uppercase tracking-wide">
            {t('portfolio.title')}
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`font-inter ${
                activeFilter === filter.id
                  ? 'bg-mimicbox-yellow text-mimicbox-black hover:bg-mimicbox-yellow/90'
                  : 'border-border text-foreground hover:bg-mimicbox-yellow hover:text-mimicbox-black'
              } transition-all duration-300`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-card border-border overflow-hidden hover-lift group cursor-pointer"
              onClick={() => onProjectSelect(project.id)}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button 
                    size="sm"
                    className="bg-mimicbox-yellow text-mimicbox-black hover:bg-mimicbox-yellow/90 font-inter font-medium"
                    onClick={(e) => {
                      e.stopPropagation();
                      onProjectSelect(project.id);
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('portfolio.viewProject')}
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-anton text-lg text-foreground uppercase tracking-wide">
                    {project.title}
                  </h3>
                  <Badge 
                    variant="secondary" 
                    className="bg-mimicbox-yellow/20 text-mimicbox-yellow border-mimicbox-yellow/30 font-inter"
                  >
                    {project.year}
                  </Badge>
                </div>
                <p className="font-inter text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge 
                    variant="outline" 
                    className="border-border text-muted-foreground hover:border-mimicbox-yellow hover:text-mimicbox-yellow transition-colors duration-300 font-inter"
                  >
                    {project.client}
                  </Badge>
                  <span className="font-inter text-xs text-muted-foreground">
                    {project.duration}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-mimicbox-yellow/10 to-transparent p-8 rounded-lg border border-mimicbox-yellow/20 max-w-2xl mx-auto">
            <h3 className="font-anton text-xl text-foreground mb-4 uppercase tracking-wide">
              {t('portfolio.cta.text')}
            </h3>
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-mimicbox-yellow text-mimicbox-black hover:bg-mimicbox-yellow/90 px-8 py-3 font-anton text-lg uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              {t('portfolio.cta.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}