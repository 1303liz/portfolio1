import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Contact.css'; // if you’re using a CSS file

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/YOUR_ID" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      
      <p>Email: mwaranganga@gmail.com</p>
      
      <div className="socials">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/1303LIZ" target="_blank" rel="noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://twitter.com/elizabethnganga" target="_blank" rel="noreferrer">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com/li_zbeth4387" target="_blank" rel="noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://facebook.com/Elizabeth Ng'ang'a" target="_blank" rel="noreferrer">
          <FaFacebook size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
