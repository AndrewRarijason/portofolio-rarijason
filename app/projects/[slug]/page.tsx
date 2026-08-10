import { notFound } from "next/navigation";
import ProjectDetails from "../../../components/Project_details";
import { projectsData } from "../../../data/projectsData";

export function generateStaticParams() {
  return projectsData.map(project => ({
    slug: project.slug
  }));
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const project = projectsData.find(p => p.slug === resolvedParams.slug);
  if (!project) return notFound();

  return (
    <ProjectDetails
      title={project.title}
      description_gm={project.description_gm}
      stack={project.stack}
      imagebg={project.imagebg}
      images={project.images}
      github={project.github}
      backUrl="/#projects"
    />
  );
}