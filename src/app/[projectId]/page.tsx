import { getProjectById } from '@/data/projects';
import { ProjectDetail } from '@/components/ProjectDetail';
import { LanguageProvider } from '@/contexts/LanguageContext';

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // await params se for Promise (não usual, mas vamos forçar tipo)
  const { projectId } = await Promise.resolve(params);

  const project = await getProjectById(projectId);

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <LanguageProvider>
      <ProjectDetail project={project} />
    </LanguageProvider>
  );
}
