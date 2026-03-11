import "./StylesNavbar.scss";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const listNavbar = [
    {
      id: 1,
      name: "Home",
      sectionId: "home",
    },
    {
      id: 2,
      name: "About",
      sectionId: "about",
    },
    {
      id: 3,
      name: "Service",
      sectionId: "service",
    },
    {
      id: 4,
      name: "Portfolio",
      sectionId: "portfolio",
    },
    {
      id: 5,
      name: "Blog",
      sectionId: "home",
    },
    {
      id: 6,
      name: "Contact",
      sectionId: "contact",
    },
  ];

  // Intersection Observer para detectar sección visible
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar todas las secciones
    const sections = document.querySelectorAll("section, main");
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Scroll suave al hacer click en un link
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <figure className="navbar__logo">
        <img
          src="https://orido-react.vercel.app/img/logo/light.png"
          alt="logo"
        />
      </figure>

      <div className="navbar__menu">
        <ul>
          {listNavbar?.map((item) => (
            <li 
              key={item.id} 
              onClick={() => handleNavClick(item.sectionId)}
              style={{ borderBottom: activeSection === item.sectionId ? '2px solid #fff' : 'none' }}
            >
              <a href={`#${item.sectionId}`} onClick={(e) => e.preventDefault()}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar__contacto">
        <button onClick={() => handleNavClick("contact")}>Contacto</button>
      </div>
    </div>
  );
};

export default Navbar;
