import { notFound } from "next/navigation";
import { PROJECTS, getProjectBySlug } from "@/lib/projects";
import { ProjectDetailView } from "@/components/sections/project-detail-view";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
