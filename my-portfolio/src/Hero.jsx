import elizab from "./assets/elizab.jpg";
import "./Hero.css";

const Hero = () => {
  const resumeUrl = "/Resume.docx";
  return (
    <section className="hero">
      <div className="profile-container">
        <img src={elizab} alt="Elizabeth" className="profile-photo" />
        <div className="profile-info">
          <h1>Elizabeth Ng'ang'a</h1>
          <p>
            I am an upcoming Web Developer with knowledge in PHP (Laravel), HTML, and CSS.
            I am currently learning React and aspire to become a Frontend Developer and later advance to a fullstack developer.
          </p>
          <div className="hero-buttons">
            <a href="#projects">View My Work</a>
            <a href={resumeUrl} download>Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


  
    