'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, X, Calendar, User, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ImageLightbox } from './ImageLightBox'
import { useLanguage } from '../contexts/LanguageContext'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const router = useRouter()
  const { language, t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !lightboxOpen) {
        router.push('/') // Fecha o modal, vai para lista de portfólio
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [lightboxOpen, router])

  useEffect(() => {
    if (!lightboxOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      if (!lightboxOpen) {
        document.body.style.overflow = 'unset'
      }
    }
  }, [lightboxOpen])

  useEffect(() => {
    setCurrentImageIndex(0)
    setLightboxOpen(false)
  }, [project.id])

  const currentProjectIndex = projects.findIndex(p => p.id === project.id)
  const nextProject = projects[(currentProjectIndex + 1) % projects.length]
  const prevProject = projects[(currentProjectIndex - 1 + projects.length) % projects.length]

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex(prev => (prev === 0 ? project.gallery.length - 1 : prev - 1))
  }

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex(prev => (prev === project.gallery.length - 1 ? 0 : prev + 1))
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index)
  }

  const handleImageClick = () => {
    setLightboxImageIndex(currentImageIndex)
    setLightboxOpen(true)
  }

  const handleLightboxClose = () => {
    setLightboxOpen(false)
  }

  const handlePrevProject = () => {
    setCurrentImageIndex(0)
    setLightboxOpen(false)
    router.push(`/project?projectId=${prevProject.id}`)
  }

  const handleNextProject = () => {
    setCurrentImageIndex(0)
    setLightboxOpen(false)
    router.push(`/project?projectId=${nextProject.id}`)
  }

  return (
    <>
      <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
        <div className="w-full max-w-6xl max-h-[90vh] bg-card rounded-lg overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between z-10">
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => router.push('/')}
                variant="ghost"
                size="sm"
                className="text-foreground hover:text-mimicbox-yellow"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('project.back')}
              </Button>
              <div className="h-6 w-px bg-border"></div>
              <div>
                <h1 className="font-anton text-xl text-foreground uppercase tracking-wide">{project.title}</h1>
                <div className="flex items-center space-x-4 mt-1">
                  <Badge variant="outline" className="border-mimicbox-yellow text-mimicbox-yellow font-inter">
                    {project.client}
                  </Badge>
                  <span className="font-inter text-sm text-muted-foreground">{project.year}</span>
                </div>
              </div>
            </div>

            <Button
              onClick={() => router.push('/')}
              variant="ghost"
              size="sm"
              className="text-foreground hover:text-mimicbox-yellow"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Conteúdo principal */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Imagens e descrição */}
              <div className="lg:col-span-2">
                <div className="relative mb-6 group">
                  <div
                    className="cursor-pointer hover:opacity-90 transition-opacity duration-300"
                    onClick={handleImageClick}
                  >
                    <ImageWithFallback
                      src={project.gallery[currentImageIndex]}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full p-3 border border-white/20">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {project.gallery.length > 1 && (
                    <>
                      <Button
                        onClick={handlePrevImage}
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={handleNextImage}
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {project.gallery.map((_, index) => (
                          <button
                            key={index}
                            onClick={e => {
                              e.stopPropagation()
                              handleThumbnailClick(index)
                            }}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                              index === currentImageIndex
                                ? 'bg-mimicbox-yellow'
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {project.gallery.length > 1 && (
                  <div className="flex space-x-3 overflow-x-auto pb-2">
                    {project.gallery.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => handleThumbnailClick(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                          index === currentImageIndex ? 'border-mimicbox-yellow' : 'border-transparent hover:border-border'
                        }`}
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`${project.title} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                <Card className="bg-background border-border mt-6">
                  <CardHeader>
                    <CardTitle className="font-anton text-lg text-foreground uppercase tracking-wide">
                      {t('project.detailedDescription')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {project.detailedDescription[language].split('\n\n').map((paragraph, index) => (
                        <p key={index} className="font-inter text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-background border-border">
                  <CardContent className="p-6">
                    <h3 className="font-anton text-lg text-foreground mb-4 uppercase tracking-wide">
                      {t('project.details')}
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <User className="w-4 h-4 text-mimicbox-yellow" />
                        <div>
                          <p className="font-inter text-sm text-muted-foreground">{t('project.client')}</p>
                          <p className="font-inter text-foreground">{project.client}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-4 h-4 text-mimicbox-yellow" />
                        <div>
                          <p className="font-inter text-sm text-muted-foreground">{t('project.year')}</p>
                          <p className="font-foreground">{project.year}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-4 h-4 text-mimicbox-yellow" />
                        <div>
                          <p className="font-inter text-sm text-muted-foreground">{t('project.duration')}</p>
                          <p className="font-foreground">{project.duration}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Badge variant="outline" className="border-mimicbox-yellow text-mimicbox-yellow font-inter">
                        {project.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background border-border">
                  <CardContent className="p-6">
                    <h3 className="font-anton text-lg text-foreground mb-4 uppercase tracking-wide">
                      {t('project.description')}
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">{project.description}</p>
                  </CardContent>
                </Card>

                {project.technologies && project.technologies.length > 0 && (
                  <Card className="bg-background border-border">
                    <CardContent className="p-6">
                      <h3 className="font-anton text-lg text-foreground mb-4 uppercase tracking-wide">
                        {t('project.technologies')}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-mimicbox-yellow/20 text-mimicbox-yellow border-mimicbox-yellow/30 font-inter"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {project.team && project.team.length > 0 && (
                  <Card className="bg-background border-border">
                    <CardContent className="p-6">
                      <h3 className="font-anton text-lg text-foreground mb-4 uppercase tracking-wide">
                        {t('project.team')}
                      </h3>
                      <div className="space-y-2">
                        {project.team.map((member, index) => (
                          <p key={index} className="font-inter text-muted-foreground text-sm">
                            {member}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
              <Button
                onClick={handlePrevProject}
                variant="outline"
                className="border-border text-foreground hover:bg-mimicbox-yellow hover:text-mimicbox-black hover:border-mimicbox-yellow font-inter"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {prevProject.title}
              </Button>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground font-inter">
                <span>{currentProjectIndex + 1}</span>
                <span>/</span>
                <span>{projects.length}</span>
              </div>

              <Button
                onClick={handleNextProject}
                variant="outline"
                className="border-border text-foreground hover:bg-mimicbox-yellow hover:text-mimicbox-black hover:border-mimicbox-yellow font-inter"
              >
                {nextProject.title}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ImageLightbox
        images={project.gallery}
        initialIndex={lightboxImageIndex}
        isOpen={lightboxOpen}
        onClose={handleLightboxClose}
        projectTitle={project.title}
      />
    </>
  )
}
