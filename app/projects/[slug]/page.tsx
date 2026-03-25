import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/sections/project-detail-view";
import { getProjectBySlug, PROJECTS } from "@/lib/projects";

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
