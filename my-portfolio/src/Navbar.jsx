import { useState, useEffect } from "react";
import "./Navbar.css";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="nav-container">
      {/* Mobile Menu Button */}
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {["home", "about", "skills", "projects", "education", "contact"].map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className={activeSection === link ? "active" : ""}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
