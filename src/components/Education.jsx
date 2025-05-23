import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import '/src/styles/Education.css';

function Education() {
  const educationData = [
    {
      institution: "Taita Taveta University",
      degree: "BSc of Business Information Technology",
      duration: "2022 – 2026",
      description: "Studying business processes, information systems, and technology integration for modern business solutions."
    }
  ];

  const certifications = [
    { name: "Web Development", issuer: "Ajira" },
    { name: "ICDL", issuer: "TTNP" },
    { name: "Networking", issuer: "Cisco online" },
    { name: "C+", issuer: "W3 school" }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background and certifications</p>
        </div>
        
        <div className="education-content">
          <div className="formal-education">
            <h3><FaGraduationCap /> Formal Education</h3>
            
            <div className="timeline">
              {educationData.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-content">
                    <h4>{item.institution}</h4>
                    <h5>{item.degree}</h5>
                    <div className="duration">{item.duration}</div>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="certifications">
            <h3><FaCertificate /> Certifications</h3>
            
            <ul className="cert-list">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <strong>{cert.name}</strong>
                  <span>{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;