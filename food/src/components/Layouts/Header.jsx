import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";

const Header = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeValueOnScroll);
    return () => window.removeEventListener("scroll", changeValueOnScroll);
  }, []);

  const handleNavClick = (path, sectionId) => {
    if (location.pathname === path) {
      // If we're already on the target page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to the page then scroll to section
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => handleNavClick("/", "home-section")}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => handleNavClick("/", "about-section")}
              >
                About
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => handleNavClick("/", "menu-section")}
              >
                Our Menu
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => handleNavClick("/", "shop-section")}
              >
                Shop
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => handleNavClick("/", "blog-section")}
              >
                Blog
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => handleNavClick("/", "contact-section")}
              >
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;