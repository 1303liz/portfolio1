import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '/src/styles/project.css';
import portfolio from "../assets/portfolio.jpg";

const projectList = [
	{
		id: 1,
		name: 'Portfolio Website',
		description:
			'Personal portfolio built using React to showcase my projects and skills in web development.',
		technologies: ['HTML', 'CSS', ],
		github: 'https://github.com/1303liz/Portifolio',
		link: 'https://portfolio-demo.com',
		image: '/assets/portfolio.png',
	},
	{
		id: 2,
		name: 'E-commerce Platform',
		description:
			'A responsive e-commerce website with product listings, cart functionality, and user authentication.',
		technologies: ['CSS', 'Html'],
		github: 'https://github.com/username/ecommerce',
		link: 'https://ecommerce-demo.com',
		image: '/assets/ecommerce.jpg',
	},
	{
		id: 3,
		name: 'Task Manager',
		description:
			'A task management application that helps users organize their daily activities and boost productivity.',
		technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
		github: 'https://github.com/username/task-manager',
		link: 'https://task-manager-demo.com',
		image: '/assets/task-manager.png',
	},
];

function Project() {
	return (
		<section id="projects" className="projects">
			<div className="container">
				<div className="section-header">
					<h2 className="section-title">Projects</h2>
					<p className="section-subtitle">
						Explore some of my recent work and personal projects
					</p>
				</div>

				<div className="projects-grid">
					{projectList.map((project) => (
						<div key={project.id} className="project-card">
							<div className="project-image">
								<img src={project.image} alt={project.name} />
							</div>

							<div className="project-content">
								<div className="project-tags">
									{project.technologies.map((tech, index) => (
										<span key={index} className="project-tag">
											{tech}
										</span>
									))}
								</div>

								<h3 className="project-title">{project.name}</h3>
								<p className="project-description">
									{project.description}
								</p>

								<div className="project-links">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="project-link"
									>
										<FaGithub /> GitHub
									</a>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="project-link"
									>
										<FaExternalLinkAlt /> Live Demo
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Project;

