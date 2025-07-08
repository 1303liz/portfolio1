import { useState, useEffect } from 'react';
import { FaDownload, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import elizab from "/src/assets/elizab.jpg";
import "/src/styles/theme.css";
import "/src/styles/Hero.css";

const Hero = () => {
  const resumeUrl = "/Resume.docx";
  const [isVisible, setIsVisible] = useState(false);
  
  const techBadges = [
    "PHP", "Laravel", "HTML", "CSS", "React", "Django"
  ];
  
  // Animation on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroImage = document.querySelector('.hero-image');
      const heroContent = document.querySelector('.hero-content');
      const scrollIndicator = document.querySelector('.scroll-indicator');
      
      if (heroImage && heroContent && scrollIndicator) {
        // Adjust these values for different parallax intensities
        heroImage.style.transform = `translateY(${scrollPosition * 0.05}px)`;
        heroContent.style.transform = `translateY(${scrollPosition * 0.02}px)`;
        
        // Fade out scroll indicator as user scrolls down
        scrollIndicator.style.opacity = 1 - scrollPosition * 0.005;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      
      <div className="container hero-container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-text-content">
            <span className="hero-greeting">Hello, I'm</span>
            <h1 className="hero-title">Elizabeth Ng'ang'a</h1>
            <p className="hero-subtitle">Web Developer & UI/UX Enthusiast</p>
            
            <p className="hero-description">
              I craft responsive websites with modern technologies that help businesses achieve their goals. 
              My focus is on creating clean, user-friendly experiences with robust functionality.
            </p>
            
            <div className="hero-tech-container">
              <span className="tech-label">Tech Stack:</span>
              <div className="tech-badges">
                {techBadges.map((tech, index) => (
                  <span 
                    key={index} 
                    className="tech-badge"
                    style={{animationDelay: `${0.1 * index}s`}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View Projects <FaArrowRight />
              </a>
              <a href={resumeUrl} className="btn btn-outline" download>
                <FaDownload /> Download CV
              </a>
            </div>
          </div>
        </div>
        
        <div className={`hero-image-container ${isVisible ? 'visible' : ''}`}>
          <div className="hero-image">
            <img src={elizab} alt="Elizabeth Ng'ang'a" />
          </div>
          <div className="hero-image-decoration"></div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <FaChevronDown />
      </div>
    </section>
  );
};

export default Hero;



