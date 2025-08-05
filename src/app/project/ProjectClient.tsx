'use client';

import { useSearchParams } from 'next/navigation';
import { projects, type Project } from '@/data/projects';
import { ProjectDetail } from '@/components/ProjectDetail';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function ProjectClient() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get('projectId');

  const project: Project | null =
    projectId ? projects.find(p => p.id === projectId) ?? null : null;

  if (!projectId) return <p>ID do projeto não foi informado.</p>;
  if (!project) return <p>Projeto não encontrado para o ID: {projectId}</p>;

  return (
    <LanguageProvider>
      <ProjectDetail project={project} />
    </LanguageProvider>
  );
}
