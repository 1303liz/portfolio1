import { startTransition } from "react";
import elizab from "/src/assets/elizab.jpg";
import '/src/styles/About.css';

function About() {
  const stats = [
    { number: "1+", label: "Years Coding" },
    { number: "5+", label: "Projects" },
    { number: "5+", label: "Tech Stack" }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={elizab} alt="Elizabeth Ng'ang'a" />
        </div>
        
        <div className="about-content">
          <span className="section-subtitle">About Me</span>
          <h2 className="about-title">A passionate developer focused on crafting clean web experiences</h2>
          
          <div className="about-text">
            <p>Hello! I'm a passionate web developer with a growing background in Django and React. I enjoy building interactive and user-friendly web applications that solve real problems.</p>
            
            <p>Currently pursuing a Bachelor's degree in Business Information Technology at Taita Taveta University, I'm dedicated to continuously expanding my skills and knowledge in the ever-evolving tech landscape.</p>
            
            <p>My goal is to become a full-stack developer and contribute to impactful projects. I'm also passionate about empowering young girls to enter the tech industry and hope to start initiatives in that direction.</p>
          </div>
          
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
