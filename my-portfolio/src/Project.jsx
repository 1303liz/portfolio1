// Project.jsx


const projectList = [  // ✅ Renamed to avoid conflict
  {
    name: "Portfolio Website",
    description: "Personal portfolio built using Html.",
    technologies: ", Html, CSS",
    github: "https://github.com/1303/portfolio",
    image: "/assets/portfolio.png"
  },
  
];

function Project() {
  return (
    <section id="Project">
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.name} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p><strong>Tech Used:</strong> {project.technologies}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">Live</a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      ))}
    </section>
  );
};

export default Project;

