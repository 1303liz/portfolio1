import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '/src/styles/project.css';
import portfolio from "../assets/portfolio.jpg";
import project from "../assets/project.png";
import news from "../assets/news.png";

const projectList = [
	{
		id: 1,
		name: 'portfolio',
		description:
			'Personal portfolio built using React to showcase my projects and skills in web development.',
		technologies: ['HTML', 'CSS', 'php'],
		github: 'https://github.com/1303liz/Portifolio',
		image: portfolio,
		
	},
	{
		id: 2,
		name: 'user_casemagment',
		description:
			'This is a simple Django-based user management system that allows users to register, log in, view and edit their profiles, and change passwords. It also includes a mock verification step and an admin panel where superusers can manage all registered users. The project follows clean Git practices, includes unit tests for key features, and is organized for easy setup and deployment.',
		technologies: ['CSS', 'HTML' , 'Django'],
		github: 'https://github.com/1303liz/managment',
		link: 'https://managment-production.up.railway.app/',
		image: project, // Now correctly imported
	},
	{
		id: 3,
		name: 'News and media Website',
		description:
			'News and Media Portal is a Django-based web application designed to provide a platform for publishing and managing news articles, sports updates, and events. The application features a responsive design, user authentication system, and email verification for account security. ',
		technologies: ['Django', 'Html', 'CSS'],
		github: 'https://github.com/1303liz/News-and-media-beta',
		image: news,
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

