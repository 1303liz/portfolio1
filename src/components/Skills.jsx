import { useState, useEffect, useRef } from 'react';
import { FaCode, FaServer, FaTools, FaUsers } from 'react-icons/fa';
import '/src/styles/Skills.css';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        skillsRef.current.classList.add('in-view');
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    const skillsSection = document.querySelector('#skills');
    observer.observe(skillsSection);
    skillsRef.current = skillsSection;

    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      title: "Frontend",
      icon: <FaCode />,
      skills: [
        { name: "HTML", level: 60 },
        { name: "CSS", level: 65 },
        { name: "React", level: 40 },
      ]
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: [
        { name: "PHP", level: 40 },
        { name: "python", level: 55 },
        { name: "Django", level: 60 },
      ]
    },
    {
      title: "Tools & Others",
      icon: <FaTools />,
      skills: [
        { name: "Git", level: 55 },
        { name: "VS Code", level: 70 },
        { name: "Django", level: 50 },
      ]
    },
    {
      title: "Soft Skills",
      icon: <FaUsers />,
      skills: [],
      softSkills: [
        "Communication",
        "Problem Solving",
        "Team Collaboration",
        "Time Management",
        "Adaptability",
        "Critical Thinking"
      ]
    }
  ];

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container skills-container">
        <div className="skills-header">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        <div className="skills-categories">
          {categories.map((category, index) => (
            <div 
              className="skills-category" 
              key={index} 
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              {category.skills && category.skills.length > 0 ? (
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div className="skill-item" key={skillIndex}>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ 
                            '--progress': `${skill.level}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="soft-skills-list">
                  {category.softSkills.map((skill, skillIndex) => (
                    <div className="soft-skill-item" key={skillIndex}>
                      {skill}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

