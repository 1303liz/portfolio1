import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '/src/styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Elizabeth Ng'ang'a</h3>
            <p>Web Developer & UI/UX Enthusiast</p>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/1303LIZ" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://twitter.com/elizabethnganga" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:mwaranganga@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Elizabeth Ng'ang'a. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
