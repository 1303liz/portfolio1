import { useEffect } from 'react';
import Navbar from '/src/components/Navbar.jsx';
import Hero from '/src/components/Hero.jsx';
import About from '/src/components/About.jsx';
import Skills from '/src/components/Skills.jsx';
import Project from '/src/components/Project.jsx';
import Education from '/src/components/Education.jsx';
import Contact from '/src/components/Contact.jsx';
import Footer from '/src/components/Footer.jsx';

// Import styles
import '/src/styles/App.css';

function App() {
  useEffect(() => {
    // Check for saved theme preference and apply it
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    }
    
    // Add intersection observer to monitor sections for animations
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animate class to section headers and content when they come into view
          const header = entry.target.querySelector('.section-header');
          const content = entry.target.querySelector('.section-content');
          
          if (header) header.classList.add('animate');
          if (content) content.classList.add('animate');
          
          // Stop observing once animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

