import { FaLaptopCode } from 'react-icons/fa';
import { projectsData } from '../../data/portfolioData';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container section-inner">
        <div className="section-header">
          <h2 className="section-title about-title projects-heading">
            <FaLaptopCode /> My <span className="about-title-highlight">Projects</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
