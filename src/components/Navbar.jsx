import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/icon.png";

const Navbar = ({ onGetQuote = () => {} }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleGetQuote = () => {
    if (onGetQuote && typeof onGetQuote === "function") {
      onGetQuote();
    }
    setMobileMenuOpen(false);
  };

  // Helper function to check if route is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Helper function to get link classes
  const getLinkClasses = (path) => {
    return `transition-colors duration-300 ${
      isActive(path)
        ? "text-[#C6A35A] font-semibold"
        : "text-white hover:text-[#C6A35A]"
    }`;
  };

  return (
    <nav
      className={`bg-[#0F2A44] fixed w-full top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-2xl" : "shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-20 md:h-24">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          className="font-playfair text-xl md:text-2xl font-bold text-white flex items-center gap-2 md:gap-3"
        >
          <img
            src={logo}
            alt="Talon Cleaning Logo"
            className="h-16 md:h-24 w-auto object-contain"
          />
          {/* Company name - hidden on mobile */}
          <span className="tracking-wide hidden md:inline">
            TALON <span className="text-[#C6A35A]">CLEANING</span> SERVICES
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          <button onClick={() => navigate("/")} className={getLinkClasses("/")}>
            Home
          </button>
          <button
            onClick={() => navigate("/services")}
            className={getLinkClasses("/services")}
          >
            Services
          </button>
          <button
            onClick={() => navigate("/about")}
            className={getLinkClasses("/about")}
          >
            About Us
          </button>
          <button
            onClick={() => navigate("/contact")}
            className={getLinkClasses("/contact")}
          >
            Contact
          </button>

          <button
            onClick={() => navigate("/FAQs")}
            className={getLinkClasses("/FAQs")}
          >
            FAQs
          </button>

          <button
            onClick={handleGetQuote}
            className="bg-[#C6A35A] text-[#0F2A44] px-7 py-3 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get a Free Quote
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0F2A44] overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 border-t border-[#C6A35A]/20" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          <button
            onClick={() => {
              navigate("/");
              setMobileMenuOpen(false);
            }}
            className={`block w-full text-left transition-colors duration-300 py-2 ${
              isActive("/")
                ? "text-[#C6A35A] font-semibold"
                : "text-white hover:text-[#C6A35A]"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate("/services");
              setMobileMenuOpen(false);
            }}
            className={`block w-full text-left transition-colors duration-300 py-2 ${
              isActive("/services")
                ? "text-[#C6A35A] font-semibold"
                : "text-white hover:text-[#C6A35A]"
            }`}
          >
            Services
          </button>
          <button
            onClick={() => {
              navigate("/about");
              setMobileMenuOpen(false);
            }}
            className={`block w-full text-left transition-colors duration-300 py-2 ${
              isActive("/about")
                ? "text-[#C6A35A] font-semibold"
                : "text-white hover:text-[#C6A35A]"
            }`}
          >
            About
          </button>
          <button
            onClick={() => {
              navigate("/contact");
              setMobileMenuOpen(false);
            }}
            className={`block w-full text-left transition-colors duration-300 py-2 ${
              isActive("/contact")
                ? "text-[#C6A35A] font-semibold"
                : "text-white hover:text-[#C6A35A]"
            }`}
          >
            Contact
          </button>

          <button
            onClick={() => {
              navigate("/FAQs");
              setMobileMenuOpen(false);
            }}
            className={`block w-full text-left transition-colors duration-300 py-2 ${
              isActive("/FAQs")
                ? "text-[#C6A35A] font-semibold"
                : "text-white hover:text-[#C6A35A]"
            }`}
          >
            FAQs
          </button>

          <button
            onClick={handleGetQuote}
            className="block w-full bg-[#C6A35A] text-[#0F2A44] px-7 py-3 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 mt-4"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
