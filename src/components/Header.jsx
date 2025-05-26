import React, { useState, useEffect } from "react";
import { Home, BarChart, User, Mail, Menu, X } from "lucide-react";
import "../App.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home size={18} /> },
    { name: "Projects", href: "#projects", icon: <BarChart size={18} /> },
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="logo">
          <div className="logo-icon">
            <span className="logo-text">DA</span>
          </div>
          <span className="logo-title">DataAnalyst</span>
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="navbar-link">
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
          <button className="navbar-button">
            <a href="https://docs.google.com/document/d/e/2PACX-1vRdMCF4hLg0D0iU8Nn1MedVJ3-yXWzKIO3Dw8ImKX5fWG78e-oSrsGVPhMott_D23akG-pe1yaPGKCn/pub" style={{
              textDecoration:"none", color:"white"
            }}>Resume</a>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
          <button className="mobile-nav-button">Resume</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
