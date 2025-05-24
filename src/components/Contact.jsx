import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook, FaPaperPlane, FaCheck } from 'react-icons/fa';
import '/src/styles/Contact.css';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate the form (simple example)
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill all required fields");
      setIsSubmitting(false);
      return;
    }
    
    // Simulate form submission with delay to show loading state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 500);
    }, 2000);
  };

  // Function to start a new message after success
  const startNewMessage = () => {
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-container">
          <div className="contact-info">
            <div>
              <h2 className="contact-title">Get In Touch</h2>
              <p className="contact-text">
                Have a project in mind or want to discuss potential opportunities? 
                Feel free to reach out—I'd love to hear from you!
              </p>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">
                <FaEnvelope />
              </div>
              <div className="method-content">
                <h3>Email</h3>
                <p>mwaranganga@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">
                <FaPhone />
              </div>
              <div className="method-content">
                <h3>Phone</h3>
                <p>+254 112734105</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="method-content">
                <h3>Location</h3>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://linkedin.com/in/elizabeth Nganga" target="_blank" rel="noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://github.com/1303LIZ" target="_blank" rel="noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://twitter.com/elizabethnganga" target="_blank" rel="noreferrer" className="social-link">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/li_zbeth4387" target="_blank" rel="noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://facebook.com/Elizabeth Ng'ang'a" target="_blank" rel="noreferrer" className="social-link">
                <FaFacebook />
              </a>
            </div>
          </div>
          
          <div className={`contact-form ${isSubmitting ? 'sending' : ''}`}>
            {isSubmitting && <div className="sending-spinner"></div>}
            
            <div className={`success-message ${isSuccess ? 'show' : ''}`}>
              <div className="success-icon">
                <FaCheck />
              </div>
              <h3 className="success-title">Message Sent!</h3>
              <p className="success-text">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <button 
                className="btn"
                onClick={startNewMessage}
                aria-label="Send another message"
              >
                Send Another Message
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="form-submit" disabled={isSubmitting}>
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
