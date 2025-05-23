import { useState, useEffect, useRef } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "/src/styles/Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const lastScrollY = useRef(0);

  // Initialize dark mode from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-theme");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark-theme");
    }
  }, []);

  // Handle scroll behavior and active section
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction and toggle navbar visibility
      if (currentScrollY > lastScrollY.current + 20) {
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY.current - 10 || currentScrollY <= 0) {
        setIsNavVisible(true);
      }

      lastScrollY.current = currentScrollY;

      // Find active section
      const sections = document.querySelectorAll("section[id]");
      let found = false;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (currentScrollY >= sectionTop && currentScrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
          found = true;
        }
      });
      
      if (!found && currentScrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu and prevent body scroll when menu is open
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className={`${!isNavVisible ? 'scrolled hidden' : ''} 
                     ${lastScrollY.current > 50 ? 'scrolled visible' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo">
          Elizabeth<span className="logo-dot">.</span>
        </a>

        <div className="navbar-right">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`navbar-backdrop ${isMenuOpen ? 'active' : ''}`} onClick={handleLinkClick}></div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={handleLinkClick}
                className={activeSection === section ? "active" : ""}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
