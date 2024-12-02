import ShadCard from "@/components/Shadcard";
import projects from "@/data/projects.json"; 

export interface Project {
  id: number;
  image: string;
  topic: string;
  description: string;
  link: string;
}

export default function Home() {
  return (
    <div className="flex flex-wrap gap-8 justify-center p-8">
      {projects.projects.map((project: Project) => (
        <ShadCard
          key={project.id}
          image={project.image}
          topic={project.topic}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
}
