import { ProjectDetail } from '@/components/ProjectDetail';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { getProjectById } from '@/data/projects';
import { notFound } from 'next/navigation';

type Params = Promise<{ projectId: string }>;

export default async function ProjectPage(props: { params: Params }) {
  const { projectId } = await props.params;            // ✅ await the params
  const project = await getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <LanguageProvider>
      <ProjectDetail project={project} />
    </LanguageProvider>
  );
}
