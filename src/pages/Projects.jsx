import { projects } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";

function Projects() {
  return (
    <div className="projects-container">
      {projects.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}
    </div>
  );
}

export default Projects;